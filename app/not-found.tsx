import Link from "next/link"
import { FaucetArt } from "@/components/illustrations"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/site"

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-ink-950 px-6 py-32 text-center">
        <FaucetArt className="w-56" />
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
            Error 404
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            Aquí no hay{" "}
            <span className="text-brand-primary">nada que reparar</span>.
          </h1>
          <p className="mx-auto max-w-md leading-relaxed text-zinc-400">
            La página que buscas no existe o se ha movido. Vuelve al inicio o
            llámanos si necesitas ayuda.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={business.phone.href}>{business.phone.display}</a>
          </Button>
        </div>
      </main>
    </>
  )
}
