'use client';

import React, { useState, useRef } from 'react';
import { FaUser, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { submitAdmission } from "@/app/actions/admissions";

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    // Safety check: prevent execution if already submitting
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await submitAdmission(formData);

      if (result.success) {
        setStatus({ type: 'success', msg: "Application submitted! We will contact you soon." });
        formRef.current?.reset();
      } else {
        setStatus({ type: 'error', msg: result.error || "Submission failed. Please try again." });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: "A network error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="h-2 bg-primary w-full"></div>

      {status && (
        <div className={`m-6 p-4 rounded-lg text-center font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
          {status.msg}
        </div>
      )}

      <form ref={formRef} action={handleAction} className="p-6 md:p-12 space-y-10">

        {/* --- 1. Student Details --- */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FaUser className="text-lg md:text-xl" /> Student Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
              <input type="text" name="firstName" required placeholder="Enter first name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
              <input type="text" name="lastName" required placeholder="Enter last name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaCalendarAlt />
                </div>
                <input type="date" name="dob" required className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white text-gray-700" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
              <select name="gender" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white text-gray-700">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Applying For Grade</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaGraduationCap />
                </div>
                <select name="grade" required className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white text-gray-700">
                  <option value="">Select Grade</option>
                  <option value="Pre-Nursery">Pre-Nursery</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(g => (
                    <option key={g} value={g}>Standard {g}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100"></div>

        {/* --- 2. Parent / Guardian Details --- */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <FaUser className="text-lg md:text-xl" /> Parent Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Parent Full Name</label>
              <input type="text" name="parentName" required placeholder="Parent/Guardian Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input type="email" name="email" required placeholder="example@email.com" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaPhoneAlt />
                </div>
                <input type="tel" name="phone" required placeholder="+91 00000 00000" className="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100"></div>

        {/* --- 3. Address Details --- */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#4a56a2] mb-6 flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg md:text-xl" /> Address Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Street Address</label>
              <input type="text" name="address" required placeholder="123 Main St, Apartment, Studio, or Floor" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
              <input type="text" name="city" required placeholder="City" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">State / Zip Code</label>
              <div className="flex gap-4">
                <input type="text" name="state" required placeholder="State" className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
                <input type="text" name="zip" required placeholder="Zip" className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4a56a2] focus:ring-2 focus:ring-blue-100 outline-none transition bg-gray-50 focus:bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full text-white font-bold text-lg py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-3 
              ${isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary hover:bg-blue-800 transform hover:-translate-y-1 active:scale-95'
              }`}
          >
            {isSubmitting && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isSubmitting ? "Submitting Application..." : "Submit Application"}
          </button>
          <p className="text-center text-gray-500 text-xs md:text-sm mt-4">
            By submitting this form, you confirm that the information provided is accurate.
          </p>
        </div>
      </form>
    </div>
  );
}