import { blogPosts } from "@/lib/seo-data"
import { siteUrl } from "@/lib/site"

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")

export async function GET() {
  const items = blogPosts
    .map((post) => {
      const link = `${siteUrl}/blog/${post.slug}`
      return `\n    <item>\n      <title>${escapeXml(post.title)}</title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <pubDate>${new Date(post.date).toUTCString()}</pubDate>\n      <description>${escapeXml(post.description)}</description>\n    </item>`
    })
    .join("\n")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Paypoint Solutions Blog</title>
    <link>${siteUrl}/blog</link>
    <description>POS and payment processing insights for Texas businesses.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
