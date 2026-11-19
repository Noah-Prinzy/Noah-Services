import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckLine,
  RiGithubLine,
  RiLockLine,
} from "@remixicon/react"

import { PageHero } from "@/components/site/page-backdrop"
import { GlowCard } from "@/components/ui/glow-card"
import { PROJECTS, getProject, repoIsOpen } from "@/data/projects"
import { COVERS } from "@/lib/covers"
import blackHole from "@/public/photos/black-hole.webp"
import urcart from "@/public/work/urcart-wordmark.png"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const p = getProject((await params).slug)
  return p ? { title: p.title, description: p.tagline } : {}
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()

  const i = PROJECTS.findIndex((x) => x.slug === p.slug)
  const next = PROJECTS[(i + 1) % PROJECTS.length]
  const cover = COVERS[p.slug]

  return (
    <article className="overflow-x-clip">
      <PageHero src={cover ?? blackHole} wash={Boolean(cover)}>
        <Link
          href="/work"
          className="link inline-flex items-center gap-2 self-start text-foreground/75"
        >
          <RiArrowLeftLine className="size-[1.15em]" aria-hidden />
          All work
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-xs text-glow">
              {p.role} · {p.category} · {p.year}
            </p>
            <h1 className="t-xl mt-3">{p.title}</h1>
            <p className="t-md mt-6 max-w-[44ch]">{p.tagline}</p>
          </div>
          <div className="flex flex-wrap items-end gap-3 lg:col-span-5 lg:justify-end">
            {p.live && (
              <a
                href={p.live.url}
                className="cta"
                target="_blank"
                rel="noreferrer"
              >
                Visit live site
                <RiArrowRightUpLine className="size-[1.15em]" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            {repoIsOpen(p) ? (
              <a
                href={p.repo.url}
                className="cta-ghost border-white/20 bg-white/5 backdrop-blur-md"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubLine className="size-[1.15em]" aria-hidden />
                Code on GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <p className="cta-ghost cursor-default text-foreground/70">
                <RiLockLine className="size-[1.15em]" aria-hidden />
                {p.repo.access === "org-private"
                  ? "Code held by the university"
                  : "Code private for now"}
              </p>
            )}
          </div>
        </div>
      </PageHero>
      <div className="frame">
        <div className="relative mt-12 md:mt-16">
          <div
            className="absolute inset-x-[10%] -top-10 bottom-10 -z-10 rounded-full bg-primary/25 blur-[100px]"
            aria-hidden
          />
          {cover ? (
            <figure className="window mx-auto max-w-6xl">
              <div className="window-bar" aria-hidden>
                <span />
                <span />
                <span />
              </div>
              <Image
                src={cover}
                alt={`${p.title} home screen`}
                sizes="(min-width: 1024px) 1024px, 100vw"
                placeholder="blur"
                preload
                className="block h-auto w-full"
              />
            </figure>
          ) : (
            <div className="mx-auto grid max-w-6xl place-items-center rounded-[calc(var(--radius)*2.5)] border border-border bg-[#0d100f] bg-[radial-gradient(circle_at_50%_60%,rgba(245,158,11,0.22),transparent_60%)] py-24">
              <Image
                src={urcart}
                alt={`${p.title} wordmark`}
                className="float w-[min(70%,420px)] drop-shadow-[0_24px_40px_rgba(0,0,0,0.5)]"
              />
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="t-lg">The story</h2>
            <p className="t-md mt-6 max-w-[56ch]">{p.summary}</p>
            <p className="mt-6 max-w-[56ch] text-muted-foreground">
              <strong className="font-medium text-foreground">My part: </strong>
              {p.roleDetail}
              {p.context && ` (${p.context})`}
            </p>
            {p.extraLinks?.map((l) => (
              <a
                key={l.url}
                href={l.url}
                className="link mt-6 inline-flex items-center gap-2 text-glow"
                target="_blank"
                rel="noreferrer"
              >
                {l.label}
                <RiArrowRightUpLine className="size-[1.15em]" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:col-span-5">
            <GlowCard className="p-6">
              <h2 className="font-heading text-[1.375rem] font-semibold">
                Highlights
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <RiCheckLine
                      className="mt-1 size-[1.15em] shrink-0 text-glow"
                      aria-hidden
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </GlowCard>
            <GlowCard className="p-6">
              <h2 className="font-heading text-[1.375rem] font-semibold">
                Built with
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-[0.9375rem]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-[var(--section)] flex items-center justify-between gap-6 rounded-[calc(var(--radius)*2.5)] border border-border p-8 transition-colors hover:border-glow/40 md:p-12"
        >
          <span>
            <span className="t-xs block text-muted-foreground">
              Next project
            </span>
            <span className="t-lg mt-2 block">{next.title}</span>
          </span>
          <RiArrowRightLine
            className="size-8 shrink-0 text-glow transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  )
}
