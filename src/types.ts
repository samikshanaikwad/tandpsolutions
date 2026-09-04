export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: string[];
  imageUrl: string;
  iconName: string;
}

export interface PanelProduct {
  id: string;
  name: string;
  acronym: string;
  tagline: string;
  description: string;
  voltageRating: string;
  enclosureRating: string;
  keyFeatures: string[];
  commonApplications: string[];
  imageUrl: string;
}

export interface SPMMachine {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  cycleTime: string;
  controlArchitecture: string;
  keyFeatures: string[];
  idealIndustries: string[];
  imageUrl: string;
}

export interface TechItem {
  name: string;
  category: string;
  description: string;
  protocolsOrTypes: string[];
  icon: string;
}

export interface BrandPartner {
  name: string;
  tier: string;
  specialization: string;
  description: string;
  color: string;
  accentBg: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  solutionsProvided: string[];
  imageUrl: string;
  icon: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  icon: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  projectTimeline: string;
  message: string;
}
