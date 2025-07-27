import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const mobileNavItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: { opacity: 0, y: -20 },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function MobileNav({ menuOpen, setMenuOpen }) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-sm z-40 pt-4 px-6 overflow-y-auto"
        >
          {/* Navigation Links */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col space-y-3"
          >
            {mobileNavItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 text-gray-800 hover:text-[#A9CF45] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mt-8 border-t border-gray-100 pt-6"
          >
            <div className="space-y-4">
              <a
                href="tel:+27 71 902 0281"
                className="flex items-center gap-3 text-gray-800 hover:text-[#A9CF45] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <span className="bg-gray-100 p-3 rounded-full">
                  <FaPhone className="text-[#A9CF45]" />
                </span>
                <span className="font-medium">+27 71 902 0281</span>
              </a>

              <a
                href="mailto:info@kivari.co.za"
                className="flex items-center gap-3 text-gray-800 hover:text-[#A9CF45] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                <span className="bg-gray-100 p-3 rounded-full">
                  <FaEnvelope className="text-[#A9CF45]" />
                </span>
                <span className="font-medium">info@kivari.co.za</span>
              </a>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="mt-8 mb-10"
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="block w-full bg-gradient-to-r from-[#A9CF45] to-[#8ab733] text-black text-center px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Request Consultation
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}