"use client"

import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentForm } from "@/components/payment-form"
import { Loader2 } from "lucide-react"

function PaymentContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Pagamento do Agendamento</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Finalize o seu agendamento através do pagamento seguro.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            }
          >
            <PaymentForm />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PagamentoPage() {
  return <PaymentContent />
}
