import { HugeiconsIcon } from "@hugeicons/react"
import {
  CleanIcon,
  Invoice01Icon,
  Location01Icon,
  TeamWorkIcon,
} from "@hugeicons/core-free-icons"

const reasons = [
  {
    icon: TeamWorkIcon,
    title: "Todo en uno",
    text: "Fontanería, aire acondicionado y calefacción con el mismo equipo. Un solo interlocutor y un solo presupuesto para toda la obra.",
  },
  {
    icon: Invoice01Icon,
    title: "Presupuesto claro",
    text: "Te explicamos qué hay que hacer y cuánto cuesta antes de empezar. Sin compromiso y sin sorpresas en la factura.",
  },
  {
    icon: Location01Icon,
    title: "Cerca de ti",
    text: "Estamos en Zizur Mayor, así que llegamos rápido a Pamplona y a toda la comarca.",
  },
  {
    icon: CleanIcon,
    title: "Trabajo limpio",
    text: "Protegemos tu casa mientras trabajamos y la dejamos recogida al terminar. Y te explicamos cómo usar y cuidar la instalación.",
  },
]

function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute size-6 border-zinc-700 transition-colors duration-300 group-hover:border-brand-primary ${className}`}
    />
  )
}

export function PorQue() {
  return (
    <section id="nosotros" className="relative z-10 bg-ink-950 pb-4 lg:pb-8">
      <div className="w-full px-4 lg:px-8">
        <div className="w-full rounded-[2.5rem] bg-ink-900 p-8 shadow-[0_-24px_60px_-10px_rgba(0,0,0,0.9)] sm:p-12 lg:p-16">
          <div className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
                Por qué akiMAT
              </p>
              <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
                Servicios integrales,{" "}
                <span className="text-brand-primary">de verdad</span>.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              akiMAT es una empresa de{" "}
              <span className="font-medium text-white">
                Zizur Mayor (Navarra)
              </span>{" "}
              dedicada a la fontanería, la climatización y la calefacción. Nos
              gusta hacer las cosas bien, explicarlas claro y que nos vuelvas a
              llamar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon, title, text }) => (
              <div
                key={title}
                className="group relative flex flex-col gap-4 p-7"
              >
                <Corner className="top-0 left-0 border-t-2 border-l-2" />
                <Corner className="top-0 right-0 border-t-2 border-r-2" />
                <Corner className="bottom-0 left-0 border-b-2 border-l-2" />
                <Corner className="right-0 bottom-0 border-r-2 border-b-2" />

                <HugeiconsIcon
                  icon={icon}
                  size={30}
                  className="text-brand-primary"
                />
                <h3 className="font-heading text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="leading-relaxed text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
