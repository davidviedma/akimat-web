import type { Metadata } from "next"
import type { IconSvgElement } from "@hugeicons/react"
import {
  AirVentIcon,
  DropletIcon,
  FireIcon,
  Leaf01Icon,
} from "@hugeicons/core-free-icons"

/**
 * Datos de la empresa. Es la única fuente de verdad para teléfonos,
 * dirección, horario, servicios, fotos, etc.: cambia aquí y se actualiza toda
 * la web.
 *
 * Los datos salen del rótulo de la nave, de la rotulación de las furgonetas
 * y de directorios públicos. Antes de publicar, confírmalos con akiMAT,
 * sobre todo los marcados con TODO.
 */

/**
 * Dirección pública de la web. De ella salen las URL absolutas: la portada que
 * se ve al compartir el enlace (Open Graph), canonical, sitemap y datos
 * estructurados.
 *
 * En Vercel es el dominio de producción del proyecto: el `*.vercel.app`
 * mientras no haya dominio propio y, cuando se añada, ese dominio (Vercel da
 * el más corto, sin `www`, y hace falta un despliegue nuevo para recogerlo).
 * Fuera de Vercel se usa el dominio previsto.
 */
// TODO: confirmar el dominio definitivo de la web.
const PLANNED_URL = "https://www.akimat.es"
const vercelHost = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
export const SITE_URL = vercelHost ? `https://${vercelHost}` : PLANNED_URL

export const business = {
  name: "akiMAT",
  legalName: "Akimat Servicios Integrales, S.L.",
  cif: "B71399406",
  // TODO: completar con los datos de inscripción (tomo, folio y hoja).
  registry: "Inscrita en el Registro Mercantil de Navarra",
  founded: 2006,
  /**
   * Años de experiencia que se anuncian ("+20 años"). Es un número fijo y no
   * un cálculo con la fecha: súbelo a 25 cuando los cumplan, en 2031.
   */
  experienceYears: 20,
  tagline: "Servicios integrales",
  /** Horas que tardan de media en cambiar una caldera (dato de akiMAT). */
  boilerSwapHours: 5,
  phone: { display: "948 186 801", href: "tel:+34948186801" },
  mobile: { display: "629 333 811", href: "tel:+34629333811" },
  // TODO: confirmar que el móvil tiene WhatsApp.
  whatsapp: "34629333811",
  email: "akimatserviciosintegrales@gmail.com",
  address: {
    street: "Polígono Industrial de Mutilva Baja, calle O, nave 22",
    postalCode: "31192",
    city: "Mutilva",
    region: "Navarra",
    /** Cómo se conoce la zona; se usa en los titulares. */
    area: "Mutilva Baja",
  },
  hours: [
    { days: "Lunes a jueves", time: "8:00 – 17:00" },
    { days: "Viernes", time: "8:00 – 14:00" },
    { days: "Sábado y domingo", time: "Cerrado" },
  ],
  openingHoursSchema: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  // TODO: añadir perfiles sociales si los hay (Instagram, Facebook…).
  socials: [] as { label: string; href: string }[],
} as const

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city} (${business.address.region})`

/**
 * Punto exacto de la nave (coordenadas que dio el cliente). Google no sitúa
 * bien la dirección: la búsqueda cae en otra calle del polígono, así que el
 * mapa, "Cómo llegar" y los datos para Google salen de aquí.
 * Para cambiarlo: clic derecho sobre el sitio en Google Maps → clic en los
 * números para copiarlos. Con `null`, el mapa buscaría por la dirección.
 */
export const location: { coords: { lat: number; lng: number } | null } = {
  coords: { lat: 42.784201, lng: -1.6255 },
}

const mapsQuery = location.coords
  ? `${location.coords.lat},${location.coords.lng}`
  : encodeURIComponent(
      "Polígono Industrial Mutilva Baja, Calle O, 22, 31192 Mutilva, Navarra"
    )

export const maps = {
  /** Abre la nave en Google Maps. */
  place: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  /** Ruta hasta la nave desde donde esté el visitante. */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  /** Mapa incrustado del pie de página. */
  embed: `https://www.google.com/maps?q=${mapsQuery}&z=17&hl=es&output=embed`,
  /**
   * `false`: el mapa se carga cuando el visitante pulsa "Ver mapa", así la web
   * no conecta con Google (ni deja sus cookies) sin que él lo pida.
   * `true`: el mapa se ve siempre. En ese caso hace falta un banner de cookies.
   */
  autoload: false,
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Localidades donde trabajan habitualmente (se listan en el pie). */
export const serviceArea = {
  base: "Mutilva",
  summary: "Pamplona y comarca",
  towns: [
    "Pamplona",
    "Mutilva",
    "Sarriguren",
    "Burlada",
    "Villava",
    "Huarte",
    "Noáin",
    "Zizur Mayor",
    "Cizur",
    "Barañáin",
    "Orkoien",
    "Berriozar",
    "Ansoáin",
  ],
}

