import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"
import { blogPosts, seoLandingPages } from "@/lib/seo-data"
import { citySeoPages } from "@/lib/city-seo-data"
import { gateways, mobilePayments, posSystems } from "@/lib/partners-data"

const toEntry = (path: string, lastModified?: string): MetadataRoute.Sitemap[number] => ({
  url: `${siteUrl}${path}`,
  lastModified: lastModified ? new Date(lastModified) : new Date(),
})

export default function sitemap(): MetadataRoute.Sitemap {
  const partnerIds = [...posSystems, ...gateways, ...mobilePayments].map((partner) => partner.id)

  return [
    toEntry("/"),
    toEntry("/car-dealerships"),
    toEntry("/texas"),
    toEntry("/texas/cities"),
    toEntry("/blog"),
    toEntry("/rss.xml"),
    ...seoLandingPages.map((page) => toEntry(`/texas/${page.slug}`, page.updatedAt)),
    ...citySeoPages.map((page) => toEntry(`/texas/cities/${page.slug}`, page.updatedAt)),
    ...blogPosts.map((post) => toEntry(`/blog/${post.slug}`, post.date)),
    ...partnerIds.map((id) => toEntry(`/partners/${id}`)),
  ]
}
