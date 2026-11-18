import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { FAQS } from "@/content/faqs";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/brand/logo-primary.png`,
    image: `${SITE_CONFIG.url}/brand/og-image.jpg`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.contacts.general,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.contacts.address.city,
      addressRegion: SITE_CONFIG.contacts.address.state,
      addressCountry: SITE_CONFIG.contacts.address.country,
      postalCode: SITE_CONFIG.contacts.address.postalCode,
    },
    sameAs: [
      SITE_CONFIG.socials.linkedin,
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalOrganization", "DentalLaboratory"],
    "@id": `${SITE_CONFIG.url}/#medical-organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: [
      "CLEARNYX Clear Aligner Provider",
      "CLEARNYX Orthodontic Laboratory",
      "CLEARNYX Aligners India",
    ],
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/brand/logo-primary.png`,
    image: `${SITE_CONFIG.url}/brand/og-image.jpg`,
    description:
      "CLEARNYX is India's premier B2B clear aligner provider and orthodontic manufacturing laboratory, supplying precision CAD-engineered PETG and Multi-Layer clear aligners exclusively to certified dental practices and orthodontists.",
    telephone: SITE_CONFIG.contacts.phone,
    email: SITE_CONFIG.contacts.partnerships,
    medicalSpecialty: "Orthodontics",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, Credit Card, UPI, Net Banking",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contacts.address.line1,
      addressLocality: SITE_CONFIG.contacts.address.city,
      addressRegion: SITE_CONFIG.contacts.address.state,
      postalCode: SITE_CONFIG.contacts.address.postalCode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clear Aligner Manufacturing & Digital Orthodontic Staging",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalDevice",
            name: "CLEARNYX Standard PETG Clear Aligners",
            description:
              "High-clarity medical PETG clear aligners engineered for mild to moderate anterior alignment, diastema closure, and minor orthodontic relapse correction.",
            brand: {
              "@type": "Brand",
              name: "CLEARNYX",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalDevice",
            name: "CLEARNYX Multi-Layer Pro Clear Aligners",
            description:
              "Engineered elastomeric multi-layer polymer aligners designed for continuous gentle tooth movement, complex rotations, and deep bite corrections.",
            brand: {
              "@type": "Brand",
              name: "CLEARNYX",
            },
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    alternateName: "CLEARNYX Clear Aligner Provider",
    url: SITE_CONFIG.url,
    description:
      "CLEARNYX — India's premier B2B clear aligner provider and digital orthodontic laboratory for certified dental practices.",
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/resources?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({
  customFaqs,
}: {
  customFaqs?: { question: string; answer: string }[];
} = {}) {
  const items = customFaqs || FAQS;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalDeviceProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_CONFIG.url}/#clear-aligners-product`,
    name: "CLEARNYX Custom Clear Aligners",
    image: `${SITE_CONFIG.url}/images/showcase/hero-aligner.png`,
    description:
      "Doctor-directed custom clear aligners engineered with Standard PETG and Multi-Layer elastomeric polymers for predictable orthodontic tooth movement in dental practices.",
    brand: {
      "@type": "Brand",
      name: "CLEARNYX",
    },
    category: "Medical Devices > Orthodontic Aligners",
    manufacturer: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "15000",
      lowPrice: "15000",
      highPrice: "65000",
      offerCount: "2",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url.startsWith("http") ? url : `${SITE_CONFIG.url}${url}`,
    image: image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`,
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_CONFIG.url}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
