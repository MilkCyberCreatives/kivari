'use client';
import React from 'react';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import { motion } from 'framer-motion';

// BreadcrumbHero Component
const BreadcrumbHero = ({ title, subtitle }) => (
  <motion.section
    className="relative h-[40vh] min-h-[300px] bg-fixed bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
    style={{ backgroundImage: "url('/images/breadcrumb.jpg')" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute inset-0 bg-[#000000]/80"></div>
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
        className="w-24 h-1 bg-[#A9CF45] mx-auto mb-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <p className="text-lg text-gray-200">{subtitle}</p>
    </motion.div>
  </motion.section>
);

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 cursor-pointer"
    whileHover={{ scale: 1.03 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#A9CF45] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </motion.div>
);

const services = [
  {
    title: 'Residential Building Construction',
    description: 'Full-service residential construction, including houses, apartments, and estates, from concept to completion.',
    image: '/images/services/residential.jpg'
  },
  {
    title: 'Civil Engineering & Infrastructure',
    description: 'Execution of civil works including road construction, stormwater systems, drainage, and structural foundations.',
    image: '/images/services/civil.jpg'
  },
  {
    title: 'Site Preparation & Earthworks',
    description: 'Land clearing, levelling, excavation, trenching, and compaction to ready sites for development.',
    image: '/images/services/earthworks.jpg'
  },
  {
    title: 'Renovations & Extensions',
    description: 'Upgrades, modernizations, and structural expansions for homes and properties.',
    image: '/images/services/renovations.jpg'
  },
  {
    title: 'Roof Construction & Waterproofing',
    description: 'Installation and repair of durable roofing systems and leak-proof waterproofing solutions.',
    image: '/images/services/roofing.jpg'
  },
  {
    title: 'Painting, Plastering & Finishes',
    description: 'Interior and exterior painting, plastering, and decorative coatings delivered to premium standards.',
    image: '/images/services/painting.jpg'
  },
  {
    title: 'Roof Maintenance and Waterproofing',
    description: 'Expert roofing services including maintenance, leak repairs, and waterproofing to protect your property.',
    image: '/images/services/waterproofing.jpg'
  },
  {
    title: 'Scanning and Coring',
    description: 'Detect embedded rebar, conduits, and ensure safe modifications through accurate scanning and coring.',
    image: '/images/services/scanning.jpg'
  },
  {
    title: 'Scaffolding & Safety Systems',
    description: 'Erection of compliant scaffolding and protective site systems to ensure safe project execution.',
    image: '/images/services/scaffolding.jpg'
  },
  {
    title: 'Project Planning & Site Supervision',
    description: 'End-to-end project management, leadership, quality control, and schedule tracking.',
    image: '/images/services/project-planning.jpg'
  },
  {
    title: 'General Maintenance & Repairs',
    description: 'Ongoing property maintenance including structural, electrical, and plumbing repairs.',
    image: '/images/services/maintenance.jpg'
  }
];

export default function ServicesPage() {
  return (
    <>
      <MainHeader />

      {/* Breadcrumb Hero */}
      <BreadcrumbHero
        title="Our"
        subtitle="Discover our wide range of offerings"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              What We <span className="text-[#A9CF45]">Offer</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              KIVARI provides a full suite of professional construction services, tailored to meet your project needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative py-24 bg-fixed bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something <span className="text-[#A9CF45]">Great</span> Together
          </h2>
          <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
            Whether it’s a home, road, or infrastructure – KIVARI delivers excellence every time. Let’s talk about your next project.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 5l7 7-7 7M5 12h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>

      <FooterSection />
    </>
  );
}
