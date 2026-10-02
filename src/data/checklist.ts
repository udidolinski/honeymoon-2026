import type { ChecklistItem } from "./types";

export const bookingChecklist: ChecklistItem[] = [
  {
    id: "passports-valid",
    text: "Check passports are valid 6+ months past the return date",
    detail: "US entry generally wants at least 6 months of validity remaining beyond your stay — renew now if either passport is close."
  },
  {
    id: "esta",
    text: "Apply for ESTA (US Visa Waiver Program)",
    detail: "Israel is part of the US Visa Waiver Program — apply for an ESTA online well before departure instead of a full visa. Approval usually comes within minutes but can take up to 72 hours."
  },
  {
    id: "travel-insurance",
    text: "Buy travel insurance covering both of you",
    detail: "US medical care is expensive without insurance — confirm coverage for hospital visits, trip interruption, and any adventure activities (snorkeling, hiking) on the itinerary."
  },
  {
    id: "annual-pass-plan",
    text: "Plan to buy the America the Beautiful annual pass at the first park",
    detail: "Covers Yosemite, Death Valley and Hawaiʻi Volcanoes — $80 for the vehicle, pays for itself after about three park entries (Yosemite and Death Valley are the two mainland parks on this route). Not valid at Grand Canyon West (tribal land, separate fees)."
  },
  {
    id: "us-license-check",
    text: "Confirm your Israeli driver's license is enough, or get an International Driving Permit",
    detail: "Israeli licenses are generally accepted for short-term car rental in most US states, but some rental companies still ask for an International Driving Permit as a translated backup ID — check the specific rental company's policy and consider getting an IDP before you fly."
  },
  {
    id: "rental-car-confirm",
    text: "Confirm the Alamo (Las Vegas → San Francisco) and Budget (Kona, Maui) rental bookings",
    detail: "Alamo pickup at Las Vegas airport on Oct 5 evening, one-way drop-off at San Francisco Union Square by 18:00 on Oct 9 — confirm the one-way fee and Union Square location hours. Budget at Kona airport (Oct 11–19) and Kahului airport (Oct 19–27), each returned at the same airport. The driver's card must match the reservation name."
  },
  {
    id: "grand-canyon-antelope-tour",
    text: "Book the Grand Canyon West + Antelope Canyon combo tour",
    detail: "Antelope Canyon sells out weeks ahead, especially the popular light-beam slots — book the combo day tour from Las Vegas early."
  },
  {
    id: "haleakala-sunrise-reservation",
    text: "Book the Haleakalā sunrise viewing reservation",
    detail: "A separate advance reservation via recreation.gov, on top of the park entrance fee — book as soon as your Maui dates are set."
  },
  {
    id: "interisland-flights",
    text: "Book the inter-island and return flights",
    detail: "San Francisco → Kona (Oct 11, 07:00–09:30), Kona → Maui (Oct 19, 12:50–13:30), and Maui → San Francisco (Oct 27, 10:30–18:30), then SFO → Tel Aviv (Oct 28, 08:55, landing Oct 29 at 14:15) — confirm baggage allowances for each leg."
  },
  {
    id: "manta-ray-tour",
    text: "Book the manta ray night snorkel tour",
    detail: "A popular Kona-coast experience — book ahead, especially for a specific date."
  },
  {
    id: "luau-booking",
    text: "Book a Lahaina-area luau",
    detail: "Consider Old Lahaina Luau or a similar reputable option — popular luaus sell out on weekends."
  },
  {
    id: "mauna-kea-tour",
    text: "Book a guided Mauna Kea sunset/stargazing tour",
    detail: "4WD is required above the visitor station — a guided tour is safer and easier than self-driving."
  }
];

export const packingChecklist: ChecklistItem[] = [
  {
    id: "reef-safe-sunscreen",
    text: "Reef-safe sunscreen — for everyone",
    detail: "Required by Hawaii law (no oxybenzone/octinoxate) — bring it from home, it's pricier locally."
  },
  {
    id: "desert-heat-layers",
    text: "Lightweight, breathable layers for Death Valley heat",
    detail: "October days can still hit 90+°F at Badwater Basin — sun hat, high-SPF sunscreen, more water than feels necessary."
  },
  {
    id: "altitude-cold-layers",
    text: "Real warm layers for Mauna Kea and Haleakalā",
    detail: "Both summits can drop to near or below freezing, even though you're in Hawaii — a proper jacket, hat and gloves earn their space in the suitcase."
  },
  {
    id: "power-adapter-voltage",
    text: "Plug adapter and check device voltage",
    detail: "Israel runs 230V on Type C/H sockets; the US runs 120V on Type A/B sockets. Most phone and laptop chargers are dual-voltage and only need a plug adapter, but check any single-voltage appliances (hair dryers, etc.) — they'll need a voltage converter, not just an adapter."
  },
  {
    id: "cash-for-tipping",
    text: "Some US cash for tipping",
    detail: "15–20% at restaurants is standard, plus small cash tips for bellhops and housekeeping — unlike tipping norms in Israel."
  },
  {
    id: "offline-maps",
    text: "Download offline maps for the desert stretches",
    detail: "Death Valley and long stretches of the Southwest have minimal to no cell service — download offline Google Maps or a dedicated navigation app before you leave home."
  },
  {
    id: "snorkel-gear",
    text: "Snorkel mask (optional — rentable everywhere)",
    detail: "Bring your own if you're picky about fit; otherwise every Hawaii beach town rents gear cheaply."
  },
  {
    id: "hiking-shoes",
    text: "Sturdy walking/hiking shoes",
    detail: "For the Yosemite valley floor, Death Valley's salt flats, and any Road to Hana wading."
  },
  {
    id: "swimwear",
    text: "Swimwear for both the desert pools and Hawaii beaches",
    detail: "Pack more than one set — you'll want a dry one for driving days."
  },
  {
    id: "first-aid-kit",
    text: "Mini first-aid kit",
    detail: "Blister plasters, antiseptic, pain relief, motion-sickness tablets for the Road to Hana's 600+ curves."
  },
  {
    id: "reusable-bottles",
    text: "Reusable water bottles — one per person",
    detail: "Fill up before every desert or trail stop; tap water is safe throughout the US."
  }
];
