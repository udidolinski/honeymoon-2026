import type { Stay } from "./types";
import { unsplashCredit } from "./credits";

export const stays: Stay[] = [
  {
    id: "stay-paris-las-vegas",
    name: "Paris Las Vegas — Las Vegas Strip",
    category: "stay",
    region: "mainland",
    shortDescription: "Strip hotel with the Eiffel Tower replica, across from the Bellagio Fountains",
    description:
      "Two nights at Paris Las Vegas, right on the central Strip, across the street from the Bellagio Fountains and next to Horseshoe and Caesars Palace. Walking distance to most of the Strip's classic sights.",
    image: "./images/las-vegas-paris.jpg",
    imageCredit: unsplashCredit("Parsa Mahmoudi", "PYaP4awj9Uc"),
    website: "https://www.parislasvegas.com/",
    address: "3655 S Las Vegas Blvd, Las Vegas, NV",
    coords: [36.1125, -115.1707],
    checkIn: "2026-10-04",
    checkOut: "2026-10-06",
    nights: 2,
    highlights: [
      "Central Strip location, across from the Bellagio Fountains",
      "Short rideshare from LAS (about 20 minutes)",
      "Alamo rental car is picked up on Oct 5 evening after the tour",
      "No on-site kosher dining — certified kosher restaurants (Burnt Offerings, Judit Mediterranean Cuisine) are a 15–20 min rideshare away, see Tips"
    ]
  },
  {
    id: "stay-independence",
    name: "Independence, CA — Eastern Sierra",
    category: "stay",
    region: "mainland",
    shortDescription: "Small town on US-395 below the Sierra crest — a suggested base, hotel TBD",
    description:
      "Hotel to be confirmed. Independence is a small town on US-395 in the Owens Valley, about 2 h 30 from the Death Valley exit at Stovepipe Wells, with the Sierra crest and Mt. Whitney region to the west. A quiet overnight between Death Valley and Yosemite's east entrance.",
    address: "Independence, CA",
    coords: [36.801, -118.1996],
    checkIn: "2026-10-06",
    checkOut: "2026-10-07",
    nights: 1,
    highlights: [
      "Hotel still to be confirmed",
      "On US-395 — the natural overnight between Death Valley and Tioga Pass",
      "Limited dining options — plan dinner before you arrive"
    ],
    warnings: ["Small town — book early and confirm check-in hours before a late arrival"]
  },
  {
    id: "stay-incline",
    name: "Incline Village — Lake Tahoe",
    category: "stay",
    region: "mainland",
    shortDescription: "North Lake Tahoe, Nevada side — two nights, hotel TBD",
    description:
      "Hotel to be confirmed. Incline Village sits on the north shore of Lake Tahoe on the Nevada side. It is about 3 h from Yosemite's Tioga Pass entrance, so both Yosemite days involve long drives.",
    image: "./images/lake-tahoe.jpg",
    imageCredit: unsplashCredit("Austin Schmid", "pp0Joqv3Y4s"),
    address: "Incline Village, NV",
    coords: [39.2513, -119.9526],
    checkIn: "2026-10-07",
    checkOut: "2026-10-09",
    nights: 2,
    highlights: [
      "Hotel still to be confirmed",
      "Lake Tahoe scenery on the way to San Francisco",
      "About 3 h from Tioga Pass — expect long drives on both Yosemite days"
    ],
    warnings: ["Yosemite's valley is roughly 5 h away — consider whether a base closer to the park would suit better"]
  },
  {
    id: "stay-hilton-union-square",
    name: "Hilton San Francisco Union Square",
    category: "stay",
    region: "mainland",
    shortDescription: "Downtown hotel steps from Union Square and the cable cars",
    description:
      "Two nights at the Hilton San Francisco Union Square in the heart of downtown. The rental car is returned at the Union Square location by 18:00 on Oct 9, so no car is needed from here on.",
    image: "./images/san-francisco-cable-car.jpg",
    imageCredit: unsplashCredit("Amogh Manjunath (@therealamogh)", "HksFlo1t8iA"),
    website: "https://www.hilton.com/en/hotels/sfofhhh-hilton-san-francisco-union-square/",
    address: "333 O'Farrell St, San Francisco, CA",
    coords: [37.7861, -122.4104],
    checkIn: "2026-10-09",
    checkOut: "2026-10-11",
    nights: 2,
    highlights: [
      "Walkable to Union Square, Powell cable cars and Chinatown",
      "Return the Alamo car at Union Square by 18:00 on Oct 9",
      "Early airport ride on Oct 11 for the 07:00 flight to Kona"
    ],
    warnings: ["Hotel parking is expensive — drop the car off before check-in"]
  },
  {
    id: "stay-big-island-kohala",
    name: "Resort on the Kohala Coast — Big Island",
    category: "stay",
    region: "hawaii",
    shortDescription: "Kona/Kohala Coast resort area — a suggested pick",
    description:
      "A suggested pick — confirm and book your own property. The Kona/Kohala Coast is the Big Island's dry, sunny resort belt — a good base for the coffee farms, Volcanoes National Park day trip, and the manta ray and Mauna Kea tours. A Budget rental car is picked up at Kona airport and returned there on Oct 19.",
    image: "./images/kilauea-crater.jpg",
    imageCredit: unsplashCredit("James Lee (@picsbyjameslee)", "iujjIfsPBqE"),
    address: "Kohala Coast, HI",
    coords: [19.9107, -155.8681],
    checkIn: "2026-10-11",
    checkOut: "2026-10-19",
    nights: 8,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Central for Kona town, coffee farms and Kahaluʻu Beach Park",
      "Departure point for the Volcanoes NP, manta ray and Mauna Kea tours",
      "No kosher restaurant on-site — Chabad Jewish Center of the Big Island (Kailua-Kona) arranges Shabbat/holiday meals by reservation, see Tips"
    ]
  },
  {
    id: "stay-maui-wailea",
    name: "Resort in Wailea — Maui",
    category: "stay",
    region: "hawaii",
    shortDescription: "South-shore Maui resort corridor — a suggested pick",
    description:
      "A suggested pick — confirm and book your own property. Wailea is Maui's upscale south-shore resort strip, fronting a string of golden-sand beaches with generally calm swimming and good snorkeling. A Budget rental car is picked up at Kahului airport and returned there on Oct 27.",
    image: "./images/haleakala-summit.jpg",
    imageCredit: unsplashCredit("Tevin Trinh", "ygfYm0C1yrg"),
    address: "Wailea, Maui, HI",
    coords: [20.6867, -156.4406],
    checkIn: "2026-10-19",
    checkOut: "2026-10-27",
    nights: 8,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Fronts Wailea Beach, walkable to several resort beaches",
      "Central for the Road to Hana, Haleakalā and Molokini day trips",
      "No kosher restaurant on-site — Chabad of Maui arranges kosher meals and grocery delivery to the resort with advance notice, see Tips"
    ]
  },
  {
    id: "stay-sfo-airport",
    name: "Airport-area hotel — SFO",
    category: "stay",
    region: "transit",
    shortDescription: "Overnight near SFO before the early flight home",
    description:
      "A suggested pick — confirm and book your own property. Any reputable SFO-area airport hotel with a shuttle works here — the point is a real night's sleep before the 08:55 flight to Tel Aviv.",
    address: "Near San Francisco International Airport (SFO), CA",
    coords: [37.6213, -122.379],
    checkIn: "2026-10-27",
    checkOut: "2026-10-28",
    nights: 1,
    highlights: [
      "A suggested pick — confirm and book your own property",
      "Free airport shuttle is worth prioritizing",
      "Land 18:30, then a very early check-in the next morning (flight 08:55)",
      "Holy Sushi (kosher, Palo Alto) is about 35 min south if you want a kosher bite before the flight home"
    ]
  }
];
