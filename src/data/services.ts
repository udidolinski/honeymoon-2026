import type { Service } from "./types";

export const services: Service[] = [
  // ==================== MAINLAND — Furnace Creek / Death Valley ====================
  {
    id: "rest-m-furnace-creek",
    name: "The Last Kind Words Saloon",
    category: "restaurant",
    region: "mainland",
    base: "mainland",
    shortDescription: "In-park saloon-style restaurant at Furnace Creek",
    description: "A Wild-West-styled saloon and restaurant at the Ranch at Death Valley — the easiest sit-down meal inside the park.",
    address: "Furnace Creek, Death Valley National Park, CA",
    coords: [36.4614, -116.8697],
    hours: "Lunch & dinner"
  },
  {
    id: "sup-m-furnace-creek-store",
    name: "Furnace Creek General Store",
    category: "supermarket",
    region: "mainland",
    base: "mainland",
    shortDescription: "The only real grocery stop inside the park",
    description: "Limited but essential — water, ice, snacks and basic supplies. Stock up before entering the park if you can, prices are higher here.",
    address: "Furnace Creek, Death Valley National Park, CA",
    coords: [36.4618, -116.8693],
    hours: "Daily, standard hours"
  },
  {
    id: "gas-m-furnace-creek",
    name: "Furnace Creek Fuel",
    category: "gas",
    region: "mainland",
    base: "mainland",
    shortDescription: "In-park fuel — fill up before you arrive if possible",
    description: "The only fuel stop for a long way in any direction inside Death Valley — usually pricier than outside towns.",
    address: "Furnace Creek, Death Valley National Park, CA",
    coords: [36.4616, -116.8699],
    hours: "Daily, standard hours"
  },

  // ==================== MAINLAND — Las Vegas Strip ====================
  {
    id: "rest-m-vegas-inn-n-out",
    name: "In-N-Out Burger — Las Vegas",
    category: "restaurant",
    region: "mainland",
    base: "mainland",
    shortDescription: "The classic California/Nevada road-trip burger stop",
    description: "A fun, low-key American road-trip institution — the double-double is the move, and there's a Strip-area location a short rideshare away.",
    address: "2900 S Las Vegas Blvd, Las Vegas, NV",
    coords: [36.1288, -115.1697],
    hours: "Daily until late"
  },
  {
    id: "rest-m-vegas-bacchanal",
    name: "Bacchanal Buffet — Caesars Palace",
    category: "restaurant",
    region: "mainland",
    base: "mainland",
    shortDescription: "One of the Strip's best-known buffets",
    description: "A sprawling, high-quality buffet at Caesars Palace — a fun, over-the-top Vegas dining experience for one night of the stay.",
    address: "3570 S Las Vegas Blvd, Las Vegas, NV",
    coords: [36.1163, -115.1745],
    hours: "Daily, check current seatings"
  },
  {
    id: "rest-m-vegas-burnt-offerings",
    name: "Burnt Offerings (Kosher, OU)",
    category: "restaurant",
    region: "mainland",
    base: "mainland",
    shortDescription: "OU-certified kosher steakhouse, ~10 min from the Strip",
    description:
      "A full-service kosher steakhouse a short rideshare off the Strip — OU certified, sit-down dinners with steaks, burgers and classic deli. Closed Saturday; Friday hours are shortened for Shabbat. Call ahead or book via OpenTable, especially on weekends.",
    website: "https://www.burntofferingslv.com/",
    address: "3909 W Sahara Ave Suite 10, Las Vegas, NV 89102",
    coords: [36.1450, -115.1897],
    hours: "Mon–Thu & Sun 17:00–22:00, Fri 11:30–14:00, Sat closed"
  },
  {
    id: "rest-m-vegas-judit",
    name: "Judit Mediterranean Cuisine (Kosher)",
    category: "restaurant",
    region: "mainland",
    base: "mainland",
    shortDescription: "Glatt-kosher Mediterranean grill near the Strip",
    description:
      "A newer Glatt-kosher spot under Chabad of Southern Nevada / Vaad HaKashrus supervision — hummus, falafel, shawarma and salads, a short drive from the Strip. Closed Saturday.",
    address: "2103 Western Ave, Las Vegas, NV 89102",
    coords: [36.1590, -115.1522],
    hours: "Sun–Thu 11:00–19:30, Fri 11:00–15:00, Sat closed"
  },
  {
    id: "sup-m-vegas-whole-foods",
    name: "Whole Foods Market — Las Vegas",
    category: "supermarket",
    region: "mainland",
    base: "mainland",
    shortDescription: "Full-size grocery store a short rideshare from the Strip",
    description: "The most convenient full grocery stop near the Strip for water, snacks and any resort-room supplies.",
    address: "7250 W Lake Mead Blvd, Las Vegas, NV",
    coords: [36.1783, -115.2650],
    hours: "Daily 7:00–22:00"
  },
  {
    id: "gas-m-vegas-chevron",
    name: "Chevron — Las Vegas Blvd",
    category: "gas",
    region: "mainland",
    base: "mainland",
    shortDescription: "Fuel stop before returning the rental car",
    description: "A standard station on Las Vegas Blvd, convenient for topping off before returning the rental car ahead of the airport tour pickup.",
    address: "Las Vegas Blvd S, Las Vegas, NV",
    coords: [36.1055, -115.1728],
    hours: "24/7"
  },

  // ==================== HAWAII — Wailea / Maui ====================
  {
    id: "rest-h-wailea-grill",
    name: "Monkeypod Kitchen — Wailea",
    category: "restaurant",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Popular Wailea restaurant with island-fresh fish and mai tais",
    description: "A lively, well-regarded Wailea spot for fresh island fish, wood-fired pizza and a well-known mai tai — a solid go-to for most nights on Maui.",
    address: "3750 Wailea Alanui Dr, Wailea, HI",
    coords: [20.6889, -156.4419],
    hours: "Lunch & dinner daily"
  },
  {
    id: "rest-h-hana-town-stand",
    name: "Aunty Sandy's Banana Bread",
    category: "restaurant",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Classic roadside snack stop on the Road to Hana",
    description: "A famous roadside stand near mile marker 31 on the Hana Highway, known for warm banana bread — a Road-to-Hana rite of passage.",
    address: "Hana Highway, Maui, HI",
    coords: [20.8394, -156.1417],
    hours: "Daytime, weather permitting"
  },
  {
    id: "sup-h-safeway-kihei",
    name: "Safeway — Kihei",
    category: "supermarket",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Full-size grocery store near Wailea",
    description: "The most convenient full grocery store for the Wailea resort area — water, produce, sunscreen and picnic supplies.",
    address: "1215 S Kihei Rd, Kihei, HI",
    coords: [20.7508, -156.4547],
    hours: "Daily 5:00–24:00"
  },
  {
    id: "sup-h-abc-stores-wailea",
    name: "ABC Stores — Wailea",
    category: "supermarket",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "The ubiquitous Hawaii convenience-store chain",
    description: "ABC Stores are everywhere in resort Hawaii — sunscreen, snacks, POG juice, beach gear, all in one small shop steps from the hotel.",
    address: "Wailea Alanui Dr, Wailea, HI",
    coords: [20.6874, -156.4415],
    hours: "Daily, extended hours"
  },
  {
    id: "gas-h-chevron-kihei",
    name: "Chevron — Kihei",
    category: "gas",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Convenient fuel stop near Wailea",
    description: "The closest standard fuel stop to the Wailea resort area — useful before or after the Road to Hana or Haleakalā drives.",
    address: "S Kihei Rd, Kihei, HI",
    coords: [20.7519, -156.4522],
    hours: "24/7"
  },

  // ==================== HAWAII — Kona / Big Island ====================
  {
    id: "rest-h-kona-fish-shack",
    name: "Da Poke Shack — Kailua-Kona",
    category: "restaurant",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Beloved local poke counter in Kona",
    description: "A well-known poke shop in Kailua-Kona — fresh, simply dressed raw fish over rice, a Big Island staple worth trying at least once.",
    address: "76-6246 Alii Dr, Kailua-Kona, HI",
    coords: [19.6323, -155.9853],
    hours: "Lunch & early dinner"
  },
  {
    id: "sup-h-safeway-kona",
    name: "Safeway — Kailua-Kona",
    category: "supermarket",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Full-size grocery store in Kona town",
    description: "The main full grocery stop for the Kona/Kohala Coast area — water, produce, and everything for a resort-kitchen breakfast.",
    address: "75-1027 Henry St, Kailua-Kona, HI",
    coords: [19.6444, -155.9958],
    hours: "Daily 5:00–24:00"
  },
  {
    id: "gas-h-chevron-kona",
    name: "Chevron — Kailua-Kona",
    category: "gas",
    region: "hawaii",
    base: "hawaii",
    shortDescription: "Fuel stop before the Volcanoes NP day trip",
    description: "Fill up here before the roughly 2.5-hour drive to Hawaiʻi Volcanoes National Park — stations thin out along the way.",
    address: "Palani Rd, Kailua-Kona, HI",
    coords: [19.6455, -155.9968],
    hours: "24/7"
  },

  // ==================== TRANSIT — SFO / Bay Area ====================
  {
    id: "rest-t-sfo-holy-sushi",
    name: "Holy Sushi (Kosher) — Palo Alto",
    category: "restaurant",
    region: "transit",
    base: "mainland",
    shortDescription: "Kosher-supervised sushi counter, ~35 min south of SFO",
    description:
      "A kosher-supervised sushi counter about 35 minutes south of the airport — the closest reliable kosher option on the SFO overnight. Daytime hours only and closed Saturday, so plan a pickup on the way in from Kona rather than a late dinner.",
    address: "4131 El Camino Real, Palo Alto, CA 94306",
    coords: [37.4088, -122.1180],
    hours: "Sun–Fri 9:00–16:00, Sat closed"
  }
];

/** Fast id → Service lookup used by the chapter detail page when it
 *  renders a curated list of restaurants for a given day. Built lazily
 *  on first call and cached at module level — repeated lookups are O(1). */
let _serviceById: Map<string, Service> | null = null;

export function getService(id: string): Service | undefined {
  if (!_serviceById) {
    _serviceById = new Map(services.map(s => [s.id, s]));
  }
  return _serviceById.get(id);
}
