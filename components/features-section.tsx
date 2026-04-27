"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, CreditCard, HeadphonesIcon } from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Zero-Fee Processing",
    description: "Accept cards with no processing fees — compliant and transparent.",
    size: "medium",
  },
  {
    icon: CreditCard,
    title: "Free Terminal",
    description: "Brand-new terminal at no upfront cost and fast setup.",
    size: "medium",
  },
  {
    icon: HeadphonesIcon,
    title: "Local Support",
    description: "Direct, local help — no call centers, no hold music.",
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
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`group transition-all duration-500 ${service.size === "large" ? "md:col-span-2" : ""}`}
                  style={{
                    transitionDelay: isVisible ? `${200 + index * 80}ms` : "0ms",
                  }}
                >
                  <div className="bg-white rounded-2xl p-5 sm:p-6 h-full shadow-sm md:hover:shadow-md transition-all duration-300 md:hover:-translate-y-1 border border-slate-100">
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 md:group-hover:bg-slate-900 md:group-hover:text-white transition-all duration-200">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-tight">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Short section — no mobile toggle */}

        </div>
      </div>
    </section>
  )
}
