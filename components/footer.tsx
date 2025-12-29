import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">AIMA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agência para a Integração, Migrações e Asilo
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
              <li>Email: info@aima.gov.pt</li>
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
