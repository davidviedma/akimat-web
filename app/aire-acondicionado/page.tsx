import {
  AirVentIcon,
  CleanIcon,
  FanIcon,
  Home01Icon,
  ThermometerSunIcon,
} from "@hugeicons/core-free-icons"
import { FrigoriasCalculator } from "@/components/frigorias-calculator"
import { AirConditionerArt } from "@/components/illustrations"
import {
  Callout,
  FaqList,
  FeatureGrid,
  FinalCta,
  Section,
  SectionHeading,
  ServiceHero,
  ServiceJsonLd,
  type Faq,
  type Feature,
} from "@/components/landing"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { serviceMetadata, whatsappLink } from "@/lib/site"

const slug = "aire-acondicionado"
const description =
  "Instalación de aire acondicionado en Pamplona y comarca: split, multisplit y conductos con bomba de calor. Mantenimiento y reparación. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title: "Instalación de aire acondicionado en Pamplona · akiMAT",
  description,
})

const whatsapp = whatsappLink(
  "Hola akiMAT, me gustaría instalar aire acondicionado."
)

const types: Feature[] = [
  {
    icon: AirVentIcon,
    title: "Split",
    text: "Una estancia. La opción más habitual.",
  },
  {
    icon: Home01Icon,
    title: "Multisplit",
    text: "Varias habitaciones con una sola unidad exterior.",
  },
  {
    icon: FanIcon,
    title: "Conductos",
    text: "Rejillas discretas. Ideal con falso techo.",
  },
  {
    icon: ThermometerSunIcon,
    title: "Bomba de calor",
    text: "Frío en verano y calor en invierno.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Qué potencia necesito?",
    answer:
      "Unas 100 frigorías por metro cuadrado como referencia. Usa la calculadora de esta página; en la visita lo ajustamos.",
  },
  {
    question: "¿Cuánto se tarda en instalar un split?",
    answer: "Una instalación sencilla suele quedar lista en una jornada.",
  },
  {
    question: "¿Cada cuánto hay que limpiarlo?",
    answer: "Una limpieza y revisión al año, mejor antes del verano.",
  },
]

export default function AireAcondicionadoPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Instalación de aire acondicionado"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main>
        <ServiceHero
          label="Aire acondicionado"
          title="Aire acondicionado en Pamplona y comarca."
          subtitle="Te ayudamos a elegir el equipo, lo instalamos y lo mantenemos a punto."
          // TODO: sustituir la ilustración por una foto de un equipo instalado.
          art={<AirConditionerArt className="w-[70%] max-w-md md:w-full" />}
          whatsapp={whatsapp}
          checks={["Split y multisplit", "Conductos", "Mantenimiento"]}
        />

        <Section>
          <SectionHeading
            label="Tipos"
            title="El equipo adecuado para cada casa."
          />
          <FeatureGrid items={types} />
        </Section>

        <Section tone="soft" id="calculadora">
          <SectionHeading
            label="Calculadora"
            title="¿Qué potencia necesitas?"
            intro="Mueve el control con los metros de la estancia."
          />
          <FrigoriasCalculator />
        </Section>

        <Section>
          <SectionHeading label="Dudas" title="Preguntas frecuentes." />
          <FaqList faqs={faqs} />
          <div className="mt-6 max-w-3xl">
            <Callout icon={CleanIcon} title="¿Tu aire no enfría como antes?">
              Filtros sucios, falta de gas o la unidad exterior. Avísanos y lo
              revisamos.
            </Callout>
          </div>
        </Section>

        <FinalCta
          title="¿Preparamos tu casa para el verano?"
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
