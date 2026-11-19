# Noah Services: full upgrade plan

Status: draft for Noah's approval (2026-11-19). Nothing is built yet.

## 1. Decisions so far

| Topic | Decision | Source |
|---|---|---|
| Stack | Full migration to **Next.js 16 (App Router) + TypeScript + Tailwind 4 + shadcn/ui** | Noah's choice. It's the same stack as S&N Devs, so patterns there can be reused |
| Prices | **Elite rates**, researched below (section 4) | Noah: "find the best rates for elite developers" |
| Projects | Every featured project gets its **GitHub repo link**, plus the **live link** when one exists | Noah |
| Contacts | **Instagram @noahdevsug** (verified 2026-11-19: profile "Noah ⌬ Devs", 509 followers), **WhatsApp + phone +256 784 695549**, **email noahdevsug@gmail.com** | Noah. The old `noahprinzy@gmail.com` is removed everywhere |
| Templates | `D:/Zuula/templates` (HTML5 UP, Start Bootstrap, admin kits) are **layout references only**, not starters. None is a personal-portfolio Next.js build | Folder inventory |

## 2. Open points that need Noah's answer before the build

1. **Private repos.** Decided: Noah makes PHRONESIS, UrCart_2.0 and SaaS-Temp_2 public. Org repos (Pearl AI, Shamba AI) also get repo links, but they stay private unless the VICTORIA-UNIVERSITY-KAMPALA org makes them public, so visitors would hit a 404. **Ask the org to make them public**, or the card says "Org repo (private)" and its button is disabled.
2. ~~Pearl AI role~~: settled. Noah was on the planning team and contributed to the UI and the idea.
3. ~~Approve the price list~~: **approved by Noah, 2026-11-19.** Still open: whether S&N Devs' prices change to match. The researched elite figures sit *above* S&N Devs' prices (from 700K / 1.8M / 8M). A client who sees both sites will notice, so decide whether S&N should be updated to match.
4. **Hosting: Vercel (decided 2026-11-19).** At launch, update the Instagram bio link (currently `noahdevs-ug.netlify.app`) to the Vercel URL. Keep the old Netlify site up, redirecting to the new URL, until the bio is changed. `netlify.toml` and `public/_redirects` are removed in the migration. Still open: a custom domain. Earlier note: Your Instagram bio links to `noahdevs-ug.netlify.app`. If the site moves to Vercel (the natural home for Next.js), the bio link changes, or you can keep Netlify (Next.js runs there too). A custom domain, for example `noahdevs.ug` or `.com`, is worth deciding now.
5. ~~shadcn preset~~: settled. `b5nh4SpZSC` (see section 6).
6. ~~Mention S&N Devs~~: **yes, decided 2026-11-19.** The About page says "Co-founder of S&N Devs" and links to sn-devs.vercel.app. Original note: Proposed: one line plus a link on About ("Co-founder of S&N Devs").

## 3. Site map (new)

| Route | Purpose | Main content |
|---|---|---|
| `/` | Home | Hero (name, role, one-line promise, WhatsApp CTA), selected work (3–4), services teaser with "from" prices, process (Sketch → Build → Launch → Grow), CTA |
| `/work` | All projects | The six projects in section 5 (no filters needed at this size); each card has a card image, role, stack chips, Live and GitHub buttons |
| `/work/[slug]` | Case study | Problem, what I built, stack, screenshots, outcome, links. Built statically from `data/projects.ts` |
| `/services` | Services and pricing | Tiers with UGX + ≈USD, what's included, delivery time, FAQ, "every project gets a fixed quote" |
| `/about` | Story | Bio, skills and stack, timeline, S&N Devs mention, photo |
| `/contact` | Contact | WhatsApp inquiry builder (kept from today, but improved), direct lines (WhatsApp, Call, Email, Instagram) with copy buttons |
| `not-found` | 404 | Branded, links home |

Also: `sitemap.ts`, `robots.ts`, a per-page `metadata` OG image generated with `next/og`, and JSON-LD (`Person` + `ProfessionalService`).

## 4. Pricing: researched elite rates

**Rate:** about **4,100 UGX = 1 USD** (mid-market 15–17 Nov 2026 ranged from 4,046 to 4,150). S&N used 3,700, so dollar-based pricing is up about 11%.

**Kampala market (2026 vendor price pages):** basic sites cost UGX 600K–900K, standard sites with SEO 1.2M–2.5M, e-commerce 1.7M–3.5M, and the top published tier (Keni Platinum) 4.5M. Senior African freelancers working with international clients charge about **$40–80/hr**.

"Elite" means the top of the local market for UGX clients, and a fair senior-Africa rate in USD for overseas clients. Proposed "from" prices:

