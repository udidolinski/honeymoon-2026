import type { Winery } from "./types";

/** Repurposed from the template's "wineries" concept into general local
 *  flavor stops worth a dedicated visit — a coffee farm, a brewery, a
 *  luau, a signature bar. Kept short and opinionated, matching each half
 *  of the trip. */
export const wineries: Winery[] = [
  // ============== MAINLAND ==============
  {
    id: "flavor-m-south-gate-brewing",
    name: "South Gate Brewing Co.",
    region: "mainland",
    appellation: "Sierra Nevada foothills craft beer",
    description:
      "A locally-owned brewery in Oakhurst, right at Yosemite's south gate — a relaxed first or last stop of the mainland leg, pairing house-brewed pale ales and IPAs with a solid pub kitchen.",
    website: "https://www.southgatebrewco.com/",
    address: "40233 Enterprise Dr, Oakhurst, CA",
    coords: [37.3211, -119.6508],
    bookingNote: "Walk-ins welcome, no reservation needed."
  },
  {
    id: "flavor-m-vegas-cocktail-bar",
    name: "Classic Vegas cocktail lounge",
    region: "mainland",
    appellation: "Vegas Strip cocktail culture",
    description:
      "Any of the Strip's classic hotel lounges makes a good stop for a proper Vegas Martini or a themed frozen cocktail — the point is the theater and the people-watching as much as the drink itself.",
    address: "Las Vegas Strip, NV",
    bookingNote: "No booking needed — walk into any Strip hotel lounge."
  },

  // ============== HAWAII ==============
  {
    id: "flavor-h-greenwell-farms",
    name: "Greenwell Farms",
    region: "hawaii",
    appellation: "Kona coffee belt",
    description:
      "A long-running Kona coffee farm offering free, informative walking tours through the trees and processing area, ending with a tasting flight of estate-grown coffee. A relaxed, low-key way to see how the world-famous Kona bean actually gets made.",
    website: "https://www.greenwellfarms.com/",
    address: "81-6581 Mamalahoa Hwy, Kealakekua, HI",
    coords: [19.5219, -155.9236],
    bookingNote: "Free walk-in tours run several times daily — no advance booking required."
  },
  {
    id: "flavor-h-maui-brewing",
    name: "Maui Brewing Co.",
    region: "hawaii",
    appellation: "Maui craft beer",
    description:
      "Hawaii's largest craft brewery, with a taproom pouring its well-known Bikini Blonde Lager and a rotating list of island-inspired beers — a fun, casual counterpoint to a week of Mai Tais.",
    website: "https://mauibrewingco.com/",
    address: "605 Lipoa Pkwy, Kihei, HI",
    coords: [20.7392, -156.4514],
    bookingNote: "Walk-ins welcome; book ahead for a brewery tour."
  },
  {
    id: "flavor-h-old-lahaina-luau",
    name: "Old Lahaina Luau (or a similar luau experience)",
    region: "hawaii",
    appellation: "Traditional Hawaiian luau",
    description:
      "A well-regarded, traditional-style luau experience — an imu-roasted pig, island dishes, and hula and Polynesian dance performances. A suggested honeymoon flourish to close out the Lahaina evening; book whichever reputable luau fits your dates.",
    website: "https://www.oldlahainaluau.com/",
    bookingNote: "Book well in advance — popular luaus sell out on weekends."
  },
  {
    id: "flavor-h-manta-ray-tour",
    name: "Manta ray night snorkel operator",
    region: "hawaii",
    appellation: "Kona coast signature experience",
    description:
      "Several reputable Kona-based tour operators run the nightly manta ray snorkel/dive — pick one with strong safety reviews and a marine-conservation-minded briefing.",
    bookingNote: "Book ahead — a popular, sometimes weather-dependent tour."
  }
];

export const wineriesByRegion = (r: "mainland" | "hawaii") =>
  wineries.filter(w => w.region === r);
