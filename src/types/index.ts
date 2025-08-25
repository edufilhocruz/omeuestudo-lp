// Tipos principais da aplicação
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  salary?: string;
  timeToApproval?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

// Tipos para configuração
export interface AppConfig {
  brand: {
    name: string;
    description: string;
    logo: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

// Tipos para analytics e tracking
export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Tipos para performance
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}
