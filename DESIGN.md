# DESIGN.md: Noah ⌬ Devs

The design system for noah-services. Every value in the build traces back to a token here or in `app/globals.css`.

- **Base:** shadcn preset `b5nh4SpZSC` (base-mira, neutral base, emerald theme, IBM Plex Sans + Oxanium, Remix Icon, radius 0).
- **Direction:** taste-skill "The pinned poster" (seed 1098363374, 2026-11-19), palette and type kept from the preset. The sheet is in `.taste-skill/direction.json`.

## Idea

> On this page, **the hexagon in Noah's own mark (⌬)** becomes **the window that opens to the edges**: the first screen shows a black hole through a hexagon, with Noah's real projects floating around it.

Competitor test: another developer can find the same black hole but not this mark. The hexagon recurs as the one motif: the window, the wordmark glyph, and the service drawings.

**Live thing:** the pricing stage. Pick a service and the price changes in place, in UGX with the USD guide beside it. The button opens WhatsApp with that service already written into the message. It works with keyboard and thumb, and without script it falls back to a plain list with links.

## Tone

Confident, precise, warm, Ugandan-first, engineered. A product studio of one.

## Colour (from the preset, light ground first)

| Role | Token | Value (light) | Use |
|---|---|---|---|
| Ground | `--background` | `oklch(1 0 0)` | page |
| Ink | `--foreground` | `oklch(0.145 0 0)` | all running text, full strength |
| Soft ink | `--muted-foreground` | `oklch(0.556 0 0)` | secondary notes only (≥4.5:1 on ground) |
| Surface | `--muted` | `oklch(0.97 0 0)` | one tone step for panels and stages |
| Accent | `--primary` | `oklch(0.508 0.118 165.6)` emerald | the primary action, the selected-plan dot, drawing highlights. Nothing else |
| Inverse field | `--inverse` / `--inverse-foreground` | `oklch(0.145 0 0)` / `oklch(0.985 0 0)` | footer and the work run's scrim band |

Dark mode uses the preset's `.dark` values. The site defaults to light.

Proportions: about 80% ground and surface, 15% ink and photographs, 5% emerald or less.

## Type: five steps, two faces

Headings and display use **Oxanium** (`--font-heading`); text uses **IBM Plex Sans** (`--font-sans`). No monospace anywhere.

| Step | Token | Size | Leading / tracking | Use |
|---|---|---|---|---|
| xs | `--step-xs` | 14px | 1.4 | legal line, captions |
| sm | `--step-sm` | 17px | 1.55 | body, links, labels, controls |
| md | `--step-md` | clamp(20px, 1.6vw, 24px) | 1.35 | supporting sentence, statements |
| lg | `--step-lg` | clamp(40px, 5vw, 76px) | 0.95 / -0.03em | h1, section headings, plan names |
| xl | `--step-xl` | clamp(64px, 10vw, 168px) | 0.85 / -0.04em | the live price figure, footer name |

Headlines stay at two lines or fewer at every width. Left-aligned.

## Space and frame

- Root size is fluid: `html { font-size: clamp(16px, 0.35vw + 11px, 20px) }`, so rem-based type and spacing grow with the window and nothing looks undersized on wide screens.
- Page margin `--gutter`: clamp(16px, 4.5vw, 96px). The frame fills the window up to 1840px; it never crowds into a narrow centre column.
- 12-column grid inside the margins. Section gap `--section`. Max text measure: 62ch.
- Every page opens with a hero that fills the first screen (`100svh`, the header sits over it).

## Shape

- Radius **0** everywhere, enforced globally (`border-radius: 0 !important`). Only true circles opt out with `.is-round`.
- Surfaces are separated by a tone step or a 1px border.

## Components

- **Button:** `.cta` (solid emerald, square, 3rem tall) and `.cta-ghost` (bordered).
- **Navigation:** wordmark, Work, Services, Contact, a theme toggle and one WhatsApp button. Over a hero it dissolves into the picture; once the hero has scrolled away it pops in as a solid bar. Folds to "Menu" on phones.
- **PageHero** (`components/site/page-backdrop.tsx`): the dark full-screen intro of every inner page: a photo (or a project screen blurred into a colour field), the aurora and the veil, copy centred.
- **WorkIndex** (`components/work/work-index.tsx`): the home page's split showcase of three selected projects. A numbered list on the left; on wide screens a sticky preview on the right crossfades to the hovered or centred project. Phones show each screen inside its row.
- **Icons:** Remix Icon at 1.15em, beside text only.

## Imagery

| Slot | Source | Licence |
|---|---|---|
| Home hero | Looping digital-wave video, Nicola Narracci, Pexels; black hole by Norbert Kowalczyk in the hexagon | Pexels / Unsplash License |
| Work, Services, Contact heroes | Dark desk (Nikita Kachanovsky), dark cubes (Voxels Republic), starfield (Olena Bohovyk), Unsplash | Unsplash License |
| Contact, closing call | Code close-up (Juanjo Jaramillo), circuit board (Vishnu Mohanan), Unsplash | Unsplash License |
| Project screens | Live screenshots of Noah's own projects, captured 2026-11-19 | Noah's / project owners' own work |
| UrCart | Its own wordmark on a dark amber field (no live demo exists) | Noah's own |

Every credit is in `CREDITS.md` and in the footer.

## Illustrations

- Service drawings: one flat geometric language, square corners, the hexagon as the recurring node.
- Floaters (`components/home/floaters.tsx`): a wireframe 3×3 cube, a hexagon ring, an emerald orb and the logo chip. Decorative, behind content, hidden on phones where they would sit on text.

## Motion

- **Hero:** the video loops under a slow aurora gradient. On scroll the copy lifts and blurs out while the floating collage flies apart and dissolves through an SVG turbulence filter (`--p`, 0 → 1).
- **Floaters:** drift through their section with the scroll (`--t`), spin, then blur and fade as they leave the top.
- **Work showcase:** rows sweep a glow on hover; the stage crossfades (opacity, rise, blur) between projects.
- **Entrances:** `data-reveal`, staggered, fire once; content stays visible without script.
- **Reduced motion:** no video autoplay, no transforms, no scroll effects; everything shows in its final state.

## Sections (Home)

The home page points onward and does not repeat the other pages.

1. **Hero:** full screen, h1 and actions on the left, the floating project collage on the right.
2. **Stack strip:** the tools, in a slow logo loop.
3. **Selected work:** three projects in the split showcase, with a link to all six.
4. **How I work:** one person from first message to launch, three promises (fixed quote in shillings, mobile first, looked after once live), a link to services and prices.
5. **Closing call:** WhatsApp, on the circuit-board photo.
6. **Footer:** the name, the ways to reach Noah, the pages and the credits.

The full work is on /work, prices and process on /services, every contact route on /contact.
