import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 pb-8 border-b border-border">
          <h3 className="text-sm font-semibold text-center mb-6 text-muted-foreground">Apoios e Financiamento</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R%20PT-UsUcqcgTWpGh4Iuh8XZV15jxd2SMVO.png"
              alt="República Portuguesa"
              width={200}
              height={60}
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CPT%202020-iUPMLKqARDRBGg9FoaJRBuVTEXAwP6.png"
              alt="União Europeia - Fundo Social Europeu"
              width={200}
              height={60}
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C%20UE-o96TqErBlA6hJycCPqLKPRkRASwPca.png"
              alt="Portugal 2020 e União Europeia"
              width={300}
              height={60}
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity col-span-2 md:col-span-1"
            />
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo-aima.png" alt="AIMA Logo" width={180} height={50} className="h-10 w-auto mb-3" />
            <h3 className="font-semibold text-lg mb-3">{""}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {""}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tipos de Serviços
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@sefaima.com</li>
              <li>Telefone: +351 808 202 653</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIMA - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
