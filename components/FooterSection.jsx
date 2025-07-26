'use client';
import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="bg-[#1F1F1F] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left: Logo & Intro */}
        <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
          <div className="flex justify-center md:block">
            <Image
              src="/logo.svg"
              alt="KIVARI Logo"
              width={180}
              height={58}
              className="mb-2"
              priority
            />
          </div>
          <p className="text-sm text-gray-400 max-w-xs mx-auto md:mx-0">
            Building excellence in every brick. KIVARI delivers quality construction solutions across South Africa.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="w-full md:w-auto text-center mb-6 md:mb-0">
          <h4 className="font-semibold text-base mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/index.js" className="hover:text-[#A9CF45] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#A9CF45] transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#A9CF45] transition-colors">Our Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#A9CF45] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h4 className="font-semibold text-base mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#A9CF45]" />
              <span>123 Main Street, Johannesburg</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-[#A9CF45]" />
              <a href="tel:+27123456789" className="hover:text-[#A9CF45] transition-colors">+27 12 345 6789</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-[#A9CF45]" />
              <a href="mailto:info@kivari.co.za" className="hover:text-[#A9CF45] transition-colors">info@kivari.co.za</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-800 max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} KIVARI (Pty) Ltd. All rights reserved.
      </div>
    </footer>
  );
}