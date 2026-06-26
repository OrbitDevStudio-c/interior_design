import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer({ companyName = "AURA" }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-gray-400 pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle overlay accent */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5 relative z-10 text-left">

        {/* Bio Column */}
        <div className="space-y-6">
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="flex flex-col tracking-wider text-white select-none group"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-gold-gradient font-plus-jakarta flex items-center gap-1">
              {companyName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-accent transition-colors duration-300">
              Design Studio
            </span>
          </a>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            AURA Design Studio designs bespoke, luxury architectural environments. We blend fine European aesthetics with absolute project transparency to hand over structural masterpieces.
          </p>

          {/* Social Icons (using inline SVGs to avoid deprecated lucide-react brand exports) */}
          <div className="flex items-center gap-3 pt-2">
            {[
              {
                icon: (props) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                href: "https://instagram.com"
              },
              {
                icon: (props) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
                href: "https://facebook.com"
              },
              {
                icon: (props) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
                href: "https://linkedin.com"
              }
            ].map((soc, i) => {
              const Icon = soc.icon;
              return (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold-gradient hover:text-primary transition-all duration-300 shadow-sm"
                  aria-label="Social Link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest font-plus-jakarta border-l-2 border-accent pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "About Studio", href: "#about" },
              { name: "Our Services", href: "#services" },
              { name: "Project Portfolio", href: "#portfolio" },
              { name: "Design Process", href: "#process" },
              { name: "Contact Consultation", href: "#contact" }
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-3.5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest font-plus-jakarta border-l-2 border-accent pl-3">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              "Living Room Design",
              "Modular Kitchen",
              "Bedroom Interior",
              "Office Interior",
              "Commercial Interior",
              "Lighting Design"
            ].map((serv, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-3.5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-accent" />
                  <span>{serv}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest font-plus-jakarta border-l-2 border-accent pl-3">
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>Bandra Executive Plaza, Level 4, Bandra West, Mumbai 400050</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <a href="mailto:hello@auradesignstudio.in" className="hover:text-accent transition-colors">
                hello@auradesignstudio.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                +91 98765 43210
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright and developer credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 relative z-10 gap-4">
        <div>
          &copy; {new Date().getFullYear()} OrbitDevStudio. All Rights Reserved.
        </div>

        {/* Core credits */}
        <div className="flex items-center gap-1 text-[11px] bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
          <span>Designed by <span className="font-semibold text-accent">Vansh</span></span>
          <span className="text-gray-600 font-bold">|</span>
          <span>Developed by <span className="font-semibold text-accent">Ridham</span></span>
        </div>
      </div>
    </footer>
  );
}
