"use client"

import CurvedLoop from "@/components/reactbits/CurvedLoop"

// La rotulación de las furgonetas, en una marquesina curva (React Bits · CurvedLoop).
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden bg-white pt-6 pb-2 md:pt-10 md:pb-4"
    >
      <CurvedLoop
        marqueeText="Fontanería ✦ Calefacción ✦ Gas ✦ Climatización ✦ Aerotermia ✦ Cambio de caldera ✦ "
        speed={1}
        curveAmount={120}
        fontSize="2.6rem"
        className="fill-ink font-heading"
      />
    </div>
  )
}
