import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageSquare } from "lucide-react";

const CHAPTERS = [
  { num: "01", id: "about",     label: "ABOUT" },
  { num: "02", id: "portfolio", label: "WORKS" },
  { num: "03", id: "services",  label: "SERVICES" },
  { num: "04", id: "process",   label: "ARCH" },
  { num: "05", id: "contact",   label: "CONTACT" },
];

export default function MobileChapterDock({ onOpenContact }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }

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
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 65;
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
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between pointer-events-auto"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          {/* Floating Glass Chapter Pill Bar */}
          <div
            className="flex items-center gap-1 px-3 py-2 rounded-full border border-white/15 backdrop-blur-xl shadow-2xl"
            style={{
              background: "rgba(18, 18, 18, 0.92)",
            }}
          >
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => scrollTo(ch.id)}
                  aria-label={`Jump to Chapter ${ch.num}: ${ch.label}`}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#c49678] text-[#0b0b0b] font-bold shadow-md scale-105"
                      : "text-[#888] hover:text-white"
                  }`}
                >
                  {ch.num}
                </button>
              );
            })}
          </div>

          {/* Quick Action Floating Pill (Contact & Top) */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenContact}
              aria-label="Open contact dialogue"
              className="w-10 h-10 rounded-full bg-[#c49678] text-[#0b0b0b] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <MessageSquare size={16} />
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full border border-white/20 bg-[#141414]/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
