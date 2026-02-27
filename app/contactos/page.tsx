import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Globe, Info } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Linha de Apoio",
    details: ["+351 808 202 763", "Chamada para rede fixa nacional"],
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["info@servicosaima.com", "Resposta em 48 horas uteis"],
  },
  {
    icon: Globe,
    title: "Website Oficial",
    details: ["www.servicosaima.com", "Informacoes e servicos oficiais"],
  },
  {
    icon: Clock,
    title: "Horario de Atendimento",
    details: ["Segunda a Sexta: 09:00 - 17:00", "Sabados, Domingos e Feriados: Encerrado"],
  },
]

const offices = [
  {
    city: "Lisboa",
    address: "Avenida Antonio Augusto de Aguiar, 20",
    postalCode: "1069-119 Lisboa",
    phone: "+351 21 810 6500",
  },
  {
    city: "Porto",
    address: "Praca Mouzinho de Albuquerque, 113",
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
    address: "Rua Dr. Jose de Matos, 14",
    postalCode: "8000-503 Faro",
    phone: "+351 289 899 100",
  },
]

export default function ContactosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#4A1D6A] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">Fale Connosco</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-balance">Contactos</h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Entre em contacto connosco atraves dos seguintes canais. Estamos disponiveis para ajudar com as suas
                questoes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border border-border hover:border-accent/30 shadow-none hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-[#4A1D6A] rounded-lg flex items-center justify-center mb-3">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-base">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {contact.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className={detailIndex === 0 ? "font-semibold text-sm text-foreground" : "text-xs text-muted-foreground"}
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
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Localizacoes</p>
              <h2 className="text-2xl font-bold mb-8 text-foreground">Centros de Atendimento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <Card key={index} className="border border-border hover:border-accent/30 shadow-none hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <CardTitle className="text-lg">{office.city}</CardTitle>
                          <CardDescription className="mt-2 leading-relaxed text-sm">
                            {office.address}
                            <br />
                            {office.postalCode}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{office.phone}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="mt-12 border border-accent/20 bg-accent/5 shadow-none">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Informacao Importante</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Para atendimento presencial, e obrigatorio agendamento previo atraves desta plataforma. Pedidos de
                      informacao podem ser feitos por telefone ou e-mail. Para questoes urgentes, utilize a linha de
                      apoio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
