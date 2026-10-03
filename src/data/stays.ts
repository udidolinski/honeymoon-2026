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
    navName: "Paris Las Vegas",
    confirmed: true,
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
    id: "stay-winnedumah",
    name: "Winnedumah Hotel — Independence",
    category: "stay",
    region: "mainland",
    shortDescription: "Historic small-town hotel on US-395 below the Sierra crest",
    description:
      "One night at the Winnedumah Hotel in Independence, a small town on US-395 in the Owens Valley, about 2 h 30 from the Death Valley exit at Stovepipe Wells, with the Sierra crest to the west. A quiet overnight between Death Valley and Yosemite's east entrance.",
    address: "211 N Edward St, Independence, CA",
    coords: [36.801, -118.1996],
    navName: "Winnedumah Hotel",
    confirmed: true,
    checkIn: "2026-10-06",
    checkOut: "2026-10-07",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nights: 1,
    highlights: [
      "Check-in from 15:00, check-out by 11:00",
      "On US-395 — the natural overnight between Death Valley and Tioga Pass",
      "Limited dining options in town — plan dinner before you arrive"
    ],
    warnings: ["Small town — tell the hotel you will arrive around 18:00-19:00 after Death Valley"]
  },
  {
    id: "stay-cedar-lodge",
    name: "Cedar Lodge — El Portal (Yosemite west gate)",
    category: "stay",
    region: "mainland",
    shortDescription: "Lodge on CA-140 just outside Yosemite, about 25 minutes from the valley",
    description:
      "Two nights at Cedar Lodge in El Portal, on the Merced River at Yosemite's west entrance. About 25 minutes from Yosemite Valley, so Oct 8 is a short hop to Tunnel View and the valley floor. On Oct 7 you arrive by driving the whole length of Tioga Road.",
    image: "./images/yosemite-valley-floor.jpg",
    imageCredit: unsplashCredit("Bailey Zindel (@baileyzindel)", "NRQV-hBF10M"),
    address: "9966 Highway 140, El Portal, CA 95318",
    coords: [37.6741, -119.7824],
    navName: "Cedar Lodge",
    confirmed: true,
    checkIn: "2026-10-07",
    checkOut: "2026-10-09",
    checkInTime: "16:00",
    checkOutTime: "11:00",
    nights: 2,
    highlights: [
      "Check-in from 16:00, check-out by 11:00",
      "Minutes from the Arch Rock entrance, about 25 min from Yosemite Valley",
      "El Portal to San Francisco is about 4 h — leave by 10:30 on Oct 9 to return the car by 18:00"
    ],
    warnings: ["Tioga Road may close for snow — check NPS road status before Oct 7"]
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
    navName: "Hilton San Francisco Union Square",
    confirmed: true,
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
    id: "stay-banyan-tree-bb",
    name: "Banyan Tree Bed & Breakfast — Makawao (Upcountry Maui)",
    category: "stay",
    region: "hawaii",
    shortDescription: "Upcountry B&B on the green slopes of Haleakalā, about 25 minutes from Kahului airport",
    description:
      "Two nights at the Banyan Tree Bed & Breakfast Retreat in Makawao, on the cool, green slopes of Haleakalā. About 15 minutes from Paia and the start of the Road to Hana, and nearer to Haleakalā than the coastal resorts. A quiet, small-scale base for your first nights on Maui.",
    website: "https://www.bed-breakfast-maui.com/",
    image: "./images/haleakala-summit.jpg",
    imageCredit: unsplashCredit("Tevin Trinh", "ygfYm0C1yrg"),
    address: "3265 Baldwin Ave, Makawao, HI 96768",
    coords: [20.8553, -156.3103],
    navName: "Banyan Tree Bed & Breakfast Retreat",
    confirmed: true,
    checkIn: "2026-10-19",
    checkOut: "2026-10-21",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nights: 2,
    highlights: [
      "Check-in 15:00 (listings say until 21:00), check-out by 11:00 — confirm in your booking",
      "About 25 min from Kahului airport; you land at 13:30 so you arrive well within the check-in window",
      "About 15 min from Paia and the Road to Hana, so Oct 21 starts close to the road",
      "Phone (808) 866-6225 as listed — call if you will be late"
    ],
    warnings: ["Upcountry is cooler and wetter than the coast — bring a light jacket"]
  },
  {
    id: "stay-courtyard-maui",
    name: "Courtyard by Marriott Maui Kahului Airport",
    category: "stay",
    region: "hawaii",
    shortDescription: "Practical airport-side hotel in Kahului, a few minutes from the airport",
    description:
      "Two nights at the Courtyard by Marriott in Kahului, close to the airport and the central valley. A convenient base for the Road to Hana loop and for the pre-dawn Haleakalā sunrise drive.",
    website: "https://www.marriott.com/en-us/hotels/hnmmk-courtyard-maui-kahului-airport/overview/",
    address: "532 Keolani Pl, Kahului, HI 96732",
    coords: [20.8905, -156.4355],
    navName: "Courtyard by Marriott Maui Kahului Airport",
    confirmed: true,
    checkIn: "2026-10-21",
    checkOut: "2026-10-23",
    checkInTime: "15:00",
    checkOutTime: "12:00",
    nights: 2,
    highlights: [
      "Check-in from 15:00, check-out by 12:00 — confirm in your booking",
      "A few minutes from Kahului airport; Haleakalā summit is about 1 h 30-1 h 45 away for the sunrise start",
      "Phone +1 808-871-1800 as listed"
    ]
  },
  {
    id: "stay-maui-coast",
    name: "Maui Coast Hotel — Kihei",
    category: "stay",
    region: "hawaii",
    shortDescription: "South-shore Kihei hotel, close to Wailea's beaches and Maalaea Harbor",
    description:
      "Four nights at the Maui Coast Hotel in Kihei on Maui's sunny south shore. About 15 minutes from the Wailea beaches and about 20 minutes from Maalaea Harbor, where the Molokini cruise leaves. Your base for the last stretch, including the early airport run on Oct 27.",
    address: "2259 S Kihei Rd, Kihei, HI 96753",
    coords: [20.7591, -156.4581],
    navName: "Maui Coast Hotel",
    confirmed: true,
    checkIn: "2026-10-23",
    checkOut: "2026-10-27",
    checkInTime: "16:00",
    checkOutTime: "11:00",
    nights: 4,
    highlights: [
      "Check-in from 16:00, check-out by 11:00 — confirm in your booking",
      "About 15 min to Wailea Beach and about 20 min to Maalaea Harbor for the Molokini cruise",
      "Oct 27: flight at 10:30 and the Budget car back at Kahului by about 08:00, so check out and leave around 06:30"
    ],
    warnings: ["Oct 23: check out of the Courtyard by 12:00 but you cannot check in here until 16:00 — keep your bags in the car during the Molokini cruise"]
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
