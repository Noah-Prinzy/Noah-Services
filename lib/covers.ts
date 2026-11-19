import type { StaticImageData } from "next/image"

import zuula from "@/public/work/zuula.webp"
import phronesis from "@/public/work/phronesis.webp"
import pearl from "@/public/work/pearl-ai.webp"
import shamba from "@/public/work/shamba-ai.webp"
import nineCoals from "@/public/work/nine-coals.webp"

// Live screens captured 2026-11-19. UrCart has no live demo, so it is shown as its
// own floating wordmark (urcart-wordmark.png) instead of an invented screenshot.
export const COVERS: Record<string, StaticImageData> = {
  zuula,
  phronesis,
  "pearl-ai": pearl,
  "shamba-ai": shamba,
  "nine-coals": nineCoals,
}
