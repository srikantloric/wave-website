import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaSchool, FaUserGraduate } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className="w-full bg-[#4a56a2] text-white py-10 md:py-14">
      
      {/* 1. CONTAINER: Handles padding */}
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* 2. INNER CONSTRAINT: Added 'max-w-6xl mx-auto'
            This stops the content from expanding beyond approx 1150px,
            keeping it aligned with WhatWeDeliver and Partners sections.
        */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              We Revolutionised Kids <br className="hidden md:block"/> Education System
            </h2>
            
            <div className="space-y-3 text-blue-50 text-xs md:text-sm font-light leading-relaxed opacity-90 max-w-2xl mx-auto lg:mx-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="hidden md:block">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur.
              </p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            
            {/* Stat Card 1 */}
            <div className="bg-white/10 p-5 rounded-lg flex flex-col items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/20 transition duration-300">
               <FaGraduationCap className="text-2xl md:text-3xl mb-1 opacity-90" />
               <span className="text-2xl md:text-3xl font-bold">4066</span>
               <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">Graduation</span>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white/10 p-5 rounded-lg flex flex-col items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/20 transition duration-300">
               <FaChalkboardTeacher className="text-2xl md:text-3xl mb-1 opacity-90" />
               <span className="text-2xl md:text-3xl font-bold">154+</span>
               <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">Teacher</span>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white/10 p-5 rounded-lg flex flex-col items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/20 transition duration-300">
               <FaSchool className="text-2xl md:text-3xl mb-1 opacity-90" />
               <span className="text-2xl md:text-3xl font-bold">71+</span>
               <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">Classrooms</span>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white/10 p-5 rounded-lg flex flex-col items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/20 transition duration-300">
               <FaUserGraduate className="text-2xl md:text-3xl mb-1 opacity-90" />
               <span className="text-2xl md:text-3xl font-bold">1453+</span>
               <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">Students</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;