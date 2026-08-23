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
    default: "Texas Payment Processing & Zero-Fee POS Systems | Paypoint Solutions",
    template: "%s | Paypoint Solutions",
  },
  description:
    "Zero-fee payment processing, free POS systems, and card terminals for Texas businesses. Local, in-person support in Seguin, New Braunfels, San Marcos & beyond.",
  applicationName: "Paypoint Solutions",
  authors: [{ name: "Paypoint Solutions" }],
  keywords: [
    "payment processing Texas",
    "zero fee credit card processing",
    "POS systems Seguin TX",
    "free POS terminal",
    "cash discount program Texas",
  ],
  generator: "Paypoint Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Texas Payment Processing & Zero-Fee POS Systems | Paypoint Solutions",
    description:
      "Zero-fee payment processing, free POS systems, and card terminals for Texas businesses. Local, in-person support in Seguin and beyond.",
    url: siteUrl,
    siteName: "Paypoint Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Payment Processing & Zero-Fee POS Systems | Paypoint Solutions",
    description:
      "Zero-fee payment processing, free POS systems, and card terminals for Texas businesses. Local, in-person support in Seguin and beyond.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon-new.png", sizes: "180x180", type: "image/png" }],
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
