import Link from "next/link"
import type { ComponentType, ReactNode } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import { DotGlow } from "@/components/dot-glow"
import { steps as defaultSteps } from "@/components/sections/proceso"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { SITE_URL, business, services } from "@/lib/site"
import { cn } from "@/lib/utils"

export type Faq = { question: string; answer: string }
export type Feature = { icon: IconSvgElement; title: string; text: string }

export function Section({
  children,
  tone = "dark",
  className,
  id,
}: {
  children: ReactNode
  tone?: "dark" | "darker"
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        tone === "dark" ? "bg-ink-900" : "bg-ink-950",
        "py-16 lg:py-24",
        className
      )}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({
  label,
  title,
  highlight,
  intro,
  end = ".",
}: {
  label: string
  title: string
  highlight: string
  intro?: ReactNode
  /** Signo final del título ("." por defecto, "?" en preguntas). */
  end?: string
}) {
  return (
    <div className="mb-12 flex max-w-2xl flex-col gap-3">
      <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
        {label}
      </p>
      <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
        {title} <span className="text-brand-primary">{highlight}</span>
        {end}
      </h2>
      {intro && <p className="leading-relaxed text-zinc-400">{intro}</p>}
    </div>
  )
}

function CtaButtons({
  whatsapp,
  light = false,
}: {
  whatsapp: { label: string; href: string }
  light?: boolean
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="xl">
        <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="size-5" />
          {whatsapp.label}
        </a>
      </Button>
      <Button
        asChild
        size="xl"
        variant={light ? "default" : "secondary"}
        className={light ? "bg-ink-950 text-white hover:bg-ink-900" : undefined}
      >
        <a href={business.phone.href}>
          <HugeiconsIcon icon={Call02Icon} size={20} />
          {business.phone.display}
        </a>
      </Button>
    </div>
  )
}

export function LandingHero({
  label,
  title,
  highlight,
  subtitle,
  whatsapp,
  checks,
  Art,
  artClass,
  badge,
}: {
  label: string
  title: string
  highlight: string
  subtitle: string
  whatsapp: { label: string; href: string }
  checks: string[]
  Art: ComponentType<{ className?: string }>
  artClass?: string
  badge?: { title: string; text: string }
}) {
  return (
    <DotGlow className="bg-ink-950">
      <div className="relative container mx-auto grid grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 sm:px-12 lg:grid-cols-2 lg:px-16 lg:pt-40 lg:pb-24 xl:px-24">
        <div className="flex flex-col gap-6">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 text-sm text-zinc-500"
          >
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-zinc-300"
            >
              Inicio
            </Link>
            <span aria-hidden>/</span>
            <span className="text-zinc-300">{label}</span>
          </nav>
          <h1 className="font-heading text-4xl leading-[1.08] font-bold tracking-tight text-white md:text-5xl xl:text-[3.6rem]">
            {title} <span className="text-brand-primary">{highlight}</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            {subtitle}
          </p>
          <CtaButtons whatsapp={whatsapp} />
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={18}
                  className="text-brand-primary"
                />
                {check}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 bg-[radial-gradient(circle_at_50%_55%,rgba(0,153,214,0.28),transparent_62%)] lg:aspect-auto lg:h-[520px]">
          <Art className={cn("w-[70%]", artClass)} />
          {badge && (
            <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/10 bg-ink-950/85 px-5 py-4 backdrop-blur sm:right-auto">
              <p className="font-bold text-white">{badge.title}</p>
              <p className="text-sm text-zinc-400">{badge.text}</p>
            </div>
          )}
        </div>
      </div>
    </DotGlow>
  )
}

const trustStats = [
  { value: "Zizur Mayor", label: "a un paso de Pamplona" },
  { value: "3 en 1", label: "fontanería, clima y calefacción" },
  { value: "Sin compromiso", label: "presupuesto claro antes de empezar" },
  { value: "Desde las 8:00", label: "de lunes a viernes" },
]

