import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

export default function Header({ companyName = "AURA" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass-nav py-4 shadow-lg"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col tracking-wider text-white select-none group"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-premium-gradient font-plus-jakarta flex items-center gap-1">
              {companyName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-accent transition-colors duration-300">
              Design Studio
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-accent transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-6 py-2.5 rounded-full border border-accent/40 text-accent font-medium text-sm flex items-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Get Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-accent p-2 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#0C1220] border-l border-white/10 p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-20">
                <div className="text-xs uppercase tracking-widest text-accent mb-6 font-medium border-b border-accent/20 pb-2">
                  Navigation
                </div>
                <div className="flex flex-col space-y-5">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-lg font-medium text-gray-200 hover:text-accent transition-colors flex items-center justify-between group py-1"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer footer details */}
              <div className="space-y-6">
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Let's Build Dreams
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-button-primary font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Free Consultation</span>
                  </a>
                </div>
                <p className="text-[10px] text-gray-600 text-center">
                  Designed by Vansh & Developed by Ridham
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
