import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';   

const Hero = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[600px] xl:h-[650px] flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.webp" 
          alt="School Campus"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* OVERLAYS
         These need to sit on top of the image (z-0), so we don't strictly need z-index 
         if they appear after the image in the DOM, but explicit z-indexes are safer.
      */}
      
      {/* 1. Blue Tint Overlay */}
      <div className="absolute inset-0 bg-[#1e3a8a]/40 mix-blend-multiply z-[1]"></div>
      
      {/* 2. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#203158] via-[#1e3a8a]/20 to-transparent opacity-90 z-[1]"></div>

      {/* TEXT CONTENT 
         This must have a higher z-index (z-10) to sit above the overlays.
      */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg tracking-tight">
          Welcome to Wave International School
        </h1>
        <p className="text-base md:text-xl font-medium opacity-95 tracking-wide drop-shadow-md max-w-2xl mb-8">
          The greatest place for your child to longlife learning
        </p>

        {/* 3. Admission Button (Uncommented and converted to Next.js Link) */}
        {/* <Link href="/admission">
          <button className="bg-white text-[#4a56a2] font-bold text-base md:text-lg py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">
            Apply for Admission
          </button>
        </Link> 
        */}

      </div>
    </div>
  );
};

export default Hero;