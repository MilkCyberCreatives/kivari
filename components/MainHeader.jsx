import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import Link from "next/link";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/">
            <motion.img
              src="/logo.svg"
              alt="KIVARI Logo"
              className="h-14 md:h-16 w-auto cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group font-medium transition-colors duration-300 hover:text-[#A9CF45]"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A9CF45] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA Button with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] text-black px-5 py-2.5 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Request Consultation
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <div className="ml-6 flex items-center gap-3">
            <motion.a
              href="tel:+27812345678"
              className="rounded-full border-2 p-2 hover:border-[#A9CF45] hover:bg-[#A9CF45]/10 transition-colors duration-300"
              aria-label="Call now"
              whileHover={{ rotate: 15 }}
            >
              <FaPhone className="text-lg" />
            </motion.a>

            <div className="leading-tight text-sm">
              <a
                href="tel:+27812345678"
                className="block hover:text-[#A9CF45] transition-colors duration-300 font-medium"
              >
                +27 81 234 5678
              </a>
              <a
                href="mailto:info@kivari.co.za"
                className="flex items-center gap-1 text-xs hover:text-[#A9CF45] transition-colors duration-300"
              >
                <FaEnvelope className="text-xs" />
                info@kivari.co.za
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-2xl focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <FaTimes className="text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </motion.button>

        {/* Mobile Navigation with animation */}
        <AnimatePresence>
          {menuOpen && (
            <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}