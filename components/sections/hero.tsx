"use client"

import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon } from "@hugeicons/core-free-icons"
import vanPhoto from "@/public/fotos/furgoneta-electrica.jpg"
import BlurText from "@/components/reactbits/BlurText"
import GradualBlur from "@/components/reactbits/GradualBlur"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-ink text-white">
      <Image
        src={vanPhoto}
        alt="Furgoneta eléctrica de akiMAT rotulada con sus servicios"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[62%_60%] md:object-[50%_58%]"
      />
      {/* Degradado para que el texto se lea */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10"
      />
      {/* Desenfoque progresivo bajo la barra de navegación (React Bits · GradualBlur) */}
      <GradualBlur
        position="top"
        height="6rem"
        strength={1.2}
        opacity={0.8}
        curve="ease-out"
        zIndex={5}
      />

      <div className="relative z-10 container-x flex flex-col gap-8 pt-40 pb-12 md:pb-16">
        <p className="text-xs font-semibold tracking-widest text-white/75 uppercase sm:text-sm">
          Desde {business.founded} · Mutilva · Pamplona y comarca
        </p>
        <BlurText
          as="h1"
          text="Fontanería, calderas, aerotermia y aire acondicionado."
          animateBy="words"
          direction="bottom"
          delay={70}
          className="max-w-5xl font-heading text-[2.6rem] leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl"
        />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Button asChild variant="light" size="xl">
            <a
              href={whatsappLink("Hola akiMAT, me gustaría pedir presupuesto.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-5" />
              Pedir presupuesto
            </a>
          </Button>
          <div className="flex flex-col gap-2 pr-20 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:pr-0">
            {[business.phone, business.mobile].map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex items-center gap-2 text-lg font-semibold tabular-nums transition-opacity hover:opacity-80"
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={19}
                  className="text-brand-primary"
                />
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
