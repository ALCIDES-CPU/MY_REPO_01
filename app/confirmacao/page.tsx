import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Calendar, Mail, FileText, Home } from "lucide-react"

export default function ConfirmacaoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-balance">Agendamento pendente a confirmação de pagamento!</CardTitle>
              <CardDescription className="text-sm sm:text-base">O seu agendamento foi processado com sucesso, estamos aguardando a confirmação do seu pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Detalhes do Agendamento</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      O seu agendamento foi registado no sistema AIMA. Por favor, guarde o número de referência para
                      futuras consultas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Confirmação por E-mail</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enviámos um e-mail de confirmação com todos os detalhes do seu agendamento e instruções para o dia
                      do atendimento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Documentos Necessários</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Não se esqueça de trazer todos os documentos originais no dia do seu atendimento. Consulte o
                      e-mail para a lista completa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">Próximos Passos:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Verifique o e-mail de confirmação (incluindo a pasta de spam)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Prepare todos os documentos originais solicitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <span>Chegue 15 minutos antes do horário agendado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <span>Apresente o e-mail de confirmação na receção do centro AIMA</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="flex-1">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Voltar à Página Inicial
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="/agendar">Fazer Novo Agendamento</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
