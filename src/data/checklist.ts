import type { ChecklistItem } from "./types";

export const bookingChecklist: ChecklistItem[] = [
  {
    id: "hotel-independence",
    text: "Book a hotel in Independence, CA",
    detail: "One night, Oct 6 (Death Valley day, arriving after dark). A small town on US-395 with few rooms, so book early. Lone Pine, 30 minutes south, is the fallback.",
    when: "Oct 6 · 1 night",
    urgent: true
  },
  {
    id: "hotel-incline",
    text: "Book a hotel in Incline Village, NV",
    detail: "Two nights, Oct 7-9. Heads-up: Incline is about 3 h from Tioga Pass and about 5 h from Yosemite Valley, so the Yosemite day is very long. Consider Lee Vining or Mammoth for one night instead, then Tahoe on the way to San Francisco.",
    when: "Oct 7-9 · 2 nights",
    urgent: true
  },
  {
    id: "hotel-paris-lv",
    text: "Confirm Paris Las Vegas",
    detail: "Oct 4-6. You land at 18:35, so tell the hotel about the late arrival and check the resort fee; save the confirmation offline.",
    when: "Oct 4-6 · 2 nights"
  },
  {
    id: "hotel-hilton-sf",
    text: "Confirm Hilton San Francisco Union Square",
    detail: "Oct 9-11. Ask about early luggage storage and about the early airport ride on Oct 11 (leave around 04:30).",
    when: "Oct 9-11 · 2 nights"
  },
  {
    id: "hotel-big-island",
    text: "Book the Big Island resort (Kohala Coast)",
    detail: "Oct 11-19, 8 nights. The Stays page only lists a suggested pick, so book your own. You land at 09:30 and the room may not be ready; ask about early check-in or bag storage.",
    when: "Oct 11-19 · 8 nights",
    urgent: true
  },
  {
    id: "hotel-maui",
    text: "Book the Maui resort (Wailea)",
    detail: "Oct 19-27, 8 nights. You land at 13:30 and pick up the Budget car at Kahului, so standard mid-afternoon check-in works.",
    when: "Oct 19-27 · 8 nights",
    urgent: true
  },
  {
    id: "hotel-sfo-airport",
    text: "Book an SFO airport hotel for Oct 27",
    detail: "Land 18:30 on Oct 27 and fly to Tel Aviv at 08:55 on Oct 28. Choose one with a 24 h shuttle and an early breakfast or grab-and-go.",
    when: "Oct 27 · 1 night"
  },
  {
    id: "alcatraz",
    text: "Book Alcatraz tickets for the free San Francisco day",
    detail: "Oct 10. Alcatraz sells out days ahead; book the official ferry (Alcatraz City Cruises). Skip it if you prefer a lazy day.",
    when: "Oct 10",
    link: "https://www.alcatrazcitycruises.com/"
  },
  {
    id: "rental-insurance",
    text: "Check rental-car insurance cover",
    detail: "Ask your credit card whether it covers collision damage for rentals in the US (many Israeli cards do not, or exclude some cars). If not, buy the CDW at the counter or from a third party before you travel."
  },
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

export const checkInChecklist: ChecklistItem[] = [
  {
    id: "checkin-outbound",
    text: "Check in online for the flight to Las Vegas",
    detail: "Most airlines open online check-in 24 h before departure. Save the boarding pass to Apple/Google Wallet and screenshot it. You land in LAS at 18:35 on Oct 4.",
    when: "Opens 24 h before · Oct 3-4"
  },
  {
    id: "checkin-sfo-koa",
    text: "Check in for San Francisco → Kona (07:00)",
    detail: "Very early flight: check in the moment it opens (24 h earlier, around 07:00 on Oct 10), add bags online, and plan the airport ride for about 04:30.",
    when: "Opens Oct 10 · flight Oct 11, 07:00"
  },
  {
    id: "checkin-koa-ogg",
    text: "Check in for Kona → Maui (12:50)",
    detail: "Return the Budget car at Kona airport first. Inter-island baggage allowances are tighter than mainland ones; check weights before you pack.",
    when: "Opens Oct 18 · flight Oct 19, 12:50"
  },
  {
    id: "checkin-ogg-sfo",
    text: "Check in for Maui → San Francisco (10:30)",
    detail: "Return the Budget car at Kahului by about 08:00. Hawaii's agricultural inspection applies to fresh produce and plants in your bags.",
    when: "Opens Oct 26 · flight Oct 27, 10:30"
  },
  {
    id: "checkin-sfo-tlv",
    text: "Check in for San Francisco → Tel Aviv (08:55)",
    detail: "International: do the online check-in as soon as it opens, confirm passport details, and be at SFO by about 05:55. You land in Israel on Oct 29 at 14:15.",
    when: "Opens Oct 27 · flight Oct 28, 08:55"
  },
  {
    id: "checkin-passes-saved",
    text: "Save every boarding pass and confirmation offline",
    detail: "Add each pass to your phone wallet and keep a screenshot, because there is no signal on parts of the Death Valley and Tioga Road legs."
  }
];

export const downloadChecklist: ChecklistItem[] = [
  {
    id: "dl-maps-mainland",
    text: "Offline maps: Las Vegas → Death Valley → Eastern Sierra → Yosemite → Tahoe → San Francisco",
    detail: "In Google Maps: profile → Offline maps → Select your own map. Download two or three big regions over Wi-Fi (a few hundred MB). Death Valley and Tioga Road have little or no signal, so do this before Oct 4.",
    urgent: true
  },
  {
    id: "dl-maps-hawaii",
    text: "Offline maps: Big Island and Maui",
    detail: "Download the whole Big Island (Kona, Kohala, Volcanoes National Park, Mauna Kea) and Maui (Wailea, Road to Hana, Haleakalā). Coverage is patchy on the Hana road and in the Volcanoes park."
  },
  {
    id: "dl-music-roads",
    text: "Download road-trip music",
    detail: "Make a few downloaded playlists: Vegas night, desert driving, Sierra morning, Hawaii drives. Download over Wi-Fi in Spotify or Apple Music. Bring an aux or Bluetooth cable in case a rental has no CarPlay."
  },
  {
    id: "dl-audio-tours",
    text: "Download audio driving tours (optional)",
    detail: "Apps such as GyPSy Guide (Yosemite, Death Valley) and Shaka Guide (Road to Hana, Big Island) narrate the drive and work offline once downloaded. Check they are available for your phone and buy before you travel."
  },
  {
    id: "dl-books",
    text: "Download books and audiobooks",
    detail: "Kindle, Libby or Audible, plus a couple of trip-flavoured picks: Michener's Hawaii, Fear and Loathing in Las Vegas, John Muir on Yosemite, Desert Solitaire. Audiobooks make the long desert and Eastern Sierra drives fly."
  },
  {
    id: "dl-movies",
    text: "Download movies and TV for the long flights",
    detail: "Tel Aviv ↔ the US is long, plus the Oct 11 and Oct 27 Hawaii flights. Download in Israel before you leave: streaming libraries are region-specific and downloads can expire after a few days or after you start watching, so check the expiry dates. Trip-themed ideas: Ocean's Eleven, Moana, Free Solo, Jurassic Park."
  },
  {
    id: "dl-apps",
    text: "Install the useful apps",
    detail: "Airline apps, Alamo and Budget, Uber or Lyft, hotel apps, the NPS app and a weather app. Log in to each one before you leave, and keep a card that works in the US in Apple/Google Wallet."
  },
  {
    id: "dl-this-app",
    text: "Add this app to your home screen and open it once online",
    detail: "Open the site in Safari/Chrome, then Share → Add to Home Screen. Open it once on Wi-Fi so it caches and keeps working with a poor signal."
  },
  {
    id: "dl-docs-offline",
    text: "Save documents offline",
    detail: "Passports, ESTA, insurance policy and number, hotel and car confirmations, tour tickets. Keep a PDF or screenshot in Photos and in an offline Drive folder, plus a printed copy of the essentials."
  }
];

export const setupChecklist: ChecklistItem[] = [
  {
    id: "setup-esim",
    text: "Sort out internet: eSIM or SIM for the US",
    detail: "Options: a travel eSIM (Airalo, Holafly, Saily) or an Israeli roaming pack. Check your phones are unlocked and support eSIM, install the eSIM on Wi-Fi before leaving, and switch it on when you land in Las Vegas. Compare about 25 days of data for both phones against roaming prices. Keep your Israeli number active for WhatsApp, SMS verification codes and the bank.",
    urgent: true
  },
  {
    id: "setup-bank",
    text: "Tell banks and cards you are travelling",
    detail: "Enable foreign use, check daily limits and fees, add cards to Apple/Google Wallet, and keep a second card in a different bag. Some US pumps reject foreign cards, so pay inside when needed."
  },
  {
    id: "setup-car-kit",
    text: "Car kit: phone mount, charger and cable",
    detail: "A vent or dash phone mount, a USB car charger, a long cable and a power bank for the long Death Valley and Sierra days. Bring both USB-A and USB-C cables."
  },
  {
    id: "setup-location-sharing",
    text: "Share your live location with each other and a family member",
    detail: "Find My or Google Maps location sharing for the days you split up or lose signal in the parks. Save the US emergency number (911) and your insurance helpline."
  },
  {
    id: "setup-home",
    text: "Home front: mail, plants, out-of-office",
    detail: "Ask someone to collect mail and water the plants, and set your work out-of-office for Oct 4-29."
  },
  {
    id: "setup-tioga-check",
    text: "Check Tioga Pass and Glacier Point road status",
    detail: "Tioga Road (Yosemite east entrance) and Glacier Point Road close with the first big snow. Check the NPS road status a few days before Oct 7 and again the morning of, and have a plan B.",
    when: "Oct 5-7"
  }
];
