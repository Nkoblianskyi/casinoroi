import { BookOpen, TrendingUp, Shield } from "lucide-react"

export function GuideSection() {
  return (
    <section id="guia" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-yellow-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Descobrindo as Melhores Casas de Apostas de Portugal
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Segurança Garantida</h3>
              <p className="text-gray-300">
                Todos os casinos são licenciados pelo SRIJ e seguem as regulamentações portuguesas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Melhores Odds</h3>
              <p className="text-gray-300">Comparamos as odds e bónus para garantir que obtém o melhor valor.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Análises Detalhadas</h3>
              <p className="text-gray-300">Reviews completas com testes reais de cada plataforma de apostas.</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Portugal tem um mercado regulamentado de jogos online desde 2015, com o SRIJ (Serviço de Regulação e
              Inspeção de Jogos) a supervisionar todas as operações. Isto significa que pode apostar com confiança,
              sabendo que os seus dados e fundos estão protegidos.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Os nossos especialistas testam cada casino durante semanas, avaliando tudo desde a velocidade dos
              pagamentos até à qualidade do suporte ao cliente. Só recomendamos casinos que passam nos nossos rigorosos
              testes de segurança e qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
