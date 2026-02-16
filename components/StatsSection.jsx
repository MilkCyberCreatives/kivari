"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaHardHat, FaTools, FaProjectDiagram, FaUsers } from "react-icons/fa";

const RAW_STATS = [
  { icon: <FaHardHat className="text-3xl" aria-hidden="true" />, value: 15, suffix: "+", label: "Years Experience", description: "Combined industry expertise" },
  { icon: <FaTools className="text-3xl" aria-hidden="true" />, value: 100, suffix: "+", label: "Projects Completed", description: "Across residential and commercial sectors" },
  { icon: <FaUsers className="text-3xl" aria-hidden="true" />, value: 80, suffix: "+", label: "Skilled Workers", description: "Certified professionals on our team" },
  { icon: <FaProjectDiagram className="text-3xl" aria-hidden="true" />, value: 50, suffix: "+", label: "Ongoing Projects", description: "Currently transforming visions into reality" },
];

/** Tiny, hydration-safe rAF count-up (respects prefers-reduced-motion) */
function CountUp({ to = 0, duration = 1200, suffix = "", reduced = false, className = "" }) {
  const [val, setVal] = useState(reduced ? to : 0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (reduced) {
      setVal(to);
      return;
    }
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * to));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [to, duration, reduced]);

  return <span className={className}>{val}{suffix}</span>;
}

export default function StatsSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
        : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, when: "beforeChildren" } } },
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } },
    [reduceMotion]
  );

  return (
    <section
      aria-labelledby="kivari-stats-heading"
      className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            id="kivari-stats-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            KIVARI in Numbers
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Our work speaks for itself. From years of hands-on experience to a skilled workforce and impressive project stats, we’ve built a track record of excellence.
          </motion.p>
        </motion.div>

        {/* Stats Grid (semantic definition list) */}
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {RAW_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={reduceMotion ? {} : { y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 border border-white/15 hover:border-white/25"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-full mb-6" aria-hidden="true">
                  {stat.icon}
                </div>

                <dt className="sr-only">{stat.label}</dt>
                <dd aria-label={stat.label}>
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    reduced={!!reduceMotion}
                    className="text-4xl lg:text-5xl font-bold mb-2"
                  />
                </dd>

                <p className="text-lg font-medium mb-2">{stat.label}</p>
                <p className="text-sm text-white/80">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.dl>

        {/* CTA */}
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-[#2f2f2f] px-8 py-4 rounded-lg font-bold border border-white/60 hover:bg-gray-100 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          >
            Start Your Project Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
