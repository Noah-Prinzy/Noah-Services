# DESIGN.md: Noah ⌬ Devs

The design system for noah-services. Every value in the build traces back to a token here or in `app/globals.css`.

- **Base:** shadcn preset `b5nh4SpZSC` (base-mira, neutral base, emerald theme, IBM Plex Sans + Oxanium, Remix Icon, radius 0).
- **Direction:** taste-skill "The pinned poster" (seed 1098363374, 2026-11-19), palette and type kept from the preset. The sheet is in `.taste-skill/direction.json`.

## Idea

> On this page, **the hexagon in Noah's own mark (⌬)** becomes **the window that opens to the edges**: the first screen shows a sunrise through a hexagon that grows into the full screen as you scroll.

Competitor test: another developer can find the same sunrise but not this mark. The hexagon recurs as the one motif: the window, the wordmark glyph, and the service drawings.

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

- Page margin `--gutter`: 20px on phones, 32px from 768px. One pair, equal on both sides, everywhere.
- 12-column grid inside the margins, gap 24px.
- Section gap `--section`: clamp(120px, 14vw, 200px). Inside a section the gaps go 16, 24, 48 and 72px.
- Max text measure: 62ch.

## Shape

- Radius **0** everywhere (preset). Square buttons, square images.
- No shadows at rest, no gradients (except a neutral scrim under text on photographs), no thin decorative rules, no glass.
- Surfaces are separated by a tone step (`--muted`), never by a line.

## Components

- **Button:** one shape. Solid emerald (`--primary`), square, 48px tall (56px full-width on phones), label at step sm and weight 500. The secondary action is a plain text link with an underline on hover.
- **Navigation:** the wordmark "Noah ⌬ Devs" at the left, then Work, Services, About and Contact, and one WhatsApp button. A plain bar on the ground with no blur; it folds to a "Menu" word on phones.
- **Icons:** Remix Icon at 1.15em, beside text only.
- **Images:** next/image, WebP, square corners, one treatment. Project screens are shown as they are, never recoloured.

## Imagery

| Slot | Source | Licence |
|---|---|---|
| Hero window | "A landscape with trees and mountains" (misty sunrise), Shai Pal, Unsplash | Unsplash License |
| Contact | "Computer programming codes displayed on a monitor", Markus Spiske, Unsplash | Unsplash License |
| Work panels | Live screenshots of Noah's own projects (Zuula, Phronesis presentation, Pearl AI, Shamba AI, Nine Coals) captured 2026-11-19 | Noah's / project owners' own work |
| UrCart | Its own brand wordmark on its own colour field (no live demo exists) | Noah's own |

Every credit is in `CREDITS.md` and in the footer.

## Illustrations (service drawings)

One flat geometric language: square corners, 2px strokes in `--foreground`, fills in `--muted`, a single emerald detail per drawing, and the hexagon as the recurring node. Each drawing has 3–6 shapes. They draw on (stroke-dashoffset, 700ms, ease-out-quart) when their plan is selected. Under reduced motion they appear complete.

## Motion

- **Signature:** the hexagon window opening to full-bleed, scroll-linked over 100svh.
- **Pinned story:** the work panels slide over each other (sticky), and the process fragment changes state as statements pass.
- **Entrances:** heading, then text, then picture, staggered 70ms, rising 24px with opacity over 600ms `cubic-bezier(0.22, 1, 0.36, 1)`. They fire once, and content stays visible without script.
- **Feedback:** buttons darken 8% on hover and move down 1px on press. Links underline on hover. Focus rings are 2px emerald.
- **Reduced motion:** no travel, no scroll-linked clipping. The hero shows the open picture below the headline.
- Only transform and opacity are animated, apart from the hero's clip-path.

## Sections (Home)

1. **Hero:** the hexagon window onto a sunrise, the h1 to its left, the supporting sentence and WhatsApp action to its right.
2. **Work:** six full-screen panels, each a project screen, with a fixed midline row (year · title · role).
3. **Services and pricing:** the plan names list on the left, the live price stage with a drawing on the right.
4. **Process:** four statements (Sketch, Build, Launch, Grow) beside a pinned fragment that changes state.
5. **Contact:** a solid card on a close-up of code, with WhatsApp, call, email and Instagram.
6. **Footer:** the name first at full width on the inverse field, then the ways to reach Noah, the links and the credits.
