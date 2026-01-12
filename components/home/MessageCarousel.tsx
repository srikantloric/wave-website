"use client"; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type Profile = {
  id: number;
  role: string;
  title: string;
  quote: string;
  name: string;
  designation: string;
  image: string;
  roleColor: string;
  frameColor: string;
  rotation: string;
  imageLeft: boolean;
};

export default function MessageCarousel({ profiles }: { profiles: Profile[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, profiles.length]);

  const currentProfile = profiles[currentIndex];

  return (
    <div 
      className="container mx-auto px-6 lg:px-20"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
        {/* Added custom animation styles directly here for the specific rotation */}
        <style jsx global>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>

        <div className="max-w-6xl mx-auto relative z-10 w-full min-h-[500px] flex items-center">
             
             <div 
                key={currentProfile.id} 
                className={`w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-20 transition-opacity duration-500 animate-fade-in ${currentProfile.imageLeft ? '' : 'lg:flex-row-reverse'}`}
             >
                
                {/* ================= IMAGE SECTION ================= */}
                <div className={`relative group w-full lg:w-1/2 flex ${currentProfile.imageLeft ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                    
                    {/* DOODLE 1: Rotating Star (Only for Profile 1) */}
                    {currentProfile.id === 1 && (
                        <div className="absolute -top-6 -left-6 w-16 h-16 text-[#FACC15] animate-spin-slow opacity-80 z-0">
                        <svg viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" />
                        </svg>
                        </div>
                    )}

                    {/* DOODLE 2: Squiggle Line (Only for Profile 2) */}
                    {currentProfile.id === 2 && (
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 pointer-events-none opacity-60">
                            <svg viewBox="0 0 100 100" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round">
                                <path d="M10 50 Q 25 20 40 50 T 70 50 T 100 50" />
                            </svg>
                        </div>
                    )}

                    {/* Main Image Frame */}
                    <div className="relative z-10 w-64 h-64 md:w-80 md:h-80">
                        <div className={`absolute inset-0 ${currentProfile.frameColor} rounded-[2rem] transform transition-transform duration-300 ${currentProfile.imageLeft ? 'rotate-3 group-hover:rotate-6' : '-rotate-3 group-hover:-rotate-6'}`}></div>
                        <Image 
                            src={currentProfile.image} 
                            alt={currentProfile.role}
                            fill
                            className={`object-cover rounded-[2rem] border-4 border-white shadow-xl bg-gray-200 transform transition-transform duration-300 ${currentProfile.rotation} group-hover:rotate-0`}
                            sizes="(max-width: 768px) 300px, 400px"
                        />
                    </div>
                </div>

                {/* ================= TEXT SECTION ================= */}
                <div className="w-full lg:w-1/2 text-center lg:text-left relative">
                    
                    {/* DOODLE 3: Giant Quote Icon */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 opacity-10">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="#1A0B2E">
                        <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.932 15.084C15.54 14.246 16.486 13.593 17.766 13.129L17.766 11.458C16.963 11.64 16.31 11.967 15.807 12.443C15.304 12.918 15.053 13.568 15.053 14.392L15.053 14.654L17.808 14.654L17.808 21L14.017 21ZM5.21 21L5.21 18C5.21 16.896 5.513 15.923 6.126 15.084C6.737 14.246 7.681 13.593 8.959 13.129L8.959 11.458C8.156 11.64 7.502 11.967 6.999 12.443C6.496 12.918 6.244 13.568 6.244 14.392L6.244 14.654L8.998 14.654L8.998 21L5.21 21Z" />
                        </svg>
                    </div>

                    <h3 className={`${currentProfile.roleColor} font-bold tracking-widest text-xs lg:text-sm uppercase mb-2`}>{currentProfile.role}</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{currentProfile.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg mb-8 min-h-[80px]">"{currentProfile.quote}"</p>
                    <div className="inline-block">
                        <span className="block font-bold text-gray-900 text-lg lg:text-xl">{currentProfile.name}</span>
                        <span className="block text-gray-500 text-sm">{currentProfile.designation}</span>
                    </div>
                </div>
             </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
            {profiles.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}

                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#6C5CE7] w-8' : 'bg-gray-300 hover:bg-[#6C5CE7]'}`}
                />
            ))}
        </div>
    </div>
  );
}