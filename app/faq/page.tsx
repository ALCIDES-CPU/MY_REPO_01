import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "Como posso agendar um atendimento na AIMA?",
    answer:
      'Pode agendar o seu atendimento atraves desta plataforma online. Clique em "Agendar Atendimento" no menu, preencha o formulario com os seus dados, faca upload dos documentos necessarios e proceda ao pagamento. Recebera uma confirmacao por e-mail.',
  },
  {
    question: "Qual e o custo do agendamento?",
    answer:
      "O valor do agendamento e de 83.10 EUR, que inclui a taxa de processamento e servico. O pagamento e efetuado de forma segura atraves da plataforma DodoPayments.",
  },
  {
    question: "Que documentos preciso de apresentar?",
    answer:
      "Os documentos necessarios variam conforme o tipo de servico. Geralmente inclui documento de identificacao (passaporte ou cartao de cidadao), comprovante de residencia (caso tiver), e documentos especificos ao servico solicitado (visto, autorizacao anterior, NIF/NISS, etc.). Consulte a pagina de Servicos para detalhes especificos.",
  },
  {
    question: "Posso cancelar ou reagendar o meu atendimento?",
    answer:
      "Sim, pode cancelar ou reagendar o seu atendimento com pelo menos 48 horas de antecedencia. Entre em contacto atraves do e-mail ou telefone indicado na confirmacao do agendamento. Cancelamentos com menos de 48 horas podem nao ser reembolsados.",
  },
  {
    question: "Quanto tempo demora o atendimento?",
    answer:
      "A duracao do atendimento varia conforme o tipo de servico, entre 15 e 90 minutos. O tempo estimado para cada servico esta indicado na pagina de Servicos. Recomendamos que chegue 15 minutos antes do horario marcado.",
  },
  {
    question: "Vou receber uma confirmacao do agendamento?",
    answer:
      "Sim, apos o pagamento bem-sucedido, recebera um e-mail de confirmacao com todos os detalhes do agendamento, incluindo data, hora, local, numero de referencia e lista de documentos a trazer. Guarde este e-mail e apresente-o no dia do atendimento.",
  },
  {
    question: "O que acontece se chegar atrasado?",
    answer:
      "Se chegar com mais de 15 minutos de atraso, o seu atendimento podera ser cancelado e tera de fazer novo agendamento. Recomendamos que chegue com 15 minutos de antecedencia para evitar problemas.",
  },
  {
    question: "Posso fazer o agendamento para outra pessoa?",
    answer:
      "Pode preencher o formulario com os dados de outra pessoa, mas a pessoa em questao deve estar presente no atendimento com todos os documentos originais. Nao sao aceites representacoes sem procuracao legal.",
  },
  {
    question: "Os documentos precisam de estar traduzidos?",
    answer:
      "Documentos em linguas que nao sejam portugues ou ingles devem ser acompanhados de traducao certificada. Verifique os requisitos especificos para o seu tipo de servico na pagina de Servicos.",
  },
  {
    question: "Como posso acompanhar o status do meu processo?",
    answer:
      "Apos o atendimento, recebera informacoes sobre como acompanhar o status do seu processo. Pode consultar o andamento atraves do website oficial da AIMA usando o numero de processo fornecido.",
  },
  {
    question: "O pagamento e reembolsavel?",
    answer:
      "Pagamentos sao reembolsaveis apenas em caso de cancelamento com mais de 48 horas de antecedencia ou se o servico nao puder ser prestado por motivos imputaveis a AIMA. Contacte o suporte atraves do email (info@servicosaima.com) para solicitar reembolso.",
  },
  {
    question: "Preciso de levar os documentos originais?",
    answer:
      "Sim, e obrigatorio apresentar todos os documentos originais no dia do atendimento, mesmo que tenha feito upload de copias digitais durante o agendamento. As copias digitais sao apenas para pre-analise.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#4A1D6A] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">Ajuda</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-balance">Perguntas Frequentes</h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Encontre respostas para as perguntas mais comuns sobre o processo de agendamento AIMA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
            <Card className="border border-border shadow-none">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mt-8 border border-accent/20 bg-accent/5 shadow-none">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Nao encontrou a resposta?</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    Entre em contacto connosco atraves dos nossos canais de apoio. Estamos disponiveis para ajudar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild className="bg-[#4A1D6A] text-white hover:bg-[#3A0D5A] rounded-full font-semibold px-6">
                      <Link href="/contactos">Ver Contactos</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent rounded-full border-border hover:bg-secondary px-6">
                      <Link href="/agendar">Fazer Agendamento</Link>
                    </Button>
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
