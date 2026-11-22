import { useId } from "react"
import { cn } from "@/lib/utils"

// Ilustración vectorial de la página 404. Se anima solo con CSS (ver
// globals.css) y respeta prefers-reduced-motion.

type ArtProps = { className?: string; animated?: boolean }

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
