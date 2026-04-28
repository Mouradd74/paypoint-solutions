"use client"

import { useState, useRef, useEffect } from "react"
import { MonitorSmartphone, CreditCard, Terminal, ArrowRight, Smartphone } from "lucide-react"
import Link from "next/link"
import { posSystems, gateways, mobilePayments, equipmentPartners } from "@/lib/partners-data"

export function PaymentSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"pos" | "gateways" | "mobile" | "equipment">("pos")
  const [showAllPosMobile, setShowAllPosMobile] = useState(false)
  const [showAllGatewaysMobile, setShowAllGatewaysMobile] = useState(false)
  const [showAllMobilePaymentsMobile, setShowAllMobilePaymentsMobile] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="solutions" className="py-20 md:py-32 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">Our Partners</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Seamless <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">Payment Solutions</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From storefront to checkout page — we&apos;ve got every payment need covered. Click any partner to learn more.
          </p>
        </div>

        {/* Tab Navigation */}
        <fieldset className={`mb-16 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <legend className="sr-only">Select partner category</legend>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { value: "pos" as const, label: "POS Systems", Icon: MonitorSmartphone },
              { value: "gateways" as const, label: "Gateways", Icon: CreditCard },
              { value: "mobile" as const, label: "Mobile Payments", Icon: Smartphone },
              { value: "equipment" as const, label: "Equipment", Icon: Terminal },
            ].map(({ value, label, Icon }) => {
              const id = `solutions-tab-${value}`
              const checked = activeTab === value

              return (
                <label
                  key={value}
                  htmlFor={id}
                  className={`px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center border cursor-pointer select-none touch-manipulation active:scale-[0.98] ${checked ? "bg-white/15 text-white border-white/20" : "bg-white/5 text-gray-400 border-transparent"}`}
                >
                  <input
                    id={id}
                    type="radio"
                    name="solutions-category"
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

        {/* Content Area */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* POS Systems Tab */}
          {activeTab === "pos" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-8">
                <p className="text-gray-300">Full-featured POS systems for restaurants, retail, bars, and more.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posSystems.map((sys, index) => {
                  const isHidden = !showAllPosMobile && index >= 3
                  return (
                    <Link href={`/partners/${sys.id}`} key={sys.id} className={`group ${isHidden ? 'hidden md:block' : 'block'} touch-manipulation relative z-20`}>
                      <div className="relative bg-white/[0.03] md:hover:bg-white/[0.06] md:hover:scale-[1.02] border border-white/10 md:hover:border-emerald-400/30 rounded-2xl p-6 backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out flex flex-col h-full overflow-hidden shadow-lg md:hover:shadow-emerald-900/20 cursor-pointer active:scale-95 active:bg-white/[0.05]">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-4 mb-4 relative z-10">
                          {sys.logo ? (
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 shrink-0 shadow-inner">
                              <img src={sys.logo} alt={sys.name} className="w-full h-full object-contain" />
                            </div>
                          ) : sys.images?.[0] ? (
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shrink-0 shadow-inner overflow-hidden">
                              <img src={sys.images[0]} alt={sys.name} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                              <span className="text-white font-bold text-lg">{sys.name.charAt(0)}</span>
                            </div>
                          )}
                          <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">{sys.name}</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-grow">
                          {sys.desc}
                        </p>
                        
                        {/* Interactive View Details Indicator */}
                        <div className="mt-6 flex items-center justify-between relative z-10 text-emerald-400/80 group-hover:text-emerald-400 font-medium text-sm transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Show More POS Mobile */}
              <div className="mt-8 flex justify-center md:hidden">
                <button
                  onClick={() => setShowAllPosMobile(!showAllPosMobile)}
                  className="px-6 py-3 rounded-full text-white bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {showAllPosMobile ? "Show Less" : "Show All POS Systems"}
                </button>
              </div>
            </div>
          )}

          {/* Gateways Tab */}
          {activeTab === "gateways" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-8">
                <p className="text-gray-300">Ecommerce and invoicing gateways that integrate with your website, online store, or billing platform like Shopify , GoDaddy , WooCommerce , and more.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gateways.map((gw, index) => {
                  const isHidden = !showAllGatewaysMobile && index >= 3
                  return (
                    <Link href={`/partners/${gw.id}`} key={gw.id} className={`group ${isHidden ? 'hidden md:block' : 'block'} touch-manipulation relative z-20`}>
                      <div className="relative bg-white/[0.03] md:hover:bg-white/[0.06] md:hover:scale-[1.02] border border-white/10 md:hover:border-emerald-400/30 rounded-2xl p-6 backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out flex flex-col h-full overflow-hidden shadow-lg md:hover:shadow-emerald-900/20 cursor-pointer active:scale-95 active:bg-white/[0.05]">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <div className="flex items-center gap-4">
                            {gw.logo ? (
                              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 shrink-0 shadow-inner">
                                <img src={gw.logo} alt={gw.name} className="w-full h-full object-contain" />
                              </div>
                            ) : gw.images?.[0] ? (
                              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shrink-0 shadow-inner overflow-hidden">
                                <img src={gw.images[0]} alt={gw.name} className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                <span className="text-white font-bold">{gw.name.charAt(0)}</span>
                              </div>
                            )}
                            <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">{gw.name}</h3>
                          </div>
                          <span className="shrink-0 bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/20">
                            {gw.price}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-grow mt-2">
                          {gw.desc}
                        </p>
                        
                        {/* Interactive View Details Indicator */}
                        <div className="mt-6 flex items-center justify-between relative z-10 text-emerald-400/80 group-hover:text-emerald-400 font-medium text-sm transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Show More Gateways Mobile */}
              <div className="mt-8 flex justify-center md:hidden">
                <button
                  onClick={() => setShowAllGatewaysMobile(!showAllGatewaysMobile)}
                  className="px-6 py-3 rounded-full text-white bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {showAllGatewaysMobile ? "Show Less" : "Show All Gateways"}
                </button>
              </div>
            </div>
          )}

          {/* Mobile Payments Tab */}
          {activeTab === "mobile" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-8">
                <p className="text-gray-300">Mobile-first payment options for on-the-go sales, events, curbside, and field service teams.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {mobilePayments.map((partner, index) => {
                  const isHidden = !showAllMobilePaymentsMobile && index >= 3
                  return (
                    <Link href={`/partners/${partner.id}`} key={partner.id} className={`group ${isHidden ? 'hidden md:block' : 'block'} touch-manipulation relative z-20`}>
                      <div className="relative bg-white/[0.03] md:hover:bg-white/[0.06] md:hover:scale-[1.02] border border-white/10 md:hover:border-emerald-400/30 rounded-2xl p-6 backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out flex flex-col h-full overflow-hidden shadow-lg md:hover:shadow-emerald-900/20 cursor-pointer active:scale-95 active:bg-white/[0.05]">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-4 mb-4 relative z-10">
                          {partner.logo ? (
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 shrink-0 shadow-inner">
                              <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                            </div>
                          ) : partner.images?.[0] ? (
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shrink-0 shadow-inner overflow-hidden">
                              <img src={partner.images[0]} alt={partner.name} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                              <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                            </div>
                          )}
                          <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">{partner.name}</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-grow">{partner.desc}</p>

                        <div className="mt-6 flex items-center justify-between relative z-10 text-emerald-400/80 group-hover:text-emerald-400 font-medium text-sm transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              <div className="mt-8 flex justify-center md:hidden">
                <button
                  onClick={() => setShowAllMobilePaymentsMobile(!showAllMobilePaymentsMobile)}
                  className="px-6 py-3 rounded-full text-white bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {showAllMobilePaymentsMobile ? "Show Less" : "Show All Mobile Payment Partners"}
                </button>
              </div>
            </div>
          )}

          {/* Equipment Tab */}
          {activeTab === "equipment" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="text-center mb-8">
                <p className="text-gray-300">Simple terminals for businesses that just need to accept cards.</p>
              </div>

              <div className="max-w-2xl mx-auto">
                {(() => {
                  const valor = equipmentPartners.find((partner) => partner.id === "valor-terminal")
                  const href = `/partners/${valor?.id ?? "valor-terminal"}`
                  const imgSrc = valor?.logo || ""
                  const title = valor?.name ?? "Valor Terminal"
                  const desc =
                    valor?.desc ??
                    "Dedicated payment terminal hardware built for reliable, in-person card acceptance — fast setup, durable design, and perfect for countertop or checkout-only needs."

                  return (
                    <Link href={href} className="block group touch-manipulation relative z-20">
                      <div className="relative bg-white/[0.03] md:hover:bg-white/[0.06] md:hover:scale-[1.02] border border-white/10 md:hover:border-emerald-400/30 rounded-2xl p-8 backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out overflow-hidden text-center cursor-pointer shadow-lg md:hover:shadow-emerald-900/20 active:scale-95 active:bg-white/[0.05]">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="w-20 h-20 mx-auto rounded-2xl bg-white flex items-center justify-center p-3 mb-6 relative z-10 shadow-xl">
                          {imgSrc ? (
                            <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-black font-bold">V</div>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-emerald-400 transition-colors">{title}</h3>
                        <p className="text-gray-400 text-base leading-relaxed relative z-10">{desc}</p>

                        {/* Interactive View Details Indicator */}
                        <div className="mt-6 flex items-center justify-center gap-2 relative z-10 text-emerald-400/80 group-hover:text-emerald-400 font-medium text-sm transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
