import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { SERVICES, priceLabel } from "@/data/services"

// The home page's own section: how working with Noah goes, in three promises, rather
// than the price list (that lives on /services). Figures come from the service data.
export function Approach() {
  const landing = SERVICES.find((s) => s.id === "landing-page") ?? SERVICES[0]
  const store = SERVICES.find((s) => s.id === "ecommerce")
  const care = SERVICES.find((s) => s.id === "care")

  const points = [
    {
      title: "A fixed quote, in shillings",
      body: `You know the price before any work starts, and it doesn't move. A landing page is ${priceLabel(landing).ugx}, ready in ${landing.delivery}.`,
    },
    {
      title: "Built for the phone in your hand",
      body: `Every site is designed for mobile first and kept fast on mobile data.${store ? " Stores take Mobile Money as well as card." : ""}`,
    },
    {
      title: "Looked after once it's live",
      body: care
        ? `${care.name}s keep it updated, backed up and watched, so it stays fast and secure after launch.`
        : "Updates, backups and fixes after launch, so it stays fast and secure.",
    },
  ]

  return (
    <section
      aria-labelledby="approach-title"
      className="frame pt-[var(--section)]"
    >
      <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-12 lg:gap-[clamp(2rem,5vw,6rem)] lg:pt-16">
        <div className="lg:col-span-5">
          <p className="t-xs text-glow" data-reveal>
            How I work
          </p>
          <h2
            id="approach-title"
            className="t-lg mt-4 max-w-[14ch]"
            data-reveal
          >
            One person, from first message to launch
          </h2>
          <p
            className="t-md mt-6 max-w-[38ch] text-muted-foreground"
            data-reveal
          >
            You talk to the person who designs and builds it. No hand-offs, no
            account managers, one WhatsApp thread.
          </p>
          <Link href="/services" className="cta-ghost mt-10" data-reveal>
            Services and prices
            <RiArrowRightLine className="size-[1.15em]" aria-hidden />
          </Link>
        </div>
        <ol className="lg:col-span-7">
          {points.map((p, i) => (
            <li
              key={p.title}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className="grid grid-cols-[2.75rem_1fr] gap-x-3 border-b border-border py-8 first:pt-0 md:grid-cols-[4rem_1fr] md:gap-x-6 md:py-10"
            >
              <span
                className="tabular t-xs pt-[0.5em] text-muted-foreground"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-heading text-[clamp(1.5rem,2.4vw,2.75rem)] leading-tight font-semibold tracking-tight">
                  {p.title}
                </span>
                <span className="mt-3 block max-w-[52ch] text-muted-foreground">
                  {p.body}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
