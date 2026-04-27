"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, FileText, ShoppingCart, Store, ShieldCheck } from "lucide-react"

const CAL_URL = "https://calendly.com/paypointsolutions1/30min"

export function ROICalculatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"ecommerce" | "markets" | "supermarkets" | "Other Stores">("ecommerce")

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

        {/* Requirements Section */}
        <div
          className={`mb-12 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10 text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Have these ready to sign up in 5 minutes
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                Please prepare the following requirements before our meeting to ensure a quick and seamless onboarding process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
              {/* General Requirements */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  Documentation
                </h4>
                <ul className="space-y-3">
                  {[
                    "Merchant Processing Agreement (MPA)",
                    "Equipment Order Form",
                    "Driver's License or Government Issued ID",
                    "Voided check or a signed bank letter",
                    "Business License (High-Risk Merchants)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/80 mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verification */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
                <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Verification
                </h4>
                <ul className="space-y-3">
                  {[
                    "A copy of the Social Security Card",
                    "Current or past merchant processing statements",
                    "EIN Letter",
                    "Bank Statements",
                    "A residential bill to verify home address",
                    "Pictures of the business"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/80 mt-0.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mini Navbar for specific industries */}
            <div className="pt-8 border-t border-white/10 relative z-10">
              <h4 className="text-center text-gray-400 text-xs sm:text-sm mb-6 uppercase tracking-[0.2em] font-medium">
                Industry Specific Requirements
              </h4>
              <fieldset className="mb-6">
                <legend className="sr-only">Select industry</legend>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {[
                    { value: "ecommerce" as const, label: "E-Commerce", Icon: ShoppingCart },
                    { value: "markets" as const, label: "Markets", Icon: Store },
                    { value: "supermarkets" as const, label: "Supermarkets", Icon: Store },
                    { value: "Other Stores" as const, label: "Other Stores", Icon: Store },
                  ].map(({ value, label, Icon }) => {
                    const id = `roi-tab-${value.replace(/\s+/g, "-").toLowerCase()}`
                    const checked = activeTab === value

                    return (
                      <label
                        key={value}
                        htmlFor={id}
                        className={`px-4 py-2.5 rounded-full text-sm font-medium flex items-center justify-center border cursor-pointer select-none touch-manipulation active:scale-[0.98] ${checked ? "bg-white/15 text-white border-white/20" : "bg-white/5 text-gray-400 border-transparent"}`}
                      >
                        <input
                          id={id}
                          type="radio"
                          name="roi-industry"
                          value={value}
                          checked={checked}
                          onChange={() => setActiveTab(value)}
                          className="sr-only"
                        />
                        <Icon className="w-4 h-4 mr-2" />
                        {label}
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 min-h-[90px] flex items-center justify-center">
                {activeTab === "ecommerce" && (
                  <ul className="space-y-3 w-full max-w-md mx-auto">
                    {[
                      "Website",
                      "Copies of current invoices they use to bill customers"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {(activeTab === "markets" || activeTab === "supermarkets") && (
                  <ul className="space-y-3 w-full max-w-md mx-auto">
                    {[
                      "FNS Number (Food and Nutrition Services) (For EBT Food stamps)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {(activeTab === "Other Stores") && (
                  <ul className="space-y-3 w-full max-w-md mx-auto">
                    {[
                      "Proper Licensing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
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

