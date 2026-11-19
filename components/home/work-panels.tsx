import Image, { type StaticImageData } from "next/image"
import { RiArrowRightUpLine, RiGithubLine, RiLockLine } from "@remixicon/react"

import { PROJECTS, repoIsOpen, type Project } from "@/data/projects"
import zuula from "@/public/work/zuula.webp"
import phronesis from "@/public/work/phronesis.webp"
import pearl from "@/public/work/pearl-ai.webp"
import shamba from "@/public/work/shamba-ai.webp"
import nineCoals from "@/public/work/nine-coals.webp"
import urcart from "@/public/work/urcart-wordmark.png"

// Live screens captured 2026-11-19. UrCart has no live demo, so it shows its own
// wordmark on a dark field instead of an invented screenshot.
const COVERS: Record<string, StaticImageData> = {
  zuula,
  phronesis,
  "pearl-ai": pearl,
  "shamba-ai": shamba,
  "nine-coals": nineCoals,
}

function Picture({ p }: { p: Project }) {
  const cover = COVERS[p.slug]
  if (cover) {
    return (
      <Image
        src={cover}
        alt={`${p.title}: ${p.tagline}`}
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-top"
      />
    )
  }
  return (
    <div className="absolute inset-0 grid place-items-center bg-[oklch(0.17_0_0)] pb-[18svh]">
      <Image
        src={urcart}
        alt={`${p.title} wordmark`}
        className="w-[min(70vw,408px)]"
      />
    </div>
  )
}

function RepoLink({ p }: { p: Project }) {
  if (repoIsOpen(p)) {
    return (
      <a
        href={p.repo.url}
        className="link inline-flex items-center gap-2"
        target="_blank"
        rel="noreferrer"
      >
        <RiGithubLine className="size-[1.15em]" aria-hidden />
        Code
      </a>
    )
  }
  return (
    <span className="inline-flex items-center gap-2 opacity-60">
      <RiLockLine className="size-[1.15em]" aria-hidden />
      {p.repo.access === "org-private"
        ? "Code held by the university"
        : "Code private for now"}
    </span>
  )
}

export function WorkPanels() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-4">
      <div className="frame grid gap-6 pt-[var(--section)] pb-12 md:grid-cols-12">
        <h2 id="work-title" className="t-lg md:col-span-7" data-reveal>
          Six products, built and shipped
        </h2>
        <p
          className="t-md max-w-[40ch] md:col-span-4 md:col-start-9 md:self-end"
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Four I built alone, one I led and one I helped plan. Five are live:
          open them and click around.
        </p>
      </div>

      <div>
        {PROJECTS.map((p) => (
          <article
            key={p.slug}
            aria-labelledby={`work-${p.slug}`}
            className="relative h-[92svh] overflow-hidden bg-inverse"
          >
            <Picture p={p} />
            <div className="absolute inset-x-0 bottom-0 bg-inverse text-inverse-foreground">
              <div className="frame grid gap-4 py-6 md:grid-cols-12 md:items-end md:gap-6 md:py-8">
                <div className="md:col-span-5">
                  <h3 id={`work-${p.slug}`} className="t-lg">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="t-md">{p.tagline}</p>
                  <p className="t-xs mt-2 opacity-70">
                    {p.role}, {p.year}. {p.roleDetail}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-3 md:justify-end">
                  {p.live ? (
                    <a
                      href={p.live.url}
                      className="link inline-flex items-center gap-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site
                      <RiArrowRightUpLine
                        className="size-[1.15em]"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <span className="opacity-60">Demo on request</span>
                  )}
                  <RepoLink p={p} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
