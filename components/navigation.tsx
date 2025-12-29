"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/10 rounded flex items-center justify-center">
              <span className="text-xl font-bold">AIMA</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Agendamento de Serviços</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
              Home
            </Link>
            <Link href="/agendar" className="hover:text-primary-foreground/80 transition-colors">
              Agendar Atendimento
            </Link>
            <Link href="/servicos" className="hover:text-primary-foreground/80 transition-colors">
              Tipos de Serviços
            </Link>
            <Link href="/contactos" className="hover:text-primary-foreground/80 transition-colors">
              Contactos
            </Link>
            <Link href="/faq" className="hover:text-primary-foreground/80 transition-colors">
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary-foreground/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-primary-foreground/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/agendar"
              className="block py-2 px-4 hover:bg-primary-foreground/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Agendar Atendimento
            </Link>
            <Link
              href="/servicos"
              className="block py-2 px-4 hover:bg-primary-foreground/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tipos de Serviços
            </Link>
            <Link
              href="/contactos"
              className="block py-2 px-4 hover:bg-primary-foreground/10 rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contactos
            </Link>
            <Link
              href="/faq"
              className="block py-2 px-4 hover:bg-primary-foreground/10 rounded transition-colors"
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
