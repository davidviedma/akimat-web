"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const links = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Zona", href: "/#zona" },
  { label: "Dudas", href: "/#dudas" },
  { label: "Contacto", href: "/#contacto" },
]

const sectionIds = [
  "servicios",
  "proceso",
  "presupuesto",
  "zona",
  "dudas",
  "contacto",
]

export function Nav() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // La isla se abre sola al poco de cargar, o en cuanto el usuario hace
  // scroll o pasa el ratón; una vez abierta se queda abierta.
  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 600)
    const onScroll = () => {
      if (window.scrollY > 24) setExpanded(true)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.3
      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) current = id
      }
      setActiveSection(current)
    }

    const frame = requestAnimationFrame(onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const isLinkActive = (href: string) =>
    href.startsWith("/#")
      ? pathname === "/" && activeSection === href.slice(2)
      : pathname.startsWith(href)

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto relative flex flex-col items-center">
        {/* ── La isla ── */}
        <nav
          aria-label="Navegación principal"
          data-expanded={expanded}
          onMouseEnter={() => setExpanded(true)}
          onFocus={() => setExpanded(true)}
          className={cn(
            "relative flex h-15 w-[156px] items-center overflow-hidden rounded-full",
            "border border-white/10 bg-ink-900/85 backdrop-blur-2xl",
            "shadow-[0_4px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.06)_inset]",
            "transition-[width] duration-[420ms] ease-[cubic-bezier(0.34,1.36,0.64,1)]",
            "data-[expanded=true]:w-[208px] md:data-[expanded=true]:w-[800px] lg:data-[expanded=true]:w-[880px]"
          )}
        >
          <Link
            href="/"
            aria-label="akiMAT, ir al inicio"
            className={cn(
              "flex shrink-0 items-center text-white",
              expanded ? "pr-3 pl-6" : "px-[22px]",
              "transition-[padding] duration-[420ms] ease-[cubic-bezier(0.34,1.36,0.64,1)]"
            )}
          >
            <Logo tagline={false} className="w-[112px]" />
          </Link>

          {/* Enlaces — escritorio */}
          <ul
            className={cn(
              "hidden flex-1 items-center justify-center gap-0.5 md:flex",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[15px] whitespace-nowrap transition-colors lg:px-4",
                    isLinkActive(link.href)
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — escritorio */}
          <div
            className={cn(
              "hidden shrink-0 pr-1.5 md:flex",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            <Link
              href="/#presupuesto"
              className="inline-flex h-11 items-center rounded-full bg-brand-primary px-5 text-[15px] font-semibold whitespace-nowrap text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover"
            >
              Pide presupuesto
            </Link>
          </div>

          {/* Hamburguesa — móvil */}
          <div
            className={cn(
              "ml-auto flex shrink-0 pr-2.5 md:hidden",
              "transition-opacity duration-200",
              expanded
                ? "opacity-100 delay-150"
                : "pointer-events-none opacity-0 delay-0"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-movil"
              className="flex size-10 items-center justify-center rounded-full text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu01Icon}
                size={18}
              />
            </button>
          </div>
        </nav>

        {/* ── Menú desplegable móvil ── */}
        <div
          id="menu-movil"
          className={cn(
            "absolute top-full mt-2 w-56 overflow-hidden rounded-2xl md:hidden",
            "border border-white/10 bg-ink-900/95 backdrop-blur-2xl",
            "shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
            "flex flex-col gap-0.5 p-1.5",
            "origin-top transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
              : "pointer-events-none invisible -translate-y-1 scale-y-95 opacity-0"
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-3 py-2.5 text-sm transition-colors",
                isLinkActive(link.href)
                  ? "bg-white/10 text-white"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#presupuesto"
            onClick={() => setOpen(false)}
            className="mt-0.5 rounded-xl bg-brand-primary px-3 py-2.5 text-center text-sm font-semibold text-brand-primary-foreground transition-colors hover:bg-brand-primary-hover"
          >
            Pide presupuesto
          </Link>
        </div>
      </div>
    </div>
  )
}
