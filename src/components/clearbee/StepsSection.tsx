import React from "react";

export function StepsSection() {
  return (
    <section id="how-it-works" className="lp-section lp-section-soft section-pad">
      <div className="lp-section-head is-center">
        <div>
          <p className="lp-eyebrow">How it works</p>
          <h2>Your smile journey in 4 simple steps</h2>
        </div>
      </div>

      <div className="lp-steps">
        <div className="lp-steps-line" aria-hidden="true">
          <span className="lp-steps-progress" style={{ transform: "scaleX(1)" }} />
          <span className="lp-steps-traveler" style={{ left: "100%" }} />
        </div>

        {/* Step 1 */}
        <article className="lp-step">
          <span className="lp-step-num">01</span>
          <div className="lp-step-body">
            <div className="lp-step-icon">
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
                <path d="M9.2 4.5h5.6v3.2H9.2z" fill="none" />
                <path
                  d="M8 7.7h8a1.6 1.6 0 0 1 1.6 1.6v9.2A1.6 1.6 0 0 1 16 20.1H8a1.6 1.6 0 0 1-1.6-1.6V9.3A1.6 1.6 0 0 1 8 7.7Z"
                  fill="none"
                />
                <path d="M10 12.2h4M10 15.2h4M10 18h2.4" fill="none" />
                <circle cx="17.6" cy="15.4" r="3.1" fill="none" />
                <path d="m19.5 17.3 1.7 1.7" fill="none" />
              </svg>
            </div>
            <h3>Consultation</h3>
            <p>A certified doctor evaluates your smile and recommends the right CLEARNYX plan.</p>
          </div>
        </article>

        {/* Step 2 */}
        <article className="lp-step">
          <span className="lp-step-num">02</span>
          <div className="lp-step-body">
            <div className="lp-step-icon">
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
                  d="M4.5 8.2h15v10.3a1.6 1.6 0 0 1-1.6 1.6H6.1a1.6 1.6 0 0 1-1.6-1.6V8.2Z"
                  fill="none"
                />
                <path
                  d="M8.4 8.2V6.6A1.6 1.6 0 0 1 10 5h4a1.6 1.6 0 0 1 1.6 1.6v1.6"
                  fill="none"
                />
                <path d="M8.5 13.2h3.2M8.5 16h5.8" fill="none" />
                <path
                  d="M15.8 11.8c.7-.7 1.8-.7 2.4 0 .7.7.7 1.8 0 2.4l-2.7 2.7-2.1.5.5-2.1 1.9-3.5Z"
                  fill="none"
                />
              </svg>
            </div>
            <h3>Personalized Plan</h3>
            <p>Your case is reviewed and mapped into a precise digital treatment sequence.</p>
          </div>
        </article>

        {/* Step 3 */}
        <article className="lp-step">
          <span className="lp-step-num">03</span>
          <div className="lp-step-body">
            <div className="lp-step-icon">
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
                <path d="M5.2 14.8c1.8-2.4 4-3.6 6.8-3.6s5 1.2 6.8 3.6" fill="none" />
                <path d="M7.6 12.2c1.2-1.2 2.7-1.8 4.4-1.8s3.2.6 4.4 1.8" fill="none" />
                <path d="M8.2 15.4c.3.9 1.8 1.6 3.8 1.6s3.5-.7 3.8-1.6" fill="none" />
                <path d="M12 4.2v3.8" fill="none" />
                <path d="M10.2 6.2 12 4.2l1.8 2" fill="none" />
                <path d="M16.8 6.2h3.2M18.4 4.6v3.2" fill="none" />
              </svg>
            </div>
            <h3>3D Treatment Plan</h3>
            <p>See your projected result, approve the plan, then we craft your aligners.</p>
          </div>
        </article>

        {/* Step 4 */}
        <article className="lp-step">
          <span className="lp-step-num">04</span>
          <div className="lp-step-body">
            <div className="lp-step-icon">
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
                <path d="M4.6 8.4 12 4.4l7.4 4v8.2L12 20.6 4.6 16.6V8.4Z" fill="none" />
                <path d="M12 12.2v8.4M4.6 8.4 12 12.2l7.4-3.8" fill="none" />
                <path d="m9.4 11.2 2.6 1.4 2.6-1.4" fill="none" />
                <path d="m15.6 15.2 1.4 1.4 2.4-2.6" fill="none" />
              </svg>
            </div>
            <h3>Receive Aligners</h3>
            <p>Your aligner package arrives at your clinic or doorstep, ready to start day one.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

