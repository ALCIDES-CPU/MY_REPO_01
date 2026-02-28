import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIMA - Agendamento de Servicos",
  description:
    "Plataforma de agendamento para servicos da Agencia para a Integracao, Migracoes e Asilo",
  generator: "v0.app",
  icons: {
    icon: "/logo-aima.png",
    shortcut: "/logo-aima.png",
    apple: "/logo-aima.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#4A1D6A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
