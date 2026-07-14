import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, Users, Code, PenTool } from "lucide-react";

export default function About() {
  const stats = [
    { value: "250+", label: "Projects Completed", icon: Award },
    { value: "180+", label: "Happy Clients", icon: Users },
    { value: "5+", label: "Years Experience", icon: Compass },
    { value: "20+", label: "Design Experts", icon: Users }
  ];

  return (
    <section id="about" className="py-24 bg-[#0C1220] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="ambient-glow ambient-glow-primary w-[600px] h-[600px] top-1/4 -left-[200px]" />
      {/* Decorative Subtle Background Text */}
      <div className="absolute right-0 top-1/4 text-white/5 font-extrabold text-[12vw] tracking-widest pointer-events-none select-none -z-10 leading-none">
        CREATIVE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center md:text-left mb-16 relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-premium">
            About Aura
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mt-4 font-plus-jakarta">
            Luxury Crafted By Visionaries
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Presentation (Left 5 Cols) */}
          <div className="lg:col-span-5 relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/5">
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=40"
                alt="Luxury Interior Living Room"
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Glassmorphic Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-premium-gradient flex items-center justify-center text-white border border-white/10 font-bold text-lg">
                    5+
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Years of Excellence</h4>
                    <p className="text-gray-300 text-xs font-light">Redefining modern spaces</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Secondary floating decorative frame */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-accent/25 rounded-2xl -z-10 pointer-events-none hidden md:block" />
          </div>

          {/* Texts & Credits (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div className="space-y-4">
              <p className="text-lg text-[#F3F6FF] font-light leading-relaxed">
                AURA Design Studio is a premier interior architecture firm dedicated to creating bespoke luxury environments. We believe that exceptional design is a perfect synthesis of beauty, innovation, and personalization.
              </p>
              <p className="text-[#A9B5CF] font-light leading-relaxed">
                Our approach is deeply collaborative, mapping our clients' lifestyles and aspirations to formulate functional masterpieces. From majestic penthouses to modern minimalist villas, we elevate spaces into works of art.
              </p>
            </div>

            {/* Meet the Visionaries */}
            <div className="border-t border-white/5 pt-8">
              <h3 className="text-xs uppercase tracking-widest text-[#7F8CA8] font-bold mb-6">
                The Curators Behind The Work
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Designer Credit */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent shrink-0 shadow-sm">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-plus-jakarta text-sm">Vansh</h4>
                    <p className="text-xs text-accent uppercase tracking-widest font-semibold mt-0.5">Lead Interior Designer</p>
                    <p className="text-xs text-[#8F9CB5] font-light leading-relaxed mt-2">
                      Vansh merges timeless classic styles with sharp contemporary angles, creating beautiful, functional visual statements.
                    </p>
                  </div>
                </div>

                {/* Developer Credit */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent shrink-0 shadow-sm">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-plus-jakarta text-sm">Ridham</h4>
                    <p className="text-xs text-accent uppercase tracking-widest font-semibold mt-0.5">Lead Frontend Engineer</p>
                    <p className="text-xs text-[#8F9CB5] font-light leading-relaxed mt-2">
                      Ridham transforms artistic concepts into smooth, high-performing responsive interfaces with zero layout shift.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="p-4 glass-card group">
                    <div className="text-2xl md:text-3xl font-extrabold text-white font-plus-jakarta mb-1 group-hover:text-accent transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#7F8CA8] font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
