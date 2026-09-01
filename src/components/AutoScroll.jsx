import React, { useEffect, useRef } from "react";

export default function AutoScroll() {
  const inactivityTimerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isAutoScrollingRef = useRef(false);

  // Brisk smooth speed (~240px per second)
  const SCROLL_SPEED = 3.8;
  const INACTIVITY_DELAY = 1000; // 1 second inactivity trigger

  const stopAutoScroll = () => {
    isAutoScrollingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const startContinuousScroll = () => {
    isAutoScrollingRef.current = true;

    const step = () => {
      if (!isAutoScrollingRef.current) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // If reached the bottom, loop back to top after a brief pause
      if (window.scrollY >= maxScroll - 5) {
        stopAutoScroll();
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          resetInactivityTimer();
        }, 1000);
        return;
      }

      window.scrollBy(0, SCROLL_SPEED);
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const resetInactivityTimer = () => {
    stopAutoScroll();

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    inactivityTimerRef.current = setTimeout(() => {
      startContinuousScroll();
    }, INACTIVITY_DELAY);
  };

  useEffect(() => {
    // User interaction events that reset the 1-second inactivity timer
    const handleUserInteraction = (e) => {
      if (isAutoScrollingRef.current && e.type === "scroll") return;
      resetInactivityTimer();
    };

    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction, { passive: true });
    window.addEventListener("mousedown", handleUserInteraction, { passive: true });

    // Initial 1-second timer start
    resetInactivityTimer();

    return () => {
      stopAutoScroll();
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("mousedown", handleUserInteraction);
    };
  }, []);

  // Invisible background functionality without any visible floating badge
  return null;
}
