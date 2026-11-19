"use client"

import { useEffect, useRef, useState } from "react"
import { RiCheckLine, RiWhatsappLine } from "@remixicon/react"

import { PROCESS } from "@/data/services"

// Four statements beside one pinned fragment that changes state as each passes
// (DESIGN.md, Process). Fragment content is a sample conversation, not a client.

function Fragment({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="flex flex-col gap-3">
        <p className="t-xs flex items-center gap-2 text-muted-foreground">
          <RiWhatsappLine className="size-[1.15em]" aria-hidden /> WhatsApp
        </p>
        <p className="max-w-[30ch] bg-background p-4">
          Hi Noah, I run a clinic in Ntinda. We need a site where patients can
          book a visit.
        </p>
        <p className="max-w-[30ch] self-end bg-inverse p-4 text-inverse-foreground">
          Happy to help. Let&apos;s list the pages, then I&apos;ll send a fixed
          quote.
        </p>
      </div>
    )
  if (i === 1)
    return (
      <div className="flex flex-col gap-3">
        <p className="t-xs text-muted-foreground">Preview link · build 14</p>
        <div className="bg-background p-5">
          <div className="h-3 w-24 bg-foreground" />
          <div className="mt-6 h-6 w-4/5 bg-muted" />
          <div className="mt-2 h-6 w-3/5 bg-muted" />
          <div className="mt-6 h-9 w-32 bg-primary" />
          <div className="mt-8 grid grid-cols-3 gap-2">
            <div className="h-16 bg-muted" />
            <div className="h-16 bg-muted" />
            <div className="h-16 bg-muted" />
          </div>
        </div>
        <p className="t-sm">
          Click through it on your phone and tell me what to change.
        </p>
      </div>
    )
  const rows =
    i === 2
      ? [
          "Domain connected",
          "HTTPS on",
          "Speed checked on a 3G phone",
          "Search engines told",
          "Live",
        ]
      : [
          "Updates applied",
          "Backup taken",
          "Uptime watched",
          "Content edits done",
          "Report sent",
        ]
  return (
    <div className="flex flex-col gap-3">
      <p className="t-xs text-muted-foreground">
        {i === 2 ? "Launch checklist" : "This month's care report"}
      </p>
      <ul className="bg-background">
        {rows.map((r, n) => (
          <li
            key={r}
            className={`flex items-center justify-between px-5 py-4 ${n % 2 ? "bg-muted/50" : ""}`}
          >
            {r}
            <RiCheckLine
              className="size-[1.15em] text-primary"
              aria-label="done"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Process() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting)
            setActive(Number((e.target as HTMLElement).dataset.step))
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="frame scroll-mt-4 pb-[var(--section)]"
    >
      <h2 id="process-title" className="t-lg max-w-[14ch]" data-reveal>
        From first message to live
      </h2>

      <div className="mt-12 grid gap-6 md:mt-[72px] md:grid-cols-12">
        <ol className="md:col-span-6">
          {PROCESS.map((p, i) => (
            <li
              key={p.name}
              ref={(el) => {
                refs.current[i] = el
              }}
              data-step={i}
              className="flex flex-col gap-4 py-12 md:min-h-[70svh] md:justify-center md:py-0"
            >
              <h3
                className={`t-lg transition-opacity duration-300 ${active === i ? "" : "md:opacity-30"}`}
              >
                {p.name}
              </h3>
              <p className="t-md max-w-[32ch]">{p.text}</p>
              <div className="mt-4 bg-muted p-5 md:hidden">
                <Fragment i={i} />
              </div>
            </li>
          ))}
        </ol>

        <div className="hidden md:col-span-5 md:col-start-8 md:block">
          <div className="sticky top-[15svh] flex min-h-[70svh] items-center bg-muted p-10">
            <div
              key={active}
              className="w-full animate-[fade-up_500ms_var(--ease-out)]"
            >
              <Fragment i={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
