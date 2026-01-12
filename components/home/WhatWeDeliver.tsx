import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaVolumeUp, FaEllipsisH } from 'react-icons/fa';

const WhatWeDeliver = () => {
  return (
    <section className="w-full bg-white py-10 lg:py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14 max-w-6xl mx-auto">
          
          {/* Left Text Content */}
          <div className="w-full lg:flex-1 pt-4">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-5 text-gray-900 leading-tight">
              At Wave we deliver <br /> quality education
            </h2>
            
            <p className="text-gray-700 text-sm md:text-base xl:text-lg leading-relaxed mb-8 max-w-lg font-medium">
              We have commitment to improve the teaching and learning in the school community
              by delivering rich, high quality program of international education that shares a
              powerful vision and develops the intellectual, personal, emotional and social skills 
              needed to live, learn and work in a rapidly globalizing world.
            </p>
            
            <Link 
              href="/contact"
              aria-label="Contact Wave International School"
              className="inline-block bg-[#4a56a2] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-lg font-bold text-sm"
            >
                Contact Us
            </Link>
          </div>

          {/* Right Image/Media Grid */}
          <div className="w-full lg:flex-1 flex gap-4 relative">
            
            {/* Column 1: Girl Image + Audio Player */}
            <div className="w-1/2 flex flex-col gap-3">
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                      <Image 
                        src="/images/girl-reading.webp" 
                        alt="Student Reading" 
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                </div>

                {/* AUDIO PLAYER UI (Responsive Scaling) */}
                {/* Logic: 
                    - Default (Mobile/Tablet): Smaller padding (p-2), smaller buttons (w-8), smaller text.
                    - XL Screens (Desktop): Larger padding (p-3), larger buttons (w-10).
                */}
                <div className="bg-white rounded-lg p-2 xl:p-3 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-2 xl:gap-3">
                    
                    {/* Play Button */}
                    <button 
                      aria-label="Play Audio Lesson"
                      className="w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center bg-[#4a56a2] text-white rounded-full hover:bg-blue-800 transition flex-shrink-0 shadow-md"
                    >
                        {/* Icon size scales with screen */}
                        <FaPlay className="text-[10px] xl:text-xs ml-0.5" />
                    </button>
                    
                    {/* Progress Area */}
                    <div className="flex-1 flex flex-col justify-center gap-0.5 xl:gap-1 min-w-0">
                        <div className="flex justify-between items-center text-[8px] xl:text-[10px] font-bold text-gray-600 tracking-wide uppercase gap-1">
                            <span className="truncate">Video</span>
                            <span className="whitespace-nowrap">1:26</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1 xl:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                             <div className="w-1/3 h-full bg-[#4a56a2]"></div>
                        </div>
                    </div>
                    
                    {/* Actions Group */}
                    <div className="flex items-center gap-0.5 xl:gap-1 border-l border-gray-200 pl-1.5 xl:pl-2">
                        <button aria-label="Mute Volume" className="w-6 h-6 xl:w-8 xl:h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition text-gray-600 hover:text-[#4a56a2]">
                             <FaVolumeUp className="text-[10px] xl:text-sm" />
                        </button>
                        <button aria-label="More Options" className="w-6 h-6 xl:w-8 xl:h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition text-gray-600 hover:text-[#4a56a2]">
                             <FaEllipsisH className="text-[10px] xl:text-sm" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Column 2: Group Image */}
            <div className="w-1/2 mt-12 lg:mt-24"> 
                 <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg">
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