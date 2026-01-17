'use client';

import React, { useState, useRef } from 'react';
import { submitContact } from "@/app/actions/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    // 1. Safety check: prevent double-submission logic
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await submitContact(formData);

      if (result.success) {
        setStatus({ type: 'success', msg: "Thank you! Your message has been sent." });
        formRef.current?.reset();
      } else {
        setStatus({ type: 'error', msg: result.error || "Failed to send message. Please try again." });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: "A network error occurred. Please try again." });
    } finally {
      // 2. Re-enable the button after the process is finished
      setIsSubmitting(false);
    }
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
          className={`w-full text-white font-bold py-3 md:py-4 rounded-lg transition shadow-md text-sm md:text-base flex items-center justify-center gap-3
            ${isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary hover:bg-blue-800 transition transform hover:-translate-y-0.5 active:scale-95'
            }`}
        >
          {isSubmitting && (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}