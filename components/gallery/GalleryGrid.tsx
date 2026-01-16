"use client"; // <--- Required for interactivity

import React, { useState } from 'react';
import Image from 'next/image';

// --- DATA ---
const galleryData = [
  { id: 1, src: "", category: "Campus", title: "Main School Building", span: "" },
  { id: 2, src: "", category: "Academics", title: "Science Lab Experiments", span: "row-span-2" }, 
  { id: 3, src: "", category: "Sports", title: "Inter-School Basketball", span: "" },
  { id: 4, src: "", category: "Events", title: "Annual Day Celebration", span: "row-span-2" }, 
  { id: 5, src: "", category: "Campus", title: "Library & Study Area", span: "" },
  { id: 6, src: "", category: "Academics", title: "Junior Class Activity", span: "" },
  { id: 7, src: "", category: "Sports", title: "Swimming Championship", span: "row-span-2" }, 
  { id: 8, src: "", category: "Events", title: "Art Exhibition", span: "" },
  { id: 9, src: "", category: "Campus", title: "Kids Playground", span: "" },
];

const categories = ["All", "Campus", "Academics", "Sports", "Events"];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <>
      {/* --- Filters --- */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 transform 
              ${activeCategory === category 
                ? "bg-[#4a56a2] text-white shadow-lg scale-105" 
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-[#4a56a2] shadow-sm hover:shadow"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- MASONRY IMAGE GRID --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 auto-rows-[150px] md:auto-rows-[250px] grid-flow-dense">
        {filteredImages.map((image) => (
          // Card Container
          <div 
            key={image.id} 
            className={`group relative rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-gray-200 cursor-pointer ${image.span || ''}`}
          >
            {/* Optimized Next.js Image */}
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            
            {/* Overlay (Fades in) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            {/* Text Content (Slides up) */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <span className="inline-block px-1.5 py-0.5 md:px-2 md:py-1 mb-1 md:mb-2 text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-white bg-[#4a56a2] rounded">
                {image.category}
              </span>
              <h3 className="text-white text-xs md:text-lg font-bold leading-tight">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20">
           <div className="text-6xl mb-4">📷</div>
           <p className="text-gray-500 text-lg">No photos found in this category yet.</p>
        </div>
      )}
    </>
  );
}