"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightLine, RiArrowRightUpLine } from "@remixicon/react"

import { PROJECTS } from "@/data/projects"
import { COVERS } from "@/lib/covers"
import urcart from "@/public/work/urcart-wordmark.png"

// The home page's work section as a split showcase. Left: a numbered index of the six
// projects, one large row each. Right (wide screens): a sticky stage that shows the
// active project big, with its screen, what it is, my part and its stack. The active
// project is the hovered or focused row, or, while you scroll, the row nearest the
// middle of the screen. Phones and tablets get each project's screen inside its row.

function Screen({
  slug,
  sizes,
  className,
}: {
  slug: string
  sizes: string
  className?: string
}) {
  const cover = COVERS[slug]
  if (!cover) {
    return (
      <div className={`window ${className ?? ""}`}>
        <div className="window-bar" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <div className="grid aspect-[16/10] place-items-center bg-[#0d100f] bg-[radial-gradient(circle_at_50%_60%,rgba(245,158,11,0.25),transparent_60%)]">
          <Image src={urcart} alt="" sizes={sizes} className="w-[58%]" />
        </div>
      </div>
    )
  }
  return (
    <div className={`window ${className ?? ""}`}>
      <div className="window-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <Image
        src={cover}
        alt=""
        sizes={sizes}
        placeholder="blur"
        className="block aspect-[16/10] h-auto w-full object-cover object-top"
      />
    </div>
  )
}

export function WorkIndex({ limit }: { limit?: number }) {
  const projects = PROJECTS.slice(0, limit)
  const [active, setActive] = useState(projects[0].slug)
  const hovering = useRef(false)
  const rows = useRef<(HTMLLIElement | null)[]>([])

  // While the pointer is not on a row, follow the scroll: the row crossing the middle
  // band of the screen becomes active.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (hovering.current) return
        const hit = entries.find((e) => e.isIntersecting)
        if (hit) setActive((hit.target as HTMLElement).dataset.slug!)
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    rows.current.forEach((r) => r && io.observe(r))
    return () => io.disconnect()
  }, [])

  const current = projects.find((p) => p.slug === active) ?? projects[0]

  return (
    <div className="grid gap-x-[clamp(2rem,5vw,6rem)] lg:grid-cols-12">
      <ol
        className="border-t border-border lg:col-span-7"
        onPointerEnter={() => (hovering.current = true)}
        onPointerLeave={() => (hovering.current = false)}
      >
        {projects.map((p, i) => {
          const on = p.slug === active
          return (
            <li
              key={p.slug}
              ref={(el) => {
                rows.current[i] = el
              }}
              data-slug={p.slug}
              className="border-b border-border"
            >
              <Link
                href={`/work/${p.slug}`}
                onPointerEnter={() => setActive(p.slug)}
                onFocus={() => setActive(p.slug)}
                aria-current={undefined}
                data-on={on || undefined}
                className="work-row group relative grid grid-cols-[2.75rem_1fr_auto] items-start gap-x-3 py-6 md:grid-cols-[4rem_1fr_auto] md:gap-x-6 md:py-8"
              >
                <span
                  className="tabular t-xs pt-[0.6em] text-muted-foreground"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="work-title block font-heading text-[clamp(2rem,4.6vw,5.5rem)] leading-[0.95] font-semibold tracking-tight">
                    {p.title}
                  </span>
                  <span className="mt-3 block max-w-[48ch] text-muted-foreground">
                    {p.tagline}
                  </span>
                  <span className="t-xs mt-2 block text-glow">
                    {p.role} · {p.category} · {p.year}
                  </span>
                </span>
                <RiArrowRightUpLine
                  className="mt-2 size-7 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-glow group-data-[on]:text-glow md:size-9"
                  aria-hidden
                />
                {/* Below the wide layout, each row carries its own screen. */}
                <Screen
                  slug={p.slug}
                  sizes="(min-width: 768px) 80vw, 92vw"
                  className="col-span-2 col-start-2 mt-6 lg:hidden"
                />
              </Link>
            </li>
          )
        })}
      </ol>

      {/* Wide screens: the sticky stage. Decorative mirror of the active row. */}
      <aside className="hidden lg:col-span-5 lg:block" aria-hidden>
        <Link
          href={`/work/${current.slug}`}
          tabIndex={-1}
          className="group sticky top-[calc(50svh-min(22rem,38svh))] block"
        >
          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-primary/20 blur-[90px]" />
            <div className="relative aspect-[16/11.4]">
              {projects.map((p) => (
                <div
                  key={p.slug}
                  className={`work-stage-item absolute inset-0 ${p.slug === active ? "is-on" : ""}`}
                >
                  <Screen slug={p.slug} sizes="(min-width: 1024px) 40vw, 1px" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6">
            <p className="t-xs text-glow">{current.roleDetail}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {current.stack.slice(0, 6).map((s) => (
                <li
                  key={s}
                  className="border border-border px-3 py-1.5 text-[0.875rem] text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 inline-flex items-center gap-2 font-medium group-hover:text-glow">
              Open {current.title}
              <RiArrowRightLine className="size-[1.15em] transition-transform group-hover:translate-x-1" />
            </p>
          </div>
        </Link>
      </aside>
    </div>
  )
}
