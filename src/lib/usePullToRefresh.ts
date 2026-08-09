import { useCallback, useEffect, useRef, useState } from "react";

const PULL_THRESHOLD = 70; // px of pull needed to trigger a refresh
const MAX_PULL = 110; // visual cap so the indicator doesn't drift too far
const DRAG_RATIO = 0.5; // rubber-band feel — finger moves further than the indicator

/** Tracks a pull-down-at-the-top-of-the-page gesture and calls `onRefresh`
 *  once the user drags past the threshold. Only activates when the page is
 *  already scrolled to the very top, so it never fights normal scrolling. */
export function usePullToRefresh(onRefresh: () => void) {
  const [pullPx, setPullPx] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef<number | null>(null);
  const dragging = useRef(false);
  const pullRef = useRef(0);

  const setPull = useCallback((v: number) => {
    pullRef.current = v;
    setPullPx(v);
  }, []);

  useEffect(() => {
    function onTouchStart(e: TouchEvent) {
      if (window.scrollY > 0 || refreshing) return;
      startY.current = e.touches[0].clientY;
      dragging.current = true;
    }

    function onTouchMove(e: TouchEvent) {
      if (!dragging.current || startY.current === null) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta <= 0 || window.scrollY > 0) {
        dragging.current = false;
        setPull(0);
        return;
      }
      // This is unambiguously our gesture now — take over from native scroll.
      e.preventDefault();
      setPull(Math.min(delta * DRAG_RATIO, MAX_PULL));
    }

    function onTouchEnd() {
      if (!dragging.current) return;
      dragging.current = false;
      startY.current = null;
      if (pullRef.current >= PULL_THRESHOLD) {
        setRefreshing(true);
        onRefresh();
      } else {
        setPull(0);
      }
    }

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [onRefresh, refreshing, setPull]);

  return { pullPx, refreshing, progress: Math.min(pullPx / PULL_THRESHOLD, 1) };
}
