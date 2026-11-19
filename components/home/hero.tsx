import Link from "next/link"
import { RiArrowRightLine, RiWhatsappLine } from "@remixicon/react"

import BlurText from "@/components/BlurText"
import {
  FloatingStage,
  HeroScroll,
  HeroVideo,
} from "@/components/home/floating-stage"
import { CONTACT } from "@/data/contact"

// The hero is always dark (the `dark` class scopes the dark tokens to it), in both
// themes: a looping digital-wave video under a slow aurora gradient, faded into the
// page at the bottom. As you scroll, HeroScroll sets --p (0 → 1) and the text lifts
// away while the floating collage flies apart and dissolves (globals.css, .hero-*).
export function Hero() {
  return (
    <section
      data-hero
      aria-labelledby="hero-title"
      className="dark relative isolate -mt-[4.75rem] overflow-hidden bg-background pt-[4.75rem] text-foreground"
      style={{ ["--p" as string]: 0 }}
    >
      <HeroVideo />
      <div className="hero-aurora absolute inset-[-10%] -z-10" aria-hidden />
      <div className="hero-veil absolute inset-0 -z-10" aria-hidden />

      <div className="frame grid min-h-[calc(100svh-4.75rem)] items-center gap-10 py-12 md:grid-cols-12 md:gap-6 md:py-16">
        <div className="hero-copy md:col-span-6">
          <h1 id="hero-title" className="t-xl">
            <span className="sr-only">Sites and apps, made in Kampala</span>
            <span aria-hidden>
              <BlurText
                text="Sites and apps,"
                animateBy="words"
                delay={90}
                trigger="load"
                className="block"
              />
              <BlurText
                text="made in Kampala"
                animateBy="words"
                delay={90}
                trigger="load"
                className="block text-glow"
              />
            </span>
          </h1>
          <p className="t-md mt-8 max-w-[38ch] text-foreground/80">
            I&apos;m Noah Katumba. I design and build fast websites, online
            stores and AI products for businesses in Uganda and beyond, with
            prices in shillings and a fixed quote up front.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              className="cta"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine className="size-[1.15em]" aria-hidden />
              WhatsApp Noah
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link
              href="/work"
              className="cta-ghost border-white/20 bg-white/5 backdrop-blur-md"
            >
              See the work
              <RiArrowRightLine className="size-[1.15em]" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <FloatingStage />
        </div>
      </div>
      <HeroScroll />
    </section>
  )
}
