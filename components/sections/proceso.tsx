import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar03Icon,
  Message01Icon,
  Settings01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"

export const steps = [
  {
    icon: Message01Icon,
    title: "Nos cuentas qué necesitas",
    text: "Por teléfono, WhatsApp o con el formulario. Si puedes, mándanos una foto: nos ayuda a ir preparados.",
  },
  {
    icon: Calendar03Icon,
    title: "Visita y presupuesto",
    text: "Vamos a verlo, te asesoramos sobre la mejor solución y te damos un presupuesto claro y sin compromiso.",
  },
  {
    icon: Wrench01Icon,
    title: "Hacemos el trabajo",
    text: "El día acordado, con materiales de calidad y cuidando tu casa. Al terminar lo dejamos todo funcionando y recogido.",
  },
  {
    icon: Settings01Icon,
    title: "Seguimos contigo",
    text: "Revisiones y mantenimiento para que tu instalación funcione bien y dure muchos años.",
  },
]

export function Proceso() {
  return (
    <section id="proceso" className="bg-ink-950 py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="mb-14 flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
            Cómo trabajamos
          </p>
          <h2 className="max-w-3xl font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            De tu llamada a la instalación{" "}
            <span className="text-brand-primary">funcionando</span>.
          </h2>
        </div>

        <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Línea que une los pasos */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[3.25rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-brand-primary/0 via-brand-primary/50 to-brand-primary/0 lg:block"
          />
          {steps.map(({ icon, title, text }, i) => (
            <li
              key={title}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/8 bg-ink-900 p-7 transition-colors duration-300 hover:border-brand-primary/60"
            >
              <div className="flex items-center justify-between">
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-brand-primary text-brand-primary-foreground shadow-[0_0_30px_-4px_rgba(0,153,214,0.7)]">
                  <HugeiconsIcon icon={icon} size={22} />
                </span>
                <span className="font-heading text-5xl leading-none font-bold text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
