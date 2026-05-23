"use client"

import { useState, useRef } from "react"

export function HeroSlideshow() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="px-6 pb-10">
      <div className="max-w-4xl md:max-w-lg mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
          {/* Loading spinner – visible only until the video can play */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
              <div className="hero-video-spinner" />
            </div>
          )}

          <video
            ref={videoRef}
            src="/features.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-48 w-full object-cover md:h-auto md:object-contain"
            onCanPlayThrough={() => setIsLoaded(true)}
            onPlaying={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </section>
  )
}
