import { business } from "@/lib/site"

export type Faq = { question: string; answer: string }

const openHours = business.hours
  .filter(({ time }) => time !== "Cerrado")
  .map(
    ({ days, time }) => `${days.toLowerCase()} de ${time.replace(" – ", " a ")}`
  )
  .join(" y ")

export const faqs: Faq[] = [
  {
    question: "¿En qué zonas trabajáis?",
    answer:
      "Estamos en Zizur Mayor y trabajamos en Pamplona y su comarca: Barañáin, Cizur, Orkoien, Berriozar, Ansoáin, Burlada, Villava, Huarte, Mutilva, Noáin y alrededores. Si estás en otra zona de Navarra, llámanos y te confirmamos si podemos ir.",
  },
  {
    question: "¿El presupuesto tiene algún compromiso?",
    answer:
      "No. Primero vemos lo que necesitas, te explicamos las opciones y te damos un presupuesto claro. Solo empezamos a trabajar cuando nos das el visto bueno.",
  },
  {
    question:
      "¿Instaláis aire acondicionado y calderas de gas además de fontanería?",
    answer:
      "Sí. Somos una empresa de servicios integrales: hacemos fontanería, instalación y mantenimiento de aire acondicionado y calderas de gas. Así, si tu obra toca varias cosas, tienes un único equipo y un único presupuesto.",
  },
  {
    question: "¿Qué potencia de aire acondicionado necesito?",
    answer:
      "Como referencia, se calculan unas 100 frigorías por metro cuadrado en una estancia normal, y algo más si le da mucho el sol, es un último piso o hay muchos equipos que generan calor. En la página de aire acondicionado tienes una calculadora orientativa, y en la visita lo ajustamos a tu caso.",
  },
  {
    question: "¿Cada cuánto hay que revisar la caldera de gas?",
    answer:
      "La normativa de instalaciones térmicas (RITE) establece una revisión de mantenimiento de la caldera de gas como mínimo cada dos años, aunque lo ideal es revisarla cada año antes del invierno. Aparte, la distribuidora de gas hace cada cinco años la inspección periódica obligatoria de la instalación.",
  },
  {
    question: "Tengo una fuga de agua, ¿qué hago mientras llegáis?",
    answer:
      "Cierra la llave de paso general de la vivienda para cortar el agua. Si el agua está cerca de enchufes o aparatos eléctricos, desconecta también la electricidad desde el cuadro. Después llámanos y cuéntanos qué ves: así vamos con el material adecuado.",
  },
  {
    question: "Huele a gas, ¿qué hago?",
    answer:
      "No enciendas ni apagues luces ni aparatos eléctricos y no uses llamas. Cierra la llave de paso del gas, abre puertas y ventanas y sal de la vivienda. Desde fuera, llama al teléfono de urgencias de tu distribuidora de gas o al 112.",
  },
  {
    question: "¿Cuál es vuestro horario?",
    answer: `Nuestro horario: ${openHours}. Puedes escribirnos por WhatsApp en cualquier momento y te contestaremos lo antes posible.`,
  },
]
