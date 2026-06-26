import React from "react";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Clock, ShieldCheck, Users, Gem } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Premium Quality",
      desc: "We source first-grade marbles, imported fixtures, and seasoned hardwoods to guarantee an outstanding, luxury finish.",
      icon: Crown
    },
    {
      title: "Creative Designs",
      desc: "Our concepts are strictly customized. We design from scratch to ensure your home reflects your absolute uniqueness.",
      icon: Sparkles
    },
    {
      title: "On-Time Delivery",
      desc: "With structured timelines and a professional PM dashboard, we consistently hand over projects exactly on schedule.",
      icon: Clock
    },
    {
      title: "Affordable Pricing",
      desc: "Complete luxury without hidden premiums. We optimize spatial engineering to offer high-end design value.",
      icon: ShieldCheck
    },
    {
      title: "Experienced Team",
      desc: "Led by designer Vansh and architect experts, our team possesses deep technical insights in structural and interior arts.",
      icon: Users
    },
    {
      title: "5+ Years Experience",
      desc: "A proven track record of designing high-end villas, apartments, and corporate offices with outstanding aesthetics.",
      icon: Gem
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative Gradient Ring */}
      <div className="absolute -left-12 bottom-0 w-96 h-96 border border-accent/10 rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-gold">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 font-plus-jakarta">
            Uncompromising Standards
          </h2>
          <p className="text-gray-500 font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            We deliver exceptional craftsmanship with absolute project transparency from start to finish.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="glassmorphism-card p-8 rounded-2xl relative group overflow-hidden"
              >
                {/* Themed Icon + Check Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-gold-gradient group-hover:text-primary transition-all duration-500">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* The Check Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center border border-green-500/20"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3 font-plus-jakarta">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {card.desc}
                </p>

                {/* Subtle side accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
