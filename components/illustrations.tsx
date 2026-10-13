import { useId } from "react"
import { cn } from "@/lib/utils"

// Ilustraciones vectoriales de los tres servicios. Sustituyen a las fotos
// mientras no haya imágenes propias de akiMAT; se animan solo con CSS
// (ver globals.css) y respetan prefers-reduced-motion.

type ArtProps = { className?: string; animated?: boolean }

/** Unidad interior de aire acondicionado con el aire saliendo. */
export function AirConditionerArt({ className, animated = true }: ArtProps) {
  const id = useId().replace(/:/g, "")
  const flows = [
    { d: "M96 136C90 162 74 184 52 206", delay: "0s" },
    { d: "M148 136C146 166 136 188 122 212", delay: "0.65s" },
    { d: "M212 136C214 166 224 188 238 212", delay: "1.3s" },
    { d: "M264 136C270 162 286 184 308 206", delay: "1.95s" },
  ]

  return (
    <svg
      viewBox="0 0 360 230"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d5dfe8" />
        </linearGradient>
        <linearGradient id={`${id}-air`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaff" />
          <stop offset="1" stopColor="#0099d6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0099d6" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0099d6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="180" cy="170" rx="170" ry="62" fill={`url(#${id}-glow)`} />

      {/* Cuerpo */}
      <rect
        x="34"
        y="38"
        width="292"
        height="96"
        rx="24"
        fill={`url(#${id}-body)`}
      />
      <rect
        x="52"
        y="45"
        width="256"
        height="8"
        rx="4"
        fill="#ffffff"
        opacity="0.9"
      />
      <path d="M38 98H322" stroke="#c3d0db" strokeWidth="1.5" />

      {/* Rejilla / lama */}
      <rect x="62" y="108" width="236" height="14" rx="7" fill="#0f1c27" />
      <rect
        x="70"
        y="113"
        width="220"
        height="3"
        rx="1.5"
        fill="#0099d6"
        opacity="0.7"
      />

      {/* Pantalla */}
      <circle cx="292" cy="74" r="4" fill="#0099d6" />
      <circle cx="292" cy="74" r="9" fill="#0099d6" opacity="0.18" />
      <text
        x="276"
        y="80"
        textAnchor="end"
        fontSize="17"
        fontWeight="700"
        fill="#0b6f9c"
        style={{ fontFamily: "var(--font-display)" }}
      >
        22°
      </text>

      {/* Aire */}
      {flows.map((flow) => (
        <path
          key={flow.d}
          d={flow.d}
          fill="none"
          stroke={`url(#${id}-air)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          className={animated ? "animate-airflow" : undefined}
          style={animated ? { animationDelay: flow.delay } : { opacity: 0.6 }}
        />
      ))}

      {/* Copos */}
      <g fill="#bfeaff" opacity="0.85">
        <circle cx="120" cy="178" r="2.5" />
        <circle cx="186" cy="196" r="2" />
        <circle cx="250" cy="174" r="2.5" />
        <circle cx="82" cy="196" r="1.8" />
        <circle cx="288" cy="198" r="1.8" />
      </g>
    </svg>
  )
}

/** Caldera mural de gas con la llama encendida y las tuberías. */
export function BoilerArt({ className, animated = true }: ArtProps) {
  const id = useId().replace(/:/g, "")
  const pipes = [84, 104, 124, 144, 164]

  return (
    <svg
      viewBox="0 0 248 300"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d2dce6" />
        </linearGradient>
        <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8796a3" />
          <stop offset="0.5" stopColor="#dfe6ec" />
          <stop offset="1" stopColor="#8796a3" />
        </linearGradient>
        <linearGradient id={`${id}-copper`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9a5a33" />
          <stop offset="0.5" stopColor="#e3a06f" />
          <stop offset="1" stopColor="#9a5a33" />
        </linearGradient>
        <linearGradient id={`${id}-flame`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#0077b6" />
          <stop offset="0.55" stopColor="#0099d6" />
          <stop offset="1" stopColor="#bfeaff" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0099d6" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0099d6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="124" cy="150" rx="122" ry="140" fill={`url(#${id}-glow)`} />

      {/* Salida de humos */}
      <rect
        x="106"
        y="2"
        width="36"
        height="34"
        rx="4"
        fill={`url(#${id}-steel)`}
      />
      <rect x="100" y="26" width="48" height="10" rx="3" fill="#7d8b97" />

      {/* Cuerpo */}
      <rect
        x="40"
        y="34"
        width="168"
        height="200"
        rx="20"
        fill={`url(#${id}-body)`}
      />
      <rect
        x="54"
        y="44"
        width="140"
        height="7"
        rx="3.5"
        fill="#ffffff"
        opacity="0.9"
      />

      {/* Ventana de la llama */}
      <rect x="92" y="70" width="64" height="64" rx="32" fill="#0b1620" />
      <circle cx="124" cy="102" r="26" fill="#0099d6" opacity="0.12" />
      <path
        d="M124 78C130 88 140 95 140 108C140 118 133 124 124 124C115 124 108 118 108 108C108 100 113 96 116 90C118 97 121 99 123 99C121 92 120 85 124 78Z"
        fill={`url(#${id}-flame)`}
        className={animated ? "animate-flame" : undefined}
      />

      {/* Panel de mandos */}
      <rect x="60" y="156" width="128" height="52" rx="12" fill="#0b1620" />
      <text
        x="78"
        y="190"
        fontSize="20"
        fontWeight="700"
        fill="#0099d6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        55°
      </text>
      <circle
        cx="148"
        cy="182"
        r="8"
        fill="#172a38"
        stroke="#22394a"
        strokeWidth="2"
      />
      <circle
        cx="172"
        cy="182"
        r="8"
        fill="#172a38"
        stroke="#22394a"
        strokeWidth="2"
      />
      <circle cx="172" cy="182" r="2.5" fill="#0099d6" />

      {/* Tuberías */}
      {pipes.map((x, i) => (
        <g key={x}>
          <rect
            x={x - 5}
            y="234"
            width="10"
            height="58"
            fill={`url(#${id}-copper)`}
          />
          <rect
            x={x - 8}
            y="256"
            width="16"
            height="12"
            rx="3"
            fill={i === 2 ? "#f2c230" : "#22394a"}
          />
        </g>
      ))}
    </svg>
  )
}

/** Grifo con una gota cayendo sobre el agua. */
export function FaucetArt({ className, animated = true }: ArtProps) {
  const id = useId().replace(/:/g, "")

  return (
    <svg
      viewBox="0 0 280 250"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}-chrome`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c9d4de" />
          <stop offset="1" stopColor="#8796a3" />
        </linearGradient>
        <linearGradient id={`${id}-chrome-v`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8796a3" />
          <stop offset="0.5" stopColor="#f4f7fa" />
          <stop offset="1" stopColor="#8796a3" />
        </linearGradient>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaff" />
          <stop offset="1" stopColor="#0099d6" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#0099d6" stopOpacity="0.4" />
          <stop offset="1" stopColor="#0099d6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="190" cy="214" rx="96" ry="34" fill={`url(#${id}-glow)`} />

      {/* Embellecedor de pared */}
      <rect
        x="14"
        y="66"
        width="22"
        height="64"
        rx="6"
        fill={`url(#${id}-chrome-v)`}
      />

      {/* Maneta */}
      <rect
        x="86"
        y="30"
        width="78"
        height="12"
        rx="6"
        fill={`url(#${id}-chrome)`}
      />
      <rect
        x="112"
        y="38"
        width="20"
        height="30"
        rx="5"
        fill={`url(#${id}-chrome-v)`}
      />

      {/* Cuerpo y caño */}
      <path
        d="M34 74H176C204 74 222 92 222 120V146H196V124C196 110 188 102 174 102H34Z"
        fill={`url(#${id}-chrome)`}
      />
      <rect x="192" y="144" width="34" height="10" rx="4" fill="#8796a3" />
      <path
        d="M52 80H170"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Gota */}
      <path
        d="M209 160C209 160 199 172 199 179A10 10 0 0 0 219 179C219 172 209 160 209 160Z"
        fill={`url(#${id}-water)`}
        className={animated ? "animate-drip" : undefined}
      />

      {/* Agua */}
      <ellipse
        cx="209"
        cy="226"
        rx="66"
        ry="11"
        fill="#0099d6"
        opacity="0.18"
      />
      <ellipse
        cx="209"
        cy="226"
        rx="30"
        ry="6"
        fill="none"
        stroke="#4cc3f0"
        strokeWidth="2"
        className={animated ? "animate-ripple" : undefined}
        style={animated ? { animationDelay: "1.5s" } : undefined}
      />
    </svg>
  )
}

export const serviceArt = {
  fontaneria: FaucetArt,
  "aire-acondicionado": AirConditionerArt,
  "calderas-de-gas": BoilerArt,
} as const
