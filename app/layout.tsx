import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "CasinoRei - Os Melhores Casinos Online de Portugal",
  description:
    "Descubra os melhores casinos online licenciados em Portugal. Rankings, bónus e análises detalhadas dos casinos portugueses mais confiáveis.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} dark`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
