"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#4A1D6A]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIMA%20WHIT-IsJtsie9npT4L17xRWtuIA3HZoF2y4.png"
              alt="AIMA Logo"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/servicos"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10"
            >
              Servicos
            </Link>
            <Link
              href="/contactos"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10"
            >
              Contactos
            </Link>
            <Link
              href="/faq"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10"
            >
              FAQ
            </Link>
            <div className="ml-3">
              <Button asChild className="bg-white text-[#4A1D6A] hover:bg-white/90 font-semibold text-sm h-9 px-6 rounded-full">
                <Link href="/agendar">Agendar</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-1 border-t border-white/10 pt-4">
            <Link
              href="/"
              className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/agendar"
              className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Agendar Atendimento
            </Link>
            <Link
              href="/servicos"
              className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Servicos
            </Link>
            <Link
              href="/contactos"
              className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contactos
            </Link>
            <Link
              href="/faq"
              className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium text-white/80 hover:text-white"
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
