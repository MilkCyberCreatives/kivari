'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function FooterSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com/kivari" },
    { icon: <FaTwitter />, url: "https://twitter.com/kivari" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/company/kivari" },
    { icon: <FaInstagram />, url: "https://instagram.com/kivari" }
  ];

  const quickLinks = [
    { name: "Home", href: "/index" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Midrand, Gauteng", href: "https://maps.google.com" },
    { icon: <FaPhoneAlt />, text: "+27 12 345 6789", href: "tel:+27123456789" },
    { icon: <FaEnvelope />, text: "info@kivari.co.za", href: "mailto:info@kivari.co.za" }
  ];

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.svg"
                alt="KIVARI Logo"
                width={180}
                height={58}
                className="hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Building excellence in every brick. KIVARI delivers quality construction solutions across South Africa.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#A9CF45] text-white hover:text-gray-900 p-3 rounded-full transition-all duration-300"
                  aria-label={`${social.url.split('.com/')[1]} social link`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#A9CF45] transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#A9CF45]"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#A9CF45] mt-0.5">{contact.icon}</span>
                  <a 
                    href={contact.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Contact */}
          <motion.div variants={itemVariants}>
  <h4 className="text-lg font-semibold mb-5 text-white">Quick Inquiry</h4>
  <form className="space-y-3">
    <input
      type="text"
      placeholder="Name"
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#A9CF45]"
    />
    <input
      type="tel"
      placeholder="Phone"
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:ring-2 focus:ring-[#A9CF45]"
    />
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-[#A9CF45] hover:bg-[#8ab733] text-gray-900 font-medium py-2 px-4 rounded-lg text-sm"
    >
      Request Callback
    </motion.button>
  </form>
  <p className="text-gray-500 text-xs mt-2">
    We will contact you within 24 hours
  </p>
</motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} KIVARI (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-[#A9CF45] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#A9CF45] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}