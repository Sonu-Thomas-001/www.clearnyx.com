import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | CLEARNYX Orthodontic Solutions",
  description:
    "Terms of use and professional service conditions governing the CLEARNYX corporate website and orthodontic partnership platform.",
  alternates: {
    canonical: "https://www.clearnyx.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbs = [{ label: "Terms & Conditions", href: "/terms-and-conditions" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Terms & Conditions", url: "/terms-and-conditions" },
        ]}
      />

      <PageHeader
        eyebrow="LEGAL TERMS & GOVERNANCE"
        title="Terms and Conditions"
        description="The terms and conditions governing the use of the CLEARNYX corporate website and our business-to-business professional orthodontic solutions."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Legal Review Notice */}
          <div className="p-5 rounded-xl bg-surface-soft border border-surface-border flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
            <div className="text-xs text-slate-secondary leading-relaxed">
              <strong className="text-navy-900 font-semibold">Legal Notice:</strong>{" "}
              These Terms and Conditions constitute a general corporate governance framework. Specific clinical manufacturing agreements, laboratory service-level agreements, and doctor onboarding terms are governed by dedicated commercial contracts executed directly with licensed practices.
            </div>
          </div>

          <div className="space-y-8 text-sm text-slate-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or browsing this website (<strong>https://www.clearnyx.com</strong>), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue using this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                2. Business-to-Business (B2B) Nature of CLEARNYX
              </h2>
              <p>
                CLEARNYX operates strictly as a B2B orthodontic solutions provider. We do not provide clinical treatment directly to patients or sell clear aligners to the general public. All content, technical specifications, and digital planning descriptions are intended exclusively for certified dental professionals, orthodontists, and dental institutions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                3. Clinical Responsibility and Doctor Autonomy
              </h2>
              <div className="p-4 rounded-xl bg-surface-soft border border-surface-border space-y-2 text-navy-900">
                <p className="font-semibold text-xs uppercase tracking-wider text-cyan-brand">
                  Exclusive Professional Responsibility:
                </p>
                <p className="text-xs sm:text-sm text-slate-secondary leading-relaxed">
                  CLEARNYX clear aligners are custom-manufactured orthodontic appliances fabricated pursuant to a clinician&apos;s prescription. The treating dental practitioner maintains sole and uncompromised responsibility for all patient selection, diagnosis, radiographic analysis, treatment feasibility, IPR execution, attachment placement, staging approval, and clinical oversight.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                4. Intellectual Property Rights
              </h2>
              <p>
                All trademarks, trade names, brand logos, product names, text, graphics, and digital assets appearing on this website are the proprietary property of <strong>{SITE_CONFIG.legalName}</strong> or licensed third parties. Unauthorized copying, distribution, reverse engineering, or commercial reproduction is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                5. Website Content and Product Information
              </h2>
              <p>
                While CLEARNYX strives to maintain accurate and up-to-date product specifications, materials information, and workflow descriptions, we do not warrant that all content is free from inadvertent typographical errors or technical inaccuracies. Material properties described reflect brand documentation and do not constitute express product warranties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted under applicable law, CLEARNYX and its directors, officers, employees, and agents shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your access to or inability to access this website, or reliance on information contained herein.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                7. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                8. Contact for Legal Enquiries
              </h2>
              <p>
                For official correspondence regarding these Terms and Conditions:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-surface-soft border border-surface-border text-xs space-y-1">
                <div><strong>CLEARNYX Orthodontic Technologies</strong></div>
                <div>Legal & Corporate Affairs</div>
                <div>Email: <a href={`mailto:${SITE_CONFIG.contacts.general}`} className="text-cyan-brand font-medium">{SITE_CONFIG.contacts.general}</a></div>
                <div>Website: <a href="https://www.clearnyx.com" className="text-cyan-brand font-medium">www.clearnyx.com</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

