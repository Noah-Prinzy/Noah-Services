import Link from "next/link"
import { RiArrowRightLine } from "@remixicon/react"

import { Approach } from "@/components/home/approach"
import { CtaBand } from "@/components/home/cta-band"
import { Floaters } from "@/components/home/floaters"
import { Hero } from "@/components/home/hero"
import { StackStrip } from "@/components/home/stack-strip"
import { WorkIndex } from "@/components/work/work-index"

// A short home page that points onward rather than repeating the other pages: the
// hero, the tools, three selected projects, how working together goes, and a closing
// call. The full work, prices and contact details live on /work, /services, /contact.
export default function Page() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <StackStrip />
      <section
        aria-labelledby="work-title"
        className="frame relative isolate pt-[var(--section)]"
      >
        <Floaters set="work" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="work-title" className="t-lg max-w-[16ch]" data-reveal>
            Selected work
          </h2>
          <Link href="/work" className="cta-ghost" data-reveal>
            All six projects
            <RiArrowRightLine className="size-[1.15em]" aria-hidden />
          </Link>
        </div>
        <div className="mt-12">
          <WorkIndex limit={3} />
        </div>
      </section>
      <div className="relative isolate">
        <Floaters set="services" />
        <Approach />
      </div>
      <CtaBand />
    </div>
  )
}
