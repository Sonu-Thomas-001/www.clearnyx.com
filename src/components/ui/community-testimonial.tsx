"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
}

export interface TestimonialRow {
  id: string;
  speed?: string;
  direction?: "left" | "right";
  testimonials: TestimonialItem[];
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  rows: TestimonialRow[];
}

export interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
}

/**
 * TestimonialCard
 * Props: quote, authorName, authorTitle, avatarUrl
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
  avatarUrl,
}) => {
  return (
    <div className="testimonial-card flex flex-col items-start justify-between gap-4 p-6 bg-white rounded-2xl border border-[#00A6CE]/15 shadow-[0_10px_30px_-10px_rgba(7,27,44,0.06)] hover:shadow-xl hover:border-[#00A6CE]/35 transition-all duration-300 w-80 sm:w-96 flex-shrink-0">
      <p className="text-[#102A3A] text-[15px] sm:text-base leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3.5 mt-2">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-[#00A6CE]/20 flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={authorName}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-base font-bold text-[#071B2C] leading-snug">{authorName}</h4>
          <p className="text-xs font-medium text-[#647887] leading-tight mt-0.5">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export interface HorizontalScrollerProps {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}

/**
 * HorizontalScroller
 * Props: children, speed (e.g., "40s"), direction ("left" | "right")
 */
export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  speed = "40s",
  direction = "left",
}) => {
  const animationClass =
    direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade">
      <div
        className={`flex ${animationClass}`}
        style={{ ["--scroll-duration" as any]: speed }}
      >
        <div className="flex items-stretch justify-center gap-6 sm:gap-8 px-3 sm:px-4 flex-shrink-0">
          {children}
        </div>
        <div
          className="flex items-stretch justify-center gap-6 sm:gap-8 px-3 sm:px-4 flex-shrink-0"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export interface TestimonialsSectionProps {
  data: TestimonialsData;
}

/**
 * TestimonialsSection
 * Props: data { title, subtitle, rows[] }
 */
export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section relative flex flex-col items-center gap-10 sm:gap-14 py-20 px-4 w-full max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: luxuryEase }}
        className="flex flex-col items-center gap-4 text-center z-10 max-w-2xl px-4"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F5FA] border border-[#00A6CE]/25 text-[#00A6CE] text-xs font-bold uppercase tracking-wider">
          Patient & Doctor Stories
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-tight">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-[#556977] leading-relaxed max-w-xl">
          {data.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.15, ease: luxuryEase }}
        className="flex flex-col gap-6 z-10 w-full max-w-7xl"
      >
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
                avatarUrl={t.avatarUrl}
              />
            ))}
          </HorizontalScroller>
        ))}
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(221,247,252,0.45) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
    </section>
  );
}

