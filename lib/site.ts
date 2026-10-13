import type { Metadata } from "next"
import type { IconSvgElement } from "@hugeicons/react"
import { AirVentIcon, DropletIcon, FireIcon } from "@hugeicons/core-free-icons"

/**
 * Datos de la empresa. Es la única fuente de verdad para teléfonos,
 * dirección, horario, etc.: cambia aquí y se actualiza toda la web.
 *
 * Los datos salen de directorios públicos de empresas (registro mercantil,
 * Páginas Amarillas, QDQ…). Antes de publicar, confírmalos con akiMAT,
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
  tagline: "Servicios integrales",
  phone: { display: "948 18 68 01", href: "tel:+34948186801" },
  mobile: { display: "629 33 38 11", href: "tel:+34629333811" },
  // TODO: confirmar que el móvil tiene WhatsApp.
  whatsapp: "34629333811",
  // TODO: añadir el email de contacto (se muestra solo si está relleno).
  email: "",
  address: {
    street: "C/ Paternain, 7 bajo",
    postalCode: "31180",
    city: "Zizur Mayor",
    region: "Navarra",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Akimat+Servicios+Integrales+Calle+Paternain+7+31180+Zizur+Mayor",
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

/** Localidades que se muestran en el mapa de zona de servicio. */
export const serviceArea = {
  base: { name: "Zizur Mayor", lat: 42.787, lng: -1.691 },
  towns: [
    { name: "Pamplona", lat: 42.8125, lng: -1.6458 },
    { name: "Barañáin", lat: 42.806, lng: -1.677 },
    { name: "Cizur Menor", lat: 42.789, lng: -1.676 },
    { name: "Orkoien", lat: 42.823, lng: -1.706 },
    { name: "Berriozar", lat: 42.836, lng: -1.669 },
    { name: "Ansoáin", lat: 42.831, lng: -1.64 },
    { name: "Burlada", lat: 42.826, lng: -1.616 },
    { name: "Villava", lat: 42.833, lng: -1.611 },
    { name: "Huarte", lat: 42.83, lng: -1.593 },
    { name: "Mutilva", lat: 42.7893, lng: -1.6209 },
    { name: "Sarriguren", lat: 42.811, lng: -1.598 },
    { name: "Noáin", lat: 42.758, lng: -1.632 },
    { name: "Beriáin", lat: 42.733, lng: -1.64 },
    { name: "Etxauri", lat: 42.795, lng: -1.791 },
  ],
}

export type Service = {
  slug: string
  name: string
  short: string
  summary: string
  icon: IconSvgElement
}

export const services: Service[] = [
  {
    slug: "fontaneria",
    name: "Fontanería",
    short: "Fontanería",
    summary:
      "Fugas, averías, instalaciones de agua nuevas, sanitarios, grifería y reformas de baño.",
    icon: DropletIcon,
  },
  {
    slug: "aire-acondicionado",
    name: "Aire acondicionado",
    short: "Aire acondicionado",
    summary:
      "Instalación, mantenimiento y reparación de equipos split, multisplit y por conductos.",
    icon: AirVentIcon,
  },
  {
    slug: "calderas-de-gas",
    name: "Calderas de gas",
    short: "Calderas",
    summary:
      "Instalación y cambio de calderas de condensación, reparación de averías y revisiones.",
    icon: FireIcon,
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
