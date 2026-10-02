import type { POI, ImageCredit } from "./types";
import { unsplashCredit } from "./credits";

const wmCredit = (article: string): ImageCredit => ({
  author: `Wikipedia/Wikimedia Commons contributors`,
  license: "CC BY-SA",
  source: `https://en.wikipedia.org/wiki/${article}`,
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
});

export const attractions: POI[] = [
  // ---------- MAINLAND: YOSEMITE ----------
  {
    id: "yosemite-tunnel-view",
    name: "Tunnel View",
    category: "attraction",
    region: "mainland",
    shortDescription: "The classic first look at Yosemite Valley",
    description:
      "A roadside overlook just past the Wawona Tunnel that frames El Capitan, Bridalveil Fall and Half Dome in one iconic view — the photo that made Yosemite famous, reproduced by Ansel Adams and millions since. Easiest and most photographed vista in the park.",
    image: "./images/yosemite-tunnel-view.jpg",
    imageCredit: unsplashCredit("jms (@jmsdono)", "kFHz9Xh3PPU"),
    website: "https://www.nps.gov/yose/",
    address: "Wawona Road, Yosemite National Park, CA",
    coords: [37.7150, -119.7076],
    tags: ["view", "family"],
    difficulty: "easy",
    tips: [
      "Arrive at sunrise or within an hour of it for soft light and light traffic",
      "The pullout parking lot fills fast by mid-morning in season",
      "Free, no separate ticket beyond the park entrance fee"
    ],
    quizFacts: [
      {
        question: "Which famous granite monolith stands on the left side of the Tunnel View frame?",
        correctAnswer: "El Capitan",
        distractors: ["Half Dome", "Mount Whitney", "Glacier Point"]
      },
      {
        question: "Which photographer made Tunnel View internationally famous with his black-and-white prints?",
        correctAnswer: "Ansel Adams",
        distractors: ["Annie Leibovitz", "Steve McCurry", "Dorothea Lange"]
      }
    ]
  },
  {
    id: "yosemite-valley-floor",
    name: "Yosemite Valley Floor",
    category: "attraction",
    region: "mainland",
    shortDescription: "Meadows and granite walls, best explored by shuttle and foot",
    description:
      "The seven-mile-long glacially carved valley at the heart of the park — open meadows ringed by sheer granite walls thousands of feet high, with a free shuttle looping between trailheads, viewpoints and campgrounds.",
    image: "./images/yosemite-valley-floor.jpg",
    imageCredit: unsplashCredit("Bailey Zindel (@baileyzindel)", "NRQV-hBF10M"),
    website: "https://www.nps.gov/yose/planyourvisit/valleyshuttle.htm",
    address: "Yosemite Valley, Yosemite National Park, CA",
    coords: [37.7459, -119.5936],
    tags: ["nature", "family", "view"],
    difficulty: "easy",
    tips: [
      "Free shuttle buses run the length of the valley — parking is limited and fills early",
      "Meadow boardwalks keep the fragile grasses protected — stay on the paths"
    ]
  },
  {
    id: "bridalveil-fall",
    name: "Bridalveil Fall",
    category: "attraction",
    region: "mainland",
    shortDescription: "A short paved walk to the valley's signature waterfall",
    description:
      "A 620-foot waterfall at the valley's western end, reachable via a short, easy paved path. Flow varies enormously by season — a thundering, wind-blown veil in spring snowmelt, often reduced to a trickle or dry by October.",
    image: "./images/bridalveil-fall.jpg",
    imageCredit: unsplashCredit("Michael & Diane Weidner (@michaelbweidner)", "Q5vyZMKEoSw"),
    website: "https://www.nps.gov/yose/planyourvisit/bridalveil.htm",
    address: "Bridalveil Fall Trail, Yosemite National Park, CA",
    coords: [37.7168, -119.6483],
    tags: ["water", "family", "view"],
    openingNote: "October is dry season — expect a trickle or a dry fall rather than the springtime flow.",
    difficulty: "easy",
    tips: [
      "October is the driest month — don't expect the roaring spring flow",
      "The short paved trail is stroller-friendly but can be slick with spray in wetter months"
    ]
  },
  {
    id: "glacier-point",
    name: "Glacier Point",
    category: "attraction",
    region: "mainland",
    shortDescription: "A sweeping panorama over Half Dome, 7,214 feet up",
    description:
      "A dramatic overlook above the valley, face-to-face with Half Dome and looking down onto Vernal and Nevada Falls. Glacier Point Road typically closes for the season with the first significant snowfall — sometimes as early as late October, so check conditions before the drive.",
    image: "./images/glacier-point.jpg",
    imageCredit: unsplashCredit("Aniket Deole (@anik3t)", "K8whBKGYjZQ"),
    website: "https://www.nps.gov/yose/planyourvisit/glacierpoint.htm",
    address: "Glacier Point Road, Yosemite National Park, CA",
    coords: [37.7290, -119.5742],
    tags: ["view", "nature"],
    openingNote: "Road closes with the first real snowfall — verify it's still open before driving up.",
    difficulty: "easy",
    tips: [
      "Check the NPS road-status page the morning of your visit — this closure can happen with little warning in fall",
      "The main overlook is a short paved walk from the parking area"
    ]
  },

  // ---------- MAINLAND: DEATH VALLEY ----------
  {
    id: "badwater-basin",
    name: "Badwater Basin",
    category: "attraction",
    region: "mainland",
    shortDescription: "282 feet below sea level — the lowest point in North America",
    description:
      "A vast basin of crusted salt flats sitting 282 feet below sea level, the lowest point in North America. A boardwalk leads out onto the salt crust, with the Panamint Range rising across the valley and a small sign on the cliff above marking sea level, far overhead.",
    image: "./images/badwater-basin.jpg",
    imageCredit: unsplashCredit("Aveedibya Dey (@aveedibya)", "bGgVmTWjHIQ"),
    website: "https://www.nps.gov/deva/planyourvisit/badwater-basin.htm",
    address: "Badwater Road, Death Valley National Park, CA",
    coords: [36.2500, -116.8258],
    tags: ["nature", "family", "view"],
    difficulty: "easy",
    tips: [
      "Bring far more water than feels necessary — there's no shade at all",
      "The salt flats are rough and can be slippery near the spring-fed pool at the trailhead",
      "Look up at the cliff face for the small 'sea level' marker high above — a good sense of scale"
    ],
    quizFacts: [
      {
        question: "How far below sea level is Badwater Basin?",
        correctAnswer: "282 feet",
        distractors: ["50 feet", "1,000 feet", "It's at sea level"]
      },
      {
        question: "What is Badwater Basin's white ground surface actually made of?",
        correctAnswer: "Crusted salt",
        distractors: ["Snow", "Bleached sand", "Volcanic ash"]
      }
    ]
  },
  {
    id: "artists-palette",
    name: "Artist's Palette",
    category: "attraction",
    region: "mainland",
    shortDescription: "Volcanic hills streaked pink, green and purple",
    description:
      "A one-way scenic drive (Artist's Drive) through hills colored by oxidized volcanic and metamorphic minerals — iron oxides for red and pink, chlorite for green, manganese for purple. Best seen in the softer light of late afternoon.",
    image: "./images/artists-palette.jpg",
    imageCredit: unsplashCredit("Zoshua Colah (@zoshuacolah)", "XcNrtTFiCHg"),
    website: "https://www.nps.gov/deva/planyourvisit/artists-drive.htm",
    address: "Artist's Drive, Death Valley National Park, CA",
    coords: [36.3894, -116.8394],
    tags: ["view", "nature"],
    difficulty: "easy",
    tips: [
      "Artist's Drive is one-way — plan your route accordingly",
      "Best colors show up in late-afternoon light, not midday sun",
      "No shade at the main viewpoint pullout"
    ]
  },
  {
    id: "zabriskie-point",
    name: "Zabriskie Point",
    category: "attraction",
    region: "mainland",
    shortDescription: "Golden, wildly eroded badlands — an iconic sunset spot",
    description:
      "A short paved path climbs to an overlook above a maze of eroded golden and brown badlands, with Manly Beacon's distinctive spire rising from the foreground. One of Death Valley's most photographed sunset locations.",
    image: "./images/zabriskie-point.jpg",
    imageCredit: unsplashCredit("Valeriia Neganova (@neganova)", "Sn9-Q6Z18z0"),
    website: "https://www.nps.gov/deva/planyourvisit/zabriskie-point.htm",
    address: "CA-190, Death Valley National Park, CA",
    coords: [36.4269, -116.8117],
    tags: ["view", "family"],
    difficulty: "easy",
    tips: [
      "Arrive 30 minutes before sunset to claim a good spot on the overlook",
      "The short walk up from the parking lot is paved and easy",
      "Named for Christian Brevoort Zabriskie, a manager of the borax mining operation once based here"
    ]
  },
  {
    id: "mesquite-flat-dunes",
    name: "Mesquite Flat Sand Dunes",
    category: "attraction",
    region: "mainland",
    shortDescription: "Rolling dunes near Stovepipe Wells, best at sunrise",
    description:
      "A field of rolling sand dunes reaching about 100 feet high near Stovepipe Wells — the most accessible dune field in the park, with no marked trail, so visitors wander freely across the sand. Sunrise and early morning give the softest light and coolest sand.",
    image: "./images/mesquite-flat-dunes.jpg",
    imageCredit: unsplashCredit("Steve Gribble (@steve_g_)", "iZirkCavoSY"),
    website: "https://www.nps.gov/deva/planyourvisit/mesquite-flat-sand-dunes.htm",
    address: "Near Stovepipe Wells, Death Valley National Park, CA",
    coords: [36.6058, -117.1219],
    tags: ["nature", "family", "view"],
    openingNote: "Best at sunrise or early morning, before the sand heats up.",
    difficulty: "easy",
    tips: [
      "Sand surface temperatures can exceed 150°F by midday in warm weather — go early",
      "No marked trail — pick any line into the dunes and retrace your own footprints back",
      "Bring closed shoes; sand gets hot fast even in cooler months"
    ]
  },

  // ---------- MAINLAND: LAS VEGAS ----------
  {
    id: "bellagio-fountains",
    name: "Bellagio Fountains",
    category: "attraction",
    region: "mainland",
    shortDescription: "Free choreographed fountain show on the Bellagio's lake",
    description:
      "A free, choreographed water, light and music show on the eight-acre lake in front of the Bellagio hotel — jets shoot up to 460 feet in time with the soundtrack, running every 15–30 minutes through the afternoon and evening.",
    image: "./images/bellagio-fountains.jpg",
    imageCredit: unsplashCredit("Fabio Sasso (@abduzeedo)", "aHMc5GQbaqo"),
    website: "https://bellagio.mgmresorts.com/en/entertainment/fountains-of-bellagio.html",
    address: "3600 S Las Vegas Blvd, Las Vegas, NV",
    coords: [36.1126, -115.1767],
    tags: ["culture", "family", "view"],
    difficulty: "easy",
    tips: [
      "Free, no ticket needed — just find a spot along the Strip sidewalk or the Bellagio's own walkway",
      "Shows run every 15 minutes in the afternoon, every 30 minutes early evening, check the posted schedule"
    ]
  },
  {
    id: "fremont-street-experience",
    name: "Fremont Street Experience",
    category: "attraction",
    region: "mainland",
    shortDescription: "Downtown Vegas's neon pedestrian mall under an LED canopy",
    description:
      "The historic downtown core of Las Vegas, now a pedestrian mall covered by a massive curved LED canopy that runs free light-and-sound shows on the hour after dark — a grittier, more old-school contrast to the polished modern Strip.",
    image: "./images/fremont-street-experience.jpg",
    imageCredit: unsplashCredit("Jordi Vich Navarro (@jvich)", "CjAYVcDb5qg"),
    website: "https://www.vegasexperience.com/",
    address: "Fremont Street, Las Vegas, NV",
    coords: [36.1699, -115.1436],
    tags: ["culture", "family"],
    difficulty: "easy",
    tips: ["Free light shows run on the hour after dark", "A rideshare from the Strip is about 15–20 minutes"]
  },
  {
    id: "red-rock-canyon",
    name: "Red Rock Canyon National Conservation Area",
    category: "attraction",
    region: "mainland",
    shortDescription: "A 13-mile scenic loop through dramatic red sandstone cliffs",
    description:
      "A striking sandstone escarpment about 25 minutes from the Strip, managed by the Bureau of Land Management (not the National Park Service). A 13-mile one-way scenic drive winds past red and white striped cliffs, with pullouts for short hikes and photos.",
    image: "./images/red-rock-canyon.jpg",
    imageCredit: unsplashCredit("Daniel Halseth (@dhalseth)", "Db6_B6K71wQ"),
    website: "https://www.blm.gov/visit/red-rock-canyon",
    address: "Red Rock Canyon Scenic Dr, Las Vegas, NV",
    coords: [36.1357, -115.4269],
    tags: ["nature", "view", "family"],
    difficulty: "easy",
    tips: [
      "This is BLM land, not a national park — its entrance fee is separate from an America the Beautiful pass, though the pass is still honored here",
      "The scenic drive requires a timed-entry reservation in peak season — check before you go"
    ]
  },

  // ---------- MAINLAND: GRAND CANYON WEST + ANTELOPE CANYON ----------
  {
    id: "grand-canyon-west",
    name: "Grand Canyon West — Eagle Point",
    category: "attraction",
    region: "mainland",
    shortDescription: "Canyon-edge overlooks on Hualapai tribal land, with an optional glass Skywalk",
    description:
      "A section of the western Grand Canyon rim managed by the Hualapai Tribe, not the National Park Service — Eagle Point's overlooks are named for a rock formation resembling an eagle in flight, with the Skywalk glass bridge available as a paid add-on for those who want to walk out over the canyon edge.",
    image: "./images/grand-canyon-west.jpg",
    imageCredit: unsplashCredit("Tim Hart (@timhart0421)", "MMEryLDqkXY"),
    website: "https://grandcanyonwest.com/",
    address: "Grand Canyon West, Peach Springs, AZ",
    coords: [35.9743, -113.8114],
    tags: ["view", "culture", "national-park"],
    openingNote: "Hualapai tribal land — NOT covered by the America the Beautiful national park pass.",
    difficulty: "easy",
    tips: [
      "Not part of the National Park Service — the America the Beautiful pass does NOT cover entry here; expect separate tribal fees",
      "Skywalk access is a paid add-on beyond the base admission",
      "It's windy at the rim year-round — bring a layer"
    ],
    quizFacts: [
      {
        question: "Which tribe manages Grand Canyon West?",
        correctAnswer: "The Hualapai Tribe",
        distractors: ["The National Park Service", "The Navajo Nation", "The state of Arizona"]
      },
      {
        question: "Is the America the Beautiful national park pass accepted at Grand Canyon West?",
        correctAnswer: "No — it's tribal land with its own fees",
        distractors: ["Yes, fully covered", "Only on weekdays", "Only for the Skywalk"]
      }
    ]
  },
  {
    id: "antelope-canyon",
    name: "Antelope Canyon",
    category: "attraction",
    region: "mainland",
    shortDescription: "Swirling sandstone slot canyon, Navajo-guided tours only",
    description:
      "A narrow, deep sandstone slot canyon on Navajo land near Page, Arizona, carved over millennia by flash floods. Light beams stream down through narrow openings at certain times of day, especially prized in Upper Antelope Canyon. Access is only via guided Navajo-led tours, which sell out well in advance.",
    image: "./images/antelope-canyon.jpg",
    imageCredit: unsplashCredit("Donald Giannatti (@wizwow)", "nBSzDA8qZzA"),
    website: "https://www.navajonationparks.org/tribal-parks/antelope-canyon/",
    address: "Antelope Canyon, near Page, AZ",
    coords: [36.8619, -111.3743],
    tags: ["cave", "culture", "view"],
    bookingNote: "Navajo-guided tours only — book well ahead, popular light-beam time slots sell out fastest.",
    difficulty: "easy",
    tips: [
      "Book weeks ahead — this tour sells out, especially the midday light-beam slots",
      "No large bags allowed inside; check your tour operator's rules",
      "Upper Antelope Canyon has the famous light beams; Lower Antelope Canyon involves more stairs but fewer crowds"
    ],
    quizFacts: [
      {
        question: "What natural force carved Antelope Canyon's swirling walls?",
        correctAnswer: "Flash floods, over thousands of years",
        distractors: ["Wind alone", "An ancient river that still flows there", "A meteor impact"]
      },
      {
        question: "Whose tribal land is Antelope Canyon located on?",
        correctAnswer: "The Navajo Nation",
        distractors: ["The Hualapai Tribe", "Federal Bureau of Land Management", "The state of Utah"]
      }
    ]
  },

  // ---------- HAWAII: MAUI ----------
  {
    id: "wailea-beach",
    name: "Wailea Beach",
    category: "attraction",
    region: "hawaii",
    shortDescription: "A wide gold-sand beach fronting the Wailea resort corridor",
    description:
      "A broad, gently sloping gold-sand beach along Maui's south shore, fronting the Wailea resort strip — generally calm swimming with good snorkeling near the rocky points at either end.",
    image: "./images/wailea-beach.jpg",
    imageCredit: unsplashCredit("Ganapathy Kumar (@gkumar2175)", "7782WXBriyM"),
    website: "https://www.gohawaii.com/islands/maui/regions/wailea",
    address: "Wailea Beach, Wailea, Maui, HI",
    coords: [20.6867, -156.4406],
    tags: ["water", "family"],
    difficulty: "easy",
    tips: [
      "Snorkeling is best near the rocky points on either end of the beach, not the open middle stretch",
      "Public beach access paths run between the resorts — Hawaii's beaches are all public below the high-tide line"
    ]
  },
  {
    id: "twin-falls-maui",
    name: "Twin Falls",
    category: "attraction",
    region: "hawaii",
    shortDescription: "The most accessible waterfall on the Road to Hana",
    description:
      "The first major waterfall stop on the Hana Highway, reached by a short, easy walk from a roadside fruit stand — a gentle introduction to the jungle scenery of the drive ahead, with a swimmable pool below the falls.",
    image: "./images/twin-falls-maui.jpg",
    imageCredit: unsplashCredit("Rina Miele (@honeydesign)", "zu9R0_7CD3E"),
    address: "Hana Highway, Haiku, Maui, HI",
    coords: [20.9308, -156.2308],
    tags: ["water", "family", "trail"],
    difficulty: "easy",
    tips: ["A short, easy walk from the roadside parking and fruit stand", "The pool can get crowded midday — go early on the drive"]
  },
  {
    id: "waianapanapa-state-park",
    name: "Waiʻānapanapa State Park",
    category: "attraction",
    region: "hawaii",
    shortDescription: "A dramatic black-sand beach and sea cave near Hana",
    description:
      "A striking black-sand beach formed from cooled lava, framed by a sea arch and a lava-tube sea cave, plus a short section of the ancient King's Highway coastal trail. Hawaii state parks require an advance reservation for both parking and entry.",
    image: "./images/waianapanapa-black-sand.jpg",
    imageCredit: unsplashCredit("Zane Persaud (@zapsizzle)", "u-9j-dlWVJQ"),
    website: "https://dlnr.hawaii.gov/dsp/parks/maui/waianapanapa-state-park/",
    address: "Waiʻānapanapa State Park, Hana, Maui, HI",
    coords: [20.7864, -156.0011],
    tags: ["nature", "view", "water"],
    bookingNote: "Advance reservation required — book online before you go, walk-ins are turned away.",
    difficulty: "easy",
    tips: [
      "Book the state park reservation online in advance — this is strictly enforced",
      "The black sand and lava rock get very hot — sandals help",
      "Strong currents make this a look-don't-swim beach for most visitors"
    ]
  },
  {
    id: "wailua-falls",
    name: "Wailua Falls",
    category: "attraction",
    region: "hawaii",
    shortDescription: "A tall roadside waterfall just past Hana",
    description:
      "An 80-foot roadside waterfall visible right from the highway just past Hana town — one of the easiest big-waterfall views on the whole drive, no hiking required.",
    image: "./images/wailua-falls-maui.jpg",
    imageCredit: unsplashCredit("Christian Joudrey (@cjoudrey)", "_GEx2CfrAOk"),
    address: "Hana Highway, past Hana, Maui, HI",
    coords: [20.6636, -156.0092],
    tags: ["water", "view", "family"],
    difficulty: "easy",
    tips: ["Visible directly from a highway pullout — no hike required", "Flow is much stronger after recent rain"]
  },
  {
    id: "hana-town",
    name: "Hana",
    category: "attraction",
    region: "hawaii",
    shortDescription: "A tiny, sleepy town at the end (or midpoint) of the drive",
    description:
      "A small, quiet former plantation town on Maui's remote east end — a good lunch and leg-stretch stop, with a historic general store, a couple of food trucks, and a slower pace than anywhere else on the island.",
    image: "./images/hana-town.jpg",
    imageCredit: unsplashCredit("Claudio Schwarz (@purzlbaum)", "e9ncui5Jzvc"),
    website: "https://www.gohawaii.com/islands/maui/regions/hana",
    address: "Hana, Maui, HI",
    coords: [20.7584, -155.9903],
    tags: ["village", "food"],
    difficulty: "easy",
    tips: ["Food trucks near the ballpark are the easiest lunch option", "Gas up here if you're low — the last reliable station before the long drive back"]
  },
  {
    id: "haleakala-summit",
    name: "Haleakalā Summit",
    category: "attraction",
    region: "hawaii",
    shortDescription: "Sunrise above the clouds at 10,023 feet",
    description:
      "The summit of Maui's dormant shield volcano, its vast reddish crater looking almost lunar. Sunrise here is a bucket-list experience — watching dawn break from above a sea of clouds — but requires a separate advance reservation from the National Park Service for the 3:00–7:00 am viewing window, on top of the standard park entrance fee.",
    image: "./images/haleakala-summit.jpg",
    imageCredit: unsplashCredit("Tevin Trinh", "ygfYm0C1yrg"),
    website: "https://www.nps.gov/hale/planyourvisit/sunrise.htm",
    address: "Haleakalā National Park, Maui, HI",
    coords: [20.7097, -156.2533],
    tags: ["view", "nature", "national-park"],
    bookingNote: "Sunrise viewing requires a separate advance reservation via recreation.gov, on top of park entry.",
    difficulty: "easy",
    tips: [
      "Book the sunrise reservation well ahead on recreation.gov — it sells out",
      "Summit temperatures can be near or below freezing before dawn — bring real warm layers",
      "A daytime summit visit needs no special reservation, only the park entrance fee"
    ],
    quizFacts: [
      {
        question: "What does 'Haleakalā' mean in Hawaiian?",
        correctAnswer: "House of the Sun",
        distractors: ["Sleeping Giant", "Rainbow Mountain", "Valley of Fire"]
      },
      {
        question: "What's required to watch sunrise at Haleakalā's summit, beyond the park entrance fee?",
        correctAnswer: "A separate advance viewing reservation",
        distractors: ["Nothing extra is needed", "A 4WD vehicle only", "A guided tour is mandatory"]
      }
    ]
  },
  {
    id: "molokini-crater",
    name: "Molokini Crater",
    category: "attraction",
    region: "hawaii",
    shortDescription: "A partially-submerged volcanic crescent and marine preserve",
    description:
      "A crescent-shaped, partially submerged volcanic crater about three miles off Maui's coast, protected as a marine life conservation district. Its sheltered, exceptionally clear water makes it one of Maui's best snorkel and dive sites, reached only by boat.",
    image: "./images/molokini-crater.jpg",
    imageCredit: unsplashCredit("Yale Cohen (@coheny)", "9lgHTAvxO0U"),
    website: "https://dlnr.hawaii.gov/dar/marine-managed-areas/molokini-shoal-marine-life-conservation-district/",
    address: "Molokini, off Maui, HI",
    coords: [20.6317, -156.4972],
    tags: ["water", "nature"],
    difficulty: "easy",
    tips: ["Morning tours have the calmest water and best visibility", "No walk-up access — book a boat tour in advance"]
  },
  {
    id: "lahaina-town",
    name: "Lahaina",
    category: "attraction",
    region: "hawaii",
    shortDescription: "Historic former capital of the Hawaiian Kingdom",
    description:
      "A historic whaling port and former capital of the Kingdom of Hawaiʻi, on Maui's west side. Parts of the town are still recovering from the devastating August 2023 wildfire — check current visitor guidance and respect any areas still off-limits before you go.",
    image: "./images/lahaina-town.jpg",
    imageCredit: unsplashCredit("Yeshi Kangrang (@omgitsyeshi)", "Kj9drpdopdU"),
    website: "https://www.gohawaii.com/islands/maui/regions/lahaina",
    address: "Lahaina, Maui, HI",
    coords: [20.8783, -156.6825],
    tags: ["culture", "village"],
    openingNote: "Check current visitor guidance — parts of the town are still recovering from the 2023 wildfire.",
    difficulty: "easy",
    tips: ["Check for current visitor guidance before planning time here", "Respect any areas still closed to visitors"]
  },

  // ---------- HAWAII: BIG ISLAND ----------
  {
    id: "kona-coffee-farm",
    name: "Kona Coffee Farm Tour",
    category: "attraction",
    region: "hawaii",
    shortDescription: "A working farm tour in the famous Kona coffee belt",
    description:
      "A tour of a working coffee farm on the narrow volcanic-slope strip between roughly 800 and 2,500 feet elevation known as the Kona coffee belt — the only place in the United States where coffee is grown commercially at scale. Tours typically end with a tasting.",
    image: "./images/kona-coffee-farm.jpg",
    imageCredit: unsplashCredit("Clint McKoy (@clintmckoy)", "h28p96ICizo"),
    website: "https://www.konacoffeefarmers.org/",
    address: "Kona coffee belt, Holualoa, HI",
    coords: [19.6208, -155.9411],
    tags: ["food", "culture"],
    difficulty: "easy",
    tips: [
      "'100% Kona' is legally protected — a 'Kona blend' may be only 10% actual Kona coffee, check labels",
      "Harvest season runs roughly August through January, so October visits may catch active picking"
    ]
  },
  {
    id: "kilauea-crater",
    name: "Kīlauea Crater Rim",
    category: "attraction",
    region: "hawaii",
    shortDescription: "Trails and steam vents around one of the world's most active volcanoes",
    description:
      "Sections of the Crater Rim Trail overlook the vast Kīlauea caldera at the heart of Hawaiʻi Volcanoes National Park, with roadside steam vents nearby where groundwater meets hot volcanic rock and rises as visible steam.",
    image: "./images/kilauea-crater.jpg",
    imageCredit: unsplashCredit("James Lee (@picsbyjameslee)", "iujjIfsPBqE"),
    website: "https://www.nps.gov/havo/",
    address: "Hawaiʻi Volcanoes National Park, HI",
    coords: [19.4194, -155.2885],
    tags: ["nature", "view", "national-park"],
    difficulty: "easy",
    tips: [
      "Check the current eruption and air-quality status before visiting — conditions change",
      "The elevation here is cooler and often wetter than the Kona coast — bring a layer"
    ],
    quizFacts: [
      {
        question: "What is Kīlauea?",
        correctAnswer: "One of the world's most active volcanoes",
        distractors: ["An extinct volcano", "A coral reef", "A mountain range"]
      }
    ]
  },
  {
    id: "thurston-lava-tube",
    name: "Thurston Lava Tube",
    category: "attraction",
    region: "hawaii",
    shortDescription: "Walk through a centuries-old natural lava tunnel",
    description:
      "A several-hundred-year-old lava tube in a lush fern forest — a natural tunnel formed when the outer surface of a lava flow cooled and hardened while molten rock kept draining through the middle, leaving a hollow passage you can walk straight through.",
    image: "./images/thurston-lava-tube.jpg",
    imageCredit: wmCredit("Th%C4%81rston_Lava_Tube"),
    website: "https://www.nps.gov/havo/planyourvisit/thurston-lava-tube.htm",
    address: "Hawaiʻi Volcanoes National Park, HI",
    coords: [19.4106, -155.2422],
    tags: ["cave", "nature", "family"],
    difficulty: "easy",
    tips: ["A short, easy loop, but the tube's interior is darker than expected — bring a light", "Can be slippery when wet"]
  },
  {
    id: "punaluu-black-sand-beach",
    name: "Punaluʻu Black Sand Beach",
    category: "attraction",
    region: "hawaii",
    shortDescription: "Black lava-sand beach, a favorite resting spot for green sea turtles",
    description:
      "A striking beach of black sand formed from fragmented cooled lava, on the Big Island's southeast coast — also one of the best-known places to see Hawaiian green sea turtles (honu) resting on the shore. Keep a respectful distance; touching or approaching them is illegal.",
    image: "./images/punaluu-black-sand-beach.jpg",
    imageCredit: unsplashCredit("John Ko (@jko001)", "8h_i2gTa6Ps"),
    website: "https://www.gohawaii.com/islands/hawaii-big-island/regions/kau/punaluu-beach-park",
    address: "Punaluʻu Beach Rd, Naalehu, HI",
    coords: [19.1372, -155.5006],
    tags: ["nature", "family", "view"],
    difficulty: "easy",
    tips: ["Never touch or approach the turtles — it's illegal and stresses them", "The black sand gets very hot — sandals recommended"]
  },
  {
    id: "south-point-green-sand",
    name: "South Point & Green Sand Beach",
    category: "attraction",
    region: "hawaii",
    shortDescription: "The southernmost point in the US, plus a rare olivine-crystal beach",
    description:
      "Ka Lae (South Point) is the southernmost point in the United States. Nearby, a long walk or rough 4WD track leads to Papakōlea Green Sand Beach, one of only a handful of green-sand beaches in the world, colored by olivine crystals eroded from a volcanic cinder cone.",
    image: "./images/south-point-green-sand.jpg",
    imageCredit: unsplashCredit("David Clark (@forawin)", "LREnG2DXq4U"),
    address: "South Point Rd, Naalehu, HI",
    coords: [18.9105, -155.6811],
    tags: ["nature", "extreme", "view"],
    difficulty: "challenging",
    tips: [
      "The walk to Green Sand Beach is about 2.5 miles each way over exposed, uneven terrain",
      "Only attempt the 4WD track if your rental is actually rated for it"
    ]
  },
  {
    id: "manta-ray-night-snorkel",
    name: "Manta Ray Night Snorkel",
    category: "attraction",
    region: "hawaii",
    shortDescription: "Float above feeding manta rays under boat-mounted lights",
    description:
      "The Big Island's signature nighttime ocean experience — boats anchor off the Kona coast after dark and shine lights into the water, drawing plankton and, in turn, giant manta rays that glide and loop just beneath snorkelers holding onto a lit surface float.",
    image: "./images/manta-ray-night-snorkel.jpg",
    imageCredit: unsplashCredit("Kinø", "-nTYiNWjXk0"),
    website: "https://www.gohawaii.com/islands/hawaii-big-island/things-do",
    address: "Off Keauhou Bay, Kona, HI",
    coords: [19.5586, -155.9678],
    tags: ["water", "nature"],
    bookingNote: "Book ahead — this tour is popular and fills up, especially in high season.",
    difficulty: "easy",
    tips: ["Wetsuits are usually provided — the water cools after dark", "Sightings are very common off Kona but never 100% guaranteed"]
  },
  {
    id: "mauna-kea-summit",
    name: "Mauna Kea Summit",
    category: "attraction",
    region: "hawaii",
    shortDescription: "9,200 ft visitor station, sunset and stargazing — 4WD required above",
    description:
      "The Big Island's tallest peak and one of the best astronomical observing sites on Earth. The Visitor Information Station sits at 9,200 feet, the highest point most visitors can drive to without 4WD; the true summit and observatories above require a 4WD vehicle, and a guided tour is strongly recommended over self-driving given the altitude, cold and darkness.",
    image: "./images/mauna-kea-summit.jpg",
    imageCredit: unsplashCredit("Alex Eckermann (@alexeckermann)", "eLjFKlrv3iU"),
    website: "https://www.imiloahawaii.org/maunakeavisitorcenter",
    address: "Mauna Kea Access Rd, Hilo, HI",
    coords: [19.8207, -155.4681],
    tags: ["view", "nature", "extreme"],
    bookingNote: "A guided tour is recommended — 4WD is required above the visitor station.",
    difficulty: "moderate",
    tips: [
      "Bring genuinely warm clothing — temperatures at 9,200+ ft can drop below freezing after dark",
      "Book a guided tour rather than self-driving above the visitor station",
      "Give yourself time to acclimatize before going higher if your tour allows it"
    ],
    quizFacts: [
      {
        question: "What does 'Mauna Kea' mean in Hawaiian?",
        correctAnswer: "White Mountain",
        distractors: ["Red Mountain", "Sleeping Volcano", "Sacred Cloud"]
      }
    ]
  },
  {
    id: "kahaluu-beach-park",
    name: "Kahaluʻu Beach Park",
    category: "attraction",
    region: "hawaii",
    shortDescription: "One of the Big Island's easiest and best shore snorkel spots",
    description:
      "A calm, shallow, reef-protected beach right off the Kona coast road — full of tropical reef fish and commonly visited by resting honu (green sea turtles), with lifeguards on duty and easy shore access, making it one of the best beginner snorkel spots on the island.",
    image: "./images/kahaluu-beach-park.jpg",
    imageCredit: unsplashCredit("Sarah Lee (@hisarahlee)", "PkHEqZiIYoo"),
    address: "78-6710 Alii Dr, Kailua-Kona, HI",
    coords: [19.5661, -155.9683],
    tags: ["water", "family"],
    difficulty: "easy",
    tips: ["Lifeguards on duty — check posted flags for current conditions", "Keep a respectful distance from resting sea turtles"]
  }
];

export const getAttraction = (id: string) => attractions.find(a => a.id === id);
