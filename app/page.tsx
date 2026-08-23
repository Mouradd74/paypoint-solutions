import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import Aurora from "@/components/Aurora"
import { FeaturesSection } from "@/components/features-section"
import { PaymentSolutionsSection } from "@/components/payment-solutions-section"
// AITeamSection (compare) removed from homepage render
import { TestimonialsSection } from "@/components/testimonials-section"
import { MatthewSection } from "@/components/matthew-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { EquipmentQualifier } from "@/components/EquipmentQualifier"
import { Footer } from "@/components/footer"
import { siteUrl, primaryServiceAreas } from "@/lib/site"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Paypoint Solutions",
    url: siteUrl,
    image: `${siteUrl}/images/PPlogo.webp`,
    logo: `${siteUrl}/images/PPlogo.webp`,
    telephone: "+1-830-318-3250",
    email: "paypointsolutions1@gmail.com",
    areaServed: primaryServiceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seguin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5688,
      longitude: -97.9554,
    },
    sameAs: [
      "https://www.instagram.com/feeassasintx",
      "https://www.facebook.com/share/17NgpqqFEV/",
    ],
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Payment Processing & POS",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payment Processing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "POS Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Credit Card Terminals" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Cash Discount Programs" },
        },
      ],
    },
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Paypoint Solutions",
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
  }

  const servicesStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Payment Processing",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: primaryServiceAreas,
      description: "Payment processing setup and support for Texas businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "POS Systems",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: primaryServiceAreas,
      description: "POS system installations for retail, restaurants, and service businesses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Cash Discount Programs",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: primaryServiceAreas,
      description: "Zero-fee and cash discount payment programs with compliant setup.",
    },
  ]

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            structuredData,
            websiteStructuredData,
            ...servicesStructuredData,
          ]),
        }}
      />
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <HeroSlideshow />
          <ProblemSolutionSection />
          <FeaturesSection />
          <PaymentSolutionsSection />
          <TestimonialsSection />
          <MatthewSection />
          <ROICalculatorSection />
          <EquipmentQualifier />
          <Footer />
        </div>
      </main>
    </div>
  )
}
