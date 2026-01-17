import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Partners = () => {
  const partners = [
    { name: 'McGraw Hill', src: '/images/partners/mcgraw.png', color: 'bg-red-700', textColor: 'text-white' },

    { name: 'Pearson', src: '/images/partners/pearson.png', color: 'bg-[#006080]', textColor: 'text-white' },

    { name: 'Cognia', src: '/images/partners/cognia.png', color: 'bg-gray-300', textColor: 'text-gray-900' },

    { name: 'Ministry', src: '/images/partners/ministry.png', color: 'bg-[#006d5b]', textColor: 'text-white' },
  ];

  return (
    <div className="bg-white py-16 mb-4">

      <div className="container mx-auto px-6 lg:px-20">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Left: Logos Grid + Navigation */}
          <div className="w-full md:w-1/2 flex items-center justify-center gap-4">

            {/* Previous Button */}
            <button
              aria-label="Previous partner"
              className="w-10 h-10 rounded-full bg-white shadow-lg text-gray-800 flex items-center justify-center hover:bg-gray-50 transition flex-shrink-0 cursor-default border border-gray-100"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Logo Grid Area */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 flex-1 max-w-sm">
              {partners.map((partner) => (
                <div key={partner.name} className="relative aspect-square bg-white border border-gray-100 shadow-sm rounded-lg flex items-center justify-center p-4 overflow-hidden">

                  {/* Placeholder Logic */}
                  <div className={`w-full h-full ${partner.color} ${partner.textColor} text-[10px] flex items-center justify-center font-bold text-center`}>
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              aria-label="Next partner"
              className="w-10 h-10 rounded-full bg-primary shadow-lg text-white flex items-center justify-center hover:bg-blue-800 transition flex-shrink-0 cursor-default"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We work with the <br /> Best Partners
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              <p>
                We collaborate with world-class educational organizations and local
                leaders to bring a diverse range of opportunities to our students.
                These strategic alliances ensure our curriculum remains at the
                forefront of global academic and technological standards.
              </p>
              <p>
                Through these valued partnerships, we provide our learners with
                exclusive resources, mentorship programs, and a pathway to
                unmatched excellence in their future careers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Partners;