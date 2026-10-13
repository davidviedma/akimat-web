import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Call02Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, fullAddress, services, whatsappLink } from "@/lib/site"

const navLinks = [
  { label: "Por qué akiMAT", href: "/#nosotros" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Pide presupuesto", href: "/#presupuesto" },
  { label: "Zona de servicio", href: "/#zona" },
  { label: "Preguntas frecuentes", href: "/#dudas" },
]

const serviceLinks = services.map(({ name, slug }) => ({
  label: name,
  href: `/${slug}`,
}))

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
]

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <li key={href + label}>
            <Link
              href={href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/5 bg-ink-950">
      {/* Llamada a la acción */}
      <div className="container mx-auto px-6 pt-16 sm:px-12 lg:px-16 xl:px-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-ink-900 px-7 py-12 sm:px-12 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-32 size-96 rounded-full bg-brand-primary/20 blur-3xl"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl">
                ¿Hablamos? Cuéntanos{" "}
                <span className="text-brand-primary">qué necesitas</span>.
              </h2>
              <p className="leading-relaxed text-zinc-400">
                Te respondemos lo antes posible y, si hace falta, vamos a verlo
                sin compromiso.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button asChild size="xl">
                <a
                  href={whatsappLink(
                    "Hola akiMAT, me gustaría hacer una consulta."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="xl" variant="secondary">
                <a href={business.phone.href}>
                  <HugeiconsIcon icon={Call02Icon} size={20} />
                  {business.phone.display}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 xl:grid-cols-[1.4fr_1fr_1fr_1.4fr] xl:gap-12">
          {/* Marca */}
          <div className="col-span-2 flex flex-col gap-5 xl:col-span-1">
            <Link
              href="/"
              aria-label="akiMAT, ir al inicio"
              className="w-fit text-white"
            >
              <Logo className="w-48" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Fontanería, aire acondicionado y calderas de gas en Zizur Mayor,
              Pamplona y comarca.
            </p>
            {business.socials.length > 0 && (
              <div className="flex items-center gap-4">
                {business.socials.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <LinkColumn title="Navegación" links={navLinks} />
          <LinkColumn title="Servicios" links={serviceLinks} />

          {/* Contacto */}
          <div className="col-span-2 flex flex-col gap-5 xl:col-span-1">
            <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
              Contacto
            </p>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li>
                <a
                  href={business.phone.href}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <HugeiconsIcon
                    icon={Call02Icon}
                    size={16}
                    className="text-brand-primary"
                  />
                  {business.phone.display}
                  <span className="text-zinc-600">·</span>
                  {business.mobile.display}
                </a>
              </li>
              {business.email && (
                <li>
                  <a
                    href={`mailto:${business.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={16}
                      className="text-brand-primary"
                    />
                    {business.email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 leading-snug transition-colors hover:text-white"
                >
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-primary"
                  />
                  <span>
                    {fullAddress}
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={13}
                      className="ml-1 inline align-baseline"
                    />
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-0.5 pt-1">
                {business.hours.map(({ days, time }) => (
                  <span key={days}>
                    <span className="text-zinc-300">{days}:</span> {time}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {business.legalName} · CIF{" "}
            {business.cif}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
