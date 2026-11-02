import {
  Calendar03Icon,
  FireIcon,
  FireSecurityIcon,
  HeaterIcon,
  Wrench01Icon,
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
  type Faq,
  type Feature,
} from "@/components/landing"
import { Nav } from "@/components/nav"
import { Calderas } from "@/components/sections/calderas"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { serviceMetadata, whatsappLink } from "@/lib/site"

const slug = "calderas-de-gas"
const description =
  "Instalación y cambio de calderas de condensación Sime y Kosner en Pamplona y comarca. Radiadores, suelo radiante, averías y revisiones. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title: "Instalación de calderas en Pamplona · Sime y Kosner · akiMAT",
  description,
})

const whatsapp = whatsappLink(
  "Hola akiMAT, quiero cambiar o instalar una caldera."
)

const features: Feature[] = [
  {
    icon: FireIcon,
    title: "Cambio de caldera",
    text: "Por una de condensación Sime o Kosner. Retiramos la antigua.",
  },
  {
    icon: HeaterIcon,
    title: "Radiadores y suelo radiante",
    text: "Instalación nueva o ampliación.",
  },
  {
    icon: Wrench01Icon,
    title: "Averías",
    text: "Diagnóstico y presupuesto antes de reparar.",
  },
  {
    icon: Calendar03Icon,
    title: "Revisiones",
    text: "Para que sea segura y consuma menos.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Cuándo compensa cambiar la caldera?",
    answer:
      "Si tiene muchos años, se avería a menudo o las reparaciones empiezan a ser caras. Una de condensación gasta bastante menos gas.",
  },
  {
    question: "¿Cuánto se tarda en cambiarla?",
    answer:
      "Un cambio sin modificar la instalación suele quedar hecho en una jornada.",
  },
  {
    question: "¿Cada cuánto hay que revisarla?",
    answer:
      "El RITE obliga a una revisión de mantenimiento al menos cada dos años; lo ideal es cada año antes del invierno.",
  },
]

export default function CalderasPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Instalación de calderas"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main>
        <ServiceHero
          label="Calderas"
          title="Instalación de calderas Sime y Kosner."
          subtitle="Cambio de caldera, radiadores y suelo radiante. Calefacción y agua caliente sin preocupaciones."
          photo={{
            // TODO: sustituir por la foto de la sala de calderas (depósitos Greenheiss).
            src: "/fotos/nave-industrial.jpg",
            alt: "Instalación de calefacción",
            position: "50% 60%",
          }}
          whatsapp={whatsapp}
          checks={["Condensación", "Sime y Kosner", "Suelo radiante"]}
        />

        <Section>
          <SectionHeading
            label="Qué hacemos"
            title="Calefacción y agua caliente."
          />
          <FeatureGrid items={features} />
          <div className="mt-6">
            <Callout
              icon={FireSecurityIcon}
              title="Si huele a gas, no esperes"
              tone="warning"
            >
              No enciendas ni apagues nada eléctrico. Cierra la llave del gas,
              abre las ventanas, sal de casa y llama al 112 o a tu
              distribuidora.
            </Callout>
          </div>
        </Section>

        <Calderas />

        <Section>
          <SectionHeading label="Dudas" title="Preguntas frecuentes." />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Cambiamos tu caldera?"
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
