import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu'; // Your client component
import {
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaChevronDown
} from 'react-icons/fa';

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'Admission', path: '/admission', hasDropdown: false },
    { name: 'CBSE Mandatory Disclosure', path: '/cbse-mandatory-disclosure', hasDropdown: false },
    // { name: 'Academics', path: '/academics', hasDropdown: true },
    // { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Gallery', path: '/gallery', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false },
    { name: 'About', path: '/about', hasDropdown: false },
  ];

  return (
    <header className="w-full font-sans relative z-50">
      {/* --- TOP BAR --- */}
      <div className="bg-primary text-white text-[11px] md:text-xs py-2 px-4 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[10px]" /><span>+91-7870232601</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[10px]" /><span>hello@waveinternationalschool.org</span>
          </div>
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-4 items-center">
          <span className="cursor-pointer hover:text-gray-200">Student Center</span>
          <div className="h-3 w-[1px] bg-white opacity-50 block"></div>
          <div className="flex gap-3 items-center">
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaTwitter className="cursor-pointer hover:text-gray-200" />
            <FaYoutube className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* --- MAIN NAV --- */}
      <nav className="bg-white py-2 px-4 lg:px-16 shadow-sm">
        <div className="flex justify-between items-center">

          {/* 1. LOGO SECTION */}
          <Link href="/" className="flex items-center gap-1 md:gap-1 group">
            {/* Logo Image */}
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image
                src="/wave-logo.png"
                alt="Wave International"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 48px, 64px"
              />
            </div>

            {/* Text Container */}
            <div className="flex flex-col">

              {/* Upper Section: WAVE + Vertical Stack */}
              <div className="flex items-center gap-2">
                <h1 className="text-3xl md:text-5xl font-black text-primary tracking-tighter leading-none">WAVE</h1>
                <div className="flex flex-col mt-1.5 items-start justify-center leading-none">
                  <span className="text-[10px] md:text-sm font-bold text-primary tracking-wider block">INTERNATIONAL</span>
                  <span className="text-[10px] md:text-sm font-bold text-primary tracking-wider block pt-[2px]">SCHOOL</span>
                </div>
              </div>

              {/* --- START: YOUR TAGLINE CODE --- */}
              <div className="flex items-center w-full mt-1">
                {/* Gradient Line Left */}
                <div className="h-[1px] bg-gradient-to-r from-transparent to-primary w-25 md:w-40"></div>

                {/* Tagline Text */}
                <span className="text-[7px] md:text-[9px] font-bold text-primary tracking-[0.2em] uppercase whitespace-nowrap px-2">
                  A Way of Success
                </span>

                {/* Gradient Line Right */}
                <div className="h-[1px] bg-gradient-to-l from-transparent to-primary w-full"></div>
              </div>
              {/* --- END: YOUR TAGLINE CODE --- */}

            </div>
          </Link>

          {/* 2. DESKTOP LINKS */}
          <ul className="hidden min-[1300px]:flex gap-8 font-medium text-gray-700 text-sm items-center">
            {navItems.map((item) => (
              <li key={item.name} className="flex items-center gap-1 hover:text-[#4a56a2] cursor-pointer transition-colors group">
                <Link href={item.path} className="flex items-center gap-1">
                  {item.name}
                  {item.hasDropdown && (
                    <FaChevronDown className="text-[10px] text-gray-500 group-hover:text-[#4a56a2] mt-[2px]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* 3. MOBILE MENU (Client Component) */}
          <MobileMenu navItems={navItems} />

        </div>
      </nav>
    </header>
  );
}