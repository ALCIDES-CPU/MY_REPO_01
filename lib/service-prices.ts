export const SERVICE_PRICES = {
  "agendamento-geral": 83.10,
  "renovacao-autorizacao": 83.10,
  "primeira-autorizacao": 83.10,
  "reagrupamento-familiar": 83.10,
  "informacao-consulta": 83.10,
  outros: 83.10,
} as const

export type ServiceType = keyof typeof SERVICE_PRICES

export function getServicePrice(serviceType: ServiceType): number {
  return SERVICE_PRICES[serviceType]
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`
}