export function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-ink-900">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-6 py-8 sm:px-12 lg:grid-cols-4 lg:px-16 xl:px-24">
        {trustStats.map(({ value, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <p className="font-heading text-xl font-bold text-white md:text-2xl">
              {value}
            </p>
            <p className="text-sm text-zinc-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: Feature[]
  columns?: 2 | 3 | 4
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4"
      )}
    >
      {items.map(({ icon, title, text }) => (
        <SpotlightCard
          key={title}
          spotlightColor="#0099d6"
          intensity={0.2}
          borderGlow={0.8}
          className="flex flex-col gap-4 p-6!"
          style={
            { "--spotlight-card-surface": "#08111a" } as React.CSSProperties
          }
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <HugeiconsIcon icon={icon} size={24} />
          </span>
          <h3 className="font-heading text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
        </SpotlightCard>
      ))}
    </div>
  )
}

export function Steps({
  steps = defaultSteps,
}: {
  steps?: { title: string; text: string }[]
}) {
  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map(({ title, text }, i) => (
        <li
          key={title}
          className="relative flex flex-col gap-3 rounded-3xl border border-white/8 bg-ink-900 p-6"
        >
          <span className="font-heading text-5xl leading-none font-bold text-brand-primary">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">{text}</p>
        </li>
      ))}
    </ol>
  )
}

export function Callout({
  icon,
  title,
  children,
  tone = "brand",
}: {
  icon: IconSvgElement
  title: string
  children: ReactNode
  tone?: "brand" | "warning"
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-3xl border p-6 sm:flex-row sm:items-start",
        tone === "brand"
          ? "border-brand-primary/40 bg-brand-primary/10"
          : "border-amber-400/40 bg-amber-400/10"
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-xl",
          tone === "brand"
            ? "bg-brand-primary text-brand-primary-foreground"
            : "bg-amber-400 text-ink-950"
        )}
      >
        <HugeiconsIcon icon={icon} size={24} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="font-heading text-lg font-semibold text-white">{title}</p>
        <div className="leading-relaxed text-zinc-300">{children}</div>
      </div>
    </div>
  )
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      {faqs.map(({ question, answer }) => (
        <details
          key={question}
          className="group rounded-2xl border border-white/8 bg-ink-950 open:border-white/15"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold text-white md:text-lg">
              {question}
            </span>
            <span className="shrink-0 text-2xl leading-none font-light text-white transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-zinc-400">{answer}</p>
        </details>
      ))}
    </div>
  )
}

export function FinalCta({
  title,
  text,
  whatsapp,
  currentSlug,
}: {
  title: string
  text: string
  whatsapp: { label: string; href: string }
  currentSlug: string
}) {
  const otherServices = services.filter(
    (service) => service.slug !== currentSlug
  )

  return (
    <Section tone="dark">
      <div className="flex flex-col gap-6 rounded-[2rem] bg-brand-primary px-8 py-12 md:px-16 md:py-16">
        <h2 className="max-w-3xl font-heading text-3xl leading-tight font-bold tracking-tight text-brand-primary-foreground md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-brand-primary-foreground/85">
          {text}
        </p>
        <CtaButtons whatsapp={whatsapp} light />
      </div>

      <div className="mt-16 flex flex-col gap-6">
        <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
          Otros servicios
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {otherServices.map(({ slug, name, summary, icon }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="group flex items-start gap-4 rounded-3xl border border-white/8 bg-ink-950 p-6 transition-colors duration-300 hover:border-brand-primary"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <HugeiconsIcon icon={icon} size={24} />
              </span>
              <span className="flex flex-col gap-1">
                <span className="inline-flex items-center gap-1 font-heading text-lg font-semibold text-white transition-colors duration-300 group-hover:text-brand-primary">
                  {name}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="text-sm leading-relaxed text-zinc-400">
                  {summary}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function ServiceJsonLd({
  slug,
  name,
  description,
  faqs,
}: {
  slug: string
  name: string
  description: string
  faqs: Faq[]
}) {
  const url = `${SITE_URL}/${slug}`
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType: name,
        description,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "Zizur Mayor" },
          { "@type": "City", name: "Pamplona" },
          { "@type": "AdministrativeArea", name: "Navarra" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  )
}
