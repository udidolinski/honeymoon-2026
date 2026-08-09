import { useCallback } from "react";
import { RefreshCw } from "lucide-react";
import { usePullToRefresh } from "../lib/usePullToRefresh";

/** A plain reload can still be served the same stale response by GitHub
 *  Pages' CDN edge cache (it can hold a build for several minutes after a
 *  push). Appending a unique query string busts that cache key so a
 *  deliberate pull-to-refresh always fetches fresh, not just re-renders
 *  whatever was already cached. */
function hardReload() {
  const url = new URL(window.location.href);
  url.searchParams.set("_r", Date.now().toString(36));
  window.location.href = url.toString();
}

export default function PullToRefresh() {
  const onRefresh = useCallback(hardReload, []);
  const { pullPx, refreshing, progress } = usePullToRefresh(onRefresh);

  if (pullPx === 0 && !refreshing) return null;

  const offset = (refreshing ? 44 : pullPx) - 40;

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[9500] flex justify-center pointer-events-none"
      style={{
        transform: `translateY(${offset}px)`,
        transition: refreshing || pullPx === 0 ? "transform 0.2s ease" : "none",
      }}
    >
      <div className="mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-cream-50 shadow-lg shadow-ink-900/30">
        <RefreshCw
          size={16}
          className={refreshing ? "animate-spin" : ""}
          style={
            refreshing
              ? undefined
              : { transform: `rotate(${progress * 360}deg)`, opacity: 0.4 + progress * 0.6 }
          }
        />
      </div>
    </div>
  );
}
