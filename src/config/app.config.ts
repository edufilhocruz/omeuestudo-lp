import { AppConfig } from '@/types';

export const appConfig: AppConfig = {
  brand: {
    name: "Meu Estudo™",
    description: "Plataforma de preparação para concursos públicos com inteligência artificial que aprova concurseiros em 7 meses.",
    logo: "/logo.svg"
  },
  contact: {
    email: "contato@meuestudo.com.br",
    phone: "+55 (11) 99999-9999",
    address: "São Paulo, SP - Brasil"
  },
  social: {
    twitter: "https://twitter.com/meuestudo",
    linkedin: "https://linkedin.com/company/meuestudo",
    instagram: "https://instagram.com/meuestudo"
  }
};

// Configurações de performance
export const performanceConfig = {
  lazyLoadThreshold: 0.1,
  debounceDelay: 300,
  throttleDelay: 100,
  maxRetries: 3,
  cacheTimeout: 5 * 60 * 1000, // 5 minutos
};

// Configurações de analytics
export const analyticsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  trackingId: process.env.VITE_GA_TRACKING_ID || '',
  debug: process.env.NODE_ENV === 'development',
};

// Configurações de SEO
export const seoConfig = {
  title: "Meu Estudo™ - Aprovação em Concursos em 7 Meses",
  description: "Plataforma de preparação para concursos públicos com IA. Aprove em 7 meses com nosso algoritmo inteligente.",
  keywords: "concursos públicos, aprovação, estudo, IA, algoritmo, concurseiros",
  ogImage: "/og-image.jpg",
  canonical: "https://meuestudo.com.br",
};
