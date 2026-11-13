"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { useBookModal } from "./BookModalContext";

export function HeroSection() {
  const { openModal } = useBookModal();

  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero-inner section-pad">
        <div className="lp-hero-copy">
          <p className="lp-eyebrow">The new normal in teeth straightening</p>
          <h1>
            The future of a confident smile is <em>clear.</em>
          </h1>
          <p className="lp-hero-lead">
            Virtually invisible aligners, custom-made for you by orthodontic experts. Comfortable, removable and engineered for real life.
          </p>
          <div className="lp-hero-actions">
            <button
              type="button"
              className="book-link button button-yellow"
              onClick={() => openModal("consultation")}
            >
              Book a Consultation{" "}
              <span aria-hidden="true" className="arrow diagonal">
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" focusable="false">
                  <path
                    d="M3 8h9.2M8.5 3.8 12.7 8l-4.2 4.2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <Link className="button button-outline" href="/#how-it-works">
              See How It Works
              <span className="lp-play" aria-hidden="true">
                <svg viewBox="0 0 12 12" width="9" height="9" fill="currentColor" focusable="false">
                  <path d="M3.2 1.6v8.8L10.4 6 3.2 1.6Z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className="lp-hero-visual" aria-hidden="true">
          <div className="lp-hero-glow" />
          <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px]">
            <Image
              src="/images/showcase/hero-aligner.png"
              alt="CLEARNYX Clear Aligner Precision Trays"
              fill
              priority
              className="lp-hero-photo object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Floating Trust Strip overlapping bottom of hero */}
      <div className="lp-trust section-pad">
        <div className="lp-trust-card">
          <div className="lp-trust-item">
            <span className="lp-trust-seal" aria-hidden="true">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </span>
            <div>
              <b>100% Doctor Supervised</b>
              <small>Personalized Staging by Orthodontists</small>
            </div>
          </div>
          <div className="lp-trust-item">
            <span className="lp-trust-seal" aria-hidden="true">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </span>
            <div>
              <b>0.01mm 3D Precision</b>
              <small>Sub-Millimeter Digital Staging</small>
            </div>
          </div>
          <div className="lp-trust-item">
            <span className="lp-trust-seal" aria-hidden="true">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </span>
            <div>
              <b>CDSCO &amp; ISO 13485 Certified</b>
              <small>Medical-Grade Biocompatible Safety</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

