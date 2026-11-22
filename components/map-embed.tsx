"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Location01Icon,
  MapsIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { business, fullAddress, maps } from "@/lib/site"

/**
 * Mapa de Google del pie de página. Por defecto no conecta con Google hasta
 * que el visitante pulsa "Ver mapa" (`maps.autoload` en `lib/site.ts`): así la
 * web sigue sin cookies de terceros y sin banner.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(maps.autoload)
  const frame = useRef<HTMLIFrameElement>(null)
  const opened = useRef(false)

  // Al abrirlo con el botón, el foco pasa al mapa (el botón desaparece).
  useEffect(() => {
    if (loaded && opened.current) frame.current?.focus()
  }, [loaded])

  return (
    <div className="relative mt-12 h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:h-56">
      {loaded ? (
        <iframe
          ref={frame}
          src={maps.embed}
          title={`Mapa de Google: ${business.name}, ${fullAddress}`}
          className="size-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <>
          <StreetPattern />
          {/* Marcador: arriba a la derecha en móvil, centrado en pantallas anchas */}
          <span
            aria-hidden="true"
            className="absolute top-9 right-10 flex size-5 items-center justify-center sm:top-[42%] sm:right-auto sm:left-[62%]"
          >
            <span className="animate-ripple absolute size-14 rounded-full bg-brand-primary/35" />
            <span className="size-5 rounded-full border-[5px] border-brand-primary bg-white" />
          </span>
          <div className="relative flex h-full flex-col justify-end gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div className="flex flex-col gap-1.5">
              <p className="flex items-center gap-2 font-heading text-xl font-semibold text-white">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={20}
                  className="shrink-0 text-brand-primary"
                />
                {business.address.area}
              </p>
              <p className="max-w-sm text-sm leading-snug text-white/65">
                {fullAddress}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 sm:items-end">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="light"
                  onClick={() => {
                    opened.current = true
                    setLoaded(true)
                  }}
                >
                  <HugeiconsIcon icon={MapsIcon} size={17} />
                  Ver mapa
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="border-white/25 text-white hover:bg-white/10"
                >
                  <a
                    href={maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cómo llegar
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                  </a>
                </Button>
              </div>
              <p className="text-xs text-white/45">
                El mapa es de Google y puede usar cookies.{" "}
                <Link
                  href="/politica-de-cookies"
                  className="underline underline-offset-2 hover:text-white/80"
                >
                  Más información
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/** Fondo decorativo: unas calles. No es cartografía real. */
function StreetPattern() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 240"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        className="text-white/[0.07]"
      >
        <path d="M-20 196 L1220 108" strokeWidth="18" />
        <path d="M-20 60 L1220 -28" strokeWidth="10" />
        <path d="M150 -20 L236 260" strokeWidth="10" />
        <path d="M430 -20 L516 260" strokeWidth="10" />
        <path d="M700 -20 L786 260" strokeWidth="14" />
        <path d="M980 -20 L1066 260" strokeWidth="10" />
        <path d="M-20 128 L1220 40" strokeWidth="6" />
      </g>
    </svg>
  )
}
