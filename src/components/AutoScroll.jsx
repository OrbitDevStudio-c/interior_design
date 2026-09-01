import React, { useEffect, useRef } from "react";

export default function AutoScroll() {
  const inactivityTimerRef = useRef(null);
  const scrollEndTimerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isAutoScrollingRef = useRef(false);
  const isUserTouchingRef = useRef(false);
  const lastTimeRef = useRef(null);

  // Speed: ~220 pixels per second (time-based, works identically on 60Hz and 120Hz mobile screens)
  const SCROLL_SPEED_PER_SEC = 220;
  const INACTIVITY_DELAY = 1000; // 1 second

  const getScrollTop = () => {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  };

  const setScrollTop = (y) => {
    // Direct scrollTop assignment bypasses CSS scroll-behavior: smooth conflict on mobile browsers
    if (document.documentElement) {
      document.documentElement.scrollTop = y;
    }
    if (document.body && document.body.scrollTop !== undefined) {
      document.body.scrollTop = y;
    }
    // Also call window.scroll with behavior: 'instant' for mobile Safari compatibility
    try {
      window.scroll({ top: y, left: 0, behavior: "instant" });
    } catch (e) {
      window.scrollTo(0, y);
    }
  };

  const stopAutoScroll = () => {
    isAutoScrollingRef.current = false;
    lastTimeRef.current = null;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const startContinuousScroll = () => {
    if (isUserTouchingRef.current) return;
    isAutoScrollingRef.current = true;
    lastTimeRef.current = performance.now();

    const step = (currentTime) => {
      if (!isAutoScrollingRef.current || isUserTouchingRef.current) {
        stopAutoScroll();
        return;
      }

      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // In seconds
      lastTimeRef.current = currentTime;

      const currentY = getScrollTop();
      const maxScroll =
        Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        ) - window.innerHeight;

      // If at bottom, reset to top after a pause
      if (currentY >= maxScroll - 8) {
        stopAutoScroll();
        setTimeout(() => {
          setScrollTop(0);
          resetInactivityTimer();
        }, 1200);
        return;
      }

      // Calculate next position with delta time for 100% smooth framerate independence
      const increment = SCROLL_SPEED_PER_SEC * Math.min(deltaTime, 0.1);
      setScrollTop(currentY + increment);

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const resetInactivityTimer = () => {
    stopAutoScroll();

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Do not start timer if user finger is actively on screen
    if (isUserTouchingRef.current) return;

    inactivityTimerRef.current = setTimeout(() => {
      startContinuousScroll();
    }, INACTIVITY_DELAY);
  };

  useEffect(() => {
    // Touch handlers for mobile
    const handleTouchStart = () => {
      isUserTouchingRef.current = true;
      stopAutoScroll();
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };

    const handleTouchEnd = () => {
      isUserTouchingRef.current = false;
      resetInactivityTimer();
    };

    const handleTouchCancel = () => {
      isUserTouchingRef.current = false;
      resetInactivityTimer();
    };

    // Wheel and key handlers for desktop
    const handleWheel = () => {
      resetInactivityTimer();
    };

    const handleKeyDown = () => {
      resetInactivityTimer();
    };

    const handleMouseDown = () => {
      resetInactivityTimer();
    };

    // Generic scroll listener to detect momentum scroll end
    const handleScroll = () => {
      if (isAutoScrollingRef.current) return; // Ignore our own auto scroll events

      // User is manually scrolling
      stopAutoScroll();
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);

      // Detect when momentum scrolling ends
      scrollEndTimerRef.current = setTimeout(() => {
        if (!isUserTouchingRef.current) {
          resetInactivityTimer();
        }
      }, 150);
    };

    // Attach listeners with passive: true for high mobile performance
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchCancel, { passive: true });
    window.addEventListener("touchmove", handleTouchStart, { passive: true });

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial trigger after 1 second on page load
    resetInactivityTimer();

    return () => {
      stopAutoScroll();
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchCancel);
      window.removeEventListener("touchmove", handleTouchStart);

      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
