import {
  AirVentIcon,
  CleanIcon,
  FanIcon,
  Home01Icon,
  Leaf01Icon,
  SaveEnergy01Icon,
  SnowflakeIcon,
  ThermometerSunIcon,
} from "@hugeicons/core-free-icons"
import { FrigoriasCalculator } from "@/components/frigorias-calculator"
import { AirConditionerArt } from "@/components/illustrations"
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

const slug = "aire-acondicionado"
const description =
  "Instalación de aire acondicionado en Zizur Mayor, Pamplona y comarca: split, multisplit, conductos y bomba de calor. Mantenimiento, limpieza y reparación. Presupuesto sin compromiso."

export const metadata = serviceMetadata({
  slug,
  title: "Instalación de aire acondicionado en Pamplona y Zizur Mayor · akiMAT",
  description,
})

const whatsapp = {
  label: "Pedir presupuesto",
  href: whatsappLink("Hola akiMAT, me gustaría instalar aire acondicionado."),
}

const types: Feature[] = [
  {
    icon: AirVentIcon,
    title: "Split de pared",
    text: "Una unidad interior y una exterior. La opción más habitual para climatizar un salón o un dormitorio.",
  },
  {
    icon: Home01Icon,
    title: "Multisplit",
    text: "Una sola unidad exterior para varias interiores: climatizas varias habitaciones con menos aparatos en la fachada.",
  },
  {
    icon: FanIcon,
    title: "Por conductos",
    text: "El aire llega a cada estancia por rejillas discretas. Ideal en reformas o viviendas con falso techo.",
  },
  {
    icon: ThermometerSunIcon,
    title: "Bomba de calor",
    text: "Los equipos actuales enfrían en verano y calientan en invierno con muy poco consumo.",
  },
]

const maintenance: Feature[] = [
  {
    icon: CleanIcon,
    title: "Limpieza de filtros y unidades",
    text: "Un equipo limpio enfría mejor, hace menos ruido y el aire que respiras es más sano.",
  },
  {
    icon: SnowflakeIcon,
    title: "Revisión del circuito",
    text: "Comprobamos presiones, posibles fugas de gas refrigerante y el desagüe de la unidad interior.",
  },
  {
    icon: SaveEnergy01Icon,
    title: "Menos consumo",
    text: "Un equipo bien mantenido trabaja menos para dar la misma temperatura, y eso se nota en la factura.",
  },
  {
    icon: Leaf01Icon,
    title: "Más vida útil",
    text: "Las revisiones a tiempo evitan averías y alargan los años de servicio del equipo.",
  },
]

const steps = [
  {
    title: "Nos cuentas qué quieres",
    text: "Qué estancias quieres climatizar y cómo es tu casa. Una foto de dónde iría el equipo nos ayuda mucho.",
  },
  {
    title: "Visita y propuesta",
    text: "Calculamos la potencia, vemos el mejor sitio para cada unidad y te proponemos equipos con su presupuesto.",
  },
  {
    title: "Instalación",
    text: "Montamos las unidades, hacemos la conexión y el vacío del circuito y lo dejamos todo funcionando y recogido.",
  },
  {
    title: "Puesta a punto",
    text: "Te explicamos cómo usarlo para ahorrar y nos encargamos del mantenimiento cuando lo necesites.",
  },
]

const faqs: Faq[] = [
  {
    question: "¿Qué potencia de aire acondicionado necesito?",
    answer:
      "Como referencia, unas 100 frigorías por metro cuadrado en una estancia normal, y algo más si le da mucho el sol o es un último piso. Usa la calculadora de esta página para hacerte una idea; en la visita la ajustamos a tu casa.",
  },
  {
    question: "¿El aire acondicionado también da calor?",
    answer:
      "Sí. Los equipos con bomba de calor, que son la mayoría hoy en día, sirven tanto para enfriar en verano como para calentar en invierno.",
  },
  {
    question:
      "¿Necesito permiso de la comunidad para poner la unidad exterior?",
    answer:
      "Depende de dónde vaya. Si la unidad exterior se coloca en la fachada o en una zona común, conviene consultar los estatutos o pedir autorización a la comunidad. En la visita te ayudamos a buscar la mejor ubicación.",
  },
  {
    question: "¿Cada cuánto hay que hacer el mantenimiento?",
    answer:
      "Recomendamos una limpieza y revisión al año, mejor antes del verano. Así el equipo rinde al máximo cuando más lo necesitas.",
  },
  {
    question: "¿Cuánto se tarda en instalar un split?",
    answer:
      "Una instalación sencilla de un split de pared suele quedar lista en una jornada. Los multisplit y los equipos por conductos llevan más tiempo: te lo confirmamos en el presupuesto.",
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
      <main className="bg-ink-950 text-zinc-100">
        <LandingHero
          label="Aire acondicionado"
          title="Aire acondicionado en Pamplona y"
          highlight="Zizur Mayor"
          subtitle="Te ayudamos a elegir el equipo adecuado, lo instalamos y lo mantenemos a punto para que funcione bien y consuma lo menos posible. Frío en verano y calor en invierno."
          whatsapp={whatsapp}
          checks={[
            "Split, multisplit y conductos",
            "Bomba de calor",
            "Mantenimiento",
          ]}
          Art={AirConditionerArt}
          artClass="w-[82%]"
          badge={{
            title: "Frío y calor con el mismo equipo",
            text: "Equipos con bomba de calor de bajo consumo",
          }}
        />
        <TrustBar />

        <Section tone="dark">
          <SectionHeading
            label="Tipos de instalación"
            title="El equipo adecuado para"
            highlight="cada casa"
            intro="No todas las viviendas necesitan lo mismo. Te asesoramos según las estancias, la orientación y tu presupuesto."
          />
          <FeatureGrid items={types} columns={4} />
        </Section>

        <Section tone="darker" id="calculadora">
          <SectionHeading
            label="Calculadora"
            title="¿Qué potencia"
            highlight="necesitas"
            end="?"
            intro="Mueve el control con los metros de la estancia y marca lo que corresponda. Te damos una cifra orientativa en frigorías y el tamaño de equipo que suele encajar."
          />
          <FrigoriasCalculator />
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Mantenimiento"
            title="Un aire bien cuidado"
            highlight="dura más"
            intro="Revisamos y limpiamos tu equipo para que enfríe y caliente como el primer día."
          />
          <FeatureGrid items={maintenance} columns={4} />
          <div className="mt-8">
            <Callout
              icon={SnowflakeIcon}
              title="¿Tu aire no enfría como antes?"
            >
              Puede ser suciedad en los filtros, falta de gas refrigerante o un
              problema en la unidad exterior. Avísanos y lo revisamos.
            </Callout>
          </div>
        </Section>

        <Section tone="darker">
          <SectionHeading
            label="Cómo trabajamos"
            title="Tu aire acondicionado,"
            highlight="sin complicaciones"
          />
          <Steps steps={steps} />
        </Section>

        <Section tone="dark">
          <SectionHeading
            label="Preguntas frecuentes"
            title="Dudas sobre"
            highlight="aire acondicionado"
          />
          <FaqList faqs={faqs} />
        </Section>

        <FinalCta
          title="¿Preparamos tu casa para el verano?"
          text="Cuéntanos qué estancias quieres climatizar y te preparamos una propuesta sin compromiso."
          whatsapp={whatsapp}
          currentSlug={slug}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
