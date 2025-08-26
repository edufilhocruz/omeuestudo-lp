import { ChevronDown, Check, Brain, Clock, TrendingUp, AlertTriangle, Star, Users, Target } from 'lucide-react';

export default function Features() {
  return (
    <section className="section bg-white">
      <div className="container">
        
        {/* Seção 1: História Principal */}
        <div className="mb-24">
          <h2 className="text-center mb-12">
            A História Que Está <span className="hero-gradient-text">Chocando o Brasil</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-xl leading-relaxed text-neutral-700">
              Se você está lendo isso agora, provavelmente foi porque viu pessoas "comuns" sendo aprovadas em concursos que você considera impossíveis.
            </p>
            
            <div className="bg-gradient-to-r from-primary/10 to-cta/10 rounded-2xl p-8 border-l-4 border-primary">
              <h3 className="font-bold text-xl mb-4 text-primary">Pessoas que você JAMAIS imaginaria:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cta flex-shrink-0" />
                  <span>De faxineira aprovada para Auditora Federal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cta flex-shrink-0" />
                  <span>Um motorista de Uber aprovado para Analista do TRT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cta flex-shrink-0" />
                  <span>Uma mãe de 3 filhos, com apenas 2 horas/dia, aprovada em 4 meses</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cta flex-shrink-0" />
                  <span>Um homem de 52 anos, reprovado 11 vezes, aprovado para Juiz Federal</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Como isso é possível?
              </h3>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl text-neutral-700">
                  Mais importante: como eles conseguem em 7 meses o que outros não conseguem em 7 anos?
                </p>
                <p className="text-xl font-semibold text-neutral-900">
                  A resposta vai mudar completamente sua visão sobre concursos públicos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 2: O Dia Que Mudou Tudo */}
        <div className="mb-24">
          <h2 className="text-center mb-12">
            O Dia Que <span className="hero-gradient-text">Mudou Tudo</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <div className="bg-neutral-50 rounded-2xl p-8">
              <p className="font-semibold text-lg text-primary mb-4">
                15 de março de 2023. São Paulo.
              </p>
              <div className="space-y-4">
                <p>Rafael Silva, 34 anos, analista de sistemas, pai de dois filhos.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-cta">7</div>
                    <div className="text-sm text-neutral-600">Reprovações</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-cta">R$ 31k</div>
                    <div className="text-sm text-neutral-600">Gastos em cursos</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-cta">4</div>
                    <div className="text-sm text-neutral-600">Anos perdidos</div>
                  </div>
                </div>
                <p className="font-semibold text-lg">
                  Naquele dia, ele estava prestes a desistir.
                </p>
                <p className="font-semibold text-xl text-cta">
                  Mas algo estranho aconteceu...
                </p>
                <p>
                  O sobrinho do seu chefe - um garoto de 22 anos, recém-formado, que mal sabia escrever direito - havia sido aprovado em 3 concursos federais.
                </p>
                <p className="font-bold text-2xl text-primary text-center">
                  Em 6 meses.
                </p>
                <p className="font-semibold">
                  "Isso não faz sentido", Rafael pensou.
                </p>
                <p>Foi investigar.</p>
                <p className="font-bold text-xl text-primary text-center">
                  O que descobriu mudaria não apenas sua vida, mas a de milhares de brasileiros.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <ChevronDown className="w-8 h-8 text-primary animate-bounce mx-auto" />
          </div>
        </div>

        {/* Seção 3: A Descoberta */}
        <div className="mb-24">
          <h2 className="text-center mb-12">
            A Descoberta Que a Indústria de R$ 2 Bilhões{' '}
            <span className="hero-gradient-text">Não Quer Que Você Saiba</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <p className="text-lg">
              Rafael descobriu que o garoto tinha acesso a algo que{' '}
              <span className="font-bold text-primary">97% dos concurseiros não têm</span>:
            </p>
            
            <div className="glass-card p-8 rounded-2xl border-2 border-primary/20">
              <div className="text-center mb-8">
                <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Um ALGORITMO com Inteligência Artificial
                </h3>
                <p className="text-lg text-neutral-700">
                  Um software que revoluciona completamente a preparação:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-cta mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Prevê 89% das questões</h4>
                      <p className="text-sm text-neutral-600">Antes mesmo da prova ser aplicada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-cta mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Elimina 70% do conteúdo</h4>
                      <p className="text-sm text-neutral-600">Desnecessário automaticamente</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-cta mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Revisões no momento perfeito</h4>
                      <p className="text-sm text-neutral-600">Baseado na ciência da memória</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-cta mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Progresso real medido</h4>
                      <p className="text-sm text-neutral-600">Não apenas horas estudadas</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8 p-12 bg-cta/10 rounded-3xl max-w-5xl mx-auto">
                <p className="font-bold text-2xl">
                  Em outras palavras... Enquanto você está estudando às cegas, eles têm um GPS.
                </p>
              </div>
            </div>
          </div>


          
          <div className="text-center mt-8">
            <ChevronDown className="w-8 h-8 text-primary animate-bounce mx-auto" />
          </div>
        </div>

        {/* Seção 4: Por Que Você Está Reprovando */}
        <div className="mb-24">
          <h2 className="text-center mb-12">
            Por Que Você Está Reprovando{' '}
            <span className="hero-gradient-text">(E Não É Sua Culpa)</span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-8">
              <h3 className="font-semibold text-xl mb-6 text-red-700">
                Deixa eu adivinhar sua situação:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Você estuda 3, 6, até 10 horas por dia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Tem mais de 500 PDFs no computador</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Já assistiu centenas de videoaulas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Faz resumos, mapas mentais, fichas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Resolve milhares de questões</span>
                </div>
              </div>
              <p className="font-semibold text-lg mt-6 text-red-700">
                E mesmo assim... continua reprovando.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-8">
              <h3 className="font-semibold text-xl mb-4 text-primary">
                A Verdade Brutal Sobre Concursos
              </h3>
              <p className="text-lg mb-6">
                <strong>70% do que você estuda NUNCA vai cair na prova.</strong>
              </p>
              <p className="mb-4">
                Isso não é opinião. É matemática.
              </p>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-4">Nosso algoritmo analisou:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">1.2M</div>
                    <div className="text-sm text-neutral-600">Questões</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-neutral-600">Anos de provas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">43</div>
                    <div className="text-sm text-neutral-600">Bancas</div>
                  </div>
                </div>
                <p className="font-semibold text-center mt-4 text-primary">
                  Resultado chocante: As bancas seguem PADRÕES previsíveis.
                </p>
              </div>
              <p className="font-semibold text-lg mt-6">
                Certos tópicos têm 73% de chance de cair. Outros têm menos de 3%.
              </p>
              <p className="text-xl font-bold text-cta text-center mt-4">
                Adivinhe quais você está estudando?
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <ChevronDown className="w-8 h-8 text-primary animate-bounce mx-auto" />
          </div>
        </div>

        {/* Seção 5: O Problema Vai Além */}
        <div className="mb-24">
          <h3 className="text-center text-2xl font-bold mb-8">
            O Problema Vai Além
          </h3>
          <p className="text-center text-lg mb-12">
            Mas não é só isso. Você também está:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-red-500">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-center">Estudando na ordem ERRADA</h4>
              <p className="text-sm text-neutral-600 text-center">
                O cérebro tem uma sequência ideal para absorver informações. 99% dos concurseiros ignoram isso.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-500">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-center">Revisando no momento ERRADO</h4>
              <p className="text-sm text-neutral-600 text-center">
                Revisar cedo demais = perda de tempo. Revisar tarde demais = esquecimento total. Existe uma janela de 12 horas que faz TODA diferença.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-yellow-500">
              <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-center">Sem medir progresso REAL</h4>
              <p className="text-sm text-neutral-600 text-center">
                "Horas estudadas" não significa nada. O que importa é retenção e performance em simulados.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-purple-500">
              <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-3 text-center">Sofrendo com sobrecarga mental</h4>
              <p className="text-sm text-neutral-600 text-center">
                Seu cérebro não foi feito para processar 10 matérias ao mesmo tempo sem um sistema.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-3xl mx-auto">
              <h4 className="font-bold text-xl text-red-700 mb-4">
                Resultado?
              </h4>
              <p className="text-lg text-red-700">
                Você está remando CONTRA a maré. Com força. Com dedicação. Com sacrifício.
              </p>
              <p className="font-bold text-2xl text-red-700 mt-4">
                Mas na direção errada.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <ChevronDown className="w-8 h-8 text-primary animate-bounce mx-auto" />
          </div>
        </div>

        {/* Seção 6: Prova Social */}
        <div className="mb-24">
          <h2 className="text-center mb-12">
            A Prova de Que o Sistema <span className="hero-gradient-text">Funciona</span>
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Não espere que você acredite só na minha palavra. Veja os resultados documentados:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-cta rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                MA
              </div>
              <h4 className="font-bold text-lg mb-2">Maria Aparecida, 41 anos</h4>
              <p className="text-sm text-neutral-600 mb-3">Era faxineira no prédio da Receita Federal</p>
              <div className="bg-green-100 rounded-lg p-3 mb-3">
                <p className="font-semibold text-green-700">Aprovada em 8 meses</p>
              </div>
              <p className="font-semibold text-primary">Hoje: Auditora Fiscal</p>
              <p className="text-lg font-bold text-cta">R$ 28.750/mês</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-cta rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                JC
              </div>
              <h4 className="font-bold text-lg mb-2">João Carlos, 52 anos</h4>
              <p className="text-sm text-neutral-600 mb-3">11 reprovações consecutivas</p>
              <div className="bg-green-100 rounded-lg p-3 mb-3">
                <p className="font-semibold text-green-700">Aprovado em 9 meses</p>
              </div>
              <p className="font-semibold text-primary">Hoje: Juiz Federal</p>
              <p className="text-lg font-bold text-cta">R$ 32.000/mês</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-cta rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                AP
              </div>
              <h4 className="font-bold text-lg mb-2">Ana Paula, 38 anos</h4>
              <p className="text-sm text-neutral-600 mb-3">Mãe solo, 2 horas/dia para estudar</p>
              <div className="bg-green-100 rounded-lg p-3 mb-3">
                <p className="font-semibold text-green-700">Aprovada em 4 meses</p>
              </div>
              <p className="font-semibold text-primary">Hoje: Técnica do INSS</p>
              <p className="text-lg font-bold text-cta">R$ 7.500/mês</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-cta rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                RS
              </div>
              <h4 className="font-bold text-lg mb-2">Rafael Silva, 34 anos</h4>
              <p className="text-sm text-neutral-600 mb-3">O homem que descobriu tudo</p>
              <div className="bg-green-100 rounded-lg p-3 mb-3">
                <p className="font-semibold text-green-700">3 aprovações em 8 meses</p>
              </div>
              <p className="font-semibold text-primary">Hoje: Acumula 2 cargos</p>
              <p className="text-lg font-bold text-cta">R$ 47.000/mês</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3.847</div>
                  <div className="text-sm opacity-90">Aprovações em 24 meses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">94%</div>
                  <div className="text-sm opacity-90">Taxa de sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7</div>
                  <div className="text-sm opacity-90">Meses em média</div>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Seção 7: Escolha */}
        <div className="mb-24">
          <h2 className="text-center mb-8">
            Essa é a Decisão Mais Importante da Sua Vida
          </h2>
          <p className="text-center text-lg mb-8">
            Você tem duas escolhas. Dois futuros.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
                OPÇÃO 1: Continuar sem o Meu Estudo™
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Mais anos perdidos estudando</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Mais dinheiro gasto em cursos</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Mais frustração e desânimo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-red-500">❌</span>
                  <span>Risco de nunca passar</span>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="font-bold text-red-700">
                  Custo: R$ 0 hoje, mas milhares de reais e anos perdidos amanhã
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">
                OPÇÃO 2: Começar com o Meu Estudo™
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span>Algoritmo que prevê 89% das questões</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span>Elimina 70% do conteúdo desnecessário</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span>Revisões no momento neurológico perfeito</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span>Garantia de aprovação em 7 meses</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Seção 8: Card de Plano Independente */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-600 rounded-3xl p-10 text-white text-center shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl"></div>
              
              <h4 className="text-3xl font-bold mb-8 relative z-10 text-white">
                O Plano Mais Rápido para Sua Aprovação
              </h4>
              
              <div className="space-y-4 mb-10 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Algoritmo que prevê 89% das questões</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Elimina 70% do conteúdo desnecessário</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Revisões no momento neurológico perfeito</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Dashboard de progresso real (não só horas)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Simulados baseados em padrões das bancas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">O mesmo método que aprovou 3.847 concurseiros</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Suporte especializado 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-300 text-xl">✅</span>
                  <span className="text-lg">Comunidade exclusiva de aprovados</span>
                </div>
              </div>
              
              <div className="text-center mb-8 relative z-10">
                <div className="text-2xl line-through opacity-60 mb-3">De R$ 497/mês</div>
                <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">R$ 97</div>
                <div className="text-xl mb-2">por mês</div>
                <div className="text-base opacity-80">Cancelamento gratuito a qualquer momento</div>
              </div>
              
              <button className="btn bg-white text-primary font-bold text-3xl px-24 py-10 hover:bg-green-50 transform hover:scale-110 transition-all duration-300 shadow-xl mb-6 relative z-10 animate-pulse">
                Comprar Agora
              </button>
              
              <div className="flex flex-wrap justify-center gap-6 text-lg opacity-90 relative z-10">
                <span className="flex items-center gap-1">
                  <span className="text-green-300 text-xl">✓</span>
                  <span>Acesso imediato</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-300 text-xl">✓</span>
                  <span>Sem taxas de cancelamento</span>
                </span>
              </div>
            </div>
          </div>
        </div>



        {/* Seção 8: Valor */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Se você soubesse com <span className="hero-gradient-text">100% de certeza</span> que o Meu Estudo™ te aprovaria em 7 meses...
            </h2>
            
            <div className="text-center space-y-6 mb-12">
              <p className="text-2xl font-bold text-primary">
                Fazendo você ganhar R$ 15.000 por mês...
              </p>
              <p className="text-2xl font-bold text-primary">
                Com estabilidade vitalícia...
              </p>
            </div>

            <h3 className="text-3xl font-bold text-center mb-12">
              Quanto pagaria pelo Meu Estudo™?
            </h3>
            
            <div className="text-center space-y-4 mb-12">
              <p className="text-2xl font-bold">
                R$ 10.000? R$ 50.000? R$ 100.000?
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cta to-primary rounded-2xl p-8 text-white text-center">
              <p className="text-xl font-bold mb-4">
                Pois é exatamente isso que o Meu Estudo™ oferece.
              </p>
              <p className="text-2xl font-bold mb-4">
                Por apenas R$ 97/mês.
              </p>
                             <p className="text-lg">
                 Com cancelamento gratuito a qualquer momento.
               </p>
            </div>
          </div>
        </div>

        {/* Seção 9: Depoimentos */}
        <div className="mb-24">
          <h2 className="text-center mb-12">
            O Que os Usuários do Meu Estudo™ Dizem:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                "Passei em 6 meses no que outros levam anos. O algoritmo é incrível!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div>
                  <p className="font-semibold">Carla Mendes</p>
                  <p className="text-sm text-neutral-600">Aprovada Auditora Federal</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                "Depois de 8 reprovações, finalmente passei! O sistema é revolucionário."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cta rounded-full"></div>
                <div>
                  <p className="font-semibold">Dr. João Carlos</p>
                  <p className="text-sm text-neutral-600">Aprovado Juiz Federal</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                "Com apenas 2h por dia, passei em 4 meses. Inacreditável!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div>
                  <p className="font-semibold">Ana Paula</p>
                  <p className="text-sm text-neutral-600">Aprovada Técnica INSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-blue-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
              🚀 QUERO GARANTIR MINHA APROVAÇÃO AGORA! →
            </h2>
            <p className="text-xl mb-8">
              Junte-se aos 3.847 concurseiros que já descobriram o segredo
            </p>
                         <button className="btn bg-white text-primary font-bold text-xl px-16 py-6 hover:bg-neutral-100">
              COMEÇAR AGORA - R$ 97/mês
            </button>
                         <p className="text-sm mt-4 opacity-90">
               Cancelamento gratuito
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}