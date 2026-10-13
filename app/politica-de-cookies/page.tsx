import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { business } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de cookies · akiMAT",
  description: "Información sobre el uso de cookies en la web de akiMAT.",
  alternates: { canonical: "/politica-de-cookies" },
  robots: { index: false, follow: true },
}

const browserLinks = [
  { label: "Chrome", href: "https://support.google.com/chrome/answer/95647" },
  {
    label: "Firefox",
    href: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias",
  },
  {
    label: "Safari",
    href: "https://support.apple.com/es-es/guide/safari/sfri11471/mac",
  },
  {
    label: "Edge",
    href: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
  },
]

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      updated="octubre de 2026"
      intro={
        <p>
          Las cookies son pequeños archivos que algunas webs guardan en tu
          navegador. Aquí te explicamos cómo las usa (o no) la web de{" "}
          {business.name}.
        </p>
      }
    >
      <LegalSection title="Cookies que usa esta web">
        <p>
          Esta web <strong>no utiliza cookies propias ni de terceros</strong>{" "}
          con fines analíticos, publicitarios o de seguimiento, y no incluye
          contenidos incrustados de terceros (como mapas o vídeos) que las
          instalen. Por eso no te mostramos ningún aviso para aceptarlas.
        </p>
        <p>
          Si en el futuro incorporamos herramientas que usen cookies no
          técnicas, actualizaremos esta política y te pediremos tu
          consentimiento antes de activarlas.
        </p>
      </LegalSection>

      <LegalSection title="Enlaces a otros sitios">
        <p>
          Algunos botones te llevan a servicios externos, como WhatsApp o Google
          Maps. Al abrirlos, esos sitios pueden usar sus propias cookies según
          sus políticas, que te recomendamos consultar.
        </p>
      </LegalSection>

      <LegalSection title="Cómo gestionar las cookies en tu navegador">
        <p>
          Puedes ver, bloquear o borrar las cookies desde la configuración de tu
          navegador:
        </p>
        <ul>
          {browserLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </LegalSection>
    </LegalPage>
  )
}
