'use client';
import React from 'react';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section
      className="relative bg-cover bg-center py-24 text-white"
      style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 animate-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-[#A9CF45]">Build With Us?</span>
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Contact KIVARI today and let’s bring your vision to life with expert craftsmanship.
        </p>
        <Link href="/contact">
          <button className="bg-[#A9CF45] hover:bg-[#8CBF3A] text-black px-6 py-3 rounded-md font-semibold shadow-md transition duration-300">
            Request Consultation
          </button>
        </Link>
      </div>
    </section>
  );
}
