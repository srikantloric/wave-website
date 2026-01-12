import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaSchool, FaUserGraduate } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { 
      id: 1, 
      icon: FaGraduationCap, 
      count: "4066", 
      label: "Graduation" 
    },
    { 
      id: 2, 
      icon: FaChalkboardTeacher, 
      count: "154+", 
      label: "Teacher" 
    },
    { 
      id: 3, 
      icon: FaSchool, 
      count: "71+", 
      label: "Classrooms" 
    },
    { 
      id: 4, 
      icon: FaUserGraduate, 
      count: "1453+", 
      label: "Students" 
    },
  ];

  return (
    <div className="w-full bg-[#4a56a2] text-white py-10 md:py-14">
      
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              We Revolutionised Kids <br className="hidden md:block"/> Education System
            </h2>
            
            {/* CONTRAST FIX: Changed to 'text-gray-100' (almost pure white) for maximum readability */}
            <div className="space-y-3 text-gray-100 text-xs md:text-sm font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
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
            
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="bg-white/10 p-5 rounded-lg flex flex-col items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/20 transition duration-300 border border-white/10"
              >
                 {/* Icon is decorative, so we hide it from screen readers */}
                 <stat.icon className="text-2xl md:text-3xl mb-1 text-white opacity-90" aria-hidden="true" />
                 
                 <span className="text-2xl md:text-3xl font-bold text-white">
                    {stat.count}
                 </span>
                 
                 <span className="text-[10px] md:text-xs uppercase tracking-widest text-white font-bold">
                    {stat.label}
                 </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;