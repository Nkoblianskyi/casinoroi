import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-6">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/casino-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        <main className="max-w-4xl mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Informações que recolhemos</h2>
              <p className="text-gray-300 mb-4">
                Recolhemos informações que nos fornece diretamente, como quando se regista no nosso site, subscreve a
                nossa newsletter ou nos contacta.
              </p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Nome e endereço de email</li>
                <li>Informações de contacto</li>
                <li>Preferências de comunicação</li>
                <li>Dados de utilização do website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Como utilizamos as suas informações</h2>
              <p className="text-gray-300 mb-4">Utilizamos as informações recolhidas para:</p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Fornecer e melhorar os nossos serviços</li>
                <li>Comunicar consigo sobre atualizações e ofertas</li>
                <li>Personalizar a sua experiência</li>
                <li>Analisar e melhorar o nosso website</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Partilha de informações</h2>
              <p className="text-gray-300 mb-4">
                Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros para fins comerciais,
                exceto conforme descrito nesta política.
              </p>
              <p className="text-gray-300">
                Podemos partilhar informações com parceiros de confiança que nos ajudam a operar o nosso website e
                fornecer serviços, desde que concordem em manter essas informações confidenciais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Segurança dos dados</h2>
              <p className="text-gray-300 mb-4">
                Implementamos medidas de segurança adequadas para proteger as suas informações pessoais contra acesso
                não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Os seus direitos</h2>
              <p className="text-gray-300 mb-4">Tem o direito de:</p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Aceder às suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Opor-se ao processamento dos seus dados</li>
                <li>Portabilidade dos dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Jogo responsável</h2>
              <p className="text-gray-300 mb-4">
                Promovemos o jogo responsável e fornecemos informações sobre recursos de ajuda para problemas
                relacionados com o jogo. Se tem problemas com o jogo, procure ajuda profissional.
              </p>
              <p className="text-gray-300">
                Este site é destinado apenas a maiores de 18 anos e residentes em Portugal onde o jogo online é legal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
              <p className="text-gray-300">
                Se tiver questões sobre esta política de privacidade ou sobre como tratamos os seus dados pessoais, pode
                contactar-nos através do nosso website.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-12 pt-8 border-t border-yellow-500/20">
              <p>Última atualização: {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long" })}</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
