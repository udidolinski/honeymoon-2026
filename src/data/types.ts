export type Region = "mainland" | "hawaii" | "transit";

export type Category =
  | "attraction"
  | "stay"
  | "restaurant"
  | "supermarket"
  | "gas"
  | "airport"
  | "hospital"
  // Local flavor stops from data/wineries.ts get projected onto the map
  // as POIs under this category (off by default in the filter UI).
  | "winery";

export type AttractionTag =
  | "water"
  | "extreme"
  | "nature"
  | "culture"
  | "family"
  | "food"
  | "view"
  | "cave"
  | "village"
  | "trail"
  | "national-park";

export interface ImageCredit {
  /** Display name of the photographer / source. */
  author: string;
  /** Short license id, e.g. "CC BY-SA 4.0", "CC BY 2.0", "Public Domain". */
  license: string;
  /** URL to the original source page (e.g. Wikimedia Commons). */
  source?: string;
  /** URL to the license terms. */
  licenseUrl?: string;
}

/** Casual three-tier rating for how demanding an attraction is. */
export type Difficulty = "easy" | "moderate" | "challenging";

/**
 * One hand-curated piece of trivia about an attraction's story, science,
 * or signature feature. Kept in a light "fun couple trivia" tone — this
 * is a childless honeymoon, so no need for kid-safe phrasing, but still
 * warm and playful rather than dry.
 */
export interface AttractionQuizFact {
  /** Complete question text, ready to read aloud. */
  question: string;
  /** The single correct answer. */
  correctAnswer: string;
  /** Plausible-but-clearly-wrong alternatives (need at least 3). */
  distractors: string[];
}

export interface POI {
  id: string;
  name: string;
  category: Category;
  region: Region;
  description: string;
  shortDescription?: string;
  image?: string;
  imageCredit?: ImageCredit;
  website?: string;
  address?: string;
  coords: [number, number];
  tags?: AttractionTag[];
  openingNote?: string;
  bookingNote?: string;
  /** How demanding the visit is — Easy / Moderate / Challenging. */
  difficulty?: Difficulty;
  /** Practical "insider" notes for the place. */
  tips?: string[];
  /** Hand-curated trivia used by the offline quiz fallback + AI persona. */
  quizFacts?: AttractionQuizFact[];
}

export interface Stay extends POI {
  category: "stay";
  checkIn: string;
  checkOut: string;
  nights: number;
  bookingLink?: string;
  highlights: string[];
  warnings?: string[];
  /** Optional extra photos shown in the stay-card carousel. */
  gallery?: string[];
}

export interface Service extends POI {
  category: "restaurant" | "supermarket" | "gas";
  hours?: string;
  base: "mainland" | "hawaii";
}

export interface DayActivity {
  time?: string;
  title: string;
  description: string;
  attractionId?: string;
  tag?: AttractionTag;
  /** Drive time from this stop to the NEXT activity, rendered as a small
   *  inline connector on the chapter detail page. */
  rideToNext?: { duration: string; note?: string; departAt?: string };
  /** When true, render this activity with an "Optional" badge. When
   *  undefined, the chapter page applies the 3rd-attraction-and-later
   *  auto-rule. Set explicitly to `false` to opt a specific activity OUT. */
  optional?: boolean;
}

/** A single item on the per-day pack list. */
export interface GearItem {
  item: string;
  for?: string;
}

/** A small phrase-of-the-day flashcard, picked to fit the day's mood —
 *  fun American road-trip / National-Park-ranger vocabulary on mainland
 *  days, real Hawaiian words travellers will actually hear on island days. */
export interface PhraseOfDay {
  /** The word or short phrase, e.g. "Aloha". */
  word: string;
  /** Pronunciation in plain phonetics, e.g. "ah-LOH-hah". */
  pronounce: string;
  /** Plain-language meaning. */
  meaning: string;
  /** Optional example sentence. */
  example?: string;
  /** Translation / gloss of the example. */
  exampleMeaning?: string;
}

