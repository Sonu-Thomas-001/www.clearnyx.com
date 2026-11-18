"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

interface FAQ {
  category: "Workflow" | "Biomechanics" | "Economics";
  question: string;
  answer: string;
}

const DOCTOR_FAQS: FAQ[] = [
  {
    category: "Workflow",
    question: "What is the typical turnaround time for an initial 3D digital staging setup?",
    answer:
      "Upon receiving your intraoral scan files (STL/PLY/OBJ) and clinical prescription photos, our orthodontic CAD team delivers the interactive 3D simulation within 48 to 72 business hours. You will receive an SMS and email notification with an instant web viewer link.",
  },
  {
    category: "Workflow",
    question: "Do you accept conventional PVS (polyvinyl siloxane) physical impressions?",
    answer:
      "Yes. While open digital intraoral scans (iTero, Medit, 3Shape, Carestream, Primescan) provide the fastest turnaround, we provide complimentary insured reverse-courier pickup for high-precision PVS impressions across tier-1 and tier-2 cities in India. We optically digitize your impressions in our lab with 0.01mm optical bench scanners.",
  },
  {
    category: "Workflow",
    question: "How are mid-treatment revisions and refinements handled?",
    answer:
      "If a tooth lags behind tracking or requires additional vector correction, you can submit a refinement scan directly through your doctor portal. All initial treatment staging packages include complimentary refinements as part of our clinical partnership commitment.",
  },
  {
    category: "Biomechanics",
    question: "What are your biomechanical movement velocity constraints per stage?",
    answer:
      "To prevent tracking loss and biologically hazardous forces, our CAD protocols cap linear translation at 0.20mm–0.22mm per stage and rotational movement at 1.5°–1.8° per stage. Any severe movements automatically trigger optimized composite attachment recommendations and staged IPR protocols for doctor review.",
  },
  {
    category: "Biomechanics",
    question: "When should I prescribe Standard PETG versus Multi-Layer Pro?",
    answer:
      "Standard High-Clarity PETG is ideal for mild anterior alignment, minor spacing, and simple aesthetic relapses where rigid initial seating is required. Multi-Layer Pro features an elastomeric core sandwiched between durable outer shells, making it optimal for complex rotations, root torque, deep bites, and premolar movements requiring sustained continuous low-magnitude force.",
  },
  {
    category: "Biomechanics",
    question: "How are the aligners trimmed and finished along the gingival margin?",
    answer:
      "All CLEARNYX aligners are automated 5-axis laser-trimmed with a smooth scalloped margin following the patient's individual gingival contours (0.5mm above the gingival crest). This minimizes soft-tissue irritation, avoids papilla blanching, and enhances patient compliance.",
  },
  {
    category: "Economics",
    question: "Are there any annual case quotas or minimum commitments?",
    answer:
      "No. CLEARNYX has zero annual case minimums and zero tier demotion penalties. Whether your clinic submits 2 cases a year or 30 cases a month, you receive the same transparent B2B laboratory pricing and dedicated clinical account support.",
  },
  {
    category: "Economics",
    question: "Does CLEARNYX ever market directly to patients or offer direct kits?",
    answer:
      "Never. We maintain a strict doctor-led philosophy. Clear aligners are medical appliances that require professional clinical diagnosis, periodontal evaluation, and chairside supervision. We never bypass your clinic, sell kits online, or solicit your patients.",
  },
];

export function DoctorFaqSection() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Workflow" | "Biomechanics" | "Economics">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    activeCategory === "All"
      ? DOCTOR_FAQS
      : DOCTOR_FAQS.filter((f) => f.category === activeCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wide mb-3">
            CLINICAL & OPERATIONAL FAQS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Frequently Asked Clinician Questions.
          </h2>
          <p className="mt-4 text-base text-slate-secondary">
            Everything you need to know about integrating CLEARNYX into your daily clinical practice.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {(["All", "Workflow", "Biomechanics", "Economics"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-navy-900 text-white shadow-sm font-bold"
                  : "bg-white text-slate-600 border border-surface-border hover:bg-surface-subtle"
              }`}
            >
              {cat === "All" ? "All Questions" : cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion List with Scroll Stagger */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3), ease: luxuryEase }}
                className="rounded-2xl bg-white border border-surface-border overflow-hidden transition-all shadow-subtle hover:shadow-card"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-navy-900 text-sm sm:text-base hover:text-cyan-brand transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-surface-subtle text-slate-500 font-semibold border border-surface-border">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-brand" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-secondary leading-relaxed border-t border-surface-subtle">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
          className="mt-12 text-center p-6 rounded-2xl bg-white border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="text-sm font-bold text-navy-900">Have a specific case to discuss?</h4>
            <p className="text-xs text-slate-secondary">Our orthodontic CAD staging consultants are available for direct clinical review.</p>
          </div>
          <a
            href="mailto:partners@clearnyx.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-cyan-brand hover:text-navy-900 transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult an Orthodontist</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
