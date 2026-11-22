"use client"

import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { Award01Icon, Call02Icon } from "@hugeicons/core-free-icons"
import vanPhoto from "@/public/fotos/furgoneta-electrica.jpg"
import BlurText from "@/components/reactbits/BlurText"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, whatsappLink } from "@/lib/site"

export function Hero() {
  // La altura se limita en pantallas muy altas: si no, la foto se ve entera y
  // la furgoneta y el titular quedan en el fondo de la pantalla.
  return (
    <section className="relative isolate flex min-h-[min(100svh,56rem)] flex-col justify-end overflow-hidden bg-ink text-white">
      <Image
        src={vanPhoto}
        alt="Furgoneta eléctrica de akiMAT rotulada con sus servicios"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-[62%_60%] md:object-[50%_75%]"
      />
      {/* Degradado para que el texto se lea */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10"
      />

      <div className="relative z-10 container-x flex flex-col gap-8 pt-40 pb-12 md:pb-20 lg:pb-24">
        {/* Lo primero que se lee: los años de oficio */}
        <p className="inline-flex w-fit items-center gap-3 rounded-full border border-white/30 bg-white/15 py-2 pr-6 pl-2 text-base font-medium backdrop-blur-md sm:text-lg">
          <span className="flex size-10 items-center justify-center rounded-full bg-brand-primary">
            <HugeiconsIcon icon={Award01Icon} size={21} />
          </span>
          <span>
            <span className="font-heading text-xl font-bold sm:text-2xl">
              +{business.experienceYears} años
            </span>{" "}
            de experiencia
          </span>
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
