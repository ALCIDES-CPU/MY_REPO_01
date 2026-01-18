import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, FileText, CreditCard, CheckCircle, Clock, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] md:h-[600px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BANNER%20SITE1-O4YSkNoBBHBzvudDK7GIJ0TQaoKXSW.png"
            alt="Banner AIMA - Agência para a Integração, Migrações e Asilo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance md:text-7xl text-primary">
                Agendamento de Serviços AIMA
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
                Agende o seu atendimento de forma rápida e segura. Submita documentos, efetue pagamentos e acompanhe o
                status do seu agendamento online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg rounded-full">
                  <Link href="/agendar">Agendar Agora</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full"
                >
                  <Link href="/servicos">Ver Serviços</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>1. Agende o Atendimento</CardTitle>
                  <CardDescription>Escolha o tipo de serviço, data e local de sua preferência</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>2. Submeta Documentos</CardTitle>
                  <CardDescription>Faça upload dos documentos necessários de forma segura</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>3. Efetue o Pagamento</CardTitle>
                  <CardDescription>Pagamento seguro online quando aplicável ao serviço</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">{"Plataforma oficial da AIMA destinada à agilização do processo de legalização."}       </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rápido e Conveniente</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Agende o seu atendimento a qualquer hora, sem filas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Acompanhamento em Tempo Real</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Consulte o status do seu agendamento a qualquer momento
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Seguro e Confiável</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seus dados e documentos protegidos com criptografia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para Agendar?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Comece agora e garanta o seu atendimento na AIMA
            </p>
            <Button asChild size="lg" className="text-lg rounded-full">
              <Link href="/agendar">Agendar Atendimento</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
