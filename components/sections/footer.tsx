import Link from "next/link"
import { Logo } from "@/components/logo"
import { business, fullAddress, serviceArea, services } from "@/lib/site"

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/politica-de-privacidad" },
  { label: "Cookies", href: "/politica-de-cookies" },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="akiMAT, ir al inicio" className="w-fit">
              <Logo className="w-44" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Fontanería, calderas, aerotermia y aire acondicionado. Desde{" "}
              {business.founded} en {serviceArea.summary}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Servicios
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/${slug}`}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
              Contacto
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/80">
              <li>
                <a
                  href={business.phone.href}
                  className="tabular-nums hover:text-white"
                >
                  {business.phone.display}
                </a>
                <span className="text-white/30"> · </span>
                <a
                  href={business.mobile.href}
                  className="tabular-nums hover:text-white"
                >
                  {business.mobile.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="break-all hover:text-white"
                >
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-white"
                >
                  {fullAddress}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-white/40">
          Trabajamos en {serviceArea.towns.join(", ")} y resto de Navarra.
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName} · CIF{" "}
            {business.cif}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-white"
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
