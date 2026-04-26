"use client"

import { useEffect, useRef, useState } from "react"

const CAL_URL = "https://calendly.com/paypointsolutions1/30min"

export function ROICalculatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("book")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  // Load Calendly widget script
  useEffect(() => {
    const id = "calendly-widget-script"
    let script = document.getElementById(id) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement("script")
      script.id = id
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
    const cssId = "calendly-widget-css"
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link")
      link.id = cssId
      link.rel = "stylesheet"
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      document.head.appendChild(link)
    }
  }, [])

  return (
    <section id="book" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Book a Call</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
            Book Your Free{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Savings Consultation
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance leading-relaxed">
            Pick a time that works for you — Matthew will personally review your current fees and show you exactly how
            much you could save. No pressure. No obligation.
          </p>
        </div>

        {/* Calendly Widget */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            ref={sectionRef}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden"
          >
            <div
              className="calendly-inline-widget"
              data-url={CAL_URL}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          * Free consultation. No obligation. Matthew will reach out within 24 hours if you prefer to be contacted first.
        </p>
      </div>
    </section>
  )
}
