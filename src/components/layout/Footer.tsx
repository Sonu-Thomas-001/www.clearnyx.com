import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800">
      {/* Top Banner: B2B Orientation Banner */}
      <div className="border-b border-navy-800/80 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
              <span className="font-medium text-white">
                B2B Professional Orthodontic Provider
              </span>
              <span>— Exclusively for licensed dentists and orthodontic practices in India</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/become-a-partner"
                className="text-cyan-brand hover:text-cyan-electric transition-colors flex items-center gap-1 font-medium"
              >
                Practice Partnership Enquiries <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="dark" width={180} height={42} />
            <p className="text-sm text-slate-muted leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-muted">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-brand shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contacts.partnerships}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contacts.partnerships}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-brand shrink-0" />
                <span>
                  {SITE_CONFIG.contacts.address.city}, {SITE_CONFIG.contacts.address.state},{" "}
                  {SITE_CONFIG.contacts.address.country} ({SITE_CONFIG.contacts.address.note})
                </span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-cyan-brand">
              Orthodontic Solutions
            </div>
            <ul className="space-y-2.5 text-sm text-slate-muted">
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-white transition-colors"
                >
                  Solutions Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/standard-aligners"
                  className="hover:text-white transition-colors"
                >
                  Standard Aligners (PETG)
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/multi-layer-aligners"
                  className="hover:text-white transition-colors"
                >
                  Multi-Layer Aligners
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="hover:text-white transition-colors"
                >
                  Digital Treatment Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  6-Stage Clinical Workflow
                </Link>
              </li>
            </ul>
          </div>

          {/* For Clinicians Column */}
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-cyan-brand">
              Dental Practice
            </div>
            <ul className="space-y-2.5 text-sm text-slate-muted">
              <li>
                <Link
                  href="/for-dentists"
                  className="hover:text-white transition-colors"
                >
                  For Dentists & Clinics
                </Link>
              </li>
              <li>
                <Link
                  href="/become-a-partner"
                  className="hover:text-white transition-colors"
                >
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white transition-colors"
                >
                  Clinical Insights Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/for-dentists#faq"
                  className="hover:text-white transition-colors"
                >
                  Practice FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Direct Clinical Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate & Legal Column */}
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider uppercase text-cyan-brand">
              Company
            </div>
            <ul className="space-y-2.5 text-sm text-slate-muted">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CLEARNYX
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Orthodontic Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-navy-800/80">
          <div className="p-4 sm:p-5 rounded-xl bg-navy-dark border border-navy-800 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
            <p className="text-xs text-slate-muted leading-relaxed">
              <strong className="text-white font-medium">Professional Clinical Notice:</strong>{" "}
              CLEARNYX is an orthodontic technology and clear aligner solutions brand providing custom appliances and digital treatment planning services exclusively to licensed dental professionals. All diagnostic assessments, case selection, treatment planning approval, wear schedule prescriptions, and clinical monitoring are the exclusive responsibility of the treating dental professional.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-muted">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {SITE_CONFIG.tagline} {SITE_CONFIG.supportingStatement} All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

