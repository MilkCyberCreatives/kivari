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

      {/* Hero Section - Enhanced with gradient overlay */}
      <section
        className="relative h-[50vh] min-h-[400px] bg-fixed bg-cover bg-center flex items-center justify-center text-white"
        style={{ 
          backgroundImage: "url('/images/breadcrumb.jpg')",
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact <span className="text-[#A9CF45]">Us</span>
          </h1>
          <motion.div 
            className="w-24 h-1.5 bg-[#A9CF45] mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-200">We would love to hear from you</p>
        </motion.div>
      </section>

      {/* Contact Section - Enhanced with better spacing and animations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info - Enhanced with hover effects */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-[#A9CF45]/10 rounded-full">
                <FiMapPin className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Office Address</h3>
                <p className="text-gray-600">Midrand, Gauteng</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A9CF45] text-sm font-medium mt-2 inline-flex items-center hover:underline"
                >
                  View on map <FiSend className="ml-1" size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-[#A9CF45]/10 rounded-full">
                <FiPhone className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                <a 
                  href="tel:+27719020281"
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block mb-1"
                >
                  +27 71 902 0281
                </a>
                <a 
                  href="tel:+27719020281" 
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block"
                >
                  +27 71 902 0281
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-[#A9CF45]/10 rounded-full">
                <FiMail className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <a 
                  href="mailto:info@kivari.co.za" 
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block mb-1"
                >
                  info@kivari.co.za
                </a>
                <a 
                  href="mailto:support@kivari.co.za" 
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block"
                >
                  support@kivari.co.za
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Enhanced with better styling */}
          <motion.form 
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiUser size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FiMessageSquare size={18} />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all resize-none"
                rows="5"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend size={18} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Map Section - Added for better UX */}
      <section className="bg-gray-100 py-0">
        <div className="max-w-6xl mx-auto h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.620763958015!2d28.13773831502894!3d-26.18398798344888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9513c7b5a6a3a1%3A0x9a3a9b3b3b3b3b3b!2s123%20Main%20St%2C%20Midrand%2C%20Gauteng%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-b-xl"
          ></iframe>
        </div>
      </section>

      <FooterSection />
    </>
  );
}