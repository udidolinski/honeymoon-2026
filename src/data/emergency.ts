import type { EmergencyGroup } from "./types";

export const emergencyGroups: EmergencyGroup[] = [
  {
    title: "United States — emergency numbers",
    items: [
      { label: "Emergency (police, fire, ambulance)", value: "911", type: "phone", detail: "The US emergency number — NOT 112. Works from any phone, English-speaking." },
      { label: "Non-emergency police (rental car issues, etc.)", value: "311", type: "phone", detail: "Available in some cities for non-urgent local government/police matters" },
      { label: "Poison control", value: "1-800-222-1222", type: "phone" }
    ]
  },
  {
    title: "Rental car — roadside assistance",
    items: [
      {
        label: "Hertz Roadside Assistance (placeholder — match your actual rental company)",
        value: "1-800-654-5060",
        type: "phone",
        detail: "Update this with the actual roadside assistance number for whichever company you book with"
      }
    ]
  },
  {
    title: "Hospitals — mainland leg",
    items: [
      {
        label: "Community Regional Medical Center — Fresno",
        value: "2823 Fresno St, Fresno, CA",
        detail: "Major hospital nearest Oakhurst/Yosemite, full ER. ≈ 1 h from Oakhurst",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.7522,-119.7864"
      },
      {
        label: "Kaweah Health Medical Center — Visalia",
        value: "400 W Mineral King Ave, Visalia, CA",
        detail: "Nearest major hospital to Three Rivers/Sequoia. ≈ 40 min",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.3302,-119.2921"
      },
      {
        label: "Desert View Hospital — Pahrump, NV",
        value: "1401 W St, Pahrump, NV",
        detail: "Nearest hospital to Death Valley/Furnace Creek. ≈ 1 h",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.2103,-115.9990"
      },
      {
        label: "Sunrise Hospital — Las Vegas",
        value: "3186 S Maryland Pkwy, Las Vegas, NV",
        detail: "Major hospital with a Level II trauma center, close to the Strip. ≈ 10 min",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=36.1319,-115.1367"
      }
    ]
  },
  {
    title: "Hospitals — Hawaii leg",
    items: [
      {
        label: "Maui Health / Maui Memorial Medical Center — Wailuku",
        value: "221 Mahalani St, Wailuku, HI",
        detail: "Maui's main hospital with full ER. ≈ 40 min from Wailea",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=20.8930,-156.5050"
      },
      {
        label: "Kona Community Hospital — Kealakekua",
        value: "79-1019 Haukapila St, Kealakekua, HI",
        detail: "Closest hospital to the Kona/Kohala Coast base. ≈ 20–30 min",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=19.5083,-155.9169"
      }
    ]
  },
  {
    title: "Israeli consular help",
    items: [
      {
        label: "Consulate General of Israel — San Francisco",
        value: "456 Montgomery St, San Francisco, CA",
        detail: "Covers the Pacific Northwest region, including California, Nevada and Hawaii",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=37.7942,-122.4028"
      },
      {
        label: "Consulate phone",
        value: "+1 415-844-7500",
        type: "phone"
      },
      {
        label: "Israel MFA — Israelis abroad, after-hours emergency",
        value: "+972 3 6953 0123",
        type: "phone",
        detail: "MFA Situation Room — 24/7"
      },
      {
        label: "Consulate website",
        value: "embassies.gov.il/san-francisco",
        type: "website",
        link: "https://embassies.gov.il/san-francisco"
      }
    ]
  },
  {
    title: "Travel insurance",
    items: [
      {
        label: "Travel insurance provider (add your policy details)",
        value: "Policy # — fill in after booking",
        detail: "Add your insurer's 24/7 emergency assistance number here once you've purchased a policy",
        type: "phone"
      }
    ]
  }
];
