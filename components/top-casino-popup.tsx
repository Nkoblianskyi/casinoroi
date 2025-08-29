"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000) // Show after 8 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-black/95 border-yellow-500/30 max-w-md">
        <div className="relative">
          <div
            className="text-center p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-200"
            onClick={handleModalClick}
          >
            <div className="flex justify-center mb-4">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={`${topCasino.name} logo`}
                className="h-16 w-auto object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Oferta Especial!</h3>
            <h4 className="text-xl font-bold text-yellow-400 mb-4">{topCasino.name}</h4>

            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-bold text-yellow-400 ml-2">{topCasino.rating}</span>
            </div>

            <p className="text-lg text-white mb-6">{topCasino.bonus}</p>

            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
              OBTER BÓNUS AGORA
            </Button>

            <p className="text-xs text-gray-400 mt-4">Oferta limitada. Termos e condições aplicam-se.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
