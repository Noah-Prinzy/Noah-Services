"use client"

import { useState } from "react"
import { RiCheckLine, RiWhatsappLine } from "@remixicon/react"

import { ServiceArt } from "@/components/illustrations/service-art"
import { whatsappLink } from "@/data/contact"
import {
  HOURLY_RATE_UGX,
  SERVICES,
  priceLabel,
  ugx,
  type Service,
} from "@/data/services"
import { cn } from "@/lib/utils"

// The live thing: pick a service, the price changes in place, and the button opens
// WhatsApp with that service already written. Every plan's price is also printed in
// the picker, so nothing is hidden without script.

const short = (n: number) =>
  n >= 1_000_000
    ? `${+(n / 1_000_000).toFixed(1)}M`
    : `${Math.round(n / 1000)}K`

function Figure({ s }: { s: Service }) {
  return (
    <div>
      <p className="t-xl tabular whitespace-nowrap">
        <span className="t-md mr-3 tracking-normal text-muted-foreground">
          {s.to ? "UGX" : "From UGX"}
        </span>
        {s.to ? `${short(s.from)}–${short(s.to)}` : short(s.from)}
        {s.unit && (
          <span className="t-md ml-3 tracking-normal text-muted-foreground">
            {s.unit}
          </span>
        )}
      </p>
      <p className="mt-4 text-muted-foreground">
        {priceLabel(s).usd} at today&apos;s rate
      </p>
    </div>
  )
}

export function Pricing({ initial = "website" }: { initial?: string }) {
  const start = Math.max(
    0,
    SERVICES.findIndex((x) => x.id === initial)
  )
  const [sel, setSel] = useState(start)
  const s = SERVICES[sel]

  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <div
        role="group"
        aria-label="Services"
        className="grid grid-cols-2 gap-2 self-start lg:col-span-4 lg:grid-cols-1"
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
              className={cn(
                "flex min-h-14 flex-col items-start gap-1 rounded-2xl border px-4 py-3 text-left transition-colors lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-5 lg:py-4",
                on
                  ? "border-glow/40 bg-primary/12"
                  : "border-border hover:bg-muted"
              )}
            >
              <span className="font-heading text-[1.125rem] font-semibold lg:text-[1.25rem]">
                {x.name}
              </span>
              <span className="t-xs tabular text-muted-foreground">
                {priceLabel(x).ugx}
              </span>
            </button>
          )
        })}
        <p className="t-xs col-span-2 mt-2 px-1 text-muted-foreground lg:col-span-1">
          One-off fixes and small jobs: {ugx(HOURLY_RATE_UGX)} an hour.
        </p>
      </div>

      <div
        id="price-stage"
        aria-live="polite"
        className="relative overflow-hidden rounded-[calc(var(--radius)*2.5)] border border-border bg-card p-6 md:p-12 lg:col-span-8"
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/25 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-col-reverse gap-8 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h2 className="font-heading text-[1.625rem] font-semibold">{s.name}</h2>
            <div className="mt-4">
              <Figure s={s} />
            </div>
          </div>
          <ServiceArt key={s.id} id={s.id} className="w-36 shrink-0 md:w-48" />
        </div>

        <p className="t-md relative mt-10 max-w-[48ch]">{s.blurb}</p>

        <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
          {s.includes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <RiCheckLine
                className="mt-1 size-[1.15em] shrink-0 text-glow"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="relative mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={whatsappLink(
              `Hi Noah, I'd like a quote for a ${s.name.toLowerCase()}.`
            )}
            className="cta w-full sm:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappLine className="size-[1.15em]" aria-hidden />
            {s.quote
              ? "Ask for a quote"
              : `WhatsApp about a ${s.name.toLowerCase()}`}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <span className="text-muted-foreground">Delivery: {s.delivery}</span>
        </div>
      </div>
    </div>
  )
}
