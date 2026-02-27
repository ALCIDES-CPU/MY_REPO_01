"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#2A0D3A] text-white mt-auto">
      {/* Partners Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10">
          <p className="text-xs font-medium text-center mb-6 sm:mb-8 text-white/50 uppercase tracking-widest">
            Apoios e Financiamento
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 items-center justify-items-center">
            <div className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R%20PT-UsUcqcgTWpGh4Iuh8XZV15jxd2SMVO.png"
                alt="Republica Portuguesa"
                width={160}
                height={44}
                className="h-8 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CPT%202020-iUPMLKqARDRBGg9FoaJRBuVTEXAwP6.png"
                alt="COMPETE 2020"
                width={160}
                height={44}
                className="h-8 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20UE-o96TqErBlA6hJycCPqLKPRkRASwPca.png"
                alt="Uniao Europeia - Fundo Social Europeu"
                width={180}
                height={44}
                className="h-8 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PT%202020-oaiSRvVwOROeJBbLK7jKQAov01GkNU.png"
                alt="Portugal 2020 - Uniao Europeia Fundo Europeu de Desenvolvimento Regional"
                width={240}
                height={44}
                className="h-8 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-lg transition-shadow col-span-2 sm:col-span-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aima_horizontal_cor-rIl9RarT6CEu1ZKBjIgyK63jrgQiBj.png"
                alt="AIMA - Agencia para a Integracao, Migracoes e Asilo"
                width={180}
                height={44}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="sm:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIMA%20WHIT-m7VFlS1VuK9sFQyvUg8OT2SLKeKqA8.png"
              alt="AIMA Logo"
              width={160}
              height={48}
              className="h-10 w-auto mb-5"
            />
            <p className="text-white/60 leading-relaxed max-w-md text-sm">
              Plataforma oficial da AIMA destinada a agilizacao do processo de legalizacao em Portugal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-5 text-white/90 uppercase tracking-wider">Links Uteis</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                  Tipos de Servicos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/60 hover:text-white transition-colors text-sm">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contactos
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="text-white/60 hover:text-white transition-colors text-sm">
                  Agendar Atendimento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-5 text-white/90 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>info@servicosaima.com</li>
              <li>+351 808 202 653</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-5 sm:py-6 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} AIMA - Agencia para a Integracao, Migracoes e Asilo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
