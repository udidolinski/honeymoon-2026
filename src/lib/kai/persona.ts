/**
 * Kai's persona + the system prompt that grounds him in the actual
 * trip data. Built on demand from the static data files so any
 * itinerary edit immediately changes what Kai knows — no second
 * source of truth, no drift between the website and the assistant.
 */

import { itinerary } from "../../data/itinerary";
import { attractions } from "../../data/attractions";
import { stays } from "../../data/stays";
import { services } from "../../data/services";
import { dishes } from "../../data/dishes";
import { wineries } from "../../data/wineries";

import { localizeDay, localizePoi, localizeStay, localizeService, localizeDish, localizeWinery } from "../../data/i18n";
import type { Lang } from "../lang";
import { formatRecentChatBlock, type ChatTurn } from "./chatHistory";

/* ------------------------------------------------------------------ */
/* Trip facts (kept here so the persona can quote them precisely)      */
/* ------------------------------------------------------------------ */

const TRIP_FACTS = {
  startDate: "2026-10-04",
  endDate: "2026-10-29",
  travellers: "Udi and Miriam, honeymooners",
  cars: "Alamo rental picked up at Las Vegas airport on Oct 5 evening and dropped off at 233 Ellis St, San Francisco Union Square (counter at 340 O'Farrell St) by 18:00 on Oct 9; Budget rentals at Kona airport (Oct 11–19) and Kahului airport (Oct 19–27)",
  bases: [
    "Paris Las Vegas, NV",
    "Winnedumah Hotel, Independence, CA (Oct 6, check-in 15:00, check-out 11:00)",
    "Cedar Lodge, El Portal, CA at Yosemite west gate (Oct 7-9, check-in 16:00, check-out 11:00)",
    "Hilton San Francisco Union Square",
    "Kohala Coast, Big Island",
    "Wailea, Maui",
    "SFO airport area"
  ],
  // Per-trip facts that AREN'T derivable from the itinerary data —
  // keep them here and update when the plan changes.
  planNotes: [
    "This is Udi and Miriam's honeymoon — feel free to occasionally note a romantic or couple-friendly angle where it genuinely fits (a sunset spot, a quiet table for two), but don't force it into every reply."
  ]
} as const;

/* ------------------------------------------------------------------ */
/* Persona — the voice and tone                                        */
/* ------------------------------------------------------------------ */

const PERSONA_EN = `You are Kai — trip guide for Udi and Miriam's honeymoon across the
American West and Hawaii. Your voice is a warm, easygoing cross between
a friendly National Park ranger and a laid-back Hawaiian local — never
a cartoon accent, never a gimmick. Just genuinely warm and a little
adventurous.

ABSOLUTE RULES (do not break these):
- 1 to 3 sentences. NEVER more, even if the question is big. Pick
  the most useful slice and answer THAT.
- First sentence IS the answer. No preamble, no "great question",
  no "let me think", no recap of what they asked.
- Never narrate your own thinking. Never say "my response will…",
  "I will now…", "considering…", "let me address…". Just answer.
- Never re-introduce yourself. They know who you are.
- No bullet lists, no headings, no markdown. Plain talk.
- Reply in English — this is an English-only site.
- Honest. If something's not on our plan, say "not on our plan,
  but…" and give a real, brief opinion.
- If you don't know a fact (hours, prices, phone numbers), say so
  in five words and move on. Never invent.

VOICE:
- A little funny, a little warm. A friend showing you around, not
  a comedian and not a tour-brochure.
- On mainland days: think trailheads, drive times, desert heat,
  Vegas neon. On Hawaii days: think island pace, reef safety,
  aloha spirit — but never a caricature.
- Occasionally drop a genuinely useful local word or phrase if it
  fits naturally (kokua, shaka, switchback) — don't force it.

EXAMPLES OF GOOD REPLIES:
- "Glacier Point Road can close with the first snow — check the NPS
  status page the morning of, or you'll be driving up for nothing."
- "Badwater Basin sits 282 feet below sea level — bring more water
  than feels necessary, there's no shade out there."
- "Book Antelope Canyon now. It sells out weeks ahead, especially the
  light-beam slots."

EXAMPLES OF BAD REPLIES (don't do these):
- "Great question! Let me think about whether Glacier Point…"
- "**Assessing Itinerary Deviation** I have determined that…"
- Anything over three sentences.`;

