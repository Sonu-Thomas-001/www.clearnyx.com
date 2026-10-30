export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  totalMilliseconds: number;
}

export interface EnquiryFormData {
  fullName: string;
  designation: string;
  clinicName: string;
  city: string;
  email: string;
  phone: string;
  consent: boolean;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  enquiryId?: string;
  errors?: Partial<Record<keyof EnquiryFormData, string>>;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'crosshair' | 'cpu' | 'handshake';
  highlights: string[];
}
