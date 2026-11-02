import {
  HeaterIcon,
  Leaf01Icon,
  SnowflakeIcon,
  SolarPowerIcon,
  WaterEnergyIcon,
} from "@hugeicons/core-free-icons"
import {
  Callout,
  FaqList,
  FeatureGrid,
  FinalCta,
  Section,
  SectionHeading,
  ServiceHero,
  ServiceJsonLd,
  Steps,
  type Faq,
  type Feature,
} from "@/components/landing"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { serviceMetadata, whatsappLink } from "@/lib/site"

const slug = "aerotermia"
const description =
  "Instalación de aerotermia en Pamplona y comarca: bomba de calor Kosner para calefacción, refrigeración y agua caliente con un solo equipo. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title: "Aerotermia en Pamplona y Navarra · akiMAT",
  description,
})

const whatsapp = whatsappLink("Hola akiMAT, me interesa la aerotermia.")

const features: Feature[] = [
  {
    icon: HeaterIcon,
    title: "Calefacción",
    text: "Con suelo radiante o radiadores de baja temperatura.",
  },
  {
    icon: SnowflakeIcon,
    title: "Frío en verano",
    text: "La misma máquina refresca la casa.",
  },
  {
    icon: WaterEnergyIcon,
    title: "Agua caliente",
    text: "Con depósito acumulador.",
  },
  {
    icon: SolarPowerIcon,
    title: "Con placas solares",
    text: "Combinadas, el consumo baja aún más.",
  },
]

const steps = [
  {
    title: "Toma el calor del aire",
    text: "La unidad exterior lo capta incluso con frío.",
  },
  {
    title: "Lo pasa al agua",
    text: "Calienta o enfría el circuito de la casa.",
  },
  {
    title: "Tú notas el confort",
    text: "Calefacción, frío y agua caliente desde un solo equipo.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Sirve para una casa con radiadores?",
    answer:
      "Sí. Funciona mejor con suelo radiante o radiadores de baja temperatura; en la visita vemos tu instalación y te decimos qué conviene.",
  },
  {
    question: "¿Cuánto consume?",
    answer:
      "Por cada kWh eléctrico que gasta entrega entre 3 y 4 kWh de calor, según el equipo y la temperatura exterior. Es la forma más eficiente de calentar una casa.",
  },
  {
    question: "¿Hay ayudas?",
    answer:
      "Suele haber ayudas públicas para la aerotermia. Te informamos de las que estén vigentes cuando pidas presupuesto.",
  },
]

export default function AerotermiaPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Aerotermia"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main>
        <ServiceHero
          label="Aerotermia"
          title="Aerotermia: calor, frío y agua caliente."
          subtitle="Una bomba de calor Kosner para toda la casa. Menos consumo, cero gas."
          // TODO: añadir la foto de la unidad Kosner en la cubierta.
          whatsapp={whatsapp}
          checks={[
            "Kosner",
            "Refrigerante R32",
            "Compatible con placas solares",
          ]}
        />

        <Section>
          <SectionHeading label="Cómo funciona" title="Tres pasos." />
          <Steps steps={steps} />
        </Section>

        <Section tone="soft">
          <SectionHeading label="Qué hace" title="Una máquina, todo el año." />
          <FeatureGrid items={features} />
          <div className="mt-6">
            <Callout icon={Leaf01Icon} title="Menos consumo, menos emisiones">
              La aerotermia aprovecha el calor del aire: por cada kWh que
              consume entrega 3-4 kWh de calor.
            </Callout>
          </div>
        </Section>

        <Section>
          <SectionHeading label="Dudas" title="Preguntas frecuentes." />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Pasamos tu casa a aerotermia?"
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
