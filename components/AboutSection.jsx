'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background Blueprint Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 bottom-0 pointer-events-none z-0"
      >
        <Image
          src="/images/bg-construction-blueprint.png"
          alt="Blueprint Background"
          width={500}
          height={500}
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* Left Image with Green Line and Animation */}
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 relative pl-6"
        >
          {/* Animated Green Vertical Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-0 top-0 h-full w-1 bg-[#A9CF45] rounded-full origin-top"
          />
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl group">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about-kivari.jpg"
                alt="About Kivari"
                width={600}
                height={500}
                className="rounded-xl w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </motion.div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Right Text Content */}
        <motion.div 
          variants={containerVariants}
          className="w-full lg:w-1/2 text-left space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            About <span className="text-[#A9CF45]">KIVARI</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed text-lg"
          >
            At KIVARI (Pty) Ltd, we specialize in high-quality residential construction. Our
            expert team brings years of hands-on experience to every project, ensuring a blend
            of functionality, safety, and visual appeal.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 leading-relaxed text-lg"
          >
            We take pride in turning visions into solid, lasting structures with attention to 
            detail and unmatched professionalism.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                More About Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "50+", label: "Projects Completed" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#A9CF45]">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}