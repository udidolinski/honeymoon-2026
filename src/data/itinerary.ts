import type { Day, ImageCredit } from "./types";

const wmCredit = (article: string): ImageCredit => ({
  author: `Wikipedia/Wikimedia Commons contributors`,
  license: "CC BY-SA",
  source: `https://en.wikipedia.org/wiki/${article}`,
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
});

export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-10-04",
    weekday: "Sunday",
    region: "mainland",
    base: "Oakhurst, CA (Yosemite gateway)",
    title: "Land in San Francisco, drive to the Sierra",
    subtitle: "Arrive SFO 14:45, pick up the rental car, head for Yosemite's south gate",
    leadImage: "./images/sfo-airport.jpg",
    leadImageCredit: wmCredit("San_Francisco_International_Airport"),
    activities: [
      {
        time: "14:45",
        title: "Land at San Francisco (SFO)",
        description: "Pick up the rental car at the SFO Rental Car Center (any major brand — e.g. Hertz). Confirm a credit card in the driver's name; fuel policy is usually full-to-full.",
        rideToNext: { duration: "3 h 30", note: "via I-580 + CA-99 + CA-41 · ≈ 200 mi", departAt: "16:00" }
      },
      {
        time: "Evening",
        title: "Arrive in Oakhurst, settle in",
        description: "Light dinner, early to bed — jet lag plus a long first driving day. Save the sightseeing for tomorrow, when you're fresh for the park."
      }
    ],
    driveNotes: "SFO → Oakhurst ≈ 3 h 30 min via I-580, CA-99 and CA-41",
    restaurants: ["rest-m-oakhurst-diner"],
    drinkOfTheDay: {
      name: "Sierra Nevada Pale Ale",
      type: "beer",
      pairing: "A California classic brewed right up the road in Chico — hoppy, crisp, the obvious first-night toast after a long-haul flight and a mountain drive.",
      servingNote: "Pint glass, well-chilled — no fuss needed after a travel day"
    },
    gear: [
      { item: "Comfortable travel layers — SFO is air-conditioned, the Sierra foothills can still be warm in October" },
      { item: "Slip-on shoes for airport security" },
      { item: "Refillable water bottles (empty for security, fill after)" },
      { item: "Passports + rental confirmation easily reachable" }
    ],
    dayTips: [
      "October daylight fades by 6:30 pm in the Sierra — aim to be off mountain roads before dark on the first night",
      "Confirm the rental car's tank policy before you drive off the lot",
      "Cell service thins out past Fresno on CA-41 — download offline maps before you leave SFO"
    ],
    phrasesOfDay: [
      {
        word: "Trailhead",
        pronounce: "TRAYL-hed",
        meaning: "The starting point of a hiking trail — look for the wooden signpost and parking pullout",
        example: "We'll meet at the Tunnel View trailhead.",
        exampleMeaning: "The spot where that walk begins."
      },
      {
        word: "Switchback",
        pronounce: "SWICH-bak",
        meaning: "A hairpin turn on a steep mountain road or trail, zig-zagging up a grade",
        example: "CA-41 has some tight switchbacks near the park entrance.",
        exampleMeaning: "Sharp zig-zag turns on the climb."
      },
      {
        word: "Scenic overlook",
        pronounce: "SEE-nik OH-ver-look",
        meaning: "A signed pullout built for the view, not through traffic",
        example: "Tunnel View is the classic Yosemite scenic overlook.",
        exampleMeaning: "A designated stop just for the photo."
      }
    ]
  },
  {
    dayNumber: 2,
    date: "2026-10-05",
    weekday: "Monday",
    departureTime: "08:00",
    rideToFirst: { duration: "30 min", note: "Oakhurst → Yosemite South Entrance" },
    region: "mainland",
    base: "Oakhurst, CA (Yosemite gateway)",
    title: "A full day in Yosemite National Park",
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
    driveNotes: "South Entrance → Tunnel View → Valley floor ≈ 45 min · Valley → Glacier Point ≈ 45 min",
    restaurants: ["rest-m-oakhurst-diner", "rest-m-yosemite-lodge"],
    drinkOfTheDay: {
      name: "Central Valley Zinfandel",
      type: "wine",
      pairing: "California is wine country adjacent even out here — a jammy, peppery Zinfandel from the Sierra foothills pairs well with a fireside dinner after a long day of granite and waterfalls.",
      servingNote: "Room temperature, a wide-bowled glass"
    },
    gear: [
      { item: "Layers — mornings in the valley can be near freezing in October, afternoons mild", for: "yosemite-tunnel-view" },
      { item: "Sturdy walking shoes for the valley floor paths" },
      { item: "A light rain shell — weather changes fast at elevation" },
      { item: "Camera or phone with a wide lens for Tunnel View" }
    ],
    dayTips: [
      "Check the NPS Glacier Point Road status the morning of — it closes for the season with the first real snow, sometimes weeks earlier than expected",
      "October waterfalls are often reduced to a trickle or dry entirely — don't expect the springtime roar",
      "Free shuttle buses loop the valley floor; parking fills up by mid-morning",
      "America the Beautiful annual pass covers the Yosemite entrance fee and pays for itself with 3+ parks on this trip"
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
    dayNumber: 3,
    date: "2026-10-06",
    weekday: "Tuesday",
    departureTime: "08:30",
    rideToFirst: { duration: "3 h", note: "Oakhurst → Sequoia National Park" },
    region: "mainland",
    base: "Three Rivers, CA (Sequoia gateway)",
    title: "Yosemite to the Giant Forest",
    subtitle: "Drive south to Sequoia & Kings Canyon National Park",
    activities: [
      {
        time: "Midday",
        title: "General Sherman Tree",
        description: "A short, paved half-mile walk to the largest tree on Earth by volume — a giant sequoia about 275 feet tall and roughly 36 feet in diameter at the base, with an estimated volume near 52,500 cubic feet.",
        attractionId: "general-sherman-tree",
        tag: "nature",
        rideToNext: { duration: "10 min", note: "Giant Forest Museum, short drive" }
      },
      {
        time: "Afternoon",
        title: "Giant Forest Museum",
        description: "A small, well-done museum on giant sequoia biology and fire ecology — a good grounding stop between the big trees.",
        attractionId: "giant-forest-museum",
        tag: "culture",
        rideToNext: { duration: "10 min", note: "Moro Rock trailhead" }
      },
      {
        time: "Late afternoon",
        title: "Moro Rock (if legs allow)",
        description: "A steep 350-step stairway carved into the granite dome, climbing about 300 feet for a 360-degree view of the Great Western Divide. Not for anyone with vertigo or bad knees — the steps are narrow with sheer drops.",
        attractionId: "moro-rock",
        tag: "view",
        optional: true
      }
    ],
    driveNotes: "Oakhurst → Sequoia (Ash Mountain entrance) ≈ 3 h · Giant Forest area drives are all short hops",
    restaurants: ["rest-m-three-rivers-cafe"],
    drinkOfTheDay: {
      name: "Sequoia amber ale",
      type: "beer",
      pairing: "A malty local amber from a Central Valley brewery — the right low-key toast after a day spent craning your neck at the world's biggest trees.",
      servingNote: "Pint glass, cellar temperature"
    },
    gear: [
      { item: "Sturdy shoes for the Moro Rock stairs — narrow, steep, no room for flip-flops", for: "moro-rock" },
      { item: "Layers — Giant Forest sits above 6,000 ft and cools quickly at sunset" },
      { item: "Water bottle — the Moro Rock climb is short but steep" }
    ],
    dayTips: [
      "Generals Highway between the parks is narrow and winding — budget extra time, especially with an RV or trailer ahead of you",
      "America the Beautiful pass covers Sequoia & Kings Canyon entrance",
      "Moro Rock's stairway can ice over even in October at elevation — check conditions at the visitor center first"
    ],
    phrasesOfDay: [
      {
        word: "Giant sequoia",
        pronounce: "sih-KWOY-uh",
        meaning: "The massive tree species native only to the western Sierra Nevada — different from the taller coastal redwood",
        example: "General Sherman is a giant sequoia, not a redwood.",
        exampleMeaning: "The tree species you're standing under."
      },
      {
        word: "Great Western Divide",
        pronounce: "grayt WES-tern dih-VYD",
        meaning: "The jagged mountain ridge visible from Moro Rock, separating the Kaweah and Kern river drainages",
        example: "You can see the whole Great Western Divide from the top.",
        exampleMeaning: "The mountain skyline from Moro Rock's summit."
      }
    ]
  },
  {
    dayNumber: 4,
    date: "2026-10-07",
    weekday: "Wednesday",
    departureTime: "09:00",
    rideToFirst: { duration: "5 h", note: "Three Rivers → Death Valley National Park" },
    region: "mainland",
    base: "Furnace Creek, Death Valley",
    title: "Into the desert — Death Valley",
    subtitle: "A long driving day; fuel up before you enter, cell service is minimal inside the park",
    activities: [
      {
        time: "Afternoon",
        title: "Badwater Basin",
        description: "A boardwalk out onto the salt flats at 282 feet below sea level — the lowest point in North America. The white salt crust stretches for miles; the heat even in October can still surprise.",
        attractionId: "badwater-basin",
        tag: "nature",
        rideToNext: { duration: "20 min", note: "Badwater Road north to Artist's Palette turnoff" }
      },
      {
        time: "Late afternoon",
        title: "Artist's Palette",
        description: "A one-way scenic drive through volcanic and sedimentary hills streaked pink, green, yellow and purple from oxidized minerals — best in late-afternoon light.",
        attractionId: "artists-palette",
        tag: "view",
        rideToNext: { duration: "20 min", note: "Artist's Drive back to CA-190, then north" }
      },
      {
        time: "Sunset",
        title: "Sunset at Zabriskie Point",
        description: "A short paved path to an overlook above golden, wildly eroded badlands — one of the park's iconic sunset spots.",
        attractionId: "zabriskie-point",
        tag: "view"
      }
    ],
    driveNotes: "Three Rivers → Death Valley (Furnace Creek) ≈ 5 h — fill the tank before entering the park, cell coverage is minimal to nonexistent inside",
    restaurants: ["rest-m-furnace-creek"],
    drinkOfTheDay: {
      name: "Electrolyte lemonade (non-alcoholic)",
      type: "other",
      pairing: "Death Valley heat dehydrates faster than it feels — an electrolyte-spiked lemonade at the Furnace Creek saloon is the smarter pick tonight over anything alcoholic.",
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
      "Fill up on gas before entering; the nearest towns outside the park are far apart",
      "October days can still hit 90+°F at Badwater — carry more water than you think you'll need",
      "Zabriskie Point gets crowded at sunset — arrive 30 minutes early to get a good spot on the overlook"
    ],
    phrasesOfDay: [
      {
        word: "Jackpot",
        pronounce: "JAK-pot",
        meaning: "Save this one for Vegas in a few days — for now, think of the salt flats as nature's own jackpot of extremes",
        example: "Badwater Basin is a geological jackpot of superlatives.",
        exampleMeaning: "The lowest, hottest, driest spot in North America, all in one basin."
      },
      {
        word: "Playa",
        pronounce: "PLY-ah",
        meaning: "A dry lakebed — the flat, cracked desert floor common across the American Southwest",
        example: "The salt flats at Badwater sit on an ancient playa.",
        exampleMeaning: "A dried-up lakebed, now crusted with salt."
      }
    ]
  },
  {
    dayNumber: 5,
    date: "2026-10-08",
    weekday: "Thursday",
    departureTime: "06:30",
    rideToFirst: { duration: "25 min", note: "Furnace Creek → Mesquite Flat Sand Dunes" },
    region: "mainland",
    base: "Las Vegas, NV",
    title: "Sunrise dunes, then on to Las Vegas",
    subtitle: "Morning in Death Valley, arrive on the Strip by evening",
    activities: [
      {
        time: "Sunrise",
        title: "Mesquite Flat Sand Dunes",
        description: "Rolling sand dunes near Stovepipe Wells — best walked at sunrise or early morning, when the low light rakes across the ripples and the sand hasn't heated up yet.",
        attractionId: "mesquite-flat-dunes",
        tag: "nature",
        rideToNext: { duration: "2 h", note: "Death Valley → Las Vegas via NV-160", departAt: "09:30" }
      },
      {
        time: "Afternoon",
        title: "Check in on the Strip",
        description: "Arrive in Las Vegas and check into the hotel. This is a suggested pick pending your own booking — The Venetian Resort, chosen for its central Strip location and gondola-canal kitsch.",
        attractionId: "the-venetian-resort",
        tag: "culture"
      },
      {
        time: "Evening",
        title: "First night on the Strip",
        description: "Walk the Strip, take in the lights, get your bearings before the two free days ahead. Return the rental car today or first thing tomorrow morning — you won't need it again until the airport at the end of the Vegas leg."
      }
    ],
    driveNotes: "Death Valley → Las Vegas ≈ 2 h via NV-160",
    restaurants: ["rest-m-vegas-inn-n-out"],
    drinkOfTheDay: {
      name: "Classic Vegas Martini",
      type: "cocktail",
      pairing: "The city's signature after-dark pour — cold, sharp, a little theatrical. A fitting first-night toast on the Strip after a week of trailheads and salt flats.",
      servingNote: "Straight up, ice-cold, with an olive or a twist"
    },
    gear: [
      { item: "Comfortable walking shoes — the Strip is longer than it looks" },
      { item: "A light jacket for the desert evening chill" },
      { item: "Sun protection for the sunrise dune walk", for: "mesquite-flat-dunes" }
    ],
    dayTips: [
      "Return the rental car today or first thing tomorrow — you don't need it again until you fly out of Vegas",
      "Sand gets hot fast after sunrise — do the dunes early and be back at the car before 9 am",
      "Vegas drinking age is 21 — carry ID even if you look older",
      "The Venetian is a suggested pick — swap for whichever Strip hotel you actually book"
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
    dayNumber: 6,
    date: "2026-10-09",
    weekday: "Friday",
    region: "mainland",
    base: "Las Vegas, NV",
    title: "Free day on the Strip",
    activities: [
      {
        time: "Morning",
        title: "Sleep in, pool time",
        description: "First fully unscheduled day of the trip — no rental car, no itinerary pressure. Enjoy the hotel pool and recover from the road-trip week."
      },
      {
        time: "Afternoon",
        title: "Bellagio Fountains",
        description: "The choreographed fountain show on the Bellagio's lake, set to music, running every 15–30 minutes through the afternoon and evening. Free, no reservation needed.",
        attractionId: "bellagio-fountains",
        tag: "culture"
      },
      {
        time: "Evening",
        title: "Fremont Street Experience (optional)",
        description: "Downtown Vegas's older, grittier neon core — a pedestrian mall under a massive LED canopy, free light shows on the hour. A fun contrast to the Strip's polish; consider booking a Cirque du Soleil show for tonight or another evening instead if that's more your speed.",
        attractionId: "fremont-street-experience",
        tag: "culture",
        optional: true
      }
    ],
    restaurants: ["rest-m-vegas-inn-n-out", "rest-m-vegas-bacchanal"],
    drinkOfTheDay: {
      name: "Frozen daiquiri, Strip-style",
      type: "cocktail",
      pairing: "A big, bright, over-the-top frozen cocktail from one of the walk-up Strip bars — pure Vegas theater, best sipped while people-watching on a pool lounger.",
      servingNote: "Extra-large plastic yard glass, extra garnish, no shame"
    },
    dayTips: [
      "Bellagio Fountains run every 15 minutes in the afternoon, every 30 in the early evening — check the posted schedule",
      "Book any Cirque du Soleil or other show in advance online — walk-up prices are steep",
      "Casino floors are 21+ for gambling; you'll need photo ID even to walk through some areas at night"
    ],
    phrasesOfDay: [
      {
        word: "House edge",
        pronounce: "hows ej",
        meaning: "The built-in mathematical advantage the casino has on every game — good to know before you sit down",
        example: "Blackjack has one of the lowest house edges on the floor.",
        exampleMeaning: "The odds are still tilted toward the casino."
      },
      {
        word: "Whale",
        pronounce: "wayl",
        meaning: "Casino slang for a high-stakes gambler — not you, tonight",
        example: "The high-limit room is for the whales.",
        exampleMeaning: "The big spenders get their own room."
      }
    ]
  },
  {
    dayNumber: 7,
    date: "2026-10-10",
    weekday: "Saturday",
    region: "mainland",
    base: "Las Vegas, NV",
    title: "Free day — Red Rock Canyon or the pool",
    subtitle: "Keep it light — tomorrow is a big tour day",
    activities: [
      {
        time: "Morning",
        title: "Red Rock Canyon scenic drive (optional)",
        description: "A 13-mile scenic loop through dramatic red sandstone cliffs, about 25 minutes from the Strip — easy on a rideshare or a rented car for the day if you want to get out of the casino bubble.",
        attractionId: "red-rock-canyon",
        tag: "nature",
        optional: true
      },
      {
        time: "Afternoon",
        title: "Pool day or spa",
        description: "Deliberately unscheduled — a pool afternoon or a spa treatment at the hotel. Tomorrow's Grand Canyon + Antelope Canyon tour is a long day (pre-dawn pickup, home late), so keep tonight easy and get to bed on the early side."
      }
    ],
    restaurants: ["rest-m-vegas-bacchanal"],
    drinkOfTheDay: {
      name: "Prickly pear margarita",
      type: "cocktail",
      pairing: "A desert-Southwest riff on the classic margarita, colored a deep magenta from prickly pear cactus fruit — a nod to tomorrow's canyon country.",
      servingNote: "On the rocks, salted rim, lime wheel"
    },
    dayTips: [
      "Tomorrow's tour leaves pre-dawn — set an alarm and pack the night before",
      "Red Rock Canyon's entrance fee is separate from the America the Beautiful national park pass — it's BLM land with its own fee structure",
      "Keep tonight low-key; the Grand Canyon/Antelope Canyon day is roughly 13–14 hours door to door"
    ],
    phrasesOfDay: [
      {
        word: "BLM land",
        pronounce: "B-L-M land",
        meaning: "Public land managed by the Bureau of Land Management — different agency and fee rules than the National Park Service",
        example: "Red Rock Canyon is BLM land, not a national park.",
        exampleMeaning: "A different kind of public land with its own rules."
      }
    ]
  },
  {
    dayNumber: 8,
    date: "2026-10-11",
    weekday: "Sunday",
    departureTime: "05:00",
    region: "mainland",
    base: "Las Vegas, NV",
    title: "Grand Canyon West + Antelope Canyon — organized day tour",
    subtitle: "Long day tour, no rental car needed — hotel pickup pre-dawn, home late",
    activities: [
      {
        time: "Pre-dawn",
        title: "Hotel pickup",
        description: "Organized full-day tour — book a Grand Canyon West + Antelope Canyon combo tour in advance (roughly 13–14 hours door to door, with hotel pickup). No rental car needed; the tour bus handles the driving."
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
        description: "A Navajo-guided walk through the swirling sandstone corridors of Upper or Lower Antelope Canyon — book well in advance, these tours sell out, especially the popular midday light-beam slots.",
        attractionId: "antelope-canyon",
        tag: "cave"
      },
      {
        time: "Late evening",
        title: "Return to Vegas",
        description: "Long drive back to the Strip — expect a late arrival. No plans needed for tonight."
      }
    ],
    restaurants: ["rest-m-vegas-bacchanal"],
    drinkOfTheDay: {
      name: "Iced coffee (non-alcoholic)",
      type: "coffee",
      pairing: "Today's an early-start, long-haul tour day — a strong iced coffee before pickup beats anything else on the menu.",
      servingNote: "Big cup, extra ice, drink it in the tour van"
    },
    gear: [
      { item: "Layers — the canyon rim is windy and can be cool even in warm weather", for: "grand-canyon-west" },
      { item: "Comfortable shoes for uneven slot-canyon paths", for: "antelope-canyon" },
      { item: "A phone or camera with a wide lens for Antelope Canyon's light beams", for: "antelope-canyon" },
      { item: "Snacks and a full water bottle for the long tour day" }
    ],
    dayTips: [
      "Book the Grand Canyon West + Antelope Canyon combo tour well in advance — Antelope Canyon slots sell out fastest",
      "Grand Canyon West is Hualapai tribal land, NOT covered by the America the Beautiful national park pass — it has separate tribal fees",
      "Skywalk is a paid add-on beyond the base Eagle Point entry — decide in advance if you want it",
      "This is a 13–14 hour day — pack snacks, water, and patience for the drive"
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
    dayNumber: 9,
    date: "2026-10-12",
    weekday: "Monday",
    departureTime: "09:00",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Fly to Maui",
    subtitle: "Las Vegas (LAS) → Maui (OGG), likely connecting via Honolulu (HNL) — confirm routing when booking",
    activities: [
      {
        time: "Morning",
        title: "Flight to Maui",
        description: "Fly LAS → OGG, likely with a connection through Honolulu (HNL) — confirm the exact routing when you book. Arrive Maui in the afternoon."
      },
      {
        time: "Afternoon",
        title: "Check into the resort",
        description: "Arrive at the resort in Wailea and settle in — first taste of island time after a week and a half on the mainland.",
        attractionId: "wailea-beach",
        tag: "family"
      },
      {
        time: "Evening",
        title: "Sunset by the water",
        description: "No plans tonight beyond watching the sun go down over the Pacific — a gentle first evening in Hawaii."
      }
    ],
    restaurants: ["rest-h-wailea-grill"],
    drinkOfTheDay: {
      name: "Mai Tai",
      type: "cocktail",
      pairing: "The quintessential first-night-in-Hawaii pour — dark and light rum, orgeat, lime, orange curaçao. There's no more obvious way to mark landing on Maui.",
      servingNote: "Over crushed ice, floated dark rum, a mint sprig and lime wheel"
    },
    gear: [
      { item: "Reef-safe sunscreen — required by Hawaii state law, and the only kind allowed in resort gift shops" },
      { item: "Light, breathable clothing — Maui in October is warm and humid" },
      { item: "Sandals or slides for resort life" }
    ],
    dayTips: [
      "Confirm your exact LAS–OGG routing when booking — a Honolulu connection is common on this route",
      "Hawaii requires reef-safe sunscreen (no oxybenzone/octinoxate) by state law — pack it before you go, it can be pricier locally",
      "Inter-island and mainland-to-Hawaii baggage rules can differ from your outbound flight — check the airline's policy"
    ],
    phrasesOfDay: [
      {
        word: "Aloha",
        pronounce: "ah-LOH-hah",
        meaning: "Hello, goodbye, and love/affection all at once — the all-purpose Hawaiian greeting",
        example: "Aloha! Welcome to Maui.",
        exampleMeaning: "A warm hello (or goodbye)."
      },
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
    dayNumber: 10,
    date: "2026-10-13",
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
      pairing: "A layered strawberry-pineapple-coconut frozen cocktail named for its lava-red swirl — a beach-day classic, and a fun visual preview of the actual lava you'll see on the Big Island later in the trip.",
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
    dayNumber: 11,
    date: "2026-10-14",
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
    dayNumber: 12,
    date: "2026-10-15",
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
    dayNumber: 13,
    date: "2026-10-16",
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
    dayNumber: 14,
    date: "2026-10-17",
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
    dayNumber: 15,
    date: "2026-10-18",
    weekday: "Sunday",
    region: "hawaii",
    base: "Wailea, Maui",
    title: "Free day — resort time",
    activities: [
      {
        time: "All day",
        title: "Relax at the resort",
        description: "A deliberately empty day to close out the Maui stay — pool, beach, and a couples spa treatment if you haven't already. Pack tonight for tomorrow's short inter-island flight."
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
      "A good day to book that couples massage if you haven't yet — resort spas fill up on weekends",
      "Pack tonight — tomorrow is a short but real travel day to the Big Island"
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
    dayNumber: 16,
    date: "2026-10-19",
    weekday: "Monday",
    departureTime: "10:00",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Inter-island hop to the Big Island",
    subtitle: "Short flight, Maui (OGG) → Kona (KOA)",
    activities: [
      {
        time: "Morning",
        title: "Fly to Kona",
        description: "A short inter-island hop from Maui to Kona — check the airline's inter-island baggage allowance, which can differ from mainland flights."
      },
      {
        time: "Afternoon",
        title: "Check into the Kohala Coast resort",
        description: "Arrive on the Big Island's drier, sunnier Kona/Kohala Coast side and settle in — a different landscape from lush Maui, more lava rock and golden coastline."
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
      { item: "Confirm inter-island baggage allowance before the flight — often stricter than mainland routes" }
    ],
    dayTips: [
      "Inter-island flights often have tighter baggage weight limits than mainland-to-Hawaii legs — check before packing",
      "The Kona/Kohala side of the Big Island is noticeably drier and sunnier than Maui — pack accordingly"
    ],
    phrasesOfDay: [
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
    dayNumber: 17,
    date: "2026-10-20",
    weekday: "Tuesday",
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
    dayNumber: 18,
    date: "2026-10-21",
    weekday: "Wednesday",
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
    dayNumber: 19,
    date: "2026-10-22",
    weekday: "Thursday",
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
    dayNumber: 20,
    date: "2026-10-23",
    weekday: "Friday",
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
    dayNumber: 21,
    date: "2026-10-24",
    weekday: "Saturday",
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
    dayNumber: 22,
    date: "2026-10-25",
    weekday: "Sunday",
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
    dayNumber: 23,
    date: "2026-10-26",
    weekday: "Monday",
    region: "hawaii",
    base: "Kohala Coast, Big Island (Kona)",
    title: "Last relaxed day — pack & a sunset dinner",
    activities: [
      {
        time: "Day",
        title: "Pack and unwind",
        description: "A deliberately light last full day on the island — pack up, soak in the last bit of resort time before tomorrow's travel day back toward the mainland."
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
      pairing: "One more Mai Tai to bookend the Hawaii leg the same way it started — full circle before the long flights home begin tomorrow.",
      servingNote: "Over crushed ice, dark rum float, lime and mint"
    },
    dayTips: [
      "Reconfirm tomorrow's Kona → SFO flight time and pack the night before",
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
    dayNumber: 24,
    date: "2026-10-27",
    weekday: "Tuesday",
    departureTime: "10:00",
    region: "transit",
    base: "SFO airport area",
    title: "Fly back to the mainland",
    subtitle: "Kona (KOA) → San Francisco (SFO), overnight near the airport",
    activities: [
      {
        time: "Morning",
        title: "Flight to San Francisco",
        description: "Fly KOA → SFO. This is a genuine long-haul-adjacent day — the flight itself is several hours over open ocean."
      },
      {
        time: "Evening",
        title: "Overnight near SFO",
        description: "Check into an airport-area hotel to rest before tomorrow's long-haul flight home, rather than pushing straight through on minimal sleep."
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
      "An SFO-area overnight beats a same-day connection onto a long-haul flight — you'll land in Tel Aviv far less wrecked"
    ],
    phrasesOfDay: []
  },
  {
    dayNumber: 25,
    date: "2026-10-28",
    weekday: "Wednesday",
    departureTime: "14:30",
    region: "transit",
    base: "SFO airport area",
    title: "Fly home to Tel Aviv",
    leadImage: "./images/tel-aviv-skyline.jpg",
    leadImageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/lpQwaLWhw9Q",
      licenseUrl: "https://unsplash.com/license"
    },
    activities: [
      {
        time: "14:30",
        title: "At SFO check-in",
        description: "Bag-drop typically opens 3 hours before a long-haul international departure. Grab a last coffee near the gate."
      },
      {
        time: "17:45",
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
      "International bag-drop typically opens 3 hours before departure — plan to be at the airport with room to spare",
      "Allow extra time for security given the long-haul international queue at SFO"
    ],
    phrasesOfDay: []
  }
];
