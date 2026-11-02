"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

// Modelos que instalan. Los datos salen de las fichas de Sime; las imágenes son
// renders del fabricante. TODO: añadir la caldera Kosner cuando haya imagen.
export const boilers = [
  {
    id: "praktica",
    name: "Sime Praktica HE",
    image: "/calderas/Sime_Praktica_HE.png",
    tag: "La más estrecha",
    points: [
      "Cabe en un mueble de cocina",
      "Condensación",
      "Intercambiador de acero inoxidable",
    ],
  },
  {
    id: "murelle",
    name: "Sime Murelle HM Plus",
    image: "/calderas/Sime_Murelle_HM_Plus.png",
    tag: "La más instalada",
    points: [
      "Modulación 1:15, consume solo lo que hace falta",
      "Wi-Fi opcional",
      "Para pisos con uno o dos baños",
    ],
  },
  {
    id: "planet",
    name: "Sime Planet HM Plus",
    image: "/calderas/Sime_Planet_HM_Plus.png",
    tag: "La más potente",
    points: [
      "De 25 a 40 kW",
      "Solo 25 cm de fondo",
      "Para casas grandes o con varios baños",
    ],
  },
] as const

type BoilerId = (typeof boilers)[number]["id"]

const situations: { label: string; boiler: BoilerId }[] = [
  { label: "Quiero esconderla en un mueble", boiler: "praktica" },
  { label: "Piso con uno o dos baños", boiler: "murelle" },
  { label: "Casa grande o varios baños", boiler: "planet" },
]

export function Calderas() {
  const [situation, setSituation] = useState(0)
  const active =
    boilers.find((b) => b.id === situations[situation].boiler) ?? boilers[0]

  return (
    <section id="calderas" className="bg-paper-2 py-16 md:py-24">
      <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
              Calderas
            </p>
            <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
              ¿Qué caldera me conviene?
            </h2>
            <p className="text-ink-soft">
              Elige tu caso y te decimos cuál suele encajar.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Tu caso"
            className="flex flex-col gap-2"
          >
            {situations.map((item, i) => (
              <button
                key={item.label}
                type="button"
                role="radio"
                aria-checked={situation === i}
                onClick={() => setSituation(i)}
                className={cn(
                  "flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left text-[15px] font-semibold transition-colors",
                  situation === i
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-ink hover:border-ink/40"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "size-2.5 shrink-0 rounded-full",
                    situation === i ? "bg-brand-primary" : "bg-line"
                  )}
                />
              </button>
            ))}
          </div>

          <Link
            href="/calderas-de-gas"
            className="inline-flex w-fit items-center gap-1.5 font-semibold text-brand-text hover:underline"
          >
            Ver instalación de calderas
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
          </Link>
        </Reveal>

        {/* Modelo recomendado */}
        <Reveal delay={0.1}>
          <div
            key={active.id}
            className="relative flex animate-in flex-col gap-6 rounded-[2rem] bg-white p-7 shadow-[0_30px_60px_-40px_rgba(17,16,22,0.35)] duration-500 fade-in-0 slide-in-from-bottom-2 sm:p-10"
          >
            <span className="w-fit rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-brand-text uppercase">
              {active.tag}
            </span>
            <div className="relative mx-auto h-64 w-full sm:h-80">
              <Image
                src={active.image}
                alt={`Caldera de condensación ${active.name}`}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                {active.name}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {active.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[15px] text-ink-soft"
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={17}
                      className="shrink-0 text-brand-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* Miniaturas de los otros modelos */}
            <div className="flex items-center gap-2 border-t border-line pt-5">
              {boilers.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  aria-label={b.name}
                  aria-pressed={b.id === active.id}
                  onClick={() =>
                    setSituation(situations.findIndex((s) => s.boiler === b.id))
                  }
                  className={cn(
                    "relative size-14 overflow-hidden rounded-xl border bg-paper-2 transition-colors",
                    b.id === active.id
                      ? "border-ink"
                      : "border-line hover:border-ink/40"
                  )}
                >
                  <Image
                    src={b.image}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
              <span className="ml-auto text-xs text-ink-soft">
                También instalamos Kosner
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
