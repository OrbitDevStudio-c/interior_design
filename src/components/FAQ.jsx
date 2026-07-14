import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "What is your primary design style?",
    answer: "We specialize in Bespoke Modern Luxury, combining glass, marble, oak, and gold profiles. However, our lead designer Vansh adapts concepts fully to your personal aesthetic, whether that is Scandinavian minimalism, mid-century modern, or classic European grandiosity."
  },
  {
    question: "How long does a typical interior project take?",
    answer: "Turnkey residential apartments generally require 60 to 90 days. Large custom villas and corporate offices typically range from 120 to 180 days. A comprehensive schedule is generated and agreed upon during our initial Planning phase."
  },
  {
    question: "Who will manage the construction and installation onsite?",
    answer: "A dedicated project manager will supervise your site daily, under the direct design oversight of Vansh. You will also have access to an online dashboard to track progress, layouts, and material deliveries."
  },
  {
    question: "Do you provide detailed 3D visual walkthroughs?",
    answer: "Yes, 3D design is Step 03 of our process. We provide high-fidelity photorealistic 3D renderings and panoramic virtual walkthroughs, allowing you to approve every detail before we begin purchasing materials."
  },
  {
    question: "Can I choose my own materials and custom fixtures?",
    answer: "Absolutely. We arrange material selection visits to our curated partner galleries in Mumbai, Delhi, and Bangalore. You will touch and select marble slabs, veneers, hardware finishes, fabrics, and ambient light fixtures."
  },
  {
    question: "Is there a fee for the initial design consultation?",
    answer: "No, the initial consultation is completely complimentary. We discuss your design ideas, spatial layout, budget boundaries, and timeline expectations to see how we can bring your dream space to life."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#070B14] relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="ambient-glow ambient-glow-primary w-[600px] h-[600px] right-0 bottom-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-premium">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 font-plus-jakarta">
            Inquiries Answered
          </h2>
          <p className="text-[#A9B5CF] font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            Have questions about budgets, timelines, or our process? We have compiled the most common queries below.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card overflow-hidden hover:border-white/10 transition-all duration-300"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-accent' : 'text-[#7F8CA8]'}`} />
                    <span className="text-sm md:text-base font-bold text-white font-plus-jakarta">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Indicator Icon */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                    isOpen ? 'border-accent bg-accent text-white' : 'border-white/10 text-[#7F8CA8]'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 md:px-8 md:pb-6 pr-12 border-t border-white/5">
                        <p className="text-[#A9B5CF] font-light text-xs md:text-sm leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
