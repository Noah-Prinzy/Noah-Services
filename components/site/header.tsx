"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiWhatsappLine } from "@remixicon/react"

import { Wordmark } from "@/components/site/logo"
import { ThemeToggle } from "@/components/site/theme-toggle"
import { CONTACT } from "@/data/contact"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const path = usePathname()
  const isCurrent = (href: string) =>
    path === href || path.startsWith(`${href}/`)

  // Over the home hero the bar dissolves into it (no fill, no border, the hero's dark
  // tokens); once the hero has scrolled under it, it pops in as the floating pill.
  // Other pages: bare at the very top, solid as soon as the page moves.
  const [solid, setSolid] = useState(false)
  const [overHero, setOverHero] = useState(false)
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]")
    let raf = 0
    const update = () => {
      const past = hero
        ? hero.getBoundingClientRect().bottom <= 96 * (parseFloat(getComputedStyle(document.documentElement).fontSize) / 16)
        : scrollY > 16
      setSolid(past)
      setOverHero(Boolean(hero) && !past)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    addEventListener("scroll", onScroll, { passive: true })
    addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener("scroll", onScroll)
      removeEventListener("resize", onScroll)
    }
  }, [path])

  return (
    <header
      data-solid={solid}
      className={cn(
        "sticky top-0 z-50 pt-3",
        overHero && "dark text-foreground"
      )}
    >
      <div className="frame">
        <div className="nav-pill flex h-16 items-center justify-between gap-4 rounded-full border border-border bg-background/75 pr-2 pl-5 backdrop-blur-xl">
          <Link href="/" className="text-[1.1875rem]" aria-label="Noah Devs, home">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isCurrent(n.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2.5 transition-colors hover:bg-muted",
                  isCurrent(n.href) && "bg-muted text-glow"
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={CONTACT.whatsapp}
              className="cta hidden sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine className="size-[1.15em]" aria-hidden />
              WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {/* Phones: a menu that opens without script. */}
            <details className="group relative md:hidden">
              <summary className="grid h-11 cursor-pointer list-none place-items-center rounded-full border border-border px-4 [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Menu</span>
                <span className="hidden group-open:inline">Close</span>
              </summary>
              <nav
                aria-label="Main"
                className="absolute top-14 right-0 flex w-[min(86vw,320px)] flex-col gap-1 rounded-3xl border border-border bg-background p-3 shadow-2xl"
              >
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    aria-current={isCurrent(n.href) ? "page" : undefined}
                    className="t-md rounded-2xl px-4 py-3 hover:bg-muted aria-[current=page]:text-glow"
                  >
                    {n.label}
                  </Link>
                ))}
                <a
                  href={CONTACT.whatsapp}
                  className="cta mt-2 w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiWhatsappLine className="size-[1.15em]" aria-hidden />
                  WhatsApp Noah
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}
