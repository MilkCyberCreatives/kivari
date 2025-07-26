'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaTools, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const stats = [
  {
    icon: <FaHardHat className="text-3xl" />,
    value: '15+',
    label: 'Years Experience',
    description: 'Combined industry expertise'
  },
  {
    icon: <FaTools className="text-3xl" />,
    value: '100+',
    label: 'Projects Completed',
    description: 'Across residential and commercial sectors'
  },
  {
    icon: <FaUsers className="text-3xl" />,
    value: '80+',
    label: 'Skilled Workers',
    description: 'Certified professionals on our team'
  },
  {
    icon: <FaProjectDiagram className="text-3xl" />,
    value: '50+',
    label: 'Ongoing Projects',
    description: 'Currently transforming visions into reality'
  },
];

export default function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] py-24 text-white">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            KIVARI in Numbers
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Our work speaks for itself. From years of hands-on experience to a skilled workforce and impressive project stats, we've built a track record of excellence.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/20 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-full mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-medium mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-white/80">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block bg-white text-[#A9CF45] px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 text-lg"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}