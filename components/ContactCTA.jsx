"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactCTA() {
  const reduceMotion = useReducedMotion();

  // Deterministic particle positions/sizes so SSR/CSR match
  const particles = useMemo(() => {
    const base = Array.from({ length: 12 }, (_, i) => i);
    return base.map((i) => {
      // simple deterministic math (no Math.random()) so hydration stays stable
      const w = 6 + ((i * 7) % 10); // 6..15
      const h = 6 + ((i * 11) % 10); // 6..15
      const top = (i * 17) % 100; // 0..99
      const left = (i * 29) % 100; // 0..99
      const driftY = ((i % 2 === 0 ? 1 : -1) * (10 + (i * 3) % 40)); // -50..50
      const driftX = ((i % 3 === 0 ? 1 : -1) * (6 + (i * 5) % 24));  // -30..30
      const duration = 10 + (i % 10); // 10..19
      const delay = (i % 5) * 0.3;
      return { w, h, top, left, driftY, driftX, duration, delay };
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const phoneDisplay = "+27 71 902 0281";
  const phoneHref = "tel:+27719020281";
  const email = "info@kivari.co.za";
  const mapsHref = "https://www.google.com/maps/search/?api=1&query=Johannesburg,+South+Africa";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KIVARI (Pty) Ltd",
    url: "https://www.kivari.co.za",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+27-71-902-0281",
        contactType: "customer service",
        areaServed: "ZA",
        availableLanguage: ["en"],
      },
    ],
  };

  return (
    <section
      id="contact-cta"
      className="relative bg-cover bg-center py-28 md:py-32 text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
      aria-label="Work with KIVARI"
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0"
        aria-hidden="true"
      />

      {/* Floating Particles (decorative) */}
      {!reduceMotion && (
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#A9CF45] rounded-full"
              style={{
                width: `${p.w}px`,
                height: `${p.h}px`,
                top: `${p.top}%`,
                left: `${p.left}%`,
              }}
              animate={{
                y: [0, p.driftY, 0],
                x: [0, p.driftX, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
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

      {/* JSON-LD for contact (SEO) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Ready to <span className="text-[#A9CF45]">Build With Us?</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90"
        >
          Contact KIVARI today and let&apos;s bring your vision to life with expert craftsmanship.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
            >
              Request Consultation
              <motion.span
                aria-hidden="true"
                animate={reduceMotion ? {} : { x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                &rarr;
              </motion.span>
            </motion.button>
          </Link>

          {/* tel: should NOT have spaces */}
          <Link href={phoneHref} className="inline-flex">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
            >
              <FaPhone className="text-[#A9CF45]" aria-hidden="true" />
              Call Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left"
        >
          {[
            {
              icon: <FaPhone className="text-2xl text-[#A9CF45]" aria-hidden="true" />,
              title: "Phone",
              content: phoneDisplay,
              href: phoneHref,
              external: false,
            },
            {
              icon: <FaEnvelope className="text-2xl text-[#A9CF45]" aria-hidden="true" />,
              title: "Email",
              content: email,
              href: `mailto:${email}`,
              external: false,
            },
            {
              icon: <FaMapMarkerAlt className="text-2xl text-[#A9CF45]" aria-hidden="true" />,
              title: "Location",
              content: "Johannesburg, South Africa",
              href: mapsHref,
              external: true,
            },
          ].map((item) => (
            <motion.a
              key={item.title}
              variants={itemVariants}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45]"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-[#A9CF45]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-gray-300 text-sm font-medium">{item.title}</h3>
                  <p className="text-white font-semibold">{item.content}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
