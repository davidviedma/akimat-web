"use client"

import ScrollVelocity from "@/components/reactbits/ScrollVelocity"

function Separator() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-6 inline-block size-[0.45em] -translate-y-[0.12em] text-brand-primary md:mx-10"
      aria-hidden="true"
    >
      <path
        d="M12 1.5C12 1.5 4.5 10.2 4.5 15A7.5 7.5 0 0 0 19.5 15C19.5 10.2 12 1.5 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

const rows = [
  ["Fontanería", "Aire acondicionado", "Calderas de gas", "Calefacción"],
  ["Instalación", "Reparación", "Mantenimiento", "Reformas de baño"],
]

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-white/5 bg-ink-900 py-10 select-none md:py-14"
    >
      <ScrollVelocity
        velocity={36}
        numCopies={4}
        className="font-heading text-[2.6rem] font-bold tracking-tight md:text-[4.5rem]"
        texts={rows.map((row, index) => (
          <span
            key={index}
            className={
              index === 0
                ? "text-white"
                : "text-transparent [-webkit-text-stroke:1.5px_rgba(0,153,214,0.85)]"
            }
          >
            {row.map((word) => (
              <span key={word}>
                {word}
                <Separator />
              </span>
            ))}
          </span>
        ))}
      />
    </div>
  )
}
