"use client"

import { Crown, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-yellow-500/20 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center relative">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Crown className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold">
              <span className="text-green-500">Casino</span>
              <span className="text-red-500">Portugal</span>
            </span>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden absolute right-0">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-yellow-500/20">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#rankings" className="text-white hover:text-yellow-400 transition-colors">
                  Rankings
                </a>
                <a href="#guia" className="text-white hover:text-yellow-400 transition-colors">
                  Guia
                </a>
                <a href="#faq" className="text-white hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                >
                  <User className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
