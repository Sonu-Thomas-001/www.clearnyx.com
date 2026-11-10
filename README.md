# CLEARNYX — Official Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Official CLEARNYX Corporate Website — Premium B2B Clear Aligner Solutions.**  
> Built for orthodontists, practicing dentists, dental clinics, and clinical partners across India.  
> **Brand Tagline:** *Redefining Smiles.*  
> **Supporting Statement:** *Precision. Comfort. Confidence.*

---

## 🌟 Executive Overview

**CLEARNYX** is a premium orthodontic technology and clear aligner solutions provider serving dentists, orthodontists, and dental clinics. This website communicates CLEARNYX's dedicated B2B positioning, showcasing:
- **Standard Clear Aligners** (PETG material for mild to moderate alignment requirements)
- **Multi-Layer Clear Aligners** (Engineered multi-layer material offering strength, flexibility, and control)
- **Digital Treatment Planning Workflow** (Diagnosis, Treatment Planning, Approval, Fabrication, Delivery, Alignment)
- **Professional Collaboration & Practice Partnerships**

The design philosophy utilizes a bright, pure white editorial canvas (`#FFFFFF` / `#F8FBFD`), high-authority deep navy typography (`#071B2C`), strategic cyan accents (`#00A6CE`), and restrained medical-technology aesthetics.

---

## 🏗️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Language**: TypeScript 5 (Strict Mode enabled)
- **Styling**: Tailwind CSS with custom CLEARNYX design tokens
- **Animations**: Framer Motion (purposeful, respecting `prefers-reduced-motion`)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (Strict client & server validation)
- **SEO**: Dynamic JSON-LD (Organization, WebSite, Breadcrumbs), XML sitemap, robots.txt, OpenGraph
- **Deployment**: Vercel-ready with single canonical hostname `https://www.clearnyx.com`

---

## 📁 Repository Structure

```
www.clearnyx.com/
├── public/
│   ├── brand/                # Official brand assets (logos, icons, favicons, OG)
│   └── images/               # Product photography, workflow & clinical visuals
├── src/
│   ├── app/                  # Next.js App Router (13 core routes + API)
│   │   ├── about/            # Corporate brand story & clinical values
│   │   ├── solutions/        # Product portfolio & comparisons
│   │   │   ├── standard-aligners/
│   │   │   └── multi-layer-aligners/
│   │   ├── technology/       # Digital planning & material engineering
│   │   ├── how-it-works/     # 6-stage clinical workflow
│   │   ├── for-dentists/     # Practice partnership portal
│   │   ├── resources/        # Clinical & practice insights publication
│   │   ├── contact/          # Inquiries & enterprise communication
│   │   ├── become-a-partner/ # Primary B2B conversion page
│   │   ├── privacy-policy/   # Data protection & privacy terms
│   │   ├── terms-and-conditions/
│   │   ├── api/              # Server-side inquiry & partner endpoints
│   │   ├── layout.tsx        # Global layout & metadata
│   │   ├── page.tsx          # Homepage
│   │   ├── robots.ts         # Robots.txt generator
│   │   ├── sitemap.ts        # Dynamic sitemap generator
│   │   └── not-found.tsx     # Custom 404 page
│   ├── components/
│   │   ├── layout/           # Header, Footer, Navigation, Breadcrumbs
│   │   ├── sections/         # Hero, Showcase, Timeline, Pillars, CTA
│   │   ├── ui/               # Button, Card, Accordion, Modal, Badge
│   │   ├── forms/            # ContactForm, PartnerEnquiryForm
│   │   └── seo/              # JsonLd structured data components
│   ├── config/               # Centralized brand, site & contact config
│   ├── content/              # Structured TypeScript data (solutions, resources, FAQs)
│   ├── lib/                  # Utilities, form validation schemas
│   └── types/                # Strict TypeScript interfaces
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.18.0 (Node.js 20+ recommended)
- npm >= 9.0.0

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/clearnyx/www.clearnyx.com.git
   cd www.clearnyx.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Type Check & Lint:**
   ```bash
   npm run lint
   npx tsc --noEmit
   ```

6. **Production Build:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel

1. Import the repository into Vercel.
2. Framework Preset: **Next.js**.
3. Configure environment variables from `.env.example`.
4. Domain Configuration:
   - Primary canonical domain: `https://www.clearnyx.com`
   - Redirect root domain `clearnyx.com` -> `https://www.clearnyx.com` (308 Permanent Redirect)

---

## ⚖️ Legal & Medical Disclaimer

CLEARNYX is a B2B clear aligner solutions brand providing customized orthodontic manufacturing and digital treatment planning services exclusively to licensed dental professionals. Aligner wear schedules, treatment feasibility, and clinical decisions must always be determined by the treating dental professional based on individual clinical evaluation.

© 2026 CLEARNYX. All rights reserved.
