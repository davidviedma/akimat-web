"use client"

import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import GlareHover from "@/components/reactbits/GlareHover"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/site"

export function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <Reveal className="mb-10 flex flex-col gap-3 md:mb-14">
          <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
            Servicios
          </p>
          <h2 className="max-w-2xl font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
            Todo lo que necesita tu casa, con un solo equipo.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <GlareHover
                width="100%"
                height="auto"
                background="transparent"
                borderRadius="1.5rem"
                glareOpacity={0.35}
                glareSize={45}
                className="w-full"
              >
                <Link
                  href={`/${service.slug}`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-paper-2 md:aspect-[3/4]"
                >
                  <Image
                    src={service.photo.src}
                    alt={service.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
                  />
                  <span className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-brand-primary">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
                  </span>
                  <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur">
                    <HugeiconsIcon icon={service.icon} size={19} />
                  </span>
                  <div className="absolute right-5 bottom-5 left-5 flex flex-col gap-1 text-white">
                    <h3 className="font-heading text-2xl font-semibold">
                      {service.name}
                    </h3>
                    <p className="text-sm text-white/80">{service.summary}</p>
                  </div>
                </Link>
              </GlareHover>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
