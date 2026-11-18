import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/clearnyx/SiteHeader";
import { SiteFooter } from "@/components/clearnyx/SiteFooter";
import { BookModalProvider } from "@/components/clearnyx/BookModalContext";
import { MobileStickyBar } from "@/components/clearnyx/MobileStickyBar";
import { CinematicPreloader } from "@/components/clearnyx/CinematicPreloader";
import { PageTransition } from "@/components/clearnyx/PageTransition";
import { ClariChatWidget } from "@/components/chat/ClariChatWidget";
import { ScrollToTop } from "@/components/clearnyx/ScrollToTop";
import { ScrollAnimationObserver } from "@/components/clearnyx/ScrollAnimationObserver";
import { OrganizationSchema, WebSiteSchema, MedicalBusinessSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#071B2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "CLEARNYX | Leading Clear Aligner Provider in India — B2B Orthodontic Lab",
    template: "%s | CLEARNYX — Clear Aligner Provider",
  },
  description:
    "CLEARNYX is India's premier B2B clear aligner provider and digital orthodontic laboratory. Delivering precision PETG & Multi-Layer clear aligners, 3D CAD staging, and dedicated clinical support exclusively for certified dentists and clinics.",
  keywords: [
    "clear aligner provider",
    "clear aligner provider in India",
    "clear aligners for dentists",
    "b2b clear aligner manufacturer",
    "orthodontic aligner provider",
    "dental clear aligner lab",
    "custom clear aligner supplier",
    "standard clear aligners",
    "multi-layer clear aligners",
    "digital orthodontic treatment planning",
    "clear aligner solutions India",
    "aligner manufacturer Bengaluru",
    "clear aligner laboratory India",
    "orthodontic clear aligners for clinics",
  ],
  authors: [{ name: "CLEARNYX Orthodontic Technologies" }],
  creator: "CLEARNYX",
  publisher: "CLEARNYX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: "CLEARNYX Clear Aligner Provider",
    title: "CLEARNYX | Leading Clear Aligner Provider in India — B2B Orthodontic Lab",
    description:
      "India's premier clear aligner provider and orthodontic lab. Precision CAD-engineered PETG & Multi-Layer clear aligners exclusively for certified dental clinics.",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CLEARNYX Clear Aligner Provider India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLEARNYX | Leading Clear Aligner Provider in India",
    description:
      "India's premier B2B clear aligner provider and orthodontic lab. Precision CAD staging & custom aligners for certified dentists.",
    images: ["/brand/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <OrganizationSchema />
        <MedicalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans bg-white text-navy-900 selection:bg-ice-soft selection:text-navy-900"
        suppressHydrationWarning
      >
        <CinematicPreloader />
        <BookModalProvider>
          <SiteHeader />
          <main className="flex-1 flex flex-col">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
          <MobileStickyBar />
          <ClariChatWidget />
          <ScrollToTop />
          <ScrollAnimationObserver />
        </BookModalProvider>
      </body>
    </html>
  );
}

