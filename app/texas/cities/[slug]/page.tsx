import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { citySeoPages } from "@/lib/city-seo-data"
import { siteUrl } from "@/lib/site"

type PageProps = {
  params: { slug: string }
}

const getPageBySlug = (slug: string) => citySeoPages.find((page) => page.slug === slug)

export const dynamicParams = false

export function generateStaticParams() {
  return citySeoPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getPageBySlug(params.slug)
  if (!page) {
    return {}
  }

  const canonical = `${siteUrl}/texas/cities/${page.slug}`

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      type: "article",
    },
  }
}

export default function CitySeoPage({ params }: PageProps) {
  const page = getPageBySlug(params.slug)
  if (!page) {
    notFound()
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "POS systems and payment processing",
    provider: {
      "@type": "LocalBusiness",
      name: "Paypoint Solutions",
      url: siteUrl,
    },
    areaServed: page.city,
    description: page.description,
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqStructuredData, serviceStructuredData]),
        }}
      />

      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        <div className="relative z-10">
          <GlassmorphismNav />

          <section className="px-6 pt-28 pb-16 md:pt-32">
            <div className="max-w-5xl mx-auto text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Texas city POS page</p>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold">{page.heroTitle}</h1>
              <p className="mt-4 text-white/70 text-base md:text-lg max-w-3xl">{page.heroSubtitle}</p>
            </div>
          </section>

          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto grid gap-8">
              {page.sections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-white/70">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 pb-16">
            <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-xl font-semibold">Need help choosing hardware?</h3>
              <p className="mt-3 text-white/70">
                We help Texas businesses match the right POS, terminals, and pricing program to their goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
                >
                  Talk to a specialist
                </Link>
                <Link
                  href="/texas"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
                >
                  Browse Texas POS resources
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
