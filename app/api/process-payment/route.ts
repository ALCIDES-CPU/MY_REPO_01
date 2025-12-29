import { NextResponse } from "next/server"

const DODOPAYMENTS_API_KEY = "JJuyAB7P2KyAuOcw.mjagRW4txn3gjSA3Mq3Z_miU9Va09i7uF6QXemyG9zIS98ju"
const DODOPAYMENTS_API_URL = "https://api.dodopayments.com/v1/payments"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency, appointmentData } = body

    // Validate required fields
    if (!amount || !currency) {
      return NextResponse.json({ success: false, error: "Dados de pagamento inválidos" }, { status: 400 })
    }

    // Process payment with DodoPayments API
    const paymentResponse = await fetch(DODOPAYMENTS_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DODOPAYMENTS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency,
        description: `AIMA Appointment - ${appointmentData?.service || "Service"}`,
        metadata: {
          service: appointmentData?.service || "AIMA Appointment",
          timestamp: new Date().toISOString(),
        },
      }),
    })

    if (!paymentResponse.ok) {
      const errorData = await paymentResponse.json().catch(() => ({}))
      console.error("[v0] DodoPayments API error:", errorData)
      return NextResponse.json(
        {
          success: false,
          error: "Erro ao processar pagamento com DodoPayments",
        },
        { status: 500 },
      )
    }

    const paymentData = await paymentResponse.json()
    console.log("[v0] Payment processed successfully:", paymentData)

    // Here you would typically:
    // 1. Save payment details to database
    // 2. Send confirmation email
    // 3. Update appointment status

    return NextResponse.json({
      success: true,
      paymentId: paymentData.id,
      message: "Pagamento processado com sucesso",
    })
  } catch (error) {
    console.error("[v0] Payment processing error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno ao processar pagamento",
      },
      { status: 500 },
    )
  }
}
