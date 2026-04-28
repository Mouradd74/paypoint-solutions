import Link from "next/link"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { seoLandingPages } from "@/lib/seo-data"
import { primaryServiceAreas } from "@/lib/site"
import { citySeoPages } from "@/lib/city-seo-data"

export const metadata = {
  title: "Texas POS & Payment Processing Resources",
  description:
    "Explore Texas POS resources for payment terminals, restaurant systems, zero-fee processing, and free equipment offers.",
}

export default function TexasResourcesPage() {
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
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Texas POS resources</p>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold">Payment processing and POS guides for Texas</h1>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-3xl">
                Find the right POS system, credit card scanners, and pricing program for your business. We focus on
                Seguin and nearby cities while serving the entire state.
              </p>
              <div className="mt-6 text-sm text-white/60">
                Primary service areas: {primaryServiceAreas.join(", ")}
              </div>
            </div>
          </section>

          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
              {seoLandingPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/texas/${page.slug}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <h2 className="text-xl font-semibold">{page.title}</h2>
                  <p className="mt-2 text-white/70 text-sm">{page.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm text-white/80">
                    Read guide
                    <span className="ml-2">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto flex flex-col gap-4 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">City-specific POS pages</h2>
                <p className="mt-2 text-white/70 text-sm">
                  Explore local POS pages for Seguin and neighboring cities.
                </p>
              </div>
              <Link
                href="/texas/cities"
                className="rounded-full border border-white/30 px-5 py-2 text-sm text-white"
              >
                View all cities
              </Link>
            </div>
            <div className="max-w-5xl mx-auto mt-6 grid gap-4 md:grid-cols-3">
              {citySeoPages.slice(0, 6).map((page) => (
                <Link
                  key={page.slug}
                  href={`/texas/cities/${page.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <h3 className="text-lg font-semibold">{page.city}</h3>
                  <p className="mt-2 text-xs text-white/60">{page.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
              <h2 className="text-2xl font-semibold">Need a custom recommendation?</h2>
              <p className="mt-3 text-white/70">
                Tell us about your business type, monthly volume, and equipment needs. We’ll match you with hardware and
                pricing that fits your goals.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Get a custom quote
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
