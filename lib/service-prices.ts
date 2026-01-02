export const SERVICE_PRICES = {
  "agendamento-geral": 59.1,
  "renovacao-autorizacao": 59.1,
  "primeira-autorizacao": 59.1,
  "reagrupamento-familiar": 59.1,
  "informacao-consulta": 59.1,
  outros: 59.1,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType]
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
