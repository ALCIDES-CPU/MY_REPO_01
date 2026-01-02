import { NextResponse } from "next/server"

const WHOP_API_KEY = "apik_ZWY6gNfR7Wai2_C4057542_C_43c806636cacc5b0945a04236eea3991c4d7c645fb5f856a5be8e6463c07af"
const WHOP_API_URL = "https://api.whop.com/api/v1"
const WHOP_COMPANY_ID = "biz_C4057542"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency, appointmentData } = body

    console.log("[v0] Payment request received:", { amount, currency, appointmentData })

    // Validate required fields
    if (!amount || !currency) {
      return NextResponse.json({ success: false, error: "Dados de pagamento inválidos" }, { status: 400 })
    }

    const checkoutResponse = await fetch(`${WHOP_API_URL}/checkout_configurations`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHOP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: "payment",
        plan: {
          company_id: WHOP_COMPANY_ID,
          currency: currency.toLowerCase(),
          initial_price: Math.round(amount * 100), // Convert to cents
          plan_type: "one_time",
          release_method: "buy_now",
        },
        metadata: {
          service: appointmentData?.service || "AIMA Appointment",
          appointment_type: appointmentData?.appointmentType || "general",
          timestamp: new Date().toISOString(),
        },
        redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/confirmacao`,
      }),
    })

    if (!checkoutResponse.ok) {
      const errorData = await checkoutResponse.json().catch(() => ({}))
      console.error("[v0] Whop API error:", {
        status: checkoutResponse.status,
        statusText: checkoutResponse.statusText,
        error: errorData,
      })
      return NextResponse.json(
        {
          success: false,
          error: "Erro ao processar pagamento com Whop",
          details: errorData,
        },
        { status: 500 },
      )
    }

    const checkoutData = await checkoutResponse.json()
    console.log("[v0] Checkout configuration created successfully:", checkoutData)

    // Return the checkout URL for redirect
    return NextResponse.json({
      success: true,
      checkoutUrl: checkoutData.purchase_url || checkoutData.url,
      sessionId: checkoutData.id,
      message: "Sessão de pagamento criada com sucesso",
    })
  } catch (error) {
    console.error("[v0] Payment processing error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno ao processar pagamento",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
