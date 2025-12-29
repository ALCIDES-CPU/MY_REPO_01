import { NextResponse } from "next/server"

const WHOP_API_KEY = "apik_XYhJuzI4PRtQc_C4057542_C_f9caa70d40b2c3085ddf0a7ff12a5c152093b58bef80123e3baced336a5329"
const WHOP_API_URL = "https://api.whop.com/v1"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency, appointmentData } = body

    // Validate required fields
    if (!amount || !currency) {
      return NextResponse.json({ success: false, error: "Dados de pagamento inválidos" }, { status: 400 })
    }

    const checkoutResponse = await fetch(`${WHOP_API_URL}/checkout-sessions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHOP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency.toLowerCase(),
        metadata: {
          service: appointmentData?.service || "AIMA Appointment",
          timestamp: new Date().toISOString(),
        },
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/confirmacao`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/pagamento`,
      }),
    })

    if (!checkoutResponse.ok) {
      const errorData = await checkoutResponse.json().catch(() => ({}))
      console.error("[v0] Whop API error:", errorData)
      return NextResponse.json(
        {
          success: false,
          error: "Erro ao processar pagamento com Whop",
        },
        { status: 500 },
      )
    }

    const checkoutData = await checkoutResponse.json()
    console.log("[v0] Checkout session created successfully:", checkoutData)

    // Return the checkout URL for redirect
    return NextResponse.json({
      success: true,
      checkoutUrl: checkoutData.url,
      sessionId: checkoutData.id,
      message: "Sessão de pagamento criada com sucesso",
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
