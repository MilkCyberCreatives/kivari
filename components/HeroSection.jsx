"use client";

import React, { useMemo, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function HeroSection({ scrollToRef }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

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
    const target =
      scrollToRef?.current ||
      document.querySelector("#about") ||
      sectionRef.current?.nextElementSibling;

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Deterministic particles so SSR and CSR match.
  const particles = useMemo(() => {
    const n = 8;
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
    <section ref={sectionRef} aria-label="KIVARI hero" className="hero-water relative w-full h-auto min-h-0 sm:h-[100svh] sm:min-h-[100svh] flex items-center overflow-hidden">
      <Image
        src="/images/hero-bg-opt.webp"
        alt=""
        fill
        priority
        quality={72}
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-black/48 z-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-[78%] bg-gradient-to-r from-black/86 via-black/68 to-transparent z-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/66 to-black/46 z-0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/84 via-black/56 to-transparent z-[2]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 sm:h-40 lg:h-56 bg-gradient-to-b from-transparent via-white/16 to-white z-[11] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-12 sm:h-20 lg:h-28 bg-gradient-to-t from-white/95 via-white/66 to-transparent z-[12] pointer-events-none"
        aria-hidden="true"
      />

      {!reduceMotion && (
        <div className="absolute inset-0 z-0 opacity-[0.16] hidden sm:block" aria-hidden="true">
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
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-0 sm:min-h-[100svh] flex flex-col lg:flex-row items-center justify-start lg:justify-between pt-24 sm:pt-24 md:pt-24 pb-6 sm:pb-14 lg:pb-8"
      >
        <div className="relative z-[13] max-w-2xl text-center lg:text-left lg:pr-6">
          <motion.h1
            variants={itemVariants}
            className="text-[2.85rem] leading-[0.92] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-5 sm:mb-6 [text-shadow:0_4px_18px_rgba(0,0,0,0.58)]"
          >
            <span className="text-[#A9CF45] block sm:inline">Build Better.</span>
            <span className="block sm:inline"> Build With</span>
            <br className="hidden sm:block" />
            <span className="text-[#A9CF45] block sm:inline">KIVARI.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white text-lg md:text-xl mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]"
          >
            Premium residential and civil construction delivered safely, on time, and with precision.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="/about"
              className="water-hover w-full sm:w-auto bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-[#A9CF45]/30 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
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
              className="water-hover w-full sm:w-auto bg-white/90 hover:bg-white text-gray-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 border border-white/60 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
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
          className="relative z-[9] mt-6 sm:mt-8 lg:mt-0 hidden md:flex justify-center items-end h-full w-full lg:w-[52%]"
        >
          <Image
            src="/images/hero-person-opt.webp"
            alt="KIVARI construction professional"
            width={720}
            height={960}
            quality={70}
            sizes="(max-width: 1024px) 64vw, 46vw"
            className="h-[34vh] sm:h-[46vh] md:h-[60vh] lg:h-[102vh] xl:h-[108vh] w-auto object-contain object-bottom"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 86%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 0%, black 86%, transparent 100%)",
            }}
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
        className="absolute bottom-2 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] rounded-full p-2"
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
