import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Apartment",
    budget: "25L - 50L",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const budgetOptions = [
    "5L - 10L",
    "10L - 25L",
    "25L - 50L",
    "50L - 1Cr",
    "1Cr+"
  ];

  const projectTypes = [
    "Apartment",
    "Villa",
    "Office",
    "Kitchen",
    "Bedroom",
    "Living Room",
    "Commercial"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBudgetSelect = (b) => {
    setFormData({ ...formData, budget: b });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Success
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectType: "Apartment",
      budget: "25L - 50L",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-gold">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 font-plus-jakarta">
            Commence Your Transformation
          </h2>
          <p className="text-gray-500 font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            Ready to design your dream space? Fill out the consultation request below, or connect with us instantly.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 flex">
            <div className="glassmorphism-card p-6 md:p-10 rounded-3xl w-full border border-gray-100 shadow-xl relative flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {error && (
                      <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-600 text-xs border border-red-100">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Name & Phone Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ananya Sharma"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm text-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm text-primary"
                        />
                      </div>
                    </div>

                    {/* Email & Project Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ananya@example.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm text-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="projectType" className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none bg-white transition-all text-sm text-primary cursor-pointer"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type} Design
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Selection Pills */}
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-wider text-gray-500 font-bold block">
                        Estimated Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => handleBudgetSelect(b)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                              formData.budget === b
                                ? "bg-gold-gradient text-primary shadow-md font-bold"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500 font-bold">
                        Describe Your Dream Space
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="I would love to remodel my 3BHK living room with bespoke furniture, custom profile lighting, and marble backings..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm text-primary resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gold-gradient text-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-lg transition-all hover:scale-[1.01] cursor-pointer"
                    >
                      <span>Request Free Consultation</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto border border-green-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-primary font-plus-jakarta">
                        Consultation Requested!
                      </h3>
                      <p className="text-gray-500 font-light text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="font-semibold text-primary">{formData.name}</span>. Lead Designer Vansh is looking forward to shaping your design concept.
                      </p>
                      <p className="text-xs text-accent tracking-wider font-semibold uppercase mt-1">
                        We will contact you within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Contact Details & Map Placeholder (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0">
            
            {/* Cards Info */}
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-bold text-primary font-plus-jakarta border-b border-gray-100 pb-3">
                Office Information
              </h3>

              {/* Location Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">Our Studio Address</h4>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    Level 4, Executive Plaza, Bandra West,<br />Mumbai, Maharashtra 400050
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">Email Enquiries</h4>
                  <a href="mailto:hello@auradesignstudio.in" className="text-gray-500 font-light text-sm hover:text-accent transition-colors">
                    hello@auradesignstudio.in
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">Call Booking</h4>
                  <a href="tel:+919876543210" className="text-gray-500 font-light text-sm hover:text-accent transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Quick Communication Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <a
                  href="tel:+919876543210"
                  className="py-3.5 rounded-xl border border-accent text-accent font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
                
                <a
                  href="https://wa.me/919876543210?text=Hi%20AURA%20Design%20Studio%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20designer%20Vansh."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 rounded-xl bg-green-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Stylized Google Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-[240px] md:h-[280px] bg-primary relative border border-gray-100 shadow-md group mt-6">
              {/* Slate luxury background */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 select-none grayscale contrast-125"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=40')` }}
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />

              {/* Golden Marker and Details */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-left">
                {/* Coordinates top */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold font-mono">
                    GPS: 19.0760&deg; N, 72.8777&deg; E
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                </div>

                {/* Golden Pin indicator center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-primary shadow-lg border border-white/20 scale-100 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="w-3 h-1 bg-black/40 rounded-full filter blur-[1px] mt-1" />
                </div>

                {/* Map Bottom Tag */}
                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <h4 className="text-white font-bold text-sm font-plus-jakarta leading-none mb-1">
                      Bandra West Studio
                    </h4>
                    <p className="text-gray-400 text-xs font-light">Bandra Executive Plaza, Level 4</p>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-primary text-[10px] uppercase font-bold tracking-wider rounded-lg shadow-md hover:bg-accent hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    Get Directions
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
