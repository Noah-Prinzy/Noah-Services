"use client"

import { useEffect, useRef, type CSSProperties } from "react"

import { LogoMark } from "@/components/site/logo"

// Decorative objects that drift through a band of the page as it scrolls, then
// dissolve (blur, fade, break up) as they leave the top of the screen. One scroll
// listener per band sets --t (0 = band enters at the bottom, 1 = band has left the
// top); every object derives its motion from that in CSS (.floater, globals.css).
// Under reduced motion --t stays at 0.5 and nothing moves.

/** An isometric wireframe cube cut into a 3×3 grid, like a puzzle cube drawn in light. */
function WireCube({ className }: { className?: string }) {
  // Cube corners in a 100×100 box: top centre, left, right, bottom, and the centre vertex.
  const T = [50, 6],
    L = [12, 28],
    R = [88, 28],
    C = [50, 50],
    BL = [12, 72],
    BR = [88, 72],
    B = [50, 94]
  const lerp = (a: number[], b: number[], k: number) => [
    a[0] + (b[0] - a[0]) * k,
    a[1] + (b[1] - a[1]) * k,
  ]
  const lines: number[][][] = []
  // For each face (given by its four corners), draw the two inner grid lines in each direction.
  const face = (p0: number[], p1: number[], p2: number[], p3: number[]) => {
    for (const k of [1 / 3, 2 / 3]) {
      lines.push([lerp(p0, p1, k), lerp(p3, p2, k)])
      lines.push([lerp(p0, p3, k), lerp(p1, p2, k)])
    }
  }
  face(L, T, R, C)
  face(L, C, B, BL)
  face(C, R, BR, B)
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
    >
      <polygon
        points={[T, R, BR, B, BL, L].map((p) => p.join(",")).join(" ")}
      />
      <polyline points={[L, C, R].map((p) => p.join(",")).join(" ")} />
      <line x1={C[0]} y1={C[1]} x2={B[0]} y2={B[1]} />
      {lines.map(([a, b], i) => (
        <line
          key={i}
          x1={a[0]}
          y1={a[1]}
          x2={b[0]}
          y2={b[1]}
          strokeOpacity="0.6"
        />
      ))}
    </svg>
  )
}

function HexRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <polygon points="50,4 90,27 90,73 50,96 10,73 10,27" />
      <polygon
        points="50,18 78,34 78,66 50,82 22,66 22,34"
        strokeOpacity="0.45"
        strokeDasharray="2 3"
      />
    </svg>
  )
}

type Obj = {
  /** Which drawing */
  kind: "cube" | "hex" | "orb" | "logo"
  /** Where in the band, as CSS position values */
  pos: CSSProperties
  /** Size, CSS length */
  size: string
  /** Vertical travel over the band, px (positive drifts up faster than the page) */
  speed: number
  /** Total spin over the band, deg */
  spin: number
  className?: string
}

const SETS: Record<"work" | "services", Obj[]> = {
  work: [
    {
      kind: "cube",
      pos: { right: "4%", top: "2%" },
      size: "clamp(90px, 11vw, 170px)",
      speed: 260,
      spin: 50,
      className: "text-foreground/70",
    },
    {
      kind: "orb",
      pos: { left: "-3%", top: "34%" },
      size: "clamp(70px, 8vw, 120px)",
      speed: 420,
      spin: 0,
    },
    {
      kind: "hex",
      pos: { right: "-2%", top: "58%" },
      size: "clamp(80px, 9vw, 140px)",
      speed: 340,
      spin: -80,
      className: "hidden md:block text-glow/70",
    },
    {
      kind: "logo",
      pos: { left: "46%", top: "92%" },
      size: "clamp(54px, 5vw, 76px)",
      speed: 300,
      spin: 30,
      className: "hidden md:block",
    },
  ],
  services: [
    {
      kind: "hex",
      pos: { left: "-6%", top: "8%" },
      size: "clamp(80px, 10vw, 150px)",
      speed: 300,
      spin: 90,
      className: "hidden md:block text-glow/70",
    },
    {
      kind: "cube",
      pos: { right: "6%", top: "64%" },
      size: "clamp(70px, 8vw, 120px)",
      speed: 380,
      spin: -60,
      className: "hidden md:block text-foreground/60",
    },
    {
      kind: "orb",
      pos: { right: "30%", top: "-4%" },
      size: "clamp(40px, 4vw, 64px)",
      speed: 480,
      spin: 0,
      className: "hidden md:block",
    },
  ],
}

export function Floaters({ set }: { set: keyof typeof SETS }) {
  const band = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = band.current
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let raf = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const t = (innerHeight - r.top) / (innerHeight + r.height)
      el.style.setProperty("--t", Math.min(1, Math.max(0, t)).toFixed(4))
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
  }, [])

  return (
    <div
      ref={band}
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ "--t": 0.5 } as CSSProperties}
      aria-hidden
    >
      {SETS[set].map((o, i) => (
        <div
          key={i}
          className={`floater absolute ${o.className ?? ""}`}
          style={
            {
              ...o.pos,
              width: o.size,
              "--speed": o.speed,
              "--spin": `${o.spin}deg`,
            } as CSSProperties
          }
        >
          <div
            className="float"
            style={
              {
                "--dur": `${7 + i * 1.5}s`,
                "--delay": `${-i * 2}s`,
              } as CSSProperties
            }
          >
            {o.kind === "cube" && (
              <WireCube className="h-auto w-full drop-shadow-[0_0_14px_rgba(0,209,143,0.35)]" />
            )}
            {o.kind === "hex" && (
              <HexRing className="h-auto w-full drop-shadow-[0_0_12px_rgba(0,209,143,0.5)]" />
            )}
            {o.kind === "orb" && (
              <span className="is-round block aspect-square w-full bg-[radial-gradient(circle_at_32%_30%,#7fffd0,#00a372_45%,#04291d_80%)] shadow-[0_0_60px_rgba(0,209,143,0.45)]" />
            )}
            {o.kind === "logo" && (
              <span className="grid aspect-square w-full place-items-center rounded-[28%] border border-white/10 bg-[#0b0b0b] p-[20%] shadow-[0_20px_50px_-12px_rgba(0,163,114,0.6)]">
                <LogoMark className="h-full w-full text-[#00a372]" />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
