"use client"

import Image from "next/image"
import { LogoLoop } from "@/components/reactbits/LogoLoop"
import { brands } from "@/lib/site"

function BrandMark({ name, logo, width }: (typeof brands)[number]) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={width ?? 120}
        height={40}
        style={{ width: "auto", height: "2.5rem" }}
        className="object-contain"
      />
    )
  }
  // Sin logo oficial todavía: marca de texto
  return (
    <span className="font-heading text-[2.1rem] leading-none font-bold tracking-tight text-ink">
      {name.toLowerCase()}
    </span>
  )
}

export function Marcas() {
  const logos = [...brands, ...brands].map((brand) => ({
    node: <BrandMark {...brand} />,
    title: brand.name,
    ariaLabel: brand.name,
  }))

  return (
    <section className="border-y border-line bg-white py-10">
      <div className="container-x flex flex-col items-center gap-6 md:flex-row md:gap-12">
        <p className="shrink-0 text-sm font-semibold tracking-widest text-ink-soft uppercase">
          Instalamos
        </p>
        <div className="w-full min-w-0 flex-1">
          <LogoLoop
            logos={logos}
            speed={36}
            gap={88}
            logoHeight={40}
            pauseOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Marcas que instalamos"
          />
        </div>
      </div>
    </section>
  )
}
