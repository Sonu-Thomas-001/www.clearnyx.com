export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface Solution {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  material: string;
  materialDescription: string;
  scope: string;
  clinicalIndication: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  suitability: string[];
  wearProtocol: string;
  image: string;
  comparisonHighlights: string[];
}

export interface WorkflowStage {
  step: number;
  stage: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  deliverables: string;
  iconName: string;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Clear Aligner Education" | "Digital Orthodontics" | "Treatment Planning" | "Product Knowledge" | "Dental Practice Insights";
  publishedAt: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  coverImage: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    takeaways: string[];
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Clinical" | "Products" | "Partnership" | "Workflow";
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  city: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface PartnerFormData {
  fullName: string;
  designation: string;
  clinicName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  practiceType: string;
  currentInterest: string[];
  message?: string;
  consent: boolean;
  honeypot?: string;
}
