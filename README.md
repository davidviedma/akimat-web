# akiMAT · Web

Web de **akiMAT Servicios Integrales** (Zizur Mayor, Navarra): fontanería,
aire acondicionado y calderas de gas.

Sigue la misma base técnica y estética que la web de Iruman (Next.js +
Tailwind + shadcn, tema oscuro, navegación "isla", botones redondeados) con el
branding de akiMAT: cian `#0099D6` y negro `#111016` del logo.

## Puesta en marcha

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de producción (todas las páginas son estáticas)
pnpm start
pnpm lint
pnpm typecheck
```

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Home: cabecera con fluido, servicios, por qué akiMAT, proceso, asistente de presupuesto, zona de servicio, dudas y contacto |
| `/fontaneria` | Landing de fontanería |
| `/aire-acondicionado` | Landing de aire acondicionado con calculadora de frigorías |
| `/calderas-de-gas` | Landing de calderas de gas |
| `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies` | Textos legales |

También genera `sitemap.xml`, `robots.txt`, favicon, icono de Apple e imagen
para redes sociales (`public/og-image.jpg`).

## Dónde se cambian los datos

Todo lo que es de la empresa (teléfonos, WhatsApp, dirección, horario, CIF,
localidades del mapa, servicios…) está en **`lib/site.ts`**. Cambiándolo ahí se
actualiza toda la web, incluidos los datos estructurados para Google y los
textos legales.

## Componentes de React Bits

Los efectos vienen de [React Bits](https://reactbits.dev) (versión TypeScript +
Tailwind) y están copiados en `components/reactbits/`:

| Componente | Dónde se usa |
| --- | --- |
| `LiquidEther` | Fondo de fluido (agua/aire) de la cabecera |
| `RotatingText` | "Expertos en fontanería / climatización / calefacción" |
| `CardSwap` | Tarjetas de servicios que rotan en la cabecera |
| `Magnet` | Botones de la cabecera |
| `ShinyText` | Etiqueta "Zizur Mayor · Pamplona y comarca" |
| `ScrollVelocity` | Banda de servicios que se mueve con el scroll |
| `SpotlightCard` | Tarjetas de servicios con foco de luz |
| `Stepper` | Asistente "Pide tu presupuesto" (prepara el mensaje de WhatsApp) |
| `Radar` | Mapa de zona de servicio centrado en Zizur Mayor |
| `CountUp` | Resultado animado de la calculadora de frigorías |

Se mantienen con el formato original para poder compararlos con
reactbits.dev; los cambios propios están marcados con `akiMAT:`. Licencia MIT +
Commons Clause (ver `components/reactbits/LICENSE.md`): se pueden usar en webs
comerciales, pero no revender los componentes sueltos.

## Imágenes

No hay fotos de akiMAT todavía, así que las secciones usan ilustraciones
vectoriales propias (`components/illustrations.tsx`: grifo, split y caldera)
y el logo vectorizado (`components/logo.tsx`, `public/logo.svg`).

## Pendiente antes de publicar

Los datos salen de directorios públicos de empresas y hay que confirmarlos con
akiMAT:

- [ ] Teléfonos (948 18 68 01 y 629 33 38 11) y que el móvil tenga WhatsApp.
- [ ] Dominio definitivo (`SITE_URL`, ahora `https://www.akimat.es`).
- [ ] Email de contacto (vacío: no se muestra hasta rellenarlo).
- [ ] Datos de inscripción en el Registro Mercantil (tomo, folio, hoja) para el aviso legal.
- [ ] Localidades de la zona de servicio y horario.
- [ ] Repasar los textos con el cliente.
- [ ] Añadir fotos reales (equipo, furgoneta, trabajos) y reseñas de Google cuando las haya.
- [ ] Si se añade analítica (Google Analytics, Meta Pixel…), poner un banner de
      consentimiento de cookies y actualizar la política de cookies: ahora la web
      no usa cookies.
