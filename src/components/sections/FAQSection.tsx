import React from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { faqs } from '@/data/faqs';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection animation="fade-in-up" delay={200}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
            Perguntas Frequentes Sobre o <span className="hero-gradient-text">Meu Estudo™</span>:
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={faq.id}
              animation="fade-in-up"
              delay={300 + index * 100}
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  "{faq.question}"
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
