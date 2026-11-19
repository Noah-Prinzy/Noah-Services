import type { Metadata } from "next"

import { Contact } from "@/components/home/contact"
import { Floaters } from "@/components/home/floaters"
import { PageHero } from "@/components/site/page-backdrop"
import stars from "@/public/photos/starfield.webp"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "WhatsApp, call, email or Instagram Noah Katumba in Kampala for a fixed quote.",
}

export default function ContactPage() {
  return (
    <div className="overflow-x-clip">
      <PageHero src={stars}>
        <h1 className="t-xl max-w-[14ch]">Tell me what you&apos;re building</h1>
        <p className="t-md mt-6 max-w-[48ch] text-foreground/80">
          WhatsApp is quickest. Say what you need and roughly your budget, and
          I&apos;ll come back with a fixed quote.
        </p>
      </PageHero>
      <div className="frame relative isolate pt-12 md:pt-16">
        <Floaters set="services" />
        <Contact />
      </div>
    </div>
  )
}
