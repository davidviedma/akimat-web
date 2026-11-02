"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { FlashIcon, Leaf01Icon, VanIcon } from "@hugeicons/core-free-icons"
import ElectricBorder from "@/components/reactbits/ElectricBorder"
import TiltedCard from "@/components/reactbits/TiltedCard"
import { Reveal } from "@/components/reveal"
import { business } from "@/lib/site"

const points = [
  { icon: FlashIcon, text: "Furgonetas 100 % eléctricas" },
  { icon: Leaf01Icon, text: "Cero emisiones en cada visita" },
  { icon: VanIcon, text: `Desde ${business.founded} en Pamplona y comarca` },
]

export function Flota() {
  return (
    <section id="nosotros" className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container-x grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          {/* Borde eléctrico (React Bits · ElectricBorder) */}
          <ElectricBorder
            color="#0099d6"
            theme="light"
            borderRadius={32}
            thickness={1.5}
            glow={0.5}
            intensity={0.8}
            chaos={0.35}
          >
            <div className="flex flex-col gap-6 rounded-[32px] bg-white p-8 sm:p-10">
              <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
                Nos movemos en eléctrico
              </p>
              <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
                Llegamos sin hacer ruido.
              </h2>
              <ul className="flex flex-col gap-3">
                {points.map(({ icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-[15px] text-ink"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-text">
                      <HugeiconsIcon icon={icon} size={18} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </ElectricBorder>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Foto con inclinación al pasar el ratón (React Bits · TiltedCard) */}
          <TiltedCard
            imageSrc="/fotos/furgoneta-electrica.jpg"
            altText="Furgoneta eléctrica roja de akiMAT"
            containerHeight="clamp(240px, 42vw, 560px)"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={7}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={false}
          />
        </Reveal>
      </div>
    </section>
  )
}
