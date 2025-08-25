

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cta rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline - Focada em Benefícios */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Enquanto Você Estuda Horas Por Dia e Não Passa...
            <br />
            <span className="hero-gradient-text">Estes 3.847 Concurseiros Descobriram Como Ser Aprovado em 7 Meses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Esses concurseiros descobriram que não era falta de estudo... eram as{' '}
            <span className="text-primary font-semibold">LACUNAS invisíveis</span> que ninguém ensina a identificar.
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              Resultado: aprovação em 7 meses
            </span>
          </p>




        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}