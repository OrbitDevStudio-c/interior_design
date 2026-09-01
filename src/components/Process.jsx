import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Layers, Hammer, Key, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    phase: "PHASE 01",
    title: "ARCHITECTURAL CONSULTATION",
    desc: "An in-depth discourse with lead designer Vansh. We deconstruct your spatial requirements, lifestyle cadence, aesthetic sensibilities, and budget boundaries.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=70",
  },
  {
    num: "02",
    phase: "PHASE 02",
    title: "SCHEMATIC PLANNING & LAYOUTS",
    desc: "Drafting precision 2D floor plans, spatial zoning, mechanical routing, material boards, and structured project milestones.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=70",
  },
  {
    num: "03",
    phase: "PHASE 03",
    title: "3D VISUALIZATION & SAMPLING",
    desc: "Generating photorealistic 3D virtual walkthroughs. We visit curated partner galleries in Mumbai and Delhi for hands-on marble, veneer, and brass selection.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=70",
  },
  {
    num: "04",
    phase: "PHASE 04",
    title: "ON-SITE EXECUTION & SUPERVISION",
    desc: "Rigorous execution led by dedicated site managers under Vansh's personal oversight, ensuring immaculate joinery and zero tolerance for deviation.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=70",
  },
  {
    num: "05",
    phase: "PHASE 05",
    title: "FINAL COMMISSIONING & HANDOVER",
    desc: "Comprehensive quality audit, deep cleaning, white-glove styling, and final key handover delivered precisely on time.",
    icon: Key,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=70",
  },
];

export default function Process({ onOpenContact }) {
  return (
    <section id="process" className="py-24 sm:py-36 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      
      {/* Background Giant Ghost Chapter Typography */}
      <div className="absolute top-10 right-4 chapter-number-ghost text-[14vw]">
        04
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Chapter Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="chapter-tag">
            CHAPTER IV &bull; 04 / ARCHITECTURE & PROCESS
          </span>
          <span className="w-12 h-[1px] bg-[#c49678]/40" />
          <span className="text-[10px] tracking-[0.2em] text-[#777] uppercase">
            EXECUTION METHODOLOGY
          </span>
        </div>

        {/* Display Title */}
        <div className="mb-16 sm:mb-24">
          <h2 className="display-title text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-white">
            FEEL REFINED.{" "}
            <span className="text-copper-gradient font-light italic">
              LIVE UNCOMPROMISED.
            </span>
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-[#888] uppercase mt-3">
            A RIGOROUS 5-STAGE FRAMEWORK TRANSFORMING VISION INTO TANGIBLE REALITY
          </p>
        </div>

        {/* 5-Step Process Editorial Flow */}
        <div className="space-y-16 sm:space-y-24">
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#c49678]">
                      {step.phase}
                    </span>
                    <span className="w-8 h-[1px] bg-white/20" />
                    <Icon size={14} className="text-[#888]" />
                  </div>

                  <h3 className="display-title text-2xl sm:text-4xl text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#888] font-light leading-relaxed max-w-lg">
                    {step.desc}
                  </p>

                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#c49678]">
                      <span>STAGE {step.num} OF 05</span>
                      <div className="w-12 h-[1px] bg-[#c49678]" />
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden bg-[#121212] hairline-all group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#bbb] uppercase">
                      <span>PROCESS STAGE {step.num}</span>
                      <span className="text-[#c49678]">VERIFIED EXECUTION</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
