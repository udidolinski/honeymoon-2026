export interface Airport {
  id: string;
  /** IATA code, or a short tag for non-airport transport stops. */
  code: string;
  name: string;
  address: string;
  /** Lat, lon. */
  coords: [number, number];
  /** When this trip uses it. */
  usedOn: string;
  note?: string;
}

/** Every airport (and the Las Vegas rental-car hub) on the route, in trip order. */
export const airports: Airport[] = [
  {
    id: "airport-tlv",
    code: "TLV",
    name: "Ben Gurion Airport",
    address: "Ben Gurion Airport, Lod, Israel",
    coords: [32.0114, 34.8867],
    usedOn: "Depart for the US around Oct 3-4 · land back home Oct 29 at 14:15",
    note: "Arrive about 3 hours before the flight to the US; confirm the terminal and check-in desk with your airline."
  },
  {
    id: "airport-las",
    code: "LAS",
    name: "Harry Reid International Airport",
    address: "5757 Wayne Newton Blvd, Las Vegas, NV 89119",
    coords: [36.084, -115.1537],
    usedOn: "Land Oct 4 at 18:35",
    note: "About 20 minutes by rideshare to Paris Las Vegas. Rideshare pickup is a short walk from baggage claim."
  },
  {
    id: "rental-las",
    code: "CAR",
    name: "Harry Reid Rent-A-Car Center (Alamo)",
    address: "7135 Gilespie St, Las Vegas, NV 89119",
    coords: [36.0655, -115.1576],
    usedOn: "Pick up the Alamo car on Oct 5 evening, after the tour",
    note: "The rental center is a separate site near the airport, reached by shuttle from the terminal or by rideshare from the Strip."
  },
  {
    id: "airport-sfo",
    code: "SFO",
    name: "San Francisco International Airport",
    address: "San Francisco, CA 94128",
    coords: [37.6213, -122.379],
    usedOn: "Fly to Kona Oct 11 at 07:00 · back from Maui Oct 27 at 18:30 · fly home Oct 28 at 08:55",
    note: "Leave Union Square around 04:30 on Oct 11. Be at check-in by 05:55 on Oct 28."
  },
  {
    id: "airport-koa",
    code: "KOA",
    name: "Kona International Airport at Keāhole",
    address: "73-200 Kupipi St, Kailua-Kona, HI 96740",
    coords: [19.7388, -156.0456],
    usedOn: "Land Oct 11 at 09:30 (Budget car) · fly to Maui Oct 19 at 12:50",
    note: "Return the Budget car here on Oct 19, fuelled, and be at the airport by about 11:30."
  },
  {
    id: "airport-ogg",
    code: "OGG",
    name: "Kahului Airport",
    address: "1 Kahului Airport Rd, Kahului, HI 96732",
    coords: [20.8986, -156.4306],
    usedOn: "Land Oct 19 at 13:30 (Budget car) · fly to San Francisco Oct 27 at 10:30",
    note: "Return the Budget car here on Oct 27 by about 08:00."
  }
];
