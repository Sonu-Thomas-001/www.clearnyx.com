"use client";

import React from "react";
import TestimonialsSection, { TestimonialsData } from "@/components/ui/community-testimonial";

export const clearnyxTestimonialsData: TestimonialsData = {
  title: "Don't just take our word for it",
  subtitle:
    "See what patients and certified orthodontic partners are saying about how CLEARNYX transformed their daily smile journey and clinical outcomes.",
  rows: [
    {
      id: "row1",
      speed: "50s",
      direction: "left",
      testimonials: [
        {
          id: "t1",
          quote:
            "I was nervous about braces at work. CLEARNYX fit into my routine so easily — almost invisible, and the results came faster than I expected.",
          authorName: "Emma R.",
          authorTitle: "Verified Patient • London, UK",
          avatarUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t2",
          quote:
            "The 0.01mm 3D staging and predictable biomechanics give our practice complete clinical confidence with zero chairside rework.",
          authorName: "Dr. Marcus Vance",
          authorTitle: "Orthodontic Director • London Ortho Clinic",
          avatarUrl:
            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t3",
          quote:
            "The digital plan made everything clear from day one. I could see my smile progress in 3D before I even started wearing tray one.",
          authorName: "James M.",
          authorTitle: "Verified Patient • Dubai, UAE",
          avatarUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t4",
          quote:
            "Turnaround time on treatment plans is remarkably fast. Patient compliance is at an all-time high with CLEARNYX clarity.",
          authorName: "Dr. Aaron Chen",
          authorTitle: "Consultant Orthodontist • Apex Smiles",
          avatarUrl:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&h=200&q=80",
        },
      ],
    },
    {
      id: "row2",
      speed: "42s",
      direction: "right",
      testimonials: [
        {
          id: "t5",
          quote:
            "Comfortable, removable, and doctor-guided. I kept up with client dinners and speaking events without feeling like I was in treatment.",
          authorName: "Sophie L.",
          authorTitle: "Verified Patient • Singapore",
          avatarUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t6",
          quote:
            "Our patient compliance is up 40% with CLEARNYX. The multi-layer polymer delivers gentle, continuous force with exceptional optical clarity.",
          authorName: "Dr. Elena Rostova",
          authorTitle: "Lead Orthodontist • Zurich Dental Care",
          avatarUrl:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t7",
          quote:
            "No wires, no gum cuts, and nobody even noticed I was wearing aligners during high-stakes presentations.",
          authorName: "David K.",
          authorTitle: "Verified Patient • Sydney, Australia",
          avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t8",
          quote:
            "Laser-trimmed gingival margins make a huge difference in comfort. Patients wear them 22 hours effortlessly.",
          authorName: "Dr. Priya Patel",
          authorTitle: "Aesthetic Dentist • London, UK",
          avatarUrl:
            "https://images.unsplash.com/photo-1594824813571-638f02614d3f?auto=format&fit=crop&w=200&h=200&q=80",
        },
      ],
    },
    {
      id: "row3",
      speed: "55s",
      direction: "left",
      testimonials: [
        {
          id: "t9",
          quote:
            "The precision fit was noticeable from week one. My crowding resolved right on schedule with the digital smile simulator.",
          authorName: "Maya S.",
          authorTitle: "Verified Patient • Toronto, Canada",
          avatarUrl:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t10",
          quote:
            "As an orthodontist, predictable root control is everything. CLEARNYX's multi-stage staging algorithms deliver unmatched reliability.",
          authorName: "Dr. Julian Keller",
          authorTitle: "Specialist Orthodontist • Berlin",
          avatarUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t11",
          quote:
            "I closed my gap in just 4 months. The companion case and doctor check-ins made the entire process so easy and reassuring.",
          authorName: "Alex C.",
          authorTitle: "Verified Patient • New York, USA",
          avatarUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
        },
        {
          id: "t12",
          quote:
            "Patients appreciate knowing their trays are designed with certified orthodontists and custom medical polymers.",
          authorName: "Dr. Chloe Martin",
          authorTitle: "Clinical Partner • Melbourne",
          avatarUrl:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
        },
      ],
    },
  ],
};

export default function DemoOne() {
  return (
    <div
      className="app-root relative w-full flex items-center justify-center py-10"
      aria-label="Testimonials showcase"
    >
      <TestimonialsSection data={clearnyxTestimonialsData} />
    </div>
  );
}
