"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Zap, AlertTriangle } from "lucide-react"

const traditionalPoints = [
  "Terminal charges 2.7%–3.5% per transaction",
  "Merchant receives only 96% of sale amount",
  "You absorb the full cost of every card payment",
  "Fees are hidden and compounding",
]

const cashDiscountPoints = [
  "Terminal auto-calculates 3.99% service fee",
  "Merchant receives 100% of sale amount",
  "Fee is transparently shown to card customers",
  "Cash customers save — you save even more",
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"traditional" | "cashDiscount">("cashDiscount")

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
    <section ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Zap className="w-4 h-4" />
              Side-by-Side Comparison
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Traditional vs.{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Cash Discount
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              One costs you thousands a year. The other puts that money back in your pocket.
            </p>
          </div>

          {/* ─── DESKTOP: 3-Column Layout ─── */}
          <div
            className={`hidden lg:grid gap-10 lg:grid-cols-[1fr_auto_1fr] items-center mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left — Traditional */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Traditional Processing</h3>
              </div>
              <ul className="space-y-4">
                {traditionalPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center — Image */}
            <div className="relative flex flex-col items-center gap-4">
              <div className="text-4xl font-black text-slate-900 tracking-widest">VS</div>
              <div className="relative">
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-blue-500 z-10" />
                <Image
                  src="/images/pos-split.webp"
                  alt="Payment terminal split: Traditional vs Cash Discount Program"
                  width={280}
                  height={380}
                  className="relative drop-shadow-2xl rounded-xl max-h-[380px] w-auto"
                />
              </div>
            </div>

            {/* Right — Cash Discount */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <Zap className="h-5 w-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Cash Discount Program</h3>
              </div>
              <ul className="space-y-4">
                {cashDiscountPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ─── MOBILE: Tabbed Switcher ─── */}
          <div
            className={`lg:hidden mb-10 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tab pills */}
            <div className="flex rounded-xl border border-slate-200 bg-slate-100 p-1 gap-1 mb-4">
              <button
                onClick={() => setActiveTab("traditional")}
                className={`flex-1 text-sm font-semibold py-2.5 px-3 rounded-lg transition-all duration-200 ${
                  activeTab === "traditional"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Traditional
              </button>
              <button
                onClick={() => setActiveTab("cashDiscount")}
                className={`flex-1 text-sm font-black py-2.5 px-3 rounded-lg transition-all duration-200 ${
                  activeTab === "cashDiscount"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Cash Discount ✦
              </button>
            </div>

            {/* Mobile image */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/pos-split.webp"
                alt="Payment terminal split: Traditional vs Cash Discount Program"
                width={200}
                height={260}
                className="drop-shadow-xl rounded-lg"
              />
            </div>

            {/* Tab content */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
              {activeTab === "traditional" ? (
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-red-500 pt-1 pb-3">
                    Traditional Processing
                  </div>
                  <ul className="space-y-3">
                    {traditionalPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-green-600 pt-1 pb-3">
                    Cash Discount Program ✦
                  </div>
                  <ul className="space-y-3">
                    {cashDiscountPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-700 text-sm">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">Tap the tabs above to compare</p>
          </div>

          {/* Callout Boxes */}
          <div
            className={`max-w-3xl mx-auto space-y-4 mb-10 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-xl border-2 border-amber-400 bg-amber-50 px-6 py-5 text-center">
              <p className="text-lg font-bold text-amber-800">
                ⚡ One costs you thousands a year. The other protects your margins.
              </p>
            </div>
            <div className="rounded-xl border-2 border-red-400 bg-red-50 px-6 py-5 flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <p className="text-slate-800 font-medium">
                ⚠️ Many setups unknowingly violate Visa policy — fines up to{" "}
                <span className="font-bold text-red-600">$5,000</span>. We fix this for free.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className={`text-center mb-10 transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-base hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer"
              onClick={() => {
                const el = document.getElementById("contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Show Me What I'm Losing
              <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* Transparency Statement */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
              <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">
                "We believe in complete transparency. Matthew personally audits your current processing setup, identifies
                what you're losing, and shows you a better way — at no cost and no obligation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
