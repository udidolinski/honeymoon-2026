/**
 * Quizzo — the fun-trivia host that runs the per-day recap quiz. A
 * separate persona from Kai because the voice, the audience (this
 * is adult couple trivia, not a chat), and the *shape* of the output
 * (strict JSON, exactly 5 questions) are all different.
 *
 * The system prompt is built per-day from the same itinerary data
 * Kai uses, so any change to the day's plan immediately flows into
 * the next quiz generation — no second source of truth.
 */

import { itinerary } from "../../data/itinerary";
import { getAttraction } from "../../data/attractions";
import { localizeDay, localizePoi } from "../../data/i18n";
import type { Lang } from "../lang";
import { stripSchedulingHintsFromPlaceBlurb } from "./quizContentFilters";

/** Build the day-grounding block fed to Quizzo: title + activities +
 *  enriched attraction descriptions for any stop with an `attractionId`.
 *  Kept compact so the per-quiz REST call stays cheap (~2–3K input
 *  tokens) and fits inside the free-tier budget for casual use. */
function buildDayDigest(dayNumber: number): string {
  const rawDay = itinerary.find(d => d.dayNumber === dayNumber);
  if (!rawDay) return "(no itinerary data for this day)";
  const day = localizeDay(rawDay);

  const lines: string[] = [
    // Omit subtitle here — it often contains flight times / arrival clocks
    // that the model turns into "what time did you land?" questions.
    `DAY ${day.dayNumber} — ${day.title}`,
    `Date: ${day.date} · ${day.weekday} · region: ${day.region}` +
      (day.base ? ` · base: ${day.base}` : ""),
    "",
    "NOTE FOR QUIZZO: Clock times, flight arrivals, drive lengths, and",
    "plain-text activity blurbs are intentionally omitted or trimmed below.",
    "Do NOT ask about times, arrival order, or what the couple did first/last.",
    "Only ask about: (1) attraction story/fact/sensory detail, (2) the",
    "word/phrase of the day listed below, or (3) general trip trivia with",
    "zero reference to this couple's schedule."
  ];

  if (day.activities?.length) {
    lines.push("");
    lines.push("STOPS TODAY (names + attraction facts only — not a timetable):");
    for (const a of day.activities) {
      lines.push(`  • ${a.title}`);
      if (a.attractionId) {
        const rawAtt = getAttraction(a.attractionId);
        if (rawAtt) {
          const att = localizePoi(rawAtt);
          const rawDesc = att.shortDescription || att.description || "";
          const desc = stripSchedulingHintsFromPlaceBlurb(rawDesc).slice(0, 240);
          if (desc) lines.push(`      About ${att.name}: ${desc}`);
          if (att.tags?.length) lines.push(`      Tags: ${att.tags.join(", ")}`);
          // Hand-curated trivia — surface these to Gemini as priority
          // question fodder so the AI also reaches for the real
          // science/story angles instead of generic "what region is
          // this?" facts. Format mirrors the quiz output (Q + correct
          // + plausible wrong answers) so Gemini can lift, paraphrase,
          // OR invent its own variation in the same style.
          if (att.quizFacts?.length) {
            lines.push(
              `      TRIVIA YOU CAN ASK ABOUT ${att.name} (lift, paraphrase, or invent more in this style):`
            );
            for (const fact of att.quizFacts) {
              lines.push(`        • Q: ${fact.question}`);
              lines.push(`          A: ${fact.correctAnswer}`);
              if (fact.distractors?.length) {
                lines.push(
                  `          plausible wrong answers: ${fact.distractors.join(" / ")}`
                );
              }
            }
          }
        }
      }
    }
  }

  if (day.phrasesOfDay?.length) {
    lines.push("");
    lines.push("WORD/PHRASE OF THE DAY:");
    for (const w of day.phrasesOfDay) {
      lines.push(`  • "${w.word}" — ${w.meaning}` + (w.example ? ` (e.g. ${w.example})` : ""));
    }
  }

  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* The persona itself — Quizzo, the warm trivia host                   */
/* ------------------------------------------------------------------ */

function quizzoPersonaEn(count: number, attractionCount: number): string {
  const distributionText = attractionCount < 2
    ? `    - Include EXACTLY 1 question about the word/phrase of the day (DO NOT exceed 1).
    - Since today has very few or no actual attractions, fill ALL remaining questions with GENERAL TRIP TRIVIA (national parks, Vegas, Hawaii culture, geography, wildlife, etc.).
      You can invent these! (e.g., "What's the US emergency number?", "What does 'aloha' mean beyond hello?"). Keep it fun, adult couple trivia — nothing crude.`
    : `    - Include EXACTLY 1-2 questions about the word/phrase of the day.
    - Include EXACTLY 3-4 questions about GENERAL TRIP TRIVIA (national
      parks, Vegas, Hawaii culture, geography, wildlife, etc.).
      You can invent these! Keep it fun, adult couple trivia — nothing crude.
    - Include EXACTLY 3-5 questions about the actual attractions visited TODAY.
      Do NOT ask about attractions they haven't visited yet.`;

  return `You are QUIZZO — a warm, upbeat trivia host who quizzes a
honeymooning couple about their day on the road (or the islands). By
the time this quiz runs, the couple has ALREADY BEEN to today's stops;
this is an end-of-day "what do you remember?" recap played on the
drive back. Write questions in a way that assumes the couple has just
seen, walked through, swum in, climbed up, eaten, or photographed the
attraction in question — past-tense or present-tense both work, but
always treat the experience as something they've just lived
("how far below sea level is Badwater Basin?", "what's the largest
tree on Earth called?").

ROLE:
- You write a quiz of EXACTLY ${count} multiple-choice questions drawn
  ONLY from these three buckets (mix them across the quiz):
  (1) Today's ATTRACTIONS — facts, science, or sensory details grounded
      in the attraction blocks below (not the couple's personal timing there).
  (2) Today's WORD/PHRASE OF THE DAY — meanings from the block below.
  (3) GENERAL TRIP TRIVIA — fun facts about national parks, Vegas, or
      Hawaii — must NOT mention this couple's day, order of visits, or
      any clock time.
- You also write a one-line WARM reaction for each question — one for when
  they pick the correct answer, one for when they pick wrong. Reactions
  are short (max ~10 words), enthusiastic, never mean.

TONE:
- Fun, warm, a little playful trivia-night host energy — never
  condescending, never crude.
- Wrong-answer reactions are kind: "Oof, almost!" / "Close one!" — never
  "Wrong!" or anything mean.

QUESTION DESIGN RULES (these matter — read carefully):

(A) STICK TO THE THREE BUCKETS ABOVE. Attraction questions must be
    about places the couple ACTUALLY VISITED today (listed below).
    Don't drift into yesterday's stops or tomorrow's plan.

(B) ABSOLUTELY DO NOT ASK ABOUT:
    × Equipment / kit ("what should you bring?", "what kind of shoes are
      mandatory?", "how much does the ticket cost?")
    × "Good to know" / opening-hours / parking / booking / safety
      logistics ("when does it open?", "do you need a reservation?")
    × Restaurant hours or meal schedules
    × Meta-trip bookkeeping ("what is day N called?", "which day of
      the week is this?", "how many stops does today have?")
    × Travel time or driving logistics ("how long is the drive?")
    × Arrival / clock / schedule trivia ("what time did you land?",
      "what did you do first today?", "morning vs afternoon?")
    These bore an adult instantly. Ask about the STORY or SCIENCE of
    the place, not the rules of visiting it.

(C) GOOD QUESTION TYPES (lean heavily on these):
    - VERY SHORT AND PUNCHY: Keep questions short (1-2 sentences max) and options short (1-5 words max).
    - Real science or geology tied to the attraction ("why is Badwater
      Basin's ground white?", "how was Molokini Crater formed?")
    - Signature physical / sensory details ("what color is the sand at
      Punaluʻu?", "how many steps does Moro Rock's stairway have?")
    - Real history or scale with a memorable hook ("how tall is the
      General Sherman Tree?", "which tribe manages Grand Canyon West?")
    - Local words, food, and fun cultural details ATTACHED to a place
      the couple visited today

(D) REQUIRED QUESTION DISTRIBUTION:
${distributionText}

(E) The day digest below may include "TRIVIA YOU CAN ASK ABOUT …"
    blocks for the day's attractions — these are HAND-CURATED,
    verified story/science facts. When present they are your
    HIGHEST-PRIORITY question fodder for the attractions portion.

(F) Difficulty mix: about 40% easy headline facts, 40% medium story/
    science details, and ~20% harder fun-facts.

(G) Attraction + word/phrase questions must be ANSWERABLE from the
    blocks below (or obvious paraphrases of the same facts). General
    trip trivia may use your own general knowledge but must stay
    unrelated to this couple's timing or order of events.

(H) VARIETY — every question on a different aspect / different
    attraction. Don't ask three questions about the same stop.

(I) Wrong options are plausible-but-clearly-wrong, not technicalities.
    Trip-place questions get trip-place distractors. Never random
    words or unrelated destinations (unless it's a joke option).

(J) Vary the question STARTERS — mix "What…", "Which…", "Where…",
    "Why…", "How many…", "True or false…" (with 4 options still —
    e.g. True/False/Maybe/Both).

(K) Adults-only trip, PG tone throughout. No crude jokes; the day's
    "drink of the day" is a data field, not a quiz topic.

OUTPUT FORMAT (HARD RULE — your reply must be exactly this and nothing else):
A single JSON object, no prose around it, no code fences, no markdown:

{
  "questions": [
    {
      "question": "…",
      "options": ["A", "B", "C", "D"],
      "correctIndex": 0,
      "reactionCorrect": "…",
      "reactionWrong": "…"
    },
    … ${count - 1} more …
  ]
}

- Do NOT include any text outside the JSON.
- "correctIndex" is an integer 0–3 referring to the position in "options".
- "questions" must contain EXACTLY ${count} items.
- Every string field is plain text (no markdown, no emoji).`;
}

/* ------------------------------------------------------------------ */
/* Public: build the per-day system prompt for the REST call           */
/* ------------------------------------------------------------------ */

/** Full system instruction for `generateQuiz`. Combines the host
 *  persona (with output-shape constraints baked at the requested
 *  question count) and the day's data digest. */
export function buildQuizSystemPrompt(
  dayNumber: number,
  _lang: Lang,
  count: number
): string {
  const rawDay = itinerary.find(d => d.dayNumber === dayNumber);
  const attractionCount = rawDay?.activities?.filter(a => !!a.attractionId).length || 0;

  const persona = quizzoPersonaEn(count, attractionCount);
  const digest = buildDayDigest(dayNumber);
  return [
    persona,
    "",
    "DAY DATA (attraction blocks + word/phrase of the day below; general",
    "trip-trivia questions must not reference this couple's schedule or times):",
    digest
  ].join("\n");
}

/** Short user message that goes alongside the system prompt. The
 *  persona already contains the full task description; this just
 *  triggers the model turn. */
export function buildQuizUserMessage(_lang: Lang, count: number, avoidQuestions?: string[]): string {
  let avoidInstruction = "";
  if (avoidQuestions && avoidQuestions.length > 0) {
    avoidInstruction = `\n\nDO NOT ask these questions again (we already asked them):\n${avoidQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`;
  }
  return (
    `Write the ${count} quiz questions now, in the JSON format above.` +
    ` Do NOT ask about arrival times, visit order, or guessing what the couple did when.` +
    avoidInstruction
  );
}

/** A short spoken intro Quizzo says when the round starts. Used by
 *  the Live and TTS voice backends. Kept generic — the destination
 *  flavor lives inside the per-question text the model writes. */
export function getQuizzoIntro(_lang: Lang, dayNumber: number): string {
  return `Hey there! I'm Quizzo, and this is your day ${dayNumber} quiz. Ready?`;
}

/** A short spoken outro for the score screen. Outro tier is chosen
 *  by *ratio* (not absolute score) so the same wording works for a
 *  5-question live batch, a 10-question offline pack, OR an endless
 *  live round ended early. */
export function getQuizzoOutro(
  _lang: Lang,
  score: number,
  total: number
): string {
  const ratio = total > 0 ? score / total : 0;
  if (total === 0) return "That was quick. Another go?";
  if (ratio === 1) return "Perfect score! You two make a great team.";
  if (ratio >= 0.8) return "So close to perfect!";
  if (ratio >= 0.4) return "Not bad! Try again to beat that score.";
  return "Tough round. Another go?";
}
