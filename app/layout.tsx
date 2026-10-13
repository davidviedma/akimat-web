import { Inter, Sora } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { SITE_URL, business, services } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

const title =
  "akiMAT – Fontanería, aire acondicionado y calderas de gas en Zizur Mayor"
const description =
  "Fontanería, instalación de aire acondicionado y calderas de gas en Zizur Mayor, Pamplona y comarca. Instalación, reparación y mantenimiento. Llama al 948 18 68 01."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "fontanero Zizur Mayor",
    "fontanería Pamplona",
    "instalación aire acondicionado Pamplona",
    "aire acondicionado Zizur Mayor",
    "calderas de gas Navarra",
    "cambio de caldera Pamplona",
    "reparación caldera Zizur Mayor",
    "akiMAT",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: business.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "akiMAT – Fontanería, aire acondicionado y calderas de gas en Navarra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#04080c",
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: `${business.name} – ${business.legalName}`,
  description,
  url: SITE_URL,
  telephone: business.phone.href.replace("tel:", ""),
  ...(business.email ? { email: business.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressRegion: business.address.region,
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Zizur Mayor" },
    { "@type": "City", name: "Pamplona" },
    { "@type": "AdministrativeArea", name: "Navarra" },
  ],
  openingHoursSpecification: business.openingHoursSchema,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${SITE_URL}/${service.slug}`,
      },
    })),
  },
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={cn("antialiased", inter.variable, sora.variable, "font-sans")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
