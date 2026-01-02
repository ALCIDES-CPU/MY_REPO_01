import { NextResponse } from "next/server"

const WHOP_CHECKOUT_URL = "https://whop.com/checkout/plan_LwcSu9yXm6YGL"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { appointmentData } = body

    return NextResponse.json({
      success: true,
      checkoutUrl: WHOP_CHECKOUT_URL,
      message: "Link de pagamento gerado com sucesso",
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
