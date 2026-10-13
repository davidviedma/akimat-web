import { HugeiconsIcon } from "@hugeicons/react"
import {
  Alert02Icon,
  Calendar03Icon,
  DashboardSpeed01Icon,
  FireIcon,
  FireSecurityIcon,
  HeaterIcon,
  Leaf01Icon,
  PowerIcon,
  SaveEnergy01Icon,
  ThermometerIcon,
  VolumeHighIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"
import { BoilerArt } from "@/components/illustrations"
import {
  Callout,
  FaqList,
  FeatureGrid,
  FinalCta,
  LandingHero,
  Section,
  SectionHeading,
  ServiceJsonLd,
  Steps,
  TrustBar,
  type Faq,
  type Feature,
} from "@/components/landing"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { serviceMetadata, whatsappLink } from "@/lib/site"

const slug = "calderas-de-gas"
const description =
  "Calderas de gas en Zizur Mayor, Pamplona y comarca: cambio e instalación de calderas de condensación, reparación de averías, revisión y mantenimiento. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title:
    "Calderas de gas en Pamplona y Zizur Mayor: instalación y reparación · akiMAT",
  description,
})

const whatsapp = {
  label: "Pedir presupuesto",
  href: whatsappLink(
    "Hola akiMAT, quería consultaros sobre mi caldera de gas."
  ),
}

const services: Feature[] = [
  {
    icon: FireIcon,
    title: "Cambio de caldera",
    text: "Sustituimos tu caldera antigua por una de condensación, más eficiente, y retiramos la vieja.",
  },
  {
    icon: Wrench01Icon,
    title: "Reparación de averías",
    text: "Diagnosticamos el fallo y te damos un presupuesto claro antes de reparar.",
  },
  {
    icon: Calendar03Icon,
    title: "Revisión y mantenimiento",
    text: "Revisiones periódicas para que la caldera sea segura, consuma menos y cumpla la normativa.",
  },
  {
    icon: HeaterIcon,
    title: "Calefacción y radiadores",
    text: "Instalación y cambio de radiadores, purgado del circuito, termostatos y válvulas.",
  },
]

const faults: Feature[] = [
  {
    icon: ThermometerIcon,
    title: "No calienta el agua",
    text: "El agua caliente tarda mucho, sale templada o la calefacción no llega a la temperatura.",
  },
  {
    icon: DashboardSpeed01Icon,
    title: "Pierde presión",
    text: "Tienes que rellenar agua a menudo. Suele indicar una pequeña fuga o una pieza que falla.",
  },
  {
    icon: VolumeHighIcon,
    title: "Hace ruidos",
    text: "Golpes, silbidos o burbujeo: aire en el circuito, cal acumulada o una bomba que empieza a fallar.",
  },
  {
    icon: Alert02Icon,
    title: "Se bloquea o da error",
    text: "Muestra un código de error o se apaga sola. Rearmarla una y otra vez no soluciona el problema.",
  },
  {
    icon: PowerIcon,
    title: "No enciende",
    text: "La caldera no arranca o se apaga nada más encenderse.",
  },
  {
    icon: FireSecurityIcon,
    title: "La llama se apaga",
    text: "La llama no se mantiene o la caldera se para a los pocos minutos de funcionar.",
  },
]

