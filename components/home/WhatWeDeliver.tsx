import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaVolumeUp, FaEllipsisV } from 'react-icons/fa';

const WhatWeDeliver = () => {
  return (
    // 1. OUTER WRAPPER: Full width (w-full) with White Background (bg-white)
    <section className="w-full bg-white py-12 lg:py-20">
      
      {/* 2. INNER CONTAINER: Constrains the content to the center */}
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* 3. LAYOUT GRID: Keeps the content layout tight (max-w-6xl) */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Text Content */}
          <div className="w-full lg:flex-1">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              At Wave we deliver <br /> quality education
            </h2>
            
            <p className="text-gray-500 text-base xl:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg">
              We have commitment to improve the teaching and learning in the school community
              by delivering rich, high quality program of international education that shares a
              powerful vision and develops the intellectual, personal, emotional and social skills 
              needed to live, learn and work in a rapidly globalizing world.
            </p>
            
            <Link href="/contact">
              <button className="bg-[#4a56a2] text-white px-8 py-3 md:px-10 md:py-3 rounded-full hover:bg-blue-800 transition shadow-md font-medium text-sm xl:text-base">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Image/Media Grid */}
          <div className="w-full lg:flex-1 flex gap-4 md:gap-6 relative">
            
            {/* Column 1: Girl Image + Audio Player */}
            <div className="w-1/2 flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                      <Image 
                        src="/images/girl-reading.webp" 
                        alt="Student Reading" 
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                </div>

                {/* Audio Player UI (Static) */}
                <div className="bg-white rounded-xl p-2 md:p-3 shadow-lg border border-gray-100 flex items-center gap-2 md:gap-3 text-gray-500">
                    <button className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-800 hover:bg-gray-200 transition">
                        <FaPlay className="text-[10px] md:text-xs ml-0.5" />
                    </button>
                    <span className="text-[9px] md:text-[10px] font-medium tracking-wide whitespace-nowrap">0:00 / 1:26</span>
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
                        <div className="w-1/3 h-full bg-gray-400"></div>
                    </div>
                    <FaVolumeUp className="text-gray-400 text-[10px] md:text-xs cursor-pointer hover:text-gray-600" />
                    <FaEllipsisV className="text-gray-400 text-[10px] md:text-xs cursor-pointer hover:text-gray-600" />
                </div>
            </div>

            {/* Column 2: Group Image */}
            <div className="w-1/2 mt-16 lg:mt-32"> 
                 <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src="/images/group-circle.webp" 
                      alt="Group Circle" 
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                 </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;