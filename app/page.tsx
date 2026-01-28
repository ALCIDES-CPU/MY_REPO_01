import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, FileText, CreditCard, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
          <Image
            src="https://aima.gov.pt/media/pages/home/481e7f24bc-1706827832/europa_1-1200x-q65.jpg"
            alt="Banner AIMA - Agência para a Integração, Migrações e Asilo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D6A]/95 via-[#4A1D6A]/80 to-[#8B1D5C]/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                  Plataforma Oficial AIMA
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                  Agendamento de Serviços
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Agende o seu atendimento de forma rápida e segura. Submita documentos, efetue pagamentos e acompanhe o
                  status do seu processo online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg bg-white text-[#4A1D6A] hover:bg-white/90 shadow-lg">
                    <Link href="/agendar" className="flex items-center gap-2">
                      Agendar Agora
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white"
                  >
                    <Link href="/servicos">Ver Serviços</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Processo Simplificado
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Como Funciona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-secondary/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A1D6A] to-[#8B1D5C] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">1. Agende o Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Escolha o tipo de serviço, data e local de sua preferência de forma simples e intuitiva.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-secondary/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B1D5C] to-[#C74B8E] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">2. Submeta Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Faça upload dos documentos necessários de forma segura e organizada.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-secondary/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9B5BA5] to-[#4A1D6A] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">3. Efetue o Pagamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Pagamento seguro online através da plataforma Stripe.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#4A1D6A] to-[#8B1D5C]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Plataforma oficial da AIMA
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Destinada à agilização do processo de legalização em Portugal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">Rápido e Conveniente</h3>
                <p className="text-white/80 leading-relaxed">
                  Agende o seu atendimento a qualquer hora, sem filas e sem complicações.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">Acompanhamento em Tempo Real</h3>
                <p className="text-white/80 leading-relaxed">
                  Consulte o status do seu agendamento a qualquer momento através da plataforma.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-white">Seguro e Confiável</h3>
                <p className="text-white/80 leading-relaxed">
                  Seus dados e documentos protegidos com a mais alta tecnologia de criptografia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-secondary/50 to-muted rounded-3xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Pronto para Agendar?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                Comece agora e garanta o seu atendimento na AIMA. Processo simples, rápido e seguro.
              </p>
              <Button asChild size="lg" className="text-lg shadow-lg bg-gradient-to-r from-[#4A1D6A] to-[#8B1D5C] hover:opacity-90">
                <Link href="/agendar" className="flex items-center gap-2">
                  Agendar Atendimento
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
