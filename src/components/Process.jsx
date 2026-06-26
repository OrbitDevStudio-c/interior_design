import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Layers, Hammer, Key, Sparkles } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "An in-depth consultation with designer Vansh. We discuss your layout requirements, lifestyle preferences, and architectural vision.",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=40", // Luxury living room
      theme: "dark"
    },
    {
      num: "02",
      title: "Planning",
      desc: "Drafting detailed sketches and floor plans, scheduling project phases, and managing cost estimations.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=40", // Rolled blueprints & pencil
      theme: "light"
    },
    {
      num: "03",
      title: "3D Design",
      desc: "Creating immersive 3D visualizations and realistic renderings, giving you a full preview before execution begins.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=40", // 3D render living
      theme: "dark"
    },
    {
      num: "04",
      title: "Execution",
      desc: "We implement every detail flawlessly, maintain top-quality standards, and ensure a seamless experience by specialized project leads.",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=40", // Onsite work/wood panels
      theme: "light"
    },
    {
      num: "05",
      title: "Final Delivery",
      desc: "Transforming your space to style, delivering on time with final inspections. Welcome to your luxury home.",
      icon: Key,
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=40", // Finished bedroom/lounge
      theme: "dark"
    }
  ];

  return (
    <section id="process" className="py-28 bg-[#FCFAF6] relative overflow-hidden">

      {/* Hanging Gold Pendant Lamps (Top-Left Decor) */}
      <div className="absolute top-0 left-8 md:left-20 w-36 h-64 pointer-events-none z-10 opacity-80 hidden sm:block">
        <svg viewBox="0 0 150 250" fill="none" className="w-full h-full">
          {/* Left Lamp Cord and Cap */}
          <line x1="40" y1="0" x2="40" y2="120" stroke="#C8A96A" strokeWidth="1.5" />
          <path d="M30 120H50L45 130H35L30 120Z" fill="#C8A96A" />
          {/* Left Lamp Dome */}
          <path d="M15 130C15 130 15 170 40 170C65 170 65 130 65 130H15Z" fill="url(#lampGold)" />
          {/* Left Light Glow */}
          <ellipse cx="40" cy="170" rx="20" ry="4" fill="#FFEAA7" opacity="0.6" />

          {/* Right Lamp Cord and Cap */}
          <line x1="100" y1="0" x2="100" y2="70" stroke="#C8A96A" strokeWidth="1.5" />
          <path d="M90 70H110L105 80H95L90 70Z" fill="#C8A96A" />
          {/* Right Lamp Dome */}
          <path d="M75 80C75 80 75 120 100 120C125 120 125 80 125 80H75Z" fill="url(#lampGold)" />
          {/* Right Light Glow */}
          <ellipse cx="100" cy="120" rx="20" ry="4" fill="#FFEAA7" opacity="0.6" />

          <defs>
            <linearGradient id="lampGold" x1="15" y1="80" x2="125" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#DFBA73" />
              <stop offset="50%" stopColor="#C8A96A" />
              <stop offset="100%" stopColor="#9A7B3E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Villa Architectural Sketch (Top-Right Decor) */}
      <div className="absolute top-8 right-6 md:right-16 w-48 md:w-72 opacity-25 pointer-events-none select-none z-10 hidden sm:block">
        <svg viewBox="0 0 300 200" fill="none" stroke="#C8A96A" strokeWidth="1" className="w-full h-full">
          {/* Ground Line */}
          <line x1="10" y1="180" x2="290" y2="180" strokeDasharray="3 3" />
          {/* Main House Box */}
          <rect x="50" y="80" width="120" height="100" />
          {/* Double-Height Glass Frame */}
          <rect x="60" y="90" width="40" height="90" />
          <line x1="80" y1="90" x2="80" y2="180" />
          <line x1="60" y1="135" x2="100" y2="135" />
          {/* Roof overhang */}
          <line x1="40" y1="80" x2="180" y2="80" strokeWidth="2" />
          {/* Cantilever block left */}
          <rect x="150" y="50" width="110" height="70" />
          <line x1="150" y1="50" x2="270" y2="50" strokeWidth="2" />
          {/* Modern Windows */}
          <rect x="170" y="65" width="30" height="30" />
          <rect x="215" y="65" width="30" height="30" />
          {/* Support Columns */}
          <line x1="240" y1="120" x2="240" y2="180" />
          {/* Dynamic perspective lines */}
          <line x1="50" y1="80" x2="10" y2="50" />
          <line x1="170" y1="80" x2="140" y2="50" />
          <line x1="260" y1="50" x2="220" y2="20" />
          {/* Little tree sketch */}
          <path d="M20 180 C20 140, 40 140, 40 180" strokeDasharray="2 2" />
          <path d="M280 180 C270 150, 290 150, 280 180" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Palm Leaf Botanical Decors (Bottom Corners) */}
      <div className="absolute bottom-0 right-0 w-44 md:w-64 opacity-20 pointer-events-none select-none z-10 hidden sm:block transform translate-x-12 translate-y-12">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-accent w-full h-full">
          <path d="M200 200 C150 160, 100 130, 20 150 C10 130, 30 100, 70 90 C120 80, 160 110, 200 200 Z" />
          <path d="M200 200 C160 140, 120 100, 40 80 C30 65, 60 50, 95 60 C140 70, 170 120, 200 200 Z" />
          <path d="M200 200 C170 120, 140 80, 70 50 C60 30, 90 20, 125 35 C160 55, 180 110, 200 200 Z" />
          <path d="M200 200 C185 100, 165 60, 110 30 C105 10, 130 5, 160 25 C185 45, 195 100, 200 200 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-44 md:w-64 opacity-20 pointer-events-none select-none z-10 hidden sm:block transform -translate-x-12 translate-y-12 scale-x-[-1]">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-accent w-full h-full">
          <path d="M200 200 C150 160, 100 130, 20 150 C10 130, 30 100, 70 90 C120 80, 160 110, 200 200 Z" />
          <path d="M200 200 C160 140, 120 100, 40 80 C30 65, 60 50, 95 60 C140 70, 170 120, 200 200 Z" />
          <path d="M200 200 C170 120, 140 80, 70 50 C60 30, 90 20, 125 35 C160 55, 180 110, 200 200 Z" />
        </svg>
      </div>

      {/* Decorative vertical timeline path */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="timeline-path !w-[2px] !bg-accent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Title Block */}
        <div className="text-center mb-28">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-accent/25 text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Journey</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight mt-6 font-plus-jakarta">
            The Path to <span className="text-gold-gradient">Perfection</span>
          </h2>
          <p className="text-gray-500 font-light mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            How we transform your architectural vision into a curated structural reality, guided by modern luxury design principles.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-24 md:space-y-36 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isLeft = idx % 2 === 0;
            const isDark = step.theme === "dark";

            return (
              <div
                key={step.num}
                className="relative flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-between"  >

                {/* 1. LEFT SIDE BLOCK */}
                <div className={`w-full md:w-[45%] flex ${isLeft ? "justify-end" : "justify-start order-2 md:order-1"}`}>
                  {isLeft ? (
                    /* Step Card (Left) */
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full relative group"
                    >
                      {/* Grid Dot Decorative background under card */}
                      <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-35 pointer-events-none hidden md:block bg-[radial-gradient(#C8A96A_1.5px,transparent_1.5px)] bg-[size:10px_10px]" />

                      <div
                        className="p-8 md:p-10 rounded-[2rem] w-full relative flex flex-col md:flex-row items-start gap-6 border transition-all duration-500 shadow-2xl bg-primary text-white border-white/5 hover:border-accent/40 hover:-translate-y-1.5"
                      >
                        {/* Huge outline step number */}
                        <div className="absolute right-8 top-4 font-black text-6xl md:text-7xl select-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent">
                          {step.num}
                        </div>

                        {/* Double bordered icon */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border bg-accent/10 border-accent/30 text-accent group-hover:bg-gold-gradient group-hover:text-primary transition-all duration-500">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        {/* Texts */}
                        <div className="text-left">
                          <span className="text-[10px] text-accent uppercase font-bold tracking-[0.2em] block mb-1">
                            Step {step.num}
                          </span>
                          <h3 className="text-2xl font-bold mb-3 font-plus-jakarta text-white">
                            {step.title}
                          </h3>
                          <p className="font-light text-sm leading-relaxed text-gray-300">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Image (Left) */
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full rounded-[2rem] overflow-hidden shadow-2xl border border-accent/10 group aspect-[4/3] max-h-[320px]"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  )}
                </div>

                {/* 2. CENTER NODE WITH DASH CONNECTIONS */}
                <div className="absolute left-[20px] md:left-1/2 top-10 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex items-center justify-center">

                  {/* Central Node Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#FCFAF6] border-2 border-accent flex items-center justify-center shadow-lg relative">
                    <div className="w-3.5 h-3.5 rounded-full bg-gold-gradient" />
                  </div>

                  {/* Left Dashed Horizontal Connector */}
                  <div className="absolute right-8 w-6 md:w-12 border-t border-dashed border-accent/40 hidden md:block" />
                  {/* Right Dashed Horizontal Connector */}
                  <div className="absolute left-8 w-6 md:w-12 border-t border-dashed border-accent/40 hidden md:block" />
                </div>

                {/* 3. RIGHT SIDE BLOCK */}
                <div className={`w-full md:w-[45%] flex ${isLeft ? "justify-start order-1 md:order-2 mt-6 md:mt-0" : "justify-end order-1 md:order-2"}`}>
                  {isLeft ? (
                    /* Image (Right) */
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full rounded-[2rem] overflow-hidden shadow-2xl border border-accent/10 group aspect-[4/3] max-h-[320px]"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  ) : (
                    /* Step Card (Right) */
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full relative group mt-6 md:mt-0"
                    >
                      {/* Grid Dot Decorative background beside card */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 opacity-35 pointer-events-none hidden md:block bg-[radial-gradient(#C8A96A_1.5px,transparent_1.5px)] bg-[size:10px_10px]" />

                      <div
                        className="p-8 md:p-10 rounded-[2rem] w-full relative flex flex-col md:flex-row items-start gap-6 border transition-all duration-500 shadow-2xl bg-white text-primary border-accent/15 hover:border-accent/40 hover:-translate-y-1.5"
                      >
                        {/* Huge outline step number */}
                        <div className="absolute right-8 top-4 font-black text-6xl md:text-7xl select-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-accent/15 to-transparent">
                          {step.num}
                        </div>

                        {/* Double bordered icon */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border bg-secondary border-accent/20 text-accent group-hover:bg-gold-gradient group-hover:text-primary transition-all duration-500">
                          <IconComponent className="w-6 h-6" />
                        </div>

                        {/* Texts */}
                        <div className="text-left">
                          <span className="text-[10px] text-accent uppercase font-bold tracking-[0.2em] block mb-1">
                            Step {step.num}
                          </span>
                          <h3 className="text-2xl font-bold mb-3 font-plus-jakarta text-primary">
                            {step.title}
                          </h3>
                          <p className="font-light text-sm leading-relaxed text-gray-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
