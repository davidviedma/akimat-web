import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-brand-primary/35 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Negro: el botón principal de la web
        default: "bg-ink text-white hover:bg-ink/85",
        // Blanco: sobre fotos y fondos oscuros
        light: "bg-white text-ink hover:bg-white/90",
        // Cian de marca
        secondary:
          "bg-brand-primary text-brand-primary-foreground hover:bg-brand-primary-hover",
        outline:
          "border-line bg-white text-ink hover:border-ink/40 hover:bg-paper-2",
        ghost: "text-ink hover:bg-paper-2",
        link: "text-brand-text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 gap-2 px-5",
        sm: "h-9 gap-1.5 px-4",
        lg: "h-12 gap-2 px-6 text-[15px]",
        xl: "h-14 gap-2.5 px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
