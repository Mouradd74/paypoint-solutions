import Link from "next/link"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/seo-data"

export const metadata = {
  title: "POS Insights & Texas Payment Processing Blog",
  description:
    "Guides and tips for POS systems, credit card terminals, and payment processing in Texas.",
}

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
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/50">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{post.title}</h2>
                  <p className="mt-2 text-white/70 text-sm">{post.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm text-white/80">
                    Read article
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
