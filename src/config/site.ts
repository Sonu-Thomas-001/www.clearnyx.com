import { NavItem } from "@/types";

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  supportingStatement: string;
  description: string;
  url: string;
  canonicalHost: string;
  market: string;
  businessModel: string;
  establishedYear: number;
  contacts: {
    general: string;
    sales: string;
    partnerships: string;
    support: string;
    phone: string;
    phoneDisplay: string;
    address: {
      line1: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      note: string;
    };
  };
  socials: {
    linkedin: string;
    instagram: string;
    twitter: string;
  };
  nav: {
    main: NavItem[];
    cta: {
      label: string;
      href: string;
    };
    legal: { label: string; href: string }[];
  };
  colors: {
    deepNavy: string;
    darkNavy: string;
    brandCyan: string;
    electricCyan: string;
    iceBlue: string;
    pureWhite: string;
    softWhite: string;
    lightGrey: string;
    slate: string;
    darkText: string;
  };
  analytics: {
    gaMeasurementId: string;
    gtmId: string;
    clarityId: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "CLEARNYX",
  legalName: "CLEARNYX Orthodontic Technologies India",
  tagline: "Redefining Smiles.",
  supportingStatement: "Precision. Comfort. Confidence.",
  description:
    "CLEARNYX provides premium clear aligner solutions, digital treatment planning, and collaborative orthodontic workflows exclusively for certified dentists, orthodontists, and dental clinics across India.",
  url: "https://www.clearnyx.com",
  canonicalHost: "www.clearnyx.com",
  market: "India",
  businessModel: "B2B Orthodontic Solutions",
  establishedYear: 2026,
  contacts: {
    general: "info@clearnyx.com",
    sales: "sales@clearnyx.com",
    partnerships: "partners@clearnyx.com",
    support: "support@clearnyx.com",
    phone: "+91 98765 43210",
    phoneDisplay: "+91 (0) 80 CLEAR-NYX",
    address: {
      line1: "India Corporate Office",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalCode: "560001",
      note: "Operations & Digital Planning Center",
    },
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/clearnyx",
    instagram: "https://www.instagram.com/clearnyx.india",
    twitter: "https://twitter.com/clearnyx",
  },
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Solutions",
        href: "/solutions",
        children: [
          {
            label: "All Solutions Overview",
            href: "/solutions",
            description: "Complete clear aligner product portfolio designed for dental practices.",
          },
          {
            label: "Standard Clear Aligners",
            href: "/solutions/standard-aligners",
            description: "PETG material engineered for mild to moderate alignment requirements.",
          },
          {
            label: "Multi-Layer Clear Aligners",
            href: "/solutions/multi-layer-aligners",
            description: "Engineered multi-layer construction offering strength, flexibility, and control.",
          },
        ],
      },
      { label: "Technology", href: "/technology" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "For Dentists", href: "/for-dentists" },
      {
        label: "Resources",
        href: "/resources",
        children: [
          {
            label: "Knowledge & Insights",
            href: "/resources",
            description: "Clinical orthodontic perspectives, digital workflows, and practice guides.",
          },
          {
            label: "Treatment Planning Guide",
            href: "/resources#treatment-planning",
            description: "Best practices for digital impression submission and case review.",
          },
          {
            label: "Material Comparison",
            href: "/resources#material-comparison",
            description: "Scientific comparison between PETG and Multi-Layer aligner polymers.",
          },
        ],
      },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Become a Partner",
      href: "/become-a-partner",
    },
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  colors: {
    deepNavy: "#071B2C",
    darkNavy: "#061321",
    brandCyan: "#00A6CE",
    electricCyan: "#12C8E8",
    iceBlue: "#DDF7FC",
    pureWhite: "#FFFFFF",
    softWhite: "#F8FBFD",
    lightGrey: "#EEF3F6",
    slate: "#647887",
    darkText: "#102A3A",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "",
  },
};
