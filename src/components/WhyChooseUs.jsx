import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Clock, ShieldCheck, Users, Gem } from "lucide-react";

const STANDARDS = [
  {
    num: "01",
    title: "PREMIUM GRADE MATERIALS",
    desc: "Imported Italian marble, seasoned European oak, architectural brass profiles, and certified low-VOC finishes.",
    icon: Crown,
  },
  {
    num: "02",
    title: "BESPOKE CUSTOMIZATION",
    desc: "Zero cookie-cutter templates. Every layout, millwork detail, and fixture is drawn from scratch for your space.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "RIGOROUS TIMELINE ADHERENCE",
    desc: "Structured project management dashboards with weekly milestone audits ensure punctual handover without excuses.",
    icon: Clock,
  },
  {
    num: "04",
    title: "TRANSPARENT COMMERCIALS",
    desc: "Detailed bill of quantities with zero hidden markups. We optimize engineering value without sacrificing elegance.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "TECHNICAL ARCHITECTURAL MASTERY",
    desc: "Led by designer Vansh and structural engineer leads with extensive expertise in structural alterations and MEP networks.",
    icon: Users,
  },
  {
    num: "06",
    title: "PROVEN FIVE-YEAR LEGACY",
    desc: "Over 250 completed turnkey residences, penthouses, and corporate headquarters delivered across major Indian metros.",
    icon: Gem,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Eyebrow & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="chapter-tag block mb-4">
              ARCHITECTURAL STANDARDS
            </span>
            <h2 className="display-title text-3xl sm:text-5xl md:text-6xl text-white">
              UNCOMPROMISING{" "}
              <span className="text-copper-gradient font-light italic">
                DISCIPLINE.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#888] font-light max-w-md leading-relaxed">
            We hold ourselves to rigorous standards of craftsmanship, fiscal integrity, and architectural precision from conception to commissioning.
          </p>
        </div>

        {/* 3x2 Grid with Precision Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-t hairline-l">
          {STANDARDS.map((std, idx) => {
            const Icon = std.icon;
            return (
              <motion.div
                key={std.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="p-8 sm:p-10 hairline-r hairline-b bg-[#0b0b0b] hover:bg-[#121212] transition-colors group space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#c49678]">
                    {std.num}
                  </span>
                  <Icon size={16} className="text-[#666] group-hover:text-[#c49678] transition-colors" />
                </div>

                <h3 className="display-title text-base sm:text-lg text-white group-hover:text-[#c49678] transition-colors">
                  {std.title}
                </h3>

                <p className="text-xs text-[#777] font-light leading-relaxed">
                  {std.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
