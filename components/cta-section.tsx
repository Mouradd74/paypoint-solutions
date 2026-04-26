"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Instagram, CheckCircle2, ChevronDown } from "lucide-react"

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={label}
        maxLength={120}
        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
      />
    </label>
  )
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: string[]
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      <div className="relative">
        <select
          name={name}
          required
          defaultValue=""
          className="w-full appearance-none bg-black/40 border border-white/10 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
        >
          <option value="" disabled className="bg-zinc-900 text-white/50">Select…</option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-zinc-900 text-white">{o}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
      </div>
    </label>
  )
}

function ContactRow({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  text: string
  href?: string
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <span className="h-10 w-10 grid place-items-center rounded-lg bg-white/10 border border-white/15 shrink-0">
        <Icon className="h-5 w-5 text-white/80" />
      </span>
      <span className="font-medium text-white/90">{text}</span>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-90 transition">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  )
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center mb-12">
          <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-5">
            <div className="w-6 h-px bg-white/30"></div>
            Free Audit
            <div className="w-6 h-px bg-white/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Stop Losing Money to{" "}
            <span className="italic font-light">Processing Fees</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Get a free audit of your current setup — no obligation, no pressure.
          </p>
        </div>

        {/* Form + Contact */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-white mx-auto" />
                <h3 className="mt-4 text-2xl font-bold text-white">
                  Thanks! Matthew will reach out within 24 hours.
                </h3>
                <p className="mt-2 text-white/70">
                  Keep an eye on your phone and email — you're one step closer to saving thousands.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Business Name" name="business" required />
                  <Field label="Your Name" name="name" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Phone Number" name="phone" type="tel" required />
                  <Field label="Email Address" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <SelectField
                    label="Monthly Card Volume"
                    name="volume"
                    options={["Under $5k", "$5k–$20k", "$20k–$50k", "Over $50k"]}
                  />
                  <SelectField
                    label="How did you hear about us?"
                    name="source"
                    options={["Instagram", "Google", "Referral", "Other"]}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 text-base py-4 sm:py-5 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer mt-2"
                >
                  Get My Free Savings Report
                </button>
                <p className="text-xs text-white/50 text-center !mt-4">
                  No spam. No pressure. Just a real audit from a local human.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-5 lg:pt-4">
            <h3 className="text-xl font-bold text-white">Reach out directly</h3>
            <div className="space-y-4">
              <ContactRow icon={MapPin} text="Seguin, Texas" />
              <ContactRow icon={Phone} text="+1 (830) 318-3250" />
              <ContactRow
                icon={Instagram}
                text="@feeassasintx"
                href="https://instagram.com/feeassasintx"
              />
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 backdrop-blur p-5">
              <p className="text-sm text-white/85">
                Prefer to talk first?{" "}
                <a href="#book" className="text-white font-semibold underline hover:no-underline">
                  Book a free call
                </a>{" "}
                and Matthew will walk you through everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
