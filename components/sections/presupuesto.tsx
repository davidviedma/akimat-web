"use client"

import { useState, type CSSProperties, type ReactNode } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  AirVentIcon,
  Alert02Icon,
  Call02Icon,
  DropletIcon,
  FireIcon,
  Leaf01Icon,
  PaintRollerIcon,
  Settings01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"
import Stepper, { Step } from "@/components/reactbits/Stepper"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Option = { value: string; icon: IconSvgElement; hint: string }

const serviceOptions: Option[] = [
  { value: "Fontanería", icon: DropletIcon, hint: "Agua, fugas, baños" },
  { value: "Caldera", icon: FireIcon, hint: "Calefacción, gas" },
  { value: "Aerotermia", icon: Leaf01Icon, hint: "Bomba de calor" },
  { value: "Aire acondicionado", icon: AirVentIcon, hint: "Split, conductos" },
]

const jobOptions: Option[] = [
  {
    value: "Instalación nueva",
    icon: Settings01Icon,
    hint: "Equipo o instalación",
  },
  { value: "Avería o reparación", icon: Alert02Icon, hint: "Algo no funciona" },
  {
    value: "Mantenimiento o revisión",
    icon: Wrench01Icon,
    hint: "Puesta a punto",
  },
  { value: "Reforma", icon: PaintRollerIcon, hint: "Baño, cocina…" },
]

function OptionGrid({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: Option[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className="grid grid-cols-2 gap-2.5"
    >
      {options.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex flex-col items-start gap-2 rounded-2xl border p-3.5 text-left transition-colors sm:p-4",
              "focus-visible:ring-3 focus-visible:ring-brand-primary/35 focus-visible:outline-none",
              selected
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink hover:border-ink/40"
            )}
          >
            <HugeiconsIcon
              icon={option.icon}
              size={22}
              className={selected ? "text-brand-primary" : "text-ink-soft"}
            />
            <span className="flex flex-col">
              <span className="text-sm font-semibold sm:text-[15px]">
                {option.value}
              </span>
              <span
                className={cn(
                  "text-xs",
                  selected ? "text-white/70" : "text-ink-soft"
                )}
              >
                {option.hint}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/70 transition-colors focus:border-brand-primary focus:outline-none focus:ring-3 focus:ring-brand-primary/25"

export function buildMessage(data: {
  service: string
  job: string
  name: string
  town: string
  details: string
}) {
  const lines = [
    "Hola akiMAT, me gustaría pedir presupuesto.",
    "",
    `• Servicio: ${data.service}`,
    `• Trabajo: ${data.job}`,
    `• Nombre: ${data.name.trim()}`,
    `• Localidad: ${data.town.trim()}`,
  ]
  if (data.details.trim()) lines.push(`• Detalles: ${data.details.trim()}`)
  return lines.join("\n")
}

function QuoteWizard() {
  const [step, setStep] = useState(1)
  const [service, setService] = useState("")
  const [job, setJob] = useState("")
  const [name, setName] = useState("")
  const [town, setTown] = useState("")
  const [details, setDetails] = useState("")

  const link = whatsappLink(buildMessage({ service, job, name, town, details }))
  const canContinue =
    (step === 1 && service !== "") ||
    (step === 2 && job !== "") ||
    (step === 3 && name.trim() !== "" && town.trim() !== "")

  const reset = () => {
    setService("")
    setJob("")
    setName("")
    setTown("")
    setDetails("")
    setStep(1)
  }

  return (
    <Stepper
      step={step}
      onStepChange={setStep}
      onFinalStepCompleted={() => {
        setStep(4)
        window.open(link, "_blank", "noopener,noreferrer")
      }}
      linear
      width="100%"
      radius={28}
      theme="light"
      accentColor="#111016"
      backButtonText="Atrás"
      nextButtonText="Continuar"
      completeButtonText="Enviar por WhatsApp"
      nextButtonProps={{ disabled: !canContinue }}
      style={
        {
          "--stepper-frame": "#ffffff",
          "--stepper-frame-shadow": "0 30px 60px -40px rgba(17, 16, 22, 0.35)",
        } as CSSProperties
      }
      completedContent={
        <div className="flex flex-col items-start gap-4 py-2">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[#25D366] text-white">
            <WhatsAppIcon className="size-6" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-heading text-xl font-semibold text-ink">
              ¡Mensaje preparado!
            </p>
            <p className="text-sm leading-relaxed text-ink-soft">
              Se ha abierto WhatsApp con tu solicitud. Si no, usa el botón.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5a]"
            >
              <WhatsAppIcon className="size-4" />
              Abrir WhatsApp
            </a>
            <button
              type="button"
              onClick={reset}
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm font-semibold text-ink transition-colors hover:bg-paper-2"
            >
              Otra consulta
            </button>
          </div>
        </div>
      }
    >
      <Step title="Servicio">
        <div className="flex flex-col gap-4">
          <p className="font-heading text-lg font-semibold text-ink">
            ¿Qué necesitas?
          </p>
          <OptionGrid
            name="Servicio"
            options={serviceOptions}
            value={service}
            onChange={setService}
          />
        </div>
      </Step>
      <Step title="Trabajo">
        <div className="flex flex-col gap-4">
          <p className="font-heading text-lg font-semibold text-ink">
            ¿Qué tipo de trabajo es?
          </p>
          <OptionGrid
            name="Tipo de trabajo"
            options={jobOptions}
            value={job}
            onChange={setJob}
          />
        </div>
      </Step>
      <Step title="Tus datos">
        <div className="flex flex-col gap-3.5">
          <p className="font-heading text-lg font-semibold text-ink">
            ¿Dónde y a quién?
          </p>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <Field label="Nombre">
              <input
                className={inputClass}
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="given-name"
                placeholder="Tu nombre"
              />
            </Field>
            <Field label="Localidad">
              <input
                className={inputClass}
                value={town}
                onChange={(event) => setTown(event.target.value)}
                autoComplete="address-level2"
                placeholder="Ej.: Pamplona"
              />
            </Field>
          </div>
          <Field label="Cuéntanos un poco más (opcional)">
            <textarea
              className={cn(inputClass, "min-h-24 resize-y")}
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Ej.: el termo pierde agua por abajo desde ayer"
            />
          </Field>
          <p className="text-xs leading-relaxed text-ink-soft">
            Al enviar se abrirá WhatsApp con tu mensaje ya escrito. No guardamos
            ningún dato.
          </p>
        </div>
      </Step>
    </Stepper>
  )
}

export function Presupuesto() {
  return (
    <section id="presupuesto" className="bg-paper-2 py-16 md:py-24">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
            Presupuesto
          </p>
          <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
            Tres preguntas y te contestamos.
          </h2>
          <p className="max-w-md text-ink-soft">
            Sin compromiso. Si lo prefieres, llámanos.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            {[business.phone, business.mobile].map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-[15px] font-semibold text-ink tabular-nums transition-colors hover:border-ink/40"
              >
                <HugeiconsIcon
                  icon={Call02Icon}
                  size={17}
                  className="text-brand-primary"
                />
                {phone.display}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <QuoteWizard />
        </Reveal>
      </div>
    </section>
  )
}
