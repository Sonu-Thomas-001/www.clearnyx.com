import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ConditionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const conditions: ConditionItem[] = [
  {
    id: "crowding",
    title: "Crowding",
    description: "Not enough jaw space — teeth overlap or shift",
    image: "/images/conditions/crowding.png",
  },
  {
    id: "spacing",
    title: "Spacing",
    description: "Too much space — visible gaps",
    image: "/images/conditions/spacing.png",
  },
  {
    id: "open-bite",
    title: "Open Bite",
    description: "Upper/lower teeth don’t meet",
    image: "/images/conditions/open-bite.png",
  },
  {
    id: "deep-bite",
    title: "Deep Bite",
    description: "Upper fronts excessively overlap lower fronts",
    image: "/images/conditions/deep-bite.png",
  },
  {
    id: "cross-bite",
    title: "Cross Bite",
    description: "Some upper teeth sit inside lower teeth",
    image: "/images/conditions/cross-bite.png",
  },
  {
    id: "under-bite",
    title: "Under Bite",
    description: "Lower teeth protrude beyond upper",
    image: "/images/conditions/under-bite.png",
  },
];

export function ConditionsSection() {
  return (
    <section id="conditions" className="lp-section section-pad">
      <div className="lp-section-head">
        <div>
          <p className="lp-eyebrow">Tailored solutions</p>
          <h2>Conditions we treat</h2>
        </div>
      </div>

      <div className="lp-condition-grid">
        {conditions.map((item) => (
          <Link
            key={item.id}
            className="lp-condition-card group"
            href={`/solutions#${item.id}`}
          >
            <div className="lp-condition-thumb relative w-full h-[140px] flex items-center justify-center">
              <Image
                src={item.image}
                alt={`${item.title} Orthodontic Condition`}
                width={200}
                height={140}
                className="object-contain max-h-[120px] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

