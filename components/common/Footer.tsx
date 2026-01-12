import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] text-white py-16 text-sm">
      
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg md:text-xl uppercase leading-snug">
              Wave International <br/> School
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Lorem ipsum od ohet dilogi. Bell trabel, samulgt, ohöbel utom diska. 
              Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning.
            </p>
          </div>

          {/* Column 2: Service (Likely External Links) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Service</h4>
            <ul className="space-y-3 text-gray-400 text-xs">
              {/* If these are external, simple <li> or <a> tags are fine */}
              <li className="hover:text-blue-400 cursor-pointer transition">Google Classroom</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Personal Portal</li>
              <li className="hover:text-blue-400 cursor-pointer transition">McGraw-Hill Portal</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Class Dojo</li>
            </ul>
          </div>

          {/* Column 3: Support (Internal Links) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Support</h4>
            <ul className="space-y-3 text-gray-400 text-xs">
              {/* Use Next.js Link for internal navigation */}
              <li>
                <Link href="/faqs" className="hover:text-blue-400 transition">FAQs</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-xs">
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-white text-xs" /> 
                <span className="hover:text-white cursor-pointer">+966(13)8504477</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-white text-xs" />
                <span className="hover:text-white cursor-pointer">info@randschools.edu.sa</span>
              </li>
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-white text-xs mt-0.5" />
                <span className="hover:text-white cursor-pointer leading-relaxed">
                  PO Box 9712, Dammam, 31423,<br/> Saudi Arabia
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;