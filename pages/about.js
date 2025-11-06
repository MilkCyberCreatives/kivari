// pages/about.js
import React from 'react';
import Image from 'next/image';
import MainHeader from '../components/MainHeader';
import FooterSection from '../components/FooterSection';

export default function AboutPage() {
  return (
    <>
      <MainHeader />

      <section
        className="relative h-[50vh] min-h-[380px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/breadcrumb.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            About <span className="text-[#A9CF45]">Us</span>
          </h1>
          <div className="mx-auto h-1.5 w-24 bg-[#A9CF45]" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              About <span className="text-[#A9CF45]">KIVARI</span>
            </h2>
            <p className="text-lg text-gray-600">
              KIVARI is a dynamic construction company offering a full suite of residential,
              commercial, and civil building solutions. We deliver quality, compliance, and safety at
              every stage of your project.
            </p>
            <p className="text-lg text-gray-600">
              Our leadership, skilled professionals, and client-first culture make us a trusted
              partner in bringing your vision to life.
            </p>
            <a
              href="/images/documents/KIVARI-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#A9CF45] px-6 py-3 font-semibold text-black shadow hover:brightness-95 transition"
            >
              View Company Profile
            </a>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/about/aboutus.jpg"
              alt="About KIVARI"
              width={800}
              height={520}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl border-4 border-white/20" />
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('/images/cta/cta-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Let’s Build Something <span className="text-[#A9CF45]">Great</span> Together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            Whether it’s a home, road, or infrastructure – KIVARI delivers excellence every time.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-[#A9CF45] px-8 py-4 font-semibold text-black shadow hover:brightness-95 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
