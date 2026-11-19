"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"
import Image from "next/image"
import { RiWhatsappLine } from "@remixicon/react"

import { LogoMark } from "@/components/site/logo"
import { COVERS } from "@/lib/covers"
import blackHole from "@/public/photos/black-hole.webp"
import urcart from "@/public/work/urcart-wordmark.png"

// A collage of real work floating around the ⌬ hexagon. Each piece drifts on its
// own beat (.float) and leans toward the pointer by its depth. Under reduced
// motion everything holds still (globals.css), and the pointer is ignored.

type Piece = {
  depth: number
  /** Where it flies on the way out as the hero scrolls away: x px, y px, spin deg, scale */
  out: [number, number, number, number]
  pos: CSSProperties
  tilt?: string
  dur: string
  delay?: string
  className?: string
  children: ReactNode
}

function Window({ src, label }: { src: keyof typeof COVERS; label: string }) {
  return (
    <figure className="window">
      <div className="window-bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <Image
        src={COVERS[src]}
        alt={label}
        sizes="(min-width: 768px) 22vw, 45vw"
        placeholder="blur"
        className="block h-auto w-full"
      />
    </figure>
  )
}

const PIECES: Piece[] = [
  {
    // A black hole through the hexagon: the window everything orbits.
    out: [0, -40, 0, 1.7],
    depth: 0.25,
    pos: { left: "18%", top: "12%", width: "64%" },
    dur: "11s",
    children: (
      <div className="hex relative aspect-[0.866] w-full overflow-hidden">
        <Image
          src={blackHole}
          alt=""
          fill
          sizes="(min-width: 768px) 34vw, 64vw"
          placeholder="blur"
          fetchPriority="high"
          loading="eager"
          className="object-cover"
        />
      </div>
    ),
  },
  {
    out: [320, -260, 28, 0.8],
    depth: 0.9,
    pos: { right: "-2%", top: "4%", width: "46%" },
    tilt: "5deg",
    dur: "8s",
    delay: "-2s",
    children: (
      <Window src="zuula" label="Zuula, an AI fact-checker for Ugandan news" />
    ),
  },
  {
    out: [-340, 160, -34, 0.8],
    depth: 1.1,
    pos: { left: "-4%", bottom: "8%", width: "50%" },
    tilt: "-6deg",
    dur: "9s",
    delay: "-4s",
    children: (
      <Window
        src="nine-coals"
        label="Nine Coals, a cinematic restaurant website"
      />
    ),
  },
  {
    out: [260, 240, 22, 0.7],
    depth: 0.7,
    className: "hidden sm:block",
    pos: { right: "4%", bottom: "2%", width: "34%" },
    tilt: "3deg",
    dur: "10s",
    delay: "-1s",
    children: (
      <Window src="shamba-ai" label="Shamba AI, smart farming for Uganda" />
    ),
  },
  {
    // UrCart's own transparent wordmark, floating free with no frame.
    out: [-260, -300, -50, 0.6],
    depth: 1.4,
    pos: { left: "2%", top: "6%", width: "30%" },
    tilt: "-8deg",
    dur: "7s",
    delay: "-3s",
    children: (
      <Image
        src={urcart}
        alt="UrCart"
        sizes="20vw"
        className="h-auto w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]"
      />
    ),
  },
  {
    out: [0, -120, 180, 2.2],
    depth: 1.6,
    pos: { left: "40%", top: "44%", width: "20%" },
    dur: "6s",
    children: (
      <div className="grid aspect-square place-items-center rounded-[28%] border border-white/10 bg-[#0b0b0b] p-[18%] shadow-[0_24px_60px_-12px_rgba(0,163,114,0.55)]">
        <LogoMark className="h-full w-full text-[#00a372]" />
      </div>
    ),
  },
  {
    out: [380, 20, 10, 0.9],
    depth: 1.2,
    className: "hidden md:block",
    pos: { right: "0%", top: "52%" },
    dur: "9s",
    delay: "-5s",
    children: (
      <p className="flex items-center gap-2 rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-[0.9375rem] text-primary-foreground shadow-xl">
        <RiWhatsappLine className="size-4 shrink-0" aria-hidden />
        Can you build our booking site?
      </p>
    ),
  },
]

export function FloatingStage() {
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = stage.current
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!matchMedia("(pointer: fine)").matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        el.style.setProperty(
          "--px",
          ((e.clientX - r.left) / r.width - 0.5).toFixed(3)
        )
        el.style.setProperty(
          "--py",
          ((e.clientY - r.top) / r.height - 0.5).toFixed(3)
        )
      })
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return (
    <div
      ref={stage}
      className="relative mx-auto aspect-square w-full max-w-[min(820px,92vw)]"
      style={{ "--px": 0, "--py": 0 } as CSSProperties}
      role="group"
      aria-label="A collage of Noah's projects: Zuula, Nine Coals, Shamba AI and UrCart"
    >
      {/* A slow ring of the hexagon behind the collage. */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-[6%] animate-[spin-slow_80s_linear_infinite] text-glow/30"
        aria-hidden
      >
        <polygon
          points="50,2 92,26 92,74 50,98 8,74 8,26"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="1 2.2"
        />
      </svg>
      {PIECES.map((p, i) => (
        <div
          key={i}
          className={`hero-piece absolute ${p.className ?? ""}`}
          style={{
            ...p.pos,
            // Pointer parallax plus the scroll exit: each piece flies its own way, spins,
            // grows or shrinks, and dissolves (.hero-piece in globals.css).
            transform: `translate3d(calc(var(--px) * ${p.depth * 36}px + var(--p) * ${p.out[0]}px), calc(var(--py) * ${p.depth * 36}px + var(--p) * ${p.out[1]}px), 0) rotate(calc(var(--p) * ${p.out[2]}deg)) scale(calc(1 + var(--p) * ${p.out[3] - 1}))`,
          }}
        >
          <div
            className="float"
            style={
              {
                rotate: p.tilt,
                "--dur": p.dur,
                "--delay": p.delay,
              } as CSSProperties
            }
          >
            {p.children}
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * The hero's looping background video. Rendered without autoplay, then played only
 * when motion is allowed, and paused whenever the hero is off screen.
 */
export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = video.current
    if (!v || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={video}
      className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
      poster="/video/hero-grid-poster.webp"
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
    >
      <source src="/video/hero-grid.webm" type="video/webm" />
      <source src="/video/hero-grid.mp4" type="video/mp4" />
    </video>
  )
}

/**
 * Drives the hero's scroll exit: sets --p (0 at the top, 1 once three quarters of
 * the hero has scrolled away) on the hero section, and turns up an SVG turbulence
 * displacement so the floating pieces break apart as they fade. Off under reduced motion.
 */
export function HeroScroll() {
  const anchor = useRef<HTMLSpanElement>(null)
  const displace = useRef<SVGFEDisplacementMapElement>(null)

  useEffect(() => {
    const hero = anchor.current?.closest<HTMLElement>("[data-hero]")
    if (!hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const update = () => {
      const p = Math.min(1, Math.max(0, scrollY / (hero.offsetHeight * 0.75)))
      hero.style.setProperty("--p", p.toFixed(4))
      hero.toggleAttribute("data-out", p > 0.01)
      displace.current?.setAttribute("scale", (p * 90).toFixed(1))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <span ref={anchor} aria-hidden>
      <svg width="0" height="0" className="absolute">
        <filter id="hero-dissolve" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="2"
            seed="7"
          />
          <feDisplacementMap
            ref={displace}
            in="SourceGraphic"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </span>
  )
}
