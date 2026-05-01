import Image from "next/image"

export function HeroSlideshow() {
  return (
    <section className="px-6 pb-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
          <Image
            src="/images/pos.JPG"
            alt="Paypoint Solutions POS system"
            width={1600}
            height={900}
            className="h-48 w-full object-cover md:h-64"
            priority
          />
        </div>
      </div>
    </section>
  )
}
