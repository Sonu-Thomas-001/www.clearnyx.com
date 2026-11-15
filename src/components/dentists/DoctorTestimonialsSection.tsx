"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, Quote, Building, Award } from "lucide-react";

interface DoctorTestimonial {
  quote: string;
  name: string;
  qualification: string;
  clinic: string;
  location: string;
  casesTreated: string;
  scanner: string;
}

const DOCTOR_TESTIMONIALS: DoctorTestimonial[] = [
  {
    quote:
      "CLEARNYX has completely changed how I offer aligners in my clinic. The staging velocity control is realistic—I rarely see tracking lag in lower incisor rotations, and the 48-hour CAD turnaround lets me present simulations to patients in their very next visit.",
    name: "Dr. Ananya Sharma",
    qualification: "MDS (Orthodontics & Dentofacial Orthopedics)",
    clinic: "Aesthetic Smiles Orthodontic Centre",
    location: "Mumbai, Maharashtra",
    casesTreated: "140+ Aligner Cases",
    scanner: "iTero Element 5D",
  },
  {
    quote:
      "The biggest relief is their strict B2B policy. They never market directly to my patients or send DIY impression kits. The Multi-Layer Pro material has great elastic recovery, especially for stubborn premolar torque.",
    name: "Dr. Rajesh Kulkarni",
    qualification: "BDS, Fellowship in Aesthetic Dentistry",
    clinic: "Apex Dental Care & Implantology",
    location: "Bangalore, Karnataka",
    casesTreated: "85+ Aligner Cases",
    scanner: "Medit i700",
  },
  {
    quote:
      "Unlike legacy foreign brands where you wait 10 days just to get a CAD setup and then talk to an offshore call center, CLEARNYX puts me directly on phone or screen-share with the orthodontic planner. Staging modifications take minutes.",
    name: "Dr. Vikramaditya Rao",
    qualification: "MDS, Senior Consultant Orthodontist",
    clinic: "Rao Orthodontic Super-Speciality",
    location: "New Delhi, NCR",
    casesTreated: "220+ Aligner Cases",
    scanner: "3Shape TRIOS 4",
  },
];

export function DoctorTestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wide mb-3">
            PRACTICE EXPERIENCES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Trusted by Orthodontists & Dental Surgeons Across India.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-secondary">
            Hear directly from clinicians who run active clear aligner practices using the CLEARNYX B2B lab workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTOR_TESTIMONIALS.map((doc, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-surface-border p-8 shadow-card flex flex-col justify-between hover:shadow-elevated transition-shadow"
            >
              <div className="space-y-4">
                {/* Top Badges */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 font-bold border border-cyan-100">
                    {doc.scanner}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{doc.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border space-y-1">
                <h3 className="font-bold text-navy-900 text-base">
                  {doc.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-brand">
                  {doc.qualification}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-secondary pt-1">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{doc.clinic}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-muted pt-2 border-t border-surface-subtle mt-2">
                  <span>{doc.location}</span>
                  <span className="font-semibold text-navy-900">{doc.casesTreated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
