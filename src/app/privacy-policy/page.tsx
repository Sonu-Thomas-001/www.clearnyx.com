import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CLEARNYX Orthodontic Solutions",
  description:
    "Privacy policy and data processing guidelines for CLEARNYX website users, dental practitioners, and partner clinics across India.",
  alternates: {
    canonical: "https://www.clearnyx.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Privacy Policy", href: "/privacy-policy" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy" },
        ]}
      />

      <PageHeader
        eyebrow="DATA PROTECTION & COMPLIANCE"
        title="Privacy Policy"
        description="How CLEARNYX collects, processes, and protects professional information submitted by dental clinicians, practice partners, and website visitors."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Legal Notice Callout */}
          <div className="p-5 rounded-xl bg-surface-soft border border-surface-border flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
            <div className="text-xs text-slate-secondary leading-relaxed">
              <strong className="text-navy-900 font-semibold">Legal Review Notice:</strong>{" "}
              This Privacy Policy documents our current standard data handling practices for business-to-business (B2B) dental inquiries. It is subject to continuous review in alignment with India&apos;s Digital Personal Data Protection Act (DPDP Act) and applicable health data regulations.
            </div>
          </div>

          <div className="space-y-8 text-sm text-slate-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                1. Identification of Data Fiduciary
              </h2>
              <p>
                This website is operated by <strong>{SITE_CONFIG.legalName}</strong> (&ldquo;CLEARNYX&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We provide clear aligner manufacturing and digital treatment planning services exclusively to registered dental practitioners, orthodontists, and dental institutions across India.
              </p>
              <p className="mt-2">
                For queries regarding our privacy practices, you may contact our designated data officer at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contacts.general}`}
                  className="text-cyan-brand font-medium hover:underline"
                >
                  {SITE_CONFIG.contacts.general}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                2. Information We Collect
              </h2>
              <p>
                We collect information directly from dental professionals when you voluntarily complete our Contact Form, Partner Enquiry Form, or communicate with our clinical representatives:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Professional identity details (Full Name, Professional Designation, MDS/BDS registration details where applicable).</li>
                <li>Clinic and practice information (Clinic/Organization Name, Practice Address, City, State).</li>
                <li>Business contact details (Professional Email Address, Mobile/Telephone Number).</li>
                <li>Practice interest categories (Specific aligner systems, case volumes, scanner compatibility inquiries).</li>
                <li>Technical website telemetry (IP address, browser type, device information, and anonymous session analytics).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                3. Explicit Prohibition of Patient Health Records on Marketing Forms
              </h2>
              <p className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 font-medium">
                IMPORTANT: CLEARNYX general website forms (Contact and Partner Registration) are intended strictly for initial business and professional communication. Dental clinicians must NEVER upload or transmit identifiable patient health records, diagnostic photographs, or patient personal data through these marketing forms. Validated patient treatment files must only be submitted through secure, authorized doctor portal channels.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                4. Purpose of Data Processing
              </h2>
              <p>We process professional information exclusively for legitimate business purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Evaluating and verifying clinical partnership applications.</li>
                <li>Providing clinical support, product documentation, and starter onboarding materials.</li>
                <li>Coordinating door-to-practice aligner delivery logistics within India.</li>
                <li>Responding to doctor queries regarding materials, pricing, and treatment planning workflows.</li>
                <li>Maintaining regulatory records and operational security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                5. Third-Party Services and Analytics
              </h2>
              <p>
                We do not sell, rent, or trade your professional contact information. We may share information with vetted technical infrastructure providers (such as hosting platforms, email delivery systems, and analytics providers) bound by strict confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                6. Data Retention and Security
              </h2>
              <p>
                We apply modern technical, organizational, and physical safeguards—including SSL/TLS encryption, restricted access protocols, and regular system audits—to protect your professional information from unauthorized disclosure, alteration, or destruction. Information is retained only as long as necessary to fulfill clinical partnership objectives or comply with applicable Indian laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                7. Your Legal Rights
              </h2>
              <p>
                Under applicable Indian data protection frameworks, you have the right to request access to your submitted personal information, request corrections or updates, withdraw consent to marketing communications, or request data deletion subject to statutory retention obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                8. Contact Information
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise your rights, please reach out to:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-surface-soft border border-surface-border text-xs space-y-1">
                <div><strong>CLEARNYX Orthodontic Technologies</strong></div>
                <div>Attention: Privacy & Compliance Officer</div>
                <div>Email: <a href={`mailto:${SITE_CONFIG.contacts.general}`} className="text-cyan-brand font-medium">{SITE_CONFIG.contacts.general}</a></div>
                <div>Website: <a href="https://www.clearnyx.com" className="text-cyan-brand font-medium">www.clearnyx.com</a></div>
                <div>Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

