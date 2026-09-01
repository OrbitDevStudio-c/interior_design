import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Header({ companyName = "AURA", onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navChapters = [
    { num: "01", name: "ABOUT",          href: "#about",         desc: "Silence, Proportion, Light" },
    { num: "02", name: "INTERIOR",       href: "#portfolio",     desc: "Spaces That Tell Your Story" },
    { num: "03", name: "SERVICES",       href: "#services",      desc: "The Discipline of Craft" },
    { num: "04", name: "ARCHITECTURE",   href: "#process",       desc: "Precision & Architectural Standards" },
    { num: "05", name: "CONTACT",        href: "#contact",       desc: "Where Dialogue Takes Shape" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: isScrolled ? "14px 0" : "24px 0",
          background: isScrolled ? "rgba(11,11,11,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(241,241,241,0.07)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Logo / Monogram (Left) */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="flex items-center gap-3 text-decoration-none group cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#c49678] group-hover:scale-105"
            >
              <span className="text-[11px] font-bold tracking-tighter text-white group-hover:text-[#c49678]">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-base sm:text-lg tracking-[0.2em] text-white leading-none group-hover:text-[#c49678] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {companyName}
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-[#666] mt-0.5">
                STUDIO
              </span>
            </div>
          </a>

          {/* Center Title (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c49678] animate-ping" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#777] font-medium">
              BESPOKE ARCHITECTURE & INTERIORS
            </span>
          </div>

          {/* Right Action: Get In Touch + Burger Menu Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <MagneticButton
              onClick={onOpenContact}
              className="pill-btn text-[10px] tracking-[0.2em] py-2 px-4 sm:px-6"
            >
              <span>GET IN TOUCH</span>
            </MagneticButton>

            {/* Twin-Line Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer group bg-transparent border-none p-0 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className="w-6 h-[1.5px] bg-[#f1f1f1] transition-all duration-300 group-hover:bg-[#c49678] group-hover:scale-x-110"
              />
              <span
                className="w-6 h-[1.5px] bg-[#f1f1f1] transition-all duration-300 group-hover:bg-[#c49678] group-hover:scale-x-75"
              />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Overlay Navigation (Nabil Issa Menu Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col justify-between"
            style={{
              background: "rgba(11, 11, 11, 0.98)",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Top Bar of Menu */}
            <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 py-6 flex items-center justify-between hairline-b">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#777]">
                NAVIGATION ARCHITECTURE
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer"
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            {/* Menu Content Grid */}
            <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Huge Chapter Links */}
              <div className="lg:col-span-8 space-y-2 sm:space-y-4">
                {navChapters.map((ch, idx) => (
                  <motion.div
                    key={ch.num}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.5 }}
                  >
                    <a
                      href={ch.href}
                      onClick={(e) => scrollToSection(e, ch.href)}
                      className="group flex items-baseline gap-4 sm:gap-6 py-2 text-decoration-none transition-all duration-300"
                    >
                      <span className="text-xs sm:text-sm font-light text-[#555] tracking-widest group-hover:text-[#c49678] transition-colors">
                        {ch.num}
                      </span>
                      <span
                        className="display-hero text-3xl sm:text-5xl md:text-6xl text-[#f1f1f1] group-hover:text-[#c49678] transition-all duration-300 group-hover:translate-x-3"
                      >
                        {ch.name}
                      </span>
                      <span className="text-xs text-[#666] font-light hidden md:inline-block pl-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        — {ch.desc}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Studio Coordinates & Channels */}
              <div className="lg:col-span-4 space-y-8 hairline-l lg:pl-10">
                <div>
                  <span className="chapter-tag block mb-2">STUDIO LOCATION</span>
                  <p className="text-sm font-light text-[#bbb] leading-relaxed">
                    Level 4, Executive Plaza, Bandra West<br />
                    Mumbai, Maharashtra 400050
                  </p>
                </div>

                <div>
                  <span className="chapter-tag block mb-2">DIRECT CHANNELS</span>
                  <div className="space-y-1 text-sm">
                    <a
                      href="mailto:hello@auradesignstudio.in"
                      className="block text-[#f1f1f1] hover:text-[#c49678] transition-colors"
                    >
                      hello@auradesignstudio.in
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="block text-[#888] hover:text-[#c49678] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div>
                  <span className="chapter-tag block mb-2">DISCOURSE & SOCIAL</span>
                  <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase">
                    {[
                      { name: "Instagram", href: "https://instagram.com" },
                      { name: "LinkedIn",  href: "https://linkedin.com" },
                      { name: "WhatsApp",  href: "https://wa.me/919876543210" },
                    ].map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#888] hover:text-[#c49678] transition-colors inline-flex items-center gap-1"
                      >
                        <span>{s.name}</span>
                        <ArrowUpRight size={10} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <MagneticButton
                    onClick={() => {
                      setIsOpen(false);
                      onOpenContact();
                    }}
                    className="pill-btn-copper w-full"
                  >
                    <span>INITIATE PROJECT DIALOGUE</span>
                    <ArrowRight size={14} />
                  </MagneticButton>
                </div>
              </div>

            </div>

            {/* Bottom Bar of Menu */}
            <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 py-6 flex items-center justify-between hairline-t text-[10px] text-[#555] tracking-widest uppercase">
              <span>AURA DESIGN STUDIO &bull; ARCHITECTURAL MASTERY</span>
              <span>EST. 2020 &bull; MUMBAI</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
