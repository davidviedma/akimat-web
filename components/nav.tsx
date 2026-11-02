"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Call02Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Trabajos", href: "/#trabajos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
]

/**
 * Barra superior. Sobre una foto (`onPhoto`) empieza en blanco y, al hacer
 * scroll, pasa a fondo blanco translúcido con texto negro.
 */
export function Nav({ onPhoto = true }: { onPhoto?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const light = onPhoto && !scrolled && !open

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-300",
          light
            ? "border-b border-transparent text-white"
            : "border-b border-line bg-white/85 text-ink backdrop-blur-xl",
          open && "bg-white"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            aria-label="akiMAT, ir al inicio"
            className="shrink-0"
            onClick={() => setOpen(false)}
          >
            <Logo tagline={false} className="w-28 md:w-32" />
          </Link>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                      light ? "hover:bg-white/15" : "hover:bg-paper-2"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={business.phone.href}
              className={cn(
                "hidden items-center gap-2 rounded-full px-4 py-2 text-[15px] font-semibold tabular-nums transition-colors lg:inline-flex",
                light ? "hover:bg-white/15" : "hover:bg-paper-2"
              )}
            >
              <HugeiconsIcon icon={Call02Icon} size={17} />
              {business.phone.display}
            </a>
            <Link
              href="/#presupuesto"
              className="inline-flex h-10 items-center rounded-full bg-brand-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-primary-hover"
            >
              Presupuesto
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            className={cn(
              "flex size-11 items-center justify-center rounded-full transition-colors md:hidden",
              light ? "hover:bg-white/15" : "hover:bg-paper-2"
            )}
          >
            <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={22} />
          </button>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-white px-6 pt-24 pb-8 transition-all duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none invisible opacity-0"
        )}
      >
        <nav aria-label="Navegación móvil" className="flex flex-col">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={cn(
                "border-b border-line py-4 font-heading text-3xl font-semibold text-ink transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href={whatsappLink("Hola akiMAT, me gustaría pedir presupuesto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-ink text-base font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Pedir presupuesto
          </a>
          <div className="grid grid-cols-2 gap-3">
            {[business.phone, business.mobile].map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line text-[15px] font-semibold text-ink tabular-nums"
              >
                <HugeiconsIcon icon={Call02Icon} size={16} />
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
