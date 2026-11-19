import Link from "next/link"
import { RiWhatsappLine } from "@remixicon/react"

import { CONTACT, OWNER } from "@/data/contact"

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="frame relative z-40 flex h-20 items-center justify-between gap-6 bg-background">
      <Link
        href="/"
        className="font-heading text-[22px] font-semibold tracking-tight"
      >
        {OWNER.brand}
      </Link>

      <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
        {NAV.map((n) => (
          <a key={n.href} href={n.href} className="link">
            {n.label}
          </a>
        ))}
        <a
          href={CONTACT.whatsapp}
          className="cta"
          target="_blank"
          rel="noreferrer"
        >
          <RiWhatsappLine className="size-[1.15em]" aria-hidden />
          WhatsApp
        </a>
      </nav>

      {/* Phones: a plain "Menu" word that opens without script. */}
      <details className="group md:hidden">
        <summary className="cursor-pointer list-none py-3 [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">Menu</span>
          <span className="hidden group-open:inline">Close</span>
        </summary>
        <nav
          aria-label="Main"
          className="frame absolute inset-x-0 top-20 flex flex-col gap-1 bg-background pb-8"
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="t-md py-3">
              {n.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsapp}
            className="cta mt-4 h-14 w-full"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappLine className="size-[1.15em]" aria-hidden />
            WhatsApp Noah
          </a>
        </nav>
      </details>
    </header>
  )
}
