"use client"

import LogoLoop from "@/components/LogoLoop"

// Tools from the six featured projects (data/projects.ts), as a slow loop.
const STACK = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "Expo",
  "NestJS",
  "Angular",
  "PostgreSQL",
  "Firebase",
  "FastAPI",
  "Docker",
  "Tailwind CSS",
  "GSAP",
  "OpenAI",
]

export function StackStrip() {
  return (
    <section
      aria-label="Tools I build with"
      className="border-y border-border py-6"
    >
      <ul className="sr-only">
        {STACK.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div aria-hidden>
        <LogoLoop
          logos={STACK.map((s) => ({
            node: (
              <span className="font-heading text-[1.375rem] font-semibold text-muted-foreground">
                {s}
              </span>
            ),
          }))}
          speed={40}
          gap={56}
          logoHeight={28}
          pauseOnHover
          fadeOut
        />
      </div>
    </section>
  )
}
