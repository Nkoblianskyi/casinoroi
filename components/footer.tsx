import { Crown } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-500" />
              <span className="text-green-500">SitesDe</span>
              <span className="text-white">Casinos</span>
              <span className="text-red-500">Portugal</span>
            </div>
            <p className="text-gray-400 mb-6">
              O seu guia confiável para os melhores casinos online licenciados em Portugal. Análises imparciais, bónus
              exclusivos e informação atualizada.
            </p>
            <div className="text-sm text-gray-500">

              <p className="mt-2">Jogue com responsabilidade. +18 anos.</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#rankings" className="hover:text-yellow-400 transition-colors">
                  Rankings
                </a>
              </li>
              <li>
                <a href="#guia" className="hover:text-yellow-400 transition-colors">
                  Guia
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
              </li>

            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/politica-privacidade" className="hover:text-yellow-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="hover:text-yellow-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>

              <li>

              </li>

              <li>

              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto object-contain opacity-60" />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/icad.png" alt="ICAD" className="h-12 w-auto object-contain bg-white p-2 rounded-sm" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 w-auto object-contain opacity-60" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-12 w-auto object-contain bg-white p-2 rounded-sm" />
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p className="mb-4">
            Este site contém links de afiliados. Podemos receber comissões quando clica nestes links. Isto não afeta as
            nossas análises ou rankings.
          </p>
          <p>@ 2025 SitesDeCasinosPortugal.com - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
