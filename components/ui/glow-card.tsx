"use client"

import type { CSSProperties, HTMLAttributes } from "react"

import SpotlightCard from "@/components/SpotlightCard"
import { cn } from "@/lib/utils"

/** React Bits SpotlightCard, recoloured to the theme tokens with an emerald light. */
export function GlowCard({
  className,
  style,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <SpotlightCard
      spotlightColor="rgba(0, 209, 143, 0.22)"
      className={cn("rounded-[calc(var(--radius)*2)]", className)}
      style={
        {
          "--spotlight-card-surface": "var(--card)",
          "--spotlight-card-border": "var(--border)",
          "--spotlight-card-shadow": "none",
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </SpotlightCard>
  )
}
