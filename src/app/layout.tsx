import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/clearbee/SiteHeader";
import { SiteFooter } from "@/components/clearbee/SiteFooter";
import { BookModalProvider } from "@/components/clearbee/BookModalContext";
import { MobileStickyBar } from "@/components/clearbee/MobileStickyBar";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
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
    default: "CLEARNYX | Premium Clear Aligner Solutions for Dentists",
    template: "%s | CLEARNYX Orthodontic Solutions",
  },
  description:
    "Discover CLEARNYX premium clear aligner solutions for dentists and orthodontists in India. Explore Standard and Multi-Layer aligners, digital treatment planning, and professional clinical partnerships.",
  keywords: [
    "clear aligner solutions India",
    "clear aligner provider for dentists",
    "clear aligner company India",
    "clear aligner solutions for orthodontists",
    "standard clear aligners",
    "multi-layer clear aligners",
    "digital orthodontic treatment planning",
    "clear aligner partnership",
    "dental aligner solutions",
  ],
  authors: [{ name: "CLEARNYX" }],
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
    siteName: SITE_CONFIG.name,
    title: "CLEARNYX | Premium Clear Aligner Solutions for Dentists",
    description:
      "Precision-engineered clear aligner solutions and digital treatment planning designed exclusively for certified dental professionals across India.",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CLEARNYX Premium Clear Aligner Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLEARNYX | Premium Clear Aligner Solutions for Dentists",
    description:
      "Precision clear aligner solutions and digital orthodontic collaboration for dental clinics across India.",
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
        <WebSiteSchema />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans bg-white text-navy-900 selection:bg-ice-soft selection:text-navy-900"
        suppressHydrationWarning
      >
        <BookModalProvider>
          <SiteHeader />
          <main className="flex-1 flex flex-col">{children}</main>
          <SiteFooter />
          <MobileStickyBar />
        </BookModalProvider>
      </body>
    </html>
  );
}

