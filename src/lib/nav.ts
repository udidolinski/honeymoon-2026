/**
 * Deep links to Google Maps, Apple Maps and Waze.
 *
 * Two modes:
 *   - "place" (default): open the place's listing so the user can see
 *     hours, photos, reviews and the address, then tap Directions / Go.
 *   - "directions": jump straight to directions to the place. Used for
 *     hotels and airports, where the only thing you want is to get there.
 *
 * Strategy:
 *   - With an address → search "<name>, <address>".
 *   - With only a name → search the name (and pass the coordinates as a
 *     hint where the app supports it).
 *   - `byCoords` (a place we have no confirmed name for yet, such as a
 *     hotel that is not booked) → use the lat/lon only.
 */

export interface NavTarget {
  /** Place name (used in the search query). */
  name: string;
  /** Lat, lon. Used when no name is available, or with `byCoords`. */
  coords: [number, number];
  /** Optional street address. Sharpens the search. */
  address?: string;
  /** Ignore the name/address and navigate to the coordinates. */
  byCoords?: boolean;
}

export type NavMode = "place" | "directions";

function coordText(target: NavTarget): string {
  return `${target.coords[0]},${target.coords[1]}`;
}

function buildSearchQuery(target: NavTarget): string {
  if (target.byCoords) return coordText(target);
  const name = target.name.trim();
  const addr = target.address?.trim();
  return addr ? `${name}, ${addr}` : name;
}

/**
 * Google Maps. "place" opens the listing; "directions" opens the route
 * from the user's current location.
 */
export function googleMapsPlaceUrl(
  target: NavTarget | [number, number],
  mode: NavMode = "place"
): string {
  const t: NavTarget = Array.isArray(target)
    ? { name: "", coords: target, byCoords: true }
    : target;
  const query = encodeURIComponent(buildSearchQuery(t));
  if (mode === "directions") {
    return `https://www.google.com/maps/dir/?api=1&destination=${query}&travelmode=driving`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

/**
 * Apple Maps. Opens the Maps app on iPhone/Mac; on other devices it falls
 * back to Apple's web maps.
 */
export function appleMapsUrl(
  target: NavTarget | [number, number],
  mode: NavMode = "place"
): string {
  const t: NavTarget = Array.isArray(target)
    ? { name: "", coords: target, byCoords: true }
    : target;
  const query = encodeURIComponent(buildSearchQuery(t));
  const ll = `${t.coords[0]},${t.coords[1]}`;
  if (mode === "directions") {
    return `https://maps.apple.com/?daddr=${query}&dirflg=d`;
  }
  return t.byCoords
    ? `https://maps.apple.com/?ll=${ll}&q=${encodeURIComponent(t.name || "Pin")}`
    : `https://maps.apple.com/?q=${query}&ll=${ll}`;
}

/**
 * Waze. "place" shows the result without starting navigation (`navigate=no`);
 * "directions" starts navigation.
 */
export function wazePlaceUrl(
  target: NavTarget | [number, number],
  mode: NavMode = "place"
): string {
  const t: NavTarget = Array.isArray(target)
    ? { name: "", coords: target, byCoords: true }
    : target;
  const navigate = mode === "directions" ? "yes" : "no";
  if (t.byCoords) {
    return `https://waze.com/ul?ll=${t.coords[0]},${t.coords[1]}&navigate=${navigate}`;
  }
  const query = encodeURIComponent(buildSearchQuery(t));
  return `https://waze.com/ul?q=${query}&ll=${t.coords[0]},${t.coords[1]}&navigate=${navigate}`;
}

/* ------------------------------------------------------------------ */
/* Deprecated aliases — kept so any straggler imports still compile.   */
/* New code should use googleMapsPlaceUrl / wazePlaceUrl instead.      */
/* ------------------------------------------------------------------ */

/** @deprecated Use {@link googleMapsPlaceUrl}. */
export function googleMapsNavUrl(coords: [number, number]): string {
  return googleMapsPlaceUrl(coords);
}

/** @deprecated Use {@link wazePlaceUrl}. */
export function wazeNavUrl(coords: [number, number]): string {
  return wazePlaceUrl(coords);
}

/** @deprecated Older callsites import { navUrl }. Maps to the place URL. */
export function navUrl(coords: [number, number]): string {
  return googleMapsPlaceUrl(coords);
}

/* ------------------------------------------------------------------ */
/* Unrelated helpers — kept here for historical reasons; safe to move.  */
/* ------------------------------------------------------------------ */

export function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
