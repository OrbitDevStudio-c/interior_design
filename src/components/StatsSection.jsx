import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  const stats = [
    { value: 250, suffix: "+", label: "Projects Completed" },
    { value: 180, suffix: "+", label: "Happy Clients" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 20, suffix: "+", label: "Design Experts" }
  ];

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Premium Luxury Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 z-0" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=40')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="space-y-2 md:space-y-4"
            >
              {/* Stat Value */}
              <div className="text-4xl md:text-6xl font-extrabold text-gold-gradient font-plus-jakarta tracking-tight">
                <CountUp to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              
              {/* Divider line */}
              <div className="w-10 h-[1px] bg-accent/40 mx-auto" />

              {/* Stat Label */}
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] font-medium font-outfit">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
