"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { RiWhatsappLine } from "@remixicon/react"

import { CONTACT } from "@/data/contact"
import sunrise from "@/public/photos/sunrise-misty-hills.webp"

// The signature (DESIGN.md, Idea): Kampala seen through the ⌬ hexagon, which opens
// to the full screen as you scroll. Without script it is a single still screen;
// under reduced motion the picture is open with the headline on the ground (globals.css).

const clamp = (v: number) => Math.min(1, Math.max(0, v))
const smooth = (t: number) => t * t * (3 - 2 * t)

export function Hero() {
  const section = useRef<HTMLElement>(null)
  const win = useRef<HTMLDivElement>(null)
  const pic = useRef<HTMLDivElement>(null)
  const copy = useRef<HTMLDivElement>(null)
  const caption = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const s = section.current!
    s.classList.add("is-live")
    let raf = 0

    const draw = () => {
      raf = 0
      const w = win.current!.clientWidth
      const h = win.current!.clientHeight
      const vw = window.innerWidth
      // Same geometry as the CSS fallback in globals.css (.hero-window).
      const r = vw >= 768 ? Math.min(0.19 * vw, 0.27 * h) : 0.36 * vw
      const cx = w / 2
      const cy = (vw >= 768 ? 0.66 : 0.7) * h
      const k = r * 0.866

      const travel = Math.max(1, s.offsetHeight - h)
      const p = smooth(clamp(-s.getBoundingClientRect().top / travel))

      const hexPts = [
        [cx + r, cy],
        [cx + r / 2, cy + k],
        [cx - r / 2, cy + k],
        [cx - r, cy],
        [cx - r / 2, cy - k],
        [cx + r / 2, cy - k],
      ]
      const rectPts = [
        [w, h / 2],
        [w, h],
        [0, h],
        [0, h / 2],
        [0, 0],
        [w, 0],
      ]
      const pts = hexPts.map(([x, y], i) => {
        const [X, Y] = rectPts[i]
        return `${(x + (X - x) * p).toFixed(1)}px ${(y + (Y - y) * p).toFixed(1)}px`
      })
      win.current!.style.clipPath = `polygon(${pts.join(",")})`
      pic.current!.style.transform = `translateY(${(0.3 * h * (1 - p)).toFixed(1)}px) scale(${(1.12 - 0.12 * p).toFixed(4)})`
      copy.current!.style.opacity = String(1 - clamp(p * 4))
      caption.current!.style.opacity = String(clamp((p - 0.7) / 0.3))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      s.classList.remove("is-live")
    }
  }, [])

  return (
    <section
      ref={section}
      className="hero relative"
      aria-labelledby="hero-title"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={win} className="hero-window absolute inset-0">
          <div
            ref={pic}
            className="hero-pic absolute inset-0 will-change-transform"
          >
            <Image
              src={sunrise}
              alt="Sunrise over misty forested hills, light breaking through the trees"
              fill
              sizes="100vw"
              fetchPriority="high"
              loading="eager"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>

        <div
          ref={copy}
          className="hero-copy frame relative grid gap-6 pt-6 md:grid-cols-12 md:gap-6 md:pt-12"
        >
          <h1 id="hero-title" className="t-lg md:col-span-7 md:max-w-[16ch]">
            Sites and apps, made in Kampala
          </h1>
          <div className="flex flex-col items-start gap-6 md:col-span-4 md:col-start-9">
            <p className="t-md max-w-[36ch]">
              I&apos;m Noah Katumba. I design and build fast websites, online
              stores and AI products for businesses in Uganda and beyond.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={CONTACT.whatsapp}
                className="cta"
                target="_blank"
                rel="noreferrer"
              >
                <RiWhatsappLine className="size-[1.15em]" aria-hidden />
                WhatsApp Noah
              </a>
              <a href="#work" className="link">
                See the work
              </a>
            </div>
          </div>
        </div>

        <p
          ref={caption}
          className="hero-caption t-xs absolute bottom-6 left-[var(--gutter)] bg-inverse/70 px-2 py-1 text-inverse-foreground"
        >
          Every project starts at first light. Photo: Shai Pal, Unsplash
        </p>
      </div>
    </section>
  )
}
