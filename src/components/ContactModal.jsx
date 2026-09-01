import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "Residential Interior",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const purposes = [
    "Residential Interior",
    "Bespoke Villa Architecture",
    "Commercial Workspace",
    "Modular Kitchen & Dining",
    "Penthouse Architecture",
    "Consultation & Masterplanning",
  ];

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
    if (!formData.email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setError("Please provide a valid phone number.");
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      purpose: "Residential Interior",
      message: "",
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(18px)",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="w-full max-w-2xl relative overflow-hidden"
            style={{
              background: "#141414",
              border: "1px solid rgba(241, 241, 241, 0.12)",
              padding: "clamp(2rem, 5vw, 3.5rem)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{
                border: "1px solid rgba(241, 241, 241, 0.15)",
                color: "#f1f1f1",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c49678";
                e.currentTarget.style.color = "#c49678";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(241, 241, 241, 0.15)";
                e.currentTarget.style.color = "#f1f1f1";
              }}
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <div>
                {/* Header */}
                <div className="mb-8 pr-8">
                  <span className="chapter-tag block mb-2">
                    05 / INITIATE DIALOGUE
                  </span>
                  <h3
                    className="display-title text-2xl sm:text-3xl text-white"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    LET IDEAS{" "}
                    <span className="text-copper-gradient font-normal">
                      TAKE SHAPE
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#888888] font-light mt-2">
                    Direct your inquiry to designer Vansh and the AURA studio team.
                  </p>
                </div>

                {error && (
                  <div
                    className="flex items-center gap-2 p-3 mb-6 text-xs text-red-400"
                    style={{
                      background: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                    }}
                  >
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#666] block mb-1">
                        YOUR NAME *
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
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#666] block mb-1">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#666] block mb-1">
                        PHONE NUMBER *
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

                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#666] block mb-1">
                        INQUIRY PURPOSE
                      </label>
                      <select
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="nabil-input cursor-pointer"
                      >
                        {purposes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#666] block mb-1">
                      PROJECT VISION & DETAILS
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your space, timeline, and architectural aspirations..."
                      className="nabil-input resize-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-[#555] tracking-wider uppercase hidden sm:block">
                      MUMBAI &bull; BANGALORE &bull; DELHI
                    </span>
                    <button
                      type="submit"
                      className="pill-btn-copper w-full sm:w-auto"
                    >
                      <span>SUBMIT INQUIRY</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2
                  size={44}
                  className="mx-auto"
                  style={{ color: "#c49678" }}
                />
                <h3 className="display-title text-2xl text-white">
                  DIALOGUE INITIATED
                </h3>
                <p className="text-sm text-[#888888] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Designer Vansh and our team will review your requirements and respond within 24 hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={resetForm}
                    className="pill-btn text-xs"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
