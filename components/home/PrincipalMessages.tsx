// NO "use client" here. This is a Server Component.
import React from 'react';
import MessageCarousel from './MessageCarousel'; // Import the client part

export default function PrincipalMessages() {

    // 1. Data lives on the Server (or you can fetch from DB here)
    const profiles = [
        {
            id: 1,
            role: "Director's Desk",
            title: "Building Leaders of Tomorrow",
            quote: "We believe that education is not just about filling a bucket, but lighting a fire. Our vision is to create a safe space where curiosity thrives.",
            name: "Dr. Robert Fox",
            designation: "Director, Wave International School",
            image: "/images/director.webp",
            roleColor: "text-[#6C5CE7]",
            frameColor: "bg-[#FDBA74]",
            rotation: "rotate-3",
            imageLeft: true,
        },
        {
            id: 2,
            role: "Principal's Message",
            title: "Fostering a Love for Learning",
            quote: "Our classrooms are vibrant communities where students are encouraged to ask questions, take risks, and discover their true potential.",
            name: "Mrs. Sarah Connor",
            designation: "Principal, Wave International School",
            image: "/images/principal.webp",
            roleColor: "text-[#F97316]",
            frameColor: "bg-[#C4B5FD]",
            rotation: "-rotate-3",
            imageLeft: false,
        }
    ];

    return (
        <section className="py-10 bg-white relative overflow-hidden">

            {/* 2. Background Doodles render on Server (Fast!) */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F3E8FF] rounded-full blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#FFF7ED] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            {/* 3. Pass data to the Client Component */}
            <MessageCarousel profiles={profiles} />

        </section>
    );
}