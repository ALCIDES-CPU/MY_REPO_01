import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Home, Info, Clock, Euro, ArrowRight } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Agendamento Geral AIMA",
    description: "Marcacao de atendimento para servicos gerais da AIMA",
    duration: "30-45 minutos",
    cost: "83.10",
    documents: ["Documento de identificacao"],
    color: "bg-[#4A1D6A]",
  },
  {
    icon: FileText,
    title: "Renovacao de Autorizacao de Residencia",
    description: "Renovacao de autorizacao de residencia temporaria ou permanente",
    duration: "45-60 minutos",
    cost: "83.10",
    documents: ["Passaporte/CC", "Autorizacao anterior"],
    color: "bg-[#8B1D5C]",
  },
  {
    icon: Home,
    title: "Primeira Autorizacao de Residencia",
    description: "Pedido de primeira autorizacao de residencia em Portugal",
    duration: "60-90 minutos",
    cost: "83.10",
    documents: ["Passaporte", "Visto", "Contrato de trabalho/estudos", "Seguro de saude"],
    color: "bg-[#9B5BA5]",
  },
  {
    icon: Users,
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes em Portugal",
    duration: "45-60 minutos",
    cost: "83.10",
    documents: ["Documentos de identificacao", "Autorizacao do requerente", "Prova de parentesco"],
    color: "bg-[#C74B8E]",
  },
  {
    icon: Info,
    title: "Manifestacao de interesse / CPLP",
    description: "Esclarecimento de duvidas sobre processos e servicos AIMA e Emissao da CPLP",
    duration: "15-30 minutos",
    cost: "83.10",
    documents: ["Documento de identificacao"],
    color: "bg-[#4A1D6A]",
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#4A1D6A] py-12 sm:py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3 sm:mb-4">Servicos Disponiveis</p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white text-balance">Tipos de Servicos</h1>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Conheca os servicos disponiveis para agendamento online. Cada servico tem requisitos especificos de
                documentacao.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border border-border hover:border-accent/30 shadow-none hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold text-lg text-foreground">
                        <Euro className="w-4 h-4 text-muted-foreground" />
                        <span>{service.cost}</span>
                      </div>
                    </div>

                    <div className="bg-secondary rounded-xl p-4">
                      <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-muted-foreground">Documentos Necessarios</h4>
                      <ul className="space-y-2">
                        {service.documents.map((doc, docIndex) => (
                          <li key={docIndex} className="text-sm text-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-20">
              <div className="bg-secondary rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-foreground text-balance">Pronto para Agendar?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto">
                    Escolha o servico que necessita e complete o agendamento online de forma rapida e segura.
                  </p>
                  <Button asChild size="lg" className="shadow-lg bg-[#4A1D6A] text-white hover:bg-[#3A0D5A] px-8 sm:px-10 h-12 sm:h-13 rounded-full font-semibold text-sm sm:text-base">
                    <Link href="/agendar" className="flex items-center gap-2">
                      Agendar Atendimento
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
