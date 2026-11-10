import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

export function BrandStatementSection() {
  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="cyan" size="md">
            OUR PURPOSE
          </Badge>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.08]">
            Redefining Smiles.
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-cyan-brand tracking-wide">
            Precision. Comfort. Confidence.
          </p>

          <p className="text-base sm:text-lg text-slate-secondary max-w-2xl mx-auto leading-relaxed pt-2">
            Every clinical case is a collaborative partnership between dental science, digital innovation, and doctor expertise. We exist to make advanced orthodontic therapy predictable, comfortable, and accessible through certified dental professionals.
          </p>
        </div>

        {/* Large Curated Macro Aligner Image with Generous Whitespace */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] sm:aspect-[2.4/1] rounded-2xl overflow-hidden bg-surface-soft border border-surface-border shadow-elevated">
            <Image
              src="/images/products/clearnyx-aligner-macro.webp"
              alt="CLEARNYX Clear Aligner Macro Photography — Precision Optical Clarity"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white text-xs sm:text-sm font-medium tracking-wide">
              CLEARNYX High-Clarity Orthodontic System
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
