import React, { useEffect, useRef } from "react";

export default function AutoScroll() {
  const inactivityTimerRef = useRef(null);
  const bottomPauseTimerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isAutoScrollingRef = useRef(false);
  const isUserInteractingRef = useRef(false);
  const currentScrollPosRef = useRef(0);
  const lastProgrammaticScrollRef = useRef(0);
  const lastTimeRef = useRef(null);

  // Speed: ~60 pixels per second (smooth, framerate-independent)
  const SCROLL_SPEED_PER_SEC = 60;
  const INACTIVITY_DELAY = 1500; // 1.5s after user interaction stops

  const getScrollTop = () => {
    return (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  };

  const getMaxScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    // Use clientHeight for stable mobile viewport calculation without address bar jitter
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    return Math.max(0, scrollHeight - clientHeight);
  };

  const stopAutoScroll = () => {
    isAutoScrollingRef.current = false;
    lastTimeRef.current = null;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const clearAllTimers = () => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
    if (bottomPauseTimerRef.current) {
      clearTimeout(bottomPauseTimerRef.current);
      bottomPauseTimerRef.current = null;
    }
  };

  const startContinuousScroll = () => {
    if (isUserInteractingRef.current) return;

    // Cancel any running animation loop first to prevent multiple concurrent loops
    stopAutoScroll();

    // Synchronize subpixel accumulator with current scroll position
    const currentY = getScrollTop();
    currentScrollPosRef.current = currentY;
    lastProgrammaticScrollRef.current = currentY;
    isAutoScrollingRef.current = true;
    lastTimeRef.current = performance.now();

    const step = (currentTime) => {
      if (!isAutoScrollingRef.current || isUserInteractingRef.current) {
        stopAutoScroll();
        return;
      }

      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      // Delta time in seconds with protective clamp (max 50ms to prevent jumps after frame drop/tab switch)
      const rawDelta = (currentTime - lastTimeRef.current) / 1000;
      const deltaTime = Math.min(Math.max(rawDelta, 0), 0.05);
      lastTimeRef.current = currentTime;

      const maxScroll = getMaxScroll();

      // Check if reaching bottom of page
      if (currentScrollPosRef.current >= maxScroll - 2) {
        stopAutoScroll();
        currentScrollPosRef.current = maxScroll;
        window.scrollTo(0, maxScroll);
        lastProgrammaticScrollRef.current = maxScroll;

        // Gracefully pause at bottom before looping back to top
        bottomPauseTimerRef.current = setTimeout(() => {
          if (!isUserInteractingRef.current) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            currentScrollPosRef.current = 0;
            lastProgrammaticScrollRef.current = 0;
            resetInactivityTimer();
          }
        }, 2000);
        return;
      }

      // Subpixel float accumulation prevents integer truncation stutter on mobile
      const increment = SCROLL_SPEED_PER_SEC * deltaTime;
      currentScrollPosRef.current = Math.min(
        currentScrollPosRef.current + increment,
        maxScroll
      );

      // Single standard viewport scroll call without layout thrashing
      window.scrollTo(0, currentScrollPosRef.current);
      lastProgrammaticScrollRef.current = currentScrollPosRef.current;

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const resetInactivityTimer = () => {
    stopAutoScroll();
    clearAllTimers();

    // Do not set inactivity timer while user finger is actively on screen
    if (isUserInteractingRef.current) return;

    inactivityTimerRef.current = setTimeout(() => {
      startContinuousScroll();
    }, INACTIVITY_DELAY);
  };

  useEffect(() => {
    // Touch handlers for mobile
    const handleTouchStart = () => {
      isUserInteractingRef.current = true;
      stopAutoScroll();
      clearAllTimers();
      currentScrollPosRef.current = getScrollTop();
    };

    const handleTouchMove = () => {
      isUserInteractingRef.current = true;
      stopAutoScroll();
      clearAllTimers();
      currentScrollPosRef.current = getScrollTop();
    };

    const handleTouchEnd = () => {
      isUserInteractingRef.current = false;
      currentScrollPosRef.current = getScrollTop();
      // On mobile touchend, inertial momentum scrolling may continue.
      // Resetting inactivity timer ensures auto-scroll only restarts once momentum stops.
      resetInactivityTimer();
    };

    const handleTouchCancel = () => {
      isUserInteractingRef.current = false;
      currentScrollPosRef.current = getScrollTop();
      resetInactivityTimer();
    };

    // Desktop mouse / wheel / keyboard interactions
    const handleWheel = () => {
      isUserInteractingRef.current = false;
      stopAutoScroll();
      currentScrollPosRef.current = getScrollTop();
      resetInactivityTimer();
    };

    const handleKeyDown = (e) => {
      // Keys that move scroll position
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
          "Space",
        ].includes(e.key)
      ) {
        stopAutoScroll();
        currentScrollPosRef.current = getScrollTop();
        resetInactivityTimer();
      }
    };

    const handleMouseDown = () => {
      stopAutoScroll();
      currentScrollPosRef.current = getScrollTop();
      resetInactivityTimer();
    };

    // Scroll listener: catches user momentum scrolling, trackpad swipes, and scrollbar drag
    const handleScroll = () => {
      const actualY = getScrollTop();

      if (isAutoScrollingRef.current) {
        // If the scroll offset deviated from what our rAF loop set, the user or browser momentum intervened
        const scrollDifference = Math.abs(
          actualY - lastProgrammaticScrollRef.current
        );
        if (scrollDifference > 3) {
          stopAutoScroll();
          currentScrollPosRef.current = actualY;
          resetInactivityTimer();
        }
        return;
      }

      // User manual scrolling or ongoing mobile momentum scroll
      currentScrollPosRef.current = actualY;
      resetInactivityTimer();
    };

    // Resize / orientation change handling
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      const currentY = getScrollTop();
      currentScrollPosRef.current = Math.min(currentY, maxScroll);
    };

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoScroll();
        clearAllTimers();
      } else {
        currentScrollPosRef.current = getScrollTop();
        resetInactivityTimer();
      }
    };

    // Register event listeners
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchCancel, { passive: true });

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial trigger on mount
    resetInactivityTimer();

    return () => {
      stopAutoScroll();
      clearAllTimers();

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchCancel);

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
