import { Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("pt-PT", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <section className="relative py-1.5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 md:p-8 border border-yellow-500/20">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-green-500">Os Melhores</span> <span className="text-red-500">Casinos Online</span>{" "}
              <span className="text-yellow-500">de Portugal</span>
            </h1>
            <p className="text-base text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubra os casinos online mais confiáveis e licenciados em Portugal. Rankings atualizados, bónus
              exclusivos e análises detalhadas.
            </p>

            {/* Security Indicators */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
              <div className="flex items-center space-x-2 text-green-400">
                <Image src="/srij.svg" width={24} height={24} alt="SRIJ" className="h-5 w-5" />
                <span className="text-xs font-medium">Licenciados SRIJ</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400">
                <Image src="/flag.png" width={24} height={24} alt="flag" className="h-5 w-5" />
                <span className="text-xs font-medium">Testados & Aprovados</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Clock className="h-5 w-5" />
                <span className="text-xs font-medium">Atualizados Diariamente</span>
              </div>
            </div>

            <div className="border-t border-yellow-500/20 pt-6">
              <p className="text-sm text-gray-400">
                Ranking atualizado pela última vez em{" "}
                <span className="text-yellow-400 font-medium capitalize">
                  {currentMonth} {currentYear}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
