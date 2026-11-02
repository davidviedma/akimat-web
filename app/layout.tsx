import { Inter, Sora } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { SITE_URL, business, services } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

const title =
  "akiMAT – Fontanería, calderas, aerotermia y aire acondicionado en Pamplona"
const description =
  "Fontanería, instalación de calderas, aerotermia y aire acondicionado en Pamplona y comarca. Desde 2006 en Mutilva. Llama al 948 186 801 o al 629 333 811."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "fontanero Pamplona",
    "fontanería Mutilva",
    "instalación aerotermia Pamplona",
    "aerotermia Navarra",
    "instalación aire acondicionado Pamplona",
    "cambio de caldera Pamplona",
    "calderas Sime Navarra",
    "calderas Kosner",
    "suelo radiante Pamplona",
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
        alt: "akiMAT – Fontanería, calderas, aerotermia y aire acondicionado en Pamplona",
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
  themeColor: "#ffffff",
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: `${business.name} – ${business.legalName}`,
  description,
  url: SITE_URL,
  foundingDate: String(business.founded),
  telephone: business.phone.href.replace("tel:", ""),
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressRegion: business.address.region,
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Pamplona" },
    { "@type": "City", name: "Mutilva" },
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
