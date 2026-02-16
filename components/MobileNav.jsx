"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { createPortal } from "react-dom";

/**
 * Props
 * - id?: string (for aria-controls)
 * - menuOpen: boolean
 * - setMenuOpen: (boolean) => void
 * - navItems?: {name:string, href:string}[]
 * - phone?: string   e.g. "+27719020281"
 * - email?: string   e.g. "info1.kivari@gmail.com"
 * - brandColor?: string hex e.g. "#A9CF45"
 */
export default function MobileNav({
  id = "mobile-navigation",
  menuOpen,
  setMenuOpen,
  navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" },
  ],
  phone = "+27719020281",
  email = "info1.kivari@gmail.com",
  brandColor = "#A9CF45",
}) {
  const reduceMotion = useReducedMotion();
  const firstLinkRef = useRef(null);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Body scroll lock & initial focus
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus first link
    const t = setTimeout(() => firstLinkRef.current?.focus(), 10);

    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [menuOpen]);

  // Close on ESC + focus trap for TAB
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const focusables = containerRef.current?.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  // Motion variants (respect reduced motion)
  const containerVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.08, delayChildren: 0.12, when: "beforeChildren" },
        },
        exit: { opacity: 0, y: -20 },
      };

  const itemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } };

  const brandGradStyle = {
    backgroundImage: `linear-gradient(to right, ${brandColor}, #8ab733)`,
  };

  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  if (!mounted || !menuOpen) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="fixed inset-0 bg-black z-[100] md:hidden"
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        key="panel"
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        id={id}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="md:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 bg-white/95 backdrop-blur-sm z-[110] pt-3 px-5 overflow-y-auto"
      >
        {/* Title for a11y (visually hidden) */}
        <h2 id={`${id}-title`} className="sr-only">
          Mobile navigation
        </h2>

        {/* Links */}
        <motion.nav
          aria-label="Mobile primary"
          variants={containerVariants}
          className="flex flex-col space-y-3"
        >
          {navItems.map((item, i) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                className="block py-3 px-4 text-gray-800 hover:text-[#A9CF45] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45]"
                onClick={() => setMenuOpen(false)}
                ref={i === 0 ? firstLinkRef : undefined}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Contact */}
        <motion.div variants={itemVariants} className="mt-8 border-t border-gray-100 pt-6">
          <div className="space-y-4">
            <a
              href={telHref}
              className="flex items-center gap-3 text-gray-800 hover:text-[#A9CF45] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              <span className="bg-gray-100 p-3 rounded-full" aria-hidden="true">
                <FaPhone className="text-[#A9CF45]" />
              </span>
              <span className="font-medium">{phone.replace(/\s+/g, " ")}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-gray-800 hover:text-[#A9CF45] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              <span className="bg-gray-100 p-3 rounded-full" aria-hidden="true">
                <FaEnvelope className="text-[#A9CF45]" />
              </span>
              <span className="font-medium">{email}</span>
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-8 mb-12" whileTap={{ scale: 0.96 }}>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={brandGradStyle}
            className="block w-full text-black text-center px-6 py-3 rounded-xl font-semibold border border-[#A9CF45]/30 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45]"
          >
            Request Consultation
          </Link>
        </motion.div>
      </motion.div>
    </>,
    document.body
  );
}
