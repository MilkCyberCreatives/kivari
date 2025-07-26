'use client';
import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: 'Residential Building Construction',
    description:
      'Full-service residential construction, including houses, apartments, and estates, from concept to completion.',
    image: '/images/services/residential.jpg',
  },
  {
    title: 'Civil Engineering & Infrastructure',
    description:
      'Execution of civil works including road construction, stormwater systems, drainage, and structural foundations.',
    image: '/images/services/civil.jpg',
  },
  {
    title: 'Site Preparation & Earthworks',
    description:
      'Land clearing, levelling, excavation, trenching, and compaction to ready sites for development.',
    image: '/images/services/earthworks.jpg',
  },
  {
    title: 'Renovations & Extensions',
    description:
      'Upgrades, modernizations, and structural expansions for homes and properties.',
    image: '/images/services/renovations.jpg',
  },
  {
    title: 'Roof Construction & Waterproofing',
    description:
      'Installation and repair of durable roofing systems and leak-proof waterproofing solutions.',
    image: '/images/services/roofing.jpg',
  },
  {
    title: 'Painting, Plastering & Finishes',
    description:
      'Interior and exterior painting, plastering, and decorative coatings delivered to premium standards.',
    image: '/images/services/painting.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-[#A9CF45]">Services</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            KIVARI offers a comprehensive portfolio of construction-related services tailored to meet the highest standards of quality and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <FaCheckCircle className="text-[#A9CF45] text-lg" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 no-underline cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
