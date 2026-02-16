"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function HeroSection({ scrollToRef }) {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.18, delayChildren: 0.2 },
            },
          },
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
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

  const handleScrollClick = () => {
    scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Deterministic particles so SSR and CSR match.
  const particles = useMemo(() => {
    const n = 12;
    return Array.from({ length: n }, (_, i) => {
      const top = (i * 13) % 100;
      const left = (i * 21) % 100;
      const size = 6 + ((i * 7) % 10);
      const driftY = (i % 2 === 0 ? 1 : -1) * (10 + ((i * 3) % 40));
      const driftX = (i % 3 === 0 ? 1 : -1) * (6 + ((i * 5) % 24));
      const duration = 10 + (i % 8);
      const delay = (i % 4) * 0.25;
      return { top, left, size, driftY, driftX, duration, delay };
    });
  }, []);

  return (
    <section aria-label="KIVARI hero" className="relative w-full h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 z-0"
        aria-hidden="true"
      />

      {!reduceMotion && (
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#A9CF45] rounded-full"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              animate={{ y: [0, p.driftY, 0], x: [0, p.driftX, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-24 lg:pt-0"
      >
        <div className="max-w-2xl text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6"
          >
            <span className="text-[#A9CF45]">Build Better.</span>
            <br className="hidden sm:block" />
            Build With
            <br className="hidden sm:block" />
            <span className="text-[#A9CF45]">KIVARI.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            Premium residential and civil construction delivered safely, on time, and with precision.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/about"
              className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-[#A9CF45]/30 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
            >
              More About Us
              {!reduceMotion && (
                <motion.span aria-hidden="true" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <FaArrowRight />
                </motion.span>
              )}
            </Link>

            <Link
              href="/services"
              className="bg-white/90 hover:bg-white text-gray-800 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-white/60 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
            >
              Our Services
              {!reduceMotion && (
                <motion.span aria-hidden="true" animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <FaArrowDown />
                </motion.span>
              )}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          animate={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 lg:mt-0 flex justify-center items-end h-full w-full lg:w-auto"
        >
          <Image
            src="/images/hero-person.png"
            alt="KIVARI construction professional"
            width={720}
            height={960}
            priority
            sizes="(max-width: 1024px) 60vw, 40vw"
            className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] w-auto object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.button
        onClick={handleScrollClick}
        aria-label="Scroll to next section"
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={reduceMotion ? {} : { scale: 1.12 }}
        whileTap={reduceMotion ? {} : { scale: 0.92 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] rounded-full p-2"
        type="button"
      >
        {!reduceMotion ? (
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <FaArrowDown className="text-white text-3xl" />
          </motion.div>
        ) : (
          <FaArrowDown className="text-white text-3xl" />
        )}
      </motion.button>
    </section>
  );
}
