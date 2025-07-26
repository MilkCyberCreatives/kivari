import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-black/60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full h-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="max-w-2xl mt-32 md:mt-0 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            <span className="text-[#A9CF45]">Affordable</span> Price, <br />
            <span className="text-[#A9CF45]">Certified</span> Experts & <br />
            <span className="text-[#A9CF45]">Absolute</span> Solutions
          </h1>

          <p className="text-white text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            We pride ourselves on providing the best construction services currently available,
            utilizing the latest tools, technologies and efficient methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#A9CF45]/30"
            >
              More About Us
              <FaArrowRight />
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Our Services
              <FaArrowDown />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 flex justify-center items-end h-full w-full lg:w-auto animate-slide-in-right">
          <img
            src="/images/hero-person.png"
            alt="Hero Person"
            className="h-[60vh] md:h-[70vh] lg:h-[85vh] object-contain"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <FaArrowDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
