"use client"

import { useId, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Building03Icon,
  Sun03Icon,
  TemperatureIcon,
} from "@hugeicons/core-free-icons"
import CountUp from "@/components/reactbits/CountUp"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

// Regla orientativa habitual: ~100 frigorías por m² en una estancia de altura
// normal, con un suplemento si le da mucho el sol o es un último piso.
const FRIGORIAS_POR_M2 = 100
const FRIGORIAS_POR_KW = 860

// Potencias comerciales típicas de los equipos split (kW de frío).
const sizes = [2.5, 3.5, 5, 6, 7]

const extras = [
  {
    key: "sol",
    label: "Le da mucho el sol",
    hint: "Orientación sur u oeste, grandes ventanales",
    factor: 0.15,
    icon: Sun03Icon,
  },
  {
    key: "atico",
    label: "Último piso o bajo cubierta",
    hint: "El calor del tejado se nota",
    factor: 0.15,
    icon: Building03Icon,
  },
  {
    key: "calor",
    label: "Cocina o muchos aparatos",
    hint: "Ordenadores, electrodomésticos…",
    factor: 0.1,
    icon: TemperatureIcon,
  },
] as const

type ExtraKey = (typeof extras)[number]["key"]

export function FrigoriasCalculator() {
  const sliderId = useId()
  const [area, setArea] = useState(20)
  const [active, setActive] = useState<Record<ExtraKey, boolean>>({
    sol: false,
    atico: false,
    calor: false,
  })

  const factor =
    1 +
    extras.reduce(
      (sum, extra) => sum + (active[extra.key] ? extra.factor : 0),
      0
    )
  const frigorias = Math.round((area * FRIGORIAS_POR_M2 * factor) / 50) * 50
  const kw = frigorias / FRIGORIAS_POR_KW
  const recommended = sizes.find((size) => size >= kw - 0.05)

  const message = `Hola akiMAT, quiero instalar aire acondicionado en una estancia de unos ${area} m². La calculadora me sale unas ${frigorias.toLocaleString("es-ES")} frigorías. ¿Me dais presupuesto?`

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 lg:grid-cols-[1.2fr_1fr]">
      {/* Datos */}
      <div className="flex flex-col gap-8 p-7 sm:p-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-end justify-between gap-4">
            <label
              htmlFor={sliderId}
              className="font-heading text-lg font-semibold text-white"
            >
              Superficie de la estancia
            </label>
            <span className="font-heading text-3xl font-bold text-white tabular-nums">
              {area}
              <span className="ml-1 text-base font-medium text-zinc-400">
                m²
              </span>
            </span>
          </div>
          <input
            id={sliderId}
            type="range"
            min={6}
            max={80}
            step={1}
            value={area}
            onChange={(event) => setArea(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-700 accent-brand-primary [&::-moz-range-thumb]:size-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-primary [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-primary [&::-webkit-slider-thumb]:shadow-[0_0_0_6px_rgba(0,153,214,0.25)]"
            style={{
              background: `linear-gradient(to right, #0099d6 ${((area - 6) / 74) * 100}%, #172a38 ${((area - 6) / 74) * 100}%)`,
            }}
          />
          <div className="flex justify-between text-xs text-zinc-500">
            <span>6 m²</span>
            <span>80 m²</span>
          </div>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 font-heading text-lg font-semibold text-white">
            ¿Cómo es la estancia?
          </legend>
          {extras.map((extra) => {
            const on = active[extra.key]
            return (
              <button
                key={extra.key}
                type="button"
                role="switch"
                aria-checked={on}
                onClick={() =>
                  setActive((prev) => ({
                    ...prev,
                    [extra.key]: !prev[extra.key],
                  }))
                }
                className={cn(
                  "flex items-center gap-4 rounded-2xl border p-4 text-left transition-colors",
                  "focus-visible:ring-3 focus-visible:ring-brand-primary/40 focus-visible:outline-none",
                  on
                    ? "border-brand-primary bg-brand-primary/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25"
                )}
              >
                <HugeiconsIcon
                  icon={extra.icon}
                  size={22}
                  className={on ? "text-brand-primary" : "text-zinc-400"}
                />
                <span className="flex flex-1 flex-col">
                  <span className="text-[15px] font-semibold text-white">
                    {extra.label}
                  </span>
                  <span className="text-xs text-zinc-400">{extra.hint}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                    on ? "bg-brand-primary" : "bg-ink-700"
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-1 left-1 size-4 rounded-full bg-white transition-transform",
                      on && "translate-x-5"
                    )}
                  />
                </span>
              </button>
            )
          })}
        </fieldset>
      </div>

      {/* Resultado */}
      <div
        className="relative flex flex-col justify-between gap-8 bg-ink-950 bg-[radial-gradient(circle_at_70%_20%,rgba(0,153,214,0.35),transparent_60%)] p-7 sm:p-10"
        aria-live="polite"
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
            Potencia orientativa
          </p>
          <p className="font-heading text-6xl leading-none font-bold text-white tabular-nums md:text-7xl">
            <CountUp to={frigorias} separator="." duration={0.6} />
          </p>
          <p className="text-zinc-400">frigorías/hora</p>
          <p className="mt-2 text-zinc-300">
            Equivale a unos{" "}
            <span className="font-semibold text-white">
              {kw.toLocaleString("es-ES", { maximumFractionDigits: 1 })} kW
            </span>{" "}
            de frío.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          {recommended ? (
            <p className="text-zinc-300">
              Un equipo de{" "}
              <span className="font-heading text-2xl font-bold text-brand-primary">
                {recommended.toLocaleString("es-ES")} kW
              </span>{" "}
              debería ser suficiente.
            </p>
          ) : (
            <p className="text-zinc-300">
              Para esta superficie conviene estudiar un{" "}
              <span className="font-semibold text-white">
                multisplit o conductos
              </span>
              .
            </p>
          )}
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white/90"
          >
            <WhatsAppIcon className="size-4" />
            Pedir presupuesto con este dato
          </a>
        </div>

        <p className="text-xs leading-relaxed text-zinc-500">
          Cálculo orientativo para estancias de altura normal (unos 2,5 m). La
          potencia exacta depende del aislamiento, las ventanas y el uso: en la
          visita lo ajustamos a tu caso.
        </p>
      </div>
    </div>
  )
}
