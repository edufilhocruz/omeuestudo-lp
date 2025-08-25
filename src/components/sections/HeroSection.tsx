import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useAnalytics } from '@/hooks/useAnalytics';

export const HeroSection: React.FC = () => {
  const { trackPageView } = useAnalytics();

  React.useEffect(() => {
    trackPageView('hero');
  }, [trackPageView]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center">
        <AnimatedSection animation="fade-in-up" delay={200}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Como Concurseiros Comuns Estão Passando em{' '}
            <span className="hero-gradient-text">Concursos 'Impossíveis'</span> em 7 Meses
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Concurseiro Reprovado 7 Vezes Descobre Método Secreto, Passa em 7 Concursos 
            Estudando menos de 6 horas por dia
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <ChevronDown className="w-8 h-8 text-primary animate-bounce mx-auto" />
        </AnimatedSection>
      </div>
    </section>
  );
};
