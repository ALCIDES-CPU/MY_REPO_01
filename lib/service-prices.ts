export const SERVICE_PRICES = {
  "agendamento-geral": 39.1,
  "renovacao-autorizacao": 59.1,
  "primeira-autorizacao": 83.9,
  "reagrupamento-familiar": 109.3,
  "informacao-consulta": 39.1,
  outros: 39.1,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType] || 39.1
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
