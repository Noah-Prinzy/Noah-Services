"use client"

import { useEffect } from "react"

/**
 * Entrance reveals (DESIGN.md, Motion). Content is visible without script; this
 * marks the page ready, then reveals each [data-reveal] once as it enters view.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )
    if (!("IntersectionObserver" in window) || items.length === 0) return

    root.classList.add("js-reveal")
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )
    items.forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove("js-reveal")
    }
  }, [])

  return null
}
