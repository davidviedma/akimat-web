import {
  Bathtub01Icon,
  DropletIcon,
  PipelineIcon,
  WaterPumpIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"
import {
  Callout,
  FaqList,
  FeatureGrid,
  FinalCta,
  PhotoStrip,
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
import { serviceMetadata, whatsappLink, works } from "@/lib/site"

const slug = "fontaneria"
const description =
  "Fontanero en Pamplona y comarca: averías y fugas, reformas de baño, instalaciones de agua, termos y grifería. Desde 2006 en Mutilva. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title: "Fontanero en Pamplona y comarca · akiMAT",
  description,
})

const whatsapp = whatsappLink("Hola akiMAT, necesito un fontanero.")

const features: Feature[] = [
  {
    icon: Wrench01Icon,
    title: "Averías y fugas",
    text: "Localizamos y reparamos.",
  },
  {
    icon: Bathtub01Icon,
    title: "Reformas de baño",
    text: "Cambio de bañera por ducha, sanitarios y grifería.",
  },
  {
    icon: PipelineIcon,
    title: "Instalaciones de agua",
    text: "Nuevas o renovación de tuberías antiguas.",
  },
  {
    icon: WaterPumpIcon,
    title: "Termos y calentadores",
    text: "Instalación y sustitución.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Atendéis averías urgentes?",
    answer:
      "Sí. Llámanos y te decimos cuándo podemos ir. Mientras tanto, cierra la llave de paso general de la vivienda.",
  },
  {
    question: "¿Me dais presupuesto antes de empezar?",
    answer:
      "Siempre. Vemos el problema, te explicamos la solución y solo empezamos con tu aprobación.",
  },
  {
    question: "¿Hacéis la fontanería de una reforma completa?",
    answer:
      "Sí, y si la reforma lleva calefacción, aerotermia o aire acondicionado, lo hacemos todo con el mismo equipo.",
  },
]

export default function FontaneriaPage() {
  return (
    <>
      <ServiceJsonLd
        slug={slug}
        name="Fontanería"
        description={description}
        faqs={faqs}
      />
      <Nav />
      <main>
        <ServiceHero
          label="Fontanería"
          title="Fontanería en Pamplona y comarca."
          subtitle="Averías, reformas de baño e instalaciones de agua. Trabajo limpio y presupuesto claro."
          photo={{
            src: "/fotos/bano-inodoro.jpg",
            alt: "Baño reformado por akiMAT",
            position: "50% 45%",
          }}
          whatsapp={whatsapp}
          checks={[
            "Averías y fugas",
            "Reformas de baño",
            "Instalaciones nuevas",
          ]}
        />

        <Section>
          <SectionHeading
            label="Qué hacemos"
            title="Toda la fontanería de tu casa."
          />
          <FeatureGrid items={features} />
          <div className="mt-6">
            <Callout icon={DropletIcon} title="¿Tienes una fuga? Corta el agua">
              Cierra la llave de paso general y, si hay enchufes cerca, baja la
              luz desde el cuadro. Después, llámanos.
            </Callout>
          </div>
        </Section>

        <Section tone="soft">
          <SectionHeading label="Trabajos" title="Así quedan." />
          <PhotoStrip
            photos={works.filter((photo) => photo.src.includes("bano"))}
          />
        </Section>

        <Section>
          <SectionHeading label="Dudas" title="Preguntas frecuentes." />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Necesitas un fontanero?"
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
