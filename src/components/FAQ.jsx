import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    num: "01",
    question: "WHAT IS AURA'S CORE ARCHITECTURAL SIGNATURE?",
    answer:
      "We specialize in Monolithic Modern Luxury — fusing Italian marble, dark smoked oak, architectural brass profiles, and concealed ambient lighting. However, lead designer Vansh tailors every design language to your spatial orientation and personal lifestyle.",
  },
  {
    num: "02",
    question: "WHAT IS THE EXPECTED DURATION FOR A TURNKEY RESIDENCE?",
    answer:
      "Turnkey luxury residential penthouses typically take 75 to 90 days. Expansive custom villas and corporate headquarters generally span 120 to 180 days. A binding milestone schedule is signed before execution begins.",
  },
  {
    num: "03",
    question: "WHO SUPERVISES DAILY SITE OPERATIONS?",
    answer:
      "A dedicated on-site project engineer oversees daily installations, with direct design audits by lead designer Vansh. Clients also receive weekly photo dashboards tracking milestone progress.",
  },
  {
    num: "04",
    question: "DO YOU PROVIDE HIGH-FIDELITY 3D WALKTHROUGHS BEFORE PROCUREMENT?",
    answer:
      "Yes. Photorealistic 3D virtual walkthroughs and material sampling boards are finalized in Stage 03, giving you total visual clarity before any materials are procured or site demolition begins.",
  },
  {
    num: "05",
    question: "CAN CLIENTS SELECT BESPOKE MARBLE SLABS AND HARDWARE FIXTURES?",
    answer:
      "Yes, we arrange private curated visits to our partner stone and hardware galleries in Mumbai, Delhi, and Bangalore, allowing you to hand-select marble bookmatches, veneers, and custom lighting.",
  },
  {
    num: "06",
    question: "IS THERE AN INITIAL FEE FOR THE ARCHITECTURAL CONSULTATION?",
    answer:
      "The initial project discourse and feasibility review is completely complimentary. We discuss your architectural aspirations, floor plans, budget parameters, and timeline requirements.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="chapter-tag block mb-3">
            INQUIRIES ANSWERED
          </span>
          <h2 className="display-title text-2xl sm:text-4xl md:text-5xl text-white">
            COMMON{" "}
            <span className="text-copper-gradient font-light italic">
              CONSIDERATIONS
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#888] font-light mt-3 max-w-md mx-auto">
            Essential clarity on project logistics, timelines, and architectural execution.
          </p>
        </div>

        {/* Accordions */}
        <div className="hairline-t">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.num} className="hairline-b">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left cursor-pointer bg-transparent border-none focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#c49678]">
                      {faq.num}
                    </span>
                    <span
                      className={`text-xs sm:text-sm tracking-wider uppercase font-medium transition-colors ${
                        isOpen ? "text-[#c49678]" : "text-[#f1f1f1] group-hover:text-[#bbb]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "border-[#c49678] text-[#c49678]"
                        : "border-white/15 text-[#666] group-hover:border-white/40"
                    }`}
                  >
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 sm:pl-12 pr-6 pb-8 text-xs sm:text-sm text-[#888] font-light leading-relaxed">
                        {faq.answer}
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
