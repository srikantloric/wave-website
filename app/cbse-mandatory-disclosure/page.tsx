import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'CBSE Mandatory Disclosure | Wave International School',
  description: 'Public disclosure documents, certificates, and academic information for Wave International School.',
};

// Data defined here (Server-side constant)
const documents = [
  { id: 1, title: "Extension of Affiliation Letter", link: "#" },
  { id: 2, title: "Society Registration Certificate", link: "#" },
  { id: 3, title: "NOC Certificate", link: "#" },
  { id: 4, title: "Recognition Certificate Under RTE", link: "#" },
  { id: 5, title: "Building Safety Certificate", link: "#" },
  { id: 6, title: "Fire Safety Certificate", link: "#" },
  { id: 7, title: "DEO Certificate", link: "#" },
  { id: 8, title: "Water & Sanitary Certificate", link: "#" },
  { id: 9, title: "Fee Structure (2021-22)", link: "#" },
  { id: 10, title: "Academic Calendar (2021-22)", link: "#" },
  { id: 11, title: "School Managing Committee (SMC)", link: "#" },
  { id: 12, title: "Parent Teacher Association (PTA)", link: "#" },
  { id: 13, title: "Three year result of Board Exam-X", link: "#" },
  { id: 14, title: "Mandatory Disclosure", link: "#" },
];

export default function CBSEDisclosurePage() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">

      {/* ================= SECTION 1: THEME HEADER ================= */}
      <section className="bg-[#4a56a2] text-white py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
            CBSE Mandatory Disclosure
          </h1>
          {/* Breadcrumb */}
          <div className="text-blue-200 text-sm md:text-base uppercase tracking-wider font-semibold flex justify-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>CBSE Disclosure</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: DOCUMENT LIST ================= */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
           
           <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
             
             {/* Table Header */}
             <div className="hidden md:flex justify-between items-center bg-gray-50 px-8 py-4 border-b border-gray-200">
                 <h3 className="text-[#4a56a2] font-bold text-lg uppercase tracking-wider">Description</h3>
                 <h3 className="text-[#4a56a2] font-bold text-lg uppercase tracking-wider">Download</h3>
             </div>

             {/* Table Body - List of Documents */}
             <div className="divide-y divide-gray-100">
               {documents.map((doc) => (
                   <div 
                       key={doc.id} 
                       className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-8 py-6 hover:bg-blue-50/30 transition-colors duration-200 gap-4"
                   >
                       {/* Left Side: Document Title with Icon */}
                       <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                               <FaFilePdf className="text-xl" />
                           </div>
                           <h4 className="text-gray-800 font-semibold text-base md:text-lg leading-tight">
                               {doc.title}
                           </h4>
                       </div>

                       {/* Right Side: Download Button */}
                       <div className="w-full md:w-auto flex-shrink-0">
                           {/* Using standard <a> for file downloads is better than Next Link */}
                           <a 
                               href={doc.link} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="group flex items-center justify-center gap-2 bg-white text-[#4a56a2] border-2 border-[#4a56a2] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#4a56a2] hover:text-white transition-all duration-300 shadow-sm w-full md:w-auto"
                           >
                               <span>Download</span>
                               <FaDownload className="text-xs group-hover:animate-bounce" />
                           </a>
                       </div>
                   </div>
               ))}
             </div>
             
             {/* Footer note */}
             <div className="bg-gray-50 px-8 py-4 text-center text-gray-500 text-sm">
                 All documents are in PDF format. Please ensure you have a PDF reader installed.
             </div>

           </div>
        </div>
      </section>

    </div>
  );
}