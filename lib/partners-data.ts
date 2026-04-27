export interface Partner {
  id: string
  name: string
  desc: string
  longDescription: string
  logo: string
  price?: string
  specialties: string[]
  images: string[]
}

const getLogo = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`

export const posSystems: Partner[] = [
  {
    id: "clover",
    name: "Clover",
    desc: "Versatile POS for retail and restaurants. Integrates with online ordering and inventory management.",
    longDescription: "Clover provides a robust, all-in-one point of sale system designed to handle the fast-paced environment of retail, restaurants, and service industries. Its intuitive cloud-based dashboard makes inventory management, online ordering, and reporting seamless.",
    logo: getLogo("clover.com"),
    specialties: ["Retail & Restaurant Layouts", "Cloud-Based Inventory", "Online Ordering Integration", "Employee Shift Tracking"],
    images: ["/images/Clover1.webp"],
  },
  {
    id: "botx-pos",
    name: "botX POS",
    desc: "Smart POS solution for modern businesses.",
    longDescription: "botX POS is a highly customizable, smart terminal setup built for rapid scaling. Designed for modern commerce, it leverages intelligent checkout flows to maximize speed.",
    logo: "",
    specialties: ["Custom Checkout Flows", "Smart Analytics", "Rapid Deployment"],
    images: [],
  },
  {
    id: "dejavoo-pos", // Different ID from gateway
    name: "Dejavoo",
    desc: "Simple, reliable terminals for businesses that only need to accept credit cards — nothing more.",
    longDescription: "Dejavoo is an industry-leading provider for reliable, straightforward credit card terminals. If you don't need a bloated POS and just need to securely process transactions all day without a glitch, Dejavoo has the perfect straightforward hardware.",
    logo: getLogo("dejavoo.net"),
    specialties: ["Standalone Credit Card Terminals", "Reliable Uptime", "Zero-Bloat Software"],
    images: ["/images/Dejavoo1.JPG"],
  },
  {
    id: "quickv",
    name: "Quickvee",
    desc: "Quickvee POS is a specialized, all-in-one point-of-sale system built specifically for smoke shops, vape stores, cigar shops, and CBD retailers. Unlike generic POS systems, Quickvee is designed to handle the unique challenges of age-restricted businesses—helping you stay compliant, organized, and profitable.",
    longDescription: "Quickv prioritizes speed for quick-service businesses. Its streamlined UI ensures that cashiers can handle high volumes of customers efficiently while sending orders to preparation zones continuously.",
    logo: "",
    specialties: ["Quick Service Workflow", "Speedy UI", "Kitchen Display Integrations"],
    images: ["/images/Quickvee1.JPG"],
  },
  {
    id: "korona",
    name: "KORONA",
    desc: "KORONA POS is a flexible, cloud-based POS system designed for retail, QSR, and ticketing businesses—built to simplify inventory, sales, and multi-location operations with powerful reporting and customization.",
    longDescription: "KORONA is tailor-made for high-volume retail environments. It provides unmatched capabilities when dealing with immense SKUs, multi-location inventory logistics, and deep enterprise reporting metrics.",
    logo: getLogo("koronapos.com"),
    specialties: ["Multi-location sync", "High-volume retail", "Deep Analytics", "Gift Card & Loyalty"],
    images: ["/images/Korona1.JPG"],
  },
  {
    id: "kwick-pos",
    name: "Kwick POS",
    desc: "KwickPOS is a cloud-based POS system designed for specialty and high-risk retail, combining inventory, compliance tools, and integrated payments in one platform.",
    longDescription: "Kwick POS delivers specialized features crafted entirely for dining. From precise table mapping to multi-kitchen-printer configurations, it keeps your front of house and back of house universally synced up.",
    logo: "",
    specialties: ["Table Mapping", "Kitchen Synchronization", "Server Performance Tracking"],
    images: ["/images/Kwick.JPG"],
  },
  {
    id: "rpower",
    name: "RPOWER",
    desc: "Cloud-based POS built for high-volume bars, restaurants, and coffee shops. Provides hands-on training, detailed real-time metrics for inventory, sales, and employee management.",
    longDescription: "RPOWER was engineered exactly for high-speed hospitality. Coffee shops, busy bars, and full-service restaurants rely on RPOWER to execute intense rush hours, supported by hands-on training and real-time live business metrics.",
    logo: getLogo("rpowerglobal.com"),
    specialties: ["High-speed bar operations", "Hands-on implementation training", "Live real-time reporting", "Tab Pre-authorization"],
    images: ["/images/Rpowe1.webp", "/images/Rpowe2.webp", "/images/Rpowe3.webp"],
  },
  {
    id: "payspos",
    name: "PAYSPOS",
    desc: "Reliable POS for restaurants and retail. Supports up to 50,000 SKUs — perfect for clothing boutiques, coffee shops, and busy storefronts.",
    longDescription: "PAYSPOS bridges the gap between detailed restaurant metrics and immense retail SKU catalogs. Serving up to 50,000 unique SKUs easily, this point of sale ensures that busy storefronts and boutiques can manage massive inventories without slowdowns.",
    logo: "",
    specialties: ["Handles 50,000+ SKUs", "Perfect for Boutiques & Coffee Shops", "Advanced Modifier Tracking"],
    images: ["/images/Payspos1.webp"],
  },
  {
    id: "skytab",
    name: "Skytab",
    desc: "SkyTab POS — trusted by Jon Taffer — handles everything from payments to online orders, staff management, and real-time reporting. Perfect for restaurants, bars, and high-volume businesses that want to move faster and increase profits",
    longDescription: "Skytab, powered by Shift4, focuses on bringing mobility directly to the customer's table. Equip waitstaff with tableside ordering hardware that instantly connects with online orders to supercharge full-service delivery times.",
    logo: getLogo("skytab.com"),
    specialties: ["Tableside Ordering", "QR Code Payments", "Shift4 Backbone Security"],
    images: ["/images/Skytab1.webp"],
  },
]

export const gateways: Partner[] = [
  {
    id: "authorize-net",
    name: "Auth.net",
    price: "$15/mo",
    desc: "Industry-standard payment gateway for ecommerce and invoicing. Integrates with QuickBooks, WooCommerce, GoDaddy, and more.",
    longDescription: "Authorize.net is an enduring industry pioneer that establishes secure bridges across almost every major platform. With thousands of available integrations, it makes linking custom websites, QuickBooks, or WooCommerce incredibly simple.",
    logo: getLogo("authorize.net"),
    specialties: ["WooCommerce & Custom API built-in", "Deep QuickBooks sync", "Fraud protection suite"],
    images: [],
  },
  {
    id: "usaepay",
    name: "USAePAY",
    price: "$15/mo",
    desc: "Flexible gateway for online payments and invoicing. Supports major integrations.",
    longDescription: "USAePAY brings immense flexibility directly into online invoicing and automated billing ecosystems. Highly adaptable for merchants looking to optimize repetitive and subscription billing mechanics.",
    logo: getLogo("usaepay.com"),
    specialties: ["B2B Virtual Invoicing", "Subscription Billing Automation", "PCI Compliant Tokenization"],
    images: [],
  },
  {
    id: "valor-paytech",
    name: "Valor Gateway",
    price: "$15/mo",
    desc: "Secure virtual terminal and gateway solution from Valor PayTech.",
    longDescription: "Valor PayTech provides a cutting-edge virtual terminal platform paired with an advanced omnichannel gateway. Access your transactions gracefully via cloud dashboards designed for multi-user security oversight.",
    logo: getLogo("valorpaytech.com"),
    specialties: ["Omnichannel Gateway", "Sleek Virtual Terminals", "Multi-user Access Modes"],
    images: ["/images/Valor1.webp"],
  },
  {
    id: "clover-gateway",
    name: "Clover Gateway",
    price: "$0/mo",
    desc: "Free gateway for Clover-based ecommerce or invoicing.",
    longDescription: "For businesses utilizing Clover's hardware infrastructure, the Clover Gateway comes securely bundled for free. Expand your storefront to an online presence organically without multiplying service fees.",
    logo: getLogo("clover.com"),
    specialties: ["Native Clover Synced E-Commerce", "Fee-free integrations for existing merchants"],
    images: ["/images/Clover1.webp"],
  },
  {
    id: "dejavoo-gateway",
    name: "Dejavoo Gateway",
    price: "$15/mo",
    desc: "Web browser-based gateway for online invoicing (web browser only).",
    longDescription: "The Dejavoo Gateway serves lightweight, effective invoicing directly accessible via any web browser. Spin up a payment terminal absolutely anywhere without heavy software limitations.",
    logo: getLogo("dejavoo.net"),
    specialties: ["Browser-Based Virtual Terminals", "Instant Web Invoicing", "No Desktop Software Required"],
    images: ["/images/Dejavoo1.JPG"],
  },
  {
    id: "nmi",
    name: "NMI",
    price: "$12/mo",
    desc: "Powerful payment gateway with advanced integration capabilities.",
    longDescription: "NMI champions high-performing integrations providing white-labeled solutions across diverse vendor networks. Nimbly navigate complex transaction routing structures specifically tuned for enterprise-grade flexibility.",
    logo: getLogo("nmi.com"),
    specialties: ["Advanced Transaction Routing", "Enterprise Level Tokenization", "Rich Developer API"],
    images: [],
  },
]

export const mobilePayments: Partner[] = [
  {
    id: "valor-mobile",
    name: "Valor Mobile",
    desc: "Mobile POS solution from Valor PayTech for accepting payments on the go with smartphone-friendly workflows.",
    longDescription:
      "Valor Mobile extends payment acceptance beyond the counter so merchants can take payments anywhere. Based on Valor's mobile POS approach, it supports modern payment flows and helps teams keep checkout fast, flexible, and customer-friendly in the field or at the table.",
    logo: getLogo("valorpaytech.com"),
    specialties: [
      "On-the-go payment acceptance",
      "Mobile checkout workflows",
      "Built for field and in-store flexibility",
    ],
    images: [],
  },
  {
    id: "iposgo-android",
    name: "IPOSgo! Android",
    desc: "Android-based mobile payments app for taking card payments and managing transactions from your device.",
    longDescription:
      "IPOSgo! Android is designed for merchants who need mobile-first checkout from an Android phone or tablet. It enables teams to process transactions quickly and keep payment operations portable, making it a strong fit for delivery, events, and line-busting scenarios.",
    logo: getLogo("ipospays.com"),
    specialties: [
      "Android phone and tablet workflow",
      "Portable checkout for events and delivery",
      "Fast transaction handling",
    ],
    images: [],
  },
  {
    id: "iposgo-ios",
    name: "IPOSgo! iOS / iPhone",
    desc: "iPhone-friendly mobile payment solution for businesses that need flexible checkout away from the counter.",
    longDescription:
      "IPOSgo! iOS / iPhone gives Apple-based teams a streamlined way to accept payments from a mobile device. It supports everyday mobile checkout use cases where speed and flexibility matter, whether at pop-ups, curbside, or in-service environments.",
    logo: getLogo("ipospays.com"),
    specialties: [
      "iPhone-based checkout",
      "Great for pop-ups and curbside",
      "Simple mobile payment flow",
    ],
    images: [],
  },
  {
    id: "dejapaypro-mobile",
    name: "DejaPayPro Mobile",
    desc: "Mobile payment companion built for Dejavoo merchants who want flexible card acceptance and transaction visibility.",
    longDescription:
      "DejaPayPro Mobile brings Dejavoo merchants a mobile-friendly way to run payments with less friction. It helps businesses process transactions outside the traditional checkout station while keeping operations connected to their broader Dejavoo payment ecosystem.",
    logo: getLogo("dejavoo.net"),
    specialties: [
      "Dejavoo ecosystem compatibility",
      "Mobile card acceptance",
      "Flexible checkout beyond the front counter",
    ],
    images: [],
  },
]

// To handle lookups, we merge them
export const allPartners = [...posSystems, ...gateways, ...mobilePayments]
