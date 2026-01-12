import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaVolumeUp, FaEllipsisH } from 'react-icons/fa'; // Switched to Horizontal Ellipsis for cleaner look

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
            
            <p className="text-gray-600 text-sm md:text-base xl:text-lg leading-relaxed mb-8 max-w-lg">
              We have commitment to improve the teaching and learning in the school community
              by delivering rich, high quality program of international education that shares a
              powerful vision and develops the intellectual, personal, emotional and social skills 
              needed to live, learn and work in a rapidly globalizing world.
            </p>
            
            <Link 
              href="/contact"
              className="inline-block bg-[#4a56a2] text-white px-8 py-3 rounded-full hover:bg-blue-800 transition shadow-lg font-bold text-sm"
            >
                Contact Us
            </Link>
          </div>

          {/* Right Image/Media Grid */}
          <div className="w-full lg:flex-1 flex gap-4 relative">
            
            {/* Column 1: Girl Image + Compact Audio Player */}
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

                {/* PRO AUDIO PLAYER UI */}
                {/* Visual Style: Compact, rounded, clean shadows */}
                <div className="bg-white rounded-lg p-2.5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center gap-2 text-gray-600">
                    
                    {/* Play Button */}
                    <button 
                      aria-label="Play Audio"
                      className="w-8 h-8 flex items-center justify-center bg-[#4a56a2] text-white rounded-full hover:bg-blue-800 transition flex-shrink-0 shadow-md"
                    >
                        <FaPlay className="text-[10px] ml-0.5" />
                    </button>
                    
                    {/* Progress Area */}
                    <div className="flex-1 flex flex-col justify-center gap-1">
                        <div className="flex justify-between items-center text-[9px] font-bold text-gray-400 tracking-wide uppercase">
                            <span>Video</span>
                            <span>1:26</span>
                        </div>
                        {/* Thin elegant progress bar */}
                        <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                             <div className="w-1/3 h-full bg-[#4a56a2]"></div>
                        </div>
                    </div>
                    
                    {/* Actions Group */}
                    <div className="flex items-center gap-1 border-l border-gray-100 pl-2">
                        <button aria-label="Mute" className="p-1.5 hover:bg-gray-50 rounded-md transition text-gray-400 hover:text-[#4a56a2]">
                             <FaVolumeUp size={12} />
                        </button>
                        <button aria-label="Options" className="p-1.5 hover:bg-gray-50 rounded-md transition text-gray-400 hover:text-[#4a56a2]">
                             <FaEllipsisH size={12} />
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