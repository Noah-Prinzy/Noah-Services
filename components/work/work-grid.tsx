import Image from "next/image"
import Link from "next/link"
import { RiArrowRightUpLine } from "@remixicon/react"

import { GlowCard } from "@/components/ui/glow-card"
import { PROJECTS, type Project } from "@/data/projects"
import { COVERS } from "@/lib/covers"
import { cn } from "@/lib/utils"
import urcart from "@/public/work/urcart-wordmark.png"

// Bento of the six projects. The two built-alone flagships take the wide tiles.
// Six cards on a six-column grid in three rows that each fill: 4+2, 2+4, 3+3.
const SPAN: Record<string, string> = {
  zuula: "md:col-span-4",
  phronesis: "md:col-span-2",
  "pearl-ai": "md:col-span-2",
  "shamba-ai": "md:col-span-4",
  urcart: "md:col-span-3",
  "nine-coals": "md:col-span-3",
}
const WIDE = new Set(["zuula", "shamba-ai"])

function Cover({ p }: { p: Project }) {
  const cover = COVERS[p.slug]
  if (!cover) {
    return (
      <div className="absolute inset-x-6 top-6 bottom-0 grid place-items-center rounded-t-[calc(var(--radius)*1.2)] bg-[#0d100f] bg-[radial-gradient(circle_at_50%_60%,rgba(245,158,11,0.22),transparent_60%)]">
        <Image
          src={urcart}
          alt=""
          className="w-[58%] max-w-[300px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-3deg]"
        />
      </div>
    )
  }
  return (
    <div className="window absolute inset-x-6 top-6 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[-1.5deg]">
      <div className="window-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <Image
        src={cover}
        alt=""
        sizes="(min-width: 768px) 50vw, 100vw"
        placeholder="blur"
        className="block h-auto w-full"
      />
    </div>
  )
}

export function WorkGrid({
  headingLevel = "h3",
}: {
  headingLevel?: "h2" | "h3"
}) {
  const H = headingLevel
  return (
    <ul className="grid gap-4 md:grid-cols-6">
      {PROJECTS.map((p, i) => (
        <li
          key={p.slug}
          className={SPAN[p.slug] ?? "md:col-span-2"}
          data-reveal
          style={{ "--i": i } as React.CSSProperties}
        >
          <GlowCard className="group h-full">
            <Link
              href={`/work/${p.slug}`}
              className="flex h-full flex-col rounded-[inherit]"
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  WIDE.has(p.slug) ? "h-64 md:h-80" : "h-56 md:h-60"
                )}
              >
                <Cover p={p} />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-card to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6 pt-2">
                <div className="flex items-start justify-between gap-4">
                  <H className="font-heading text-[1.625rem] leading-tight font-semibold">
                    {p.title}
                  </H>
                  <RiArrowRightUpLine
                    className="mt-1 size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-glow"
                    aria-hidden
                  />
                </div>
                <p className="text-muted-foreground">{p.tagline}</p>
                <p className="t-xs mt-auto pt-3 text-glow">
                  {p.role} · {p.category} · {p.year}
                </p>
              </div>
            </Link>
          </GlowCard>
        </li>
      ))}
    </ul>
  )
}
