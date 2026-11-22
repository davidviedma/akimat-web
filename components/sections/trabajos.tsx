"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { useInView } from "motion/react"
import { Reveal } from "@/components/reveal"
import { optimizedSrc } from "@/lib/images"
import { works } from "@/lib/site"

// La galería es WebGL: su código y sus fotos se piden cuando el visitante se
// acerca a la sección, no al cargar la página.
const CircularGallery = dynamic(
  () => import("@/components/reactbits/CircularGallery"),
  { ssr: false }
)

const items = works.map((work) => ({
  image: optimizedSrc(work, 414),
  text: work.caption,
  alt: work.alt,
}))

export function Trabajos() {
  const stage = useRef<HTMLDivElement>(null)
  const near = useInView(stage, { once: true, margin: "600px 0px" })

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
      <div ref={stage} className="h-[440px] md:h-[580px]">
        {near && (
          <CircularGallery
            items={items}
            bend={2.2}
            textColor="#111016"
            borderRadius={0.06}
            itemAspect={0.8}
            font="600 20px Sora"
            autoScroll={0.08}
            scrollSpeed={1.6}
            aria-label="Galería de trabajos de akiMAT"
          />
        )}
      </div>
    </section>
  )
}
