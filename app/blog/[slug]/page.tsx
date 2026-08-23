import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/lib/seo-data"
import { siteUrl } from "@/lib/site"

type PageProps = {
  params: { slug: string }
}

const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug)

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return {}
  }

  const canonical = `${siteUrl}/blog/${post.slug}`

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const canonical = `${siteUrl}/blog/${post.slug}`

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Matthew",
      jobTitle: "Merchant Services Provider",
      worksFor: { "@id": `${siteUrl}/#business` },
    },
    publisher: {
      "@type": "Organization",
      name: "Paypoint Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/PPlogo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleStructuredData, breadcrumbStructuredData]),
        }}
      />
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        <div className="relative z-10">
          <GlassmorphismNav />

          <section className="px-6 pt-28 pb-12 md:pt-32">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold">{post.title}</h1>
              <p className="mt-4 text-white/70 text-base md:text-lg">{post.description}</p>
            </div>
          </section>

          <section className="px-6 pb-16">
            <div className="max-w-4xl mx-auto space-y-8 text-white/70">
              {post.sections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 pb-20">
            <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
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
