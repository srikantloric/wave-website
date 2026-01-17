import React from 'react';
import { 
  FaGraduationCap, 
  FaChalkboardUser, 
  FaSchool, 
  FaUserGraduate 
} from "react-icons/fa6";

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
      icon: FaChalkboardUser,
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
    <div className="w-full bg-primary text-white py-10 md:py-14">

      <div className="container mx-auto px-6 lg:px-20">

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Text Content */}
          <div className="w-full lg:flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              We Revolutionised Kids <br className="hidden md:block" /> Education System
            </h2>

            <div className="space-y-3 text-gray-100 text-xs md:text-sm font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                We provide a nurturing environment where innovation meets traditional
                values. Our curriculum is designed to spark curiosity and empower
                young minds to explore their full potential through active learning.
              </p>

              <p className="hidden md:block">
                Our dedicated faculty employs modern pedagogical tools to ensure every
                child receives personalized attention and a strong academic foundation.
              </p>

              <p>
                By integrating character building with global standards, we prepare
                students to lead with confidence. Experience an education system that
                prioritizes holistic growth and future-ready skills for every student.
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