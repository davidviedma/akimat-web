import { HugeiconsIcon } from "@hugeicons/react"
import {
  Award01Icon,
  FlashIcon,
  Invoice01Icon,
  Timer02Icon,
} from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"
import { boilerSwap, business, serviceArea } from "@/lib/site"

// Cuatro datos de un vistazo, bajo la cabecera. Solo cosas que constan: el año
// y la flota salen de su rotulación; el tiempo del cambio de caldera lo da akiMAT.
const highlights = [
  {
    icon: Timer02Icon,
    title: `Caldera nueva en ${boilerSwap}`,
    text: "Te la cambiamos en el día",
  },
  {
    icon: Award01Icon,
    title: `Desde ${business.founded}`,
    text: `En ${serviceArea.summary}`,
  },
  {
    icon: FlashIcon,
    title: "Flota eléctrica",
    text: "Cero emisiones en cada visita",
  },
  {
    icon: Invoice01Icon,
    title: "Presupuesto sin compromiso",
    text: "Por WhatsApp o por teléfono",
  },
]

export function Destacados() {
  return (
    <section
      aria-label={`${business.name} en cuatro datos`}
      className="border-b border-line bg-white"
    >
      <ul className="container-x grid grid-cols-2 gap-x-4 gap-y-6 py-8 md:py-10 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-line">
        {highlights.map(({ icon, title, text }, i) => (
          <li key={title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <Reveal
              delay={i * 0.06}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-text sm:size-11">
                <HugeiconsIcon icon={icon} size={20} />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-heading text-[15px] leading-tight font-semibold text-ink sm:text-base">
                  {title}
                </span>
                <span className="hidden text-sm text-ink-soft sm:block">
                  {text}
                </span>
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
