"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Call02Icon,
  CheckmarkCircle02Icon,
  MouseScroll02Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import {
  AirConditionerArt,
  BoilerArt,
  FaucetArt,
} from "@/components/illustrations"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import CardSwap, { Card } from "@/components/reactbits/CardSwap"
import LiquidEther from "@/components/reactbits/LiquidEther"
import Magnet from "@/components/reactbits/Magnet"
import RotatingText from "@/components/reactbits/RotatingText"
import ShinyText from "@/components/reactbits/ShinyText"
import { business, whatsappLink } from "@/lib/site"

const rotating = ["fontanería", "climatización", "calefacción"]

const checks = [
  "Presupuesto sin compromiso",
  "Instalación, reparación y mantenimiento",
  "Zizur Mayor, Pamplona y comarca",
]

const cards = [
  {
    title: "Fontanería",
    text: "Fugas, averías, tuberías, sanitarios y reformas de baño.",
    Art: FaucetArt,
    artClass: "w-[78%]",
  },
  {
    title: "Aire acondicionado",
    text: "Split, multisplit y conductos. Instalación y mantenimiento.",
    Art: AirConditionerArt,
    artClass: "w-[92%]",
  },
  {
    title: "Calderas de gas",
    text: "Cambio de caldera, averías y revisiones obligatorias.",
    Art: BoilerArt,
    artClass: "w-[44%]",
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink-950"
    >
      {/* Fondo de fluido (React Bits · LiquidEther) */}
      <div className="absolute inset-0 -z-20 opacity-90">
        <LiquidEther
          colors={["#0e6a99", "#0099d6", "#5cc8f2", "#e0f6ff"]}
          intensity={2}
          mouseForce={22}
          cursorSize={120}
          resolution={0.45}
          autoSpeed={0.45}
          autoIntensity={2.4}
        />
      </div>
      {/* Viñeta para que el texto se lea bien sobre el fluido */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(110%_85%_at_18%_45%,rgba(4,8,12,0.85)_0%,rgba(4,8,12,0.45)_45%,rgba(4,8,12,0.05)_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="container mx-auto grid flex-1 grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 sm:px-12 lg:grid-cols-[1.15fr_1fr] lg:px-16 xl:px-24">
        {/* Texto */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-primary opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-primary" />
              </span>
              <ShinyText
                text="Zizur Mayor · Pamplona y comarca"
                color="#a1b3c2"
                shineColor="#ffffff"
                speed={3}
                delay={2}
              />
            </p>

            <h1 className="font-heading text-[2.6rem] leading-[1.05] font-bold tracking-tight text-white sm:text-6xl xl:text-[4.1rem]">
              <span className="sr-only">
                Expertos en fontanería, aire acondicionado y calderas de gas en
                Zizur Mayor y Pamplona
              </span>
              <span aria-hidden="true" className="block">
                Expertos en
              </span>
              <span aria-hidden="true" className="block min-h-[1.1em]">
                <RotatingText
                  texts={rotating}
                  splitBy="characters"
                  staggerFrom="first"
                  staggerDuration={0.02}
                  rotationInterval={2600}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 380 }}
                  mainClassName="text-brand-primary"
                  splitLevelClassName="overflow-hidden pb-[0.08em]"
                />
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-300">
              Instalación, reparación y mantenimiento de{" "}
              <span className="font-medium text-white">fontanería</span>,{" "}
              <span className="font-medium text-white">aire acondicionado</span>{" "}
              y <span className="font-medium text-white">calderas de gas</span>.
              Un solo equipo, de confianza y cerca de casa.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Magnet padding={40} magnetStrength={6}>
              <Button asChild size="xl">
                <a
                  href={whatsappLink(
                    "Hola akiMAT, me gustaría pedir presupuesto."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="size-5" />
                  Pedir presupuesto
                </a>
              </Button>
            </Magnet>
            <Magnet padding={40} magnetStrength={6}>
              <Button asChild size="xl" variant="secondary">
                <a href={business.phone.href}>
                  <HugeiconsIcon icon={Call02Icon} size={20} />
                  {business.phone.display}
                </a>
              </Button>
            </Magnet>
          </div>

          <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={18}
                  className="shrink-0 text-brand-primary"
                />
                {check}
              </li>
            ))}
          </ul>
        </div>

        {/* Tarjetas de servicios (React Bits · CardSwap) */}
        <div className="relative hidden h-[460px] lg:block">
          <CardSwap
            width={420}
            height={320}
            cardDistance={52}
            verticalDistance={58}
            delay={4200}
            skewAmount={5}
            cardRadius={28}
            ariaLabel="Nuestros servicios"
          >
            {cards.map(({ title, text, Art, artClass }) => (
              <Card key={title}>
                <div className="relative flex h-full flex-col">
                  <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_60%,rgba(0,153,214,0.22),transparent_65%)]">
                    <Art className={artClass} />
                  </div>
                  <div className="flex flex-col gap-1 border-t border-white/5 bg-ink-950/40 px-6 py-4">
                    <p className="font-heading text-lg font-semibold text-white">
                      {title}
                    </p>
                    <p className="text-sm text-zinc-400">{text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="flex flex-col items-center gap-1 pb-6 text-zinc-500">
        <span className="text-xs font-medium tracking-widest uppercase">
          Desliza
        </span>
        <HugeiconsIcon
          icon={MouseScroll02Icon}
          size={18}
          className="animate-bounce motion-reduce:animate-none"
        />
      </div>
    </section>
  )
}
