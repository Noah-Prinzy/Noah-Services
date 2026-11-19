"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { RiMoonLine, RiSunLine } from "@remixicon/react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  // false on the server, true once hydrated: avoids a theme-icon mismatch.
  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const dark = !ready || resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-glow/50"
    >
      {dark ? (
        <RiSunLine className="size-5" aria-hidden />
      ) : (
        <RiMoonLine className="size-5" aria-hidden />
      )}
    </button>
  )
}
