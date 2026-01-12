'use client';

import React, { useState, useRef } from 'react';
import { submitContact } from "@/app/actions/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    const result = await submitContact(formData);

    if (result.success) {
      setStatus({ type: 'success', msg: "Thank you! Your message has been sent." });
      formRef.current?.reset();
    } else {
      setStatus({ type: 'error', msg: "Failed to send message. Please try again." });
    }
    setIsSubmitting(false);
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
      
      {status && (
        <div className={`mb-6 p-4 rounded-lg text-center text-sm font-bold ${
          status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status.msg}
        </div>
      )}

      <form ref={formRef} action={handleAction}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
            <input 
              required
              type="text" 
              name="name"
              placeholder="John Doe" 
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input 
              required
              type="email" 
              name="email"
              placeholder="john@example.com" 
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
            />
          </div>
        </div>

        <div className="mb-4 md:mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
          <input 
            required
            type="text" 
            name="subject"
            placeholder="Admissions Inquiry" 
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
          />
        </div>

        <div className="mb-6 md:mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea 
            required
            rows={4} 
            name="message"
            placeholder="How can we help you?" 
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition resize-none text-sm"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#4a56a2] text-white font-bold py-3 md:py-4 rounded-lg hover:bg-blue-800 transition shadow-md text-sm md:text-base disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}