import { useState } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import MobileNav from "./MobileNav";
import Link from "next/link";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img
              src="/logo.svg"
              alt="KIVARI Logo"
              className="h-16 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/index.js"
            className="hover:text-[#A9CF45] font-medium transition duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A9CF45] hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </a>

          <Link
            href="/about"
            className="hover:text-[#A9CF45] font-medium transition duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A9CF45] hover:after:w-full after:transition-all after:duration-300"
          >
            About Us
          </Link>

          <a
            href="/services"
            className="hover:text-[#A9CF45] font-medium transition duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A9CF45] hover:after:w-full after:transition-all after:duration-300"
          >
            Services
          </a>

          <a
            href="#projects"
            className="hover:text-[#A9CF45] font-medium transition duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A9CF45] hover:after:w-full after:transition-all after:duration-300"
          >
            Projects
          </a>

          <a
            href="/contact"
            className="hover:text-[#A9CF45] font-medium transition duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A9CF45] hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>

          {/* Request Consultation Button */}
          <a
            href="/contact"
            className="ml-4 bg-[#A9CF45] text-black px-4 py-2 rounded-md font-semibold shadow-md hover:bg-white transition duration-300"
          >
            Request Consultation
          </a>

          {/* Phone & Email */}
          <div className="ml-6 flex items-center gap-3">
            {/* Phone Icon */}
            <a
              href="tel:+27812345678"
              className="rounded-full border-2 border-white p-2 hover:border-[#A9CF45] transition duration-300"
              aria-label="Call now"
            >
              <FaPhone className="text-xl" />
            </a>

            {/* Number and Email */}
            <div className="leading-tight text-sm">
              <a
                href="tel:+27812345678"
                className="block hover:text-[#A9CF45] transition duration-300"
              >
                +27 81 234 5678
              </a>
              <a
                href="mailto:info@kivari.co.za"
                className="text-gray-200 text-xs hover:text-[#A9CF45] transition duration-300"
              >
                info@kivari.co.za
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Component */}
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}
