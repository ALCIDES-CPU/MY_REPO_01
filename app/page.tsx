import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, FileText, CreditCard, CheckCircle, Clock, Shield, ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#4A1D6A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
              {/* Left - Content */}
              <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 w-fit">
                  <Sparkles className="w-4 h-4" />
                  <span>Plataforma Oficial AIMA</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight text-balance">
                  Agendamento de Servicos
                </h1>
                <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
                  Agende o seu atendimento de forma rapida e segura. Submita documentos, efetue pagamentos e acompanhe o
                  status do seu processo online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base font-semibold bg-white text-[#4A1D6A] hover:bg-white/90 shadow-lg px-8 h-13 rounded-full">
                    <Link href="/agendar" className="flex items-center gap-2">
                      Agendar Agora
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base font-medium bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 h-13 rounded-full"
                  >
                    <Link href="/servicos">Ver Servicos</Link>
                  </Button>
                </div>
              </div>

              {/* Right - Banner Image */}
              <div className="relative hidden lg:block">
                <Image
                  src="/images/banner.jpeg"
                  alt="Banner AIMA - Agencia para a Integracao, Migracoes e Asilo"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A1D6A] via-[#4A1D6A]/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Mobile banner - shows below content */}
          <div className="relative lg:hidden h-64 sm:h-80">
            <Image
              src="/images/banner.jpeg"
              alt="Banner AIMA - Agencia para a Integracao, Migracoes e Asilo"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#4A1D6A]/60 to-transparent" />
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Processo Simplificado</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Como Funciona</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#4A1D6A] rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-border group-hover:text-accent/20 transition-colors">01</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Agende o Atendimento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Escolha o tipo de servico, data e local de sua preferencia de forma simples e intuitiva.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#8B1D5C] rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-border group-hover:text-accent/20 transition-colors">02</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Submeta Documentos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Faca upload dos documentos necessarios de forma segura e organizada.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#9B5BA5] rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-border group-hover:text-accent/20 transition-colors">03</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Efetue o Pagamento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pagamento seguro online atraves da plataforma Stripe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 md:py-32 bg-[#4A1D6A] relative overflow-hidden">
          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1D5C]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#9B5BA5]/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-3">Vantagens</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Plataforma oficial da AIMA
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Destinada a agilizacao do processo de legalizacao em Portugal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.12] transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Rapido e Conveniente</h3>
                <p className="text-white/70 leading-relaxed">
                  Agende o seu atendimento a qualquer hora, sem filas e sem complicacoes.
                </p>
              </div>

              <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.12] transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Acompanhamento em Tempo Real</h3>
                <p className="text-white/70 leading-relaxed">
                  Consulte o status do seu agendamento a qualquer momento atraves da plataforma.
                </p>
              </div>

              <div className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.12] transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Seguro e Confiavel</h3>
                <p className="text-white/70 leading-relaxed">
                  Seus dados e documentos protegidos com a mais alta tecnologia de criptografia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
            <div className="bg-secondary rounded-3xl p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">Pronto para Agendar?</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
                  Comece agora e garanta o seu atendimento na AIMA. Processo simples, rapido e seguro.
                </p>
                <Button asChild size="lg" className="text-base font-semibold shadow-lg bg-[#4A1D6A] text-white hover:bg-[#3A0D5A] px-10 h-13 rounded-full">
                  <Link href="/agendar" className="flex items-center gap-2">
                    Agendar Atendimento
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
