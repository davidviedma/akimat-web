# akiMAT · Web

Web de **akiMAT Servicios Integrales** (Mutilva, Navarra): fontanería,
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
| `/` | Cabecera con foto, marquesina curva, 4 servicios, comparador de calderas, aerotermia, flota eléctrica, galería de trabajos, marcas, presupuesto por WhatsApp y contacto |
| `/fontaneria` | Fontanería |
| `/calderas-de-gas` | Instalación de calderas (con el comparador Sime) |
| `/aerotermia` | Aerotermia |
| `/aire-acondicionado` | Aire acondicionado, con calculadora de frigorías |
| `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies` | Textos legales |

También genera `sitemap.xml`, `robots.txt`, favicon, icono de Apple e imagen
para redes sociales (`public/og-image.jpg`).

## Dónde se cambian los datos

Todo lo que es de la empresa (teléfonos, WhatsApp, email, dirección, horario,
CIF, servicios, marcas, fotos de la galería…) está en **`lib/site.ts`**.
Cambiándolo ahí se actualiza toda la web, incluidos los datos estructurados para
Google y los textos legales.

## Fotos

Las fotos del cliente están en `public/fotos/` (redimensionadas a un máximo de
2000 px). Para añadir una:

1. Guárdala en `public/fotos/` con un nombre descriptivo.
2. Añádela a `works` en `lib/site.ts` (galería) o cámbiala en `services[].photo`
   (tarjeta del servicio) o en el `ServiceHero` de su página.

**Pendientes de recibir / sustituir** (ahora hay fotos provisionales):

- Flota: las tres furgonetas en el garaje (para la cabecera).
- Nave con el rótulo "Desde 2006" (sección "Dónde estamos").
- Unidad Kosner de aerotermia en la cubierta (tarjeta y página de aerotermia).
- Sala de calderas con los depósitos Greenheiss y suelo radiante (calderas).
- Baño con lavabo y vestuario (fontanería / galería).
- Un equipo de aire acondicionado instalado (ahora hay una ilustración).
- Fotos del equipo (sección "Nosotros").

## Componentes de React Bits

Copiados de la versión TypeScript + Tailwind en `components/reactbits/`:

| Componente | Dónde se usa |
| --- | --- |
| `BlurText` | Titulares de la cabecera y de las páginas de servicio |
| `GradualBlur` | Desenfoque progresivo bajo la barra de navegación |
| `CurvedLoop` | Marquesina curva con la rotulación de las furgonetas |
| `GlareHover` | Brillo al pasar por las tarjetas de servicios |
| `ElectricBorder` | Borde eléctrico de "Nos movemos en eléctrico" |
| `TiltedCard` | Foto de la furgoneta que se inclina con el ratón |
| `CircularGallery` | Galería curva de trabajos |
| `LogoLoop` | Marcas que instalan (Sime, Kosner, Greenheiss) |
| `Stepper` | Asistente "Presupuesto" que prepara el mensaje de WhatsApp |
| `CountUp` | Resultado animado de la calculadora de frigorías |

Se mantienen con el formato original para poder compararlos con
reactbits.dev; los cambios propios están marcados con `akiMAT:`. Licencia MIT +
Commons Clause (ver `components/reactbits/LICENSE.md`).

## Pendiente antes de publicar

- [ ] Confirmar teléfonos, email y que el móvil tiene WhatsApp.
- [ ] Dominio definitivo (`SITE_URL`, ahora `https://www.akimat.es`).
- [ ] Dirección fiscal para el aviso legal (si no coincide con la nave de Mutilva)
      y datos de inscripción en el Registro Mercantil.
- [ ] Logo oficial de Kosner (ahora va en texto) y permiso para usar las
      imágenes de producto de Sime (`public/calderas/`).
- [ ] Confirmar las marcas (Sime, Kosner, Greenheiss) y los modelos del comparador.
- [ ] Sustituir las fotos provisionales (ver arriba).
- [ ] Si se añade analítica, poner un banner de cookies y actualizar
      `/politica-de-cookies`: ahora la web no usa cookies.
