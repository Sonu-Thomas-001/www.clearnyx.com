import React from "react";
import { ArrowRight, Mail, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-surface-soft to-surface-soft border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-elevated">
          {/* Subtle cyan ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-brand/20 text-cyan-electric border border-cyan-400/30">
                PRACTICE COLLABORATION
              </span>
              <span className="hidden sm:inline-flex text-xs text-slate-muted items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-brand" />
                Verified Dental Practices Across India
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Move Orthodontic Care Forward.
            </h2>

            <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-2xl">
              Connect with CLEARNYX to explore customized clear aligner solutions, digital treatment planning workflows, and collaborative practice onboarding for your dental clinic.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                href="/become-a-partner"
                variant="cyan"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold shadow-cyan"
              >
                Become a Partner
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:border-white hover:bg-white/10"
              >
                Contact Our Team
              </Button>
            </div>

            <div className="pt-4 border-t border-navy-800 flex flex-wrap items-center gap-6 text-xs text-slate-muted">
              <div>Inquiries: <span className="text-white font-medium">partners@clearnyx.com</span></div>
              <div>Direct Support: <span className="text-white font-medium">info@clearnyx.com</span></div>
              <div>Market: <span className="text-cyan-brand font-medium">India</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
