import type { Metadata } from "next"

import { Floaters } from "@/components/home/floaters"
import { Pricing } from "@/components/home/pricing"
import { Process } from "@/components/home/process"
import { PageHero } from "@/components/site/page-backdrop"
import { PRICING_NOTE } from "@/data/services"
import cubes from "@/public/photos/dark-cubes.webp"

export const metadata: Metadata = {
  title: "Services and prices",
  description:
    "Landing pages, business websites, online stores, apps, redesigns and care plans, priced in UGX with fixed quotes.",
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>
}) {
  const { plan } = await searchParams
  return (
    <div className="overflow-x-clip">
      <PageHero src={cubes} position="center 40%">
        <h1 className="t-xl max-w-[14ch]">What it costs, up front</h1>
        <p className="t-md mt-6 max-w-[48ch] text-foreground/80">
          Pick what you need. {PRICING_NOTE}
        </p>
      </PageHero>
      <div className="frame relative isolate pt-12 md:pt-16">
        <Floaters set="services" />
        <Pricing initial={plan} />
        <Process />
      </div>
    </div>
  )
}
