'use client';
import React from 'react';
import { motion } from 'framer-motion';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import { FaBullseye, FaEye, FaChartLine } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Smoother easing curve
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // More natural stagger
      delayChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <MainHeader />

      {/* Hero Section - Enhanced with gradient overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-[#A9CF45]">Us</span>
          </h1>
          <motion.div 
            className="w-24 h-1.5 bg-[#A9CF45] mx-auto mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Learn more about who we are and what we do
          </p>
        </motion.div>
      </motion.section>

      {/* About Section - Improved layout */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div 
            className="space-y-6"
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              About <span className="text-[#A9CF45]">KIVARI</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              KIVARI is a dynamic construction company offering a full suite of residential, commercial, and civil building solutions. With a reputation for excellence, our experienced team ensures quality, compliance, and safety across every stage of your project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our leadership, skilled professionals, and dedication to client satisfaction make us the trusted partner in building your vision.
            </p>
            <motion.a
              href="images/documents/KIVARI-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#A9CF45] hover:bg-[#8ab733] text-black px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Company Profile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Image - Enhanced with border animation */}
          <motion.div 
            className="relative overflow-hidden rounded-xl shadow-2xl"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <img 
              src="/images/about/aboutus.jpg" 
              alt="About KIVARI" 
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 border-4 border-white/20 rounded-xl pointer-events-none"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Principles - Enhanced with icons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Group */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-[#A9CF45]">Core Principles</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The foundation of everything we do at KIVARI
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: <FaBullseye className="text-2xl" />,
                title: "Our Mission",
                content: "To deliver top-quality construction services that exceed client expectations and contribute to sustainable development."
              },
              {
                icon: <FaEye className="text-2xl" />,
                title: "Our Vision",
                content: "To be a recognized leader in the construction industry, known for innovation, reliability, and impact."
              },
              {
                icon: <FaChartLine className="text-2xl" />,
                title: "Our Objectives",
                content: "Drive quality, uphold safety, empower communities, and complete projects efficiently within budget and timeline."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#A9CF45]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#A9CF45]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#A9CF45] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced with dual buttons */}
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
            Let's Build Something <span className="text-[#A9CF45]">Great</span> Together
          </h2>
          <p className="mb-8 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Whether it's a home, road, or large-scale infrastructure – KIVARI is here to deliver. Reach out today to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-[#A9CF45] hover:bg-[#8ab733] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="tel:+27123456789"
              className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Call Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      <FooterSection />
    </>
  );
}