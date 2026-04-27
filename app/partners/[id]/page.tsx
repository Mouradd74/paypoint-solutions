import { notFound } from "next/navigation"
import { allPartners } from "@/lib/partners-data"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export function generateStaticParams() {
  return allPartners.map((partner) => ({
    id: partner.id,
  }))
}

export default function PartnerPage({ params }: { params: { id: string } }) {
  const partner = allPartners.find((p) => p.id === params.id)

  if (!partner) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col">
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <Aurora colorStops={["#0f172a", "#1e293b", "#0f172a"]} amplitude={1.2} blend={0.6} speed={0.8} />
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <GlassmorphismNav />
        
        <main className="flex-grow pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Context/Back Button */}
            <Link 
              href="/#solutions" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12 text-sm touch-manipulation active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Solutions
            </Link>

            {/* Header Content */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {partner.logo ? (
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white flex items-center justify-center p-4 shrink-0 shadow-2xl shadow-white/5 border border-white/10">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-2xl">
                  <span className="text-white font-bold text-4xl">{partner.name.charAt(0)}</span>
                </div>
              )}
              
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  {partner.name}
                </h1>
                <p className="text-xl md:text-2xl text-emerald-400 font-medium">
                  {partner.desc}
                </p>
                {partner.price && (
                  <div className="mt-4 inline-block bg-emerald-500/10 text-emerald-400 font-semibold px-4 py-2 rounded-full border border-emerald-500/20">
                    Pricing: {partner.price}
                  </div>
                )}
              </div>
            </div>

            {/* Specialties & Description Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-150">
              <div className="md:col-span-2">
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md h-full shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">About {partner.name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {partner.longDescription}
                  </p>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md h-full shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-6">Specialties</h3>
                  <ul className="space-y-4">
                    {partner.specialties.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-snug">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            {partner.images && partner.images.length > 0 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
                <div className="text-center mb-10">
                  <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Hardware Preview</span>
                  <h3 className="text-3xl font-bold text-white">Visual Showcase</h3>
                </div>
                
                <div className={`grid grid-cols-1 ${partner.images.length === 1 ? 'max-w-3xl mx-auto' : 'md:grid-cols-2'} lg:grid-cols-${Math.min(partner.images.length, 3)} gap-8`}>
                  {partner.images.map((imgSrc, i) => (
                    <div 
                      key={i} 
                      className="group relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm aspect-square flex items-center justify-center p-8 hover:border-emerald-400/30 hover:bg-white/[0.04] transition-all duration-300 shadow-xl"
                    >
                      {/* Subtle background glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                      
                      <img 
                        src={imgSrc} 
                        alt={`${partner.name} hardware showcasing features`} 
                        className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500 relative z-10" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
