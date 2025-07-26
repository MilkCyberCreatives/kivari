// components/MobileNav.jsx
import React from "react";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  if (!menuOpen) return null;

  return (
    <div className="md:hidden bg-white text-black px-4 pb-4 border-t border-gray-200 shadow animate-fade-in-down">
      {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
          className="block py-3 px-2 text-gray-800 hover:text-[#A9CF45] hover:bg-gray-100 rounded-md transition duration-300 font-medium"
          onClick={() => setMenuOpen(false)}
        >
          {item}
        </a>
      ))}

      {/* Request Consultation - Mobile */}
      <a
        href="#contact"
        className="block mt-3 bg-[#A9CF45] text-black text-center px-4 py-2 rounded-md font-semibold shadow hover:bg-white transition duration-300"
        onClick={() => setMenuOpen(false)}
      >
        Request Consultation
      </a>
    </div>
  );
}
