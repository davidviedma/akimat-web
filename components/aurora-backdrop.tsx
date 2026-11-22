"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { useInView } from "motion/react"
import { cn } from "@/lib/utils"

// Fondo WebGL (React Bits · Aurora): su código se pide cuando la franja se
// acerca a la pantalla, y el propio componente se para si deja de verse.
const Aurora = dynamic(() => import("@/components/reactbits/Aurora"), {
  ssr: false,
})

/**
 * Aurora con los colores de la marca: del rojo de las furgonetas (calor) al
 * cian del logo (frío). Sube desde el borde inferior de su contenedor.
 */
export function AuroraBackdrop({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const near = useInView(ref, { once: true, margin: "500px 0px" })

  return (
    <div ref={ref} aria-hidden="true" className={cn("size-full", className)}>
      {near && (
        <Aurora
          colorStops={["#d71f26", "#ff7a45", "#35b8ee", "#0099d6"]}
          direction="bottom"
          height={0.55}
          amplitude={1.15}
          blend={0.65}
          glow={0.7}
          layers={2}
          speed={0.7}
          opacity={0.9}
          dpr={1}
        />
      )}
    </div>
  )
}
