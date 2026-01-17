export const SERVICE_PRICES = {
  "agendamento-geral": 83,9,
  "renovacao-autorizacao": 83,9,
  "primeira-autorizacao": 83.9,
  "reagrupamento-familiar": 83.9,
  "informacao-consulta": 83.9,
  outros: 83.9,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType]
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
