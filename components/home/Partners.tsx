import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Partners = () => {
  const partners = [
    { name: 'McGraw Hill', src: '/images/partners/mcgraw.png', color: 'bg-red-600', textColor: 'text-white' },
    { name: 'Pearson', src: '/images/partners/pearson.png', color: 'bg-[#008cba]', textColor: 'text-white' },
    { name: 'Cognia', src: '/images/partners/cognia.png', color: 'bg-gray-300', textColor: 'text-gray-900' }, // Dark text for light bg
    { name: 'Ministry', src: '/images/partners/ministry.png', color: 'bg-[#009879]', textColor: 'text-white' },
  ];

  return (
    <div className="bg-white py-16 mb-4">
      
      {/* ALIGNMENT WRAPPER */}
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* INNER CONTENT CONSTRAINT */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Logos Grid + Navigation */}
          <div className="w-full md:w-1/2 flex items-center justify-center gap-4">
            
            <button 
              aria-label="Previous partner"
              className="w-10 h-10 rounded-full bg-white shadow-lg text-gray-400 flex items-center justify-center hover:bg-gray-50 transition flex-shrink-0 cursor-default"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Logo Grid Area */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 flex-1 max-w-sm">
               {partners.map((partner) => (
                 <div key={partner.name} className="relative aspect-square bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center p-4 overflow-hidden">
                    
                    {/* 1. The Optimized Image 
                       (Uncomment when images are ready in public/images/partners/)
                    */}
                    {/* <Image 
                      src={partner.src} 
                      alt={partner.name} 
                      fill 
                      className="object-contain p-4" 
                      sizes="(max-width: 768px) 150px, 200px"
                    /> 
                    */}

                    {/* 2. The Placeholder (With fixed contrast) */}
                    <div className={`w-full h-full ${partner.color} ${partner.textColor} text-[10px] flex items-center justify-center font-bold text-center`}>
                      {partner.name}
                    </div>
                 </div>
               ))}
            </div>

            {/* Next Button - Added aria-label for Accessibility */}
            <button 
              aria-label="Next partner"
              className="w-10 h-10 rounded-full bg-[#4a56a2] shadow-lg text-white flex items-center justify-center hover:bg-blue-800 transition flex-shrink-0 cursor-default"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We work with the <br /> Best Partners
            </h2>
            
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Partners;