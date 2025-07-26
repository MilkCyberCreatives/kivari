'use client';
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <MainHeader />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] min-h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-[#A9CF45]">Us</span></h1>
          <motion.div 
            className="w-24 h-1 bg-[#A9CF45] mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-gray-300">We'd love to hear from you</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-4 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#A9CF45]/10 rounded-full mt-1">
                <FiMapPin className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Office Address</h3>
                <p className="text-gray-600 text-sm">123 Main Street, Midrand, Gauteng, South Africa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#A9CF45]/10 rounded-full mt-1">
                <FiPhone className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                <a href="tel:+27812345678" className="text-gray-600 text-sm hover:text-[#A9CF45] transition-colors">+27 81 234 5678</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#A9CF45]/10 rounded-full mt-1">
                <FiMail className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                <a href="mailto:info@kivari.co.za" className="text-gray-600 text-sm hover:text-[#A9CF45] transition-colors">info@kivari.co.za</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Send us a message</h2>
            
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400 text-sm" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400 text-sm" />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMessageSquare className="text-gray-400 text-sm" />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition resize-none"
                rows="4"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-4 py-2 rounded font-semibold text-sm shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend size={16} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      <FooterSection />
    </>
  );
}