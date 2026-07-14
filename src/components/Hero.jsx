import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=40", // Luxury Living Room
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=40", // Modern Kitchen
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=40"  // Elegant Bedroom
];


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100svh] sm:h-screen w-full overflow-hidden bg-[#070B14] flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt="Luxury Interior Space"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority={currentIndex === 0 ? "high" : "low"}
            loading="eager"
            crossOrigin="anonymous"
          />
        </AnimatePresence>
        {/* Ambient Glow */}
        <div className="ambient-glow ambient-glow-primary w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Luxury Vignette and overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/30 to-[#070B14]/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-24 sm:pt-28 md:pt-24 lg:pt-16 text-left pb-28 sm:pb-0">
        <div className="max-w-3xl">
          {/* Subtle Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-card text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transforming Houses into Dream Homes</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] sm:leading-[1.1] mb-4 sm:mb-6 font-plus-jakarta"
          >
            Designing Beautiful <br />
            <span className="text-premium-gradient">Spaces That Inspire</span>
          </motion.h1>

          {/* Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl font-outfit"
          >
            AURA Design Studio crafts bespoke, ultra-luxury interior spaces that merge
            architectural brilliance with absolute comfort. Experience interior design, redefined.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-20 md:mb-0"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass-button-primary font-bold text-[13px] sm:text-sm tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo("#portfolio")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass-button-secondary font-bold text-[13px] sm:text-sm tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>View Portfolio</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Experience Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col p-6 glass-card max-w-[280px]"
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-premium-gradient flex items-center justify-center font-extrabold text-white text-xl shadow-lg border border-white/10">
            5+
          </div>
          <div>
            <h4 className="text-white font-bold font-plus-jakarta text-sm">Years Excellence</h4>
            <p className="text-gray-400 text-xs font-light">Crafting spaces</p>
          </div>
        </div>
        <p className="text-gray-300 text-xs font-light leading-relaxed border-t border-white/10 pt-3">
          Designed by luxury visionaries like <span className="font-semibold text-accent">Vansh</span> and built on advanced tech by <span className="font-semibold text-accent">Ridham</span>.
        </p>
      </motion.div>

      {/* Slide Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 sm:left-6 sm:translate-x-0 z-20 flex flex-wrap items-center justify-center sm:justify-start gap-3 px-4 sm:px-0 w-[calc(100%-2rem)] sm:w-auto">
        <button
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 ml-0 sm:ml-4 mt-2 sm:mt-0">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="p-3 -m-3 cursor-pointer focus:outline-none flex items-center justify-center"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-accent" : "w-2 bg-white/40"
                }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Scroll Down Mouse Animation */}
      <div
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </div>
    </section >
  );
}
