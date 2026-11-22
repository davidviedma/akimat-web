import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { Reveal } from "@/components/reveal"
import { googleReviews, reviews, type Review } from "@/lib/site"
import { cn } from "@/lib/utils"

const STAR =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"

function Stars({ rating }: { rating: number }) {
  return (
    <span
      role="img"
      aria-label={`${rating} de 5 estrellas`}
      className="inline-flex gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={cn("size-4", i < rating ? "text-amber-400" : "text-line")}
        >
          <path d={STAR} />
        </svg>
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full w-[min(82vw,22rem)] flex-col gap-4 rounded-3xl bg-paper-2 p-6">
      <Stars rating={review.rating} />
      <blockquote className="text-[15px] leading-relaxed text-ink">
        «{review.comment}»
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-1">
        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 font-heading text-sm font-semibold text-brand-text uppercase"
        >
          {review.name[0]}
        </span>
        <span className="flex flex-col">
          <span className="text-sm leading-tight font-semibold text-ink">
            {review.name}
          </span>
          <span className="text-xs text-ink-soft">Reseña en Google</span>
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * Reseñas de Google, como en la web de Iruman: en escritorio la fila se
 * desplaza sola y se para al pasar el ratón; en pantallas táctiles (o con
 * "reducir movimiento") se pasa con el dedo. Ver `.reviews-*` en globals.css.
 */
export function Resenas() {
  const rating = googleReviews.rating.toLocaleString("es-ES")

  return (
    <section id="opiniones" className="overflow-hidden bg-white py-16 md:py-24">
      <Reveal className="container-x mb-10 flex flex-col gap-3 md:mb-12">
        <p className="text-sm font-semibold tracking-widest text-brand-text uppercase">
          Reseñas en Google
        </p>
        <h2 className="font-heading text-4xl leading-tight font-bold tracking-tight text-ink md:text-5xl">
          Lo que dicen nuestros clientes.
        </h2>
        <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <p className="flex items-center gap-2 text-ink-soft">
            <span className="font-heading text-lg font-semibold text-ink">
              {rating}
            </span>
            <Stars rating={Math.round(googleReviews.rating)} />
            <span>de media en +{googleReviews.minCount} reseñas</span>
          </p>
          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-paper-2"
          >
            Ver todas las reseñas
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
          </a>
        </div>
      </Reveal>

      <div className="reviews-row">
        <ul className="reviews-track">
          {reviews.map((review) => (
            <li key={review.name}>
              <ReviewCard review={review} />
            </li>
          ))}
          {/* Copia para que el bucle no tenga corte; no se lee ni se enfoca */}
          {reviews.map((review) => (
            <li key={`${review.name}-bis`} aria-hidden="true">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
