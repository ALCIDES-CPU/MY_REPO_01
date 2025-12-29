"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Loader2, CreditCard, Shield, Euro } from "lucide-react"
import { useRouter } from "next/navigation"

const PAYMENT_AMOUNT = 58.88

export function PaymentForm() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const router = useRouter()

  const handlePayment = async () => {
    setIsProcessing(true)
    setPaymentError(null)

    try {
      const response = await fetch("/api/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: PAYMENT_AMOUNT,
          currency: "EUR",
          appointmentData: {
            // This would come from previous form submission
            service: "AIMA Appointment",
          },
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setPaymentSuccess(true)
        // Redirect to success page after a short delay
        setTimeout(() => {
          router.push("/confirmacao")
        }, 2000)
      } else {
        setPaymentError(data.error || "Erro ao processar o pagamento. Por favor, tente novamente.")
      }
    } catch (error) {
      setPaymentError("Erro de conexão. Por favor, verifique a sua internet e tente novamente.")
    } finally {
      setIsProcessing(false)
    }
  }

  if (paymentSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Pagamento Confirmado!</h2>
            <p className="text-muted-foreground mb-4">O seu agendamento foi processado com sucesso.</p>
            <p className="text-sm text-muted-foreground">A redirecioná-lo para a página de confirmação...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Resumo do Pagamento
          </CardTitle>
          <CardDescription>Valor do agendamento AIMA</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Serviço:</span>
              <span className="font-medium">Agendamento AIMA</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Taxa de processamento:</span>
              <span className="font-medium">{PAYMENT_AMOUNT.toFixed(2)} EUR</span>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary flex items-center gap-1">
                  <Euro className="w-5 h-5" />
                  {PAYMENT_AMOUNT.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Pagamento processado de forma segura através da plataforma DodoPayments. Os seus dados estão protegidos
              com encriptação de ponta a ponta.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Processar Pagamento</CardTitle>
          <CardDescription>Clique no botão abaixo para finalizar o seu agendamento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentError && (
            <Alert variant="destructive">
              <AlertDescription>{paymentError}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">Pagamento Seguro via DodoPayments</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A transação será processada de forma segura. Após a confirmação, receberá um e-mail com os detalhes
                    do seu agendamento.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={handlePayment} disabled={isProcessing} className="w-full" size="lg">
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />A processar pagamento...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pagar {PAYMENT_AMOUNT.toFixed(2)} EUR
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Ao clicar em "Pagar", concorda com os termos e condições do serviço de agendamento AIMA.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
