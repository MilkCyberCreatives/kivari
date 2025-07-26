'use client';
import React from 'react';
import Image from 'next/image';

const galleryImages = [
  '/images/gallery/img1.jpg',
  '/images/gallery/img2.jpg',
  '/images/gallery/img3.jpg',
  '/images/gallery/img4.jpg',
  '/images/gallery/img5.jpg',
  '/images/gallery/img6.jpg',
];

export default function PhotoGallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Project <span className="text-[#A9CF45]">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the work we’ve completed. From residential builds to infrastructure development — we deliver excellence.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md animate-up cursor-pointer"
            >
              <Image
                src={src}
                alt={`Project ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
