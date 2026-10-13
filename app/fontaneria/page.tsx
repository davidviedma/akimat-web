import {
  Alert02Icon,
  Bathtub01Icon,
  DashboardSpeed01Icon,
  DropletIcon,
  PipelineIcon,
  Sink01Icon,
  Tap02Icon,
  ThermometerWarmIcon,
  Toilet01Icon,
  WaterPumpIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons"
import { FaucetArt } from "@/components/illustrations"
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

const slug = "fontaneria"
const description =
  "Fontanero en Zizur Mayor, Pamplona y comarca: reparación de fugas y averías, instalaciones de agua, sanitarios, grifería, termos y reformas de baño. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title: "Fontanero en Zizur Mayor y Pamplona · akiMAT",
  description,
})

const whatsapp = {
  label: "Pedir presupuesto",
  href: whatsappLink("Hola akiMAT, necesito un fontanero."),
}

const services: Feature[] = [
  {
    icon: Wrench01Icon,
    title: "Fugas y averías",
    text: "Localizamos la fuga, reparamos la tubería o el elemento que falla y dejamos la instalación funcionando.",
  },
  {
    icon: PipelineIcon,
    title: "Instalaciones de agua",
    text: "Instalaciones nuevas y renovación de tuberías antiguas de agua fría, caliente y desagües.",
  },
  {
    icon: Bathtub01Icon,
    title: "Cambio de bañera por ducha",
    text: "Quitamos la bañera y colocamos un plato de ducha: más cómodo, más seguro y más fácil de limpiar.",
  },
  {
    icon: Toilet01Icon,
    title: "Sanitarios y grifería",
    text: "Cambio e instalación de inodoros, lavabos, fregaderos, grifos, cisternas y mecanismos.",
  },
  {
    icon: WaterPumpIcon,
    title: "Termos y calentadores",
    text: "Instalación y sustitución de termos eléctricos y calentadores para el agua caliente.",
  },
  {
    icon: Sink01Icon,
    title: "Reformas de baño y cocina",
    text: "Toda la fontanería de tu reforma: nuevas tomas, desagües y conexiones bien hechas desde el principio.",
  },
]

const faults: Feature[] = [
  {
    icon: DashboardSpeed01Icon,
    title: "Poca presión de agua",
    text: "Sale poca agua por los grifos o la ducha. Puede ser cal, una llave medio cerrada o una fuga.",
  },
  {
    icon: Tap02Icon,
    title: "Grifo que gotea",
    text: "Una gota continua es agua y dinero que se van. Suele arreglarse cambiando el cartucho o las juntas.",
  },
  {
    icon: Toilet01Icon,
    title: "La cisterna no para de cargar",
    text: "Se oye el agua correr o el inodoro se llena sin parar: casi siempre es el mecanismo de descarga.",
  },
  {
    icon: DropletIcon,
    title: "Manchas de humedad",
    text: "Una mancha en el techo o la pared puede ser una fuga oculta. Cuanto antes se localice, mejor.",
  },
  {
    icon: Alert02Icon,
    title: "Desagües lentos u olores",
    text: "El agua tarda en irse o huele mal: un atasco o un sifón seco o mal instalado.",
  },
  {
    icon: ThermometerWarmIcon,
    title: "No sale agua caliente",
    text: "El termo o el calentador no calientan bien o tardan demasiado. Lo revisamos y te decimos si compensa repararlo.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Atendéis averías urgentes de fontanería?",
    answer:
      "Sí. Si tienes una avería, llámanos y te diremos cuándo podemos ir. Mientras tanto, si hay una fuga, cierra la llave de paso general de la vivienda.",
  },
  {
    question: "¿Me dais presupuesto antes de empezar?",
    answer:
      "Sí. Vemos el problema, te explicamos la solución y te damos un presupuesto claro y sin compromiso. Solo empezamos con tu aprobación.",
  },
  {
    question: "¿Cuánto se tarda en cambiar una bañera por un plato de ducha?",
    answer:
      "Un cambio sencillo suele quedar listo en uno o dos días, según el estado del baño y los acabados. En la visita te confirmamos el plazo y todo lo que incluye.",
  },
  {
    question: "¿Hacéis también la fontanería de una reforma completa?",
    answer:
      "Sí. Nos ocupamos de la fontanería de reformas de baño y cocina, y si además necesitas calefacción o aire acondicionado, lo hacemos todo con el mismo equipo.",
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
      <main className="bg-ink-950 text-zinc-100">
        <LandingHero
          label="Fontanería"
          title="Fontanero en Zizur Mayor y"
          highlight="Pamplona"
          subtitle="Reparamos fugas y averías, renovamos instalaciones de agua y cambiamos sanitarios, grifería y termos. Trabajo limpio y presupuesto claro antes de empezar."
          whatsapp={whatsapp}
          checks={[
            "Fugas y averías",
            "Instalaciones nuevas",
            "Reformas de baño",
          ]}
          Art={FaucetArt}
          artClass="w-[62%]"
          badge={{
            title: "Zizur Mayor, Pamplona y comarca",
            text: "Llámanos y te decimos cuándo podemos ir",
          }}
        />
        <TrustBar />

        <Section tone="dark">
          <SectionHeading
            label="Qué hacemos"
            title="Toda la fontanería de tu casa,"
            highlight="bien hecha"
            intro="De una pequeña reparación a la instalación completa de un baño o una cocina."
          />
          <FeatureGrid items={services} />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Averías habituales"
            title="Las averías"
            highlight="más habituales"
            intro="Estas son las averías que más nos encontramos. Si reconoces alguna, avísanos antes de que vaya a más."
          />
          <FeatureGrid items={faults} />
          <div className="mt-8">
            <Callout icon={DropletIcon} title="¿Tienes una fuga? Corta el agua">
              Cierra la llave de paso general de la vivienda. Si el agua está
              cerca de enchufes o aparatos eléctricos, desconecta también la luz
              desde el cuadro. Después llámanos y cuéntanos qué ves.
            </Callout>
          </div>
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Cómo trabajamos"
            title="Del aviso a la avería"
            highlight="resuelta"
          />
          <Steps />
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Preguntas frecuentes"
            title="Dudas sobre"
            highlight="fontanería"
          />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Necesitas un fontanero?"
          text="Escríbenos o llámanos y te decimos cuándo podemos pasar. En Zizur Mayor, Pamplona y toda la comarca."
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
