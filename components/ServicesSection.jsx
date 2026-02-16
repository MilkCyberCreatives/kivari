"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// Simple slug helper for per-service anchors or pages
const toSlug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const services = [
  {
    title: "Residential Building Construction",
    description:
      "Full-service residential construction, including houses, apartments, and estates, from concept to completion.",
    image: "/images/services/residential.jpg",
    features: ["Custom home building", "Multi-family units", "Turnkey solutions"],
  },
  {
    title: "Civil Engineering & Infrastructure",
    description:
      "Execution of civil works including road construction, stormwater systems, drainage, and structural foundations.",
    image: "/images/services/civil.jpg",
    features: ["Road construction", "Drainage systems", "Structural engineering"],
  },
  {
    title: "Site Preparation & Earthworks",
    description:
      "Land clearing, levelling, excavation, trenching, and compaction to ready sites for development.",
    image: "/images/services/earthworks.jpg",
    features: ["Land clearing", "Excavation", "Site grading"],
  },
  {
    title: "Renovations & Extensions",
    description:
      "Upgrades, modernizations, and structural expansions for homes and properties.",
    image: "/images/services/renovations.jpg",
    features: ["Home additions", "Structural upgrades", "Modernizations"],
  },
  {
    title: "Painting, Plastering & Finishes",
    description:
      "Interior and exterior painting, plastering, and decorative coatings delivered to premium standards.",
    image: "/images/services/painting.jpg",
    features: ["Residential painting", "Commercial painting", "Finishes"],
  },
];

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, when: "beforeChildren" },
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
              transition: { duration: 0.5, ease: "easeOut" },
            },
          },
    [reduceMotion]
  );

  return (
    <section id="services" className="py-20 bg-white">
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
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#A9CF45]">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            KIVARI offers a comprehensive portfolio of construction-related services
            tailored to meet the highest standards of quality and efficiency.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const slug = toSlug(service.title);
            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} – ${service.description}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FaCheckCircle
                      className="text-[#A9CF45] text-xl mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <span
                          className="w-2 h-2 rounded-full bg-[#A9CF45]"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="mt-4">
                    <Link
                      href={`/services#${slug}`}
                      className="inline-flex items-center text-[#A9CF45] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] rounded"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>Learn more</span>
                      <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-3.5 rounded-lg font-semibold border border-[#A9CF45]/30 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
          >
            View All Services
            <FaArrowRight className="transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
