// Six service drawings in one flat language (DESIGN.md, "Illustrations").
// Square corners, 2px ink strokes, muted fills, one emerald detail, the hexagon as the recurring node.
// Strokes draw on when the drawing mounts; reduced motion shows them complete (globals.css).

const INK = "var(--foreground)"
const FILL = "var(--muted)"
const ACCENT = "var(--primary)"

/** Flat-top hexagon centred at (cx, cy) with radius r. */
function hex(cx: number, cy: number, r: number) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  })
  return `M${pts.join(" L")} Z`
}

const stroke = {
  stroke: INK,
  strokeWidth: 2,
  fill: "none",
  pathLength: 1,
  className: "draw",
} as const

function Art({ id }: { id: string }) {
  switch (id) {
    case "landing-page":
      return (
        <>
          <rect x="120" y="30" width="160" height="240" fill={FILL} />
          <path d="M120 30 H280 V270 H120 Z" {...stroke} />
          <path d="M144 70 H256 M144 96 H224" {...stroke} />
          <rect x="144" y="196" width="112" height="36" fill={ACCENT} />
          <path d={hex(200, 146, 22)} {...stroke} />
        </>
      )
    case "website":
      return (
        <>
          <rect x="70" y="40" width="150" height="200" fill={FILL} />
          <path d="M70 40 H220 V240 H70 Z" {...stroke} />
          <path d="M125 70 H275 V270 H125 Z" {...stroke} />
          <path d="M180 100 H330 V300" {...stroke} />
          <rect x="149" y="96" width="102" height="10" fill={ACCENT} />
          <path d={hex(200, 190, 26)} {...stroke} />
        </>
      )
    case "ecommerce":
      return (
        <>
          <path d="M80 40 H320 V260 H80 Z" {...stroke} />
          {[0, 1, 2].flatMap((c) =>
            [0, 1].map((r) => (
              <rect
                key={`${c}-${r}`}
                x={104 + c * 72}
                y={64 + r * 84}
                width="56"
                height="64"
                fill={FILL}
              />
            ))
          )}
          <rect x="104" y="232" width="200" height="12" fill={ACCENT} />
          <path d={hex(320, 60, 30)} {...stroke} />
        </>
      )
    case "app":
      return (
        <>
          <rect x="60" y="60" width="220" height="150" fill={FILL} />
          <path d="M60 60 H280 V210 H60 Z" {...stroke} />
          <path d="M250 110 H330 V270 H250 Z" {...stroke} />
          <path d={hex(130, 135, 26)} {...stroke} />
          <path d={hex(210, 135, 26)} {...stroke} />
          <path d="M156 135 H184" {...stroke} />
          <rect x="266" y="240" width="48" height="14" fill={ACCENT} />
        </>
      )
    case "redesign":
      return (
        <>
          <path
            d="M50 70 H170 V230 H50 Z"
            stroke={INK}
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 8"
            opacity="0.45"
          />
          <rect x="230" y="70" width="120" height="160" fill={FILL} />
          <path d="M230 70 H350 V230 H230 Z" {...stroke} />
          <path d="M184 150 H216 M204 138 L216 150 L204 162" {...stroke} />
          <rect x="250" y="196" width="80" height="16" fill={ACCENT} />
          <path d={hex(290, 130, 24)} {...stroke} />
        </>
      )
    case "care":
      return (
        <>
          <path d={hex(200, 150, 110)} fill={FILL} />
          <path d={hex(200, 150, 110)} {...stroke} />
          <path
            d="M110 150 H160 L178 112 L204 192 L224 132 L238 150 H290"
            stroke={ACCENT}
            strokeWidth="4"
            fill="none"
            pathLength={1}
            className="draw"
          />
        </>
      )
    default:
      return null
  }
}

/** Remounts on `id` change (the caller keys it) so the strokes draw on again. */
export function ServiceArt({
  id,
  className,
}: {
  id: string
  className?: string
}) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <Art id={id} />
    </svg>
  )
}
