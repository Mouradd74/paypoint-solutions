import Link from "next/link"
import Script from "next/script"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/seo-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Payment Processing Blog for Texas Businesses",
  description:
    "Practical guides on POS systems, credit card terminals, zero-fee processing, and cash discount programs for Texas merchants.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Payment Processing Blog for Texas Businesses",
    description:
      "Practical guides on POS systems, credit card terminals, zero-fee processing, and cash discount programs for Texas merchants.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.paypointsolutions-tex.com"}/blog`,
    type: "website",
  },
}

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

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

          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-white transition-colors hover:border-white/30"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-semibold group-hover:text-emerald-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-white/70">{post.description}</p>
                  <p className="mt-4 text-xs text-white/50">{post.readTime}</p>
                </Link>
              ))}
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
