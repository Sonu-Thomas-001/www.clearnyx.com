import React from "react";

interface Testimonial {
  id: string;
  initial: string;
  name: string;
  meta: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "emma",
    initial: "E",
    name: "Emma R.",
    meta: "London · Crowding",
    quote:
      "I was nervous about braces at work. CLEARNYX fit into my routine so easily — almost invisible, and the results came faster than I expected.",
  },
  {
    id: "james",
    initial: "J",
    name: "James M.",
    meta: "Dubai · Spacing",
    quote:
      "The digital plan made everything clear from day one. I could see my smile progress before I even started wearing the aligners.",
  },
  {
    id: "sophie",
    initial: "S",
    name: "Sophie L.",
    meta: "Singapore · Deep Bite",
    quote:
      "Comfortable, removable, and doctor-guided. I kept up with dinners and travel without feeling like I was in treatment.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="lp-section lp-testimonials section-pad">
      <div className="lp-section-head is-center">
        <div>
          <p className="lp-eyebrow">Real smiles</p>
          <h2>
            Loved by people who wanted a <em>clearer</em> journey
          </h2>
        </div>
      </div>

      <div
        className="lp-testimonial-marquee is-static max-w-6xl mx-auto"
        aria-label="Patient testimonials"
      >
        <div className="lp-testimonial-track justify-center">
          {testimonials.map((t) => (
            <article key={t.id} className="lp-testimonial">
              <span className="lp-testimonial-mark text-brand-cyan" aria-hidden="true">
                “
              </span>
              <p>{t.quote}</p>
              <div className="lp-testimonial-author">
                <span
                  className="lp-testimonial-avatar bg-brand-cyan text-white"
                  aria-hidden="true"
                >
                  {t.initial}
                </span>
                <div>
                  <b>{t.name}</b>
                  <small>{t.meta}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

