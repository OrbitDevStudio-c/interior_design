import React from "react";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer({ companyName = "AURA", onOpenContact }) {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#080808] text-[#888] pt-20 pb-28 md:pb-20 hairline-t relative overflow-hidden text-center md:text-left">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 hairline-b">

          {/* Col 1: Brand & Monogram (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-6">
            <a
              href="#"
              onClick={(e) => scrollTo(e, "#")}
              className="flex items-center justify-center md:justify-start gap-3 text-decoration-none group"
            >
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-[#c49678]">
                <span className="text-xs font-bold tracking-tighter text-white group-hover:text-[#c49678]">
                  A
                </span>
              </div>
              <div className="text-left">
                <span className="font-bold text-lg tracking-[0.25em] text-white block leading-none">
                  {companyName}
                </span>
                <span className="text-[8px] tracking-[0.35em] uppercase text-[#666] mt-1 block">
                  DESIGN STUDIO
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#777] font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              AURA Design Studio crafts bespoke luxury environments where architectural proportion, tactile materiality, and atmospheric light converge into timeless statements.
            </p>

            <div className="pt-2 flex justify-center md:justify-start w-full">
              <MagneticButton
                onClick={onOpenContact}
                className="pill-btn-copper text-xs"
              >
                <span>INITIATE DIALOGUE</span>
                <ArrowUpRight size={14} />
              </MagneticButton>
            </div>
          </div>

          {/* Col 2: Navigation Chapters (3 Cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start">
            <span className="chapter-tag text-[9px] block text-center md:text-left">
              NAVIGATION ARCHITECTURE
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase list-none p-0 m-0 flex flex-col items-center md:items-start">
              {[
                { name: "01 / About Studio", href: "#about" },
                { name: "02 / Interior & Works", href: "#portfolio" },
                { name: "03 / Services & Craft", href: "#services" },
                { name: "04 / Methodology", href: "#process" },
                { name: "05 / Contact & Inquire", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-[#888] hover:text-[#c49678] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Coordinates (4 Cols) */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start">
            <span className="chapter-tag text-[9px] block text-center md:text-left">
              STUDIO HEADQUARTERS
            </span>
            <p className="text-xs sm:text-sm text-[#bbb] font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Level 4, Executive Plaza, Bandra West,<br />
              Mumbai, Maharashtra 400050
            </p>
            <div className="space-y-1 text-xs pt-2 flex flex-col items-center md:items-start">
              <a
                href="mailto:hello@auradesignstudio.in"
                className="block text-[#bbb] hover:text-[#c49678] transition-colors"
              >
                hello@auradesignstudio.in
              </a>
              <a
                href="tel:+919876543210"
                className="block text-[#777] hover:text-[#c49678] transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest text-[#555] uppercase text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} AURA DESIGN STUDIO &bull; ALL RIGHTS RESERVED
          </div>

          {/* Developer / Studio Credit Badge */}
          <a
            href="https://orbit-dev-studio.vercel.app/ "
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-white/10 text-[#777] hover:text-[#c49678] hover:border-[#c49678] transition-colors"
          >

            <span>ENGINEERED BY <span className="text-white font-medium">OrbitDevStudios</span></span>
            <img src="/companylogo.png" alt="OrbitDevStudios" className="h-3.5 w-auto object-contain opacity-70" />
          </a>
        </div>

      </div>
    </footer>
  );
}
