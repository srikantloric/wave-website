import React from 'react';
import type { Metadata } from 'next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// 1. SEO Metadata
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

              {/* GRID LOGIC */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-6 min-[500px]:grid-cols-3 min-[500px]:gap-4 lg:block lg:space-y-8">
                
                {/* Info Block 1: Address */}
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

                {/* Info Block 2: Phone */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 text-center lg:text-left">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 text-[#4a56a2] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-lg lg:text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-lg text-gray-900 mb-1">Call Us</h3>
                    <div className="space-y-0.5 lg:space-y-1">
                        <p className="text-gray-600 text-xs lg:text-sm font-medium">
                        +91 99734 74757
                        </p>
                        <p className="text-gray-600 text-xs lg:text-sm font-medium">
                        +91 83403 6812
                        </p>
                    </div>
                    <p className="text-gray-400 text-[10px] lg:text-xs mt-1">Mon-Sat 8am-4pm</p>
                  </div>
                </div>

                {/* Info Block 3: Email */}
                <div className=" min-[500px]:col-span-1 flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 text-center lg:text-left">
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

            {/* RIGHT COLUMN: Contact Form */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="mb-4 md:mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Admissions Inquiry" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                  />
                </div>

                {/* Message Input */}
                <div className="mb-6 md:mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition resize-none text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#4a56a2] text-white font-bold py-3 md:py-4 rounded-lg hover:bg-blue-800 transition shadow-md text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: MAP ================= */}
      <section className="h-[300px] md:h-[400px] w-full bg-gray-200">
        {/* Note: Ensure the SRC below is a valid Google Maps Embed URL. 
            The placeholder from your snippet might not render correctly without a valid API key or Embed link. 
        */}
        <iframe 
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.2084254387246!2d86.29866517762609!3d24.408825663176337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f15f3d4f5f95c9%3A0x6b5600ffc7efc535!2sWave%20International%20School!5e0!3m2!1sen!2sin!4v1768151917065!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}