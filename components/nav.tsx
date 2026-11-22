"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Call02Icon,
  Cancel01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, services, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

// Secciones de la portada, en el orden en que aparecen.
const links = [
  { label: "Servicios", id: "servicios" },
  { label: "Nosotros", id: "nosotros" },
  { label: "Trabajos", id: "trabajos" },
  { label: "Opiniones", id: "opiniones" },
  { label: "Contacto", id: "contacto" },
]

// Secciones que cuentan para resaltar un enlace. "presupuesto" no tiene enlace
// (tiene el botón): al llegar a ella deja de resaltarse "Opiniones".
const tracked = [
  ...links.map(({ id }) => ({ id, link: id })),
  { id: "presupuesto", link: "" },
]

/**
 * Barra de navegación tipo "isla", como la de la web de Iruman: una píldora
 * flotante que aparece recogida (solo el logo) y se despliega. El despliegue
 * es una animación CSS (`.island` en globals.css), así que los enlaces están
 * en el HTML y funcionan aunque no cargue el JavaScript.
 */
export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState("")
  const root = useRef<HTMLDivElement>(null)

  // En la portada se resalta la sección que se está viendo.
  useEffect(() => {
    if (pathname !== "/") return
    const onScroll = () => {
      const threshold = window.innerHeight * 0.35
      // Gana la sección más baja que ya ha pasado el umbral.
      let current = ""
      let lowest = -Infinity
      for (const { id, link } of tracked) {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        if (top !== undefined && top <= threshold && top > lowest) {
          lowest = top
          current = link
        }
      }
      setSection(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  // El desplegable del móvil se cierra con Escape o al tocar fuera.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("pointerdown", onPointer)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("pointerdown", onPointer)
    }
  }, [open])

  // En las páginas de servicio se resalta "Servicios".
  const active =
    pathname === "/"
      ? section
      : services.some(({ slug }) => pathname === `/${slug}`)
        ? "servicios"
        : ""

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 md:top-4">
      <div
        ref={root}
        className="pointer-events-auto relative flex flex-col items-center"
      >
        {/* ── La isla ── */}
        <header className="island flex h-14 max-w-[calc(100vw-1.5rem)] items-center overflow-hidden rounded-full border border-white/10 bg-ink/90 text-white shadow-[0_4px_32px_rgba(0,0,0,0.28),0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-2xl [--island-closed:8.25rem] [--island-open:11.25rem] lg:h-[3.75rem] lg:[--island-closed:9.25rem] lg:[--island-open:50rem] xl:[--island-open:59.5rem]">
          <Link
            href="/"
            aria-label={`${business.name}, ir al inicio`}
            onClick={() => setOpen(false)}
            className="flex h-full shrink-0 items-center pr-5 pl-6 lg:pr-6 lg:pl-7"
          >
            <Logo tagline={false} className="w-[5.5rem] lg:w-24" />
          </Link>

          {/* Lo que aparece al abrirse. Va en un solo bloque para que el
              fundido no se repita al cambiar de tamaño la ventana. */}
          <div className="island-content flex min-w-0 flex-1 items-center">
            <nav
              aria-label="Navegación principal"
              className="hidden flex-1 justify-center lg:flex"
            >
              <ul className="flex items-center gap-0.5">
                {links.map(({ label, id }) => (
                  <li key={id}>
                    <Link
                      href={`/#${id}`}
                      aria-current={active === id ? "true" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 text-[15px] whitespace-nowrap transition-colors",
                        active === id
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden shrink-0 items-center gap-1 pr-2 lg:flex">
              <a
                href={business.phone.href}
                className="hidden items-center gap-2 rounded-full px-3 py-2 text-[15px] font-semibold whitespace-nowrap tabular-nums transition-colors hover:bg-white/10 xl:inline-flex"
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={17}
                  className="text-brand-primary"
                />
                {business.phone.display}
              </a>
              <Link
                href="/#presupuesto"
                className="inline-flex h-11 items-center rounded-full bg-brand-primary px-5 text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-primary-hover"
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
              className="mr-2 ml-auto flex size-10 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu01Icon}
                size={20}
              />
            </button>
          </div>
        </header>

        {/* ── Desplegable del móvil ── */}
        <div
          id="menu-movil"
          className={cn(
            "absolute top-full mt-2 flex w-64 origin-top flex-col gap-0.5 rounded-3xl border border-white/10 bg-ink/95 p-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300 lg:hidden",
            open
              ? "visible translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none invisible -translate-y-1 scale-y-95 opacity-0"
          )}
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-0.5">
            {links.map(({ label, id }) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "rounded-2xl px-4 py-2.5 text-[15px] transition-colors",
                  active === id
                    ? "bg-white/10 text-white"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href={whatsappLink("Hola akiMAT, me gustaría pedir presupuesto.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1.5 inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-brand-primary text-[15px] font-semibold text-white transition-colors hover:bg-brand-primary-hover"
          >
            <WhatsAppIcon className="size-4" />
            Pedir presupuesto
          </a>
          <div className="mt-0.5 grid grid-cols-2 gap-1">
            {[business.phone, business.mobile].map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-2xl bg-white/[0.06] text-[13px] font-semibold tabular-nums transition-colors hover:bg-white/10"
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={14}
                  className="text-brand-primary"
                />
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
