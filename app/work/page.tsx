import type { Metadata } from "next"

import { Floaters } from "@/components/home/floaters"
import { PageHero } from "@/components/site/page-backdrop"
import { WorkGrid } from "@/components/work/work-grid"
import desk from "@/public/photos/dark-desk.webp"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six products Noah Katumba built, led or helped plan: AI, platforms, commerce and websites.",
}

export default function WorkPage() {
  return (
    <div className="overflow-x-clip">
      <PageHero src={desk} position="right center">
        <h1 className="t-xl max-w-[12ch]">Things I&apos;ve built</h1>
        <p className="t-md mt-6 max-w-[48ch] text-foreground/80">
          Four I built alone, one I led and one I helped plan. Open any of them
          for the story, the stack and the links.
        </p>
      </PageHero>
      <div className="frame relative isolate pt-12 md:pt-16">
        <Floaters set="work" />
        <WorkGrid headingLevel="h2" />
      </div>
    </div>
  )
}
