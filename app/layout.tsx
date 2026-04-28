import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Dancing_Script, Caveat } from "next/font/google"
import { siteUrl } from "@/lib/site"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paypoint Solutions | Texas Payment Processing & POS",
    template: "%s | Paypoint Solutions",
  },
  description:
    "Payment processing, POS systems, and card terminals for Texas businesses. Local support in Seguin and neighboring cities.",
  generator: "Paypoint Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Paypoint Solutions | Texas Payment Processing & POS",
    description:
      "Payment processing, POS systems, and card terminals for Texas businesses. Local support in Seguin and neighboring cities.",
    url: siteUrl,
    siteName: "Paypoint Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paypoint Solutions | Texas Payment Processing & POS",
    description:
      "Payment processing, POS systems, and card terminals for Texas businesses. Local support in Seguin and neighboring cities.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
      </head>
      <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
