# CLEARNYX — Premium Clear Aligner Solutions (India Launch)

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.8.0-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **"Precision in Every Move. Confidence in Every Smile."**  
> An elevated, modern digital coming-soon launch platform for **CLEARNYX**, an emerging orthodontic technology brand entering the Indian dental healthcare market.

---

## 🌟 Executive Overview

**CLEARNYX** is engineered specifically for certified dentists, orthodontists, and dental institutions across India. Built on a pure white, high-precision aesthetic, this digital launch experience delivers an international orthodontic technology presence that highlights clinical accuracy, sub-millimeter calibration, and digital treatment collaboration.

### Key Highlights
- **Target Audience**: Dentists, Orthodontists, and Dental Healthcare Professionals (B2B).
- **Core Proposition**: Customized clear aligners, sub-millimeter calibration, and digital treatment planning.
- **Brand Identity**: Pure White (`#FFFFFF`), Deep Navy (`#071B2C`), Brand Cyan (`#00A6CE`), and Soft Ice Blue (`#DDF7FC`).

---

## ⚡ Features & Architecture

### 1. Unified Precision Countdown Timer
- Real-time IST launch countdown built with React 19's `useSyncExternalStore`.
- Zero hydration mismatch, zero layout jumps, and persistent precision tracking.
- Housed in an architectural monolithic capsule with hairline dividers, live pulsing beacon, and micro-capsule metric pills.

### 2. Kinetic Headline Animation
- Seamless looping text transition rotating through clinical promises:
  - *Confidence in Every Smile.*
  - *Excellence in Every Case.*
  - *Innovation in Every Detail.*
  - *Certainty in Every Treatment.*
- Height-locked container with optical blur-dissolve transitions via Framer Motion's `<AnimatePresence mode="wait">`.

### 3. Animated 3D Orthodontic Visual Showcase
- **Zero-Gravity Float**: Suspended aligner with continuous 3D tilt and elevation.
- **Active Laser Scanner**: Glowing vertical cyan beam simulating real-time optical 3D digital dental scans.
- **Concentric Calibration Rings**: Rotating orbital radar rings and ambient backlights.
- **Floating Glassmorphic Badges**: Interactive chips highlighting *0.01mm Precision Fit* and *Medical-Grade Polymer*.

### 4. Branded Preloader
- Displays the official horizontal CLEARNYX logo on pure white background.
- Real-time calibration progress bar (`0% → 100%`) with smooth upward fade exit upon completion.

### 5. Launch Updates Registration & API
- Single-input email notification registration with instant verification feedback.
- Pre-configured fallback to direct email inquiries (`info@clearnyx.com`).
- Server-side inquiry handling with `/api/enquiry`.

### 6. Full SEO & Performance Optimization
- Native Next.js 16 metadata, OpenGraph cards, Twitter cards, and structured data.
- Dynamically generated `sitemap.xml` and `robots.txt`.
- Multi-resolution favicon suite (`favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`).

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router + Turbopack)** | React Framework & Production Optimization |
| **React 19** | Concurrent UI & External Store State Management |
| **TypeScript 5** | Strict Type Safety & Clean Interfaces |
| **Tailwind CSS v4** | Modern Utility-First Styling & Custom Brand Tokens |
| **Framer Motion 14** | Kinetic Typography, Preloader, and 3D Showcase Animations |
| **Lucide React** | Ultra-Lightweight SVG Icons |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.18.0 (Node.js 20+ recommended)
- **npm** >= 9.0.0

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sonu-Thomas-001/www.clearnyx.com.git
   cd www.clearnyx.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Run linting & validation:
   ```bash
   npm run lint
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📂 Project Directory Structure

```
www.clearnyx.com/
├── public/
│   ├── favicon.ico                   # Multi-resolution ICO
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── images/
│       ├── Clearnyx_Logo.png         # Official Brand Asset
│       ├── Clearnyx_Logo_Horizontal.png
│       ├── clearnyx-hero-light.webp  # Studio Aligner Render
│       └── clearnyx-symbol.png
├── src/
│   ├── app/
│   │   ├── api/enquiry/route.ts      # Clinical partner API handler
│   │   ├── globals.css               # Pure white theme tokens & Tailwind v4
│   │   ├── layout.tsx                # Metadata & font configuration
│   │   ├── page.tsx                  # Coming Soon landing page
│   │   ├── robots.ts                 # Search crawler governance
│   │   └── sitemap.ts                # Dynamic sitemap generator
│   ├── components/
│   │   ├── Countdown.tsx             # Unified precision countdown timer
│   │   ├── Footer.tsx                # Streamlined Coming Soon footer
│   │   ├── Header.tsx                # Responsive transparent navigation
│   │   ├── Hero.tsx                  # Kinetic headline, notify form & showcase
│   │   ├── Logo.tsx                  # Responsive brand logo component
│   │   ├── Preloader.tsx             # Calibration progress preloader
│   │   └── PrivacyModal.tsx          # Clinician data policy modal
│   ├── config/
│   │   ├── brand.ts                  # Brand tokens, colors & contact
│   │   └── launch.ts                 # Target launch schedule & IST dates
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── index.ts                  # TypeScript definitions
└── README.md
```

---

## 📄 License & Attribution

© 2026 CLEARNYX.  
•  
**All rights reserved by MidCell Studios**
