"use client"

import { Star, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getTopCasino } from "@/lib/casinos"
import Link from "next/link"

export function TopChoiceSection() {
  const topCasino = getTopCasino()

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = rating % 2 !== 0

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : i === fullStars && hasHalfStar
                  ? "fill-yellow-400/50 text-yellow-400"
                  : "text-gray-600"
            }`}
          />
        ))}
        <span className="text-yellow-400 font-bold ml-2">{topCasino.rating}</span>
      </div>
    )
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          href={topCasino.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer hover:scale-[1.02] transition-transform duration-200"
        >
          <div className="bg-black/80 backdrop-blur-sm rounded-lg border-2 border-yellow-500 p-6 relative overflow-hidden shadow-lg shadow-yellow-500/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 text-6xl">♠</div>
              <div className="absolute bottom-4 left-4 text-4xl">♦</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">♣</div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  #1 MELHOR ESCOLHA
                </Badge>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                {/* Casino Logo and Name - Left on desktop */}
                <div className="flex flex-col items-center lg:items-start space-y-2 lg:flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <img
                      src={topCasino.logo || "/placeholder.svg"}
                      alt={`${topCasino.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center lg:text-left">{topCasino.name}</h3>
                </div>

                {/* Bonus - Center on desktop */}
                <div className="lg:flex-1 lg:text-center">
                  <p className="text-red-400 text-sm font-medium mb-2">OFERTA DE BOAS-VINDAS</p>
                  <p className="text-xl font-bold text-yellow-400">{topCasino.bonus}</p>
                </div>

                {/* Rating and Reviews - Center on desktop */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  {renderStars(topCasino.rating)}
                  <span className="text-sm text-gray-400">({Math.floor(Math.random() * 3000) + 2000} avaliações)</span>
                </div>

                {/* Action Buttons - Right on desktop */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:flex-shrink-0 lg:w-48">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    <Gift className="h-4 w-4 mr-2" />
                    OBTER BÓNUS
                  </Button>
                  <p className="text-xs text-gray-400 text-center">18+ • Jogo Seguro</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
