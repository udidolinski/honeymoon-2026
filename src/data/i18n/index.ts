/**
 * English-only build: this app no longer ships a Hebrew (or any second
 * language) overlay. These `localizeX` functions are kept as identity
 * passthroughs — and the `useLocalizeX` hooks as thin wrappers — purely
 * so every call site across the app (components, the AI persona digest,
 * etc.) keeps compiling unchanged. If a future trip wants bilingual
 * support again, reintroduce the partial-overlay `*.he.ts` files and
 * merge logic here.
 */
import type {
  POI,
  Stay,
  Service,
  Day,
  Tip,
  ChecklistItem,
  EmergencyGroup,
  Dish,
  Winery
} from "../types";

/* ---------- Attractions / POIs (incl. stays + services) ---------- */

export function localizePoi(p: POI): POI {
  return p;
}

export function localizeStay(s: Stay): Stay {
  return s;
}

export function localizeService(s: Service): Service {
  return s;
}

/* ---------- Days / Itinerary ---------- */

export function localizeDay(d: Day): Day {
  return d;
}

/* ---------- Tips ---------- */

export function localizeTip(t: Tip): Tip {
  return t;
}

/* ---------- Checklist ---------- */

export function localizeChecklistItem(item: ChecklistItem): ChecklistItem {
  return item;
}

/* ---------- Emergency ---------- */

export function localizeEmergencyGroup(group: EmergencyGroup): EmergencyGroup {
  return group;
}

/* ---------- Food & Drink ---------- */

export function localizeDish(d: Dish): Dish {
  return d;
}

export function localizeWinery(w: Winery): Winery {
  return w;
}

/* ---------- Hooks (most components use these) ---------- */

export function useLocalizePoi() {
  return (p: POI) => p;
}
export function useLocalizeStay() {
  return (s: Stay) => s;
}
export function useLocalizeService() {
  return (s: Service) => s;
}
export function useLocalizeDay() {
  return (d: Day) => d;
}
export function useLocalizeTip() {
  return (t: Tip) => t;
}
export function useLocalizeChecklistItem() {
  return (it: ChecklistItem) => it;
}
export function useLocalizeEmergencyGroup() {
  return (group: EmergencyGroup, _index?: number) => group;
}
export function useLocalizeDish() {
  return (d: Dish) => d;
}
export function useLocalizeWinery() {
  return (w: Winery) => w;
}
