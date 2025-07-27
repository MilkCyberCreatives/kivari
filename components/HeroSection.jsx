import React, { useRef } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";

export default function HeroSection({ scrollToRef }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleScrollClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preload" href="/images/hero-person.png" as="image" />
      </Head>

      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 z-0"></div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 z-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#A9CF45] rounded-full"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 100],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-24 lg:pt-0"
        >
          {/* Text Section */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              <span className="text-[#A9CF45]">Affordable</span> Price,{" "}
              <motion.br
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
              <span className="text-[#A9CF45]">Certified</span> Experts &{" "}
              <motion.br
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              <span className="text-[#A9CF45]">Absolute</span> Solutions
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              We pride ourselves on providing the best construction services
              currently available, utilizing the latest tools, technologies and
              efficient methods.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#A9CF45]/30 text-lg"
              >
                More About Us
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.a>

              <motion.a
                href="services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 hover:bg-white text-gray-800 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Our Services
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaArrowDown />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 lg:mt-0 flex justify-center items-end h-full w-full lg:w-auto"
          >
            <motion.img
              src="/images/hero-person.png"
              alt="Construction Professional"
              className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] object-contain"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                type: "spring",
                damping: 10,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.button
          onClick={handleScrollClick}
          aria-label="Scroll to next section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 bg-transparent border-none cursor-pointer focus:outline-none"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaArrowDown className="text-white text-3xl" />
          </motion.div>
        </motion.button>
      </section>
    </>
  );
}