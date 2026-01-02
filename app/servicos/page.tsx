import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Home, Info, Clock, Euro } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Agendamento Geral AIMA",
    description: "Marcação de atendimento para serviços gerais da AIMA",
    duration: "30-45 minutos",
    cost: "59,10 €", // Atualizado preço para 59,10 €
    documents: ["Documento de identificação", "Comprovante de residência"],
  },
  {
    icon: FileText,
    title: "Renovação de Autorização de Residência",
    description: "Renovação de autorização de residência temporária ou permanente",
    duration: "45-60 minutos",
    cost: "59,10 €", // Atualizado preço para 59,10 €
    documents: ["Passaporte/CC", "Autorização anterior", "Comprovante de residência", "NIF/NISS"],
  },
  {
    icon: Home,
    title: "Primeira Autorização de Residência",
    description: "Pedido de primeira autorização de residência em Portugal",
    duration: "60-90 minutos",
    cost: "59,10 €", // Atualizado preço para 59,10 €
    documents: ["Passaporte", "Visto", "Contrato de trabalho/estudos", "Seguro de saúde", "Comprovante de alojamento"],
  },
  {
    icon: Users,
    title: "Reagrupamento Familiar",
    description: "Pedido de reagrupamento familiar para residentes em Portugal",
    duration: "45-60 minutos",
    cost: "59,10 €", // Atualizado preço para 59,10 €
    documents: [
      "Documentos de identificação",
      "Autorização do requerente",
      "Prova de parentesco",
      "Comprovante de rendimentos",
    ],
  },
  {
    icon: Info,
    title: "Informação / Consulta",
    description: "Esclarecimento de dúvidas sobre processos e serviços AIMA",
    duration: "15-30 minutos",
    cost: "59,10 €", // Atualizado preço para 59,10 €
    documents: ["Documento de identificação"],
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Serviços</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Conheça os serviços disponíveis para agendamento online. Cada serviço tem requisitos específicos de
              documentação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <Euro className="w-4 h-4" />
                      <span>{service.cost}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Documentos Necessários:</h4>
                    <ul className="space-y-1">
                      {service.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Pronto para Agendar?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Escolha o serviço que necessita e complete o agendamento online de forma rápida e segura.
                </p>
                <Button asChild size="lg">
                  <Link href="/agendar">Agendar Atendimento</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
