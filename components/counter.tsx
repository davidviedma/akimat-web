"use client"

import { useEffect, useRef } from "react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react"

/**
 * Cifra que cuenta desde cero cuando entra en pantalla. El HTML lleva ya la
 * cifra final, así que se lee igual sin JavaScript o con "reducir movimiento".
 */
export function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(to)
  const rounded = useTransform(count, (value) => Math.round(value))
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (!inView) {
      count.set(0)
      return
    }
    const controls = animate(count, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
  }, [count, inView, reduced, to])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
