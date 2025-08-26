import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter, Linkedin, Github, Shield, Clock, Users, Target, CheckCircle, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="container">
        <div className="py-20">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-cta rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">
                    Meu Estudo™
                  </h3>
                </div>
                <p className="text-neutral-300 leading-relaxed max-w-lg text-lg">
                  A plataforma revolucionária que usa inteligência artificial para prever 89% das questões de concursos públicos, garantindo sua aprovação em 7 meses ou menos.
                </p>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Garantia 30 Dias</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Suporte 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>3.847 Aprovados</span>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-bold text-xl mb-8 text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-white" />
                Plataforma
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#como-funciona" className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Resultados Comprovados
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#garantia" className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Garantia de 30 Dias
                  </a>
                </li>
                <li>
                  <a href="#suporte" className="text-neutral-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Suporte 24/7
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-xl mb-8 text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-white" />
                Empresa
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#sobre" className="text-neutral-300 hover:text-cta transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-cta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#missao" className="text-neutral-300 hover:text-cta transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-cta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Nossa Missão
                  </a>
                </li>
                <li>
                  <a href="#privacidade" className="text-neutral-300 hover:text-cta transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-cta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#termos" className="text-neutral-300 hover:text-cta transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-cta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-neutral-300 hover:text-cta transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-cta rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-primary/10 to-cta/10 rounded-2xl p-8 mb-16 border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-bold text-white">
                  Receba Dicas Exclusivas de Concurso
                </h4>
              </div>
              <p className="text-neutral-300 mb-8 text-lg">
                Fique por dentro das estratégias que estão aprovando milhares de concurseiros. Dicas gratuitas toda semana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-6 py-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button className="btn btn-cta px-8 py-4 whitespace-nowrap rounded-xl font-semibold">
                  Quero as Dicas
                </button>
              </div>
              
              <p className="text-sm text-neutral-500 mt-4">
                🔒 Não enviamos spam. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 border-t border-neutral-800">
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone className="w-5 h-5 text-primary" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MessageCircle className="w-5 h-5 text-cta" />
                <span>contato@omeuestudo.com.br</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center lg:text-right">
              <div className="text-sm text-neutral-400 mb-2">
                © 2024 Meu Estudo™. Todos os direitos reservados.
              </div>
              <div className="text-xs text-neutral-500">
                Desenvolvido com ❤️ para concurseiros brasileiros
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}