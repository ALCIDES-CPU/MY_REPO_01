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
      'Pode agendar o seu atendimento através desta plataforma online. Clique em "Agendar Atendimento" no menu, preencha o formulário com os seus dados, faça upload dos documentos necessários e proceda ao pagamento. Receberá uma confirmação por e-mail.',
  },
  {
    question: "Qual é o custo do agendamento?",
    answer:
      "O valor do agendamento é de 83.90 EUR, que inclui a taxa de processamento e serviço. O pagamento é efetuado de forma segura através da plataforma DodoPayments.",
  },
  {
    question: "Que documentos preciso de apresentar?",
    answer:
      "Os documentos necessários variam conforme o tipo de serviço. Geralmente inclui documento de identificação (passaporte ou cartão de cidadão), comprovante de residência (caso tiver), e documentos específicos ao serviço solicitado (visto, autorização anterior, NIF/NISS, etc.). Consulte a página de Serviços para detalhes específicos.",
  },
  {
    question: "Posso cancelar ou reagendar o meu atendimento?",
    answer:
      "Sim, pode cancelar ou reagendar o seu atendimento com pelo menos 48 horas de antecedência. Entre em contacto através do e-mail ou telefone indicado na confirmação do agendamento. Cancelamentos com menos de 48 horas podem não ser reembolsados.",
  },
  {
    question: "Quanto tempo demora o atendimento?",
    answer:
      "A duração do atendimento varia conforme o tipo de serviço, entre 15 e 90 minutos. O tempo estimado para cada serviço está indicado na página de Serviços. Recomendamos que chegue 15 minutos antes do horário marcado.",
  },
  {
    question: "Vou receber uma confirmação do agendamento?",
    answer:
      "Sim, após o pagamento bem-sucedido, receberá um e-mail de confirmação com todos os detalhes do agendamento, incluindo data, hora, local, número de referência e lista de documentos a trazer. Guarde este e-mail e apresente-o no dia do atendimento.",
  },
  {
    question: "O que acontece se chegar atrasado?",
    answer:
      "Se chegar com mais de 15 minutos de atraso, o seu atendimento poderá ser cancelado e terá de fazer novo agendamento. Recomendamos que chegue com 15 minutos de antecedência para evitar problemas.",
  },
  {
    question: "Posso fazer o agendamento para outra pessoa?",
    answer:
      "Pode preencher o formulário com os dados de outra pessoa, mas a pessoa em questão deve estar presente no atendimento com todos os documentos originais. Não são aceites representações sem procuração legal.",
  },
  {
    question: "Os documentos precisam de estar traduzidos?",
    answer:
      "Documentos em línguas que não sejam português ou inglês devem ser acompanhados de tradução certificada. Verifique os requisitos específicos para o seu tipo de serviço na página de Serviços.",
  },
  {
    question: "Como posso acompanhar o status do meu processo?",
    answer:
      "Após o atendimento, receberá informações sobre como acompanhar o status do seu processo. Pode consultar o andamento através do website oficial da AIMA usando o número de processo fornecido.",
  },
  {
    question: "O pagamento é reembolsável?",
    answer:
      "Pagamentos são reembolsáveis apenas em caso de cancelamento com mais de 48 horas de antecedência ou se o serviço não puder ser prestado por motivos imputáveis à AIMA. Contacte o suporte atraves do email (info@sefaima.com) para solicitar reembolso.",
  },
  {
    question: "Preciso de levar os documentos originais?",
    answer:
      "Sim, é obrigatório apresentar todos os documentos originais no dia do atendimento, mesmo que tenha feito upload de cópias digitais durante o agendamento. As cópias digitais são apenas para pré-análise.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes (FAQ)</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Encontre respostas para as perguntas mais comuns sobre o processo de agendamento AIMA.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Não encontrou a resposta?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Entre em contacto connosco através dos nossos canais de apoio. Estamos disponíveis para ajudar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="default">
                    <Link href="/contactos">Ver Contactos</Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href="/agendar">Fazer Agendamento</Link>
                  </Button>
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
