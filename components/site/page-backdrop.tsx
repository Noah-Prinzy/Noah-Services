import type { ReactNode } from "react"
import Image, { type StaticImageData } from "next/image"

import { HeroScroll } from "@/components/home/floating-stage"

/**
 * The dark intro band every inner page opens with, matching the home hero: a photo
 * (or, with `wash`, a project's own screenshot blurred into a colour field), the same
 * drifting aurora and veil, faded into the page at the bottom. It carries data-hero,
 * so the header dissolves into it and pops in once it has scrolled away, and its copy
 * lifts and blurs out on scroll (HeroScroll, .hero-copy). The image is decorative.
 */
export function PageHero({
  src,
  position = "center",
  wash = false,
  children,
}: {
  src: StaticImageData
  position?: string
  wash?: boolean
  children: ReactNode
}) {
  return (
    <section
      data-hero
      className="dark relative isolate -mt-[4.75rem] overflow-hidden bg-background pt-[4.75rem] text-foreground"
      style={{ ["--p" as string]: 0 }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        preload
        className={
          wash
            ? "-z-20 scale-110 object-cover opacity-60 blur-2xl saturate-150"
            : "-z-20 object-cover opacity-75"
        }
        style={{ objectPosition: position }}
      />
      <div
        className="hero-aurora absolute inset-[-10%] -z-10 opacity-70"
        aria-hidden
      />
      <div className="hero-veil absolute inset-0 -z-10" aria-hidden />
      <div className="hero-copy frame flex min-h-[calc(100svh-4.75rem)] flex-col justify-center py-16 md:py-24">
        {children}
      </div>
      <HeroScroll />
    </section>
  )
}
