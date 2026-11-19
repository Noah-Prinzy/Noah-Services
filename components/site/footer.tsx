import Link from "next/link"

import { LogoMark } from "@/components/site/logo"
import { CHANNELS, OWNER, STUDIO } from "@/data/contact"

const external = (id: string) => id === "whatsapp" || id === "instagram"

export function Footer() {
  return (
    <footer className="mt-[var(--section)] border-t border-border">
      <div className="frame grid gap-12 py-16 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <LogoMark className="h-16 w-auto" />
          <p className="t-lg mt-6">Noah Devs</p>
          <p className="mt-3 max-w-[48ch] text-muted-foreground">
            {OWNER.name}, {OWNER.role.toLowerCase()} in {OWNER.location}. Also
            co-founder of{" "}
            <a
              href={STUDIO.url}
              className="link text-foreground underline"
              target="_blank"
              rel="noreferrer"
            >
              {STUDIO.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-4">
          <h2 className="t-xs font-sans font-medium text-muted-foreground">
            Reach me
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {CHANNELS.map((c) => (
              <li key={c.id}>
                <a
                  href={c.href}
                  className="link"
                  target={external(c.id) ? "_blank" : undefined}
                  rel={external(c.id) ? "noreferrer" : undefined}
                >
                  {c.label}: {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="t-xs font-sans font-medium text-muted-foreground">
            Pages
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link href="/work" className="link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/services" className="link">
                Services and prices
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="frame t-xs flex flex-col gap-2 pb-10 text-muted-foreground md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {OWNER.name}. Prices in UGX.
        </p>
        <p>Photos from Unsplash: Norbert Kowalczyk, Olena Bohovyk, Vishnu Mohanan, Juanjo Jaramillo, Voxels Republic and Nikita Kachanovsky. Video from Pexels: Nicola Narracci.</p>
      </div>
    </footer>
  )
}