| Service | UGX (local) | ≈ USD | Delivery |
|---|---|---|---|
| Landing page | 1.2M – 2.5M | $295 – 610 | 5–7 days |
| Business website (up to 8 pages, CMS/blog) | 3M – 7M | $730 – 1,700 | 2–4 weeks |
| E-commerce store (Mobile Money + card) | 5M – 10M | $1,220 – 2,440 | 3–5 weeks |
| Web / mobile app or system | from 12M (quoted) | from $2,930 | 6+ weeks |
| Redesign / upgrade | from 1.5M | from $365 | 1–3 weeks |
| Care plan (maintenance) | from 300K / month | from $75 / month | Ongoing |
| One-off fixes / extra work | 200K / hour | $50 / hour | — |

The price data lives in `data/services.ts` with `USD_RATE = 4100`, so a later rate change is one edit. The site shows "Prices in UGX; USD is a guide. Every project gets a fixed quote."

## 5. Projects to feature (final list, Noah, 2026-11-19)

Six projects, all shown at the same size. Each gets a card image, a case-study page, a GitHub link and a live link where one exists. Everything else is left out, MalFour included.

| # | Project | Noah's role | Repo | Live (checked 2026-11-19) |
|---|---|---|---|---|
| 1 | Zuula: AI fake-news detection for Uganda | Built it solo | Noah-Prinzy/zuula (public) | ✅ zuula.vercel.app |
| 2 | PHRONESIS: realtime car co-pilot | Built it solo | Noah-Prinzy/PHRONESIS (**make public**) | ✅ phronesis-web.vercel.app (+ phronesis-presentation.vercel.app) |
| 3 | Pearl AI: Uganda AI tourism guide | Planning team; contributed to the UI and the idea | VICTORIA-UNIVERSITY-KAMPALA/pearl-ai (org, private) | ✅ pearl.travel |
| 4 | Shamba AI: AI farming assistant for Uganda | Led it | VICTORIA-UNIVERSITY-KAMPALA/shamba-ai (org, private) | ✅ shambaai.pages.dev |
| 5 | UrCart 2.0: two storefronts on one NestJS API, Angular 22 | Built it solo | Noah-Prinzy/UrCart_2.0 (**make public**) | none |
| 6 | Nine Coals: open-fire grill restaurant site | Built it solo | Noah-Prinzy/SaaS-Temp_2 (**make public**) | ✅ saastemp-zeta.vercel.app |

### Card images

- Live sites (Zuula, PHRONESIS, Pearl AI, Shamba AI, Nine Coals): capture desktop + mobile screenshots of the live page with Playwright at 1440 and 390, then frame them in a consistent device or browser mockup.
- UrCart 2.0 has no live demo: run it locally and capture both storefronts, or use any screenshots already in its repo.
- Export as WebP via `next/image`, one aspect ratio for every card (16:10), and record them in `CREDITS.md`.

### Before launch

- **Secrets:** no `.env`, key or credential files are at HEAD in the three repos going public (checked 2026-11-19). Git history was **not** scanned: run `gitleaks detect` on each repo first, and rotate anything found.
- **READMEs:** Zuula and SaaS-Temp_2 have none. Add one, so the GitHub button lands on a proper page.
- **Org repos:** ask the VICTORIA-UNIVERSITY-KAMPALA org to make pearl-ai and shamba-ai public. Until then the repo button is disabled and labelled "Org repo (private)".
- **Nine Coals:** if it was client work, confirm the client is happy for it to be shown publicly.
- The links are re-checked in the Verify phase. A dead demo gets a "demo offline" state, never a broken button.

## 6. Design direction

