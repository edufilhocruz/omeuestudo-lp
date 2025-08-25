import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { LazyImage } from '@/components/common/LazyImage';
import { testimonials } from '@/data/testimonials';
import { useAnalytics } from '@/hooks/useAnalytics';

export const TestimonialsSection: React.FC = () => {
  const { trackScroll } = useAnalytics();

  const handleScroll = React.useCallback(() => {
    trackScroll('testimonials', 100);
  }, [trackScroll]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleScroll();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [handleScroll]);

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-in-up" delay={200}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
            A Prova de Que o Sistema <span className="hero-gradient-text">Funciona</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Não espere que você acredite só na minha palavra. Veja os resultados documentados:
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              animation="fade-in-up"
              delay={300 + index * 100}
            >
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    Salário: {testimonial.salary}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Aprovado em: {testimonial.timeToApproval}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={800}>
          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-foreground mb-4">
              Total: 3.847 aprovações em 24 meses. Taxa de sucesso: 94%.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