const benefits: Feature[] = [
  {
    icon: SaveEnergy01Icon,
    title: "Menos gas",
    text: "Las calderas de condensación aprovechan el calor de los humos y consumen bastante menos que una caldera antigua.",
  },
  {
    icon: Leaf01Icon,
    title: "Menos emisiones",
    text: "Al quemar menos gas, emiten menos CO₂ y NOx. Además, son las que permite instalar la normativa europea actual.",
  },
  {
    icon: ThermometerIcon,
    title: "Más confort",
    text: "Agua caliente al momento y una temperatura más estable en toda la casa.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Cada cuánto hay que revisar la caldera de gas?",
    answer:
      "La normativa de instalaciones térmicas (RITE) establece una revisión de mantenimiento de la caldera de gas como mínimo cada dos años, aunque lo ideal es revisarla cada año antes del invierno. Aparte, la distribuidora de gas hace cada cinco años la inspección periódica obligatoria de la instalación.",
  },
  {
    question: "¿Cuándo compensa cambiar la caldera?",
    answer:
      "Si tu caldera tiene muchos años, se avería a menudo o las reparaciones empiezan a ser caras, suele compensar cambiarla por una de condensación: gastarás menos gas y ganarás en tranquilidad. Te lo valoramos sin compromiso.",
  },
  {
    question: "¿Qué hago si la caldera pierde presión?",
    answer:
      "Con la caldera en frío, la presión suele estar entre 1 y 1,5 bar. Puedes rellenar siguiendo el manual, pero si tienes que hacerlo a menudo es que hay una fuga o una pieza que falla: llámanos para revisarla.",
  },
  {
    question: "¿Cuánto se tarda en cambiar una caldera?",
    answer:
      "Un cambio de caldera sin modificaciones importantes en la instalación suele quedar hecho en una jornada. Si hay que cambiar la salida de humos o la ubicación, te lo indicamos en el presupuesto.",
  },
  {
    question: "Huele a gas, ¿qué hago?",
    answer:
      "No enciendas ni apagues luces ni aparatos eléctricos y no uses llamas. Cierra la llave de paso del gas, abre puertas y ventanas y sal de la vivienda. Desde fuera, llama al teléfono de urgencias de tu distribuidora de gas o al 112.",
  },
]

export default function CalderasPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Calderas de gas"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main className="bg-ink-950 text-zinc-100">
        <LandingHero
          label="Calderas de gas"
          title="Calderas de gas en Zizur Mayor y"
          highlight="Pamplona"
          subtitle="Instalamos y cambiamos calderas de condensación, reparamos averías y hacemos las revisiones para que tengas calefacción y agua caliente sin preocupaciones."
          whatsapp={whatsapp}
          checks={["Cambio de caldera", "Averías", "Revisiones"]}
          Art={BoilerArt}
          artClass="w-[34%]"
          badge={{
            title: "Calefacción y agua caliente",
            text: "Instalación, reparación y mantenimiento",
          }}
        />
        <TrustBar />

        <Section tone="dark">
          <SectionHeading
            label="Qué hacemos"
            title="Todo lo que necesita"
            highlight="tu caldera"
            intro="Desde la primera instalación hasta las revisiones de cada año."
          />
          <FeatureGrid items={services} columns={4} />
        </Section>

        <Section tone="darker">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <SectionHeading
              label="Calderas de condensación"
              title="Cambiar la caldera"
              highlight="se nota"
              intro="Desde 2015 la normativa europea de ecodiseño exige que las calderas nuevas sean de alta eficiencia, lo que en la práctica significa calderas de condensación. Si la tuya es antigua, el cambio se nota en la factura y en el confort."
            />
            <div className="grid grid-cols-1 gap-4">
              {benefits.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-3xl border border-white/8 bg-ink-900 p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <HugeiconsIcon icon={icon} size={24} />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-heading text-lg font-semibold text-white">
                      {title}
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-400">
                      {text}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Averías habituales"
            title="¿Qué le pasa a"
            highlight="tu caldera"
            end="?"
            intro="Estas son las averías que más reparamos. Si reconoces alguna, avísanos antes de que vaya a más."
          />
          <FeatureGrid items={faults} />
          <div className="mt-8">
            <Callout
              icon={FireSecurityIcon}
              title="Si huele a gas, no esperes"
              tone="warning"
            >
              No enciendas ni apagues luces ni aparatos eléctricos y no uses
              llamas. Cierra la llave de paso del gas, abre puertas y ventanas,
              sal de la vivienda y, desde fuera, llama al teléfono de urgencias
              de tu distribuidora de gas o al 112.
            </Callout>
          </div>
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Cómo trabajamos"
            title="De la avería a la caldera"
            highlight="funcionando"
          />
          <Steps />
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Preguntas frecuentes"
            title="Dudas sobre"
            highlight="calderas"
          />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Problemas con la caldera o quieres cambiarla?"
          text="Escríbenos o llámanos y te decimos cuándo podemos ir a verla. En Zizur Mayor, Pamplona y comarca."
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
