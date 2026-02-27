import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"

export default function AgendarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Agendar Atendimento</h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Preencha o formulário abaixo com os seus dados e documentos necessários para o agendamento.
            </p>
          </div>

          <AppointmentForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
