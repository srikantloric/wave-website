import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLightbulb, FaSeedling, FaHandsHelping, FaGlobeAsia, FaBookOpen } from 'react-icons/fa';

// SEO Metadata
export const metadata = {
  title: 'About Us | Wave International School',
  description: 'Learn about our history, vision, mission, and the core values that drive educational excellence at Wave International School.',
};

export default function AboutPage() {
  
  // Icons defined here
  const visionIcon = <FaLightbulb className="text-3xl md:text-4xl text-[#4a56a2] mb-3 md:mb-4" />;
  const missionIcon = <FaSeedling className="text-3xl md:text-4xl text-green-600 mb-3 md:mb-4" />;

  return (
    <div className="font-sans antialiased text-gray-800">

      {/* ================= SECTION 1: HEADER ================= */}
      <section className="bg-primary py-12 md:py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 md:mb-6">
              About Wave International School
            </h1>
            <p className="text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
              Nurturing curiosity, fostering excellence, and shaping the global leaders of tomorrow through a holistic approach to education.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR STORY ================= */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: Image with Hover Effect */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group w-full max-w-lg">

                {/* 1. The Background Frame */}
                <div className="absolute inset-0 bg-primary rounded-2xl transform transition-transform duration-500 rotate-3 opacity-20"></div>

                {/* 2. The Image (Converted to Next.js Image) */}
                <div className="relative z-10 aspect-video lg:aspect-[4/3] transform transition-transform duration-500 -rotate-3 w-full h-full">
                  <Image
                    src="/images/about-us.webp"
                    alt="Wave International School Campus"
                    fill
                    className="object-cover rounded-2xl shadow-xl border-4 border-white"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3">
                Our Story
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                A Legacy of Educational Excellence
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Founded with a vision to redefine education for the modern world, Wave International School has grown from a humble beginning into a premier institution. We recognized the need for a curriculum that goes beyond textbooks, focusing on critical thinking, creativity, and character development.
                </p>
                <p>
                  Over the years, we have built a vibrant community of learners, educators, and parents who believe in the transformative power of education. Our journey is defined by our commitment to providing a safe, inclusive, and stimulating environment where every child feels valued and inspired to achieve their full potential.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: VISION & MISSION ================= */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {/* Vision Card */}
            <div className="bg-blue-50 p-6 md:p-10 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition">
              {visionIcon}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To be a beacon of educational innovation, empowering students to become compassionate, knowledgeable, and responsible global citizens who are equipped to thrive in a dynamic and interconnected world. We envision a future where every learner becomes a leader of positive change.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-orange-50 p-6 md:p-10 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
              {missionIcon}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our mission is to provide a rigorous and balanced international curriculum that blends academic excellence with co-curricular enrichment. We are dedicated to fostering a love for lifelong learning, critical inquiry, and respect for diverse cultures through supportive and inspiring teaching.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CORE VALUES ================= */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-6xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Here's Why You Should Choose Us.</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Our core values guide everything we do, ensuring a supportive and enriching environment for your child's growth.</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
                <FaHandsHelping className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Integrity & Respect</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">We instill honesty and empathy, teaching students to respect themselves, others, and the environment.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
                <FaBookOpen className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Academic Excellence</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">We challenge students to exceed their own expectations through a rigorous and engaging curriculum.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4 md:mb-6">
                <FaGlobeAsia className="text-lg md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Global Perspective</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">We embrace diversity and prepare students to understand and contribute to the world community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CTA ================= */}
      <section className="py-10 md:py-10 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Join the Wave Community</h2>
          <p className="text-blue-100 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">Ready to provide your child with an exceptional educational journey? Discover the admissions process today.</p>
          <Link href="/admission">
            <button className="bg-white text-primary px-8 py-2 md:px-8 md:py-3 rounded-full hover:bg-gray-100 transition shadow-lg font-bold text-base md:text-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}