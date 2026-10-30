import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BRAND_CONFIG } from "@/config/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_CONFIG.websiteUrl),
  title: {
    default: BRAND_CONFIG.meta.title,
    template: `%s | ${BRAND_CONFIG.name}`,
  },
  description: BRAND_CONFIG.meta.description,
  keywords: [...BRAND_CONFIG.meta.keywords],
  authors: [{ name: BRAND_CONFIG.name }],
  creator: BRAND_CONFIG.name,
  publisher: BRAND_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: BRAND_CONFIG.websiteUrl,
  },
  openGraph: {
    title: BRAND_CONFIG.meta.title,
    description: BRAND_CONFIG.meta.description,
    url: BRAND_CONFIG.websiteUrl,
    siteName: BRAND_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/clearnyx-hero.webp",
        width: 1200,
        height: 630,
        alt: "CLEARNYX — Premium Clear Aligner Solutions for Dental Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_CONFIG.meta.title,
    description: BRAND_CONFIG.meta.description,
    images: ["/images/clearnyx-hero.webp"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} light scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className="min-h-screen bg-white text-[#071B2C] font-sans antialiased selection:bg-[#00A6CE]/20 selection:text-[#00A6CE] flex flex-col justify-between"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
