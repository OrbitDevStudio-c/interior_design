import React from "react";
import { motion } from "framer-motion";
import {
  Sofa,
  ChefHat,
  Bed,
  Briefcase,
  Building,
  Layers,
  Lightbulb,
  Palette
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Living Room Design",
      desc: "Creating elegant, social spaces that capture personality with curated custom furniture layouts and textures.",
      icon: Sofa
    },
    {
      title: "Modular Kitchen",
      desc: "Combining high-end German engineering, state-of-the-art storage, and seamless layouts for modern culinary artists.",
      icon: ChefHat
    },
    {
      title: "Bedroom Interior",
      desc: "Designing tranquil, light-filled sanctuaries featuring cozy textiles, smart custom closets, and bespoke headboards.",
      icon: Bed
    },
    {
      title: "Office Interior",
      desc: "Crafting modern collaborative workspaces that foster high productivity, absolute comfort, and clear brand identity.",
      icon: Briefcase
    },
    {
      title: "Commercial Interior",
      desc: "Fusing luxury experiential layouts with smart spatial logistics for retail showrooms, restaurants, and lounges.",
      icon: Building
    },
    {
      title: "Furniture Design",
      desc: "Bespoke furniture pieces sculpted from premium oak, polished brass, marble, and hand-selected luxury upholstery.",
      icon: Palette
    },
    {
      title: "False Ceiling",
      desc: "Architectural ceiling designs incorporating floating layers, hidden sound systems, and premium profile lines.",
      icon: Layers
    },
    {
      title: "Lighting Design",
      desc: "Curating luxury ambient, accent, and task light networks to emphasize textures and shape mood dynamics.",
      icon: Lightbulb
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-gold">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 font-plus-jakarta">
            Bespoke Design Expertise
          </h2>
          <p className="text-gray-500 font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            From layout architectural design to raw custom finishing, we manage the entire project lifecycle for elite spaces.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glassmorphism-card p-8 rounded-2xl flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent mb-6 group-hover:bg-gold-gradient group-hover:text-primary transition-all duration-500 shadow-sm">
                    <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-3 font-plus-jakarta group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Accent line effect at the bottom */}
                <div className="w-0 h-0.5 bg-accent group-hover:w-12 mt-6 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
