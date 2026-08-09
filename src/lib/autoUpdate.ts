/**
 * Detects when a new deploy has actually become fetchable (GitHub Pages'
 * CDN can hold the previous version for several minutes after a push) and
 * notifies listeners so the UI can offer a refresh instead of the user
 * silently seeing stale content indefinitely.
 */

const CHECK_INTERVAL_MS = 2 * 60 * 1000;

type Listener = () => void;
const listeners = new Set<Listener>();

export function onUpdateAvailable(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

async function checkForUpdate(): Promise<void> {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}version.txt?t=${Date.now()}`, {
      cache: "no-store",
    });
    if (!res.ok) return;
    const latest = (await res.text()).trim();
    if (latest && latest !== __BUILD_ID__) {
      listeners.forEach((fn) => fn());
    }
  } catch {
    // offline or transient network error — try again on the next tick
  }
}

export function startAutoUpdateWatcher(): void {
  setInterval(checkForUpdate, CHECK_INTERVAL_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForUpdate();
  });
  window.addEventListener("online", checkForUpdate);
}
