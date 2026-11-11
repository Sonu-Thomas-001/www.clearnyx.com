"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useBookModal } from "./BookModalContext";

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
        <p className="lp-eyebrow">FAQ</p>
        <h2>Frequently asked questions</h2>

        <div className="accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full py-5 text-left"
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
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: CTA Box Card */}
      <aside className="lp-cta-card">
        <div className="lp-cta-media relative w-full h-[200px] flex items-center justify-center">
          <div className="absolute w-44 h-44 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />
          <Image
            src="/images/showcase/aligner-cutout.png"
            alt="CLEARNYX Precision Clear Aligner Tray"
            width={240}
            height={160}
            className="relative z-10 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="lp-cta-copy">
          <h2>
            Ready to transform your <em className="text-brand-cyan not-italic font-bold">smile?</em>
          </h2>
          <p>
            Book a consultation and take the first step toward lasting orthodontic confidence.
          </p>
          <button
            type="button"
            className="book-link button button-yellow inline-flex items-center gap-2"
            onClick={() => openModal("consultation")}
          >
            <span>Book Consultation</span>
            <span aria-hidden="true" className="arrow diagonal">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" focusable="false">
                <path
                  d="M3 8h9.2M8.5 3.8 12.7 8l-4.2 4.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </aside>
    </section>
  );
}

