import Link from "next/link"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { citySeoPages } from "@/lib/city-seo-data"

export const metadata = {
  title: "Texas City POS Pages",
  description: "City-specific POS and payment processing pages across Texas.",
}

export default function TexasCityIndexPage() {
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
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Texas city guides</p>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold">City-specific POS pages in Texas</h1>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-3xl">
                Browse city pages focused on local POS systems, terminals, and payment processing.
              </p>
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
              {citySeoPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/texas/cities/${page.slug}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <h2 className="text-xl font-semibold">{page.city}</h2>
                  <p className="mt-2 text-white/70 text-sm">{page.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm text-white/80">
                    View page
                    <span className="ml-2">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
