import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Call02Icon,
  Clock01Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"
import { business, fullAddress, serviceArea } from "@/lib/site"

export function Contacto() {
  return (
    <section id="contacto" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
              Dónde estamos
            </p>
            <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
              En Mutilva, a un paso de Pamplona.
            </h2>
            <p className="max-w-md text-ink-soft">
              Trabajamos en {serviceArea.summary}. Si estás en otra zona de
              Navarra, pregúntanos.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            <div className="flex gap-4 bg-white p-6">
              <HugeiconsIcon
                icon={Location01Icon}
                size={22}
                className="shrink-0 text-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  Dirección
                </dt>
                <dd className="text-[15px] leading-snug text-ink">
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-text"
                  >
                    {fullAddress}
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={14}
                      className="ml-1 inline align-baseline"
                    />
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6">
              <HugeiconsIcon
                icon={Call02Icon}
                size={22}
                className="shrink-0 text-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  Teléfonos
                </dt>
                <dd className="flex flex-col text-[15px] text-ink tabular-nums">
                  <a
                    href={business.phone.href}
                    className="hover:text-brand-text"
                  >
                    {business.phone.display}
                  </a>
                  <a
                    href={business.mobile.href}
                    className="hover:text-brand-text"
                  >
                    {business.mobile.display}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6">
              <HugeiconsIcon
                icon={Mail01Icon}
                size={22}
                className="shrink-0 text-brand-primary"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <dt className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  Email
                </dt>
                <dd className="text-[15px] break-all text-ink">
                  <a
                    href={`mailto:${business.email}`}
                    className="hover:text-brand-text"
                  >
                    {business.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6">
              <HugeiconsIcon
                icon={Clock01Icon}
                size={22}
                className="shrink-0 text-brand-primary"
              />
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-semibold tracking-wider text-ink-soft uppercase">
                  Horario
                </dt>
                <dd className="flex flex-col text-[15px] text-ink">
                  {business.hours.map(({ days, time }) => (
                    <span key={days}>
                      {days}: <span className="text-ink-soft">{time}</span>
                    </span>
                  ))}
                </dd>
              </div>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
