"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, CreditCard, HeadphonesIcon, BadgeDollarSign, Search, FileCheck } from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Zero-Fee Processing",
    description:
      "Accept Visa, Mastercard, Amex, and Discover without paying a cent in processing fees. Fully compliant with all card network rules.",
    size: "medium",
  },
  {
    icon: CreditCard,
    title: "Free Credit Card Terminal",
    description:
      "Brand new equipment at zero upfront cost. Same-day setup included. Requires minimum $20,000/month in processing volume.",
    size: "medium",
  },
  {
    icon: HeadphonesIcon,
    title: "Local Human Support",
    description:
      "Matthew is based in Seguin, TX. Call or text him directly. No call centers, no hold music, no overseas support desks.",
    size: "large",
  },
  {
    icon: BadgeDollarSign,
    title: "Cash Discount Program",
    description:
      "The terminal automatically calculates and shows the small service fee to card-paying customers. Cash customers save. You keep everything.",
    size: "large",
  },
  {
    icon: Search,
    title: "Free Compliance Audit",
    description:
      "We review your current setup for Visa/Mastercard policy violations at no charge. Many businesses are unknowingly at risk of fines up to $5,000.",
    size: "medium",
  },
  {
    icon: FileCheck,
    title: "No Long-Term Contracts",
    description:
      "No lock-in. No cancellation fees. We earn your business every single month by delivering real results.",
    size: "medium",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-200 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div
            className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 mr-2 text-slate-600" />
              Complete Merchant Services — One Local Expert
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
              Everything You Need.{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Nothing You Don't.
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              One local expert. Complete payment solutions. No fluff, no fine print, no call centers.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`group transition-all duration-1000 ${service.size === "large" ? "md:col-span-2" : ""}`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300">
                    <div className="mb-6">
                      <div className="h-14 w-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
