"use client"

import { useState, type CSSProperties, type ReactNode } from "react"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  AirVentIcon,
  Alert02Icon,
  Call02Icon,
  Clock01Icon,
  DropletIcon,
  FireIcon,
  Location01Icon,
  PaintRollerIcon,
  Settings01Icon,
  SparklesIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"
import Stepper, { Step } from "@/components/reactbits/Stepper"
import { WhatsAppIcon } from "@/components/whatsapp-button"
import { business, fullAddress, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Option = { value: string; icon: IconSvgElement; hint: string }

const serviceOptions: Option[] = [
  { value: "Fontanería", icon: DropletIcon, hint: "Agua, fugas, baños" },
  { value: "Aire acondicionado", icon: AirVentIcon, hint: "Split, conductos" },
  { value: "Caldera de gas", icon: FireIcon, hint: "Calefacción, ACS" },
  { value: "Otro trabajo", icon: SparklesIcon, hint: "Cuéntanos" },
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
              "focus-visible:ring-3 focus-visible:ring-brand-primary/40 focus-visible:outline-none",
              selected
                ? "border-brand-primary bg-brand-primary/10"
                : "border-white/10 bg-white/[0.03] hover:border-white/25"
            )}
          >
            <HugeiconsIcon
              icon={option.icon}
              size={22}
              className={selected ? "text-brand-primary" : "text-zinc-400"}
            />
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-white sm:text-[15px]">
                {option.value}
              </span>
              <span className="text-xs text-zinc-400">{option.hint}</span>
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
      <span className="text-sm font-medium text-zinc-300">{label}</span>
      {children}
    </label>
  )
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[15px] text-white placeholder:text-zinc-500 transition-colors focus:border-brand-primary focus:outline-none focus:ring-3 focus:ring-brand-primary/25"

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
      accentColor="#0099d6"
      backButtonText="Atrás"
      nextButtonText="Continuar"
      completeButtonText="Enviar por WhatsApp"
      nextButtonProps={{ disabled: !canContinue }}
      style={
        {
          "--stepper-frame": "rgba(11, 22, 32, 0.82)",
          "--stepper-tile": "linear-gradient(180deg, #1d3040 0%, #13222f 100%)",
          // Texto oscuro sobre el cian, como el resto de botones de la web
          "--stepper-solid-ink": "#031620",
        } as CSSProperties
      }
      completedContent={
        <div className="flex flex-col items-start gap-4 py-2">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[#25D366] text-white">
            <WhatsAppIcon className="size-6" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-heading text-xl font-semibold text-white">
              ¡Mensaje preparado!
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              Te hemos abierto WhatsApp con tu solicitud. Solo tienes que
              enviarla y te contestaremos lo antes posible. Si no se ha abierto,
              usa el botón.
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
              className="inline-flex h-10 items-center rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hacer otra consulta
            </button>
          </div>
        </div>
      }
    >
      <Step title="Servicio">
        <div className="flex flex-col gap-4">
          <p className="font-heading text-lg font-semibold text-white">
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
          <p className="font-heading text-lg font-semibold text-white">
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
          <p className="font-heading text-lg font-semibold text-white">
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
          <p className="text-xs leading-relaxed text-zinc-500">
            Al enviar se abrirá WhatsApp con tu mensaje ya escrito. No guardamos
            ningún dato en esta web.
          </p>
        </div>
      </Step>
    </Stepper>
  )
}

const contact = [
  {
    icon: Call02Icon,
    label: "Teléfono",
    value: business.phone.display,
    href: business.phone.href,
  },
  {
    icon: Call02Icon,
    label: "Móvil",
    value: business.mobile.display,
    href: business.mobile.href,
  },
  {
    icon: Location01Icon,
    label: "Dirección",
    value: fullAddress,
    href: business.mapsUrl,
  },
]

export function Presupuesto() {
  return (
    <section
      id="presupuesto"
      className="relative overflow-hidden bg-ink-900 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div className="relative container mx-auto grid grid-cols-1 gap-10 px-6 sm:px-12 lg:grid-cols-[1fr_1.1fr] lg:gap-x-16 lg:gap-y-8 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1">
          <p className="text-sm font-semibold tracking-widest text-brand-primary uppercase">
            Presupuesto
          </p>
          <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            Pide tu presupuesto{" "}
            <span className="text-brand-primary">en un minuto</span>.
          </h2>
          <p className="max-w-lg leading-relaxed text-zinc-400">
            Responde a tres preguntas y te preparamos el mensaje para WhatsApp.
            Si lo prefieres, llámanos: estaremos encantados de atenderte.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-4">
          <QuoteWizard />
        </div>

        <ul className="flex flex-col gap-3 lg:col-start-1 lg:row-start-2">
          {contact.map(({ icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-ink-950/60 p-4 transition-colors hover:border-brand-primary/60"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <HugeiconsIcon icon={icon} size={20} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs tracking-wider text-zinc-500 uppercase">
                    {label}
                  </span>
                  <span className="font-medium text-white transition-colors group-hover:text-brand-primary">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          ))}
          <li className="flex items-start gap-4 rounded-2xl border border-white/8 bg-ink-950/60 p-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              <HugeiconsIcon icon={Clock01Icon} size={20} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-xs tracking-wider text-zinc-500 uppercase">
                Horario
              </span>
              {business.hours.map(({ days, time }) => (
                <span key={days} className="text-sm text-zinc-300">
                  <span className="text-white">{days}:</span> {time}
                </span>
              ))}
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
