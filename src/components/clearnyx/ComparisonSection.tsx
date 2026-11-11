"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="results" className="lp-section lp-results section-pad">
      <div className="lp-section-head is-center">
        <div>
          <p className="lp-eyebrow">Real transformation</p>
          <h2>
            See the difference <em>CLEARNYX</em> makes
          </h2>
        </div>
      </div>

      <div className="lp-comparison max-w-4xl mx-auto">
        <div className="comparison-shell">
          <div className="comparison-labels" aria-hidden="true">
            <span className="font-semibold text-xs tracking-wider text-slate">Before</span>
            <span className="font-semibold text-xs tracking-wider text-brand-cyan">After</span>
          </div>

          <div className="comparison-stage relative overflow-hidden select-none">
            {/* After Image (Full background layer) */}
            <div className="comparison-layer after-layer">
              <Image
                src="/images/comparison/after.jpg"
                alt="Smile after CLEARNYX clear aligner treatment"
                fill
                priority
                className="object-cover object-center pointer-events-none"
              />
            </div>

            {/* Before Image (Clipped layer) */}
            <div
              className="comparison-layer before-layer absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <Image
                src="/images/comparison/before.jpg"
                alt="Smile before CLEARNYX treatment"
                fill
                priority
                className="object-cover object-center pointer-events-none"
              />
            </div>

            {/* Comparison Divider Line and Circle */}
            <div
              className="comparison-line"
              style={{ left: `${sliderPos}%` }}
              aria-hidden="true"
            >
              <span className="shadow-lg border border-brand-cyan/20 text-navy-deep font-bold">
                ↔
              </span>
            </div>

            {/* Hidden HTML Range Slider for full interactive control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="comparison-range"
              aria-label="Drag to compare before and after CLEARNYX treatment"
            />
          </div>

          <p className="comparison-note text-center mt-3 text-xs text-slate">
            * Actual clinical case result. Individual orthodontic outcomes depend on clinician treatment planning and wear compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

