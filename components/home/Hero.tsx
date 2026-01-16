"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "/images/hero.webp",
    title: "Welcome to Wave International School",
    subtitle: "The greatest place for your child to lifelong learning"
  },
  {
    image: "/images/hero2.avif",
    title: "Empowering Future Leaders",
    subtitle: "Developing character and excellence through modern education"
  },
  {
    image: "/images/hero3.avif",
    title: "Innovative Learning Spaces",
    subtitle: "Where creativity meets technology for a brighter tomorrow"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigation Logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[600px] xl:h-[650px] flex items-center justify-center overflow-hidden bg-[#203158]">

      {/* --- BACKGROUND IMAGES --- */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0"
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1e3a8a]/40 mix-blend-multiply z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#203158] via-[#1e3a8a]/20 to-transparent opacity-90 z-[1]"></div>
        </div>
      ))}

      {/* --- NAVIGATION ARROWS --- */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={40} strokeWidth={1.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={40} strokeWidth={1.5} />
      </button>

      {/* --- TEXT CONTENT --- */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg tracking-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-base md:text-xl font-medium opacity-95 tracking-wide drop-shadow-md max-w-2xl mb-8">
          {slides[currentSlide].subtitle}
        </p>
        {/* <Link
          href="/admission"
          className="bg-white text-[#4a56a2] font-bold text-base md:text-lg py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
        >
          Apply for Admission
        </Link> */}
      </div>

      {/* --- INDICATOR DOTS --- */}
      <div className="absolute bottom-8 flex z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentSlide ? "true" : "false"}

            className="group relative p-2 transition-transform active:scale-95"
          >
            <div
              className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${i === currentSlide
                  ? "bg-white w-8 opacity-100" 
                  : "bg-white/40 w-2.5 opacity-40 group-hover:bg-white/60" 
                }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;