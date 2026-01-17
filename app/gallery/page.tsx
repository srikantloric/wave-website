import React from 'react';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid'; 

export const metadata: Metadata = {
  title: 'Gallery | Wave International School',
  description: 'Explore our campus, academic activities, sports events, and student life through our photo gallery.',
};

export default function GalleryPage() {
  return (
    <div className="font-sans antialiased text-gray-800">

      {/* ================= SECTION 1: HEADER (Server Side Rendered) ================= */}
      <section className="bg-primary text-white py-12 md:py-20 text-center relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 leading-tight tracking-tight">
            Our Gallery
          </h1>
          <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant life at Wave International School through our lens.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: GALLERY GRID (Client Interaction) ================= */}
      <section className="py-10 md:py-16 bg-gray-50 h-full">
        <div className="container mx-auto px-3 md:px-8 lg:px-20 max-w-7xl">
          
          {/* Injecting the Client Component here */}
          <GalleryGrid />

        </div>
      </section>

    </div>
  );
}