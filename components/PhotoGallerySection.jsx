'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaExpand, FaTimes } from 'react-icons/fa';

const galleryImages = [
  { 
    src: '/images/gallery/img1.jpg',
    title: 'Residential Complex',
    description: 'Modern apartment building with sustainable design features'
  },
  { 
    src: '/images/gallery/img2.jpg',
    title: 'Commercial Development',
    description: 'Office space with innovative architectural elements'
  },
  { 
    src: '/images/gallery/img3.jpg',
    title: 'Infrastructure Project',
    description: 'Road construction with precision engineering'
  },
  { 
    src: '/images/gallery/img4.jpg',
    title: 'Renovation Work',
    description: 'Historic building restoration preserving original character'
  },
  { 
    src: '/images/gallery/img5.jpg',
    title: 'Landscaping Project',
    description: 'Outdoor spaces designed for functionality and beauty'
  },
  { 
    src: '/images/gallery/img6.jpg',
    title: 'Interior Finishing',
    description: 'High-quality craftsmanship in every detail'
  },
];

export default function PhotoGallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Project <span className="text-[#A9CF45]">Gallery</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A glimpse into the work we've completed. From residential builds to infrastructure development — we deliver excellence.
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {image.description}
                </p>
              </div>
              
              {/* Expand Icon */}
              <div className="absolute top-4 right-4 bg-white/80 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExpand className="text-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                  <p className="text-white/90 mt-2">{selectedImage.description}</p>
                </div>
                
                <button
                  className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery"
                >
                  <FaTimes className="text-xl" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}