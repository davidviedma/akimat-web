import { getImageProps } from "next/image"
import type { Photo } from "@/lib/site"

/**
 * URL de una foto ya reducida por el optimizador de Next, para los
 * componentes que no usan `<Image>` (la galería WebGL y la tarjeta inclinada).
 * `width` es el ancho en píxeles CSS al que se va a ver; se sirve al doble
 * para que se vea nítida en pantallas de alta densidad.
 */
export function optimizedSrc(photo: Photo, width: number) {
  return getImageProps({
    src: photo.src,
    alt: "",
    width,
    height: Math.round((width * photo.height) / photo.width),
  }).props.src
}
