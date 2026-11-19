import Image from "next/image"
import Link from "next/link"
import { RiWhatsappLine } from "@remixicon/react"

import { LogoMark } from "@/components/site/logo"
import { CONTACT } from "@/data/contact"
import board from "@/public/photos/circuit-board.webp"

/** Closing call to action: the circuit-board photograph in a rounded panel, the mark floating over it. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="frame pt-[var(--section)]">
      <div className="relative isolate overflow-hidden rounded-[calc(var(--radius)*3)] border border-border">
        <Image
          src={board}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="-z-20 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.155_0.004_165/0.94)_35%,oklch(0.155_0.004_165/0.55))]"
          aria-hidden
        />
        <div className="grid items-center gap-10 p-8 text-white md:grid-cols-12 md:p-16">
          <div className="md:col-span-8">
            <h2 id="cta-title" className="t-lg max-w-[18ch]">
              Tell me what you&apos;re building
            </h2>
            <p className="t-md mt-6 max-w-[44ch] text-white/75">
              Say what you need and roughly your budget on WhatsApp. I&apos;ll
              come back with a fixed quote.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
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
                href="/contact"
                className="cta-ghost border-white/20 text-white"
              >
                Other ways to reach me
              </Link>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:block" aria-hidden>
            <div
              className="float mx-auto w-44 rotate-6 rounded-[28%] border border-white/10 bg-[#0b0b0b] p-8 shadow-[0_30px_80px_-20px_rgba(0,163,114,0.6)]"
              style={{ "--dur": "7s" } as React.CSSProperties}
            >
              <LogoMark className="h-auto w-full text-[#00a372]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
