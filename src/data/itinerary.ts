import type { Day } from "./types";

export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-10-04",
    weekday: "Sunday",
    region: "mainland",
    base: "Las Vegas, NV",
    title: "Land in Las Vegas",
    subtitle: "Arrive LAS 18:35, straight to Paris Las Vegas — no car tonight",
    activities: [
      {
        time: "18:35",
        title: "Land at Las Vegas (LAS)",
        description: "Landing at Harry Reid International. Allow 45–60 minutes for passport control, bags and the ride out — the airport is only ~15 minutes from the Strip. No rental car tonight; the Alamo pickup is tomorrow evening after the canyon tour.",
        rideToNext: { duration: "20 min", note: "Rideshare or taxi from the terminal to Paris Las Vegas", departAt: "19:45" }
      },
      {
        time: "Evening",
        title: "Check in at Paris Las Vegas",
        description: "Drop the bags at Paris Las Vegas (two nights, Oct 4–6) and stay local. It is a long travel day and tomorrow's tour starts early, so keep tonight easy."
      },
      {
        time: "Late evening",
        title: "Bellagio Fountains + a late bite",
        description: "The Bellagio Fountains are a short walk across the street from Paris and run into the late evening. Grab a late dinner and head to bed early.",
        attractionId: "bellagio-fountains",
        tag: "culture",
        optional: true
      }
    ],
    driveNotes: "LAS → Paris Las Vegas ≈ 20 min by rideshare/taxi",
    restaurants: ["rest-m-vegas-inn-n-out"],
    drinkOfTheDay: {
      name: "Classic Vegas Martini",
      type: "cocktail",
      pairing: "The city's signature after-dark pour — cold, sharp, a little theatrical. The obvious first-night toast after a long-haul flight.",
      servingNote: "Straight up, ice-cold, with an olive or a twist"
    },
    gear: [
      { item: "Comfortable walking shoes — the Strip is longer than it looks" },
      { item: "A light jacket for the desert evening chill" },
      { item: "Passports + hotel confirmation easily reachable" }
    ],
    dayTips: [
      "Confirm tomorrow's tour pickup time and spot with the operator tonight",
      "Vegas drinking age is 21 — carry ID even if you look older",
      "Rideshare pickup at LAS is a short walk from baggage claim — follow the signs"
    ],
    phrasesOfDay: [
      {
        word: "The Strip",
        pronounce: "the strip",
        meaning: "Las Vegas Boulevard's famous casino-hotel stretch — everyone just calls it 'the Strip'",
        example: "Our hotel is right on the Strip.",
        exampleMeaning: "The main tourist boulevard in Vegas."
      },
      {
        word: "Comp",
        pronounce: "komp",
        meaning: "Something a casino gives you for free (a drink, a room upgrade) — short for 'complimentary'",
        example: "The bartender comped our first round.",
        exampleMeaning: "It was on the house."
      }
    ]
  },
  {
    dayNumber: 2,
    date: "2026-10-05",
    weekday: "Monday",
    region: "mainland",
    base: "Las Vegas, NV",
    title: "Grand Canyon West + Antelope Canyon — guided day tour",
    subtitle: "All-day guided tour, back by about 18:00 — then pick up the Alamo rental car",
    activities: [
      {
        time: "Morning",
        title: "Hotel pickup",
        description: "Organized full-day tour — a Grand Canyon West + Antelope Canyon combo with hotel pickup. Confirm the exact pickup time and spot with the operator. No rental car needed; the tour handles the driving."
      },
      {
        time: "Late morning",
        title: "Grand Canyon West Rim — Eagle Point",
        description: "Eagle Point's canyon-edge overlooks on Hualapai tribal land, with Skywalk as an optional paid add-on if you want to walk out onto the glass horseshoe bridge. Note: Grand Canyon West is NOT part of the National Park Service and is not covered by the America the Beautiful pass — it has its own entry and tribal fees.",
        attractionId: "grand-canyon-west",
        tag: "view"
      },
      {
        time: "Afternoon",
        title: "Antelope Canyon slot-canyon photo tour",
        description: "A Navajo-guided walk through the swirling sandstone corridors of Upper or Lower Antelope Canyon — book well in advance, these tours sell out.",
        attractionId: "antelope-canyon",
        tag: "cave"
      },
      {
        time: "18:00",
        title: "Back in Las Vegas",
        description: "The tour returns around 18:00. Head for the airport area to pick up the rental car.",
        rideToNext: { duration: "25 min", note: "Strip → Rent-A-Car Center (Alamo) by rideshare" }
      },
      {
        time: "Evening",
        title: "Pick up the Alamo rental car",
        description: "Alamo is at the Harry Reid Rent-A-Car Center, a short shuttle/rideshare from the terminal. Have the driver's licence and a credit card in the driver's name ready, check the car over, and confirm the one-way drop-off in San Francisco (Oct 9). Then back to Paris Las Vegas for the second night."
      }
    ],
    restaurants: ["rest-m-vegas-bacchanal"],
    drinkOfTheDay: {
      name: "Iced coffee (non-alcoholic)",
      type: "coffee",
      pairing: "A long tour day — a strong iced coffee before pickup beats anything else on the menu.",
      servingNote: "Big cup, extra ice, drink it in the tour van"
    },
    gear: [
      { item: "Layers — the canyon rim is windy and can be cool even in warm weather", for: "grand-canyon-west" },
      { item: "Comfortable shoes for uneven slot-canyon paths", for: "antelope-canyon" },
      { item: "A phone or camera with a wide lens for Antelope Canyon's light beams", for: "antelope-canyon" },
      { item: "Snacks and a full water bottle for the long tour day" },
      { item: "Driver's licence + credit card for the Alamo pickup tonight" }
    ],
    dayTips: [
      "Book the Grand Canyon West + Antelope Canyon combo tour in advance — Antelope Canyon slots sell out fastest",
      "Grand Canyon West is Hualapai tribal land, NOT covered by the America the Beautiful national park pass — it has separate tribal fees",
      "Skywalk is a paid add-on beyond the base Eagle Point entry — decide in advance if you want it",
      "Tour back about 18:00 — leave time for the Alamo pickup, and confirm the one-way drop-off fee to San Francisco"
    ],
    phrasesOfDay: [
      {
        word: "Slot canyon",
        pronounce: "slot KAN-yun",
        meaning: "A narrow, deep sandstone gorge carved by flash floods — Antelope Canyon is the most famous example",
        example: "Antelope Canyon is a classic slot canyon.",
        exampleMeaning: "A narrow winding canyon carved by water."
      },
      {
        word: "Hualapai",
        pronounce: "WAH-luh-pie",
        meaning: "The Native American tribe whose reservation includes Grand Canyon West and the Skywalk",
        example: "Grand Canyon West is on Hualapai tribal land.",
        exampleMeaning: "The tribe that owns and operates this part of the canyon."
      }
    ]
  },
  {
    dayNumber: 3,
    date: "2026-10-06",
    weekday: "Tuesday",
    departureTime: "08:00",
    rideToFirst: { duration: "2 h", note: "Paris Las Vegas → Death Valley (Badwater) via Pahrump" },
    region: "mainland",
    base: "Independence, CA (Eastern Sierra)",
    title: "Death Valley, then north to Independence",
    subtitle: "Badwater, Artist's Palette and Zabriskie Point, then out the west side to US-395",
    activities: [
      {
        time: "Morning",
        title: "Badwater Basin",
        description: "A boardwalk out onto the salt flats at 282 feet below sea level — the lowest point in North America. Go early before the heat builds.",
        attractionId: "badwater-basin",
        tag: "nature",
        rideToNext: { duration: "20 min", note: "Badwater Road north to Artist's Palette turnoff" }
      },
      {
        time: "Late morning",
        title: "Artist's Palette",
        description: "A one-way scenic drive through volcanic and sedimentary hills streaked pink, green, yellow and purple from oxidized minerals.",
        attractionId: "artists-palette",
        tag: "view",
        rideToNext: { duration: "20 min", note: "Artist's Drive back to CA-190, then to Zabriskie Point" }
      },
      {
        time: "Midday",
        title: "Zabriskie Point",
        description: "A short paved path to an overlook above golden, wildly eroded badlands — one of the park's iconic viewpoints.",
        attractionId: "zabriskie-point",
        tag: "view",
        rideToNext: { duration: "35 min", note: "CA-190 west to Stovepipe Wells" }
      },
      {
        time: "Afternoon",
        title: "Mesquite Flat Sand Dunes",
        description: "Rolling sand dunes near Stovepipe Wells, right on the way out of the park. Fill the tank and top up on water here before the long drive west.",
        attractionId: "mesquite-flat-dunes",
        tag: "nature",
        optional: true,
        rideToNext: { duration: "2 h 30", note: "CA-190 west over Towne Pass → Panamint Valley → US-395 north → Independence", departAt: "15:30" }
      },
      {
        time: "Evening",
        title: "Arrive in Independence",
        description: "A small, quiet Eastern Sierra town on US-395 with the Sierra crest as a backdrop. Dinner, then an early night."
      }
    ],
    driveNotes: "Las Vegas → Badwater ≈ 2 h · Badwater → Stovepipe Wells ≈ 1 h 15 · Stovepipe Wells → Independence ≈ 2 h 30 via CA-190 and US-395",
    restaurants: ["rest-m-furnace-creek"],
    drinkOfTheDay: {
      name: "Electrolyte lemonade (non-alcoholic)",
      type: "other",
      pairing: "Death Valley heat dehydrates faster than it feels — an electrolyte-spiked lemonade is the smarter pick today.",
      servingNote: "Over ice, in a tall glass — drink more water than you think you need"
    },
    gear: [
      { item: "Way more water than feels necessary — one gallon per person per day minimum" },
      { item: "Wide-brim hat and high-SPF sunscreen", for: "badwater-basin" },
      { item: "Sturdy closed shoes — the salt flats are rough underfoot", for: "badwater-basin" },
      { item: "A full tank of gas before entering the park — stations inside are sparse and pricier" }
    ],
    dayTips: [
      "Cell service is minimal to nonexistent inside Death Valley — download offline maps and tell someone your route before you go",
      "Fill up on gas before entering (Pahrump) and again at Stovepipe Wells; the nearest towns outside the park are far apart",
      "October days can still hit 90+°F at Badwater — carry more water than you think you'll need",
      "The drive out to Independence is long and finishes after dark — leave the park by about 15:30",
      "America the Beautiful annual pass covers the Death Valley entrance fee and pays for itself with 3+ parks"
    ],
    phrasesOfDay: [
      {
        word: "Playa",
        pronounce: "PLY-ah",
        meaning: "A dry lakebed — the flat, cracked desert floor common across the American Southwest",
        example: "The salt flats at Badwater sit on an ancient playa.",
        exampleMeaning: "A dried-up lakebed, now crusted with salt."
      },
      {
        word: "Jackpot",
        pronounce: "JAK-pot",
        meaning: "A big win — and a good word for Badwater, nature's own jackpot of extremes",
        example: "Badwater Basin is a geological jackpot of superlatives.",
        exampleMeaning: "The lowest, hottest, driest spot in North America, all in one basin."
      }
    ]
  },
  {
    dayNumber: 4,
    date: "2026-10-07",
    weekday: "Wednesday",
    departureTime: "08:00",
    rideToFirst: { duration: "2 h 30", note: "Independence → Lee Vining via US-395" },
    region: "mainland",
    base: "Incline, NV (Lake Tahoe)",
    title: "US-395 north to Yosemite's east entrance",
    subtitle: "Eastern Sierra scenery, Tioga Pass and the high country — then on to Incline",
    activities: [
      {
        time: "Morning",
        title: "Drive US-395 north",
        description: "One of America's great road-trip highways, with the Sierra crest on your left the whole way. Fuel up in Bishop or Mammoth.",
        rideToNext: { duration: "2 h 30", note: "Independence → Lee Vining on US-395" }
      },
      {
        time: "Late morning",
        title: "Mono Lake, Lee Vining",
        description: "A short stop at the strange tufa towers of Mono Lake just before the Tioga Road turn-off. Last gas and snacks before the park.",
        optional: true,
        rideToNext: { duration: "20 min", note: "Lee Vining → Tioga Pass Entrance (CA-120)" }
      },
      {
        time: "Midday",
        title: "Tioga Pass entrance and Tioga Road",
        description: "Enter Yosemite from the east at Tioga Pass (9,943 ft). Drive the high country: Tuolumne Meadows, Tenaya Lake and Olmsted Point, with Half Dome in the distance. Tioga Road usually closes with the first big snow — check the NPS road status the day before.",
        tag: "view",
        rideToNext: { duration: "3 h", note: "Back out via Tioga Pass → US-395 north → Carson Valley → Incline", departAt: "15:30" }
      },
      {
        time: "Evening",
        title: "Arrive in Incline Village",
        description: "North end of Lake Tahoe on the Nevada side. Dinner, then rest before a full Yosemite day tomorrow."
      }
    ],
    driveNotes: "Independence → Lee Vining ≈ 2 h 30 · Lee Vining → Tioga Pass ≈ 20 min · Tioga Pass → Incline ≈ 3 h via US-395 and NV-28",
    drinkOfTheDay: {
      name: "Craft IPA",
      type: "beer",
      pairing: "A regional Sierra craft beer is a fitting toast at the end of a long road day through the mountains.",
      servingNote: "Pint glass, well-chilled"
    },
    gear: [
      { item: "Warm layers — Tioga Pass is at almost 10,000 ft and can be near freezing in October" },
      { item: "Sturdy walking shoes for Tenaya Lake and Olmsted Point" },
      { item: "Offline maps — cell service is minimal on Tioga Road" },
      { item: "A full tank of gas — there is no fuel inside the park on Tioga Road east of Crane Flat" }
    ],
    dayTips: [
      "Tioga Road and Tioga Pass close for the season with the first major snow — check NPS road conditions before you set out, and have a plan B (lower elevations, or stay on US-395)",
      "Daylight fades around 18:15 — plan to be out of the park by about 15:30 for the drive to Incline",
      "Incline Village is about 3 h from Tioga Pass — a long driving day with a late arrival is expected"
    ],
    phrasesOfDay: [
      {
        word: "Tufa",
        pronounce: "TOO-fah",
        meaning: "Limestone towers formed where freshwater springs meet alkaline lake water — the signature sight at Mono Lake",
        example: "The tufa towers at Mono Lake look like a Dr. Seuss landscape.",
        exampleMeaning: "Odd calcium-carbonate spires rising from the water."
      },
      {
        word: "High country",
        pronounce: "hy KUN-tree",
        meaning: "The alpine zone of the Sierra above about 8,000 ft — meadows, granite and thin air",
        example: "Tuolumne Meadows is the heart of Yosemite's high country.",
        exampleMeaning: "The high-elevation part of the park."
      }
    ]
  },
  {
    dayNumber: 5,
    date: "2026-10-08",
    weekday: "Thursday",
    departureTime: "06:30",
    rideToFirst: { duration: "3 h", note: "Incline → Tioga Pass entrance (east side)" },
    region: "mainland",
    base: "Incline, NV (Lake Tahoe)",
    title: "A full day in Yosemite National Park",
    subtitle: "Tunnel View, the valley floor and the waterfalls — a long day from Incline",
    activities: [
      {
        time: "Morning",
        title: "Tunnel View",
        description: "The classic first look at the valley — El Capitan on the left, Bridalveil Fall on the right, Half Dome centered in the distance. Arrive early for soft light and easy parking.",
        attractionId: "yosemite-tunnel-view",
        tag: "view",
        rideToNext: { duration: "15 min", note: "Wawona Road down to the valley floor" }
      },
      {
        time: "Midday",
        title: "Yosemite Valley floor",
        description: "Walk or shuttle around the valley floor — meadows, granite walls on every side, and the short paved paths to Bridalveil Fall and Lower Yosemite Fall.",
        attractionId: "yosemite-valley-floor",
        tag: "nature",
        rideToNext: { duration: "5 min", note: "short walk from the shuttle stop" }
      },
      {
        time: "Afternoon",
        title: "Bridalveil Fall & Yosemite Falls",
        description: "Two short, paved walks to the base of the valley's signature waterfalls. October is the dry season — expect a trickle rather than a roar, sometimes dry entirely; the granite backdrop is still spectacular.",
        attractionId: "bridalveil-fall",
        tag: "water",
        rideToNext: { duration: "45 min", note: "Valley floor up to Glacier Point Road, if open" }
      },
      {
        time: "Late afternoon",
        title: "Glacier Point (weather permitting)",
        description: "A sweeping panorama over Half Dome and the valley from 7,214 ft — if the road hasn't closed for the season yet. Glacier Point Road typically closes with the first significant snowfall, sometimes as early as late October.",
        attractionId: "glacier-point",
        tag: "view",
        optional: true
      }
    ],
    driveNotes: "Incline → Tioga Pass ≈ 3 h · Tioga Pass → Yosemite Valley ≈ 2 h via Tioga Road · return the same way, so this is a very long day",
    drinkOfTheDay: {
      name: "Central Valley Zinfandel",
      type: "wine",
      pairing: "A jammy, peppery Zinfandel from the Sierra foothills pairs well with a quiet dinner after a long day of granite and waterfalls.",
      servingNote: "Room temperature, a wide-bowled glass"
    },
    gear: [
      { item: "Layers — mornings in the valley can be near freezing in October, afternoons mild", for: "yosemite-tunnel-view" },
      { item: "Sturdy walking shoes for the valley floor paths" },
      { item: "A light rain shell — weather changes fast at elevation" },
      { item: "Camera or phone with a wide lens for Tunnel View" }
    ],
    dayTips: [
      "Incline is far from the valley: about 3 h to Tioga Pass plus 2 h along Tioga Road, each way. Consider spending the day in the high country (Tuolumne Meadows, Tenaya Lake) or moving the second night to a base closer to the park",
      "Check the NPS Tioga Road and Glacier Point Road status the morning of — both close for the season with the first real snow",
      "October waterfalls are often reduced to a trickle or dry entirely — don't expect the springtime roar",
      "Free shuttle buses loop the valley floor; parking fills up by mid-morning"
    ],
    phrasesOfDay: [
      {
        word: "Bear box",
        pronounce: "BAIR boks",
        meaning: "The metal food-storage locker at trailheads and campsites — never leave food in the car",
        example: "Stash the snacks in the bear box before the hike.",
        exampleMeaning: "Lock up food so bears don't get curious."
      },
      {
        word: "Granite dome",
        pronounce: "GRAN-it dohm",
        meaning: "A smooth, rounded rock formation — Half Dome and El Capitan are both granite domes/monoliths",
        example: "Half Dome is the most famous granite dome in the park.",
        exampleMeaning: "The classic Yosemite rock shape."
      }
    ]
  },
  {
    dayNumber: 6,
    date: "2026-10-09",
    weekday: "Friday",
    departureTime: "09:30",
    rideToFirst: { duration: "4 h 15", note: "Incline → San Francisco via I-80" },
    region: "mainland",
    base: "San Francisco, CA (Union Square)",
    title: "Drive to San Francisco",
    subtitle: "Return the Alamo car at Union Square by 18:00, then check in at the Hilton",
    activities: [
      {
        time: "Morning",
        title: "Drive Incline → San Francisco",
        description: "Down over Donner Summit on I-80 through Truckee and Sacramento to the Bay. Fill the tank before the city — gas is much pricier in SF.",
        rideToNext: { duration: "4 h 15", note: "Incline → San Francisco via I-80; allow extra time for Friday traffic", departAt: "09:30" }
      },
      {
        time: "Before 18:00",
        title: "Return the rental car at Union Square",
        description: "Drop the Alamo car at the Union Square location by 18:00. Fill the tank first and take photos of the car's condition. Allow extra time — Friday-afternoon traffic into downtown SF is heavy."
      },
      {
        time: "Evening",
        title: "Check in at Hilton Union Square",
        description: "Two nights (Oct 9–11) at the Hilton on Union Square. Walk to dinner; no car needed from here on."
      }
    ],
    driveNotes: "Incline → San Francisco ≈ 4 h 15 via I-80 · allow extra for Friday traffic",
    drinkOfTheDay: {
      name: "Irish coffee, SF-style",
      type: "coffee",
      pairing: "The Buena Vista Cafe near Fisherman's Wharf made the Irish coffee famous in America — a fitting end to the road-trip leg.",
      servingNote: "Hot, in a stemmed glass, with a cream float"
    },
    gear: [
      { item: "A light jacket — San Francisco evenings are cool and windy" },
      { item: "Rental car paperwork, and photos of the car's condition at drop-off" }
    ],
    dayTips: [
      "Keep the rental-car return deadline (18:00) in mind: leave Incline by about 09:30 to allow for traffic and a fuel stop",
      "Parking in SF is expensive — the Hilton is walkable to everything, so you won't need a car after drop-off",
      "Cable cars run from Powell Street, right next to Union Square"
    ],
    phrasesOfDay: [
      {
        word: "Cable car",
        pronounce: "KAY-bul kar",
        meaning: "San Francisco's hand-operated tram, pulled by a cable under the street",
        example: "Let's take the cable car down Powell.",
        exampleMeaning: "A classic SF ride."
      }
    ]
  },
  {
    dayNumber: 7,
    date: "2026-10-10",
    weekday: "Saturday",
    region: "mainland",
    base: "San Francisco, CA (Union Square)",
    title: "A free day in San Francisco",
    subtitle: "No car, no schedule — pick from the list below",
    activities: [
      {
        time: "Morning",
        title: "Golden Gate Bridge or a cable-car ride",
        description: "Rideshare or bus to the Golden Gate Bridge viewpoints, or ride the Powell–Hyde cable car to Fisherman's Wharf.",
        optional: true
      },
      {
        time: "Afternoon",
        title: "Alcatraz (needs advance booking)",
        description: "Book Alcatraz Island tickets well ahead — they sell out. Otherwise wander Fisherman's Wharf, Chinatown and North Beach.",
        optional: true
      },
      {
        time: "Evening",
        title: "Dinner in the city",
        description: "A last big city dinner before the flight to Hawaii. Pack tonight — the flight to Kona leaves early tomorrow."
      }
    ],
    drinkOfTheDay: {
      name: "Local craft beer",
      type: "beer",
      pairing: "SF is a craft-beer town — an easy pour for a relaxed final evening on the mainland.",
      servingNote: "Pint glass, well-chilled"
    },
    dayTips: [
      "The flight to Kona leaves early tomorrow — pack tonight and arrange the airport ride (leave Union Square around 04:30)",
      "Alcatraz sells out in advance — book ahead",
      "The hills are steep; comfortable shoes beat style"
    ],
    phrasesOfDay: []
  },
  {
    dayNumber: 8,
    date: "2026-10-11",
    weekday: "Sunday",
    departureTime: "04:30",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Fly to the Big Island",
    subtitle: "San Francisco (SFO) → Kona (KOA), depart 07:00, land 09:30 — Budget rental car",
    activities: [
      {
        time: "04:30",
        title: "Leave the hotel for SFO",
        description: "A 07:00 departure means an early start from Union Square. Allow time to drop the bags and clear security, and have the passports and boarding passes handy."
      },
      {
        time: "07:00",
        title: "Fly SFO → Kona (KOA)",
        description: "Depart San Francisco at 07:00 and land at Kona International Airport at 09:30 local time. Hawaii runs three hours behind San Francisco, so the clocks go back on arrival.",
        rideToNext: { duration: "15 min", note: "Kona airport → Budget rental-car shuttle" }
      },
      {
        time: "Late morning",
        title: "Pick up the Budget rental car",
        description: "Budget rents from the Kona airport. Collect the car here and return it at the same airport on Oct 19. Have the driver's licence and the card in the driver's name ready.",
        rideToNext: { duration: "30 min", note: "Kona airport → Kohala Coast resort via Queen Kaʻahumanu Hwy" }
      },
      {
        time: "Afternoon",
        title: "Check into the Kohala Coast resort",
        description: "Settle in on the Big Island's drier, sunnier Kona/Kohala Coast side — a landscape of lava rock and golden coastline. Early check-in may not be available; leave bags with the front desk and walk to the beach."
      }
    ],
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "100% Kona coffee",
      type: "coffee",
      pairing: "You're now in the actual Kona coffee belt — the real thing, brewed where it's grown, is worth savoring slowly on the lanai your first evening here.",
      servingNote: "Hot, black, taken slow"
    },
    gear: [
      { item: "Reef-safe sunscreen — required by Hawaii state law, and the only kind allowed in resort gift shops" },
      { item: "Light, breathable clothing — the Kona side is dry and warm" },
      { item: "Sandals or slides for resort life" }
    ],
    dayTips: [
      "Hawaii is 3 hours behind San Francisco in October — the clocks go back on arrival, so you land earlier than you left",
      "Hawaii requires reef-safe sunscreen (no oxybenzone/octinoxate) by state law — pack it before you go, it can be pricier locally",
      "The Kona/Kohala side of the Big Island is noticeably drier and sunnier than the windward side — pack accordingly"
    ],
    phrasesOfDay: [
      {
        word: "Aloha",
        pronounce: "ah-LOH-hah",
        meaning: "Hello, goodbye, and love/affection all at once — the all-purpose Hawaiian greeting",
        example: "Aloha! Welcome to the Big Island.",
        exampleMeaning: "A warm hello (or goodbye)."
      },
      {
        word: "Kona",
        pronounce: "KOH-nah",
        meaning: "Leeward — the dry, sunny west side of the Big Island, and the name of its main town",
        example: "We're staying on the Kona side this week.",
        exampleMeaning: "The dry, sunny coast, as opposed to windward Hilo."
      }
    ]
  },
  {
    dayNumber: 9,
    date: "2026-10-12",
    weekday: "Monday",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Kona town & a coffee farm tour",
    activities: [
      {
        time: "Morning",
        title: "Kona coffee farm tour",
        description: "A tour of a working farm in the Kona coffee belt — the narrow strip of volcanic slopes between about 800 and 2,500 feet where the world-famous 100% Kona coffee is grown, with a tasting at the end.",
        attractionId: "kona-coffee-farm",
        tag: "food",
        rideToNext: { duration: "20 min", note: "farm country down to Kona town" }
      },
      {
        time: "Afternoon",
        title: "Kona town & beach time",
        description: "Wander downtown Kailua-Kona's waterfront shops and historic sites, then find a beach for the afternoon."
      }
    ],
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "Kona coffee cold brew",
      type: "coffee",
      pairing: "A cold brew straight from this morning's farm tour region — the freshest possible version of the coffee you just watched being grown and roasted.",
      servingNote: "Over ice, black or with a splash of cream"
    },
    dayTips: [
      "Genuine '100% Kona' coffee is protected by Hawaii state law — a 'Kona blend' may only contain 10% actual Kona coffee, so check the label"
    ],
    phrasesOfDay: [
      {
        word: "Kona coffee belt",
        pronounce: "KOH-nah KOF-fee belt",
        meaning: "The narrow volcanic-slope strip on the Big Island's west side where true Kona coffee is grown",
        example: "This farm sits right in the Kona coffee belt.",
        exampleMeaning: "The specific growing region for authentic Kona coffee."
      }
    ]
  },
  {
    dayNumber: 10,
    date: "2026-10-13",
    weekday: "Tuesday",
    departureTime: "08:00",
    rideToFirst: { duration: "2 h 30", note: "Kona → Hawaiʻi Volcanoes National Park" },
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Hawaiʻi Volcanoes National Park",
    subtitle: "A full-day trip — about 2.5 hours each way from the Kona side",
    activities: [
      {
        time: "Midday",
        title: "Kīlauea crater rim & steam vents",
        description: "Walk sections of the Crater Rim Trail overlooking the Kīlauea caldera, and stop at the roadside steam vents where groundwater hits hot volcanic rock.",
        attractionId: "kilauea-crater",
        tag: "nature",
        rideToNext: { duration: "15 min", note: "short drive to Thurston Lava Tube" }
      },
      {
        time: "Afternoon",
        title: "Thurston Lava Tube",
        description: "Walk through a several-hundred-year-old lava tube, a natural tunnel formed as the outer surface of a lava flow cooled and hardened while molten rock kept draining through the middle.",
        attractionId: "thurston-lava-tube",
        tag: "cave",
        rideToNext: { duration: "2 h 30", note: "long drive back to Kona" }
      }
    ],
    driveNotes: "Kona → Hawaiʻi Volcanoes NP ≈ 2 h 30 min each way — a genuine full-day trip",
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "Big Island craft beer",
      type: "beer",
      pairing: "A local Big Island craft brew — a well-earned pour after a long day of driving and lava-country hiking.",
      servingNote: "Pint glass, well-chilled"
    },
    gear: [
      { item: "Layers — Volcanoes NP sits at higher elevation and can be cooler and wetter than the Kona coast" },
      { item: "A flashlight or phone light for the darker stretches of Thurston Lava Tube", for: "thurston-lava-tube" },
      { item: "Sturdy shoes for uneven volcanic terrain" }
    ],
    dayTips: [
      "Check the current eruption/activity status and any air-quality advisories before you go — conditions can change park access",
      "This is a genuine full-day trip from the Kona side — start early",
      "America the Beautiful pass covers the Hawaiʻi Volcanoes NP entrance fee"
    ],
    phrasesOfDay: [
      {
        word: "Kīlauea",
        pronounce: "kee-lah-WAY-ah",
        meaning: "One of the world's most active volcanoes, and the heart of Hawaiʻi Volcanoes National Park",
        example: "Kīlauea has been erupting on and off for decades.",
        exampleMeaning: "The name of the volcano at the park's center."
      },
      {
        word: "Aa vs. pahoehoe",
        pronounce: "AH-ah / pah-HOY-hoy",
        meaning: "The two textures of cooled lava — aa is rough and jagged, pahoehoe is smooth and ropy",
        example: "That trail crosses both aa and pahoehoe flows.",
        exampleMeaning: "Two different lava-rock textures you'll see on the trail."
      }
    ]
  },
  {
    dayNumber: 11,
    date: "2026-10-14",
    weekday: "Wednesday",
    departureTime: "09:00",
    rideToFirst: { duration: "2 h", note: "Kona → Punaluʻu Black Sand Beach" },
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Punaluʻu Black Sand Beach",
    subtitle: "Can combine with a South Point / Green Sand Beach add-on if energy allows",
    activities: [
      {
        time: "Midday",
        title: "Punaluʻu Black Sand Beach",
        description: "A striking black-sand beach formed from cooled lava fragments, near the volcano side of the island — also a well-known spot to see resting Hawaiian green sea turtles on the sand (keep a respectful distance, it's illegal to touch them).",
        attractionId: "punaluu-black-sand-beach",
        tag: "nature",
        optional: false
      },
      {
        time: "Afternoon",
        title: "South Point / Green Sand Beach (optional add-on)",
        description: "The southernmost point in the United States, with a rugged 4WD or long-walk trail out to the unusual olivine-crystal Green Sand Beach — only for the ambitious, given the day's driving already.",
        attractionId: "south-point-green-sand",
        tag: "nature",
        optional: true
      }
    ],
    driveNotes: "Kona → Punaluʻu ≈ 2 h; treat today as a relaxed return day from the volcano side if you'd rather not add South Point",
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "Guava juice (non-alcoholic)",
      type: "other",
      pairing: "A simple, bright island juice for a beach-and-driving day — refreshing without weighing you down before more time behind the wheel.",
      servingNote: "Chilled, straight up"
    },
    gear: [
      { item: "Sturdy shoes if attempting the Green Sand Beach trail — it's a long, exposed walk or a rough 4WD track", for: "south-point-green-sand" },
      { item: "Reef-safe sunscreen and a hat" }
    ],
    dayTips: [
      "Never touch or approach the sea turtles at Punaluʻu — it's illegal under federal law and stresses the animals",
      "Green Sand Beach is a genuinely long walk (or a rough 4WD-only track) — check your energy and time budget before committing"
    ],
    phrasesOfDay: [
      {
        word: "Honu",
        pronounce: "HOH-noo",
        meaning: "Hawaiian green sea turtle — a culturally significant animal, protected by law",
        example: "There's a honu resting on the black sand.",
        exampleMeaning: "A green sea turtle sunning itself."
      }
    ]
  },
  {
    dayNumber: 12,
    date: "2026-10-15",
    weekday: "Thursday",
    departureTime: "17:00",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Manta ray night snorkel",
    activities: [
      {
        time: "Evening",
        title: "Manta ray night snorkel/dive tour",
        description: "The Big Island's signature nighttime experience — boats shine lights into the water off the Kona coast, drawing giant manta rays in to feed, while you float above on a surface line watching them glide beneath you. Book this one ahead; it's popular.",
        attractionId: "manta-ray-night-snorkel",
        tag: "water"
      }
    ],
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "Dark rum & pineapple",
      type: "cocktail",
      pairing: "A simple, dark, tropical nightcap after an evening spent floating under manta rays — nothing needs to compete with that memory, so keep the drink simple.",
      servingNote: "On the rocks, a pineapple wedge"
    },
    gear: [
      { item: "A wetsuit (usually provided by the tour) — the water cools off after dark", for: "manta-ray-night-snorkel" },
      { item: "A waterproof phone case if you want photos", for: "manta-ray-night-snorkel" }
    ],
    dayTips: [
      "Book the manta ray tour in advance — sightings aren't 100% guaranteed but are very common off Kona",
      "Follow the guide's briefing closely — mantas are wild animals and the etiquette (no touching, stay on the surface line) matters"
    ],
    phrasesOfDay: [
      {
        word: "Hāhālua",
        pronounce: "hah-hah-LOO-ah",
        meaning: "Manta ray in Hawaiian",
        example: "We saw three hāhālua feeding tonight.",
        exampleMeaning: "Three manta rays, feeding in the lights."
      }
    ]
  },
  {
    dayNumber: 13,
    date: "2026-10-16",
    weekday: "Friday",
    departureTime: "14:00",
    rideToFirst: { duration: "1 h 30", note: "Kona → Mauna Kea Visitor Information Station" },
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Mauna Kea summit & stargazing",
    subtitle: "Guided tour recommended — 4WD required above the visitor station",
    activities: [
      {
        time: "Afternoon",
        title: "Mauna Kea Visitor Information Station",
        description: "At 9,200 feet, the last stop most visitors can drive to without 4WD — acclimatize here before going higher, and enjoy the view as the sun heads toward the horizon.",
        attractionId: "mauna-kea-summit",
        tag: "view",
        rideToNext: { duration: "45 min", note: "up to the summit area (guided tour vehicle only)" }
      },
      {
        time: "Sunset & night",
        title: "Sunset and stargazing",
        description: "A guided tour is strongly recommended over self-driving — the road above the visitor station requires 4WD and the altitude, cold, and darkness are no joke. Watch sunset from altitude, then stargaze at one of the world's best astronomical sites."
      }
    ],
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "Hot cocoa or hot toddy (non-alcoholic option available)",
      type: "other",
      pairing: "It gets properly cold at 9,200+ feet after dark — something hot in a thermos is the practical and cozy choice tonight, whichever version you pick.",
      servingNote: "In a thermos, sipped bundled up under the stars"
    },
    gear: [
      { item: "Real winter layers — summit temperatures can drop below freezing at night despite being in Hawaii", for: "mauna-kea-summit" },
      { item: "A warm hat and gloves", for: "mauna-kea-summit" },
      { item: "A guided tour booking — 4WD is required above the visitor station and self-driving is discouraged" }
    ],
    dayTips: [
      "Book a guided tour rather than self-driving — the road above 9,200 ft requires 4WD and the summit area has real altitude and cold-weather risk",
      "Bring genuinely warm clothing — this is the coldest you'll be all trip, and it surprises people every time",
      "Give yourself time to acclimatize at the visitor station before going higher if the tour allows it"
    ],
    phrasesOfDay: [
      {
        word: "Mauna Kea",
        pronounce: "MOW-nah KAY-ah",
        meaning: "'White Mountain' — the Big Island's tallest peak and one of the best stargazing sites on Earth",
        example: "Mauna Kea's summit sits above 13,800 feet.",
        exampleMeaning: "The dormant volcano's name means White Mountain."
      }
    ]
  },
  {
    dayNumber: 14,
    date: "2026-10-17",
    weekday: "Saturday",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Free beach day — Kahaluʻu",
    activities: [
      {
        time: "All day",
        title: "Kahaluʻu Beach Park",
        description: "One of the Big Island's best easy snorkel spots right off the sand — calm, shallow, and full of reef fish, with lifeguards on duty and honu (sea turtles) commonly resting nearby.",
        attractionId: "kahaluu-beach-park",
        tag: "water"
      }
    ],
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "POG juice (non-alcoholic)",
      type: "other",
      pairing: "Another round of the passion-orange-guava classic — simple, cold, and exactly right for a lazy beach day.",
      servingNote: "Ice-cold, no garnish"
    },
    gear: [
      { item: "Snorkel gear — Kahaluʻu is one of the easiest shore-entry snorkel spots on the island", for: "kahaluu-beach-park" },
      { item: "Reef-safe sunscreen" }
    ],
    dayTips: [
      "Kahaluʻu's shallow reef is easy for beginner snorkelers but still has real current at times — heed any posted lifeguard flags"
    ],
    phrasesOfDay: []
  },
  {
    dayNumber: 15,
    date: "2026-10-18",
    weekday: "Sunday",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Last relaxed day — pack & a sunset dinner",
    activities: [
      {
        time: "Day",
        title: "Pack and unwind",
        description: "A deliberately light last full day on the island — pack up, soak in the last bit of resort time before tomorrow's inter-island flight to Maui."
      },
      {
        time: "Evening",
        title: "Couples sunset dinner",
        description: "A nice bookend to the Hawaii leg — a sunset dinner somewhere with an ocean view, to mark the close of the honeymoon's island half."
      }
    ],
    restaurants: ["rest-h-kona-fish-shack"],
    drinkOfTheDay: {
      name: "Mai Tai",
      type: "cocktail",
      pairing: "One more Mai Tai to bookend the Hawaii leg the same way it started — full circle before the hop over to Maui tomorrow.",
      servingNote: "Over crushed ice, dark rum float, lime and mint"
    },
    dayTips: [
      "Reconfirm tomorrow's 12:50 Kona → Maui flight, fuel up the Budget car for return, and pack the night before",
      "A good night to settle any resort incidentals before an early departure"
    ],
    phrasesOfDay: [
      {
        word: "A hui hou",
        pronounce: "ah HOO-ee hoh",
        meaning: "Goodbye, in the sense of 'until we meet again'",
        example: "A hui hou, Big Island.",
        exampleMeaning: "Goodbye for now, Big Island."
      }
    ]
  },
  {
    dayNumber: 16,
    date: "2026-10-19",
    weekday: "Monday",
    departureTime: "10:30",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Inter-island hop to Maui",
    subtitle: "Kona (KOA) → Maui (OGG), depart 12:50, land 13:30 — Budget rental car",
    activities: [
      {
        time: "Morning",
        title: "Return the Budget car at Kona airport",
        description: "Return the Big Island rental car at Kona airport and fuel it up first. Allow time before the 12:50 inter-island flight. Check the airline's inter-island baggage allowance, which can differ from mainland flights.",
        rideToNext: { duration: "—", note: "Arrive at the gate by about 12:00" }
      },
      {
        time: "12:50",
        title: "Fly Kona → Maui (OGG)",
        description: "A short inter-island hop: depart 12:50, land at Kahului at 13:30."
      },
      {
        time: "Afternoon",
        title: "Pick up the Budget rental car at OGG",
        description: "Budget rents from the Kahului airport. Collect the car and return it at the same airport on Oct 27.",
        rideToNext: { duration: "35 min", note: "Kahului airport → Wailea via Pilani Hwy / HI-31" }
      },
      {
        time: "Late afternoon",
        title: "Check into the resort in Wailea",
        description: "Settle in on Maui's upscale south shore — a lush, green contrast to the dry Kona coast.",
        attractionId: "wailea-beach",
        tag: "family"
      },
      {
        time: "Evening",
        title: "Sunset by the water",
        description: "No plans tonight beyond watching the sun go down over the Pacific — a gentle first evening on Maui."
      }
    ],
    restaurants: ["rest-h-wailea-grill"],
    drinkOfTheDay: {
      name: "Mai Tai",
      type: "cocktail",
      pairing: "The quintessential first-night-on-Maui pour — dark and light rum, orgeat, lime, orange curaçao.",
      servingNote: "Over crushed ice, floated dark rum, a mint sprig and lime wheel"
    },
    gear: [
      { item: "Reef-safe sunscreen — required by Hawaii state law" },
      { item: "Light, breathable clothing — Maui in October is warm and humid" },
      { item: "Confirm inter-island baggage allowance before the flight — often stricter than mainland routes" }
    ],
    dayTips: [
      "Inter-island flights often have tighter baggage weight limits than mainland-to-Hawaii legs — check before packing",
      "Return the Kona rental car with a full tank and allow extra time for the shuttle to the terminal",
      "Maui is windier and wetter on the east side and in the mountains — pack a light rain layer"
    ],
    phrasesOfDay: [
      {
        word: "Mahalo",
        pronounce: "mah-HAH-loh",
        meaning: "Thank you",
        example: "Mahalo for the lei!",
        exampleMeaning: "Thanks for the flower garland."
      }
    ]
  },
  {
    dayNumber: 17,
    date: "2026-10-20",
    weekday: "Tuesday",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Beach day at Wailea",
    activities: [
      {
        time: "All day",
        title: "Wailea Beach",
        description: "A wide, calm, gold-sand beach fronting the resort corridor — easy swimming, good snorkeling near the rocky points at either end. Rent snorkel gear for the day.",
        attractionId: "wailea-beach",
        tag: "water"
      }
    ],
    restaurants: ["rest-h-wailea-grill", "rest-h-abc-stores-wailea"],
    drinkOfTheDay: {
      name: "Lava Flow",
      type: "cocktail",
      pairing: "A layered strawberry-pineapple-coconut frozen cocktail named for its lava-red swirl — a beach-day classic, and a fun echo of the real lava you saw on the Big Island.",
      servingNote: "Frozen, in a tall glass, strawberry purée poured in last for the 'lava' streak"
    },
    gear: [
      { item: "Snorkel gear (rent locally or bring your own mask)", for: "wailea-beach" },
      { item: "Reef-safe sunscreen — reapply often" },
      { item: "Beach towels and a sun umbrella" }
    ],
    dayTips: [
      "Snorkeling is best in the morning before the trade winds pick up and stir the water",
      "The rocky points at either end of Wailea Beach have the most fish; the open middle stretch is best for swimming"
    ],
    phrasesOfDay: [
      {
        word: "Ohana",
        pronounce: "oh-HAH-nah",
        meaning: "Family — often extended to close friends who are family in every way but blood",
        example: "You're ohana now.",
        exampleMeaning: "You're family."
      },
      {
        word: "Makai",
        pronounce: "mah-KAI",
        meaning: "Toward the ocean — a direction word locals actually use instead of compass points",
        example: "Our room faces makai.",
        exampleMeaning: "Our room faces the ocean side."
      }
    ]
  },
  {
    dayNumber: 18,
    date: "2026-10-21",
    weekday: "Wednesday",
    departureTime: "07:00",
    rideToFirst: { duration: "1 h 30", note: "Wailea → Road to Hana start (Kahului/Paia)" },
    region: "hawaii",
    base: "Wailea, Maui",
    title: "The Road to Hana",
    subtitle: "A full day, roughly 10 hours round trip — waterfalls, black sand, and 600 curves",
    activities: [
      {
        time: "Morning",
        title: "Twin Falls",
        description: "The most accessible waterfall stop on the drive, a short easy walk from the road — a good first taste of the jungle scenery ahead.",
        attractionId: "twin-falls-maui",
        tag: "water",
        rideToNext: { duration: "1 h 30", note: "continuing along the Hana Highway's curves" }
      },
      {
        time: "Midday",
        title: "Waiʻānapanapa State Park — black sand beach",
        description: "A dramatic black-sand beach framed by lava rock and a sea cave, plus a short coastal trail. A reservation is required for the state park in advance.",
        attractionId: "waianapanapa-state-park",
        tag: "nature",
        rideToNext: { duration: "10 min", note: "into Hana town" }
      },
      {
        time: "Afternoon",
        title: "Hana town",
        description: "The tiny, sleepy town at the end (or midpoint) of the drive — a good lunch and leg-stretch stop before either continuing or turning back.",
        attractionId: "hana-town",
        tag: "village",
        rideToNext: { duration: "45 min", note: "short detour to Wailua Falls if energy allows" }
      },
      {
        time: "Return",
        title: "Wailua Falls (optional detour)",
        description: "A tall, easily-viewed roadside waterfall just past Hana — worth the short detour if you still have daylight.",
        attractionId: "wailua-falls",
        tag: "water",
        optional: true
      }
    ],
    driveNotes: "Road to Hana ≈ 10 hours round trip from Wailea, including stops — over 600 curves and 50+ one-lane bridges",
    restaurants: ["rest-h-hana-town-stand"],
    drinkOfTheDay: {
      name: "Fresh coconut water (non-alcoholic)",
      type: "other",
      pairing: "Roadside stands along the Hana Highway sell fresh coconuts cracked to order — the single best hydration stop on a long, winding drive day.",
      servingNote: "Straight from the coconut, with a straw"
    },
    gear: [
      { item: "Motion-sickness remedy if anyone is prone to it — the road has 600+ curves" },
      { item: "Water shoes for wading near waterfalls", for: "twin-falls-maui" },
      { item: "Cash for roadside fruit and coconut stands" },
      { item: "A full tank of gas before starting — gas stations thin out past Paia" }
    ],
    dayTips: [
      "Waiʻānapanapa State Park requires an advance reservation — book it before you leave, walk-ins are turned away",
      "Start early (by 7 am) to beat both the tour-van traffic and the afternoon light fading on the return",
      "Download offline maps — cell service drops out for long stretches on the Hana Highway",
      "One-lane bridges require yielding etiquette — the driver going uphill or with the bridge sign in their favor goes first"
    ],
    phrasesOfDay: [
      {
        word: "Pau hana",
        pronounce: "pow HAH-nah",
        meaning: "Literally 'work finished' — used the way people elsewhere say 'happy hour' or 'done for the day'",
        example: "Pau hana drinks by the pool tonight.",
        exampleMeaning: "End-of-day drinks, once the work is done."
      },
      {
        word: "Aina",
        pronounce: "EYE-nah",
        meaning: "The land — carries a sense of the land as something to care for, not just scenery",
        example: "Malama ka aina — take care of the land.",
        exampleMeaning: "Respect the land you're visiting."
      }
    ]
  },
  {
    dayNumber: 19,
    date: "2026-10-22",
    weekday: "Thursday",
    departureTime: "03:00",
    rideToFirst: { duration: "1 h 30", note: "Wailea → Haleakalā summit" },
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Sunrise above the clouds — Haleakalā",
    subtitle: "Requires an advance sunrise-viewing reservation, booked separately from park entry",
    activities: [
      {
        time: "Pre-dawn",
        title: "Haleakalā summit sunrise",
        description: "Watch dawn break over the volcanic crater from 10,023 feet — a genuinely otherworldly, above-the-clouds sunrise. The National Park Service requires a separate advance reservation for the sunrise viewing area (3:00–7:00 am), on top of the standard park entrance fee. If sunrise isn't for you, a relaxed daytime summit visit skips the reservation requirement and still delivers the crater views.",
        attractionId: "haleakala-summit",
        tag: "view",
        rideToNext: { duration: "1 h 30", note: "descend back to Wailea for the day" }
      },
      {
        time: "Rest of the day",
        title: "Recover, resort time",
        description: "A short night — plan a relaxed afternoon back at the resort after the early start."
      }
    ],
    restaurants: ["rest-h-wailea-grill"],
    drinkOfTheDay: {
      name: "Kona coffee",
      type: "coffee",
      pairing: "You'll want real coffee after a 3 am wake-up call — a proper 100% Kona-grown cup, dark and rich, is the right way to come back down from the summit.",
      servingNote: "Hot, black, strong enough to matter"
    },
    gear: [
      { item: "Warm layers — the summit can be near freezing before sunrise despite being in Hawaii", for: "haleakala-summit" },
      { item: "A blanket or jacket for the pre-dawn wait", for: "haleakala-summit" },
      { item: "Fully charged camera/phone battery — cold drains batteries fast" }
    ],
    dayTips: [
      "The Haleakalā sunrise viewing reservation must be booked in advance via recreation.gov, separate from the park entrance fee — this sells out, don't leave it late",
      "Bring real warm layers — summit temperatures can be near or below freezing even though you're in Hawaii",
      "Leave by 3 am at the latest to make the reservation window and find parking",
      "If the sunrise slot is gone, a daytime summit visit needs no reservation and still has the crater views"
    ],
    phrasesOfDay: [
      {
        word: "Kokua",
        pronounce: "koh-KOO-ah",
        meaning: "Help, cooperation — often used as a polite request, like 'please kokua by staying on the trail'",
        example: "Please kokua and pack out your trash.",
        exampleMeaning: "Please help out by taking your trash with you."
      },
      {
        word: "Haleakalā",
        pronounce: "hah-leh-ah-kah-LAH",
        meaning: "'House of the Sun' — the dormant volcano that makes up most of East Maui",
        example: "We watched the sunrise from Haleakalā's summit.",
        exampleMeaning: "The volcano's name means House of the Sun."
      }
    ]
  },
  {
    dayNumber: 20,
    date: "2026-10-23",
    weekday: "Friday",
    departureTime: "06:30",
    rideToFirst: { duration: "20 min", note: "Wailea → Maalaea Harbor" },
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Molokini Crater snorkel cruise",
    activities: [
      {
        time: "Morning",
        title: "Molokini Crater snorkel/boat tour",
        description: "A half-day boat trip out to the partially-submerged volcanic crescent of Molokini, a marine preserve with some of Maui's clearest water and richest reef fish. Book the boat in advance.",
        attractionId: "molokini-crater",
        tag: "water",
        rideToNext: { duration: "20 min", note: "back to Wailea for the afternoon" }
      },
      {
        time: "Afternoon",
        title: "Free afternoon / spa",
        description: "A relaxed second half of the day — pool time or a couples spa treatment back at the resort."
      }
    ],
    restaurants: ["rest-h-wailea-grill"],
    drinkOfTheDay: {
      name: "Blue Hawaii",
      type: "cocktail",
      pairing: "Bright blue curaçao, rum, and pineapple — pure vacation kitsch, and a fun match for a day spent snorkeling impossibly clear water.",
      servingNote: "On the rocks, tall glass, a pineapple wedge"
    },
    gear: [
      { item: "Reef-safe sunscreen — apply well before boarding, not on the boat", for: "molokini-crater" },
      { item: "Rash guard for sun protection on the water", for: "molokini-crater" },
      { item: "Motion-sickness remedy if prone to seasickness" }
    ],
    dayTips: [
      "Morning tours have calmer water and better visibility than afternoon departures",
      "Apply sunscreen at least 20 minutes before boarding so it doesn't wash off in the water immediately"
    ],
    phrasesOfDay: [
      {
        word: "Shaka",
        pronounce: "SHAH-kah",
        meaning: "The thumb-and-pinky hand gesture that means hello, thanks, or 'all good' — Hawaii's universal friendly wave",
        example: "The boat captain gave us a shaka as we left the dock.",
        exampleMeaning: "A friendly hand gesture, thumb and pinky out."
      }
    ]
  },
  {
    dayNumber: 21,
    date: "2026-10-24",
    weekday: "Saturday",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Lahaina & a sunset luau",
    activities: [
      {
        time: "Afternoon",
        title: "Lahaina historic town",
        description: "The former capital of the Hawaiian Kingdom and a historic whaling port. Check current visitor guidance before you go, as parts of the town have been recovering from the 2023 wildfire.",
        attractionId: "lahaina-town",
        tag: "culture",
        rideToNext: { duration: "30 min", note: "Lahaina → Wailea for the evening" }
      },
      {
        time: "Evening",
        title: "Sunset luau (suggested honeymoon flourish)",
        description: "Consider booking an evening luau experience — traditional Hawaiian food, music and hula, in the style of the well-known Old Lahaina Luau. A nice honeymoon touch to close out the Maui half of the trip."
      }
    ],
    restaurants: ["rest-h-wailea-grill"],
    drinkOfTheDay: {
      name: "Mai Tai",
      type: "cocktail",
      pairing: "A repeat for a reason — a proper Mai Tai at a luau, served with the show, is a different experience than the first-night version. Worth the encore.",
      servingNote: "Over crushed ice, dark rum float, mint and lime"
    },
    dayTips: [
      "Check current conditions and visitor guidance for Lahaina before visiting, given the town's ongoing recovery",
      "Book any luau well in advance — the well-known ones sell out on weekends"
    ],
    phrasesOfDay: [
      {
        word: "Hale",
        pronounce: "HAH-leh",
        meaning: "House or building — as in Haleakalā ('house of the sun')",
        example: "The hale by the beach is where the luau is held.",
        exampleMeaning: "The building by the beach hosts the luau."
      }
    ]
  },
  {
    dayNumber: 22,
    date: "2026-10-25",
    weekday: "Sunday",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Free day — resort time",
    activities: [
      {
        time: "All day",
        title: "Relax at the resort",
        description: "A deliberately empty day — pool, beach, and a couples spa treatment if you haven't already."
      }
    ],
    restaurants: ["rest-h-wailea-grill", "rest-h-abc-stores-wailea"],
    drinkOfTheDay: {
      name: "POG juice (non-alcoholic)",
      type: "other",
      pairing: "Passion-orange-guava juice — the ubiquitous, beloved Hawaiian non-alcoholic staple. A perfect lazy-day poolside sip that needs no justification.",
      servingNote: "Ice-cold, straight up, no garnish needed"
    },
    dayTips: [
      "A good day to book that couples massage if you haven't yet — resort spas fill up on weekends"
    ],
    phrasesOfDay: [
      {
        word: "A hui hou",
        pronounce: "ah HOO-ee hoh",
        meaning: "Goodbye, in the sense of 'until we meet again' — a warm, not-final farewell",
        example: "A hui hou, Maui — see you again someday.",
        exampleMeaning: "Goodbye for now, Maui."
      }
    ]
  },
  {
    dayNumber: 23,
    date: "2026-10-26",
    weekday: "Monday",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Last full day — beach, pack, and a farewell dinner",
    subtitle: "No fixed plans — the flight to the mainland is tomorrow morning",
    activities: [
      {
        time: "Morning",
        title: "Beach or pool morning",
        description: "A slow last morning on Maui — swim, snorkel, or just lie on the sand.",
        attractionId: "wailea-beach",
        tag: "water"
      },
      {
        time: "Afternoon",
        title: "Souvenirs and packing",
        description: "Pick up last gifts and pack. Remember Hawaii's agricultural rules for fresh produce and plants, and the airline's liquid and baggage-weight limits for tomorrow's flights."
      },
      {
        time: "Evening",
        title: "Farewell dinner and a last sunset",
        description: "One more sunset over the Pacific and a final dinner of the trip on the islands."
      }
    ],
    restaurants: ["rest-h-wailea-grill"],
    drinkOfTheDay: {
      name: "Mai Tai",
      type: "cocktail",
      pairing: "A last Mai Tai at sunset to close out the islands.",
      servingNote: "Over crushed ice, floated dark rum, a mint sprig and lime wheel"
    },
    dayTips: [
      "Return the Budget rental at OGG tomorrow before the 10:30 flight — plan to fuel up tonight",
      "Check agricultural inspection rules for anything you're taking off the islands"
    ],
    phrasesOfDay: [
      {
        word: "A hui hou",
        pronounce: "ah HOO-ee HOH",
        meaning: "Until we meet again — the traditional Hawaiian farewell",
        example: "A hui hou, Maui!",
        exampleMeaning: "Until we meet again."
      }
    ]
  },
  {
    dayNumber: 24,
    date: "2026-10-27",
    weekday: "Tuesday",
    departureTime: "08:00",
    region: "transit",
    base: "SFO airport area",
    title: "Fly back to the mainland",
    subtitle: "Maui (OGG) → San Francisco (SFO), depart 10:30, land 18:30, overnight near the airport",
    activities: [
      {
        time: "Morning",
        title: "Return the Budget car at Kahului (OGG)",
        description: "Fuel up and return the Maui rental car at the airport, then check in and clear security. Allow generous time — Hawaii's agricultural inspection applies on the way out."
      },
      {
        time: "10:30",
        title: "Flight to San Francisco",
        description: "Fly OGG → SFO: depart 10:30 (Hawaii time), land 18:30 (Pacific time). Hawaii is 3 hours behind SF in October, so you lose some clock time on the way."
      },
      {
        time: "Evening",
        title: "Overnight near SFO",
        description: "Check into an airport-area hotel to rest before tomorrow's early long-haul flight home, rather than pushing straight through on minimal sleep."
      }
    ],
    restaurants: [],
    drinkOfTheDay: {
      name: "Decaf coffee (non-alcoholic)",
      type: "coffee",
      pairing: "A quiet, low-key night before the big transpacific flight home tomorrow — something warm and calming beats anything else on the menu tonight.",
      servingNote: "Hot, decaf, taken easy"
    },
    gear: [
      { item: "A light jacket — San Francisco evenings in October are noticeably cooler than Hawaii" },
      { item: "All Hawaii souvenirs packed within airline liquid/agriculture rules for the next flight" }
    ],
    dayTips: [
      "Hawaii agricultural inspection applies when leaving the islands — some fresh produce and plants can't travel with you",
      "An SFO-area overnight beats a same-day connection onto a long-haul flight — you'll land in Tel Aviv far less wrecked",
      "The flight home leaves very early tomorrow (08:55) — set an alarm and arrange the shuttle tonight"
    ],
    phrasesOfDay: []
  },
  {
    dayNumber: 25,
    date: "2026-10-28",
    weekday: "Wednesday",
    departureTime: "05:30",
    region: "transit",
    base: "SFO airport area",
    title: "Fly home to Tel Aviv",
    subtitle: "San Francisco (SFO) → Tel Aviv, depart 08:55, land Oct 29 at 14:15",
    leadImage: "./images/tel-aviv-skyline.jpg",
    leadImageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/lpQwaLWhw9Q",
      licenseUrl: "https://unsplash.com/license"
    },
    activities: [
      {
        time: "05:55",
        title: "At SFO check-in",
        description: "Bag-drop typically opens 3 hours before a long-haul international departure. Grab a last coffee near the gate."
      },
      {
        time: "08:55",
        title: "Take-off",
        description: "Depart SFO for Tel Aviv. A hui hou to the American West and the islands — see you again someday."
      }
    ],
    gear: [
      { item: "Light layers for the long flight" },
      { item: "Passports and boarding passes easily reachable" },
      { item: "All gels & liquids re-decanted to ≤ 100 ml / 3.4 oz" }
    ],
    dayTips: [
      "International bag-drop typically opens 3 hours before departure — be at the airport by about 05:55",
      "Allow extra time for security given the long-haul international queue at SFO"
    ],
    phrasesOfDay: []
  },
  {
    dayNumber: 26,
    date: "2026-10-29",
    weekday: "Thursday",
    region: "transit",
    base: "Tel Aviv, Israel",
    title: "Back home in Israel",
    subtitle: "Land at Ben Gurion at 14:15",
    leadImage: "./images/tel-aviv-skyline.jpg",
    leadImageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/lpQwaLWhw9Q",
      licenseUrl: "https://unsplash.com/license"
    },
    activities: [
      {
        time: "14:15",
        title: "Land in Tel Aviv",
        description: "Welcome home — wrap-up of an unforgettable trip."
      }
    ],
    dayTips: [],
    phrasesOfDay: []
  }
];
