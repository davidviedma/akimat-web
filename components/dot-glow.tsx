"use client"

import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Fondo de rejilla de puntos que se ilumina en cian alrededor del cursor
 * (el mismo efecto de la cabecera de la web de Iruman).
 */
export function DotGlow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  const move = (event: React.PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el || event.pointerType !== "mouse") return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--glow-x", `${event.clientX - rect.left}px`)
    el.style.setProperty("--glow-y", `${event.clientY - rect.top}px`)
  }

  const leave = () => {
    ref.current?.style.removeProperty("--glow-x")
    ref.current?.style.removeProperty("--glow-y")
  }

  return (
    <section
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={cn(
        "relative [--glow-x:-9999px] [--glow-y:-9999px]",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle, #15232e 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0099d6 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          WebkitMaskImage:
            "radial-gradient(220px circle at var(--glow-x) var(--glow-y), black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(220px circle at var(--glow-x) var(--glow-y), black 0%, transparent 100%)",
        }}
      />
      {children}
    </section>
  )
}
