// Services and prices. Approved by Noah on 2026-11-19 (docs/UPGRADE-PLAN.md, section 4).
// UGX is the price; USD is a guide for overseas clients at the rate below.
// Rate source: mid-market 15–17 Nov 2026 ranged 4,046–4,150 UGX per USD.

export const USD_RATE = 4100

export type Service = {
  id: string
  name: string
  blurb: string
  /** Lower bound, UGX. */
  from: number
  /** Upper bound, UGX. Omitted for open-ended "from" prices. */
  to?: number
  /** e.g. "/ month", "/ hour". */
  unit?: string
  delivery: string
  includes: string[]
  /** Priced per project: lead with "Get a quote". */
  quote?: boolean
}

export const SERVICES: Service[] = [
  {
    id: "landing-page",
    name: "Landing page",
    blurb:
      "One focused page that sells a product, event or offer and drives a single action.",
    from: 1_200_000,
    to: 2_500_000,
    delivery: "5–7 days",
    includes: [
      "Custom one-page design",
      "Mobile-first and fast",
      "WhatsApp or lead form",
      "SEO, analytics and deployment",
    ],
  },
  {
    id: "website",
    name: "Business website",
    blurb:
      "A complete multi-page site that makes your business look established and easy to trust.",
    from: 3_000_000,
    to: 7_000_000,
    delivery: "2–4 weeks",
    includes: [
      "Up to 8 custom pages",
      "CMS or blog you can edit",
      "Maps, WhatsApp and forms",
      "SEO, analytics and performance tuning",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce store",
    blurb:
      "An online store with catalogue, cart and checkout that takes Mobile Money and card.",
    from: 5_000_000,
    to: 10_000_000,
    delivery: "3–5 weeks",
    includes: [
      "Product catalogue and search",
      "Cart, checkout and orders",
      "Mobile Money and card payments",
      "Admin for products and orders",
    ],
  },
  {
    id: "app",
    name: "Web or mobile app",
    blurb:
      "Dashboards, platforms and AI products built around how your users actually work.",
    from: 12_000_000,
    delivery: "6+ weeks",
    includes: [
      "Discovery and system design",
      "Accounts, roles and secure logins",
      "APIs, payments and AI integrations",
      "Web, Android and iPhone options",
    ],
    quote: true,
  },
  {
    id: "redesign",
    name: "Redesign & upgrade",
    blurb: "Modernise an existing site or app without starting over.",
    from: 1_500_000,
    delivery: "1–3 weeks",
    includes: [
      "Audit of speed, SEO and design",
      "Fresh, modern interface",
      "Performance and security fixes",
      "New features where needed",
    ],
  },
  {
    id: "care",
    name: "Care plan",
    blurb:
      "Monthly maintenance so your site or app stays fast, secure and current.",
    from: 300_000,
    unit: "/ month",
    delivery: "Ongoing",
    includes: [
      "Updates and security patches",
      "Backups and uptime watch",
      "Monthly content edits",
      "Priority support",
    ],
  },
]

/** One-off fixes and work outside a package. */
export const HOURLY_RATE_UGX = 200_000

export const PRICING_NOTE =
  "Prices in UGX; USD is a guide. Every project gets a fixed quote before work starts."

/** Budget brackets for the inquiry form, aligned with the price list above. */
export const BUDGET_OPTIONS = [
  "Under UGX 1.5M",
  "UGX 1.5M – 3M",
  "UGX 3M – 7M",
  "UGX 7M – 12M",
  "UGX 12M+",
  "Not sure yet",
] as const

export const PROCESS = [
  {
    name: "Sketch",
    text: "We map your goals, pages and content, and agree a fixed quote.",
  },
  {
    name: "Build",
    text: "I design and code it, with a live preview you can click through.",
  },
  {
    name: "Launch",
    text: "Domain, hosting, speed and SEO checks, then it goes live.",
  },
  {
    name: "Grow",
    text: "Care plans, updates and new features as you grow.",
  },
] as const

export function ugx(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000
    return `UGX ${Number.isInteger(m) ? m : m.toFixed(1)}M`
  }
  return `UGX ${Math.round(n / 1000)}K`
}

/** Rounded to the nearest $5. */
export function usd(n: number): string {
  return `$${(Math.round(n / USD_RATE / 5) * 5).toLocaleString("en-US")}`
}

export function priceLabel(s: Service): { ugx: string; usd: string } {
  const unit = s.unit ? ` ${s.unit}` : ""
  if (s.to)
    return {
      ugx: `${ugx(s.from)} – ${ugx(s.to)}${unit}`,
      usd: `≈ ${usd(s.from)} – ${usd(s.to)}${unit}`,
    }
  return {
    ugx: `From ${ugx(s.from)}${unit}`,
    usd: `≈ from ${usd(s.from)}${unit}`,
  }
}
