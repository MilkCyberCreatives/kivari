'use client';
import React from 'react';
import Image from 'next/image';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import { motion } from 'framer-motion';
import { 
  FaHardHat, 
  FaTools, 
  FaHome, 
  FaRoad, 
  FaPaintRoller, 
  FaBuilding,
  FaTruck,
  FaSearch,
  FaShieldAlt,
  FaClipboardCheck,
  FaWrench
} from 'react-icons/fa';

const BreadcrumbHero = ({ title, subtitle }) => (
  <motion.section
    className="relative h-[50vh] min-h-[400px] bg-fixed bg-cover bg-center flex items-center justify-center text-white"
    style={{ 
      backgroundImage: "url('/images/breadcrumb.jpg')",
      backgroundPosition: 'center 30%'
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
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

const ServiceCard = ({ image, title, description, icon }) => (
  <motion.div
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    whileHover={{ 
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }}
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
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-[#A9CF45]/10 p-3 rounded-full text-[#A9CF45] group-hover:bg-[#A9CF45] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#A9CF45] transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const services = [
  {
    title: 'Residential Building Construction',
    description: 'Full-service residential construction, including houses, apartments, and estates, from concept to completion.',
    image: '/images/services/residential.jpg',
    icon: <FaHome className="text-xl" />
  },
  {
    title: 'Civil Engineering & Infrastructure',
    description: 'Execution of civil works including road construction, stormwater systems, drainage, and structural foundations.',
    image: '/images/services/civil.jpg',
    icon: <FaRoad className="text-xl" />
  },
  {
    title: 'Site Preparation & Earthworks',
    description: 'Land clearing, levelling, excavation, trenching, and compaction to ready sites for development.',
    image: '/images/services/earthworks.jpg',
    icon: <FaTools className="text-xl" />
  },
  {
    title: 'Renovations & Extensions',
    description: 'Upgrades, modernizations, and structural expansions for homes and properties.',
    image: '/images/services/renovations.jpg',
    icon: <FaBuilding className="text-xl" />
  },
  // {
  //   title: 'Roof Construction & Waterproofing',
  //   description: 'Installation and repair of durable roofing systems and leak-proof waterproofing solutions.',
  //   image: '/images/services/roofing.jpg',
  //   icon: <FaHardHat className="text-xl" />
  // },
  {
    title: 'Painting, Plastering & Finishes',
    description: 'Interior and exterior painting, plastering, and decorative coatings delivered to premium standards.',
    image: '/images/services/painting.jpg',
    icon: <FaPaintRoller className="text-xl" />
  },
  {
    title: 'Roof Maintenance and Waterproofing',
    description: 'Expert roofing services including maintenance, leak repairs, and waterproofing to protect your property.',
    image: '/images/services/waterproofing.jpg',
    icon: <FaShieldAlt className="text-xl" />
  },
  {
    title: 'Scanning and Coring',
    description: 'Detect embedded rebar, conduits, and ensure safe modifications through accurate scanning and coring.',
    image: '/images/services/scanning.jpg',
    icon: <FaSearch className="text-xl" />
  },
  {
    title: 'Scaffolding & Safety Systems',
    description: 'Erection of compliant scaffolding and protective site systems to ensure safe project execution.',
    image: '/images/services/scaffolding.jpg',
    icon: <FaTruck className="text-xl" />
  },
  {
    title: 'Project Planning & Site Supervision',
    description: 'End-to-end project management, leadership, quality control, and schedule tracking.',
    image: '/images/services/project-planning.jpg',
    icon: <FaClipboardCheck className="text-xl" />
  },
  {
    title: 'General Maintenance & Repairs',
    description: 'Ongoing property maintenance including structural, electrical, and plumbing repairs.',
    image: '/images/services/maintenance.jpg',
    icon: <FaWrench className="text-xl" />
  }
];

export default function ServicesPage() {
  return (
    <>
      <MainHeader />

      <BreadcrumbHero
        title="Our"
        subtitle="Discover our comprehensive construction solutions"
      />

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
              KIVARI provides a full suite of professional construction services, tailored to meet your project needs.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="relative py-24 bg-fixed bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build Something <span className="text-[#A9CF45]">Great</span> Together
          </h2>
          <p className="mb-8 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Whether it&apos;s a home, road, or infrastructure – KIVARI delivers excellence every time. Let&apos;s talk about your next project.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center bg-[#A9CF45] hover:bg-[#8ab733] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>

      <FooterSection />
    </>
  );
}
