"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, FileText, ShoppingCart, Store, ShieldCheck } from "lucide-react"

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/F11K8noWpRzUtgqGxSfe"
const BOOKING_IFRAME_ID = "F11K8noWpRzUtgqGxSfe_1790628653929"

export function ROICalculatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scriptFailed, setScriptFailed] = useState(false)
  const [activeTab, setActiveTab] = useState<"ecommerce" | "markets" | "supermarkets" | "Other Stores">("ecommerce")
  const industryOptions = [
    { value: "ecommerce", label: "E-Commerce", Icon: ShoppingCart },
    { value: "markets", label: "Markets", Icon: Store },
    { value: "supermarkets", label: "Supermarkets", Icon: Store },
    { value: "Other Stores", label: "Other Stores", Icon: Store },
  ] as const

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

  // Load LeadConnectorHQ booking widget script (form_embed.js handles iframe resizing)
  // Robust: handle ad-blockers, slow networks, and ensure it loads after iframe is mounted
  useEffect(() => {
    const id = "leadconnector-booking-script"
    if (document.getElementById(id)) return
    const script = document.createElement("script")
    script.id = id
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    script.type = "text/javascript"
    script.onerror = () => setScriptFailed(true)
    // if script doesn't load in 4s (blocked), show fallback
    const timer = window.setTimeout(() => {
      if (!document.getElementById(id)?.getAttribute("data-loaded")) {
        // script may be blocked by ad-blocker
        const stillMissing = !document.querySelector(`script[src="${script.src}"]`)
        if (stillMissing) setScriptFailed(true)
      }
    }, 4000)
    script.onload = () => script.setAttribute("data-loaded", "true")
    document.body.appendChild(script)
    return () => window.clearTimeout(timer)
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
                    "Current or past merchant processing statements (optional)",
                    "EIN Letter",
                    
                    
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
              <div className="mb-6 md:hidden">
                <label htmlFor="roi-industry-mobile" className="sr-only">
                  Select industry
                </label>
                <select
                  id="roi-industry-mobile"
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value as "ecommerce" | "markets" | "supermarkets" | "Other Stores")}
                  className="w-full max-w-sm mx-auto block rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white touch-manipulation"
                >
                  {industryOptions.map(({ value, label }) => (
                    <option key={value} value={value} className="text-black">
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="mb-6 hidden md:block">
                <legend className="sr-only">Select industry</legend>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {industryOptions.map(({ value, label, Icon }) => {
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

        {/* Booking Widget - LeadConnectorHQ (replaces Calendly) */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            ref={sectionRef}
            id="booking-embed"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden p-1 md:p-2"
          >
            {/* legacy anchor for old links that pointed to #calendly-embed */}
            <span id="calendly-embed" className="sr-only" aria-hidden="true" />
            <iframe
              src={BOOKING_URL}
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id={BOOKING_IFRAME_ID}
              title="Book a consultation - Paypoint Solutions"
              loading="eager"
              allow="payment"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full min-h-[720px] rounded-xl bg-white block"
              onError={() => setScriptFailed(true)}
            />
            {/* Fallback for ad-blockers / iframe blocking — always visible as backup */}
            <div className="px-4 py-3 bg-white rounded-xl mt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
              <span className="text-gray-600 text-center">
                {scriptFailed ? "Booking blocked by ad-blocker?" : "Having trouble loading the calendar?"}
              </span>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-medium hover:bg-zinc-800 transition-colors shrink-0"
              >
                Open booking in new tab
                <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>
            <noscript>
              <div className="p-4 text-center bg-white rounded-xl mt-2">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-black underline">
                  Open booking calendar
                </a>
              </div>
            </noscript>
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

