"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const rafId = useRef(null);
  const reduceMotion = useReducedMotion();
  const displayEmail = (process.env.NEXT_PUBLIC_DISPLAY_EMAIL || "info1.kivari@gmail.com").trim();
  const isHome = router.pathname === "/";

  // Close mobile menu on route change
  useEffect(() => {
    const handleRoute = () => setMenuOpen(false);
    router.events.on("routeChangeComplete", handleRoute);
    return () => router.events.off("routeChangeComplete", handleRoute);
  }, [router.events]);

  // Cheap, rAF-throttled scroll listener (passive) for better perf
  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const threshold = isHome ? 120 : 10;
        setScrolled(window.scrollY > threshold);
        rafId.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize on mount
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    // Simple active logic for Pages Router
    if (href.startsWith("#")) return false;
    return router.pathname === href;
  };

  // Animation helpers (respect reduced motion)
  const hoverScale = reduceMotion ? {} : { scale: 1.05 };
  const tapScale = reduceMotion ? {} : { scale: 0.95 };
  const wiggle = reduceMotion ? {} : { x: [0, 2, 0] };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "header-water bg-white/90 backdrop-blur-md border-b border-gray-200/70 text-gray-800"
          : "header-water bg-transparent text-white"
      }`}
    >
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-black/80 focus:text-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between gap-5">
        {/* Logo */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          animate={reduceMotion ? false : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" aria-label="KIVARI Home" className="inline-flex">
            <motion.div
              whileHover={hoverScale}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="h-14 md:h-16 w-auto"
            >
              {/* Use Next/Image to avoid layout shift & enable AVIF/WebP */}
              <Image
                src={scrolled ? "/logo2.svg" : "/logo.svg"}
                alt="KIVARI Logo"
                width={160}
                height={64}
                priority
                className="h-14 md:h-16 w-auto"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6"
          aria-label="Primary navigation"
          role="navigation"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative group water-hover rounded-md px-1.5 py-1 font-medium transition-colors duration-300 hover:text-[#A9CF45] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  active ? "text-[#A9CF45]" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#A9CF45] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* CTA Button */}
          <motion.div whileHover={hoverScale} whileTap={tapScale} className="ml-2">
            <Link
              href="/contact"
              className="water-hover bg-gradient-to-r from-[#A9CF45] to-[#8ab733] text-black px-5 py-2.5 rounded-md font-semibold border border-[#A9CF45]/30 transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
            >
              Request Consultation
              <motion.span
                animate={wiggle}
                transition={{ repeat: Infinity, duration: 1.5 }}
                aria-hidden="true"
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-2xl focus:outline-none z-50 p-1 rounded-md focus-visible:ring-2 focus-visible:ring-[#A9CF45]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          whileHover={hoverScale}
          whileTap={tapScale}
        >
          {menuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <MobileNav
              id="mobile-navigation"
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              navItems={navItems}
              phone="+27719020281"
              email={displayEmail}
              brandColor="#A9CF45"
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

