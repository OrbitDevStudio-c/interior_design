import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Vikram & Shalini Malhotra",
    location: "Alibaug",
    role: "Villa Owners",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=40",
    rating: 5,
    review: "Working with designer Vansh was a masterclass in collaboration. He took our rough ideas for our beach villa and translated them into an absolute sanctuary. The execution was top-notch, and the timeline was met exactly."
  },
  {
    name: "Rohan Sen",
    location: "Bangalore",
    role: "CEO, Synergy Tech",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=40",
    rating: 5,
    review: "Our corporate headquarters needed to feel premium yet highly operational. AURA Design Studio nailed the biophilic layouts, acoustic systems, and private pods. The execution was on-time and within budget. Highly recommended!"
  },
  {
    name: "Dr. Ananya Goel",
    location: "Mumbai",
    role: "Penthouse Owner",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=40",
    rating: 5,
    review: "The Obsidian Penthouse exceeded every single expectation. The dark marble finish, profile lighting, and custom furniture look like something straight out of a global design digest. Absolutely stunning work by Vansh!"
  },
  {
    name: "Kabir & Meera Dev",
    location: "Delhi NCR",
    role: "Duplex Owners",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=40",
    rating: 5,
    review: "From our first consultation to the key handover, the team's professionalism was immaculate. The modular kitchen is an absolute chef's dream, and the living area feels incredibly spacious. Truly a premium experience."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full border-2 border-accent/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-gold">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 font-plus-jakarta">
            Resonating Approval
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative min-h-[380px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="glassmorphism-card p-8 md:p-12 rounded-3xl relative border border-gray-100 shadow-xl"
            >
              {/* Quote Icon overlay */}
              <div className="absolute right-8 top-8 text-accent/15 select-none pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Client Photo */}
                <div className="relative shrink-0">
                  <img
                    src={TESTIMONIALS[activeIndex].photo}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-accent shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gold-gradient text-primary p-1.5 rounded-lg shadow-md">
                    <Quote className="w-3 h-3 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left flex-1 space-y-4">
                  {/* Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 font-light text-base md:text-lg italic leading-relaxed">
                    "{TESTIMONIALS[activeIndex].review}"
                  </p>

                  {/* Meta details */}
                  <div className="pt-2">
                    <h4 className="text-primary font-bold font-plus-jakarta text-sm">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    <p className="text-xs text-gray-500 font-light">
                      {TESTIMONIALS[activeIndex].role} &bull; {TESTIMONIALS[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between mt-8 px-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm hover:bg-gold-gradient hover:text-primary transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="p-3 -m-3 cursor-pointer focus:outline-none flex items-center justify-center"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <span className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-6 bg-accent" : "w-2 bg-gray-300"
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm hover:bg-gold-gradient hover:text-primary transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
