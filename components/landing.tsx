import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Call02Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import BlurText from "@/components/reactbits/BlurText"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { SITE_URL, business, services, type Photo } from "@/lib/site"
import { cn } from "@/lib/utils"

export type Faq = { question: string; answer: string }
export type Feature = { icon: IconSvgElement; title: string; text: string }

/* ── Cabecera de página de servicio: foto a sangre y un titular ── */

export function ServiceHero({
  label,
  title,
  subtitle,
  photo,
  art,
  whatsapp,
  checks,
}: {
  label: string
  title: string
  subtitle: string
  photo?: { src: string; alt: string; position?: string }
  /** Ilustración para cuando todavía no hay foto */
  art?: ReactNode
  whatsapp: string
  checks: string[]
}) {
  return (
    <section className="relative isolate flex min-h-[78svh] flex-col justify-end overflow-hidden bg-ink text-white">
      {photo ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: photo.position ?? "50% 50%" }}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(80%_70%_at_75%_40%,rgba(0,153,214,0.35),transparent_65%)]"
        />
      )}
      {art && (
        <div className="pointer-events-none absolute inset-x-0 top-24 flex justify-center md:top-1/2 md:right-[8%] md:left-auto md:w-[42%] md:-translate-y-1/2">
          {art}
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/15"
      />

      <div className="relative z-10 container-x flex flex-col gap-6 pt-44 pb-12 md:pb-16">
        <nav
          aria-label="Ruta de navegación"
          className="flex items-center gap-2 text-sm text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Inicio
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white">{label}</span>
        </nav>
        <BlurText
          as="h1"
          text={title}
          animateBy="words"
          direction="bottom"
          delay={70}
          className="max-w-4xl font-heading text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl"
        />
        <p className="max-w-xl text-lg text-white/80">{subtitle}</p>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          <Button asChild variant="light" size="xl">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Pedir presupuesto
            </a>
          </Button>
          <a
            href={business.phone.href}
            className="inline-flex items-center gap-2 text-lg font-semibold tabular-nums transition-opacity hover:opacity-80"
          >
            <HugeiconsIcon
              icon={Call02Icon}
              size={19}
              className="text-brand-primary"
            />
            {business.phone.display}
          </a>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {checks.map((check) => (
            <li
              key={check}
              className="flex items-center gap-2 text-sm text-white/85"
            >
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                size={17}
                className="text-brand-primary"
              />
              {check}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Bloques ── */

export function Section({
  children,
  tone = "white",
  className,
  id,
}: {
  children: ReactNode
  tone?: "white" | "soft" | "ink"
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        tone === "white" && "bg-white",
        tone === "soft" && "bg-paper-2",
        tone === "ink" && "bg-ink text-white",
        "py-16 md:py-24",
        className
      )}
    >
      <div className="container-x">{children}</div>
    </section>
  )
}

export function SectionHeading({
  label,
  title,
  intro,
}: {
  label: string
  title: string
  intro?: ReactNode
}) {
  return (
    <Reveal className="mb-10 flex max-w-2xl flex-col gap-3 md:mb-12">
      <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
        {label}
      </p>
      <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro && <p className="text-ink-soft">{intro}</p>}
    </Reveal>
  )
}

export function FeatureGrid({
  items,
  columns = 4,
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
      {items.map(({ icon, title, text }, i) => (
        <Reveal key={title} delay={i * 0.06}>
          <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-white p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-text">
              <HugeiconsIcon icon={icon} size={22} />
            </span>
            <h3 className="font-heading text-lg font-semibold text-ink">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/** Fotos de la página: una grande y el resto en una fila. */
export function PhotoStrip({ photos }: { photos: Photo[] }) {
  if (!photos.length) return null
  // Con tres fotos o más, la primera ocupa dos filas; con menos, todas iguales.
  const big = photos.length >= 3
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {photos.slice(0, 4).map((photo, i) => (
        <Reveal
          key={photo.src}
          delay={i * 0.06}
          className={cn(
            "relative overflow-hidden rounded-3xl bg-paper-2",
            i === 0 &&
              big &&
              "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto",
            i === 0 && !big && "col-span-2 aspect-[4/3]",
            i > 0 && "aspect-square"
          )}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={
              i === 0
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 50vw, 25vw"
            }
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  )
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {steps.map(({ title, text }, i) => (
        <Reveal key={title} delay={i * 0.08}>
          <li className="flex h-full flex-col gap-3 rounded-3xl bg-paper-2 p-6">
            <span className="font-heading text-4xl font-bold text-brand-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-lg font-semibold text-ink">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
          </li>
        </Reveal>
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
        "flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-start",
        tone === "brand" ? "bg-brand-primary/10" : "bg-amber-50"
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-full text-white",
          tone === "brand" ? "bg-brand-primary" : "bg-amber-500"
        )}
      >
        <HugeiconsIcon icon={icon} size={22} />
      </span>
      <div className="flex flex-col gap-1">
        <p className="font-heading text-lg font-semibold text-ink">{title}</p>
        <div className="text-[15px] leading-relaxed text-ink-soft">
          {children}
        </div>
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
          className="group rounded-2xl border border-line bg-white open:border-ink/30"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-semibold text-ink md:text-lg">
              {question}
            </span>
            <span className="shrink-0 text-2xl leading-none font-light text-ink transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-ink-soft">{answer}</p>
        </details>
      ))}
    </div>
  )
}

export function FinalCta({
  title,
  whatsapp,
  currentSlug,
}: {
  title: string
  whatsapp: string
  currentSlug: string
}) {
  const otherServices = services.filter(
    (service) => service.slug !== currentSlug
  )

  return (
    <Section tone="ink">
      <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-2xl font-heading text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
          {title}
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light" size="xl">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="secondary" size="xl">
            <a href={business.phone.href}>
              <HugeiconsIcon icon={Call02Icon} size={20} />
              {business.phone.display}
            </a>
          </Button>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
        {otherServices.map(({ slug, name, icon }) => (
          <Link
            key={slug}
            href={`/${slug}`}
            className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-primary">
              <HugeiconsIcon icon={icon} size={19} />
            </span>
            <span className="flex-1 font-semibold">{name}</span>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={18}
              className="text-white/50 transition-transform group-hover:translate-x-1"
            />
          </Link>
        ))}
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
