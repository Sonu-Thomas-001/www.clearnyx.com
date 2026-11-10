import { Solution } from "@/types";

export const SOLUTIONS: Solution[] = [
  {
    id: "standard-aligners",
    slug: "standard-aligners",
    name: "Standard Clear Aligners",
    tagline: "Clarity in Design. Precision in Planning.",
    material: "PETG Medical Polymer",
    materialDescription:
      "Crafted from premium PETG polymer as specified in CLEARNYX technical product specifications, delivering high optical transparency, dimensional stability, and consistent aligner seating.",
    scope: "Mild to Moderate Alignment",
    clinicalIndication:
      "Intended for mild to moderate anterior crowding, minor spacing, relapse corrections, and straightforward pre-restorative alignments subject to dental professional evaluation.",
    features: [
      "High optical clarity with minimal surface reflection",
      "Rigid dimensional integrity for consistent force delivery",
      "Precision-trimmed gingival contours for patient comfort",
      "Compatible with digital intraoral scan workflows",
      "Staged digital treatment plan reviewed by dental clinicians",
    ],
    benefits: [
      {
        title: "Optical Invisibility",
        description:
          "Clear PETG material provides discreet aesthetic wear throughout daily social and professional interactions.",
      },
      {
        title: "Predictable Minor Tooth Movement",
        description:
          "Engineered force transmission optimized for resolving anterior spacing and minor rotational corrections.",
      },
      {
        title: "Chairside Efficiency",
        description:
          "Pre-calibrated aligner stages minimize chairside adjustment time and streamline follow-up appointments.",
      },
    ],
    suitability: [
      "Class I minor anterior crowding (< 4mm)",
      "Diastema and localized anterior spacing (< 3mm)",
      "Post-orthodontic relapse cases",
      "Minor incisor rotations and aesthetic pre-alignment",
    ],
    wearProtocol:
      "Wear duration: 22–24 hours daily. Aligner stage transition every 10–14 days, strictly as prescribed by the treating dental professional based on clinical assessment.",
    image: "/images/products/clearnyx-standard-aligner.webp",
    comparisonHighlights: [
      "Single-layer high-clarity PETG",
      "Optimized for mild to moderate cases",
      "Firm initial modulus",
      "Cost-effective practice solution",
    ],
  },
  {
    id: "multi-layer-aligners",
    slug: "multi-layer-aligners",
    name: "Multi-Layer Clear Aligners",
    tagline: "Engineered Layers. Thoughtful Control.",
    material: "Multi-Layer Composite Architecture",
    materialDescription:
      "Constructed using an advanced multi-layer polymer matrix as detailed in brand documentation, engineered to deliver strength, flexibility, and sustained biomechanical control over extended wear cycles.",
    scope: "Moderate to Complex Alignment",
    clinicalIndication:
      "Designed for moderate to complex orthodontic tooth movements, root torque, premolar de-rotation, and comprehensive arch leveling, subject to professional diagnosis.",
    features: [
      "Advanced multi-layer polymer structure combining elastomeric flexibility with outer shell resilience",
      "Enhanced elastic recovery and sustained low-continuous force profile",
      "Optimized resistance to stress relaxation and micro-cracking",
      "Refined gingival adaptation for superior biomechanical anchorage",
      "Staged with complex attachment planning and clinical review",
    ],
    benefits: [
      {
        title: "Sustained Gentle Force",
        description:
          "The elastomeric core helps maintain consistent, gentle orthodontic pressure over the full 10–14 day wear cycle.",
      },
      {
        title: "Superior Crack Resistance",
        description:
          "Multi-layer architecture disperses mechanical fatigue, making it exceptionally resilient during insertion and removal.",
      },
      {
        title: "Complex Case Capability",
        description:
          "Provides the biomechanical control required for bodily tooth movement, extraction space closure, and complex arch expansion.",
      },
    ],
    suitability: [
      "Moderate to complex crowding (> 4mm) and severe rotations",
      "Deep bite and open bite corrections",
      "Premolar and molar bodily movements / distalization",
      "Arch expansion and comprehensive orthodontic corrections",
    ],
    wearProtocol:
      "Wear duration: 22–24 hours daily. Aligner stage transition every 10–14 days, strictly as prescribed by the treating dental professional based on clinical assessment.",
    image: "/images/products/clearnyx-multilayer-aligner.webp",
    comparisonHighlights: [
      "Advanced multi-layer elastomeric core",
      "Optimized for moderate to complex cases",
      "High continuous elasticity & comfort",
      "Superior fatigue & crack resistance",
    ],
  },
];

export const COMPARISON_CRITERIA = [
  {
    feature: "Material Architecture",
    standard: "PETG Medical Polymer",
    multiLayer: "Multi-Layer Composite Polymer Matrix",
  },
  {
    feature: "Primary Clinical Scope",
    standard: "Mild to moderate alignment & relapse",
    multiLayer: "Moderate to complex malocclusions",
  },
  {
    feature: "Material Characteristics (per brochure)",
    standard: "Rigid clarity & dimensional stability",
    multiLayer: "Strength, flexibility, and controlled force",
  },
  {
    feature: "Elastic Recovery",
    standard: "High initial force, gradual drop-off",
    multiLayer: "Sustained gentle force across wear interval",
  },
  {
    feature: "Gingival Adaptation",
    standard: "Precision-scalloped margin",
    multiLayer: "Precision-scalloped with enhanced retention",
  },
  {
    feature: "Digital Staging Integration",
    standard: "Full 3D digital planning review",
    multiLayer: "Full 3D digital planning with attachment protocols",
  },
  {
    feature: "Prescribed Wear Guidelines",
    standard: "22–24 hrs/day (determined by clinician)",
    multiLayer: "22–24 hrs/day (determined by clinician)",
  },
  {
    feature: "Aligner Change Interval",
    standard: "10–14 days (determined by clinician)",
    multiLayer: "10–14 days (determined by clinician)",
  },
];