/** "5 horas de media": el tiempo de un cambio de caldera, listo para un texto. */
export const boilerSwap = `${business.boilerSwapHours} horas de media`

/* ── Fotos ── */

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  /**
   * Punto de interés cuando la foto se recorta (CSS `object-position`).
   * Si no se indica, se centra.
   */
  position?: string
}

/**
 * Fotos del cliente (`public/fotos/`). Las de trabajos son verticales (4:5)
 * para que encajen igual en las tarjetas, las tiras y la galería.
 */
export const photos = {
  flota: {
    src: "/fotos/flota-garaje.jpg",
    alt: "Tres furgonetas eléctricas Ford de akiMAT aparcadas en su almacén",
    width: 1600,
    height: 1200,
  },
  bano: {
    src: "/fotos/bano-inodoro.jpg",
    alt: "Baño reformado por akiMAT con inodoro suspendido y azulejo de hojas tropicales",
    width: 1500,
    height: 2000,
    position: "50% 72%",
  },
  praktica: {
    src: "/fotos/caldera-praktica.jpg",
    alt: "Caldera de condensación Sime Praktica instalada por akiMAT, con las tuberías aisladas",
    width: 936,
    height: 1170,
    position: "50% 42%",
  },
  prakticaMueble: {
    src: "/fotos/caldera-praktica-mueble.jpg",
    alt: "Caldera Sime Praktica instalada por akiMAT dentro de un mueble de cocina",
    width: 1000,
    height: 1250,
    position: "50% 55%",
  },
  murelle: {
    src: "/fotos/caldera-murelle.jpg",
    alt: "Caldera de condensación Sime Murelle instalada por akiMAT",
    width: 960,
    height: 1200,
    position: "50% 45%",
  },
  split: {
    src: "/fotos/aire-split-kosner.jpg",
    alt: "Split de aire acondicionado Kosner instalado por akiMAT",
    width: 640,
    height: 800,
    position: "50% 45%",
  },
  splitLucernario: {
    src: "/fotos/aire-splits-kosner.jpg",
    alt: "Split de aire acondicionado Kosner instalado junto a un lucernario",
    width: 1120,
    height: 840,
    position: "100% 50%",
  },
  cubierta: {
    src: "/fotos/cubierta-conductos-vertical.jpg",
    alt: "Montaje de conductos aislados y unidad exterior en la cubierta de una nave",
    width: 960,
    height: 1200,
    position: "50% 30%",
  },
  cubiertaAncha: {
    src: "/fotos/cubierta-conductos.jpg",
    alt: "Conductos aislados y unidad exterior instalados por akiMAT en la cubierta de una nave",
    width: 1280,
    height: 960,
    position: "70% 50%",
  },
  termo: {
    src: "/fotos/termo-greenheiss.jpg",
    alt: "Termo eléctrico Greenheiss instalado por akiMAT",
    width: 1200,
    height: 1500,
    position: "50% 25%",
  },
  contadores: {
    src: "/fotos/bateria-contadores.jpg",
    alt: "Batería de contadores de agua de una comunidad montada por akiMAT",
    width: 1100,
    height: 1375,
  },
  grupoPresion: {
    src: "/fotos/grupo-presion.jpg",
    alt: "Grupo de presión con dos depósitos de expansión instalado por akiMAT",
    width: 1048,
    height: 1310,
  },
  aspersores: {
    src: "/fotos/aspersores.jpg",
    alt: "Línea de aspersores montada por akiMAT junto a una cubierta",
    width: 1160,
    height: 1450,
    position: "50% 60%",
  },
} satisfies Record<string, Photo>

