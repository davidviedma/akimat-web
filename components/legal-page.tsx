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
      <Nav />
      <main className="min-h-screen bg-ink-950 text-zinc-100">
        <div className="container mx-auto max-w-3xl px-6 pt-32 pb-24 lg:pt-40">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-300"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            Volver al inicio
          </Link>

          <h1 className="mb-3 font-heading text-4xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="mb-10 text-sm text-zinc-500">
            Última actualización: {updated}
          </p>
          <div className="mb-12 text-sm leading-relaxed text-zinc-400">
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
      <h2 className="mb-3 text-base font-semibold tracking-widest text-brand-primary uppercase">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-zinc-400 [&_a]:text-brand-primary [&_a]:hover:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-zinc-200 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
        {children}
      </div>
    </section>
  )
}
