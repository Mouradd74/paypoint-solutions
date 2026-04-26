"use client"

import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ChevronDown = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          Seguin, Texas
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
          <span className="text-foreground">Accept Credit Cards</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
            <RotatingText
              texts={["Without Fees.", "Keep 100%.", "Stay Local."]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-white text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          Seguin's Local Merchant Services Expert — Free Equipment, $0 Processing Fees, Real Human Support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
            onClick={() => {
              const el = document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get My Free Terminal
            <ArrowRight />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-border hover:bg-accent transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
            onClick={() => {
              const el = document.getElementById("how-it-works")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ChevronDown />
            See How It Works
          </Button>
        </div>

        {/* Business Type Strip — replaces company logo marquee */}
        <div className="text-center px-4 overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-white/70 mb-4">Proudly serving local businesses in Seguin, TX</p>
          <div className="relative overflow-hidden w-full max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {["Restaurants", "Food Trucks", "Retail Shops", "Salons", "Auto Shops"].map((type, i) => (
                <span key={type} className="inline-flex items-center gap-2 text-white/80 text-sm font-medium">
                  {i > 0 && <span className="text-white/30">·</span>}
                  {type}
                </span>
              ))}
              <span className="text-white/30 ml-2 text-sm">in Seguin, TX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
