// app/contact/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from './ContactForm'; 

// 1. SEO Metadata (Works only in Server Components)
export const metadata: Metadata = {
  title: 'Contact Us | Wave International School',
  description: 'Get in touch with Wave International School. We are here to answer your questions about admissions, academics, and more.',
};

export default function ContactPage() {
  return (
    <div className="font-sans antialiased text-gray-800">

      {/* ================= SECTION 1: HEADER ================= */}
      <section className="bg-[#4a56a2] text-white py-12 md:py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have a question about admissions, 
            academics, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* ================= SECTION 2: INFO & FORM GRID ================= */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            
            {/* LEFT COLUMN: Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base text-center lg:text-left">
                Feel free to reach out to us using the contact details below or fill out the form, 
                and we will get back to you as soon as possible.
              </p>

              {/* INFO BLOCKS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:block lg:space-y-8 gap-6">
                
                {/* Address */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 text-center lg:text-left">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 text-[#4a56a2] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg lg:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-lg text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      Adarshnagar, Tatkari, Siyatam,<br /> 
                      Jamua, GIRIDIH,<br />
                      PIN - 815312
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 text-center lg:text-left">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 text-[#4a56a2] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-lg lg:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-lg text-gray-900 mb-1">Call Us</h3>
                    <div className="space-y-0.5 lg:space-y-1">
                        <p className="text-gray-600 text-xs lg:text-sm font-medium">+91 99734 74757</p>
                        <p className="text-gray-600 text-xs lg:text-sm font-medium">+91 83403 68128</p>
                    </div>
                    <p className="text-gray-400 text-[10px] lg:text-xs mt-1">Mon-Sat 8am-4pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 text-center lg:text-left">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 text-[#4a56a2] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-lg lg:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-lg text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 text-xs lg:text-sm break-all">
                      waveinternationalgrd@gmail.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form (Interactive Client Component) */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: MAP ================= */}
      <section className="h-[300px] md:h-[400px] w-full bg-gray-200">
        <iframe 
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.44123456789!2d86.123456!3d24.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA3JzM0LjIiTiA4NsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  );
}