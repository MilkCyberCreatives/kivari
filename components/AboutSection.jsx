'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Background Blueprint Image */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none z-0">
        <Image
          src="/images/bg-construction-blueprint.png"
          alt="Blueprint Background"
          width={500}
          height={500}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image with Green Line and Animation */}
        <div className="w-full md:w-1/2 relative pl-6">
          {/* Green Vertical Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-[#A9CF45] rounded-full" />
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src="/images/about-kivari.jpg"
              alt="About Kivari"
              width={600}
              height={500}
              className="rounded-lg transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0"></div>
          </div>
        </div>

        {/* Right Text (Static) */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#A9CF45]">KIVARI</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At KIVARI (Pty) Ltd, we specialize in high-quality residential construction. Our
            expert team brings years of hands-on experience to every project, ensuring a blend
            of functionality, safety, and visual appeal. We take pride in turning visions into
            solid, lasting structures with attention to detail and unmatched professionalism.
          </p>
          <Link href="/about">
            <button className="bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-6 py-3 rounded-md font-semibold shadow-md transition-colors duration-300">
              More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}