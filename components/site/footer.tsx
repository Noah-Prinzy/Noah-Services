import { CHANNELS, OWNER, STUDIO } from "@/data/contact"

export function Footer() {
  return (
    <footer className="bg-inverse text-inverse-foreground">
      <div className="frame pt-[var(--section)] pb-10">
        <p className="t-xl" aria-label={OWNER.brand}>
          Noah <span className="text-primary">⌬</span> Devs
        </p>

        <div className="mt-16 grid gap-10 md:mt-[72px] md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <p className="t-md">{OWNER.name}</p>
            <p className="mt-2 opacity-70">
              {OWNER.role}, {OWNER.location}
            </p>
            <p className="mt-6 opacity-70">
              Also co-founder of{" "}
              <a
                href={STUDIO.url}
                className="link underline"
                target="_blank"
                rel="noreferrer"
              >
                {STUDIO.name}
              </a>
              .
            </p>
          </div>

          <ul className="flex flex-col gap-3 md:col-span-4">
            {CHANNELS.map((c) => (
              <li key={c.id}>
                <a
                  href={c.href}
                  className="link"
                  target={
                    c.id === "call" || c.id === "email" ? undefined : "_blank"
                  }
                  rel="noreferrer"
                >
                  {c.label}: {c.value}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3 md:col-span-3 md:col-start-10">
            <li>
              <a href="#work" className="link">
                Work
              </a>
            </li>
            <li>
              <a href="#services" className="link">
                Services and prices
              </a>
            </li>
            <li>
              <a href="#process" className="link">
                Process
              </a>
            </li>
            <li>
              <a href="#contact" className="link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="t-xs mt-16 flex flex-col gap-2 opacity-70 md:mt-[72px] md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {OWNER.name}. Prices in UGX.
          </p>
          <p className="max-w-[60ch]">
            Photos by Shai Pal and Markus Spiske on Unsplash.
          </p>
        </div>
      </div>
    </footer>
  )
}
