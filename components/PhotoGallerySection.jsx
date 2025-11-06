"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FaExpand, FaTimes } from "react-icons/fa";

const galleryImages = [
  {
    src: "/images/gallery/img1.jpg",
    title: "Residential Complex",
    description: "Modern apartment building with sustainable design features",
  },
  {
    src: "/images/gallery/img2.jpg",
    title: "Commercial Development",
    description: "Office space with innovative architectural elements",
  },
  {
    src: "/images/gallery/img3.jpg",
    title: "Infrastructure Project",
    description: "Road construction with precision engineering",
  },
  {
    src: "/images/gallery/img4.jpg",
    title: "Renovation Work",
    description: "Historic building restoration preserving original character",
  },
  {
    src: "/images/gallery/img5.jpg",
    title: "Landscaping Project",
    description: "Outdoor spaces designed for functionality and beauty",
  },
  {
    src: "/images/gallery/img6.jpg",
    title: "Interior Finishing",
    description: "High-quality craftsmanship in every detail",
  },
];

export default function PhotoGallerySection() {
  const [activeIndex, setActiveIndex] = useState(null); // number | null
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef(null);

  const containerVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, when: "beforeChildren" },
            },
          },
    [reduceMotion]
  );

  const itemVariants = useMemo(
    () =>
      reduceMotion
        ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
        : {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          },
    [reduceMotion]
  );

  const open = (index) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const prev = () => setActiveIndex((i) => (i === null ? null : (i + galleryImages.length - 1) % galleryImages.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  // Body scroll lock + focus handling for dialog
  useEffect(() => {
    if (activeIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus trap inside dialog
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    // place initial focus
    const t = setTimeout(() => {
      dialogRef.current?.querySelector("button[aria-label='Close']")?.focus();
    }, 10);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKey);
      clearTimeout(t);
    };
  }, [activeIndex]);

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
            A glimpse into the work we&apos;ve completed. From residential builds to infrastructure development — we deliver excellence.
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {galleryImages.map((image, index) => (
            <motion.li
              key={image.src}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <button
                type="button"
                className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A9CF45] rounded-xl"
                onClick={() => open(index)}
                aria-label={`Open ${image.title} image`}
              >
                <Image
                  src={image.src}
                  alt={`${image.title} – ${image.description}`}
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {image.description}
                  </p>
                </div>

                {/* Expand Icon */}
                <div className="pointer-events-none absolute top-4 right-4 bg-white/80 text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExpand className="text-lg" />
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeIndex !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 bg-black/90 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
                aria-hidden="true"
              />
              {/* Dialog */}
              <motion.div
                key="dialog"
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Project image viewer"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                onClick={close}
              >
                <div
                  className="relative max-w-6xl w-full max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const img = galleryImages[activeIndex];
                    return (
                      <>
                        <Image
                          src={img.src}
                          alt={`${img.title} – ${img.description}`}
                          width={1600}
                          height={1066}
                          className="w-full h-full object-contain"
                          sizes="90vw"
                          priority
                        />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-white text-2xl font-bold">{img.title}</h3>
                          <p className="text-white/90 mt-2">{img.description}</p>
                        </div>
                      </>
                    );
                  })()}

                  {/* Controls */}
                  <div className="absolute inset-x-0 top-0 flex justify-between p-4">
                    <button
                      aria-label="Previous image"
                      onClick={prev}
                      className="rounded-md bg-white/80 hover:bg-white text-gray-900 px-3 py-2 font-semibold shadow"
                    >
                      ← Prev
                    </button>
                    <button
                      aria-label="Close"
                      onClick={close}
                      className="rounded-full bg-white text-gray-800 p-2 hover:bg-gray-200 transition-colors duration-200"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                    <button
                      aria-label="Next image"
                      onClick={next}
                      className="rounded-md bg-white/80 hover:bg-white text-gray-900 px-3 py-2 font-semibold shadow"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
