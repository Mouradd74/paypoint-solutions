"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const CAL_URL = "https://calendly.com/paypointsolutions1/30min"

type VolumeOption = {
  label: string
  value: "under-10k" | "10000" | "25000" | "50000" | "75000" | "100000" | "150000" | "200000"
  monthlyVolume: number | null
}

const volumeOptions: VolumeOption[] = [
  { label: "Under $10,000", value: "under-10k", monthlyVolume: null },
  { label: "$10,000", value: "10000", monthlyVolume: 10_000 },
  { label: "$25,000", value: "25000", monthlyVolume: 25_000 },
  { label: "$50,000", value: "50000", monthlyVolume: 50_000 },
  { label: "$75,000", value: "75000", monthlyVolume: 75_000 },
  { label: "$100,000", value: "100000", monthlyVolume: 100_000 },
  { label: "$150,000", value: "150000", monthlyVolume: 150_000 },
  { label: "$200,000+", value: "200000", monthlyVolume: 200_000 },
]

const businessTypes = [
  "Auto Shop",
  "Bakery",
  "Coffee Shop",
  "Flower Shop",
  "Food Trailer",
  "Green House / Nursery",
  "Meat Market",
  "Mobile service",
  "Other",
  "Pet Groomer",
  "Restaurant",
  "Retail Store",
  "Tire Shop",
  "Transmission Shop",
]

type FormData = {
  businessName: string
  contactName: string
  phone: string
  email: string
  businessType: string
}

export function EquipmentQualifier() {
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption["value"]>("25000")
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    businessType: "",
  })
  const [hasCheckedEligibility, setHasCheckedEligibility] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle")

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

  const result = useMemo(() => {
    const selected = volumeOptions.find((option) => option.value === selectedVolume) ?? volumeOptions[0]

    if (selected.monthlyVolume === null || selected.monthlyVolume < 10_000) {
      return {
        title: "Every business is different — let's find the right fit for you.",
        helper: "No standard equipment budget applies under $10,000/month, but we still have options for your setup.",
      }
    }

    const budget = selected.monthlyVolume * 0.03
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    })

    if (selected.monthlyVolume >= 100_000) {
      return {
        title: `You qualify for ${formatter.format(budget)}+ in free equipment — and we'll always make it work.`,
        helper: "High-volume merchants always qualify for priority equipment planning.",
      }
    }

    return {
      title: `You qualify for up to ${formatter.format(budget)} in free equipment.`,
      helper: "Estimate based on ~3% equipment credit from monthly processing volume.",
    }
  }, [selectedVolume])

  const selectedVolumeLabel = useMemo(
    () => volumeOptions.find((option) => option.value === selectedVolume)?.label ?? "",
    [selectedVolume],
  )

  const handleFieldChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((previous) => ({
      ...previous,
      [field]: event.target.value,
    }))
  }

  const submitEligibility = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHasCheckedEligibility(true)
    setSubmitState("submitting")

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setSubmitState("error")
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Equipment Eligibility Lead",
          from_name: "Paypoint Solutions - Equipment Qualifier",
          business_name: formData.businessName,
          contact_name: formData.contactName,
          phone: formData.phone,
          email: formData.email,
          business_type: formData.businessType,
          monthly_volume: selectedVolumeLabel,
          qualification_result: result.title,
        }),
      })

      const payload = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Unable to submit form")
      }

      setSubmitState("success")
    } catch {
      setSubmitState("error")
    }
  }

  const openCalendly = () => {
    const calendly = (window as Window & {
      Calendly?: { initPopupWidget: (options: { url: string }) => void }
    }).Calendly

    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({ url: CAL_URL })
      return
    }

    window.open(CAL_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-[0.25em] mb-5">
            <div className="w-6 h-px bg-white/30" />
            Free Equipment
            <div className="w-6 h-px bg-white/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight text-balance">
            Do You Qualify for Free Equipment?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            See how much equipment your monthly processing volume qualifies you for — at no cost.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6">
          <form onSubmit={submitEligibility} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-white/80 mb-2">
                  Business Name
                </label>
                <input
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleFieldChange("businessName")}
                  required
                  maxLength={120}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-white/80 mb-2">
                  What business are you?
                </label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={handleFieldChange("businessType")}
                  required
                  className="w-full appearance-none bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors touch-manipulation"
                >
                  <option value="" disabled className="bg-zinc-900 text-white/50">
                    Select…
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type} className="bg-zinc-900 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-white/80 mb-2">
                  Your Name
                </label>
                <input
                  id="contactName"
                  value={formData.contactName}
                  onChange={handleFieldChange("contactName")}
                  required
                  maxLength={120}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                  required
                  maxLength={32}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                  required
                  maxLength={120}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="volume" className="block text-sm font-medium text-white/80 mb-2">
                  Monthly processing volume
                </label>
                <select
                  id="volume"
                  value={selectedVolume}
                  onChange={(e) => setSelectedVolume(e.target.value as VolumeOption["value"])}
                  className="w-full appearance-none bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors touch-manipulation"
                >
                  {volumeOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-zinc-900 text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="relative bg-white hover:bg-gray-100 disabled:opacity-70 text-black font-medium px-7 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group touch-manipulation"
              >
                <span className="mr-2">{submitState === "submitting" ? "Checking..." : "Check Eligibility"}</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={openCalendly}
                className="relative bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium px-7 py-3 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group touch-manipulation"
              >
                <span className="mr-2">Book a Free Consultation</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </form>

          {hasCheckedEligibility && (
            <div key={selectedVolume} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-base sm:text-lg">{result.title}</p>
                    <p className="text-emerald-100/80 text-sm mt-2">{result.helper}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
