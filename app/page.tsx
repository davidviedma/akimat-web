import { Nav } from "@/components/nav"
import { Hero } from "@/components/sections/hero"
import { Marquee } from "@/components/sections/marquee"
import { Servicios } from "@/components/sections/servicios"
import { PorQue } from "@/components/sections/por-que"
import { Proceso } from "@/components/sections/proceso"
import { Presupuesto } from "@/components/sections/presupuesto"
import { Zona } from "@/components/sections/zona"
import { Faqs } from "@/components/sections/faqs"
import { faqs } from "@/components/sections/faqs-data"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Servicios />
        <PorQue />
        <Proceso />
        <Presupuesto />
        <Zona />
        <Faqs />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
