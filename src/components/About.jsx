import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Shield, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function About({ onOpenContact }) {
  const stats = [
    { num: "250+", label: "Projects Completed" },
    { num: "180+", label: "Private Clients" },
    { num: "05+",  label: "Years of Mastery" },
    { num: "20+",  label: "Design Specialists" },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      
      {/* Background Giant Ghost Chapter Typography */}
      <div className="absolute top-10 right-4 chapter-number-ghost text-[14vw]">
        01
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Chapter Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="chapter-tag">
            CHAPTER I &bull; 01 / ABOUT
          </span>
          <span className="w-12 h-[1px] bg-[#c49678]/40" />
          <span className="text-[10px] tracking-[0.2em] text-[#777] uppercase">
            PHILOSOPHY & ETHOS
          </span>
        </div>

        {/* Display Title */}
        <div className="mb-14 sm:mb-20">
          <h2 className="display-title text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-white">
            SILENCE, PROPORTION,{" "}
            <span className="text-copper-gradient font-light italic">
              LIGHT.
            </span>
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-[#888] uppercase mt-3">
            WHERE ARCHITECTURAL VISION MEETS UNCOMPROMISED LIVING
          </p>
        </div>

        {/* 2-Column Editorial Grid: High-Res Visual + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Architectural Imagery with Fine Inset Framing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative overflow-hidden group luxury-card-shine">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=75"
                alt="AURA interior architectural sanctuary"
                className="w-full h-[380px] sm:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Fine hairline border frame */}
              <div className="absolute inset-4 border border-white/15 pointer-events-none transition-all duration-500 group-hover:inset-3 group-hover:border-[#c49678]/40" />
            </div>

            {/* Micro caption */}
            <div className="flex items-center justify-between text-[10px] tracking-widest text-[#666] uppercase pt-2">
              <span>FIG 01. LIVING SANCTUARY</span>
              <span>BANDRA WEST RESIDENCE</span>
            </div>
          </div>

          {/* Right: Narrative Philosophy & Curators */}
          <div className="lg:col-span-6 space-y-10 lg:pl-6">
            
            {/* Narrative copy */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-normal text-white leading-relaxed tracking-wide">
                We believe exceptional architecture is not merely about decorating volume, but sculpting experience.
              </h3>
              <p className="text-xs sm:text-sm text-[#888] font-light leading-relaxed">
                AURA Design Studio is a premier interior architecture firm dedicated to creating bespoke luxury environments. We map our clients' aspirations, daily rituals, and architectural geometry to formulate functional masterpieces that transcend passing trends.
              </p>
              <p className="text-xs sm:text-sm text-[#888] font-light leading-relaxed">
                From monolithic sea-facing penthouses to minimalist hillside villas and corporate headquarters, every square inch is engineered with obsessive craft, raw materiality, and atmospheric lighting.
              </p>
            </div>

            {/* Meet the Curators */}
            <div className="hairline-t pt-8">
              <span className="chapter-tag block mb-6">THE CURATORS</span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Designer Vansh */}
                <div className="p-5 bg-[#121212] hairline-all space-y-2 group hover:border-[#c49678]/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#c49678]">01</span>
                    <Sparkles size={14} className="text-[#c49678]/60" />
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                    VANSH
                  </h4>
                  <p className="text-[10px] tracking-widest uppercase text-[#c49678] font-medium">
                    Lead Interior Designer
                  </p>
                  <p className="text-xs text-[#777] font-light leading-relaxed pt-1">
                    Merges timeless classic proportions with sharp contemporary lines and custom profile lighting.
                  </p>
                </div>

                {/* Developer Ridham */}
                <div className="p-5 bg-[#121212] hairline-all space-y-2 group hover:border-[#c49678]/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#c49678]">02</span>
                    <Compass size={14} className="text-[#c49678]/60" />
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                    RIDHAM
                  </h4>
                  <p className="text-[10px] tracking-widest uppercase text-[#c49678] font-medium">
                    Lead Frontend & Tech Architect
                  </p>
                  <p className="text-xs text-[#777] font-light leading-relaxed pt-1">
                    Transforms spatial concepts into high-performance digital experiences with zero layout shifts.
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <MagneticButton
                onClick={onOpenContact}
                className="pill-btn-copper text-xs"
              >
                <span>CONSULT WITH THE DIRECTORS</span>
                <ArrowRight size={14} />
              </MagneticButton>
            </div>

          </div>

        </div>

        {/* Editorial Press / Recognition Quote Bar */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 bg-[#121212] hairline-all grid grid-cols-1 md:grid-cols-12 gap-8 items-center luxury-card-shine">
          <div className="md:col-span-4">
            <span className="chapter-tag block mb-1">EDITORIAL RECOGNITION</span>
            <h4 className="text-xs sm:text-sm tracking-widest uppercase text-white font-medium">
              WHERE BOLD IDEAS FIND THEIR AUDIENCE
            </h4>
          </div>
          <div className="md:col-span-8 md:border-l md:border-white/10 md:pl-8">
            <p className="text-sm sm:text-base text-[#bbb] font-light italic leading-relaxed">
              "AURA Design Studio captures the rare balance of dramatic luxury and tranquil restraint — spaces that feel at once museum-grade and intimately livable."
            </p>
            <span className="text-[10px] tracking-widest uppercase text-[#c49678] mt-2 block font-medium">
              &bull; GLOBAL ARCHITECTURAL DIGEST
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
