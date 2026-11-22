import { Hero } from "@/components/sections/hero"
import { Destacados } from "@/components/sections/destacados"
import { Servicios } from "@/components/sections/servicios"
import { Calderas } from "@/components/sections/calderas"
import { Aerotermia } from "@/components/sections/aerotermia"
import { Flota } from "@/components/sections/flota"
import { Trabajos } from "@/components/sections/trabajos"
import { Resenas } from "@/components/sections/resenas"
import { Marcas } from "@/components/sections/marcas"
import { Presupuesto } from "@/components/sections/presupuesto"
import { Contacto } from "@/components/sections/contacto"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Destacados />
        <Servicios />
        <Calderas />
        <Aerotermia />
        <Flota />
        <Trabajos />
        <Resenas />
        <Marcas />
        <Presupuesto />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
