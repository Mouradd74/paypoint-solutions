"use client"

import Script from "next/script"
import Link from "next/link"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

// Note: metadata export requires this to stay a Server Component.
// If you keep "use client" above for the Script logic, move metadata
// to a separate layout.tsx or generateMetadata in a parent server component.

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        <div className="relative z-10">
          <GlassmorphismNav />

          <section className="px-6 pt-28 pb-16 md:pt-32">
            <div className="max-w-5xl mx-auto text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Paypoint blog</p>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold">POS insights for Texas businesses</h1>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-3xl">
                Practical guides for payment terminals, restaurant systems, and processing programs that help you grow.
              </p>
              <div className="mt-6">
                <Link href="/rss.xml" className="text-sm text-white/70 underline underline-offset-4">
                  Subscribe via RSS
                </Link>
              </div>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="max-w-5xl mx-auto text-white soro-embed-wrapper">
              <div id="soro-blog" />
              <Script
                src="https://app.trysoro.com/api/embed/fe3cc42b-814f-4689-a8ae-4f51d3fce958"
                strategy="afterInteractive"
              />
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )

  
} 