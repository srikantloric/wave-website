// app/admission/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import AdmissionForm from './AdmissionForm';

export const metadata: Metadata = {
  title: 'Admission | Wave International School',
  description: 'Apply for admission at Wave International School. Secure your child\'s future with our holistic education system.',
};

export default function AdmissionPage() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      {/* ================= SECTION 1: HEADER ================= */}
      <section className="bg-primary text-white py-16 md:py-20 text-center">
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
           <AdmissionForm />
        </div>
      </section>
    </div>
  );
}