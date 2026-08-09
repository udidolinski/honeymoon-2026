import { useEffect, useState } from "react";
import { RefreshCw, X } from "lucide-react";
import { onUpdateAvailable, startAutoUpdateWatcher } from "../lib/autoUpdate";

/** Small toast that appears once a new deploy is actually fetchable
 *  (GitHub Pages' CDN can hold the previous build for several minutes
 *  after a push) and offers a one-tap refresh instead of stale content
 *  going unnoticed. */
export default function UpdateBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    startAutoUpdateWatcher();
    return onUpdateAvailable(() => setVisible(true));
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[9000]
                 mx-auto flex w-fit max-w-[calc(100%-2rem)] items-center gap-3 rounded-full
                 border border-cream-300/70 bg-ink-900 px-4 py-2.5 text-cream-50
                 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)]"
    >
      <span className="text-sm">A new version of this trip is ready</span>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-500 px-3 py-1.5
                   text-xs font-medium text-cream-50 hover:bg-terracotta-600 transition-colors"
      >
        <RefreshCw size={13} />
        Refresh
      </button>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        className="text-cream-50/70 hover:text-cream-50 transition-colors"
      >
        <X size={15} />
      </button>
    </div>
  );
}
