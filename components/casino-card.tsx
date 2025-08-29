"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

const badges = ["MELHOR ESCOLHA", "RECOMENDADO", "POPULAR", "CONFIÁVEL", "TESTADO"]

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating / 2)
    const hasHalfStar = rating % 2 !== 0

    return (
      <div className="flex items-center justify-center">
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
      </div>
    )
  }

  return (
    <div className="relative">
      <Badge
        variant="secondary"
        className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 bg-yellow-500 text-black border-yellow-500"
      >
        #{casino.rank} {badges[index]}
      </Badge>

      <Link
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer hover:scale-[1.02] transition-transform duration-200"
      >
        <div
          className={`bg-black/80 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden ${
            casino.rank === 1
              ? "border-2 border-yellow-500 shadow-lg shadow-yellow-500/20"
              : "border border-yellow-500/20"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 text-6xl">♠</div>
            <div className="absolute bottom-4 left-4 text-4xl">♦</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">♣</div>
          </div>

          <div className="relative z-10">
            {/* Casino Info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              {/* Casino Logo and Name - Left on desktop */}
              <div className="flex flex-col items-center lg:items-start space-y-2 lg:flex-shrink-0">
                <div className="w-36 h-24 flex items-center justify-center">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={`${casino.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center lg:text-left">{casino.name}</h3>
              </div>

              {/* Bonus - Center on desktop */}
              <div className="lg:flex-1 lg:text-center ml-4">
                <p className="text-red-400 text-sm font-medium mb-2">OFERTA DE BOAS-VINDAS</p>
                <p className="text-xl font-bold text-yellow-400">{casino.bonus}</p>
              </div>

              <div className="flex flex-col items-center space-y-1 lg:flex-shrink-0">
                <span className="text-yellow-400 font-bold text-lg">{casino.rating}</span>
                {renderStars(casino.rating)}
                <p className="text-sm text-gray-400">{Math.floor(Math.random() * 3000) + 2000} avaliações</p>
              </div>

              {/* Action Buttons - Right on desktop */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:flex-shrink-0 lg:w-48">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">OBTER BÓNUS</Button>
                <p className="text-xs text-gray-400 text-center">18+ • Jogo Seguro</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
