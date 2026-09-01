import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Apartment",
    budget: "25L - 50L",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const budgetOptions = ["5L - 10L", "10L - 25L", "25L - 50L", "50L - 1Cr", "1Cr+"];
  const projectTypes = ["Apartment", "Villa", "Office", "Kitchen", "Bedroom", "Living Room", "Commercial"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!formData.name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError("Please provide a valid phone number.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "Apartment",
      budget: "25L - 50L",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      
      {/* Background Giant Ghost Chapter Typography */}
      <div className="absolute top-10 right-4 chapter-number-ghost text-[14vw]">
        05
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Chapter Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="chapter-tag">
            CHAPTER V &bull; 05 / CONTACT
          </span>
          <span className="w-12 h-[1px] bg-[#c49678]/40" />
          <span className="text-[10px] tracking-[0.2em] text-[#777] uppercase">
            INITIATE PROJECT DIALOGUE
          </span>
        </div>

        {/* Display Title */}
        <div className="mb-16 sm:mb-24">
          <h2 className="display-title text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-white">
            WHERE DIALOGUE{" "}
            <span className="text-copper-gradient font-light italic">
              TAKES SHAPE.
            </span>
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-[#888] uppercase mt-3">
            DIRECT INQUIRIES & FEASIBILITY CONSULTATION WITH STUDIO DIRECTORS
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left: Interactive In-page Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121212] p-8 sm:p-12 hairline-all">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {error && (
                    <div
                      className="flex items-center gap-2 p-3 text-xs text-red-400"
                      style={{
                        background: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                      }}
                    >
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#777] block mb-2 font-medium">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ananya Sharma"
                        className="nabil-input"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#777] block mb-2 font-medium">
                        TELEPHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="nabil-input"
                      />
                    </div>
                  </div>

                  {/* Email & Project Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#777] block mb-2 font-medium">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ananya@example.com"
                        className="nabil-input"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#777] block mb-2 font-medium">
                        PROPERTY TYPOLOGY
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="nabil-input cursor-pointer"
                      >
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t} Architecture
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector Pills */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#777] block mb-3 font-medium">
                      ESTIMATED INVESTMENT RANGE
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`text-xs tracking-wider py-2 px-4 border transition-all cursor-pointer bg-transparent ${
                            formData.budget === b
                              ? "border-[#c49678] text-[#c49678] bg-[#c49678]/10 font-bold"
                              : "border-white/10 text-[#777] hover:border-white/30 hover:text-[#bbb]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#777] block mb-2 font-medium">
                      PROJECT VISION & PARTICULARS
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share details on your property location, carpet area, and architectural timeline..."
                      className="nabil-input resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="pill-btn-copper w-full py-4 text-xs tracking-[0.25em]"
                    >
                      <span>TRANSMIT CONSULTATION REQUEST</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 space-y-6"
                >
                  <CheckCircle2 size={48} className="mx-auto text-[#c49678]" />
                  <h3 className="display-title text-3xl text-white">
                    REQUEST TRANSMITTED
                  </h3>
                  <p className="text-sm text-[#888] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Lead Designer Vansh has received your briefing and our team will contact you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="pill-btn text-xs"
                    >
                      SUBMIT ANOTHER BRIEFING
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Studio Headquarters & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-6">
              <span className="chapter-tag block">STUDIO HEADQUARTERS</span>
              
              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-[#121212] hairline-all">
                  <MapPin size={16} className="text-[#c49678] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#666] mb-1">
                      MUMBAI STUDIO
                    </h4>
                    <p className="text-xs sm:text-sm text-[#bbb] font-light leading-relaxed">
                      Level 4, Executive Plaza, Bandra West,<br />
                      Mumbai, Maharashtra 400050
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-[#121212] hairline-all">
                  <Mail size={16} className="text-[#c49678] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#666] mb-1">
                      EMAIL INQUIRIES
                    </h4>
                    <a
                      href="mailto:hello@auradesignstudio.in"
                      className="text-xs sm:text-sm text-white hover:text-[#c49678] transition-colors"
                    >
                      hello@auradesignstudio.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-[#121212] hairline-all">
                  <Phone size={16} className="text-[#c49678] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#666] mb-1">
                      DIRECT TELEPHONE
                    </h4>
                    <a
                      href="tel:+919876543210"
                      className="text-xs sm:text-sm text-white hover:text-[#c49678] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919876543210"
                className="pill-btn text-xs py-3.5"
              >
                <Phone size={14} />
                <span>CALL STUDIO</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20AURA%20Design%20Studio%2C%20I%20would%20like%20to%20schedule%20an%20architectural%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn text-xs py-3.5 hover:border-[#25d366] hover:text-[#25d366]"
              >
                <MessageSquare size={14} />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Architectural Coordinates Map Mockup */}
            <div className="relative h-[220px] bg-[#121212] hairline-all overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 grayscale contrast-125"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=50')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#888] uppercase">
                  <span>GPS: 19.0760&deg; N, 72.8777&deg; E</span>
                  <span className="w-2 h-2 rounded-full bg-[#c49678] animate-ping" />
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                      BANDRA EXECUTIVE PLAZA
                    </h4>
                    <p className="text-[10px] tracking-widest text-[#777] uppercase">
                      STUDIO HEADQUARTERS
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-widest uppercase text-[#c49678] hover:underline font-bold"
                  >
                    DIRECTIONS &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
