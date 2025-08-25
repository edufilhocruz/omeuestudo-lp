import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Meu Estudo™
                </h3>
                <p className="text-neutral-300 leading-relaxed max-w-md">
                  A plataforma revolucionária que usa inteligência artificial para prever 89% das questões de concursos públicos, garantindo sua aprovação em 7 meses ou menos.
                </p>
              </div>
              

            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Plataforma</h4>
              <ul className="space-y-3 text-neutral-300">
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="hover:text-white transition-colors">
                    Resultados Comprovados
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-white transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#garantia" className="hover:text-white transition-colors">
                    Garantia de 30 Dias
                  </a>
                </li>
                <li>
                  <a href="#suporte" className="hover:text-white transition-colors">
                    Suporte 24/7
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Empresa</h4>
              <ul className="space-y-3 text-neutral-300">
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#missao" className="hover:text-white transition-colors">
                    Nossa Missão
                  </a>
                </li>
                <li>
                  <a href="#privacidade" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#termos" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="max-w-2xl">
              <h4 className="font-semibold text-lg mb-4">
                Receba Dicas Exclusivas de Concurso
              </h4>
              <p className="text-neutral-300 mb-6">
                Fique por dentro das estratégias que estão aprovando milhares de concurseiros. Dicas gratuitas toda semana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="btn btn-cta px-8 whitespace-nowrap">
                  Quero as Dicas
                </button>
              </div>
              
              <p className="text-xs text-neutral-500 mt-3">
                Não enviamos spam. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">🔒</span>
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">🛡️</span>
                  <span>Garantia de 30 Dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">📞</span>
                  <span>Suporte 24/7</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-neutral-400">
                  © 2024 Meu Estudo™. Todos os direitos reservados.
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
}