/** Categories for the "drink of the day" closing flourish. */
export type DrinkType =
  | "wine"
  | "cocktail"
  | "beer"
  | "aperitif"
  | "digestif"
  | "coffee"
  | "other";

/** An adults-only "what to pour tonight" suggestion that closes each
 *  chapter — picked to match the day's mood: craft beer/wine on the road,
 *  a Vegas classic on Strip nights, Mai Tais and POG on the islands. */
export interface DayDrink {
  name: string;
  type: DrinkType;
  /** One or two sentences on why this drink fits this specific day. */
  pairing: string;
  /** Optional serving / glassware note. */
  servingNote?: string;
}

export interface Day {
  dayNumber: number;
  date: string;
  weekday: string;
  /** Recommended time to leave the base/hotel in the morning. */
  departureTime?: string;
  /** The first drive of the day from the base to the first activity. */
  rideToFirst?: { duration: string; note?: string };
  region: Region;
  title: string;
  subtitle?: string;
  base?: string;
  activities: DayActivity[];
  driveNotes?: string;
  /** Lead photo for the chapter when no activity in the day has an image. */
  leadImage?: string;
  leadImageCredit?: ImageCredit;
  /** Suggested clothing & gear for this day's mix of activities. */
  gear?: GearItem[];
  /** Day-specific advice that doesn't belong to a single attraction. */
  dayTips?: string[];
  /** Up to six words/phrases for the day — shown in a carousel with audio. */
  phrasesOfDay?: PhraseOfDay[];
  /** Curated list of `Service.id` values (restaurants only) for this day. */
  restaurants?: string[];
  /** Adults-only "what to pour tonight" suggestion — closes the chapter. */
  drinkOfTheDay?: DayDrink;
}

/* ---------- Food & Drink ---------- */

export type DishCategory =
  | "pasta"
  | "starter"
  | "main"
  | "dessert"
  | "drink"
  | "snack";

export interface Dish {
  id: string;
  /** Name of the dish. */
  name: string;
  /** A local-language / proper name for the dish, shown in italics. */
  italianName?: string;
  /** "mainland" = road trip + Vegas leg, "hawaii" = Maui + Big Island,
   *  "trip" = found on both halves of the trip. */
  region: "mainland" | "hawaii" | "trip";
  category: DishCategory;
  description: string;
  /** Short hint at where to try it. */
  tryIt?: string;
  /** Optional photo, served from /public/images/. */
  image?: string;
  imageCredit?: ImageCredit;
}

/** Repurposed from the template's "wineries" concept into general local
 *  flavor stops: a coffee farm tour, a brewery, a luau, a signature bar —
 *  anywhere worth a dedicated visit for food/drink/culture on this trip. */
export interface Winery {
  id: string;
  name: string;
  region: "mainland" | "hawaii";
  /** A short tagline — the "denomination" equivalent (e.g. "Kona Coffee Belt"). */
  appellation: string;
  description: string;
  website?: string;
  address?: string;
  coords?: [number, number];
  bookingNote?: string;
  image?: string;
  imageCredit?: ImageCredit;
}

/* ---------- Per-day quiz (Quizzo, the trivia host) ---------- */

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  reactionCorrect: string;
  reactionWrong: string;
}

export interface Quiz {
  day: number;
  lang: "en" | "he";
  questions: QuizQuestion[];
  generatedAt: number;
}

export type QuizMode = "offline" | "live";

export interface ChecklistItem {
  id: string;
  text: string;
  detail?: string;
  link?: string;
  urgent?: boolean;
  done?: boolean;
}

export interface Tip {
  id: string;
  title: string;
  body: string;
  severity: "info" | "warning" | "critical";
  icon?: string;
}

export interface EmergencyContact {
  label: string;
  value: string;
  detail?: string;
  link?: string;
  type: "phone" | "address" | "website";
}

export interface EmergencyGroup {
  title: string;
  items: EmergencyContact[];
}
