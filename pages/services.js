"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

import MainHeader from "@/components/MainHeader";
import FooterSection from "@/components/FooterSection";

import {
  FaTools,
  FaHome,
  FaRoad,
  FaPaintRoller,
  FaBuilding,
  FaTruck,
  FaSearch,
  FaShieldAlt,
  FaClipboardCheck,
  FaWrench,
} from "react-icons/fa";

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

/** ----------------------------
 *  HERO (Breadcrumb) SECTION
 * ---------------------------- */
const BreadcrumbHero = ({ title, subtitle }) => (
  <motion.section
    className="relative h-[50vh] min-h-[400px] bg-cover bg-center flex items-center justify-center text-white"
    style={{
      backgroundImage: "url('/images/breadcrumb-opt.webp')",
      backgroundPosition: "center 30%",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    aria-label={`${title} Services`}
  >
    <div
      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
      aria-hidden="true"
    />
    <motion.div
      className="relative z-10 text-center px-4"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {title} <span className="text-[#A9CF45]">Services</span>
      </h1>
      <motion.div
        className="w-24 h-1.5 bg-[#A9CF45] mx-auto mb-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  </motion.section>
);

/** ----------------------------
 *  SERVICE CARD
 * ---------------------------- */
const ServiceCard = ({ image, title, description, icon, slug }) => (
  <motion.article
    id={slug}
    className="bg-white rounded-xl overflow-hidden transition-all duration-300 border border-gray-200 group"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        priority={false}
        loading="lazy"
        quality={66}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"
        aria-hidden="true"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-[#A9CF45]/10 p-3 rounded-full text-[#A9CF45] group-hover:bg-[#A9CF45] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#A9CF45] transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.article>
);

/** ----------------------------
 *  SERVICES DATA
 * ---------------------------- */
const services = [
  {
    title: "Residential Building Construction",
    description:
      "Full-service residential construction, including houses, apartments, and estates, from concept to completion.",
    image: "/images/services/residential-opt.webp",
    icon: <FaHome className="text-xl" />,
  },
  {
    title: "Civil Engineering & Infrastructure",
    description:
      "Execution of civil works including road construction, stormwater systems, drainage, and structural foundations.",
    image: "/images/services/civil-opt.webp",
    icon: <FaRoad className="text-xl" />,
  },
  {
    title: "Site Preparation & Earthworks",
    description:
      "Land clearing, levelling, excavation, trenching, and compaction to ready sites for development.",
    image: "/images/services/earthworks-opt.webp",
    icon: <FaTools className="text-xl" />,
  },
  {
    title: "Renovations & Extensions",
    description:
      "Upgrades, modernizations, and structural expansions for homes and properties.",
    image: "/images/services/renovations-opt.webp",
    icon: <FaBuilding className="text-xl" />,
  },
  {
    title: "Painting, Plastering & Finishes",
    description:
      "Interior and exterior painting, plastering, and decorative coatings delivered to premium standards.",
    image: "/images/services/painting-opt.webp",
    icon: <FaPaintRoller className="text-xl" />,
  },
  {
    title: "Roof Maintenance and Waterproofing",
    description:
      "Expert roofing services including maintenance, leak repairs, and waterproofing to protect your property.",
    image: "/images/services/waterproofing-opt.webp",
    icon: <FaShieldAlt className="text-xl" />,
  },
  {
    title: "Scanning and Coring",
    description:
      "Detect embedded rebar and conduits to ensure safe modifications with accurate scanning and coring.",
    image: "/images/services/scanning-opt.webp",
    icon: <FaSearch className="text-xl" />,
  },
  {
    title: "Scaffolding & Safety Systems",
    description:
      "Erection of compliant scaffolding and protective site systems to ensure safe project execution.",
    image: "/images/services/scaffolding-opt.webp",
    icon: <FaTruck className="text-xl" />,
  },
  {
    title: "Project Planning & Site Supervision",
    description:
      "End-to-end project management, leadership, quality control, and schedule tracking.",
    image: "/images/services/project-planning-opt.webp",
    icon: <FaClipboardCheck className="text-xl" />,
  },
  {
    title: "General Maintenance & Repairs",
    description:
      "Ongoing property maintenance including structural, electrical, and plumbing repairs.",
    image: "/images/services/maintenance-opt.webp",
    icon: <FaWrench className="text-xl" />,
  },
];

/** ----------------------------
 *  PAGE
 * ---------------------------- */
export default function ServicesPage() {
  // Build JSON-LD OfferCatalog so Google understands your services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "KIVARI Services",
    url: "https://www.kivari.co.za/services",
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        areaServed: "ZA",
        provider: {
          "@type": "Organization",
          name: "KIVARI (Pty) Ltd",
          url: "https://www.kivari.co.za",
        },
      },
    })),
  };

  return (
    <>
      <SEO
        title="Services | KIVARI Construction"
        description="Explore KIVARI's full suite of construction services: residential building, civil engineering, earthworks, renovations, waterproofing, scaffolding, project supervision, and maintenance."
        url="https://www.kivari.co.za/services"
        image="/images/about/aboutus.jpg"
        keywords={[
          "construction services Midrand",
          "civil engineering services Gauteng",
          "residential construction company",
          "earthworks contractor South Africa",
          "roofing and waterproofing services",
          "scaffolding and safety systems",
          "project supervision services",
          "building maintenance contractor",
          "construction business support",
          "facility upgrade contractor",
        ]}
        faq={[
          {
            question: "Does KIVARI handle both residential and civil construction?",
            answer:
              "Yes. KIVARI handles residential building, civil infrastructure, earthworks, and related construction services.",
          },
          {
            question: "Can KIVARI manage a project from planning to completion?",
            answer:
              "Yes. KIVARI provides project planning, supervision, quality control, and turnkey execution support.",
          },
        ]}
      />

      <Head>
        {/* Preload hero for faster LCP on this page */}
        <link rel="preload" href="/images/breadcrumb-opt.webp" as="image" />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <MainHeader />

      <BreadcrumbHero
        title="Our"
        subtitle="Discover our comprehensive construction solutions"
      />

      <main>
        {/* Services grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What We <span className="text-[#A9CF45]">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                KIVARI provides a full suite of professional construction
                services, tailored to meet your project needs.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} slug={toSlug(service.title)} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="relative py-24 bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/images/cta/cta-bg-opt.webp')" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          aria-label="Get in touch"
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <motion.div
            className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-[#A9CF45]">Great</span> Together
            </h2>
            <p className="mb-8 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Whether it&apos;s a home, road, or infrastructure – KIVARI delivers
              excellence every time. Let&apos;s talk about your next project.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-[#A9CF45] hover:bg-[#8ab733] text-black px-8 py-4 rounded-lg font-semibold border border-[#A9CF45]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.section>
      </main>

      <FooterSection />
    </>
  );
}
