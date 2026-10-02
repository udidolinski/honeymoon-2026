# USA Honeymoon 2026 — Udi &amp; Miriam

A static, mobile-first trip companion for Udi &amp; Miriam's honeymoon across the American West and Hawaii, **4 – 29 October 2026**. Itinerary, interactive map, attractions, stays, restaurants/supermarkets/gas stations, weather, food &amp; drink, packing/booking checklists, and an AI trip-guide chat (**Kai**). Built to be opened on the phone during the trip.

**This build is local-only** — there is no deployment configured. Run it with `npm run dev` and open it in a browser.

For the architecture rationale (map behavior, hero state machine, i18n, AI assistant, audio pipeline), see [`docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md`](docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md) — the source-of-truth playbook this app was built from.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (palette anchored to the trip: Death Valley ochre, Sierra sequoia green, Yosemite granite grey-blue, Hawaiian turquoise, volcanic black, warm sand)
- Cormorant Garamond + Inter — Google Fonts
- React Leaflet + CartoDB Voyager tiles (no API key)
- Open-Meteo for live weather (no API key)
- Lucide icons + Framer Motion for subtle animation
- Gemini Live API for the in-app chat assistant (Kai)

## Quickstart

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint flat config
```

## Environment variables

Copy `.env.example` to `.env.local` and set `VITE_GEMINI_API_KEY` if you want Kai (the AI trip guide) to work out of the box. It's optional — without it, the app still runs and just asks each visitor to paste their own free Gemini key.

| Variable | Used by | Notes |
| --- | --- | --- |
| `VITE_GEMINI_API_KEY` | In-app Kai chat | Baked into the local bundle at build time. Leave blank to fall back to per-user pasted keys. Never commit this — `.env.local` is gitignored. |

## Updating content

All content lives in plain TypeScript files under `src/data/` — no CMS, no database.

| File | What's in it |
| --- | --- |
| `src/data/itinerary.ts` | The 25-day plan (`dayTips`, gear, drink/phrase of the day, etc.) |
| `src/data/attractions.ts` | All sights with description, coords, official link, image path |
| `src/data/stays.ts` | The seven trip bases (Vegas, Independence, Incline, San Francisco, Big Island, Maui, SFO airport) |
| `src/data/services.ts` | Restaurants, supermarkets, gas stations near each base |
| `src/data/dishes.ts` / `wineries.ts` | Food & drink catalog + local flavor stops (own section + map layer) |
| `src/data/tips.ts` | Local know-how and warnings (national park pass, tipping, reef-safe sunscreen, etc.) |
| `src/data/emergency.ts` | Emergency numbers, hospitals, consulate |
| `src/data/checklist.ts` | Pre-trip booking + packing checklists |
| `src/lib/dict.ts` | UI strings (brand, nav, sections, install, Kai) |
| `src/lib/tipsForDay.ts` | Maps which global `tips.ts` entries appear on which chapter detail page |
| `src/lib/kai/persona.ts` | AI guide persona, trip facts, digests |

### Adding photos

Image fields point to `./images/<slug>.jpg`. Drop your own `.jpg` files into `public/images/` with matching names and they will appear automatically — see `public/images/README.md` for the exact filenames the data files expect. Until then, each card shows a colour-coded fallback with the place name. Always use **relative** paths (`./images/...`, not `/images/...`).

**Known gap:** no real photos are bundled in this build (see `public/images/README.md`), and the app icon is still the original template's placeholder art (`public/icon-placeholder*.png`) — replace both before sharing this app around.

## Project layout

```
src/
  components/      UI sections (Hero, Map, Itinerary, Stays, Kai, ...)
  data/            All trip content as typed TS data
  lib/             Helpers (i18n, dict, hash routing, install, swipe, audio bus)
    kai/           AI assistant — persona, Live WS, REST search, history, audio
  index.css        Tailwind + trip-inspired design tokens
public/
  images/          Drop-in attraction & stay photos (placeholders only for now)
  audio/           Pre-generated narration MP3s (not populated — out of scope)
  manifest.webmanifest
scripts/           Local-only audio-generation helper (optional, unused by default)
docs/
  HOW_TO_BUILD_A_VACATION_WEBSITE.md   Full design playbook
```

A hui hou.
