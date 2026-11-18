"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useBookModal } from "./BookModalContext";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "01",
    num: "01",
    question: "What Is CLEARNYX Aligner?",
    answer:
      "CLEARNYX aligners are custom invisible orthodontic devices that gradually shift teeth into their ideal positions using advanced medical-grade polymer engineering.",
  },
  {
    id: "02",
    num: "02",
    question: "How Do CLEARNYX Aligners Work?",
    answer:
      "Each aligner applies gentle, controlled pressure. You progress through a doctor-planned series of trays so teeth move step by step toward the planned clinical result.",
  },
  {
    id: "03",
    num: "03",
    question: "Are they comfortable?",
    answer:
      "They are made from smooth medical-grade material with no brackets or wires. Mild pressure when starting a new set is normal and usually settles quickly within 24–48 hours.",
  },
  {
    id: "04",
    num: "04",
    question: "Eat/drink while wearing?",
    answer:
      "Aligners are completely removable. Take them out for meals and for drinks other than cool water, then brush before putting them back in to maintain hygiene.",
  },
];

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openModal } = useBookModal();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="lp-faq-cta section-pad max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Column: FAQ Accordion */}
      <div className="lp-faq-col">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: luxuryEase }}
          className="lp-eyebrow"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
        >
          Frequently asked questions
        </motion.h2>

        <div className="accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: luxuryEase,
                }}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full py-5 text-left cursor-pointer"
                >
                  <span className="text-slate text-xs font-mono w-10">
                    {faq.num}
                  </span>
                  <b className="flex-1 text-base font-semibold text-navy-deep">
                    {faq.question}
                  </b>
                  <i className="text-xl font-light text-navy-deep not-italic ml-4">
                    {isOpen ? "−" : "+"}
                  </i>
                </button>
                {isOpen && (
                  <div className="faq-answer pb-5 pl-10 pr-4 text-slate text-sm leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Refined Luxury CTA Box Card */}
      <motion.aside
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
        className="relative rounded-3xl p-7 sm:p-9 lg:p-10 border border-[#00A6CE]/20 bg-gradient-to-br from-[#FAFEFF] via-[#F3FAFC] to-[#E8F6FA] shadow-[0_20px_50px_-15px_rgba(7,27,44,0.06),0_8px_20px_-4px_rgba(0,166,206,0.06)] overflow-hidden flex flex-col md:grid md:grid-cols-12 gap-8 items-center"
      >
        {/* Subtle Precision Dot Mesh Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00A6CE 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Soft Ambient Clinical Light Spot behind the Aligner */}
        <div
          className="absolute -top-10 -left-10 w-96 h-96 pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(221,247,252,0.6) 45%, rgba(0,166,206,0.04) 75%, transparent 100%)",
          }}
        />

        {/* Subtle Bottom Corner Glow */}
        <div
          className="absolute -bottom-16 -right-16 w-80 h-80 pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(221,247,252,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Left Sub-Column: 3D Aligner Showcase */}
        <div className="md:col-span-5 relative w-full h-[210px] sm:h-[240px] flex items-center justify-center">
          {/* Soft Ground Contact Shadow */}
          <div className="absolute bottom-6 w-44 h-5 bg-[#071B2C]/[0.07] rounded-full blur-md pointer-events-none" />
          <div className="absolute bottom-5 w-32 h-4 bg-[#00A6CE]/[0.12] rounded-full blur-sm pointer-events-none" />

          {/* Precision 3D Aligner Cutout */}
          <Image
            src="/images/showcase/aligner-cutout.png"
            alt="CLEARNYX Precision Clear Aligner Tray"
            width={270}
            height={180}
            className="relative z-10 object-contain drop-shadow-[0_12px_24px_rgba(7,27,44,0.10)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Sub-Column: Editorial Action Copy */}
        <div className="md:col-span-7 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F5FA] border border-[#00A6CE]/25 text-[#00A6CE] text-[11px] font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
            <span>Practice Collaboration</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-[#071B2C] tracking-tight leading-[1.15] mb-3">
            Ready to elevate your{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#00BCE6] to-[#0092B5] italic">
              aligner practice?
            </span>
          </h2>

          <p className="text-sm text-[#556977] leading-relaxed mb-5 max-w-sm">
            Partner with CLEARNYX for doctor-directed clear aligners, open scanner compatibility, and 48–72h 3D CAD staging turnaround.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6 text-xs text-[#556977]">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A6CE]" />
              <span>100% Doctor-Directed</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A6CE]" />
              <span>48–72h CAD Staging</span>
            </span>
          </div>

          {/* Action Trigger Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00A6CE] to-[#0094BA] hover:from-[#0094BA] hover:to-[#007F9F] text-white font-bold text-sm tracking-wide shadow-md shadow-[#00A6CE]/30 hover:shadow-lg hover:shadow-[#00A6CE]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            onClick={() => openModal("partner")}
          >
            <span>Request Practice Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.aside>
    </section>
  );
}
