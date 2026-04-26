"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FacebookIcon, InstagramIcon } from "lucide-react"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Navigate",
    links: [
      { title: "How It Works", href: "#how-it-works" },
      { title: "Compare", href: "#compare" },
      { title: "Services", href: "#services" },
      { title: "Meet Matthew", href: "#matthew" },
      { title: "Book a Call", href: "#book" },
      { title: "Contact", href: "#contact" },
    ],
  },
  {
    label: "Services",
    links: [
      { title: "Zero-Fee Processing", href: "#services" },
      { title: "Free Terminal", href: "#services" },
      { title: "Cash Discount Program", href: "#compare" },
      { title: "Fee Audit", href: "#contact" },
    ],
  },
  {
    label: "Contact",
    links: [
      { title: "+1 (830) 318-3250", href: "#contact" },
      { title: "paypointsolutions1@gmail.com", href: "#contact" },
      { title: "Seguin, Texas", href: "#contact" },
      { title: "@feeassasintx", href: "https://instagram.com/feeassasintx" },
    ],
  },
  {
    label: "Social",
    links: [
      { title: "Instagram", href: "https://www.instagram.com/feeassasintx", icon: InstagramIcon },
      { title: "Facebook", href: "#", icon: FacebookIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-white text-xl tracking-tight">Paypoint Solutions</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 mt-0.5">Seguin, TX</span>
          </div>
          <p className="text-white/60 text-sm mt-3">Seguin's Trusted Merchant Services Provider</p>
          <div className="text-muted-foreground mt-8 text-sm md:mt-0 md:block hidden">
            <p className="text-white/40 text-xs">
              Free terminal requires minimum $20,000/month in processing volume. Cash Discount Program fees are
              disclosed at point of sale in compliance with Visa and Mastercard network rules.
            </p>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300 text-white/60 hover:text-white"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-8 text-center space-y-2">
        <p className="text-white/40 text-xs">
          Free terminal requires minimum $20,000/month in processing volume. Cash Discount Program fees are disclosed at
          point of sale in compliance with Visa and Mastercard network rules.
        </p>
        <p className="text-muted-foreground text-sm">© 2025 Paypoint Solutions. All rights reserved.</p>
      </div>

      <div className="hidden md:block mt-8 pt-6 border-t border-foreground/10 w-full">
        <p className="text-white/40 text-xs text-center">© 2025 Paypoint Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
