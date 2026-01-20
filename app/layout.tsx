import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIMA - Agendamento de Serviços",
  description: "Plataforma de agendamento para serviços da Agência para a Integração, Migrações e Asilo",
  generator: "v0.app",
  icons: {
    icon: "/logo-aima.png",
    shortcut: "/logo-aima.png",
    apple: "/logo-aima.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