- Run the design process first: `ui-consistency:finding-patterns`, then `design-loop` / `taste-skill` (references → `DESIGN.md` → build → screenshot check at 1440/768/390).
- References: the portfolio set in `design_base.md` (Matthew Yu, Sirio, Anti-Portfolio …) and the HTML5 UP templates (Miniport, Read Only, Strata) for portfolio rhythm.
- **Illustrations and UX (Noah, 2026-11-19):** redraw the SVG illustrations so they're *cleaner and simpler*, but with a strong "wow" effect: fewer shapes, bold geometry, emerald/neutral, square corners, and subtle motion (draw-on lines, parallax, hover reactions) that respects reduced motion. The UI and the UX flow (Home → Work → case study → Services → WhatsApp inquiry) should impress at every step. This is reviewed against a comp before the pages are built.
- **Imagery (Noah, 2026-11-19):** find much better images, picked for aesthetic quality first: high-end photography (Unsplash/Pexels, free licence), consistent grading to fit emerald/neutral, no generic stock clichés. Every image is credited in `CREDITS.md`.
- **Distinct from S&N Devs:** a personal brand ("Noah ⌬ Devs", the hexagon mark from Instagram), not a copy of the studio's look.
- **shadcn preset `b5nh4SpZSC`** ([view](https://ui.shadcn.com/create?preset=b5nh4SpZSC)), decoded 2026-11-19:

  | Setting | Value |
  |---|---|
  | Style | mira |
  | Base colour / theme | neutral / **emerald** accent |
  | Chart colour | neutral |
  | Fonts | **IBM Plex Sans** (body), **Oxanium** (headings). Both are on Google Fonts under the OFL licence, loaded via `next/font` |
  | Icons | **Remix Icon** (replaces Lucide) |
  | Radius | **none** (sharp corners) |
  | Menus | bold accent, default colour |

  Scaffold with `npx shadcn@latest init --preset b5nh4SpZSC` (or `npx shadcn@latest apply --preset b5nh4SpZSC` on the scaffolded app). The preset is the base for the `DESIGN.md` tokens. Effect components and the illustrations are recoloured to emerald/neutral with square corners, so nothing rounded slips in from registry defaults.
- Components: shadcn/ui primitives, with at most 1–2 effect components per page from `@react-bits` / `@magicui`, restyled to the `DESIGN.md` tokens. All motion respects `prefers-reduced-motion`.
- Fonts and icons come from the preset (IBM Plex Sans, Oxanium, Remix Icon). Every external asset is listed in `CREDITS.md`.

## 7. Functional upgrades

- WhatsApp inquiry builder kept and improved: service, budget (new brackets matching the new prices), timeline and message, then a pre-filled `wa.me/256784695549` link.
- Copy buttons for the number and email, `tel:` and `mailto:` links, and an Instagram link to `instagram.com/noahdevsug`.
- Projects and services come from typed data files (`data/projects.ts`, `data/services.ts`, `data/contact.ts`), so later updates need no component edits.
- SEO: metadata per page, OG images, sitemap, JSON-LD, and `next/image` for screenshots.
- Analytics: Vercel Web Analytics (cookieless).
- Accessibility: keyboard paths, focus rings, contrast AA, and a skip link.
- Security headers carried over from `netlify.toml` into `next.config.ts` `headers()`.

## 8. Build phases

1. **Scaffold.** Create a `next-upgrade` branch, run `create-next-app` (TS, Tailwind, App Router), `shadcn init --preset b5nh4SpZSC`, ESLint, and move the `public/illustrations` that are kept.
2. **Data.** Write `projects.ts`, `services.ts` and `contact.ts` with the approved content.
3. **Design.** Write the `DESIGN.md` tokens and a reference board, then approve a Home comp.
4. **Pages.** Build Home → Work + case studies → Services → About → Contact → 404.
5. **SEO and metadata.** Add OG images, sitemap, robots and JSON-LD.
6. **Verify.** Run `next build`, lint, Lighthouse (aim for ≥95 on every category), screenshots at 3 widths, a link check on every Live/GitHub URL, and a WhatsApp flow test.
7. **Deploy.** Make a preview deploy and have you review it, then switch the production domain and update the Instagram bio link.

## 9. Not in scope (unless asked)

Payments on this site (S&N handles the store), a blog/CMS, multi-language support, and accounts.

## Research sources

- UGX/USD: [fx-rate.net](https://fx-rate.net/UGX/USD/), [fxrates.com](https://fxrates.com/ugx-to-usd-rate), [Forbes Advisor](https://www.forbes.com/advisor/money-transfer/currency-converter/ugx-usd/), [pluang.com](https://pluang.com/en/tools/currency-converter/ugx-usd)
- Kampala prices: [webhosting.ug](https://webhosting.ug/web_design.php), [Kico Web Design pricing](https://kicowebdesign.com/pricing), [Kico 2026 roundup](https://kicowebdesign.com/blog/best-website-designers-in-uganda), [IB Designers](https://ibdesigners.com/website-designing-prices/), [Keni Web Design](https://www.keniwebdesign.com/)
- Senior rates in Africa: [AfroTools pricing guide](https://afrotools.com/blog/freelance-pricing-africa/), [index.dev rates by country](https://www.index.dev/blog/freelance-developer-rates), [Syniq (South Africa)](https://www.syniqsolutions.co.za/blog/software-developer-rates-south-africa)
- Nairobi comparison: [Haryes (TechBehemoths)](https://techbehemoths.com/company/haryes-web-developers), [Kolonell 2026](https://kolonell.com/en/blog/website-redesign-cost-business-nairobi-2026)
