import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const CHAPTERS = [
  { num: "01", id: "about",     label: "ABOUT" },
  { num: "02", id: "portfolio", label: "INTERIOR" },
  { num: "03", id: "services",  label: "SERVICES" },
  { num: "04", id: "process",   label: "ARCHITECTURE" },
  { num: "05", id: "contact",   label: "CONTACT" },
];

export default function ChapterProgress() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Determine which chapter is active
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveIdx(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b0b0b]/90 backdrop-blur-xl hairline-t py-3 px-6 sm:px-10 hidden md:block"
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            
            {/* Left: Active Chapter Title */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.25em] text-[#c49678] font-mono">
                {CHAPTERS[activeIdx].num} / 05
              </span>
              <span className="w-6 h-[1px] bg-white/20" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-white font-semibold">
                {CHAPTERS[activeIdx].label}
              </span>
            </div>

            {/* Center: Segmented Navigation Pills */}
            <div className="flex items-center gap-1 lg:gap-2">
              {CHAPTERS.map((ch, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollTo(ch.id)}
                    className="flex flex-col items-center gap-1.5 px-3 py-1 cursor-pointer bg-transparent border-none group"
                  >
                    <span
                      className={`text-[9px] font-mono tracking-widest transition-colors ${
                        isActive
                          ? "text-[#c49678] font-bold"
                          : "text-[#666] group-hover:text-white"
                      }`}
                    >
                      {ch.label}
                    </span>
                    <span
                      className={`h-[2px] transition-all duration-300 ${
                        isActive
                          ? "w-8 bg-[#c49678]"
                          : "w-4 bg-white/15 group-hover:bg-white/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#777] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent border-none p-0"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
