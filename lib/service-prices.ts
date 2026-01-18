export const SERVICE_PRICES = {
  "agendamento-geral": 83.90,
  "renovacao-autorizacao": 83.90,
  "primeira-autorizacao": 83.90,
  "reagrupamento-familiar": 83.90,
  "informacao-consulta": 83.90,
  outros: 83.90,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType]
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
