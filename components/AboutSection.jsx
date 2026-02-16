"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.18, when: "beforeChildren" },
            },
          },
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          },
    [reduceMotion]
  );

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-x-0 -top-4 h-14 bg-gradient-to-b from-transparent via-white/8 to-white pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Decorative blueprint (aria-hidden) */}
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
        whileInView={reduceMotion ? { opacity: 0.05 } : { opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 bottom-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/bg-construction-blueprint-opt.webp"
          alt=""
          width={500}
          height={500}
          className="object-contain"
          loading="lazy"
          quality={65}
          sizes="(max-width: 1024px) 40vw, 500px"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* Left: Image with vertical accent */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative pl-6">
          {/* Animated accent line */}
          <motion.div
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={reduceMotion ? { scaleY: 1 } : { scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 top-0 h-full w-1 bg-[#A9CF45] rounded-full origin-top"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-xl border border-gray-200 group">
            <motion.div
              initial={reduceMotion ? false : { scale: 1.06 }}
              whileInView={reduceMotion ? false : { scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about-kivari-opt.webp"
                alt="KIVARI team delivering quality residential construction"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                // Not LCP-critical; keep lazy to save bandwidth
                loading="lazy"
                quality={68}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div variants={containerVariants} className="w-full lg:w-1/2 text-left space-y-6">
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            About <span className="text-[#A9CF45]">KIVARI</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
            At KIVARI (Pty) Ltd, we specialize in high-quality residential and civil construction. Our
            expert team brings years of hands-on experience to every project, ensuring a blend of
            functionality, safety, and visual appeal.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
            We turn visions into solid, lasting structures with meticulous attention to detail and
            unmatched professionalism across South Africa.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-3.5 rounded-lg font-semibold border border-[#A9CF45]/30 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
            >
              More About Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
