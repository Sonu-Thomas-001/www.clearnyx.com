import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_CONFIG } from "@/config/site";
import { Mail, MapPin, ShieldCheck, Clock } from "lucide-react";
import { LocationMapSection } from "@/components/clearnyx/LocationMapSection";

export const metadata: Metadata = {
  title: "Contact CLEARNYX | Clear Aligner Provider Support & Enquiries",
  description:
    "Connect with CLEARNYX: India's trusted clear aligner provider. Clinical digital planning onboarding, aligner specifications, and dental practice partnerships across India.",
  alternates: {
    canonical: "https://www.clearnyx.com/contact",
  },
  keywords: [
    "contact CLEARNYX",
    "clear aligner provider contact",
    "aligner lab Bengaluru",
    "b2b clear aligner enquiry",
    "dental clinic aligner support",
  ],
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us", href: "/contact" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <PageHeader
        eyebrow="COMMUNICATION & INQUIRIES"
        title="Let's Start a Conversation."
        description="Have questions about CLEARNYX solutions, digital treatment planning workflows, or professional practice partnerships? Connect with our team."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Channels & Business Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Professional Inquiries & Support
                </h2>
                <p className="mt-3 text-sm text-slate-secondary leading-relaxed">
                  Our clinical planning and account management team is available Monday through Saturday to support dental clinics across India.
                </p>
              </div>

              {/* Department Emails */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-surface-soft border border-surface-border space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                    Direct Email Channels
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-muted">General Enquiries:</div>
                        <a
                          href={`mailto:${SITE_CONFIG.contacts.general}`}
                          className="font-semibold text-navy-900 hover:text-cyan-brand transition-colors"
                        >
                          {SITE_CONFIG.contacts.general}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-muted">Practice Partnerships:</div>
                        <a
                          href={`mailto:${SITE_CONFIG.contacts.partnerships}`}
                          className="font-semibold text-navy-900 hover:text-cyan-brand transition-colors"
                        >
                          {SITE_CONFIG.contacts.partnerships}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-slate-muted">Sales & Commercial Orders:</div>
                        <a
                          href={`mailto:${SITE_CONFIG.contacts.sales}`}
                          className="font-semibold text-navy-900 hover:text-cyan-brand transition-colors"
                        >
                          {SITE_CONFIG.contacts.sales}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operations & Location */}
                <div className="p-5 rounded-2xl bg-surface-soft border border-surface-border space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                    Operations Center
                  </div>
                  <div className="flex items-start gap-3 text-sm text-navy-900">
                    <MapPin className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{SITE_CONFIG.contacts.address.line1}</div>
                      <div className="text-xs text-slate-secondary">
                        {SITE_CONFIG.contacts.address.city}, {SITE_CONFIG.contacts.address.state},{" "}
                        {SITE_CONFIG.contacts.address.country}
                      </div>
                      <div className="text-[11px] text-slate-muted mt-0.5">
                        {SITE_CONFIG.contacts.address.note}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-2xl bg-surface-soft border border-surface-border space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                    Clinical Planning Hours
                  </div>
                  <div className="flex items-start gap-3 text-sm text-navy-900">
                    <Clock className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-secondary leading-relaxed">
                      Monday – Saturday: 9:30 AM – 6:30 PM (IST)
                      <br />
                      Sunday & National Holidays: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Safety Notice */}
              <div className="p-4 rounded-xl bg-ice-soft/40 border border-cyan-200 text-xs text-slate-secondary flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                <span>
                  <strong>Clinical Notice:</strong> Please do not submit patient identifiable health records (PHI) via general website contact forms. Approved case files should only be transmitted via encrypted doctor portal channels.
                </span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <LocationMapSection />
    </>
  );
}

