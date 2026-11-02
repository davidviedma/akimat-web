import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"

const facts = [
  { value: "1", label: "máquina para calefacción, frío y agua caliente" },
  { value: "3-4×", label: "más calor que la electricidad que consume" },
  { value: "R32", label: "equipos Kosner de bajo impacto" },
]

export function Aerotermia() {
  return (
    <section id="aerotermia" className="bg-ink py-16 text-white md:py-24">
      <div className="container-x">
        <Reveal className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
              Aerotermia
            </p>
            <h2 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
              Calor en invierno, frío en verano y agua caliente todo el año.
            </h2>
            <Link
              href="/aerotermia"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-white/90"
            >
              Cómo funciona
              <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
            </Link>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {facts.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1 bg-ink p-6">
                <dt className="font-heading text-4xl font-bold text-brand-primary">
                  {value}
                </dt>
                <dd className="text-sm text-white/70">{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
