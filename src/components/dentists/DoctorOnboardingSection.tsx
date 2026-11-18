"use client";

import React from "react";
import { motion } from "framer-motion";
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm";
import {
  Gift,
  CheckCircle2,
  Mail,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function DoctorOnboardingSection() {
  return (
    <section id="partner-form" className="py-20 md:py-28 bg-[#F8FBFD] border-b border-[#E2EBF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Onboarding Perks & Starter Kit with Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: luxuryEase }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase mb-3">
                PRACTICE REGISTRATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
                Activate Your Clinical Portal in Under 24 Hours.
              </h2>
              <p className="mt-4 text-base text-[#556977] leading-relaxed">
                Join forward-thinking dental clinics and orthodontic practices across India. Complete the verification form to activate your case submission portal and receive your doctor welcome kit.
              </p>
            </div>

            {/* Doctor Starter Bundle Card */}
            <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-card border border-[#E2EBF0] space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E2EBF0]">
                <div className="w-10 h-10 rounded-xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center font-bold">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#071B2C]">
                    Doctor Welcome Starter Bundle
                  </h3>
                  <p className="text-xs text-[#556977]">
                    Dispatched to your registered clinic upon registration
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#071B2C] block">Free First Case 3D CAD Simulation</span>
                    <span className="text-[#556977]">Experience our sub-millimeter staging quality on an actual patient with zero financial commitment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#071B2C] block">Physical Practice Demo Kit</span>
                    <span className="text-[#556977]">Includes real Standard & Multi-Layer aligner samples, chewies, patient cases, and typodont display.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#071B2C] block">Dedicated Clinical Account Manager</span>
                    <span className="text-[#556977]">Direct contact for case logistics, pickup coordination, and orthodontic staging questions.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2EBF0] text-xs text-[#556977] space-y-1">
              <p className="font-bold text-[#071B2C] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00A6CE]" />
                Direct Clinical Partnership Desk
              </p>
              <p>Email our team directly at <strong className="text-[#00A6CE]">partners@clearnyx.com</strong></p>
              <p>Clinical liaison available Monday to Saturday, 9:00 AM – 7:00 PM IST.</p>
            </div>
          </motion.div>

          {/* Right Column: The Partner Enquiry Form with Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1, ease: luxuryEase }}
            className="lg:col-span-7"
          >
            <PartnerEnquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
