import React from "react";

export function StatsSection() {
  return (
    <section className="lp-stats section-pad" aria-label="CLEARNYX highlights">
      <div className="lp-stats-row">
        <div className="lp-stat">
          <span className="lp-stat-icon">
            <svg
              className="lp-stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8.2 13.4c1 1.5 2.3 2.3 3.8 2.3s2.8-.8 3.8-2.3" />
              <path d="M9 9.4h.1M15 9.4h.1" />
            </svg>
          </span>
          <div>
            <b>1 Million+</b>
            <small>Happy Smiles</small>
          </div>
        </div>

        <div className="lp-stat">
          <span className="lp-stat-icon">
            <svg
              className="lp-stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="8" r="3" />
              <circle cx="16" cy="9" r="2.4" />
              <path d="M3.5 18.5c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
              <path d="M14 14.2c1.8.2 3.4 1.2 4.2 3.3" />
            </svg>
          </span>
          <div>
            <b>3000+</b>
            <small>Certified Doctors</small>
          </div>
        </div>

        <div className="lp-stat">
          <span className="lp-stat-icon">
            <svg
              className="lp-stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
              <circle cx="12" cy="11" r="2.2" />
            </svg>
          </span>
          <div>
            <b>500+</b>
            <small>Cities</small>
          </div>
        </div>

        <div className="lp-stat">
          <span className="lp-stat-icon">
            <svg
              className="lp-stat-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3.6 19 7v5.4c0 3.6-2.8 6.3-7 7.8-4.2-1.5-7-4.2-7-7.8V7l7-3.4Z" />
              <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
            </svg>
          </span>
          <div>
            <b>100%</b>
            <small>Satisfaction Rate</small>
          </div>
        </div>
      </div>
    </section>
  );
}

