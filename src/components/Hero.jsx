import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=75",
    location: "THE OBSIDIAN PENTHOUSE, MUMBAI",
    caption: "CHARCOAL MARBLE, VELVET & TIMELESS GEOMETRY",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=75",
    location: "VILLA LUMINA, ALIBAUG",
    caption: "DOUBLE-HEIGHT GLASS FACADES & NATURAL STONE",
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=75",
    location: "THE CULINARY HEARTH, DELHI NCR",
    caption: "GERMAN PRECISION & MONOLITHIC MARBLE ISLANDS",
  },
];

export default function Hero({ onOpenContact }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden bg-[#0b0b0b] flex flex-col justify-between">
      
      {/* Background Image Carousel with Ken Burns Slow Pan & Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={HERO_SLIDES[current].image}
            alt={HERO_SLIDES[current].location}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority={current === 0 ? "high" : "low"}
            loading="eager"
          />
        </AnimatePresence>

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-[#0b0b0b]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/80 via-transparent to-[#0b0b0b]/80" />
      </div>

      {/* Top Spacer for header */}
      <div className="relative z-10 pt-28 sm:pt-32" />

      {/* Center Main Stage Display Headline */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-10 my-auto">
        
        {/* Eyebrow Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <span className="chapter-tag">
            01 / PROLOGUE
          </span>
          <span className="w-12 h-[1px] bg-[#c49678]/40" />
          <span className="text-[10px] tracking-[0.25em] text-[#888] uppercase hidden sm:inline-block">
            MUMBAI &bull; BANGALORE &bull; DELHI
          </span>
        </motion.div>

        {/* Nabil Issa signature high-impact stacked display headline */}
        <div className="mb-6 sm:mb-8 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="display-hero text-4xl sm:text-7xl md:text-8xl lg:text-[6.8rem] text-white tracking-tight"
          >
            CAN SPACES
            <br />
            <span className="text-copper-gradient font-extralight italic pr-2 sm:pr-4">
              SHAPE
            </span>
            HOW WE LIVE?
          </motion.h1>
        </div>

        {/* Subtitle Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
        >
          <p className="md:col-span-7 text-xs sm:text-sm md:text-base text-[#999] font-light leading-relaxed max-w-xl">
            AURA Design Studio crafts bespoke luxury environments where architectural proportion, tactile materiality, and atmospheric light converge into timeless statements.
          </p>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticButton
              onClick={() => scrollTo("#portfolio")}
              className="pill-btn-copper text-xs"
            >
              EXPLORE WORKS
            </MagneticButton>
            <MagneticButton
              onClick={onOpenContact}
              className="pill-btn text-xs"
            >
              GET IN TOUCH
            </MagneticButton>
          </div>
        </motion.div>

      </div>

      {/* Bottom Bar: Slide Controls & Active Location Meta */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-10 pb-8 sm:pb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hairline-t pt-6">
        
        {/* Slide Location Info */}
        <div className="flex items-center gap-4">
          <div className="text-[11px] font-mono tracking-widest text-[#c49678]">
            0{current + 1} / 0{HERO_SLIDES.length}
          </div>
          <div className="w-8 h-[1px] bg-white/15" />
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-white font-medium">
              {HERO_SLIDES[current].location}
            </p>
            <p className="text-[9px] tracking-widest uppercase text-[#777]">
              {HERO_SLIDES[current].caption}
            </p>
          </div>
        </div>

        {/* Controls & Scroll Cue */}
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
          
          {/* Scroll cue */}
          <button
            onClick={() => scrollTo("#about")}
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#777] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent border-none p-0"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={12} className="animate-bounce" />
          </button>

          {/* Slider Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <MagneticButton
              onClick={() => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent"
            >
              <ChevronLeft size={16} />
            </MagneticButton>
            <MagneticButton
              onClick={() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent"
            >
              <ChevronRight size={16} />
            </MagneticButton>
          </div>

        </div>

      </div>

    </section>
  );
}
