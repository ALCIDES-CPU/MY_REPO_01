import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#4A1D6A] to-[#3A0D5A] text-white mt-auto">
      {/* Partners Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h3 className="text-sm font-medium text-center mb-8 text-white/70 uppercase tracking-wider">
            Apoios e Financiamento
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-colors bg-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PT%202020-oaiSRvVwOROeJBbLK7jKQAov01GkNU.png"
                alt="Portugal 2020 - União Europeia - Fundo Europeu de Desenvolvimento Regional"
                width={400}
                height={80}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIMA%20WHIT-m7VFlS1VuK9sFQyvUg8OT2SLKeKqA8.png" alt="AIMA Logo" width={200} height={60} className="h-14 w-auto mb-4" />
            <p className="text-white/70 leading-relaxed max-w-md">
              Plataforma oficial da AIMA destinada à agilização do processo de legalização em Portugal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicos" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  Tipos de Serviços
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  Contactos
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  Agendar Atendimento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Contacto</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                Email: info@aimasef.com
              </li>
              <li className="flex items-center gap-2">
                Telefone: +351 808 202 653
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} AIMA - Agência para a Integração, Migrações e Asilo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
