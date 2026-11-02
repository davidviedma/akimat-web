import Link from "next/link"
import { FaucetArt } from "@/components/illustrations"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/site"

export default function NotFound() {
  return (
    <>
      <Nav onPhoto={false} />
      <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-white px-6 py-32 text-center">
        <div className="rounded-full bg-ink p-10">
          <FaucetArt className="w-40" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
            Error 404
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Aquí no hay nada que reparar.
          </h1>
          <p className="mx-auto max-w-md text-ink-soft">
            La página no existe o se ha movido.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={business.phone.href}>{business.phone.display}</a>
          </Button>
        </div>
      </main>
    </>
  )
}
