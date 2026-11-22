import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { AuroraBackdrop } from "@/components/aurora-backdrop"
import { Reveal } from "@/components/reveal"

const facts = [
  { value: "1", label: "máquina para calefacción, frío y agua caliente" },
  { value: "3-4×", label: "más calor que la electricidad que consume" },
  { value: "R32", label: "equipos Kosner de bajo impacto" },
]

export function Aerotermia() {
  return (
    <section
      id="aerotermia"
      className="relative isolate overflow-hidden bg-ink py-20 text-white md:py-28"
    >
      {/* Resplandor fijo (calor a un lado, frío al otro) por si no hay WebGL
          y, encima, la aurora animada */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_10%_105%,rgba(215,31,38,0.3),transparent_70%),radial-gradient(60%_55%_at_90%_105%,rgba(0,153,214,0.32),transparent_70%)]"
      />
      <AuroraBackdrop className="absolute inset-0 -z-10" />

      <div className="container-x">
        <Reveal className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-white/70 uppercase">
            Aerotermia
          </p>
          <h2 className="max-w-5xl font-heading text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#ffb08a] to-[#ff5d52] bg-clip-text text-transparent">
              Calor
            </span>{" "}
            en invierno,{" "}
            <span className="bg-gradient-to-r from-[#9be4ff] to-brand-primary bg-clip-text text-transparent">
              frío
            </span>{" "}
            en verano y agua caliente todo el año.
          </h2>
          <Link
            href="/aerotermia"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90"
          >
            Cómo funciona
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </Link>
        </Reveal>

        {/* Tarjetas de cristal sobre la aurora */}
        <dl className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-16 md:gap-4">
          {facts.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-2 rounded-3xl border border-white/15 bg-ink/45 p-6 backdrop-blur-xl transition-colors hover:border-white/30 md:p-7">
                <dt className="bg-gradient-to-br from-white to-brand-primary bg-clip-text font-heading text-5xl font-bold text-transparent md:text-6xl">
                  {value}
                </dt>
                <dd className="text-sm text-white/75 md:text-[15px]">
                  {label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
