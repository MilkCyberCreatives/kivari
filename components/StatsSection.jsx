'use client';
import React from 'react';
import { FaHardHat, FaTools, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const stats = [
  {
    icon: <FaHardHat className="text-white text-3xl" />,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: <FaTools className="text-white text-3xl" />,
    value: '100+',
    label: 'Projects Completed',
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    value: '80+',
    label: 'Skilled Workers',
  },
  {
    icon: <FaProjectDiagram className="text-white text-3xl" />,
    value: '50+',
    label: 'Ongoing Projects',
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#A9CF45] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            KIVARI in Numbers
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Our work speaks for itself. From years of hands-on experience to a skilled workforce and impressive project stats, we’ve built a track record of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white/10 p-6 rounded-lg shadow-md animate-up cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-sm uppercase tracking-wider text-white/80 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
