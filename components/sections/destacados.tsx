import { Counter } from "@/components/counter"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, serviceArea, whatsappLink } from "@/lib/site"

// Las cifras de akiMAT, en grande, pegadas a la cabecera. Solo cosas que
// constan: los años y la flota salen de su rotulación; el tiempo del cambio de
// caldera lo da akiMAT y siempre se dice "de media".
const stats = [
  {
    prefix: "+",
    value: business.experienceYears,
    unit: "",
    label: "años de experiencia",
    text: `Desde ${business.founded} en ${serviceArea.summary}`,
  },
  {
    prefix: "",
    value: business.boilerSwapHours,
    unit: "h",
    label: "de media en cambiar una caldera",
    text: "El mismo día tienes calefacción",
  },
  {
    prefix: "",
    value: 100,
    unit: "%",
    label: "flota eléctrica",
    text: "Cero emisiones en cada visita",
  },
]

export function Destacados() {
  return (
    <section
      aria-label={`${business.name} en cifras`}
      className="border-t border-white/10 bg-ink py-12 text-white md:py-16"
    >
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[repeat(3,1fr)_1.15fr] lg:items-stretch lg:gap-0">
        <dl className="contents">
          {stats.map(({ prefix, value, unit, label, text }, i) => (
            <Reveal
              key={label}
              delay={i * 0.08}
              className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-3 lg:border-l lg:border-white/10 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="min-w-[8.75rem] font-heading text-6xl leading-none font-bold tracking-tight whitespace-nowrap tabular-nums lg:min-w-0 lg:text-7xl">
                {prefix && <span className="text-brand-primary">{prefix}</span>}
                <Counter to={value} />
                {unit && (
                  <span className="ml-1.5 text-[0.55em] text-brand-primary">
                    {unit}
                  </span>
                )}
              </dt>
              <dd className="flex flex-col gap-1">
                <span className="font-heading text-lg leading-snug font-semibold lg:text-xl">
                  {label}
                </span>
                <span className="text-sm text-white/60">{text}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* Y, para cerrar, la forma de pedirlo */}
        <Reveal delay={0.24} className="lg:self-center lg:pl-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/[0.06] p-6">
            <p className="flex flex-col gap-1">
              <span className="font-heading text-xl leading-snug font-semibold">
                Presupuesto sin compromiso
              </span>
              <span className="text-sm text-white/60">
                Por WhatsApp o por teléfono
              </span>
            </p>
            <Button asChild variant="light" size="lg" className="w-full">
              <a
                href={whatsappLink(
                  "Hola akiMAT, me gustaría pedir presupuesto."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" />
                Pedir presupuesto
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
