"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { faqs } from "./faqs-data"

function FaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-900 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)]">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
        >
          <span className="text-base font-semibold text-white sm:text-lg">
            {question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full text-2xl leading-none font-light text-white transition-all duration-300",
              isOpen
                ? "rotate-45 bg-brand-primary text-brand-primary-foreground"
                : "bg-white/8"
            )}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={cn(
          "grid transition-[grid-template-rows] duration-300",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-zinc-400 sm:px-7">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="dudas" className="bg-brand-primary py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-brand-primary-foreground md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-base text-brand-primary-foreground/80">
            Resolvemos las dudas más habituales
          </p>
        </div>
        <div className="mx-auto flex max-w-4xl flex-col gap-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              id={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
