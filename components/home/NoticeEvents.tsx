import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

const NoticeEvents = () => {
  const notices = [
    { date: '16-01-2022', title: 'Kindergarten Mother Teacher Association' },
    { date: '24-08-2021', title: 'KG-Mother Teacher Association' },
    { date: '19-09-2019', title: 'Schools Hours' },
    { date: '07-01-2018', title: 'Kindergarten - Mama , My Everlasting Teacher' },
    // Duplicate for seamless marquee effect
    { date: '16-01-2022', title: 'Kindergarten Mother Teacher Association' }, 
    { date: '24-08-2021', title: 'KG-Mother Teacher Association' },
  ];

  const events = [
    { month: 'Jan', day: '16', color: 'bg-[#1e3a8a]', title: 'Kindergarten Mother Teacher Association', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { month: 'Feb', day: '23', color: 'bg-[#fbbf24]', title: 'February Activities: Big Stars and Little Secrets', desc: 'Lorem ipsum dolor sit amet, consectetur.' },
    { month: 'Mar', day: '01', color: 'bg-gray-300', title: 'Enlightenment performance with music', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { month: 'Apr', day: '15', color: 'bg-[#fbbf24]', title: 'Enlightenment performance', desc: 'Lorem ipsum dolor sit amet.' },
     // Duplicate for seamless marquee effect
    { month: 'Jan', day: '16', color: 'bg-[#1e3a8a]', title: 'Kindergarten Mother Teacher Association', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div className="bg-white py-2 mb-10">
      
      {/* CSS for Custom Vertical Marquee Animation 
          (Ideally, move this to your globals.css, but it works here too) 
      */}
      <style>{`
        @keyframes marqueeVertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee-vertical {
          animation: marqueeVertical 15s linear infinite;
        }
        .animate-marquee-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 py-8 lg:px-20">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Col 1: Notice Board */}
          <div>
            <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-2 relative">
              <div>
                  <h3 className="font-bold text-xl text-gray-900">Notice Board</h3>
                  {/* Blue Underline Indicator */}
                  <div className="absolute bottom-0 left-0 w-8 h-1 bg-[#4a56a2] rounded-full"></div>
              </div>
              <Link href="/notices" className="text-xs text-gray-400 cursor-pointer hover:text-[#4a56a2]">
                See all &gt;
              </Link>
            </div>

            {/* Marquee Container */}
            <div className="h-64 overflow-hidden relative">
               <div className="animate-marquee-vertical space-y-6">
                  {notices.map((notice, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <div className="text-xs text-yellow-500 font-medium mb-1">{notice.date}</div>
                      <Link href={`/notices/${index}`} className="text-sm font-semibold text-gray-800 leading-snug hover:text-[#4a56a2] cursor-pointer block">
                          {notice.title}
                      </Link>
                    </div>
                  ))}
               </div>
               {/* Fade overlay at bottom for smooth exit */}
               {/* <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none bg-gradient-to-t from-white to-transparent"></div> */}
            </div>
          </div>

          {/* Col 2: Upcoming Events */}
          <div>
            <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-2 relative">
              <div>
                  <h3 className="font-bold text-xl text-gray-900">Upcoming Events</h3>
                  <div className="absolute bottom-0 left-0 w-8 h-1 bg-[#4a56a2] rounded-full"></div>
              </div>
              <Link href="/events" className="text-xs text-gray-400 cursor-pointer hover:text-[#4a56a2]">
                See all &gt;
              </Link>
            </div>

            <div className="h-64 overflow-hidden relative">
              <div className="animate-marquee-vertical space-y-6">
                  {events.map((event, index) => (
                    <div key={index} className="flex gap-4 group">
                        {/* Date Badge */}
                        <div className={`${event.color} ${event.color === 'bg-gray-300' ? 'text-gray-600' : 'text-white'} rounded-md text-center w-14 h-14 flex flex-col justify-center flex-shrink-0 shadow-sm`}>
                          <span className="text-[10px] font-medium uppercase">{event.month}</span>
                          <span className="font-bold text-2xl leading-none">{event.day}</span>
                        </div>
                        {/* Content */}
                        <div>
                          <Link href={`/events/${index}`} className="text-sm font-bold text-gray-800 leading-tight hover:text-[#4a56a2] cursor-pointer mb-1 block">
                              {event.title}
                          </Link>
                          <div className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                              {event.desc}
                          </div>
                        </div>
                    </div>
                  ))}
              </div>
              {/* <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none bg-gradient-to-t from-white to-transparent"></div> */}
            </div>
          </div>

          {/* Col 3: Rand Challenges (Video) */}
          <div>
             <div className="mb-6 border-b border-gray-100 pb-2 relative">
                 <h3 className="font-bold text-xl text-gray-900">Wave Challenges</h3>
                 <div className="absolute bottom-0 left-0 w-8 h-1 bg-[#4a56a2] rounded-full"></div>
             </div>
             
             {/* Video Thumbnail Placeholder */}
             <div className="w-full aspect-video rounded-xl overflow-hidden relative group cursor-pointer shadow-lg">
                <div className="absolute inset-0 bg-blue-400">
                    <Image 
                      src="/images/challenges-video-thumbnail.webp" 
                      alt="Challenge Video" 
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    />
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition duration-300">
                      <FaPlay className="text-[#dc2626] ml-1 text-xl" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoticeEvents;