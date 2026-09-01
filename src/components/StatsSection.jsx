import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;
    const totalMs = duration * 1000;
    const increment = Math.max(Math.floor(totalMs / end), 20);
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMs / increment));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, increment);
    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const STATS = [
  { value: 250, suffix: "+", label: "PROJECTS BROUGHT TO LIFE",  sub: "RESIDENTIAL & COMMERCIAL" },
  { value: 180, suffix: "+", label: "PRIVATE CLIENTS SERVED",   sub: "MUMBAI, BANGALORE, DELHI" },
  { value: 5,   suffix: "+", label: "YEARS OF DESIGN MASTERY",  sub: "ESTABLISHED 2020" },
  { value: 20,  suffix: "+", label: "ARCHITECTURAL SPECIALISTS", sub: "ENGINEERS & DESIGN LEADS" },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 sm:py-36 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Eyebrow */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="chapter-tag block mb-3">
            RECORD OF IMPACT
          </span>
          <h2 className="display-title text-2xl sm:text-4xl md:text-5xl text-white">
            THE MEASURE OF{" "}
            <span className="text-copper-gradient font-light italic">
              EXCELLENCE
            </span>
          </h2>
        </div>

        {/* Giant Stats Grid (Nabil Issa Exact Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 hairline-t hairline-l">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-8 sm:p-12 hairline-r hairline-b bg-[#0b0b0b] hover:bg-[#121212] transition-colors flex flex-col justify-between space-y-6"
            >
              {/* Giant number */}
              <div className="display-hero text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter">
                <span className="text-copper-gradient font-extralight">
                  <CountUp to={stat.value} />
                </span>
                <span className="text-white/60 font-thin text-4xl sm:text-5xl">
                  {stat.suffix}
                </span>
              </div>

              {/* Labels */}
              <div className="space-y-1 hairline-t pt-4">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
                  {stat.label}
                </p>
                <p className="text-[9px] tracking-widest uppercase text-[#666]">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
