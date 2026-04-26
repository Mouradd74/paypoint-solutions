"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check, Instagram } from "lucide-react"

const bullets = [
  "Local Seguin-based support",
  "$0 credit card processing fees",
  "Free terminal equipment",
  "No long-term contracts",
  "Direct contact — no call centers",
]

export function MatthewSection() {
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
    <section id="matthew" ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Photo */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative max-w-sm w-full">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-white/10 blur-2xl opacity-50" />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl">
                <Image
                  src="/images/matthew.webp"
                  alt="Matthew Wurz, CEO & Founder of Paypoint Solutions in Seguin, Texas"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  style={{ maxHeight: "520px" }}
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-2xl whitespace-nowrap border border-slate-100">
                📍 Seguin, TX — CEO & Founder
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <div className="w-6 h-px bg-white/30"></div>
              CEO &amp; Founder · Seguin, Texas
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Most Agents Serve The Banks.{" "}
              <span className="italic font-light text-white/80">I'm Here To Serve You.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              Matthew Wurz is Seguin's go-to credit card processing expert. Unlike national reps who push long contracts
              and hidden fees, Matthew offers free equipment, zero processing fees, and real local support — because he
              lives and works right here in your community.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-full bg-white/20 border border-white/30 grid place-items-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white/85 font-medium">{b}</span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-slate-900 rounded-full font-semibold text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("book")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Book a Free Call with Matthew
              </button>
              <a
                href="https://www.instagram.com/feeassasintx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white rounded-full font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
