import type { Stay } from "./types";

export const stays: Stay[] = [
  {
    id: "stay-oakhurst",
    name: "Lodge near Yosemite — Oakhurst",
    category: "stay",
    region: "mainland",
    shortDescription: "Gateway-town lodge, 15 minutes from Yosemite's south entrance",
    description:
      "A suggested pick — confirm and book your own property. Oakhurst is the classic Yosemite south-gate town: motels, lodges and cabins clustered along CA-41, about 15 minutes from the park entrance. Good base for the first two nights.",
    address: "Oakhurst, CA",
    coords: [37.3216, -119.6491],
    checkIn: "2026-10-04",
    checkOut: "2026-10-06",
    nights: 2,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "~15 minutes from Yosemite's South Entrance",
      "Restaurants and a supermarket right along CA-41"
    ]
  },
  {
    id: "stay-three-rivers",
    name: "Cabin/inn near Sequoia — Three Rivers",
    category: "stay",
    region: "mainland",
    shortDescription: "Small gateway town at Sequoia's Ash Mountain entrance",
    description:
      "A suggested pick — confirm and book your own property. Three Rivers sits right at Sequoia National Park's entrance along the Kaweah River — cabins, small inns and motels line CA-198.",
    address: "Three Rivers, CA",
    coords: [36.4386, -118.8987],
    checkIn: "2026-10-06",
    checkOut: "2026-10-07",
    nights: 1,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Minutes from Sequoia's Ash Mountain entrance",
      "Riverside setting along the Kaweah"
    ]
  },
  {
    id: "stay-furnace-creek",
    name: "Furnace Creek Ranch/Inn — Death Valley",
    category: "stay",
    region: "mainland",
    shortDescription: "The atmospheric in-park base for Death Valley — or Pahrump, NV as an alternative",
    description:
      "A suggested pick — confirm and book your own property. Furnace Creek is the historic in-park oasis, with a general store, gas, and easy access to Badwater and Zabriskie Point. Pahrump, NV is a more built-up lodging alternative about an hour outside the park if you'd rather trade atmosphere for amenities.",
    address: "Furnace Creek, Death Valley National Park, CA",
    coords: [36.4620, -116.8706],
    checkIn: "2026-10-07",
    checkOut: "2026-10-08",
    nights: 1,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "In-park location — shortest drives to Badwater, Artist's Palette and Zabriskie Point",
      "On-site general store and fuel"
    ],
    warnings: ["Remote — cell service is minimal to nonexistent", "Fuel up before you arrive; on-site gas is limited and pricier"]
  },
  {
    id: "stay-vegas-venetian",
    name: "The Venetian Resort — Las Vegas Strip",
    category: "stay",
    region: "mainland",
    shortDescription: "Central-Strip hotel with indoor gondola canals — a suggested pick",
    description:
      "A suggested pick — confirm and book your own property. The Venetian sits near the center of the Strip with easy walking access to the Bellagio, the Wynn, and the Fashion Show mall. Swap for Bellagio or any other Strip property you prefer.",
    website: "https://www.venetianlasvegas.com/",
    address: "3355 S Las Vegas Blvd, Las Vegas, NV",
    coords: [36.1212, -115.1697],
    checkIn: "2026-10-08",
    checkOut: "2026-10-12",
    nights: 4,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Central Strip location, walkable to the Bellagio Fountains",
      "No car needed for the Vegas leg — return the rental here",
      "No on-site kosher dining — certified kosher restaurants (Burnt Offerings, Judit Mediterranean Cuisine) are a 15–20 min rideshare away, see Tips"
    ]
  },
  {
    id: "stay-maui-wailea",
    name: "Resort in Wailea — Maui",
    category: "stay",
    region: "hawaii",
    shortDescription: "South-shore Maui resort corridor — a suggested pick",
    description:
      "A suggested pick — confirm and book your own property. Wailea is Maui's upscale south-shore resort strip, fronting a string of golden-sand beaches with generally calm swimming and good snorkeling.",
    address: "Wailea, Maui, HI",
    coords: [20.6867, -156.4406],
    checkIn: "2026-10-12",
    checkOut: "2026-10-19",
    nights: 7,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Fronts Wailea Beach, walkable to several resort beaches",
      "Central for the Road to Hana, Haleakalā and Molokini day trips",
      "No kosher restaurant on-site — Chabad of Maui arranges kosher meals and grocery delivery to the resort with advance notice, see Tips"
    ]
  },
  {
    id: "stay-big-island-kohala",
    name: "Resort on the Kohala Coast — Big Island",
    category: "stay",
    region: "hawaii",
    shortDescription: "Kona/Kohala Coast resort area — a suggested pick",
    description:
      "A suggested pick — confirm and book your own property. The Kona/Kohala Coast is the Big Island's dry, sunny resort belt — a good base for the coffee farms, Volcanoes National Park day trip, and the manta ray and Mauna Kea tours.",
    address: "Kohala Coast, HI",
    coords: [19.9107, -155.8681],
    checkIn: "2026-10-19",
    checkOut: "2026-10-27",
    nights: 8,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Central for Kona town, coffee farms and Kahaluʻu Beach Park",
      "Departure point for the Volcanoes NP, manta ray and Mauna Kea tours",
      "No kosher restaurant on-site — Chabad Jewish Center of the Big Island (Kailua-Kona) arranges Shabbat/holiday meals by reservation, see Tips"
    ]
  },
  {
    id: "stay-sfo-airport",
    name: "Airport-area hotel — SFO",
    category: "stay",
    region: "transit",
    shortDescription: "Overnight near SFO before the long-haul flight home",
    description:
      "A suggested pick — confirm and book your own property. Any reputable SFO-area airport hotel with a shuttle works here — the point is a real night's sleep before the transpacific flight the next day.",
    address: "Near San Francisco International Airport (SFO), CA",
    coords: [37.6213, -122.3790],
    checkIn: "2026-10-27",
    checkOut: "2026-10-28",
    nights: 1,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Free airport shuttle is worth prioritizing",
      "One night to reset before the long-haul flight to Tel Aviv",
      "Holy Sushi (kosher, Palo Alto) is about 35 min south if you want a kosher bite before the flight home"
    ]
  }
];
