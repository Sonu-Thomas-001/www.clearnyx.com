"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Moment {
  id: string;
  num: string;
  title: string;
  description: string;
  image: string;
  badgeSvg: React.ReactNode;
  positionClass: string;
  copyClass: string;
  style: React.CSSProperties;
}

const moments: Moment[] = [
  {
    id: "eat",
    num: "01",
    title: "Eat freely",
    description: "Enjoy your favourite foods.",
    image: "/images/lifestyle/eat.jpg",
    badgeSvg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3v8M8 11v10M6 3c0 2.5 2 3.5 2 6M10 3c0 2.5-2 3.5-2 6M16 3v7c0 1.5-1 2-2 2h0v9" />
      </svg>
    ),
    positionClass: "is-eat",
    copyClass: "is-copy-left",
    style: { left: "14.81%", top: "38.57%" },
  },
  {
    id: "remove",
    num: "02",
    title: "Remove",
    description: "Take them out whenever you need to.",
    image: "/images/lifestyle/remove.jpg",
    badgeSvg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="7" width="16" height="11" rx="5.5" />
        <path d="M8 7V6.5A4 4 0 0 1 16 6.5V7" />
      </svg>
    ),
    positionClass: "is-remove",
    copyClass: "is-copy-top",
    style: { left: "50%", top: "13%" },
  },
  {
    id: "brush",
    num: "03",
    title: "Brush",
    description: "Keep your routine.",
    image: "/images/lifestyle/brush.jpg",
    badgeSvg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c3.2 0 5.5 2.2 5.5 5.2 0 2.4-1 4.2-1.8 6.2-.6 1.5-.7 2.8-1.4 3.8-.7 1-1.6.9-2.3.2-.4-.4-.6-1-.8-1.6-.2.6-.4 1.2-.8 1.6-.7.7-1.6.8-2.3-.2-.7-1-.8-2.3-1.4-3.8C6.5 12.4 5.5 10.6 5.5 8.2 5.5 5.2 7.8 3 12 3Z" />
      </svg>
    ),
    positionClass: "is-brush",
    copyClass: "is-copy-right",
    style: { left: "85.19%", top: "38.57%" },
  },
  {
    id: "wear",
    num: "04",
    title: "Wear",
    description: "Designed for daily comfort.",
    image: "/images/lifestyle/wear.jpg",
    badgeSvg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 13.5c1.2 1.6 2.6 2.3 3.5 2.3s2.3-.7 3.5-2.3" />
        <circle cx="9.2" cy="10" r=".8" fill="currentColor" stroke="none" />
        <circle cx="14.8" cy="10" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
    positionClass: "is-wear",
    copyClass: "is-copy-right",
    style: { left: "71.75%", top: "79.93%" },
  },
  {
    id: "repeat",
    num: "05",
    title: "Repeat",
    description: "Keep moving towards your best smile.",
    image: "/images/lifestyle/repeat.jpg",
    badgeSvg: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 7h8a4 4 0 0 1 4 4v1M17 17H9a4 4 0 0 1-4-4v-1" />
        <path d="M7 7l2-2M7 7l2 2M17 17l-2-2M17 17l-2 2" />
      </svg>
    ),
    positionClass: "is-repeat",
    copyClass: "is-copy-left",
    style: { left: "28.25%", top: "79.93%" },
  },
];

export function LifestyleOrbitSection() {
  const [activeId, setActiveId] = useState<string>("wear");

  return (
    <section id="built-for-life" className="lp-section lp-lifestyle section-pad">
      {/* Background Soft Glows */}
      <div className="lp-life-glow" />
      <div className="lp-life-orb is-left" />
      <div className="lp-life-orb is-right" />

      {/* Copy Header */}
      <div className="lp-lifestyle-copy">
        <p className="lp-eyebrow">Built around your life</p>
        <h2>
          Your treatment should fit your life. <br />
          <span className="text-brand-cyan">Not the other way around.</span>
        </h2>
        <p className="lp-life-lead">
          CLEARNYX aligners are designed to adapt to your everyday routine, so you can keep doing what you love — while we work on your smile. Same you. Brighter tomorrow.
        </p>
      </div>

      {/* Orbit Stage */}
      <div className="lp-life-stage">
        <p className="lp-life-aside is-left" aria-hidden="true">
          Built For Real Life
          <span />
        </p>

        <div className="lp-orbit">
          {/* Circular SVG Orbit Track */}
          <svg
            className="lp-life-ring"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <g>
              <path
                className="lp-life-ring-stroke"
                d="M 18.62 30.39 A 37 37 0 0 1 41.05 14.10"
                fill="none"
                strokeLinecap="round"
              />
              <circle className="lp-life-ring-dot" cx="28.25" cy="20.07" r="0.85" />
            </g>
            <g>
              <path
                className="lp-life-ring-stroke"
                d="M 58.95 14.10 A 37 37 0 0 1 81.38 30.39"
                fill="none"
                strokeLinecap="round"
              />
              <circle className="lp-life-ring-dot" cx="71.75" cy="20.07" r="0.85" />
            </g>
            <g>
              <path
                className="lp-life-ring-stroke"
                d="M 86.91 47.42 A 37 37 0 0 1 78.34 73.78"
                fill="none"
                strokeLinecap="round"
              />
              <circle className="lp-life-ring-dot" cx="85.19" cy="61.43" r="0.85" />
            </g>
            <g>
              <path
                className="lp-life-ring-stroke"
                d="M 63.86 84.31 A 37 37 0 0 1 36.14 84.31"
                fill="none"
                strokeLinecap="round"
              />
              <circle className="lp-life-ring-dot" cx="50.00" cy="87.00" r="0.85" />
            </g>
            <g>
              <path
                className="lp-life-ring-stroke"
                d="M 21.66 73.78 A 37 37 0 0 1 13.09 47.42"
                fill="none"
                strokeLinecap="round"
              />
              <circle className="lp-life-ring-dot" cx="14.81" cy="61.43" r="0.85" />
            </g>
          </svg>

          {/* Central Aligner Product */}
          <div className="lp-life-product" aria-hidden="true">
            <p className="lp-life-micro">
              A clearer
              <br />
              tomorrow
              <br />
              fits today
            </p>
            <div className="relative w-full h-[180px] sm:h-[220px]">
              <Image
                src="/images/showcase/aligner-cutout.png"
                alt="CLEARNYX Precision Aligner Tray"
                fill
                className="lp-life-aligner object-contain"
              />
            </div>
            <span className="lp-life-shadow" />
          </div>

          {/* 5 Orbit Moments */}
          {moments.map((m) => {
            const isActive = activeId === m.id;
            return (
              <article
                key={m.id}
                className={`lp-life-moment ${m.positionClass} ${m.copyClass} ${
                  isActive ? "is-active" : ""
                } cursor-pointer`}
                style={m.style}
                onMouseEnter={() => setActiveId(m.id)}
                onClick={() => setActiveId(m.id)}
              >
                <div className="lp-life-moment-inner">
                  <div className="lp-life-photo">
                    <Image
                      src={m.image}
                      alt={m.title}
                      width={92}
                      height={92}
                      className="object-cover"
                    />
                    <span className="lp-life-badge" aria-hidden="true">
                      {m.badgeSvg}
                    </span>
                  </div>
                  <div className="lp-life-moment-copy">
                    <p>
                      <b>{m.num}</b> {m.title}
                    </p>
                    <span>{m.description}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

