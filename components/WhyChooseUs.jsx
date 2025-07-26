'use client';
import React from 'react';
import {
  FaUserTie,
  FaUsersCog,
  FaProjectDiagram,
  FaHandshake,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';

const reasons = [
  {
    icon: <FaUserTie className="text-3xl text-[#A9CF45]" />,
    title: 'Experienced Leadership',
    description: 'Backed by years of industry experience.',
  },
  {
    icon: <FaUsersCog className="text-3xl text-[#A9CF45]" />,
    title: 'Skilled Workforce',
    description: 'Engineers, artisans, and specialists under one roof.',
  },
  {
    icon: <FaProjectDiagram className="text-3xl text-[#A9CF45]" />,
    title: 'Turnkey Solutions',
    description: 'End-to-end construction project handling.',
  },
  {
    icon: <FaHandshake className="text-3xl text-[#A9CF45]" />,
    title: 'Client-First Culture',
    description: 'Tailored solutions and personalized service.',
  },
  {
    icon: <FaShieldAlt className="text-3xl text-[#A9CF45]" />,
    title: 'Safety & Compliance',
    description: 'Adhering to legal, environmental, and safety standards.',
  },
  {
    icon: <FaChartLine className="text-3xl text-[#A9CF45]" />,
    title: 'Proven Track Record',
    description: 'Successful delivery on diverse projects.',
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-[#A9CF45]">KIVARI</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re not just building structures — we’re building communities, empowering people, and delivering excellence through every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center animate-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
