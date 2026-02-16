"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaUserTie,
  FaUsersCog,
  FaProjectDiagram,
  FaHandshake,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserTie className="text-3xl" aria-hidden="true" />,
    title: "Experienced Leadership",
    description: "Backed by years of industry experience.",
    features: ["20+ years combined experience", "Professional engineers", "Strategic planning"],
  },
  {
    icon: <FaUsersCog className="text-3xl" aria-hidden="true" />,
    title: "Skilled Workforce",
    description: "Engineers, artisans, and specialists under one roof.",
    features: ["Certified professionals", "Ongoing training", "Diverse expertise"],
  },
  {
    icon: <FaProjectDiagram className="text-3xl" aria-hidden="true" />,
    title: "Turnkey Solutions",
    description: "End-to-end construction project handling.",
    features: ["Design to completion", "Single point of contact", "Streamlined process"],
  },
  {
    icon: <FaHandshake className="text-3xl" aria-hidden="true" />,
    title: "Client-First Culture",
    description: "Tailored solutions and personalized service.",
    features: ["Customized approaches", "Transparent communication", "Dedicated support"],
  },
  {
    icon: <FaShieldAlt className="text-3xl" aria-hidden="true" />,
    title: "Safety & Compliance",
    description: "Adhering to legal, environmental, and safety standards.",
    features: ["OSHA compliant", "Regular safety audits", "Eco-friendly practices"],
  },
  {
    icon: <FaChartLine className="text-3xl" aria-hidden="true" />,
    title: "Proven Track Record",
    description: "Successful delivery on diverse projects.",
    features: ["100+ completed projects", "90% repeat clients", "On-time delivery"],
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
        : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, when: "beforeChildren" } } },
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
        : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } },
    [reduceMotion]
  );

  return (
    <section className="py-20 bg-gray-50" id="why-choose-us" aria-labelledby="why-heading">
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
            id="why-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-[#A9CF45]">KIVARI</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We’re not just building structures — we’re building communities, empowering people,
            and delivering excellence through every project.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={reduceMotion ? {} : { y: -5 }}
              className="bg-white p-8 rounded-xl transition-all duration-300 group border border-gray-200 hover:border-[#A9CF45]/40"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-[#A9CF45]/10 p-4 rounded-full text-[#A9CF45] group-hover:bg-[#A9CF45] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-[#7fb628] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-5 text-center">{item.description}</p>

              <ul className="space-y-2" role="list">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#A9CF45] flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        {/* Stats strip (semantic definition list) */}
        <motion.dl
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 bg-[#A9CF45] rounded-xl p-8 text-white"
        >
          {[
            { value: "20+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+", label: "Projects Completed" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd aria-label={stat.label} className="text-4xl font-bold mb-2">
                {stat.value}
              </dd>
              <div className="text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
