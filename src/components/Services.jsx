import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sofa, ChefHat, Bed, Briefcase, Building, Layers, Lightbulb, Palette } from "lucide-react";
import MagneticButton from "./MagneticButton";

const SERVICES = [
  {
    num: "01",
    title: "LIVING ROOM ARCHITECTURE",
    desc: "Curating expansive social volumes that capture personality through custom Italian marble backings, bespoke modular seating, and ambient cove lighting.",
    icon: Sofa,
  },
  {
    num: "02",
    title: "MODULAR KITCHEN & DINING",
    desc: "Fusing German engineering, monolithic marble islands, handleless cabinetry, and chef-grade appliance integration for culinary living.",
    icon: ChefHat,
  },
  {
    num: "03",
    title: "BEDROOM SANCTUARY SUITES",
    desc: "Sculpting tranquil private retreats featuring fluted oak acoustic walls, custom dressing lounges, and warm low-glare perimeter lighting.",
    icon: Bed,
  },
  {
    num: "04",
    title: "EXECUTIVE OFFICE INTERIORS",
    desc: "Designing high-performance collaborative workspaces, private boardrooms, and sound-engineered pods that embody corporate prestige.",
    icon: Briefcase,
  },
  {
    num: "05",
    title: "COMMERCIAL & HOSPITALITY",
    desc: "Creating experiential commercial environments for luxury retail showrooms, restaurants, and private hospitality lounges.",
    icon: Building,
  },
  {
    num: "06",
    title: "BESPOKE OBJECT & FURNITURE",
    desc: "Custom furniture pieces sculpted from seasoned oak, patinated brass, hand-picked marble, and Belgian linen upholstery.",
    icon: Palette,
  },
  {
    num: "07",
    title: "ARCHITECTURAL FALSE CEILING",
    desc: "Multi-layered floating ceiling plans concealing HVAC ducts, high-fidelity sound networks, and micro magnetic track profiles.",
    icon: Layers,
  },
  {
    num: "08",
    title: "ATMOSPHERIC LIGHTING DESIGN",
    desc: "Engineering layered lighting topologies that shape spatial depth, accentuate architectural textures, and adapt between day and night.",
    icon: Lightbulb,
  },
];

export default function Services({ onOpenContact }) {
  return (
    <section id="services" className="py-24 sm:py-36 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      
      {/* Background Giant Ghost Chapter Typography */}
      <div className="absolute top-10 right-4 chapter-number-ghost text-[14vw]">
        03
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Chapter Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="chapter-tag">
            CHAPTER III &bull; 03 / SERVICES
          </span>
          <span className="w-12 h-[1px] bg-[#c49678]/40" />
          <span className="text-[10px] tracking-[0.2em] text-[#777] uppercase">
            DISCIPLINE OF CRAFT
          </span>
        </div>

        {/* Display Title */}
        <div className="mb-14 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="display-title text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-white">
              THE DISCIPLINE OF{" "}
              <span className="text-copper-gradient font-light italic">
                CRAFT.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-[#888] font-light leading-relaxed">
              From spatial structural planning to bespoke handcrafted joinery, we orchestrate the complete design lifecycle.
            </p>
          </div>
        </div>

        {/* Services List Rows (Nabil Issa Style) */}
        <div className="hairline-t">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group py-8 sm:py-10 hairline-b flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-[#121212] px-4 sm:px-6 cursor-default"
              >
                {/* Number & Title */}
                <div className="flex items-baseline gap-6 md:w-5/12">
                  <span className="font-mono text-xs sm:text-sm text-[#c49678] font-medium">
                    {service.num}
                  </span>
                  <h3 className="display-title text-lg sm:text-2xl text-white group-hover:text-[#c49678] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-6/12">
                  <p className="text-xs sm:text-sm text-[#777] font-light leading-relaxed group-hover:text-[#bbb] transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* Icon Action Indicator */}
                <div className="md:w-1/12 flex md:justify-end items-center">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#777] group-hover:border-[#c49678] group-hover:text-[#c49678] group-hover:scale-110 transition-all">
                    <Icon size={14} />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-[#121212] hairline-all luxury-card-shine">
          <div>
            <span className="chapter-tag text-[9px] block mb-1">TURNKEY ARCHITECTURAL SCOPE</span>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              NEED BESPOKE SPATIAL CONSULTATION FOR YOUR UPCOMING PROPERTY?
            </h4>
          </div>
          <MagneticButton
            onClick={onOpenContact}
            className="pill-btn-copper text-xs shrink-0"
          >
            <span>INQUIRE FOR YOUR PROPERTY</span>
            <ArrowRight size={14} />
          </MagneticButton>
        </div>

      </div>

    </section>
  );
}
