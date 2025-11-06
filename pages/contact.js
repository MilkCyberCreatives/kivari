"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import MainHeader from "@/components/MainHeader";
import FooterSection from "@/components/FooterSection";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const form = new FormData(e.currentTarget);
    // honeypot
    if (form.get("company")) {
      setStatus({ type: "error", message: "Something went wrong." });
      return;
    }

    // basic client-side validation
    const payload = {
      name: form.get("name")?.trim(),
      email: form.get("email")?.trim(),
      subject: form.get("subject")?.trim() || "",
      message: form.get("message")?.trim(),
      phone: form.get("phone")?.trim() || "",
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message.");
      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Failed to send message." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us | KIVARI Construction</title>
        <meta
          name="description"
          content="Get in touch with KIVARI Construction — Midrand, Gauteng. Phone +27 71 902 0281, email info@kivari.co.za."
        />
        <link rel="canonical" href="https://www.kivari.co.za/contact" />
        {/* JSON-LD for LocalBusiness (basic) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KIVARI (Pty) Ltd",
              url: "https://www.kivari.co.za",
              telephone: "+27719020281",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Midrand",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            }),
          }}
        />
      </Head>

      <MainHeader />

      {/* Hero (LCP-optimized) */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden"
        aria-label="Contact KIVARI"
      >
        <Image
          src="/images/breadcrumb.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
          aria-hidden="true"
        />
        <motion.div
          className="relative z-10 text-center px-4"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact <span className="text-[#A9CF45]">Us</span>
          </h1>
          <motion.div
            className="w-24 h-1.5 bg-[#A9CF45] mx-auto mb-4"
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-200">We would love to hear from you</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              whileHover={reduceMotion ? {} : { x: 5 }}
            >
              <div className="p-3 bg-[#A9CF45]/10 rounded-full">
                <FiMapPin className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">Midrand, Gauteng</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A9CF45] text-sm font-medium mt-2 inline-flex items-center hover:underline"
                >
                  View on map <FiSend className="ml-1" size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              whileHover={reduceMotion ? {} : { x: 5 }}
            >
              <div className="p-3 bg-[#A9CF45]/10 rounded-full">
                <FiPhone className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                <Link
                  href="tel:+27719020281"
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block mb-1"
                >
                  +27 71 902 0281
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              whileHover={reduceMotion ? {} : { x: 5 }}
            >
              <div className="p-3 bg-[#A9CF45]/10 rounded-full">
                <FiMail className="text-[#A9CF45] text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <Link
                  href="mailto:info@kivari.co.za"
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block mb-1"
                >
                  info@kivari.co.za
                </Link>
                <Link
                  href="mailto:support@kivari.co.za"
                  className="text-gray-600 hover:text-[#A9CF45] transition-colors block"
                >
                  support@kivari.co.za
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            noValidate
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>

            {/* honeypot */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiUser size={18} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FiPhone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                autoComplete="tel"
                className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FiMessageSquare size={18} />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#A9CF45] focus:border-transparent outline-none transition-all resize-none"
                rows={5}
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-[#A9CF45] to-[#8ab733] hover:from-[#8ab733] hover:to-[#7aa82d] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={submitting || reduceMotion ? {} : { scale: 1.02 }}
              whileTap={submitting || reduceMotion ? {} : { scale: 0.98 }}
              aria-live="polite"
            >
              <FiSend size={18} />
              {submitting ? "Sending..." : "Send Message"}
            </motion.button>

            {/* status message */}
            {status.message && (
              <p
                className={`mt-3 text-sm ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100 py-0" aria-label="Map">
        <div className="w-full h-96">
          <iframe
            title="KIVARI location — Midrand, Gauteng"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.105958742963!2d28.12630321500254!3d-25.999180983511317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9563c03bacc72d%3A0xf33cf71be61cf0e3!2sMidrand%2C%20Gauteng!5e0!3m2!1sen!2sza!4v1620300000000!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-b-xl"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <FooterSection />
    </>
  );
}
