import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
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
            Política de Cookies
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">O que são cookies?</h2>
              <p className="text-gray-300 mb-4">
                Os cookies são pequenos ficheiros de texto que são colocados no seu computador ou dispositivo móvel
                quando visita um website. São amplamente utilizados para fazer com que os websites funcionem, ou
                funcionem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Como utilizamos os cookies</h2>
              <p className="text-gray-300 mb-4">Utilizamos cookies para:</p>
              <ul className="text-gray-300 mb-4 list-disc pl-6">
                <li>Melhorar a funcionalidade do nosso website</li>
                <li>Analisar como os visitantes utilizam o nosso site</li>
                <li>Personalizar a sua experiência</li>
                <li>Lembrar as suas preferências</li>
                <li>Fornecer conteúdo relevante</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Tipos de cookies que utilizamos</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Cookies Essenciais</h3>
                <p className="text-gray-300">
                  Estes cookies são necessários para o funcionamento básico do website e não podem ser desativados.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Cookies de Análise</h3>
                <p className="text-gray-300">
                  Ajudam-nos a compreender como os visitantes interagem com o nosso website, fornecendo informações
                  sobre as páginas visitadas.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Cookies de Funcionalidade</h3>
                <p className="text-gray-300">
                  Permitem que o website se lembre das escolhas que faz e forneça funcionalidades melhoradas e
                  personalizadas.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Gestão de cookies</h2>
              <p className="text-gray-300 mb-4">
                Pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos os cookies que já estão no
                seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>
              <p className="text-gray-300">
                No entanto, se o fizer, poderá ter de ajustar manualmente algumas preferências sempre que visitar um
                site e alguns serviços e funcionalidades poderão não funcionar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contacto</h2>
              <p className="text-gray-300">
                Se tiver questões sobre a nossa política de cookies, pode contactar-nos através do nosso website.
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
