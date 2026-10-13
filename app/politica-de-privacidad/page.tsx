import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { business, fullAddress } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de privacidad · akiMAT",
  description: `Cómo trata ${business.legalName} los datos personales de sus clientes y contactos.`,
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: true },
}

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      updated="octubre de 2026"
      intro={
        <p>
          En {business.legalName} respetamos tu privacidad. Aquí te explicamos,
          conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018
          (LOPDGDD), qué datos tratamos, para qué y cuáles son tus derechos.
        </p>
      }
    >
      <LegalSection title="Responsable del tratamiento">
        <ul>
          <li>
            <strong>Responsable:</strong> {business.legalName}
          </li>
          <li>
            <strong>CIF:</strong> {business.cif}
          </li>
          <li>
            <strong>Dirección:</strong> {fullAddress}
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href={business.phone.href}>{business.phone.display}</a>
          </li>
          {business.email && (
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          )}
        </ul>
      </LegalSection>

      <LegalSection title="Qué datos tratamos">
        <p>
          Esta web no tiene formularios que envíen datos a nuestros servidores.
          El asistente de presupuesto solo prepara un mensaje en tu propio
          dispositivo y lo abre en WhatsApp: tú decides si lo envías.
        </p>
        <p>
          Cuando nos contactas por teléfono, WhatsApp o correo electrónico,
          tratamos los datos que nos facilitas: nombre, datos de contacto,
          dirección donde se realizará el trabajo y la información sobre lo que
          necesitas.
        </p>
      </LegalSection>

      <LegalSection title="Para qué los usamos y con qué base legal">
        <ul>
          <li>
            <strong>Responder a tus consultas</strong>, con base en tu
            consentimiento al contactarnos.
          </li>
          <li>
            <strong>Elaborar presupuestos y prestar los servicios</strong> que
            contrates, como medidas precontractuales y ejecución del contrato.
          </li>
          <li>
            <strong>Facturación y obligaciones contables y fiscales</strong>,
            por obligación legal.
          </li>
        </ul>
        <p>No tomamos decisiones automatizadas ni elaboramos perfiles.</p>
      </LegalSection>

      <LegalSection title="Cuánto tiempo los conservamos">
        <p>
          Conservamos los datos mientras sean necesarios para atender tu
          consulta o prestar el servicio y, después, durante los plazos que
          exige la ley (por ejemplo, la normativa fiscal y mercantil).
        </p>
      </LegalSection>

      <LegalSection title="A quién se comunican">
        <p>
          No cedemos tus datos a terceros salvo obligación legal. Si nos
          escribes por WhatsApp, la comunicación se realiza a través de ese
          servicio, que tiene su propia política de privacidad.
        </p>
      </LegalSection>

      <LegalSection title="Tus derechos">
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad dirigiéndote a
          nosotros por escrito en {fullAddress}
          {business.email ? (
            <>
              {" "}
              o en <a href={`mailto:${business.email}`}>{business.email}</a>
            </>
          ) : null}
          , indicando qué derecho quieres ejercer.
        </p>
        <p>
          Si consideras que no hemos tratado tus datos correctamente, puedes
          presentar una reclamación ante la Agencia Española de Protección de
          Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
          ).
        </p>
      </LegalSection>
    </LegalPage>
  )
}
