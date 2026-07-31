/**
 * Tiny pub/sub for "open the Kai panel from anywhere on the page".
 *
 * Other components (the per-day quiz score screen, future homepage CTAs)
 * dispatch `requestOpenKai()` to surface the chat without having
 * to thread refs or callbacks through the component tree. Kai
 * itself listens once on mount via `subscribeOpenKai`.
 *
 * Implemented on top of `window.dispatchEvent` so it works across React
 * portals, lazy-mounted components, and iframes inside the same origin.
 */

const EVENT_NAME = "kai:open";

export function requestOpenKai(): void {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch {
    /* extremely old browsers — ignore, the user can still tap the FAB */
  }
}

export function subscribeOpenKai(handler: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = () => handler();
  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}
