"use client"

import CircularGallery from "@/components/reactbits/CircularGallery"
import { Reveal } from "@/components/reveal"
import { works } from "@/lib/site"

export function Trabajos() {
  return (
    <section
      id="trabajos"
      className="overflow-hidden bg-paper-2 py-16 md:py-24"
    >
      <Reveal className="container-x mb-8 flex flex-col gap-3 md:mb-10">
        <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
          Trabajos
        </p>
        <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
          Así quedan.
        </h2>
        <p className="text-ink-soft">Arrastra para ver más.</p>
      </Reveal>

      {/* Galería curva (React Bits · CircularGallery) */}
      <div className="h-[420px] md:h-[560px]">
        <CircularGallery
          items={works.map((photo) => ({ image: photo.src, alt: photo.alt }))}
          bend={2.2}
          textColor="#111016"
          borderRadius={0.06}
          itemAspect={0.8}
          font="600 22px Sora"
          showTitles={false}
          autoScroll={0.08}
          scrollSpeed={1.6}
          aria-label="Galería de trabajos de akiMAT"
        />
      </div>
    </section>
  )
}
