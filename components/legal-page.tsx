import Link from "next/link"
import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated: string
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <Nav onPhoto={false} />
      <main className="min-h-screen bg-white text-ink">
        <div className="container-x max-w-3xl pt-32 pb-24 lg:pt-40">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            Volver al inicio
          </Link>

          <h1 className="mb-3 font-heading text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mb-10 text-sm text-ink-soft">
            Última actualización: {updated}
          </p>
          <div className="mb-12 text-sm leading-relaxed text-ink-soft">
            {intro}
          </div>

          <div className="flex flex-col gap-10">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold tracking-widest text-brand-text uppercase">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink-soft [&_a]:text-brand-text [&_a]:hover:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
        {children}
      </div>
    </section>
  )
}
