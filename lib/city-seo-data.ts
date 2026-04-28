import { primaryServiceAreas } from "@/lib/site"

export type CitySeoPage = {
  slug: string
  city: string
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  updatedAt: string
  sections: {
    title: string
    paragraphs: string[]
    bullets?: string[]
  }[]
  faqs: { question: string; answer: string }[]
}

const updatedAt = "2026-04-28"

const toSlug = (city: string) => `${city.toLowerCase().replace(/\s+/g, "-")}-pos-system`

const buildCityPage = (city: string): CitySeoPage => ({
  slug: toSlug(city),
  city,
  title: `${city} POS Systems & Payment Processing`,
  description: `POS systems, payment terminals, and payment processing in ${city}, TX with local setup and support.`,
  heroTitle: `${city} POS systems and payment processing`,
  heroSubtitle: `Get the right POS hardware, card readers, and pricing program for your ${city} business with local support.`,
  updatedAt,
  sections: [
    {
      title: `Built for ${city} businesses`,
      paragraphs: [
        `We support retail, restaurants, and service businesses across ${city} with reliable payment terminals and POS systems.`,
      ],
      bullets: ["Fast installs", "EMV + tap-to-pay terminals", "Local training and support"],
    },
    {
      title: "Hardware and pricing options",
      paragraphs: [
        "Choose from countertop terminals, mobile scanners, or full POS systems with inventory and reporting.",
      ],
    },
    {
      title: "Compliance and security",
      paragraphs: [
        "We configure PCI-compliant devices and ensure card-brand disclosure rules are followed for cash discount programs.",
      ],
    },
  ],
  faqs: [
    {
      question: `How fast can I get a POS system in ${city}?`,
      answer: "Most setups are completed within a few business days after hardware confirmation.",
    },
    {
      question: `Do you offer free terminals in ${city}?`,
      answer: "Yes, qualified merchants can receive free or subsidized terminals based on volume.",
    },
  ],
})

const seguiPageOverride: CitySeoPage = {
  ...buildCityPage("Seguin"),
  title: "Seguin POS Systems & Payment Processing",
  description:
    "POS systems, credit card terminals, and payment processing in Seguin, TX. Local setup, training, and transparent pricing.",
  heroTitle: "POS systems and payment processing in Seguin",
  heroSubtitle:
    "Get the right POS hardware, card readers, and pricing program for your Seguin business with local support.",
}

export const citySeoPages: CitySeoPage[] = primaryServiceAreas.map((city) =>
  city === "Seguin" ? seguiPageOverride : buildCityPage(city),
)
