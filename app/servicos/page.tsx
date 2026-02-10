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
    description: "Marcação de atendimento para serviços gerais da AIMA",
    duration: "30-45 minutos",
    cost: "59.10 €",
    documents: ["Documento de identificação"],
    color: "from-[#4A1D6A] to-[#5A2D7A]",
  },
  {
    icon: FileText,
    title: "Renovação de Autorização de Residência",
    description: "Renovação de autorização de residência temporária ou permanente",
    duration: "45-60 minutos",
    cost: "59.10 €",
    documents: ["Passaporte/CC", "Autorização anterior"],
    color: "from-[#8B1D5C] to-[#9B2D6C]",
  },
  {
    icon: Home,
    title: "Primeira Autorização de Residência",
    description: "Pedido de primeira autorização de residência em Portugal",
    duration: "60-90 minutos",
    cost: "59.10 €",
    documents: ["Passaporte", "Visto", "Contrato de trabalho/estudos", "Seguro de saúde"],
    color: "from-[#9B5BA5] to-[#AB6BB5]",
  },
  {
    icon: Users,
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes em Portugal",
    duration: "45-60 minutos",
    cost: "59.10 €",
    documents: ["Documentos de identificação", "Autorização do requerente", "Prova de parentesco"],
    color: "from-[#C74B8E] to-[#D75B9E]",
  },
  {
    icon: Info,
    title: "Manifestação de interresse/ CPLP",
    description: "Esclarecimento de dúvidas sobre processos e serviços AIMA e Emissão da CPLP",
    duration: "15-30 minutos",
    cost: "59.10 €",
    documents: ["Documento de identificação"],
    color: "from-[#4A1D6A] to-[#8B1D5C]",
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#4A1D6A] to-[#8B1D5C] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              Serviços Disponíveis
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tipos de Serviços</h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Conheça os serviços disponíveis para agendamento online. Cada serviço tem requisitos específicos de
              documentação.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-2 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-[#4A1D6A] to-[#8B1D5C] text-transparent bg-clip-text">
                        <Euro className="w-5 h-5 text-[#4A1D6A]" />
                        <span>{service.cost}</span>
                      </div>
                    </div>

                    <div className="bg-secondary/50 rounded-xl p-4">
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Documentos Necessários:</h4>
                      <ul className="space-y-2">
                        {service.documents.map((doc, docIndex) => (
                          <li key={docIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D5C]" />
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
            <div className="mt-16">
              <div className="bg-gradient-to-br from-secondary/50 to-muted rounded-3xl p-10 md:p-14 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Pronto para Agendar?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto text-lg">
                  Escolha o serviço que necessita e complete o agendamento online de forma rápida e segura.
                </p>
                <Button asChild size="lg" className="shadow-lg bg-gradient-to-r from-[#4A1D6A] to-[#8B1D5C] hover:opacity-90">
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
