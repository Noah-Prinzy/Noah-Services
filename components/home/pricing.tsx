"use client"

import { useState } from "react"
import { RiCheckLine, RiWhatsappLine } from "@remixicon/react"

import { ServiceArt } from "@/components/illustrations/service-art"
import { whatsappLink } from "@/data/contact"
import {
  HOURLY_RATE_UGX,
  PRICING_NOTE,
  SERVICES,
  priceLabel,
  ugx,
  type Service,
} from "@/data/services"

// The live thing (DESIGN.md): pick a service, the price changes in place, and the
// button opens WhatsApp with that service already written. Every plan's price is
// also printed in the list, so nothing is hidden without script.

const short = (n: number) =>
  n >= 1_000_000
    ? `${+(n / 1_000_000).toFixed(1)}M`
    : `${Math.round(n / 1000)}K`

function Figure({ s }: { s: Service }) {
  return (
    <div>
      <p className="t-xl tabular whitespace-nowrap">
        <span className="t-md mr-3 tracking-normal">
          {s.to ? "UGX" : "From UGX"}
        </span>
        {s.to ? `${short(s.from)}–${short(s.to)}` : short(s.from)}
        {s.unit && <span className="t-md ml-3 tracking-normal">{s.unit}</span>}
      </p>
      <p className="t-sm mt-3 text-muted-foreground">
        {priceLabel(s).usd} at today&apos;s rate
      </p>
    </div>
  )
}

export function Pricing() {
  const [sel, setSel] = useState(1)
  const s = SERVICES[sel]

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="frame scroll-mt-4 py-[var(--section)]"
    >
      <div className="grid gap-6 md:grid-cols-12">
        <h2 id="services-title" className="t-lg md:col-span-7" data-reveal>
          What it costs, up front
        </h2>
        <p
          className="t-md max-w-[40ch] md:col-span-4 md:col-start-9 md:self-end"
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Pick what you need. {PRICING_NOTE}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:mt-[72px] md:grid-cols-12">
        <div
          className="grid grid-cols-2 gap-1 self-start md:col-span-4 md:grid-cols-1"
          aria-label="Services"
        >
          {SERVICES.map((x, i) => {
            const on = i === sel
            return (
              <button
                key={x.id}
                type="button"
                aria-pressed={on}
                aria-controls="price-stage"
                onClick={() => setSel(i)}
                className={`flex min-h-14 flex-col items-start gap-1 px-4 py-3 text-left transition-colors md:flex-row md:items-center md:justify-between md:gap-4 md:px-5 md:py-4 ${
                  on ? "bg-muted" : "hover:bg-muted/60"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`size-2 shrink-0 ${on ? "bg-primary" : "bg-transparent"}`}
                  />
                  <span className="font-heading text-[19px] font-semibold md:text-[21px]">
                    {x.name}
                  </span>
                </span>
                <span className="t-xs tabular pl-5 text-muted-foreground md:pl-0">
                  {priceLabel(x).ugx}
                </span>
              </button>
            )
          })}
          <p className="t-xs col-span-2 mt-4 px-4 text-muted-foreground md:col-span-1 md:px-5">
            One-off fixes and small jobs: {ugx(HOURLY_RATE_UGX)} an hour.
          </p>
        </div>

        <div
          id="price-stage"
          aria-live="polite"
          className="bg-muted p-6 md:col-span-8 md:p-12"
        >
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-start lg:justify-between">
            <Figure s={s} />
            <ServiceArt
              key={s.id}
              id={s.id}
              className="w-40 shrink-0 md:w-56"
            />
          </div>

          <p className="t-md mt-10 max-w-[48ch]">{s.blurb}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <RiCheckLine
                  className="mt-1 size-[1.15em] shrink-0 text-primary"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={whatsappLink(
                `Hi Noah, I'd like a quote for a ${s.name.toLowerCase()}.`
              )}
              className="cta h-14 w-full sm:h-12 sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine className="size-[1.15em]" aria-hidden />
              {s.quote
                ? "Ask for a quote"
                : `WhatsApp about a ${s.name.toLowerCase()}`}
            </a>
            <span className="t-sm text-muted-foreground">
              Delivery: {s.delivery}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
