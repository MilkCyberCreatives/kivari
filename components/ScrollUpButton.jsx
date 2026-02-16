"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const rafRef = useRef(null);

  // Efficient scroll tracking (throttled via rAF)
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > 300);
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="group fixed bottom-8 right-8 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] focus-visible:ring-offset-2"
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#A9CF45] to-[#8ab733] text-gray-900 p-4 rounded-full border border-[#A9CF45]/30 transition-all duration-300 flex items-center justify-center"
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -6, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            {!reduceMotion ? (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-[#A9CF45]/40"
                animate={{ scale: [1, 1.16, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : null}

            <motion.span
              animate={reduceMotion ? {} : { y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowUp className="text-2xl" />
            </motion.span>

            {/* Tooltip */}
            <motion.span
              className="absolute -bottom-8 text-xs font-medium text-gray-700 bg-white/80 px-2 py-0.5 rounded-md border border-gray-200 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              Back to top
            </motion.span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
