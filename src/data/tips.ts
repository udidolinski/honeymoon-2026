import type { Tip } from "./types";

export const tips: Tip[] = [
  {
    id: "annual-pass",
    title: "Buy the America the Beautiful annual pass at the first park",
    body:
      "This trip visits Yosemite, Sequoia, Death Valley and Hawaiʻi Volcanoes — all National Park Service sites where a single $80 America the Beautiful annual pass covers entrance for the whole vehicle, and pays for itself after about three parks. Buy it at the entrance station of the first park you visit. Important exception: Grand Canyon West is Hualapai tribal land, NOT part of the National Park System, so the pass does NOT cover it — expect separate tribal entry fees there.",
    severity: "info"
  },
  {
    id: "glacier-point-closure",
    title: "Glacier Point Road can close with little warning",
    body:
      "Glacier Point Road typically closes for the season with the first significant snowfall in the high country — this can happen as early as mid-to-late October some years. Check the NPS road-status page the morning you plan to drive up, and have a backup plan (Tunnel View and the valley floor stay open) if it's already closed.",
    severity: "warning"
  },
  {
    id: "haleakala-reservation",
    title: "Haleakalā sunrise requires a separate advance reservation",
    body:
      "Watching sunrise from Haleakalā's summit requires booking a viewing reservation on recreation.gov in advance, separate from the park entrance fee — this sells out, sometimes weeks ahead. If you don't get a slot, a daytime summit visit needs no special reservation and still has the crater views.",
    severity: "warning"
  },
  {
    id: "antelope-canyon-booking",
    title: "Book Antelope Canyon (and the Grand Canyon West tour) well ahead",
    body:
      "Antelope Canyon is accessible only via guided Navajo-led tours, and the popular light-beam time slots sell out weeks in advance. Since it's usually paired with Grand Canyon West as a single combo day tour from Las Vegas, book the whole package early rather than trying to assemble it last-minute.",
    severity: "warning"
  },
  {
    id: "tipping-usa",
    title: "Tipping in the US — 15–20% is standard, unlike Israel",
    body:
      "Restaurant tipping in the US is expected, not optional the way it can feel in Israel — 15–20% of the pre-tax bill at sit-down restaurants is standard, 20%+ for excellent service. Bartenders expect $1–2 per drink, and hotel bellhops/housekeeping appreciate a few dollars in cash.",
    severity: "info"
  },
  {
    id: "driving-notes-usa",
    title: "Driving in the US — right-hand drive, desert gaps, speed limits",
    body:
      "The US drives on the right with the steering wheel on the left, opposite Israel. Cell signal drops out for long stretches in Death Valley and other desert areas — download offline maps in advance. Fuel up before any long desert stretch; stations can be far apart. Speed limits in California and Nevada are posted in miles per hour and are strictly enforced, especially through small towns.",
    severity: "info"
  },
  {
    id: "vegas-drinking-age",
    title: "Vegas: drinking age is 21, casino etiquette matters",
    body:
      "The legal drinking age across the US, including Nevada, is 21 — carry photo ID even if you're clearly of age, as many bars and clubs card everyone. On casino floors, dress codes and minimum ages (often 21) apply in gaming areas even if the resort itself welcomes all ages elsewhere.",
    severity: "info"
  },
  {
    id: "hawaii-reef-safe-sunscreen",
    title: "Reef-safe sunscreen is required by Hawaii law",
    body:
      "Hawaii state law bans the sale of sunscreens containing oxybenzone and octinoxate, chemicals shown to harm coral reefs — bring reef-safe sunscreen (mineral-based, zinc oxide or titanium dioxide) from home, since it can be pricier locally, though every ABC Store stocks compliant options.",
    severity: "info"
  },
  {
    id: "hawaii-altitude-cold",
    title: "Haleakalā and Mauna Kea are genuinely cold, despite being in Hawaii",
    body:
      "It's easy to forget that Hawaii has real high-altitude cold — Haleakalā's summit (10,023 ft) and Mauna Kea's summit area (13,800+ ft) can both drop to near or below freezing, especially before dawn or after dark. Pack real warm layers for both, not just a light jacket.",
    severity: "warning"
  },
  {
    id: "aloha-spirit-pace",
    title: "'Aloha spirit' — island time runs slower, and that's the point",
    body:
      "Service, traffic and schedules in Hawaii run at a noticeably more relaxed pace than the mainland or Vegas — locals call it 'aloha spirit' or 'island time'. Build slack into island-day plans rather than stacking activities tightly back to back.",
    severity: "info"
  },
  {
    id: "kosher-mainland",
    title: "Kosher food is sparse on the mainland leg — plan around Vegas",
    body:
      "Oakhurst, Three Rivers and Death Valley have no kosher restaurants or kosher-certified groceries at all — Fresno, about an hour from Oakhurst, is the nearest town with a Chabad-supported kosher aisle if you want to stock up before the parks. Las Vegas is the bright spot: roughly 15–18 kosher-supervised restaurants cluster on the west side of the valley, a 15–20 minute rideshare from the Strip, including Burnt Offerings (OU-certified steakhouse) and Judit Mediterranean Cuisine (Glatt, closer to the Strip) — both close on Saturday, so plan around Shabbat. There's no dedicated 'kosher hotel' on the Strip; Chabad of Southern Nevada (chabadlv.org) keeps the most current restaurant list and can help arrange Shabbat meals or lower-floor rooms at your hotel.",
    severity: "info"
  },
  {
    id: "kosher-hawaii",
    title: "No walk-in kosher restaurant in Hawaii — book through Chabad instead",
    body:
      "Neither Maui nor the Big Island has a stand-alone kosher restaurant. Chabad of Maui (jewishmaui.com) prepares fresh kosher meals and Shabbat dinners by request from their Maui Mitzvah Center, and can arrange kosher grocery delivery straight to the Wailea resort. On the Big Island, Chabad Jewish Center of the Big Island in Kailua-Kona (jewishbigisland.org) hosts Shabbat and holiday meals by reservation and receives periodic kosher shipments (meat, chicken, Cholov Yisroel dairy) from the mainland. Email either Chabad house a few weeks ahead — this runs on advance reservations, not walk-in service.",
    severity: "info"
  },
  {
    id: "interisland-baggage",
    title: "Inter-island flight baggage rules can be stricter",
    body:
      "The LAS→Maui and Maui→Big Island legs are often on smaller aircraft with tighter baggage weight and size limits than mainland-to-Hawaii flights — check the specific airline's inter-island policy before packing, and again before the Big Island→SFO leg home.",
    severity: "info"
  }
];
