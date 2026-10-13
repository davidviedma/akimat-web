import type { Metadata } from "next"
import { LegalPage, LegalSection } from "@/components/legal-page"
import { SITE_URL, business, fullAddress } from "@/lib/site"

export const metadata: Metadata = {
  title: "Aviso legal · akiMAT",
  description: `Aviso legal de ${business.legalName}.`,
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
}

const domain = SITE_URL.replace(/^https?:\/\//, "")

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      updated="octubre de 2026"
      intro={
        <p>
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), te informamos de los
          datos del titular del sitio web <a href={SITE_URL}>{domain}</a>.
        </p>
      }
    >
      <LegalSection title="Titular del sitio web">
        <ul>
          <li>
            <strong>Razón social:</strong> {business.legalName}
          </li>
          <li>
            <strong>CIF:</strong> {business.cif}
          </li>
          <li>
            <strong>Domicilio:</strong> {fullAddress}
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
          <li>
            <strong>Datos registrales:</strong> {business.registry}
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Objeto">
        <p>
          Este sitio web tiene como finalidad informar sobre los servicios de
          fontanería, climatización y calefacción que presta{" "}
          {business.legalName} y facilitar el contacto con la empresa. El acceso
          y uso del sitio web atribuye la condición de usuario e implica la
          aceptación de este aviso legal.
        </p>
      </LegalSection>

      <LegalSection title="Condiciones de uso">
        <p>
          El usuario se compromete a hacer un uso adecuado de los contenidos del
          sitio web y a no emplearlos para actividades ilícitas o contrarias a
          la buena fe. El acceso a esta web no supone, por sí mismo, el inicio
          de una relación comercial con la empresa.
        </p>
        <p>
          La información de la web (descripciones de servicios, calculadoras
          orientativas, etc.) es de carácter general y no sustituye al
          presupuesto y al asesoramiento personalizados que se realizan tras
          valorar cada caso.
        </p>
      </LegalSection>

      <LegalSection title="Propiedad intelectual e industrial">
        <p>
          Los contenidos de este sitio web, su diseño gráfico, logotipos y
          código son titularidad de {business.legalName} o de terceros que han
          autorizado su uso, y están protegidos por la normativa de propiedad
          intelectual e industrial. Queda prohibida su reproducción,
          distribución o transformación sin autorización expresa.
        </p>
        <p>
          Las marcas o nombres comerciales de terceros que puedan aparecer en la
          web pertenecen a sus respectivos titulares.
        </p>
      </LegalSection>

      <LegalSection title="Enlaces">
        <p>
          La web puede incluir enlaces a sitios de terceros (por ejemplo,
          WhatsApp o Google Maps). {business.legalName} no se responsabiliza de
          los contenidos ni de las políticas de privacidad de dichos sitios.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilidad">
        <p>
          La empresa no se hace responsable de los daños derivados de un uso
          inadecuado de la web ni de interrupciones o errores técnicos ajenos a
          su control, aunque procurará resolverlos lo antes posible.
        </p>
      </LegalSection>

      <LegalSection title="Legislación aplicable y jurisdicción">
        <p>
          Las relaciones entre {business.legalName} y los usuarios de la web se
          rigen por la legislación española. Para cualquier controversia, las
          partes se someterán a los juzgados y tribunales que correspondan
          conforme a la normativa vigente.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
