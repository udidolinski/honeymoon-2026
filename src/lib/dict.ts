import type { Lang } from "./lang";

/**
 * The full UI dictionary. Every visible string in the shell of the app
 * lives here, keyed by short identifiers. English-only build — every
 * entry is a plain string (no per-language lookup needed). To use a key
 * in a component:
 *
 *   const t = useT();
 *   t("plan.read_more");
 */
export const DICT = {
  /* ---------- Brand / hero ---------- */
  brand: "USA Honeymoon 2026",
  brand_short: "Honeymoon",
  brand_year: "'26",
  family_edition: "Honeymoon edition · Issue 01",
  families_byline: "Udi × Miriam · October 2026",
  hero_before_lead: "Counting down to the American West and the islands",
  hero_today_lead: "Today on the honeymoon",
  hero_tomorrow_lead: "Tomorrow on the honeymoon",
  hero_after_lead: "That October, out west and on the islands",
  hero_after_title: "Welcome home",
  hero_after_sub: "4 — 29 October 2026 · the honeymoon edition",
  hero_close_almost: "Almost there — start packing",
  hero_one_week: "One week to go · time to pack the dry bag",
  hero_one_month: "Less than a month · confirm the tours and the sunrise reservation",
  hero_far: "National parks, Vegas and island time, on the horizon",
  hero_today_day: "Day",
  hero_tomorrow_day: "Tomorrow",
  hero_of_ten: "of 25",
  scroll_to_plan: "the plan",
  hero_photo_day: "Day {n}",

  /* ---------- Navbar ---------- */
  nav_plan: "Plan",
  nav_map: "Map",
  nav_stays: "Stays",
  nav_attractions: "Places",
  nav_services: "Local",
  nav_food: "Food & Drink",
  nav_tips: "Tips",
  nav_checklist: "Lists",
  nav_emergency: "Emergency",

  badge_done: "Done",
  badge_day_n: "Day {n}",
  badge_d_until: "{n}d",

  /* ---------- Itinerary section ---------- */
  plan_eyebrow: "The plan · day by day",
  plan_kicker: "Swipe through 25 chapters · click Read more for the full chapter",
  plan_chapter_x_of_y: "Chapter {x} / {y}",
  read_more: "Read more",
  more_about_place: "More about this place",
  hide_details: "Hide details",
  about_this_place: "About this place",
  on_the_road: "On the road",
  more_stop_one: "more stop",
  more_stop_many: "more stops",

  /* ---------- Chapter detail ---------- */
  back_to_plan: "Back to the plan",
  todays_plan: "Today's plan",
  hour_by_hour: "Hour by hour",
  on_the_map: "On the map",
  the_days_stops: "The day's stops",
  ordered_visit: "Numbered in the order you'll visit them",
  things_to_know: "Things to know",
  tips_for_chapter: "Tips for this chapter",
  no_locations_for_chapter: "No locations on the map for this chapter.",
  previous: "Previous",
  next: "Next",

  /* Severity labels */
  severity_critical: "Critical",
  severity_warning: "Heads up",
  severity_info: "Good to know",

  /* Today badge */
  today: "Today",

  /* ---------- Region / chapter labels ---------- */
  region_mainland_long: "Mainland",
  region_hawaii_long: "Hawaii",
  region_transit_long: "Transit",
  region_mainland_short: "Mainland",
  region_hawaii_short: "Hawaii",
  region_transit_short: "Transit",

  /* Tag labels */
  tag_water: "Water",
  tag_extreme: "Adrenaline",
  tag_nature: "Nature",
  tag_culture: "Culture",
  tag_family: "Family",
  tag_food: "Food",
  tag_view: "View",
  tag_cave: "Cave",
  tag_village: "Village",
  tag_trail: "Trail",
  tag_national_park: "National Park",

  /* ---------- Map section ---------- */
  map_eyebrow: "The atlas",
  map_title: "The whole trip on one map",
  map_kicker: "Tap a pin · trace the route · filter the rest",
  map_intro: "Every stay, attraction, restaurant, supermarket and gas station — color-coded by category. The dashed line is our actual journey: Las Vegas, up through Death Valley and the Eastern Sierra to Yosemite and Lake Tahoe, then down to San Francisco and out to the Big Island and Maui.",
  map_route_on: "Route on",
  map_route_off: "Route off",
  map_spokes_on: "Day trips on",
  map_spokes_off: "Day trips off",
  map_seg_arrival: "Day 1–6 · Las Vegas to San Francisco by road",
  map_seg_arrival_short: "4–9 Oct",
  map_seg_transfer: "Day 8 & 16 · Fly to the Big Island, then Maui",
  map_seg_transfer_short: "11 & 19 Oct",
  map_seg_departure: "Day 24–25 · Maui to San Francisco, then home",
  map_seg_departure_short: "Tue/Wed · 27–28 Oct",
  map_zoom_fit: "Zoom to fit all locations",
  map_locate_me: "Show my location",
  map_you_here: "You are here",

  /* Map categories */
  cat_stay: "Stays",
  cat_attraction: "Attractions",
  cat_restaurant: "Restaurants",
  cat_supermarket: "Supermarkets",
  cat_gas: "Gas",
  cat_airport: "Airport",
  cat_hospital: "Hospital",
  cat_winery: "Local flavor",

  /* Map popup */
  navigate: "Navigate",
  navigate_google: "Maps",
  navigate_waze: "Waze",
  navigate_google_aria: "Open in Google Maps and start navigating",
  navigate_waze_aria: "Open in Waze and start navigating",
  website: "Website",
  show_on_map: "Show on the map",
  on_the_map_short: "On the map",

  /* ---------- Listen / audio playback ---------- */
  listen_play: "Listen",
  listen_pause: "Pause",
  listen_unavailable: "Audio unavailable",

  /* ---------- Kai (the AI trip guide) ---------- */
  gem_open: "Chat with Kai",
  gem_close: "Close",
  gem_title: "Kai",
  gem_tagline: "Your trip guide for the road and the islands",
  gem_setup_title: "Set up Kai",
  gem_setup_blurb: "Kai uses Google's Gemini Live API to talk with you. Paste a free Gemini API key — it's saved on this device only and never shared.",
  gem_setup_link: "Get a free key (aistudio.google.com/apikey)",
  gem_key_placeholder: "AIza…",
  gem_save_key: "Save key & start chatting",
  gem_clear_key: "Forget my key",
  gem_reset_history: "Clear chat",
  gem_input_placeholder: "Type a question — or tap the mic to talk",
  gem_send: "Send",
  gem_mic_hold: "Hold to talk",
  gem_mic_release: "Release to send",
  gem_mic_start: "Tap to record",
  gem_mic_stop: "Tap to stop now",
  gem_recording: "Recording — pauses to send…",
  gem_transcribing: "Transcribing…",
  gem_transcribe_failed: "Could not understand the recording. Please try again.",
  gem_listening: "Listening…",
  gem_thinking: "Thinking…",
  gem_speaking: "Speaking…",
  gem_connecting: "Connecting…",
  gem_disconnected: "Disconnected. Tap to reconnect.",
  gem_error_generic: "Something went wrong. Please try again later.",
  gem_error_occurred: "Something went wrong. Please try again later. (Ref: {code})",
  gem_first_hint: "Try: \"What should we do tomorrow morning?\" or \"Tell me about Badwater Basin.\"",
  gem_settings: "Settings",
  gem_back: "Back to chat",
  gem_builtin_key_note: "Using the trip's built-in API key. To use your own instead, set up a key in your browser cache.",
  gem_unmute: "Play reply audio",
  gem_mute: "Mute reply audio",
  gem_input_mode_note: "Globe off = trip data only (Gemini Live). Globe on = Google Search (REST, text).",
  gem_web_search_enable: "Turn Google Search on for sends",
  gem_web_search_disable: "Turn Google Search off for sends",

  /* ---------- Stays section ---------- */
  stays_eyebrow: "Where we sleep",
  stays_title: "Seven bases, one honeymoon",
  stays_kicker: "From Sierra lodges to a Strip hotel to island resorts",
  stays_intro: "The mainland leg moves fast — Vegas, then a new base every night or two through the desert, the Eastern Sierra, Tahoe and San Francisco. The islands slow way down, with eight nights on the Big Island and eight on Maui. Hotels marked TBD are still to be confirmed.",
  stay_check_in: "Check in",
  stay_check_out: "Check out",
  stay_nights_one: "{n} night",
  stay_nights_many: "{n} nights",
  stay_highlights: "Why we picked it",
  stay_warnings: "Worth knowing",
  stay_open_booking: "Open booking",

  /* ---------- TripStats ---------- */
  trip_stats_eyebrow: "By the numbers",
  trip_stats_days: "Days",
  trip_stats_chapters: "Chapters",
  trip_stats_attractions: "Highlights",
  trip_stats_stays: "Stays",

  /* ---------- Attractions grid ---------- */
  attr_eyebrow: "Where we'll go",
  attr_title: "Places we'll fall for",
  attr_kicker: "National parks, desert extremes, a canyon detour and island time",
  attr_filter_all: "All",
  attr_filter_mainland: "Mainland",
  attr_filter_hawaii: "Hawaii",
  attr_filter_water: "Water",
  attr_filter_culture: "Culture",
  attr_filter_extreme: "Adrenaline",
  attr_filter_nature: "Nature",

  /* ---------- Services section ---------- */
  services_eyebrow: "Around you",
  services_title: "Eat, shop, refuel",
  services_kicker: "Hand-picked spots near every base — saves you the panic-Google",
  services_filter_mainland: "Mainland base",
  services_filter_hawaii: "Hawaii base",
  services_filter_restaurant: "Restaurants",
  services_filter_supermarket: "Supermarkets",
  services_filter_gas: "Gas",

  hours: "Hours",

  /* ---------- Tips section ---------- */
  tips_eyebrow: "Local intelligence",
  tips_title: "Tips & quiet warnings",
  tips_kicker: "What to know before the parks, the Strip and the islands",

  /* ---------- Checklist ---------- */
  checklist_eyebrow: "Before we fly",
  checklist_title: "Pre-trip checklist",
  checklist_kicker: "Two lists: book it now, pack it later",
  checklist_booking: "Book ahead",
  checklist_packing: "Pack the bag",
  checklist_progress: "{done} of {total} done",
  checklist_urgent: "Urgent",

  /* ---------- Emergency ---------- */
  emergency_eyebrow: "When things go sideways",
  emergency_title: "Emergency & medical",
  emergency_kicker: "One number to remember: 911",
  emergency_call_112: "Call 911",
  emergency_112_lead: "The US emergency number — not 112. Works from any phone, English-speaking.",

  /* ---------- Weather ---------- */
  weather_eyebrow: "Right now on the trip",
  weather_north: "Mainland · Las Vegas",
  weather_south: "Hawaii · Kona",
  weather_loading: "Loading…",
  weather_error: "Weather unavailable",
  weather_high_low: "H {high}° / L {low}°",
  weather_now: "Now {temp}°",

  /* ---------- Difficulty ---------- */
  difficulty_label: "Difficulty",
  difficulty_easy: "Easy",
  difficulty_moderate: "Moderate",
  difficulty_challenging: "Challenging",

  /* ---------- Per-attraction insider tips ---------- */
  insider_tips_label: "Insider tips",

  /* ---------- Per-day gear & dayTips on the chapter page ---------- */
  gear_eyebrow: "Pack the day",
  gear_title: "What to bring",
  gear_kicker: "A small kit, picked for the day's mix",
  gear_for_label: "for",
  gear_for_general: "general",

  word_eyebrow: "Word of the day",
  word_pronounce_label: "Pronounce it",
  word_meaning_label: "Meaning",
  word_use_label: "Try it",
  word_also_today: "Also today",
  word_carousel_n_of_m: "Word {n} of {total}",
  word_carousel_prev: "Previous word",
  word_carousel_next: "Next word",
  word_pronounce_chip_listen: "Play pronunciation",
  word_example_chip_listen: "Play example",
  daytips_eyebrow: "Notes for the day",
  daytips_title: "Good to know",
  daytips_kicker: "Money, timing, mood — the things you'd whisper over coffee",

  /* ---------- Food & Drink ---------- */
  food_eyebrow: "At the table",
  food_title: "What this trip tastes like",
  food_kicker: "Road-trip classics, island staples, and a few local flavor stops",
  food_dishes_label: "Dishes worth chasing",
  food_wineries_label: "Local flavor stops",
  food_filter_mainland: "Mainland",
  food_filter_hawaii: "Hawaii",
  food_filter_trip: "Whole trip",
  food_try_it: "Try it at",
  food_appellation: "Specialty",
  food_book_visit: "Book the visit",
  food_dish_pasta: "Pasta",
  food_dish_starter: "Starter",
  food_dish_main: "Main",
  food_dish_dessert: "Dessert",
  food_dish_drink: "Drink",
  food_dish_snack: "Snack",

  /* ---------- Footer ---------- */
  footer_made_with: "Built for the honeymoon · October 2026",
  footer_attribution: "Photos credited to their respective authors. Map © OpenStreetMap & CARTO.",
  footer_open_repo: "Open the repo",
  footer_lang_label: "Language",

  /* ---------- Floating buttons / common ---------- */
  open_map: "Open the map",
  open_external: "Open",

  /* ---------- Ride times (inline connector between activities) ---------- */
  ride_to_next: "Drive",
  depart_at: "Departure",

  /* ---------- Restaurants for the day ---------- */
  restaurants_eyebrow: "Where to eat",
  restaurants_title: "Tonight's tables",
  restaurants_kicker: "Hand-picked spots near today's plan",

  /* ---------- Drink of the day (closing flourish) ---------- */
  drink_eyebrow: "After dark",
  drink_title: "A glass to close the day",
  drink_kicker: "Adults only — from craft beer to Mai Tais",
  drink_pairing_label: "Why tonight",
  drink_serving_label: "Serving",
  drink_type_wine: "Wine",
  drink_type_cocktail: "Cocktail",
  drink_type_beer: "Beer",
  drink_type_aperitif: "Aperitif",
  drink_type_digestif: "Digestif",
  drink_type_coffee: "Coffee",
  drink_type_other: "Drink",

  /* ---------- Activity flags (rendered as small badges) ---------- */
  optional_label: "Optional",
  optional_aria: "Optional — skip if you're tired",

  /* ---------- Install / Add to Home Screen ---------- */
  install_eyebrow: "Take it with you",
  install_title_ios: "Save the trip to your home screen",
  install_title_android: "Install the trip as an app",
  install_subtitle_ios: "Open like a real app — no app store, works offline-friendly",
  install_subtitle_android: "One tap from your home screen, full-screen, no browser bar",
  install_subtitle_android_fallback: "Add a one-tap shortcut from Chrome's menu",
  install_install_button: "Install",
  install_menu_label: "Install app",
  install_dismiss: "Maybe later",
  install_dont_show_again: "Don't show this again",
  install_close_aria: "Close install prompt",

  /* iOS Safari steps (iPhone) */
  install_step_share_iphone: "Tap the Share icon",
  install_step_share_iphone_hint: "The square with an up-arrow at the bottom of Safari",
  /* iOS Safari steps (iPad) */
  install_step_share_ipad: "Tap the Share icon",
  install_step_share_ipad_hint: "The square with an up-arrow in the top-right toolbar",
  install_step_a2hs: "Choose “Add to Home Screen”",
  install_step_a2hs_hint: "Scroll down in the share sheet if you don't see it",
  install_step_confirm: "Tap “Add” in the top corner",
  install_step_confirm_hint: "The trip icon lands on your home screen",

  /* iOS – not Safari (Chrome / Firefox / Edge on iOS) */
  install_ios_open_in_safari: "Open this page in Safari to install",
  install_ios_open_in_safari_hint: "Adding to the home screen on iPhone & iPad only works from Safari",

  /* Android fallback steps (when beforeinstallprompt didn't fire) */
  install_step_android_menu: "Tap the menu (⋮) at the top right",
  install_step_android_menu_hint: "Three vertical dots in the Chrome toolbar",
  install_step_android_a2hs: "Choose “Install app” or “Add to Home screen”",
  install_step_android_a2hs_hint: "The wording depends on your Chrome version",

  /* ---------- Quiz with Quizzo (per-day recap host) ---------- */
  quiz_eyebrow: "Recap on the way back",
  quiz_title: "Quizzo's trip quiz",
  quiz_subtitle: "Five fun trivia questions about today, hosted by Quizzo. Best played in the car on the way home.",
  quiz_start: "Start the quiz",
  quiz_loading: "Quizzo is warming up…",
  quiz_question_of: "Question {n} of {total}",
  quiz_correct: "Correct!",
  quiz_wrong: "Not quite — the answer was:",
  quiz_score: "You scored {score} of {total}",
  quiz_score_perfect: "Perfect score!",
  quiz_score_great: "Great job!",
  quiz_score_ok: "Not bad — try again to beat it.",
  quiz_score_low: "Tough round — another go?",
  quiz_play_again: "Play again",
  quiz_new_questions: "New questions",
  quiz_ask_quizzo: "Ask Kai something",
  quiz_offline: "Quizzo needs the internet to write new questions. Try again when you're back online.",
  quiz_unlocked_after: "Unlocks once today's adventures begin.",
  quiz_voice_unavailable: "Quizzo's voice isn't available right now — read the question and tap your answer.",
  quiz_aria_option: "Answer option {n}",
  quiz_error: "Quizzo got tongue-tied. Tap to try again.",
  quiz_close: "Close the quiz",

  /* ---------- Quiz mode toggle (offline / live) ---------- */
  quiz_mode_label: "Mode",
  quiz_mode_offline: "Offline",
  quiz_mode_offline_hint: "10 questions, saved on this device",
  quiz_mode_live: "Live",
  quiz_mode_live_hint: "Endless questions, needs the internet",
  quiz_offline_pack_unavailable: "Offline pack isn't ready yet — switch to Live (with wifi) to play, then offline mode will work next time.",
  quiz_offline_preparing: "Preparing your offline pack — hang on…",

  /* ---------- Endless live mode buttons ---------- */
  quiz_end_round: "End round",
  quiz_keep_going: "Keep going",
  quiz_loading_more: "Loading next questions…",
  quiz_load_more_failed: "Couldn't load more questions. End the round?",
  quiz_question_n: "Question {n}",

  /* ---------- Lock card (chapter date hasn't arrived yet) ---------- */
  quiz_locked_eyebrow: "Locked for now",
  quiz_locked_title: "Quizzo is still warming up",
  quiz_locked_unlocks_on: "Unlocks on {date}",
  quiz_locked_hint_preview: "Days 1 and 2 are unlocked early so you can try the quiz before the trip — the rest open on the morning of each day.",

  /* ---------- Mute toggle ---------- */
  quiz_mute: "Mute Quizzo",
  quiz_unmute: "Unmute Quizzo",

  /* ---------- Fallback banner (Gemini failed in offline mode) ---------- */
  quiz_fallback_banner: "Quizzo's connection dropped — these are the basic questions for now.",

  /* ---------- TripStrip ---------- */
  scroll_chapters_prev: "Previous chapters",
  scroll_chapters_next: "Next chapters",
  chapter_label: "Chapter",
  month_aug_short: "Oct"
} as const;

export type DictKey = keyof typeof DICT;

export function tr(key: DictKey, _lang?: Lang): string {
  return DICT[key];
}

/**
 * Format a string with {placeholder} → value substitutions.
 *   formatTr("Day {n}", { n: 3 }) → "Day 3"
 */
export function formatTr(s: string, vars?: Record<string, string | number>): string {
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

export function useT() {
  return (key: DictKey, vars?: Record<string, string | number>) =>
    formatTr(DICT[key], vars);
}

/* ---------- Weekdays / months (English-only formatting) ---------- */

export function localizeWeekday(weekday: string, _lang?: Lang, short = false): string {
  return short ? weekday.slice(0, 3) : weekday;
}

/** Localized day-month (e.g. "4 Oct"). */
export function localizeShortDate(iso: string, _lang?: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
