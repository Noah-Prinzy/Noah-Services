import Image from "next/image"
import {
  RiArrowRightUpLine,
  RiInstagramLine,
  RiMailLine,
  RiPhoneLine,
  RiWhatsappLine,
} from "@remixicon/react"

import { GlowCard } from "@/components/ui/glow-card"
import { CHANNELS } from "@/data/contact"
import code from "@/public/photos/react-code.webp"

const ICON = {
  whatsapp: RiWhatsappLine,
  call: RiPhoneLine,
  email: RiMailLine,
  instagram: RiInstagramLine,
}
const external = (id: string) => id === "whatsapp" || id === "instagram"

/** The four ways to reach Noah, as large tappable cards beside the code photograph. */
export function Contact() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
        {CHANNELS.map((c, i) => {
          const Icon = ICON[c.id]
          return (
            <li
              key={c.id}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              <GlowCard className="group h-full">
                <a
                  href={c.href}
                  target={external(c.id) ? "_blank" : undefined}
                  rel={external(c.id) ? "noreferrer" : undefined}
                  className="flex h-full flex-col justify-between gap-5 rounded-[inherit] p-5 sm:min-h-44 sm:gap-8 sm:p-6"
                >
                  <span className="flex items-center justify-between">
                    <span
                      className={`grid size-12 place-items-center rounded-2xl ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <RiArrowRightUpLine
                      className="size-5 text-muted-foreground transition-colors group-hover:text-glow"
                      aria-hidden
                    />
                  </span>
                  <span>
                    <span className="block font-heading text-[1.5rem] font-semibold">
                      {c.label}
                    </span>
                    <span className="mt-1 block break-all text-muted-foreground">
                      {c.value}
                    </span>
                    {external(c.id) && (
                      <span className="sr-only"> (opens in a new tab)</span>
                    )}
                  </span>
                </a>
              </GlowCard>
            </li>
          )
        })}
      </ul>
      <figure className="relative min-h-80 overflow-hidden rounded-[calc(var(--radius)*2.5)] border border-border lg:col-span-5">
        <Image
          src={code}
          alt="React source code open in a dark code editor"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          placeholder="blur"
          className="object-cover"
        />
        <figcaption className="t-xs absolute right-3 bottom-3 rounded-full bg-black/60 px-3 py-1 text-white">
          Photo: Juanjo Jaramillo, Unsplash
        </figcaption>
      </figure>
    </div>
  )
}
