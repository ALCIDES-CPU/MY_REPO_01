import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Globe, Info } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Linha de Apoio",
    details: ["+351 808 202 663", "Chamada para rede fixa nacional"],
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["info@aimasef.com", "Resposta em 48 horas úteis"],
  },
  {
    icon: Globe,
    title: "Website Oficial",
    details: ["www.sefaima.com", "Informações e recursos oficiais"],
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    details: ["Segunda a Sexta: 09:00 - 17:00", "Sábados, Domingos e Feriados: Encerrado"],
  },
]

const offices = [
  {
    city: "Lisboa",
    address: "Avenida António Augusto de Aguiar, 20",
    postalCode: "1069-119 Lisboa",
    phone: "+351 21 810 6100",
  },
  {
    city: "Porto",
    address: "Praça Mouzinho de Albuquerque, 113",
    postalCode: "4100-359 Porto",
    phone: "+351 22 339 5500",
  },
  {
    city: "Coimbra",
    address: "Rua Antero de Quental, 119",
    postalCode: "3000-032 Coimbra",
    phone: "+351 239 497 100",
  },
  {
    city: "Faro",
    address: "Rua Dr. José de Matos, 14",
    postalCode: "8000-503 Faro",
    phone: "+351 289 899 100",
  },
]

export default function ContactosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactos</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Entre em contacto connosco através dos seguintes canais. Estamos disponíveis para ajudar com as suas
              questões.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {contact.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className={detailIndex === 0 ? "font-semibold" : "text-sm text-muted-foreground"}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Offices */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Centros de Atendimento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-xl">{office.city}</CardTitle>
                        <CardDescription className="mt-2 leading-relaxed">
                          {office.address}
                          <br />
                          {office.postalCode}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{office.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-12 bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Informação Importante</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Para atendimento presencial, é obrigatório agendamento prévio através desta plataforma. Pedidos de
                    informação podem ser feitos por telefone ou e-mail. Para questões urgentes, utilize a linha de
                    apoio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
