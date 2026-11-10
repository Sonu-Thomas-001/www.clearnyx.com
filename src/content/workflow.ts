import { WorkflowStage } from "@/types";

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 1,
    stage: "Stage 01",
    title: "Diagnosis",
    subtitle: "Clinical Assessment & Digital Impressions",
    description:
      "The clinical journey begins in your dental practice. The treating clinician evaluates patient eligibility, captures high-resolution intraoral optical scans (or PVS impressions), clinical photography, and radiographic records.",
    details: [
      "Comprehensive orthodontic assessment & patient selection",
      "Direct intraoral STL / OBJ digital scan upload or PVS impression submission",
      "Standardized orthodontic extraoral and intraoral photographic series",
      "Radiographic examination (OPG and lateral cephalometric evaluation)",
    ],
    deliverables: "Validated digital case records & clinical prescription form",
    iconName: "ScanLine",
  },
  {
    step: 2,
    stage: "Stage 02",
    title: "Treatment Planning",
    subtitle: "Digital Simulation & Biomechanical Staging",
    description:
      "CLEARNYX orthodontic digital planners transform raw clinical scans into a sub-millimeter 3D digital simulation. Tooth movements are calculated stage-by-stage respecting biological boundaries, bone architecture, and anchorage requirements.",
    details: [
      "Sub-millimeter tooth segmentation and dental arch alignment",
      "Optimal attachment placement and interproximal reduction (IPR) staging",
      "Biomechanical sequencing designed to mitigate unwanted reciprocal movements",
      "Comprehensive interactive 3D digital treatment setup ready for clinician review",
    ],
    deliverables: "Interactive 3D digital treatment plan (setup viewer)",
    iconName: "MonitorSmartphone",
  },
  {
    step: 3,
    stage: "Stage 03",
    title: "Approval",
    subtitle: "Clinician Review & Prescription Finalization",
    description:
      "You retain complete clinical authority over every case. Review the interactive 3D setup, request adjustments, modify attachment positions, or approve the sequence with one click.",
    details: [
      "Cloud-based case review on desktop, tablet, or mobile",
      "Direct communication and staging adjustment requests with orthodontic planners",
      "Verification of planned final occlusion, aesthetic smile arc, and IPR milestones",
      "Final digital prescription sign-off before manufacturing initiation",
    ],
    deliverables: "Clinician-approved digital production authorization",
    iconName: "CheckCircle2",
  },
  {
    step: 4,
    stage: "Stage 04",
    title: "Fabrication",
    subtitle: "Precision Thermoforming & Quality Verification",
    description:
      "Upon clinical sign-off, high-precision stereolithography creates the exact dental models for each stage. Medical-grade PETG or Multi-Layer polymers are thermoformed under controlled pressure and laser-trimmed along the gingival line.",
    details: [
      "Ultra-high resolution 3D printing of sequential dental models",
      "Precision thermoforming with strict thermal and atmospheric control",
      "Automated edge trimming and manual optical inspection of margins",
      "Multi-point quality verification ensuring dimensional calibration",
    ],
    deliverables: "Custom sequential aligner series with clinical tracking ID",
    iconName: "Layers",
  },
  {
    step: 5,
    stage: "Stage 05",
    title: "Delivery",
    subtitle: "Custom Packaging & Practice Dispatch",
    description:
      "The complete aligner series is packaged in professional CLEARNYX clinic boxes, individually sealed and labeled by stage for intuitive patient handover and compliance tracking.",
    details: [
      "Individually sealed, stage-numbered hygienic aligner pouches",
      "Convenient patient starter kit with protective carry case and chewies",
      "Comprehensive clinical treatment tracking sheet and IPR chart for your records",
      "Reliable expedited door-to-clinic delivery across Indian metro and regional centres",
    ],
    deliverables: "Complete boxed patient kit delivered to your practice",
    iconName: "PackageCheck",
  },
  {
    step: 6,
    stage: "Stage 06",
    title: "Alignment",
    subtitle: "Clinical Monitoring & Smile Transformation",
    description:
      "The patient wears each sequential aligner as prescribed, attending routine progress check-ups at your clinic to verify tracking, place attachments, and conduct planned IPR until the desired clinical result is achieved.",
    details: [
      "Recommended wear protocol: 22–24 hours daily for optimal biomechanical expression",
      "Stage transition interval: every 10–14 days as determined by the treating clinician",
      "Routine clinical monitoring to verify fit and tooth tracking at scheduled intervals",
      "Post-treatment retention planning upon successful completion of active alignment",
    ],
    deliverables: "Successful clinical alignment and patient smile satisfaction",
    iconName: "Sparkles",
  },
];

export const WEAR_PROTOCOL_NOTICE = {
  dailyWear: "22–24 Hours Daily",
  changeInterval: "Every 10–14 Days",
  disclaimer:
    "Important Clinical Notice: Recommended wear schedules (22–24 hours/day) and aligner change intervals (every 10–14 days) are indicative guidelines sourced from product documentation. The exact wear duration, staging timeline, and follow-up intervals must always be determined by the treating dental professional based on individual clinical evaluation and approved treatment planning.",
};
