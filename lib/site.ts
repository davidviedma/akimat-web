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
 * dirección, horario, servicios, etc.: cambia aquí y se actualiza toda la web.
 *
 * Los datos salen del rótulo de la nave, de la rotulación de las furgonetas
 * y de directorios públicos. Antes de publicar, confírmalos con akiMAT,
 * sobre todo los marcados con TODO.
 */

// TODO: confirmar el dominio definitivo de la web.
export const SITE_URL = "https://www.akimat.es"

export const business = {
  name: "akiMAT",
  legalName: "Akimat Servicios Integrales, S.L.",
  cif: "B71399406",
  // TODO: completar con los datos de inscripción (tomo, folio y hoja).
  registry: "Inscrita en el Registro Mercantil de Navarra",
  founded: 2006,
  tagline: "Servicios integrales",
  phone: { display: "948 186 801", href: "tel:+34948186801" },
  mobile: { display: "629 333 811", href: "tel:+34629333811" },
  // TODO: confirmar que el móvil tiene WhatsApp.
  whatsapp: "34629333811",
  email: "akimatserviciosintegrales@gmail.com",
  address: {
    street: "Polígono Industrial Mutilva, calle O, nave 22",
    postalCode: "31192",
    city: "Mutilva",
    region: "Navarra",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Akimat+Servicios+Integrales+Pol%C3%ADgono+Mutilva+calle+O+22+31192+Mutilva",
  hours: [
    { days: "Lunes a jueves", time: "8:00 – 18:30" },
    { days: "Viernes", time: "8:00 – 14:00" },
    { days: "Sábado y domingo", time: "Cerrado" },
  ],
  openingHoursSchema: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:30",
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

export type Service = {
  slug: string
  name: string
  short: string
  /** Una frase. La web es minimalista: aquí no van párrafos. */
  summary: string
  icon: IconSvgElement
  photo: { src: string; alt: string }
}

export const services: Service[] = [
  {
    slug: "fontaneria",
    name: "Fontanería",
    short: "Fontanería",
    summary: "Reformas de baño, averías e instalaciones de agua.",
    icon: DropletIcon,
    photo: {
      src: "/fotos/bano-inodoro.jpg",
      alt: "Baño reformado por akiMAT con inodoro suspendido y azulejo tropical",
    },
  },
  {
    slug: "calderas-de-gas",
    name: "Instalación de calderas",
    short: "Calderas",
    summary: "Cambio e instalación de calderas, radiadores y suelo radiante.",
    icon: FireIcon,
    photo: {
      // TODO: sustituir por la foto de la sala de calderas o del suelo radiante.
      src: "/fotos/nave-industrial.jpg",
      alt: "Instalación de calefacción en una nave industrial",
    },
  },
  {
    slug: "aerotermia",
    name: "Aerotermia",
    short: "Aerotermia",
    summary: "Calefacción, frío y agua caliente con una bomba de calor.",
    icon: Leaf01Icon,
    photo: {
      // TODO: sustituir por la foto de la unidad Kosner en la cubierta.
      src: "/fotos/flota-canfranc.jpg",
      alt: "Instalación de aerotermia",
    },
  },
  {
    slug: "aire-acondicionado",
    name: "Aire acondicionado",
    short: "Aire",
    summary: "Split, multisplit y conductos para casas y negocios.",
    icon: AirVentIcon,
    photo: {
      // TODO: sustituir por una foto de un equipo de aire instalado.
      src: "/fotos/furgoneta-electrica.jpg",
      alt: "Instalación de aire acondicionado",
    },
  },
]

export type Brand = { name: string; logo?: string; width?: number }

/** Marcas que instalan. Kosner no tiene logo todavía: se dibuja como texto. */
export const brands: Brand[] = [
  { name: "Sime", logo: "/marcas/sime.webp", width: 120 },
  { name: "Kosner" },
  { name: "Greenheiss", logo: "/marcas/greenheiss.webp", width: 150 },
]

export type Photo = { src: string; alt: string; width: number; height: number }

/** Fotos de trabajos para la galería. Añade aquí las nuevas. */
export const works: Photo[] = [
  {
    src: "/fotos/bano-inodoro.jpg",
    alt: "Baño con inodoro suspendido y azulejo de hojas tropicales",
    width: 1500,
    height: 2000,
  },
  {
    src: "/fotos/furgoneta-electrica.jpg",
    alt: "Furgoneta eléctrica de akiMAT",
    width: 2000,
    height: 1506,
  },
  {
    src: "/fotos/nave-industrial.jpg",
    alt: "Nave industrial preparada para instalar calefacción",
    width: 1800,
    height: 1350,
  },
  {
    src: "/fotos/flota-canfranc.jpg",
    alt: "Furgonetas de akiMAT en un trabajo fuera de Pamplona",
    width: 1600,
    height: 1200,
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
