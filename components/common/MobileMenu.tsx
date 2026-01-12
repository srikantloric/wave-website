"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

type NavItem = {
  name: string;
  path: string;
  hasDropdown: boolean;
};

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="min-[1300px]:hidden flex items-center">
      
      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open main menu" // <--- FIX: Accessible Name
        className="text-[#4a56a2] p-2 focus:outline-none hover:bg-gray-100 rounded-md transition-colors"
      >
        <FaBars className="text-2xl" />
      </button>

      {/* OVERLAY & DRAWER */}
      <div 
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* SIDE MENU PANEL */}
        <div 
          className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Stop click from closing when clicking inside drawer
        >
          
          {/* DRAWER HEADER */}
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <span className="font-bold text-[#4a56a2] text-lg">Menu</span>
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close main menu" // <--- FIX: Accessible Name
              className="text-gray-500 hover:text-red-500 p-2 focus:outline-none rounded-full hover:bg-red-50 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* DRAWER LINKS */}
          <div className="p-5 overflow-y-auto h-[calc(100%-80px)]">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-50 pb-2 last:border-0">
                  <div className="flex justify-between items-center">
                    <Link 
                        href={item.path} 
                        className={`text-base font-semibold transition-colors ${
                            pathname === item.path ? 'text-[#4a56a2]' : 'text-gray-800' // Contrast fix
                        }`}
                    >
                      {item.name}
                    </Link>
                    
                    {/* DROPDOWN TOGGLE (If item has dropdown) */}
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        aria-label={`Toggle ${item.name} submenu`} // <--- FIX: Accessible Name
                        className="p-2 text-gray-500 hover:text-[#4a56a2]"
                      >
                        {openDropdown === item.name ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                      </button>
                    )}
                  </div>

                  {/* SUBMENU (Simple placeholder logic) */}
                  {item.hasDropdown && openDropdown === item.name && (
                    <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-100 pl-4 animate-fadeIn">
                       {/* You can add real sub-links here later */}
                       <li>
                         <Link href="#" className="text-sm text-gray-600 hover:text-[#4a56a2]">
                            Overview
                         </Link>
                       </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA BUTTON IN MOBILE MENU */}
            <div className="mt-8">
                <Link href="/admission" className="block w-full text-center bg-[#4a56a2] text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">
                    Apply Now
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}