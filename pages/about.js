'use client';
import React from 'react';
import { motion } from 'framer-motion';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <MainHeader />

      {/* Hero Section */}
      <motion.section 
        className="relative h-[40vh] min-h-[300px] bg-fixed bg-cover bg-center flex items-center justify-center text-white overflow-hidden cursor-default"
        style={{ backgroundImage: "url('/images/breadcrumb.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[#000000]/80"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 cursor-default">
            About <span className="text-[#A9CF45]">Us</span>
          </h1>
          <motion.div 
            className="w-24 h-1 bg-[#A9CF45] mx-auto mb-4 cursor-default"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-lg text-gray-200 cursor-default">
            Learn more about who we are and what we do
          </p>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 bg-white overflow-hidden cursor-default"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div 
            className="space-y-6"
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-gray-800 cursor-default">
              About <span className="text-[#A9CF45]">KIVARI</span>
            </h2>
            <p className="text-gray-700 leading-relaxed cursor-default">
              KIVARI is a dynamic construction company offering a full suite of residential, commercial, and civil building solutions. With a reputation for excellence, our experienced team ensures quality, compliance, and safety across every stage of your project.
            </p>
            <p className="text-gray-700 leading-relaxed cursor-default">
              Our leadership, skilled professionals, and dedication to client satisfaction make us the trusted partner in building your vision.
            </p>
            <motion.a
              href="images/documents/KIVARI-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A9CF45] text-black px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-[#8CBF3A] transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Company Profile
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
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
          >
            <img 
              src="/images/about/aboutus.jpg" 
              alt="About KIVARI" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 border-4 border-white/20 rounded-xl pointer-events-none"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission, Vision, Objectives */}
      <section className="py-20 bg-gray-50 overflow-hidden cursor-default">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading Group */}
          <div className="text-center mb-16 cursor-default">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-[#A9CF45]">Core Principles</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The foundation of everything we do at KIVARI
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Our Mission",
                content: "To deliver top-quality construction services that exceed client expectations and contribute to sustainable development."
              },
              {
                title: "Our Vision",
                content: "To be a recognized leader in the construction industry, known for innovation, reliability, and impact."
              },
              {
                title: "Our Objectives",
                content: "Drive quality, uphold safety, empower communities, and complete projects efficiently within budget and timeline."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[#A9CF45]/10 rounded-full flex items-center justify-center mx-auto mb-4 cursor-default">
                  <div className="w-8 h-8 bg-[#A9CF45] rounded-full flex items-center justify-center text-white cursor-default">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#A9CF45] mb-3 cursor-default">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed cursor-default">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative py-24 bg-fixed bg-cover bg-center text-white overflow-hidden cursor-default"
        style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 cursor-default">
            Let's Build Something <span className="text-[#A9CF45]">Great</span> Together
          </h2>
          <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto cursor-default">
            Whether it's a home, road, or large-scale infrastructure – KIVARI is here to deliver. Reach out today to discuss your next project.
          </p>
          <motion.a
            href="/#contact"
            className="inline-flex items-center bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <FooterSection />
    </>
  );
}