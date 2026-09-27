export type ServiceId = 'website' | 'discord' | 'automation' | 'maintenance';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: 'Web Development' | 'Discord Development';
  description: string;
  features?: string[];
  techStack: string[];
  accentColor: string;
  previewType: 'architectural' | 'ticket-system' | 'verification' | 'business-platform';

  // Project links
  liveUrl?: string;
  demoUrl?: string;

  // Controls how the project is presented
  projectStatus?: 'Live' | 'Demo' | 'Concept' | 'Coming Soon';
}

export interface PricingPlan {
  id: string;
  title: string;
  priceStartingAt: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  defaultProjectType: 'Website' | 'Discord Bot' | 'Automation' | 'Maintenance' | 'Other';
  defaultBudget: 'Under $100' | '$100–$250' | '$250–$500' | '$500+' | 'Not sure yet';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProjectInquiryData {
  name: string;
  email: string;
  discordUsername: string;
  projectType: 'Website' | 'Discord Bot' | 'Automation' | 'Maintenance' | 'Other';
  budget: 'Under $100' | '$100–$250' | '$250–$500' | '$500+' | 'Not sure yet';
  projectDescription: string;
}