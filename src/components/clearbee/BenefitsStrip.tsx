import React from "react";

export function BenefitsStrip() {
  return (
    <section className="lp-benefits-strip" aria-label="CLEARNYX benefits">
      <div className="lp-benefits-row section-pad">
        <div className="lp-benefit-item">
          <span className="lp-benefit-icon" aria-hidden="true">
            <svg
              aria-hidden="true"
              className="process-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M2.8 12s3.4-6.2 9.2-6.2S21.2 12 21.2 12s-3.4 6.2-9.2 6.2S2.8 12 2.8 12Z"
                fill="none"
              />
              <circle cx="12" cy="12" r="2.6" fill="none" />
            </svg>
          </span>
          <p>Nearly Invisible</p>
        </div>

        <div className="lp-benefit-item">
          <span className="lp-benefit-icon" aria-hidden="true">
            <svg
              aria-hidden="true"
              className="process-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 16.2c1.9-2.2 4.1-3.3 7-3.3s5.1 1.1 7 3.3" fill="none" />
              <path d="M7.6 13.4c1.2-1.1 2.7-1.7 4.4-1.7s3.2.6 4.4 1.7" fill="none" />
              <path d="M8.8 8.2 12 5l3.2 3.2" fill="none" />
              <path d="M12 5.2v7.2" fill="none" />
            </svg>
          </span>
          <p>Removable Aligners</p>
        </div>

        <div className="lp-benefit-item">
          <span className="lp-benefit-icon" aria-hidden="true">
            <svg
              aria-hidden="true"
              className="process-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8" fill="none" />
              <path d="M8.2 13.4c1 1.5 2.3 2.3 3.8 2.3s2.8-.8 3.8-2.3" fill="none" />
              <path d="M9 9.4h.1M15 9.4h.1" fill="none" />
            </svg>
          </span>
          <p>No Irritation</p>
        </div>

        <div className="lp-benefit-item">
          <span className="lp-benefit-icon" aria-hidden="true">
            <svg
              aria-hidden="true"
              className="process-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 4.5v6.2c0 1.3-.8 2.2-2 2.2" fill="none" />
              <path d="M6 4.5v4.2M10 4.5v4.2" fill="none" />
              <path d="M6 12.9v6.6" fill="none" />
              <path d="M16.5 4.5c1.8 0 3 1.3 3 3.2S18.3 11 16.5 11V19.5" fill="none" />
              <path d="M16.5 4.5V11" fill="none" />
            </svg>
          </span>
          <p>No Food Restrictions</p>
        </div>

        <div className="lp-benefit-item">
          <span className="lp-benefit-icon" aria-hidden="true">
            <svg
              aria-hidden="true"
              className="process-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 7.2h14v12.3H5z" fill="none" />
              <path d="M5 11h14" fill="none" />
              <path d="M9 4.8v3.2M15 4.8v3.2" fill="none" />
              <path d="M8.2 14.2h2.2M11.9 14.2h2.2M15.6 14.2h.1" fill="none" />
            </svg>
          </span>
          <p>Fewer Clinic Visits</p>
        </div>

        <div className="lp-benefit-item">
          <span className="lp-benefit-icon" aria-hidden="true">
            <svg
              aria-hidden="true"
              className="process-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 20.4S4.8 15.2 4.8 10.4A3.7 3.7 0 0 1 12 8.6 3.7 3.7 0 0 1 19.2 10.4C19.2 15.2 12 20.4 12 20.4Z"
                fill="none"
              />
              <path d="M16.4 8.2c1.7-.2 3.2.8 3.5 2.4" fill="none" />
            </svg>
          </span>
          <p>Enhanced Comfort</p>
        </div>
      </div>
    </section>
  );
}

