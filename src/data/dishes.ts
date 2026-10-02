import type { Dish } from "./types";
import { unsplashCredit } from "./credits";

/** Food & drink worth chasing on this trip. "mainland" = the road-trip +
 *  Vegas leg, "hawaii" = Maui + Big Island, "trip" = found on both halves. */
export const dishes: Dish[] = [
  // ============== MAINLAND ==============
  {
    id: "death-valley-date-shake",
    name: "Date shake",
    region: "mainland",
    category: "drink",
    description:
      "A thick milkshake blended with medjool dates — a Mojave/Coachella Valley classic, sold at roadside stands near desert date farms. Cool, sweet, and exactly what you want after a hot walk on the Badwater salt flats.",
    tryIt: "Roadside stands near Death Valley and along the desert highways",
    image: "./images/food-date-shake.jpg",
    imageCredit: unsplashCredit("Sebastian Coman Photography (@sebastiancoman)", "rwBJaJdesGg")
  },
  {
    id: "in-n-out-double-double",
    name: "In-N-Out Double-Double",
    region: "mainland",
    category: "main",
    description:
      "The classic California/Nevada road-trip burger — two patties, two slices of cheese, a simple 'animal style' upgrade if you know to ask. A fun, un-fussy American stop between national parks.",
    tryIt: "In-N-Out Burger, Las Vegas Strip location",
    image: "./images/food-in-n-out.jpg",
    imageCredit: unsplashCredit("Thomas Habr (@thomashabr)", "MjMLAst5pUI")
  },
  {
    id: "sierra-trail-mix",
    name: "Trail mix & jerky",
    region: "mainland",
    category: "snack",
    description:
      "The road-trip staple through Yosemite and Death Valley — nuts, dried fruit and beef jerky from any gas-station or general-store stop, the fuel that gets you between trailheads.",
    tryIt: "General stores along US-395 and at Furnace Creek"
  },
  {
    id: "vegas-buffet-spread",
    name: "Vegas buffet spread",
    region: "mainland",
    category: "main",
    description:
      "An only-in-Vegas institution — an enormous, all-you-can-eat spread spanning multiple global cuisines under one roof. Go once, go hungry.",
    tryIt: "Bacchanal Buffet, Caesars Palace"
  },

  // ============== HAWAII ==============
  {
    id: "poke-bowl",
    name: "Poke bowl",
    italianName: "Poke",
    region: "hawaii",
    category: "main",
    description:
      "Diced raw fish (usually ahi tuna) tossed in soy, sesame oil and scallions over rice — Hawaii's signature everyday dish, sold at grocery stores, gas stations and dedicated poke shops alike.",
    tryIt: "Da Poke Shack, Kailua-Kona",
    image: "./images/food-poke.jpg",
    imageCredit: unsplashCredit("Sebastian Doll (@sebonbali)", "liRzVVBbxnM")
  },
  {
    id: "shave-ice",
    name: "Shave ice",
    region: "hawaii",
    category: "dessert",
    description:
      "Finely shaved ice soaked in bright tropical syrups — not to be confused with a mainland snow cone, the texture is famously fluffy and fine. A classic hot-day treat on both Maui and the Big Island.",
    tryIt: "Roadside shave ice stands, Kihei and Kailua-Kona",
    image: "./images/food-shave-ice.jpg",
    imageCredit: unsplashCredit("Maria Klichik (@switchinglanes)", "s6x3z_vDciw")
  },
  {
    id: "malasada",
    name: "Malasada",
    region: "hawaii",
    category: "dessert",
    description:
      "A Portuguese-Hawaiian fried doughnut, egg-rich and rolled in sugar, no hole in the middle. A beloved local sweet treat and a fun grab on a Lahaina or Kona walk.",
    tryIt: "Bakeries in Lahaina and Kailua-Kona",
    image: "./images/food-malasada.jpg",
    imageCredit: unsplashCredit("Gerold Hinzen (@geroldhinzen)", "9Dc427INvlI")
  },
  {
    id: "loco-moco",
    name: "Loco moco",
    region: "hawaii",
    category: "main",
    description:
      "A local comfort-food plate of white rice topped with a hamburger patty, a fried egg, and brown gravy — hearty and unpretentious, found on nearly every casual island menu.",
    tryIt: "Local diners and plate-lunch spots, Kona and Kihei"
  },
  {
    id: "kona-coffee-drink",
    name: "100% Kona coffee",
    region: "hawaii",
    category: "drink",
    description:
      "Grown only on the narrow volcanic slopes of the Kona coffee belt, this is one of the world's most prized and expensive coffees — rich, smooth, and best tasted fresh at the source.",
    tryIt: "Kona coffee farm tours, Holualoa"
  }
];

/** Convenience selectors used by the UI. */
export const dishesByRegion = (r: "mainland" | "hawaii" | "trip") =>
  dishes.filter(d => d.region === r);