/* ── Servicios ── */

export type ServiceSlug =
  "fontaneria" | "calderas-de-gas" | "aerotermia" | "aire-acondicionado"

export type Service = {
  slug: ServiceSlug
  name: string
  short: string
  /** Una frase. La web es minimalista: aquí no van párrafos. */
  summary: string
  icon: IconSvgElement
  /** Foto vertical de la tarjeta de la portada. */
  photo: Photo
  /** Foto de la cabecera de su página. */
  hero: Photo
}

export const services: Service[] = [
  {
    slug: "fontaneria",
    name: "Fontanería",
    short: "Fontanería",
    summary: "Reformas de baño, averías e instalaciones de agua.",
    icon: DropletIcon,
    photo: photos.bano,
    hero: photos.bano,
  },
  {
    slug: "calderas-de-gas",
    name: "Instalación de calderas",
    short: "Calderas",
    summary: `Cambio de caldera en ${boilerSwap}, radiadores y suelo radiante.`,
    icon: FireIcon,
    photo: photos.praktica,
    hero: photos.praktica,
  },
  {
    slug: "aerotermia",
    name: "Aerotermia",
    short: "Aerotermia",
    summary: "Calefacción, frío y agua caliente con una bomba de calor.",
    icon: Leaf01Icon,
    // TODO: cambiar por el primer plano de la unidad Kosner cuando llegue.
    photo: photos.cubierta,
    hero: photos.cubiertaAncha,
  },
  {
    slug: "aire-acondicionado",
    name: "Aire acondicionado",
    short: "Aire",
    summary: "Split, multisplit y conductos para casas y negocios.",
    icon: AirVentIcon,
    photo: photos.split,
    hero: photos.splitLucernario,
  },
]

export function getService(slug: ServiceSlug): Service {
  const service = services.find((item) => item.slug === slug)
  if (!service) throw new Error(`Servicio desconocido: ${slug}`)
  return service
}

export type Brand = { name: string; logo?: string; width?: number }

/** Marcas que instalan. Kosner no tiene logo todavía: se dibuja como texto. */
export const brands: Brand[] = [
  { name: "Sime", logo: "/marcas/sime.webp", width: 120 },
  { name: "Kosner" },
  { name: "Greenheiss", logo: "/marcas/greenheiss.webp", width: 150 },
]

/**
 * Servicio técnico oficial de Sime en Navarra. Se enlaza, sin más, junto al
 * comparador de calderas: es a quien acude quien tiene una Sime.
 */
export const simeService = {
  name: "Iruman",
  label: "Servicio técnico oficial Sime",
  url: "https://simeiruman.com",
}

/* ── Trabajos ── */

export type Work = Photo & {
  /** Pie de foto: qué es, en pocas palabras. */
  caption: string
  service: ServiceSlug
}

/**
 * Trabajos de la galería de la portada, en el orden en que se ven. Cada uno
 * sale también en la página de su servicio. Añade aquí los nuevos.
 */
