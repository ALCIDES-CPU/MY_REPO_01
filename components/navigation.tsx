"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="text-white shadow-lg sticky top-0 z-50 bg-gradient-to-r from-[#4A1D6A] to-[#5A2D7A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-aima.png" alt="AIMA Logo" width={200} height={60} className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/90 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/servicos" className="text-white/90 hover:text-white transition-colors font-medium">
              Serviços
            </Link>
            <Link href="/contactos" className="text-white/90 hover:text-white transition-colors font-medium">
              Contactos
            </Link>
            <Link href="/faq" className="text-white/90 hover:text-white transition-colors font-medium">
              FAQ
            </Link>
            <Button asChild className="bg-white text-[#4A1D6A] hover:bg-white/90 font-semibold shadow-md">
              <Link href="/agendar">Agendar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 border-t border-white/10 pt-4">
            <Link
              href="/"
              className="block py-3 px-4 hover:bg-white/10 rounded-xl transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/agendar"
              className="block py-3 px-4 hover:bg-white/10 rounded-xl transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Agendar Atendimento
            </Link>
            <Link
              href="/servicos"
              className="block py-3 px-4 hover:bg-white/10 rounded-xl transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/contactos"
              className="block py-3 px-4 hover:bg-white/10 rounded-xl transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contactos
            </Link>
            <Link
              href="/faq"
              className="block py-3 px-4 hover:bg-white/10 rounded-xl transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
