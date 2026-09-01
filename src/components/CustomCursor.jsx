import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing motion
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (mouse/trackpad), not touch
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Event delegation to detect hoverable and card targets
    const handleElementHover = (e) => {
      const target = e.target.closest("button, a, input, select, textarea, [data-cursor]");
      const card = e.target.closest("#portfolio .group, [data-cursor-text]");

      if (card) {
        setIsHovered(true);
        const customText = card.getAttribute("data-cursor-text") || "VIEW";
        setCursorText(customText);
      } else if (target) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleElementHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden hidden md:block">
      {/* Outer Spring Follower Ring / Badge */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorText ? 68 : isHovered ? 48 : 28,
          height: cursorText ? 68 : isHovered ? 48 : 28,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: cursorText
            ? "rgba(196, 150, 120, 0.95)"
            : isHovered
            ? "rgba(196, 150, 120, 0.15)"
            : "transparent",
          borderColor: cursorText
            ? "transparent"
            : isHovered
            ? "rgba(196, 150, 120, 0.8)"
            : "rgba(241, 241, 241, 0.35)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="rounded-full border flex items-center justify-center backdrop-blur-[2px]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest uppercase font-bold text-[#0b0b0b] select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      {!cursorText && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isHovered ? 0 : isClicking ? 1.4 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-1.5 h-1.5 rounded-full bg-[#c49678]"
        />
      )}
    </div>
  );
}
