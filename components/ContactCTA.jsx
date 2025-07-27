'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactCTA() {
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
      className="relative bg-cover bg-center py-28 md:py-32 text-white overflow-hidden"
      style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
    >
      {/* Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0"
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#A9CF45] rounded-full"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Ready to <span className="text-[#A9CF45]">Build With Us?</span>
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Contact KIVARI today and let's bring your vision to life with expert craftsmanship.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2"
            >
              Request Consultation
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                &rarr;
              </motion.span>
            </motion.button>
          </Link>

          <Link href="tel:+27 71 902 0281">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2"
            >
              <FaPhone className="text-[#A9CF45]" />
              Call Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left"
        >
          {[
            {
              icon: <FaPhone className="text-2xl text-[#A9CF45]" />,
              title: "Phone",
              content: "+27 71 902 0281",
              href: "tel:+27719020281"
            },
            {
              icon: <FaEnvelope className="text-2xl text-[#A9CF45]" />,
              title: "Email",
              content: "info@kivari.co.za",
              href: "mailto:info@kivari.co.za"
            },
            {
              icon: <FaMapMarkerAlt className="text-2xl text-[#A9CF45]" />,
              title: "Location",
              content: "Johannesburg, South Africa",
              href: "https://maps.google.com"
            }
          ].map((item, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg group-hover:bg-[#A9CF45]/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-gray-300 text-sm font-medium">{item.title}</h3>
                  <p className="text-white font-semibold">{item.content}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}