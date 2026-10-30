"use client";

import React from "react";
import { EnquiryForm } from "./EnquiryForm";

export const PartnershipCTA: React.FC = () => {
  return (
    <section
      id="partner"
      aria-label="Professional Partnership Registration"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] border border-[#00A6CE]/30 text-xs font-bold text-[#00A6CE] tracking-widest uppercase mb-4 shadow-sm">
          B2B CLINICAL PARTNERSHIP
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071B2C] mb-3">
          Built for Dental Professionals.
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-[#4A6072] max-w-2xl mx-auto mb-10 leading-relaxed">
          We are preparing a new generation of professional clear aligner solutions for dentists and orthodontists across India. Register below for early onboarding and priority case allocation.
        </p>

        {/* Form Container */}
        <div className="text-left">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};