export const works: Work[] = [
  {
    ...photos.prakticaMueble,
    caption: "Caldera en un mueble de cocina",
    service: "calderas-de-gas",
  },
  {
    ...photos.contadores,
    caption: "Batería de contadores",
    service: "fontaneria",
  },
  {
    ...photos.split,
    caption: "Split Kosner",
    service: "aire-acondicionado",
  },
  { ...photos.bano, caption: "Reforma de baño", service: "fontaneria" },
  {
    ...photos.cubierta,
    caption: "Conductos y unidad exterior en cubierta",
    service: "aerotermia",
  },
  {
    ...photos.termo,
    caption: "Termo eléctrico Greenheiss",
    service: "fontaneria",
  },
  {
    ...photos.murelle,
    caption: "Caldera Sime Murelle",
    service: "calderas-de-gas",
  },
  {
    ...photos.grupoPresion,
    caption: "Grupo de presión",
    service: "fontaneria",
  },
  {
    ...photos.praktica,
    caption: "Caldera Sime Praktica",
    service: "calderas-de-gas",
  },
  {
    ...photos.aspersores,
    caption: "Línea de aspersores",
    service: "fontaneria",
  },
]

export function worksOf(slug: ServiceSlug) {
  return works.filter((work) => work.service === slug)
}

/* ── Reseñas de Google ── */

export type Review = {
  /** Nombre e inicial del apellido: no publicamos apellidos completos. */
  name: string
  rating: number
  /** Texto de la reseña tal cual; solo se corrigen espacios y signos sueltos. */
  comment: string
}

/**
 * Ficha de Google de akiMAT. `rating` es la nota media y `minCount` el número
 * de reseñas en redondo, por debajo del real: se muestra como "+20 reseñas".
 * Son las cifras que dio el cliente en noviembre de 2026: contrástalas con la
 * ficha de vez en cuando, porque el botón de al lado lleva a ella.
 * TODO: cambiar `url` por el enlace de "Compartir" de la ficha de Google.
 */
export const googleReviews = {
  rating: 4.3,
  minCount: 20,
  url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Akimat Servicios Integrales ${business.address.city}`
  )}`,
}

/** Reseñas de Google que se muestran en la portada, en este orden. */
export const reviews: Review[] = [
  {
    name: "Kiko J.",
    rating: 5,
    comment:
      "Muy buena atención. Rápida respuesta. Nos cambiaron una caldera de gas en un abrir y cerrar de ojos. Todo facilidades.",
  },
  {
    name: "Maria M.",
    rating: 5,
    comment:
      "Akimat te soluciona cualquier problema en un tiempo record, tuve una fuga y en media hora se trasladaron a Lekunberri, con profesionales así da gusto",
  },
  {
    name: "Esther A.",
    rating: 5,
    comment:
      "Hoy nos han instalado una caldera en nuestra vivienda. Dani y Jonathan han sido muy buenos profesionales, puntuales y realizando muy bien su trabajo. Los recomendaría así como a Iñaki Matas que nos informo previamente de todas las opciones posibles.",
  },
  {
    name: "Monica B.",
    rating: 5,
    comment:
      "Todas las veces que los he llamado han respondido rápido, han sido eficientes, dan soluciones creativas y son muy amables. Gracias chicos!!!",
  },
  {
    name: "Ruso",
    rating: 5,
    comment:
      "Me cambiaron la caldera y la atención ha sido muy buena. Fácil el trato con ellos. La factura final fue lo que me habían presupuestado en un inicio, ni un céntimo más. Tuvieron cuidado y fueron limpios cuándo trabajaron en mi casa…",
  },
  {
    name: "Nieves I.",
    rating: 5,
    comment:
      "Hemos recurrido a ellos en varias ocasiones. Todos los que conozco son muy amables y sobre todo grandes profesionales. Dada la avería que teníamos está vez, yo no las tenía todas conmigo y lo han solucionado muy eficazmente. Recomendables 100%",
  },
  {
    name: "mja lg",
    rating: 5,
    comment:
      "Genial, han venido y me han solucionado el problema en poquito tiempo. Muy amables.",
  },
  {
    name: "David M.",
    rating: 5,
    comment: "Eficaces y muy agradables en el trato, 100% recomendables",
  },
]

export function serviceMetadata({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `/${slug}`,
      siteName: business.name,
      locale: "es_ES",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  }
}
