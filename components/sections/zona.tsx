"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, Location01Icon } from "@hugeicons/core-free-icons"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { business, fullAddress, serviceArea } from "@/lib/site"
import { cn } from "@/lib/utils"

// El radar (WebGL) está bajo el pliegue: se carga aparte, después de la página.
const Radar = dynamic(() => import("@/components/reactbits/Radar"), {
  ssr: false,
})

// El radar representa 10 km alrededor de Zizur Mayor. Con scale = 0.92 el
// anillo exterior queda al 46 % del lado del contenedor.
const RANGE_KM = 10
const RADIUS_PCT = 46

function project(lat: number, lng: number) {
  const { base } = serviceArea
  const kmPerDegLat = 111.32
  const kmPerDegLng = 111.32 * Math.cos((base.lat * Math.PI) / 180)
  const dx = (lng - base.lng) * kmPerDegLng
  const dy = (lat - base.lat) * kmPerDegLat
  return {
    x: 50 + (dx / RANGE_KM) * RADIUS_PCT,
    y: 50 - (dy / RANGE_KM) * RADIUS_PCT,
    km: Math.hypot(dx, dy),
  }
}

const towns = serviceArea.towns
  .map((town) => ({ ...town, ...project(town.lat, town.lng) }))
  .filter((town) => town.km <= RANGE_KM)
  .sort((a, b) => a.km - b.km)

export function Zona() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="zona" className="overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-6 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
            Zona de servicio
          </p>
          <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            Estamos en <span className="text-brand-primary">Zizur Mayor</span>.
          </h2>
          <p className="leading-relaxed text-zinc-400">
            Desde Zizur Mayor llegamos rápido a{" "}
            <span className="font-medium text-white">
              Pamplona y toda su comarca
            </span>
            . ¿Estás en otra zona de Navarra?{" "}
            <span className="font-medium text-white">
              Llámanos y te lo confirmamos al momento.
            </span>
          </p>

          <ul
            className="flex flex-wrap gap-2"
            aria-label="Localidades cercanas"
          >
            {towns.map((town) => (
              <li key={town.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(town.name)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(town.name)}
                  onBlur={() => setActive(null)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    active === town.name
                      ? "border-brand-primary bg-brand-primary/15 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25"
                  )}
                >
                  {town.name}
                  <span className="ml-1.5 text-xs text-zinc-500">
                    {town.km < 1 ? "<1" : Math.round(town.km)} km
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg" variant="secondary">
              <a href={business.phone.href}>Consultar mi zona</a>
            </Button>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <HugeiconsIcon icon={Location01Icon} size={16} />
              {fullAddress}
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} />
            </a>
          </div>
        </div>

        {/* Radar (React Bits · Radar) con las localidades encima */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <Radar
            color="#0099d6"
            speed={0.6}
            scale={0.92}
            ringCount={4}
            spokeCount={8}
            targets={0}
            clutter={0.15}
            glow={0.9}
            gridOpacity={0.7}
            trail={0.4}
            grain={0}
            mouseInteraction={false}
          />

          <span className="pointer-events-none absolute top-[73%] left-[51%] -translate-y-1/2 pl-1 text-[11px] text-brand-primary/70">
            5 km
          </span>
          <span className="pointer-events-none absolute top-[96%] left-[51%] -translate-y-1/2 pl-1 text-[11px] whitespace-nowrap text-brand-primary/70">
            10 km
          </span>

          {towns.map((town) => (
            <span
              key={town.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${town.x}%`, top: `${town.y}%` }}
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  active === town.name
                    ? "size-3 bg-white shadow-[0_0_0_4px_rgba(0,153,214,0.5),0_0_18px_rgba(0,153,214,0.9)]"
                    : "size-2 bg-brand-primary/90 shadow-[0_0_10px_rgba(0,153,214,0.8)]"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-ink-900/90 px-2 py-0.5 text-xs font-medium whitespace-nowrap text-white ring-1 ring-white/10 transition-opacity",
                  active === town.name || town.name === "Pamplona"
                    ? "opacity-100"
                    : "opacity-0"
                )}
              >
                {town.name}
              </span>
            </span>
          ))}

          {/* Base: Zizur Mayor */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="animate-pulse-ring absolute inset-0 m-auto size-4 rounded-full bg-brand-primary motion-reduce:hidden" />
            <span className="relative flex size-4 items-center justify-center rounded-full bg-brand-primary ring-4 ring-brand-primary/30">
              <span className="size-1.5 rounded-full bg-white" />
            </span>
            <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-md bg-brand-primary px-2 py-0.5 text-xs font-semibold whitespace-nowrap text-brand-primary-foreground">
              akiMAT · Zizur Mayor
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
