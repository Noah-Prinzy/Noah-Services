import Image from "next/image"
import { RiArrowRightUpLine } from "@remixicon/react"

import { CHANNELS } from "@/data/contact"
import code from "@/public/photos/code-on-screen.webp"

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative min-h-[110svh] scroll-mt-0"
    >
      <Image
        src={code}
        alt="Close-up of JavaScript code glowing on a dark screen"
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover"
      />
      <div className="frame relative flex min-h-[110svh] items-end py-[var(--gutter)] md:py-16">
        <div className="w-full max-w-xl bg-background p-6 md:p-12" data-reveal>
          <h2 id="contact-title" className="t-lg">
            Tell me what you&apos;re building
          </h2>
          <p className="t-md mt-6 max-w-[36ch]">
            WhatsApp is quickest. Say what you need and roughly your budget, and
            I&apos;ll come back with a fixed quote.
          </p>
          <ul className="mt-10">
            {CHANNELS.map((c, n) => (
              <li key={c.id}>
                <a
                  href={c.href}
                  target={
                    c.id === "call" || c.id === "email" ? undefined : "_blank"
                  }
                  rel="noreferrer"
                  className={`group flex items-center justify-between gap-4 px-4 py-4 transition-colors hover:bg-muted ${
                    n === 0
                      ? "bg-primary text-primary-foreground hover:bg-primary"
                      : ""
                  }`}
                >
                  <span className="font-heading text-[19px] font-semibold">
                    {c.label}
                  </span>
                  <span className="flex items-center gap-2">
                    {c.value}
                    <RiArrowRightUpLine className="size-[1.15em]" aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="absolute inset-x-[var(--gutter)] top-4 flex justify-end">
        <span className="t-xs bg-inverse/70 px-2 py-1 text-inverse-foreground">
          Photo: Markus Spiske, Unsplash
        </span>
      </p>
    </section>
  )
}