/** A neutral, warm delivery note for the Gemini Live spoken channel —
 *  no accent gimmick, just Kai's usual brevity and warmth carried
 *  into voice. */
const LIVE_SPOKEN_DELIVERY = `LIVE NATIVE AUDIO (Gemini Live — microphone, or typed messages that use the Live websocket when the globe is off):
- Speak warmly and easygoing — like a friendly guide chatting on a drive, not a narrator or an airport PA.
- Keep the same brevity and honesty as the text persona; audio replies are not the place to ramble.`;

/* ------------------------------------------------------------------ */
/* Trip-data digest — fed into the system prompt as ground truth.      */
/* Kept compact: titles + one-line summaries, not full descriptions,   */
/* so the prompt stays under ~25K tokens (well within Gemini's window) */
/* and the model has a chance to follow it precisely.                  */
/* ------------------------------------------------------------------ */

function digestItinerary(): string {
  const lines: string[] = ["DAY-BY-DAY ITINERARY:"];
  for (const rawDay of itinerary) {
    const d = localizeDay(rawDay);
    const acts = (d.activities || [])
      .map(a => `      • ${a.time}: ${a.title}`)
      .join("\n");
    lines.push(
      `  Day ${d.dayNumber} (${d.date}, ${d.weekday}) — ${d.region.toUpperCase()} base: ${d.base}\n` +
        `    Title: ${d.title}\n` +
        (d.subtitle ? `    Subtitle: ${d.subtitle}\n` : "") +
        (acts ? `    Activities:\n${acts}\n` : "") +
        (d.driveNotes ? `    Drive: ${d.driveNotes}\n` : "") +
        (d.drinkOfTheDay ? `    Drink of the day: ${d.drinkOfTheDay.name} (${d.drinkOfTheDay.type})\n` : "") +
        (d.phrasesOfDay?.length
          ? d.phrasesOfDay
              .map(
                (w, i) =>
                  `    Word/phrase ${i + 1}: "${w.word}" — "${w.meaning}"` +
                  (w.example ? ` (e.g. ${w.example})` : "") +
                  "\n"
              )
              .join("")
          : "")
    );
  }
  return lines.join("\n");
}

function digestAttractions(): string {
  const items = attractions.map(p => localizePoi(p));
  const lines = ["ATTRACTIONS WE PLAN TO VISIT:"];
  for (const p of items) {
    lines.push(
      `  - ${p.name} [${p.region}, ${p.tags?.join("/") || ""}${p.difficulty ? `, ${p.difficulty}` : ""}]: ${p.shortDescription || ""}`
    );
  }
  return lines.join("\n");
}

function digestStays(): string {
  const items = stays.map(s => localizeStay(s));
  const lines = ["WHERE WE'RE STAYING:"];
  for (const s of items) {
    lines.push(`  - ${s.name} (${s.region}): ${s.shortDescription || ""}`);
  }
  return lines.join("\n");
}

function digestServices(): string {
  const items = services.map(s => localizeService(s));
  const lines = ["NEARBY SERVICES (gas, supermarkets, restaurants near each base):"];
  for (const s of items) {
    lines.push(`  - [${s.category}] ${s.name}: ${s.shortDescription || ""}`);
  }
  return lines.join("\n");
}

