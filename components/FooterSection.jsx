'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function FooterSection() {
  const socials = [
    { href: 'https://facebook.com/kivari', Icon: FaFacebookF, label: 'Facebook' },
    { href: 'https://twitter.com/kivari', Icon: FaTwitter, label: 'Twitter' },
    { href: 'https://linkedin.com/company/kivari', Icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://instagram.com/kivari', Icon: FaInstagram, label: 'Instagram' },
  ];

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              width={180}
              height={58}
              alt="KIVARI logo"
              priority
            />
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            KIVARI delivers quality construction solutions across South Africa.
          </p>

          <div className="mt-5 flex gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#A9CF45] hover:text-gray-900 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-gray-400 hover:text-[#A9CF45] transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Midrand, Gauteng</li>
            <li>
              <a className="hover:text-white" href="tel:+27719020281">
                +27 71 902 0281
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="mailto:info@kivari.co.za">
                info@kivari.co.za
              </a>
            </li>
          </ul>
        </div>

        {/* Mini form (static) */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Inquiry</h4>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-[#A9CF45] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-[#A9CF45] focus:outline-none"
            />
            <button
              type="button"
              className="w-full rounded-lg bg-[#A9CF45] px-4 py-2 text-sm font-semibold text-gray-900 hover:opacity-90 transition"
            >
              Request Callback
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} KIVARI (Pty) Ltd. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#A9CF45]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#A9CF45]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
