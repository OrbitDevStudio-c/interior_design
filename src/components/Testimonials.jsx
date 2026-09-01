import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "VIKRAM & SHALINI MALHOTRA",
    location: "Alibaug Villa Residence",
    role: "Private Villa Owners",
    rating: 5,
    review:
      "Working with lead designer Vansh was a masterclass in collaboration. He transformed our coastal property into an architectural sanctuary. The execution was flawless, and the handover was delivered precisely on schedule.",
  },
  {
    name: "ROHAN SEN",
    location: "Bangalore HQ",
    role: "Chief Executive, Synergy Tech",
    rating: 5,
    review:
      "Our corporate headquarters demanded a delicate balance of brand prestige and deep operational acoustic focus. AURA Design Studio delivered biophilic layouts, custom boardroom tables, and private executive suites with zero compromises.",
  },
  {
    name: "DR. ANANYA GOEL",
    location: "Mumbai Penthouse",
    role: "Obsidian Penthouse Owner",
    rating: 5,
    review:
      "The Obsidian Penthouse exceeded every benchmark. The Italian charcoal marble, concealed profile lighting, and custom furniture look straight out of an architectural digest. Truly world-class execution by Vansh and the team.",
  },
  {
    name: "KABIR & MEERA DEV",
    location: "Delhi NCR Duplex",
    role: "Private Duplex Owners",
    rating: 5,
    review:
      "From the initial consultation to the white-glove handover, the professionalism was immaculate. The modular kitchen is an absolute chef's dream, and the double-height formal living salon is breathtaking.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="chapter-tag block mb-3">
            VOICES OF APPROVAL
          </span>
          <h2 className="display-title text-2xl sm:text-4xl text-white">
            RESONATING{" "}
            <span className="text-copper-gradient font-light italic">
              TRUST
            </span>
          </h2>
        </div>

        {/* Testimonial Stage */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto space-y-8"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1.5 text-[#c49678]">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-xs">&bull;</span>
                ))}
                <span className="text-[10px] tracking-widest uppercase ml-2 text-[#888]">
                  VERIFIED CLIENT COMMENDATION
                </span>
              </div>

              {/* Quote Statement */}
              <p className="text-base sm:text-xl md:text-2xl font-light text-[#e0e0e0] leading-relaxed italic">
                "{t.review}"
              </p>

              {/* Attribution */}
              <div className="space-y-1 hairline-t pt-6 max-w-xs mx-auto">
                <h4 className="font-semibold text-xs tracking-[0.2em] uppercase text-white">
                  {t.name}
                </h4>
                <p className="text-[10px] tracking-widest uppercase text-[#c49678]">
                  {t.role} &bull; {t.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicator & Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Jump to review ${i + 1}`}
                className="p-2 cursor-pointer bg-transparent border-none"
              >
                <span
                  className={`block h-[1px] transition-all duration-300 ${
                    i === active ? "w-6 bg-[#c49678]" : "w-2 bg-white/20"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setActive((prev) => (prev + 1) % TESTIMONIALS.length)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