function digestFood(): string {
  const d = dishes.map(x => localizeDish(x));
  const w = wineries.map(x => localizeWinery(x));
  const lines = ["LOCAL FOOD & DRINK (curated for this trip):"];
  for (const x of d) {
    const desc = (x.description || "").slice(0, 200);
    lines.push(`  - ${x.name} (${x.category}): ${desc}`);
  }
  lines.push("LOCAL FLAVOR STOPS NEARBY:");
  for (const x of w) {
    const desc = (x.description || "").slice(0, 200);
    lines.push(`  - ${x.name} (${x.region}): ${desc}`);
  }
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* Public: build the full system prompt for the current language       */
/* ------------------------------------------------------------------ */

/** Appended for typed REST replies (Google Search tool attached). The
 *  model decides whether a search actually runs; these rules keep the
 *  itinerary authoritative and stop forced "web for everything". */
const TYPED_SEARCH_DISCIPLINE = `OUTPUT SHAPE (typed channel):
- Same brevity rule as above — no markdown, no rambling, even with search results.

GOOGLE SEARCH (tool attached — you choose when it helps):
- The itinerary, dates, bases, and POIs in your system context are the
  SOURCE OF TRUTH for "our plan". Treat them as fixed unless the user
  explicitly asks to change plans.
- Invoke search ONLY when fresh or external facts would materially help
  the answer: opening hours, weather this week, road closures, current
  ticket prices, whether a venue is open today, etc. If the question is
  fully answerable from the itinerary alone, answer from memory — do
  NOT run a search just to look busy.
- If search results disagree with our plan, OUR PLAN WINS. Say so briefly
  ("the site says X, but on our plan we're doing Y") and stick to Y.
- Never invent bookings or changes the user did not ask for.
- Stay concise (same 1–3 sentence discipline as always). No markdown.`;

/** System prompt for typed messages: full trip context + search discipline. */
export function buildTypedReplySystemPrompt(lang: Lang): string {
  return `${buildSystemPrompt(lang)}\n\n${TYPED_SEARCH_DISCIPLINE}`;
}

/** System instruction for the Gemini Live WebSocket (mic OR typed when
 *  sound is on). Same trip grounding as `buildSystemPrompt` plus an explicit
 *  note that this channel has no Google Search — matches pre-search
 *  behaviour when typed replies used `sendText` on Live for native audio. */
const LIVE_CHANNEL_NO_WEB_SEARCH = `THIS LIVE WEBSOCKET (you receive both streamed voice and/or plain text from the user on the same connection):
- There is NO Google Search tool on this channel. Work only from the trip data already in your context.
- If a question truly needs live web facts (today's opening hours, current weather, is this venue open right now), say briefly that you cannot browse the web from here, give the best answer you can from the plan, and suggest they turn ON the web search toggle (globe, left of the text field), then send the same question again — that uses REST with Google Search (text-only reply for that path).
- Otherwise follow every persona rule as usual (brevity, warm and easygoing on audio, etc.).`;

const LIVE_RECENT_CHAT_NOTE = `RECENT CONVERSATION (true on-device transcript for continuity):
- Treat every line below as something you already said or the user already asked in this chat. Stay consistent; do not contradict unless you briefly correct a mistake.
- The user's latest message still arrives on the wire separately — answer that message; do not assume it is duplicated inside this block unless you see it here too.`;

export function buildLiveSessionSystemPrompt(
  lang: Lang,
  recentTurns?: ChatTurn[]
): string {
  const base = `${buildSystemPrompt(lang)}\n\n${LIVE_CHANNEL_NO_WEB_SEARCH}`;
  if (!recentTurns?.length) return base;
  const block = formatRecentChatBlock(recentTurns);
  return `${base}\n\n${LIVE_RECENT_CHAT_NOTE}\n${block}`;
}

export function buildSystemPrompt(_lang: Lang): string {
  const persona = PERSONA_EN;
  const trip = "TRIP FACTS YOU KNOW BY HEART:";

  return [
    persona,
    "",
    trip,
    `  - Dates: ${TRIP_FACTS.startDate} to ${TRIP_FACTS.endDate} (26 days, 25 nights)`,
    `  - Travellers: ${TRIP_FACTS.travellers}`,
    `  - Wheels: ${TRIP_FACTS.cars}`,
    `  - Bases: ${TRIP_FACTS.bases.join(" → ")}`,
    ...TRIP_FACTS.planNotes.map(n => `  - ${n}`),
    "",
    digestItinerary(),
    "",
    digestAttractions(),
    "",
    digestStays(),
    "",
    digestServices(),
    "",
    digestFood(),
    "",
    LIVE_SPOKEN_DELIVERY,
    "",
    replyLanguageClosing()
  ].join("\n");
}

/** Universal reply-language rule + itinerary fallback (English site). */
function replyLanguageClosing(): string {
  return [
    "REPLY LANGUAGE (applies to every channel — Live and REST):",
    "- Always answer in English — this is an English-only site.",
    "When asked what to do now, use the itinerary above. When asked about something NOT on our itinerary, say briefly it is not on our plan and offer one fair suggestion."
  ].join("\n");
}
