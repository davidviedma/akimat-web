import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Bathtub01Icon,
  CheckmarkCircle02Icon,
  HeaterIcon,
  WaterPumpIcon,
} from "@hugeicons/core-free-icons"
import { serviceArt } from "@/components/illustrations"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { services, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const details: Record<string, { bullets: string[]; artClass: string }> = {
  fontaneria: {
    bullets: [
      "Fugas, atascos y averías",
      "Tuberías y acometidas nuevas",
      "Sanitarios, grifería y termos",
    ],
    artClass: "w-[72%]",
  },
  "aire-acondicionado": {
    bullets: [
      "Split, multisplit y conductos",
      "Bomba de calor: frío y calor",
      "Limpieza y mantenimiento",
    ],
    artClass: "w-[86%]",
  },
  "calderas-de-gas": {
    bullets: [
      "Cambio a caldera de condensación",
      "Reparación de averías",
      "Revisión y mantenimiento",
    ],
    artClass: "w-[42%]",
  },
}

const extras = [
  { icon: HeaterIcon, label: "Radiadores y calefacción" },
  { icon: Bathtub01Icon, label: "Reformas de baño" },
  { icon: WaterPumpIcon, label: "Termos y calentadores" },
]

const spotlight = {
  spotlightColor: "#0099d6",
  intensity: 0.22,
  borderGlow: 0.8,
  style: { "--spotlight-card-surface": "#0b1620" } as React.CSSProperties,
}

export function Servicios() {
  return (
    <section id="servicios" className="bg-ink-950 py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="mb-14 flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
            Nuestros servicios
          </p>
          <h2 className="max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            Agua, frío y calor:{" "}
            <span className="text-brand-primary">un solo equipo</span>.
          </h2>
          <p className="max-w-2xl leading-relaxed text-zinc-400">
            No hace falta llamar a tres profesionales distintos. En akiMAT nos
            ocupamos de toda la instalación de tu casa o negocio, de la primera
            visita al mantenimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Art = serviceArt[service.slug as keyof typeof serviceArt]
            const { bullets, artClass } = details[service.slug]
            return (
              <SpotlightCard
                key={service.slug}
                {...spotlight}
                className={cn(
                  "group flex flex-col gap-6 p-0!",
                  index === 2 && "md:col-span-2 lg:col-span-1"
                )}
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-3xl bg-[radial-gradient(circle_at_50%_65%,rgba(0,153,214,0.2),transparent_65%)]">
                  <Art
                    className={cn(
                      artClass,
                      "transition-transform duration-500 group-hover:scale-105"
                    )}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 px-7 pb-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <HugeiconsIcon icon={service.icon} size={22} />
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white xl:text-2xl">
                      {service.name}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-zinc-400">
                    {service.summary}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={17}
                          className="shrink-0 text-brand-primary"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${service.slug}`}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 font-semibold text-brand-primary transition-colors hover:text-white"
                  >
                    Ver {service.short.toLowerCase()}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </SpotlightCard>
            )
          })}
        </div>

        {/* Otros trabajos */}
        <div className="mt-4 flex flex-col gap-6 rounded-3xl border border-white/8 bg-ink-900 p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="flex flex-col gap-3">
            <p className="font-heading text-xl font-semibold text-white">
              ¿Necesitas algo más?
            </p>
            <ul className="flex flex-wrap gap-2">
              {extras.map(({ icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-300"
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={16}
                    className="text-brand-primary"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <Button asChild size="lg" className="w-fit">
            <a
              href={whatsappLink(
                "Hola akiMAT, quería consultaros un trabajo que no aparece en la web."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-4" />
              Consúltanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
