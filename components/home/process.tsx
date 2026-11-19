import {
  RiChatSmile3Line,
  RiCodeSSlashLine,
  RiRocket2Line,
  RiSeedlingLine,
} from "@remixicon/react"

import { PROCESS } from "@/data/services"

const ICONS = [
  RiChatSmile3Line,
  RiCodeSSlashLine,
  RiRocket2Line,
  RiSeedlingLine,
]

/** Four steps in one row, joined by a line: from first message to live. */
export function Process() {
  return (
    <section aria-labelledby="process-title" className="pt-[var(--section)]">
      <h2 id="process-title" className="t-lg max-w-[16ch]" data-reveal>
        From first message to live
      </h2>
      <ol className="relative mt-12 grid gap-4 md:grid-cols-4">
        <span
          className="absolute top-8 right-8 left-8 hidden h-px bg-gradient-to-r from-glow/0 via-glow/50 to-glow/0 md:block"
          aria-hidden
        />
        {PROCESS.map((p, i) => {
          const Icon = ICONS[i]
          return (
            <li
              key={p.name}
              className="relative"
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
            >
              <span
                className="hex grid size-16 place-items-center bg-primary text-primary-foreground"
                aria-hidden
              >
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 font-heading text-[1.5rem] font-semibold">
                <span className="sr-only">Step {i + 1}: </span>
                {p.name}
              </h3>
              <p className="mt-2 max-w-[30ch] text-muted-foreground">
                {p.text}
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
