# akiMAT · Web

Web de **akiMAT Servicios Integrales** (Mutilva Baja, Navarra): fontanería,
instalación de calderas, aerotermia y aire acondicionado. Desde 2006.

Diseño minimalista y visual: tema claro, fotos grandes de sus trabajos y de su
flota eléctrica, poco texto, y los efectos de [React Bits](https://reactbits.dev).
Colores de marca: cian `#0099D6` y negro `#111016` del logo.

## Puesta en marcha

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de producción (todas las páginas son estáticas)
pnpm start
pnpm lint
pnpm typecheck
pnpm format
```

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Cabecera con foto, franja de datos clave, 4 servicios, comparador de calderas, aerotermia, flota eléctrica, galería de trabajos, reseñas de Google, marcas, presupuesto por WhatsApp y contacto |
| `/fontaneria` | Fontanería, con sus trabajos |
| `/calderas-de-gas` | Instalación de calderas (con el comparador Sime) |
| `/aerotermia` | Aerotermia |
| `/aire-acondicionado` | Aire acondicionado, con calculadora de frigorías |
| `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies` | Textos legales |

Todas las páginas comparten la barra de navegación tipo "isla" (está en
`app/layout.tsx`) y terminan con el pie, que lleva el mapa de Google de la nave.
También genera `sitemap.xml`, `robots.txt`, favicon, icono de Apple e imagen
para redes sociales (`public/og-image.jpg`).

## Dónde se cambian los datos

Todo lo que es de la empresa (teléfonos, WhatsApp, email, dirección, mapa,
horario, CIF, servicios, marcas, fotos, reseñas…) está en **`lib/site.ts`**.
Cambiándolo ahí se actualiza toda la web, incluidos los datos estructurados para
Google y los textos legales.

El tiempo medio de un cambio de caldera ("4 horas de media") también sale de
ahí (`business.boilerSwapHours`): es un dato de akiMAT y se nombra siempre como
media, no como plazo garantizado.

El enlace a Iruman (servicio técnico oficial de Sime en Navarra) que aparece
bajo el comparador de calderas está en `simeService`.

## Reseñas

La sección "Lo que dicen nuestros clientes" muestra reseñas reales de la ficha
de Google de akiMAT (`reviews` en `lib/site.ts`):

- El texto va tal cual lo escribió el cliente (solo se corrigen espacios y
  signos sueltos). De los autores se publica el nombre y la inicial del
  apellido.
- `googleReviews` guarda la nota media y el número de reseñas que mostraba
  Google en noviembre de 2026 (4,1 en 18 reseñas): hay que actualizarlos de vez
  en cuando. `googleReviews.url` es el enlace de "Ver todas las reseñas".
- En escritorio la fila se desplaza sola y se para al pasar el ratón; en el
  móvil se pasa con el dedo.

## Fotos

Las fotos del cliente están en `public/fotos/`, ya recortadas y sin metadatos
(EXIF/GPS). Las de trabajos son **verticales, en 4:5**, para que encajen igual
en las tarjetas, las tiras y la galería. Para añadir una:

1. Recórtala a 4:5 (unos 1000 × 1250 px) y guárdala en `public/fotos/` con un
   nombre descriptivo. Antes de publicarla, mira que no se lea ningún dato de un
   cliente (direcciones, nombres, matrículas).
2. Dala de alta en `photos` (`lib/site.ts`) con su texto alternativo y su
   tamaño. `position` indica qué parte debe verse cuando se recorta.
3. Úsala donde toque:
   - `works`: sale en la galería de la portada y en la página de su servicio
     (con su pie de foto).
   - `services[].photo` (tarjeta de la portada) y `services[].hero` (cabecera
     de la página del servicio; esta puede ser horizontal).
   - `boilers[].photo` en `components/sections/calderas.tsx`: la instalación
     real que acompaña al render en el comparador.

Las fotos que ahora no se usan (furgonetas en Canfranc, nave vacía, uniforme)
están en `fotos-sin-usar/`, fuera de `public/`, para que no se publiquen.

**Pendientes de recibir:**

- Unidad Kosner en la cubierta, de cerca (tarjeta y página de aerotermia; ahora
  está la foto de los conductos en la cubierta).
- Nave con el rótulo "Desde 2006" (sección "Dónde estamos").
- Sala de calderas con los depósitos Greenheiss y suelo radiante (calderas).
- Baño con lavabo y vestuario (fontanería / galería).
- Fotos del equipo (sección "Nosotros").

## Mapa de Google

El mapa del pie (`components/map-embed.tsx`) busca la dirección de la nave, no
el nombre de la empresa, y **solo se carga cuando el visitante pulsa "Ver
mapa"**. Hasta entonces la web no conecta con Google, así que sigue sin cookies
de terceros y sin banner. Los enlaces y el modo de carga están en `maps`
(`lib/site.ts`):

- `maps.embed`: si el marcador no cae en la nave 22, sustitúyelo por el enlace
  de "Compartir → Insertar un mapa" de Google Maps.
- `maps.autoload: true` deja el mapa siempre visible. En ese caso hay que
  añadir un banner de consentimiento y reescribir `/politica-de-cookies`.

## Componentes de React Bits

Copiados de la versión TypeScript + Tailwind en `components/reactbits/`:

| Componente | Dónde se usa |
| --- | --- |
| `BlurText` | Titulares de la cabecera y de las páginas de servicio |
| `GlareHover` | Brillo al pasar por las tarjetas de servicios |
| `Aurora` | Fondo animado de la franja de aerotermia: del rojo (calor) al cian (frío) |
| `ElectricBorder` | Borde eléctrico de "Nos movemos en eléctrico" |
| `TiltedCard` | Foto de la flota que se inclina con el ratón |
| `CircularGallery` | Galería curva de trabajos (se descarga al acercarse a ella) |
| `LogoLoop` | Marcas que instalan (Sime, Kosner, Greenheiss) |
| `Stepper` | Asistente "Presupuesto" que prepara el mensaje de WhatsApp |
| `CountUp` | Resultado animado de la calculadora de frigorías |

Se mantienen con el formato original para poder compararlos con
reactbits.dev; los cambios propios están marcados con `akiMAT:`. Licencia MIT +
Commons Clause (ver `components/reactbits/LICENSE.md`).

## Pendiente antes de publicar

- [ ] Confirmar teléfonos, email y que el móvil tiene WhatsApp.
- [ ] Dominio definitivo (`SITE_URL`, ahora `https://www.akimat.es`).
- [ ] Comprobar que el marcador del mapa cae en la nave 22 (ver "Mapa de Google").
- [ ] Poner en `googleReviews.url` el enlace de "Compartir" de la ficha de
      Google y revisar la nota media antes de publicar.
- [ ] Dirección fiscal para el aviso legal (si no coincide con la nave de Mutilva
      Baja) y datos de inscripción en el Registro Mercantil.
- [ ] Logo oficial de Kosner (ahora va en texto) y permiso para usar las
      imágenes de producto de Sime (`public/calderas/`).
- [ ] Confirmar las marcas (Sime, Kosner, Greenheiss) y los modelos del
      comparador: las calderas de las fotos son una Praktica EV HE y una Murelle.
      En calderas solo se anuncia Sime: el cliente pidió no poner Kosner de
      momento (sigue en aerotermia, aire acondicionado y la franja de marcas).
- [ ] Recibir las fotos pendientes (ver arriba).
- [ ] Si se añade analítica o el mapa pasa a cargarse solo, poner un banner de
      cookies y actualizar `/politica-de-cookies`.
