"use client"; // This small part runs on the client

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// Define the shape of your navigation items
type NavItem = {
  name: string;
  path: string;
  hasDropdown: boolean;
};

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-[1300px]:hidden">
      {/* 1. Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-700 focus:outline-none p-2"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* 2. Mobile Dropdown List */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50 animate-fadeIn">
          <ul className="flex flex-col gap-4 p-4 font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex justify-between items-center hover:text-[#4a56a2] cursor-pointer px-2 py-1"
                >
                  {item.name}
                  {item.hasDropdown && <FaChevronDown className="text-xs" />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials & Extras */}
          <div className="border-t border-gray-100 p-4 flex flex-col gap-3 text-sm text-gray-500">
             <span className="cursor-pointer hover:text-blue-600">Student Center</span>
             <span className="cursor-pointer hover:text-blue-600">E-School</span>
          </div>
          <div className="flex gap-6 justify-center pb-4 text-gray-400">
              <FaFacebookF className="hover:text-[#4a56a2]" />
              <FaTwitter className="hover:text-[#4a56a2]" />
              <FaYoutube className="hover:text-[#4a56a2]" />
              <FaInstagram className="hover:text-[#4a56a2]" />
          </div>
        </div>
      )}
    </div>
  );
}