// The six featured projects, in display order. Chosen by Noah on 2026-11-19
// (docs/UPGRADE-PLAN.md, section 5). Facts come from each repo's README and
// language stats; live links were checked the same day.

export type Role = "Built solo" | "Led the team" | "Planning team"

export type RepoAccess =
  /** Anyone can open it. */
  | "public"
  /** Noah's own repo, still private; he is making it public before launch. */
  | "private"
  /** Owned by an organisation; public only if the org opens it. */
  | "org-private"

export type Project = {
  slug: string
  title: string
  /** One line for cards. */
  tagline: string
  /** Two or three sentences for the case-study intro. */
  summary: string
  category: "AI" | "Platform" | "Commerce" | "Website"
  role: Role
  /** What Noah personally did, in his words where he gave them. */
  roleDetail: string
  /** "Victoria University Kampala (CIT)" etc. when it was not a solo personal project. */
  context?: string
  year: number
  stack: string[]
  highlights: string[]
  repo: { url: string; access: RepoAccess }
  live?: { url: string; label: string }
  extraLinks?: { url: string; label: string }[]
  /** Card image under /public/work; added in phase 3. */
  cover?: string
}

export const PROJECTS: Project[] = [
  {
    slug: "zuula",
    title: "Zuula",
    tagline: "AI fact-guard that flags fake news for Ugandan readers.",
    summary:
      "Zuula checks news and social posts against trusted sources and flags what looks false or misleading, built for Uganda's information space. It pairs a TypeScript web app and API with a Python AI service.",
    category: "AI",
    role: "Built solo",
    roleDetail:
      "Designed and built the whole product: web app, API and the AI detection service.",
    context: "Victoria University Kampala, Centre for Intelligent Technologies",
    year: 2026,
    stack: ["TypeScript", "Python", "Next.js", "Docker"],
    highlights: [
      "Web app, API and AI service in one monorepo",
      "Python detection service behind a typed API",
      "Containerised and deployed",
    ],
    repo: { url: "https://github.com/Noah-Prinzy/zuula", access: "public" },
    live: { url: "https://zuula.vercel.app", label: "zuula.vercel.app" },
  },
  {
    slug: "phronesis",
    title: "Phronesis",
    tagline:
      "A JARVIS for your car: a realtime AI co-pilot for drivers and garages.",
    summary:
      "Phronesis understands your car and talks you through it in real time. A driver web app, a garage app and native mobile apps share one backend with a marketplace, payments, messaging and alerts, while a Python engine and R data pipeline power the intelligence.",
    category: "AI",
    role: "Built solo",
    roleDetail:
      "Built every layer: web and mobile apps, backend, database, AI engine and data pipeline.",
    year: 2026,
    stack: ["Next.js", "Expo", "Hono", "PostgreSQL + pgvector", "FastAPI", "R"],
    highlights: [
      "Driver and garage web apps plus Android and iPhone",
      "Realtime backend: auth, marketplace, payments, messaging, alerts",
      "Python AI engine with an R pipeline for scraping and price models",
    ],
    repo: {
      url: "https://github.com/Noah-Prinzy/PHRONESIS",
      access: "private",
    },
    live: {
      url: "https://phronesis-web.vercel.app",
      label: "phronesis-web.vercel.app",
    },
    extraLinks: [
      {
        url: "https://phronesis-presentation.vercel.app",
        label: "Product presentation",
      },
    ],
  },
  {
    slug: "pearl-ai",
    title: "Pearl AI",
    tagline:
      "Uganda's AI travel guide: discover, plan and experience the country.",
    summary:
      "Pearl helps visitors from abroad and Ugandans travelling at home discover places and events, ask questions and plan trips in one product that adapts to the question, place and timing.",
    category: "AI",
    role: "Planning team",
    roleDetail:
      "Part of the planning team; contributed to the product idea and the UI.",
    context: "Victoria University Kampala",
    year: 2026,
    stack: ["Next.js", "Expo", "Convex", "shadcn/ui", "OpenAI"],
    highlights: [
      "Ask-anything travel assistant",
      "Trip planner with saved preferences",
      "Web and native mobile from one monorepo",
    ],
    repo: {
      url: "https://github.com/VICTORIA-UNIVERSITY-KAMPALA/pearl-ai",
      access: "org-private",
    },
    live: { url: "https://pearl.travel", label: "pearl.travel" },
  },
  {
    slug: "shamba-ai",
    title: "Shamba AI",
    tagline:
      "Smart farming for Uganda: prices, AI advice, photo diagnosis and a marketplace.",
    summary:
      "Shamba AI gives crop, livestock and fish farmers live market prices, AI advisory, photo-based diagnosis and a marketplace, in English, Luganda and Swahili.",
    category: "AI",
    role: "Led the team",
    roleDetail: "Led the project and the team building it.",
    context: "Victoria University Kampala, Centre for Intelligent Technologies",
    year: 2026,
    stack: [
      "Next.js",
      "Firebase",
      "Mistral AI",
      "Cloudflare Workers",
      "next-intl",
    ],
    highlights: [
      "Photo diagnosis and AI advisory",
      "Phone-number sign-in and marketplace",
      "Three languages: English, Luganda, Swahili",
    ],
    repo: {
      url: "https://github.com/VICTORIA-UNIVERSITY-KAMPALA/shamba-ai",
      access: "org-private",
    },
    live: { url: "https://shambaai.pages.dev", label: "shambaai.pages.dev" },
  },
  {
    slug: "urcart",
    title: "UrCart 2.0",
    tagline: "Two storefronts, one API, one checkout.",
    summary:
      "UrCart (electronics) and Carry Crush (bags) are two brands that share one backend, one database and one cart, so a single order can hold items from both. The header logo switches between stores.",
    category: "Commerce",
    role: "Built solo",
    roleDetail:
      "Designed the brands and built the frontend, backend and shared contract.",
    year: 2026,
    stack: ["Angular 22", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    highlights: [
      "Two branded storefronts on one catalogue",
      "Shared TypeScript contract for frontend and API",
      "Accounts, cart and orders shared across brands",
    ],
    repo: {
      url: "https://github.com/Noah-Prinzy/UrCart_2.0",
      access: "private",
    },
  },
  {
    slug: "nine-coals",
    title: "Nine Coals",
    tagline: "A cinematic website for an open-fire grill in Johannesburg.",
    summary:
      "Nine Coals is a restaurant website built around motion: smooth scrolling and scroll-driven animation that carry the mood of an open-fire kitchen.",
    category: "Website",
    role: "Built solo",
    roleDetail: "Designed and built the site end to end.",
    year: 2026,
    stack: ["Next.js", "GSAP", "Motion", "Lenis", "Tailwind CSS"],
    highlights: [
      "Scroll-driven GSAP animation",
      "Lenis smooth scrolling",
      "Fully responsive",
    ],
    repo: {
      url: "https://github.com/Noah-Prinzy/SaaS-Temp_2",
      access: "private",
    },
    live: {
      url: "https://saastemp-zeta.vercel.app",
      label: "saastemp-zeta.vercel.app",
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

/** Only public repos get a working GitHub button; the rest show a disabled "private" state. */
export function repoIsOpen(p: Project): boolean {
  return p.repo.access === "public"
}
