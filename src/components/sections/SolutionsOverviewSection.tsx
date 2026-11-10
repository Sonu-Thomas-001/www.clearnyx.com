import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SOLUTIONS } from "@/content/solutions";

export function SolutionsOverviewSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="cyan">PORTFOLIO OVERVIEW</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Clear Aligner Solutions for Different Treatment Needs.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
              Explore our two tailored clear aligner solutions developed to provide clinical adaptability across varying orthodontic complexities.
            </p>
          </div>
          <Button
            href="/solutions"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-end"
          >
            Explore All Solutions
          </Button>
        </div>

        {/* 2 Featured Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SOLUTIONS.map((solution, index) => (
            <div
              key={solution.id}
              className="bg-white rounded-2xl border border-surface-border overflow-hidden shadow-card flex flex-col justify-between hover:border-cyan-300 transition-all duration-300 group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-surface-subtle overflow-hidden border-b border-surface-border">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-navy-900 border border-surface-border shadow-sm">
                      {solution.scope}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="text-xs font-bold text-cyan-brand tracking-wider uppercase">
                    {solution.material}
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-slate-secondary leading-relaxed">
                    {solution.materialDescription}
                  </p>

                  {/* Key Characteristics */}
                  <div className="pt-2 space-y-2 border-t border-surface-subtle">
                    <div className="text-xs font-semibold text-navy-900 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    {solution.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-secondary">
                        <Check className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 sm:px-8 sm:py-5 bg-surface-soft border-t border-surface-border flex items-center justify-between">
                <span className="text-xs text-slate-muted">
                  Requires professional clinical assessment
                </span>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-cyan-brand transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Qualification Note */}
        <div className="mt-8 text-center text-xs text-slate-muted">
          * Note: Treatment suitability, material selection, and clinical feasibility are determined solely by the treating dental professional following comprehensive diagnostic assessment.
        </div>
      </div>
    </section>
  );
}
