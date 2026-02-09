export const SERVICE_PRICES = {
  "agendamento-geral": 59.10,
  "renovacao-autorizacao": 59.10,
  "primeira-autorizacao": 59.10,
  "reagrupamento-familiar": 59.10,
  "informacao-consulta": 59.10,
  outros: 83.90,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType]
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
