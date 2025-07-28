'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Residential Building Construction',
    description: 'Full-service residential construction, including houses, apartments, and estates, from concept to completion.',
    image: '/images/services/residential.jpg',
    features: ['Custom home building', 'Multi-family units', 'Turnkey solutions']
  },
  {
    title: 'Civil Engineering & Infrastructure',
    description: 'Execution of civil works including road construction, stormwater systems, drainage, and structural foundations.',
    image: '/images/services/civil.jpg',
    features: ['Road construction', 'Drainage systems', 'Structural engineering']
  },
  {
    title: 'Site Preparation & Earthworks',
    description: 'Land clearing, levelling, excavation, trenching, and compaction to ready sites for development.',
    image: '/images/services/earthworks.jpg',
    features: ['Land clearing', 'Excavation', 'Site grading']
  },
  {
    title: 'Renovations & Extensions',
    description: 'Upgrades, modernizations, and structural expansions for homes and properties.',
    image: '/images/services/renovations.jpg',
    features: ['Home additions', 'Structural upgrades', 'Modernizations']
  },
  // {
  //   title: 'Roof Construction & Waterproofing',
  //   description: 'Installation and repair of durable roofing systems and leak-proof waterproofing solutions.',
  //   image: '/images/services/roofing.jpg',
  //   features: ['Roof installations', 'Waterproof membranes', 'Roof repairs']
  // },
  {
    title: 'Painting, Plastering & Finishes',
    description: 'Interior and exterior painting, plastering, and decorative coatings delivered to premium standards.',
    image: '/images/services/painting.jpg',
    features: ['Residential painting', 'Commercial painting &', 'Finishes']
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

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
            KIVARI offers a comprehensive portfolio of construction-related services tailored to meet the highest standards of quality and efficiency.
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <FaCheckCircle className="text-[#A9CF45] text-xl mt-0.5 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#A9CF45]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-4 flex items-center text-[#A9CF45] font-medium">
                  <span>Learn more</span>
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              View All Services
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}