import React from 'react';
import type { Metadata } from 'next';
import { FaUser, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

// 1. Add SEO Metadata
export const metadata: Metadata = {
  title: 'Admission | Wave International School',
  description: 'Apply for admission at Wave International School. Secure your child\'s future with our holistic education system.',
};

export default function AdmissionPage() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">

      {/* ================= SECTION 1: HEADER ================= */}
      <section className="bg-[#4a56a2] text-white py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Admission Form
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
             Take the first step towards a bright future. Fill out the form below to register your child at Wave International School.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: THE FORM ================= */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
           
           {/* Card Container */}
           <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
             
             {/* Decorative Top Border */}
             <div className="h-2 bg-[#4a56a2] w-full"></div>

             {/* NOTE: For now, this is a static form. 
                In Next.js, you can add an 'action' prop here pointing to a Server Action 
                to handle emails/database saving without needing 'use client'.
             */}
             <form className="p-6 md:p-12 space-y-10">

                 {/* --- 1. Student Details --- */}
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#4a56a2] mb-6 flex items-center gap-2">
                       <FaUser className="text-lg md:text-xl" /> Student Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {/* First Name */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                          <input 
                            type="text" 
                            name="firstName"
                            placeholder="Enter first name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                          />
                       </div>
                       
                       {/* Last Name */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                          <input 
                            type="text" 
                            name="lastName"
                            placeholder="Enter last name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                          />
                       </div>
                       
                       {/* Date of Birth */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                          <div className="relative">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaCalendarAlt className="text-gray-400" />
                             </div>
                             <input 
                                type="date" 
                                name="dob"
                                className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white text-gray-600" 
                             />
                          </div>
                       </div>
                       
                       {/* Gender */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
                          <select name="gender" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white text-gray-600">
                             <option value="">Select Gender</option>
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                             <option value="other">Other</option>
                          </select>
                       </div>

                       {/* Grade applying for */}
                       <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-gray-700 mb-2">Applying For Grade</label>
                          <div className="relative">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaGraduationCap className="text-gray-400" />
                             </div>
                             <select name="grade" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white text-gray-600">
                                <option value="">Select Grade</option>
                                <option value="nursery">Nursery</option>
                                <option value="kg">Kindergarten</option>
                                <option value="1">Grade 1</option>
                                <option value="2">Grade 2</option>
                                <option value="3">Grade 3</option>
                                <option value="4">Grade 4</option>
                                <option value="5">Grade 5</option>
                                <option value="6">Grade 6</option>
                                <option value="7">Grade 7</option>
                                <option value="8">Grade 8</option>
                                <option value="9">Grade 9</option>
                                <option value="10">Grade 10</option>
                                <option value="11">Grade 11</option>
                                <option value="12">Grade 12</option>
                             </select>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Divider */}
                 <div className="border-t border-gray-100"></div>

                 {/* --- 2. Parent / Guardian Details --- */}
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#4a56a2] mb-6 flex items-center gap-2">
                       <FaUser className="text-lg md:text-xl" /> Parent Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       
                       {/* Parent Name */}
                       <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                          <input 
                            type="text" 
                            name="parentName"
                            placeholder="Parent/Guardian Full Name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                          />
                       </div>

                       {/* Email */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                          <div className="relative">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="text-gray-400" />
                             </div>
                             <input 
                                type="email" 
                                name="email"
                                placeholder="example@email.com" 
                                className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                             />
                          </div>
                       </div>

                       {/* Phone */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                          <div className="relative">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaPhoneAlt className="text-gray-400" />
                             </div>
                             <input 
                                type="tel" 
                                name="phone"
                                placeholder="+91 99999 99999" 
                                className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                             />
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Divider */}
                 <div className="border-t border-gray-100"></div>

                 {/* --- 3. Address Details --- */}
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#4a56a2] mb-6 flex items-center gap-2">
                       <FaMapMarkerAlt className="text-lg md:text-xl" /> Address Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       
                       {/* Street */}
                       <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-gray-700 mb-2">Street Address</label>
                          <input 
                            type="text" 
                            name="address"
                            placeholder="123 Main St, Apartment, Studio, or Floor" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                          />
                       </div>

                       {/* City */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                          <input 
                            type="text" 
                            name="city"
                            placeholder="City" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                          />
                       </div>

                       {/* State & Zip */}
                       <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">State / Zip Code</label>
                          <div className="flex gap-4">
                             <input 
                                type="text" 
                                name="state"
                                placeholder="State" 
                                className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                             />
                             <input 
                                type="text" 
                                name="zip"
                                placeholder="Zip" 
                                className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" 
                             />
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* --- Submit Button --- */}
                 <div className="pt-6">
                    <button 
                       type="submit" 
                       className="w-full bg-[#4a56a2] text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-800 transition shadow-lg transform hover:-translate-y-1 active:scale-95"
                    >
                       Submit Application
                    </button>
                    <p className="text-center text-gray-500 text-xs md:text-sm mt-4">
                       By submitting this form, you confirm that the information provided is accurate.
                    </p>
                 </div>

             </form>
           </div>
        </div>
      </section>

    </div>
  );
};