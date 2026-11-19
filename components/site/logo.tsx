import { cn } from "@/lib/utils"

/** Noah's mark: an emerald hexagon around a split cube, traced from his logo. */
export function LogoMark({
  className,
  title,
}: {
  className?: string
  title?: string
}) {
  return (
    <svg
      viewBox="100 12 385 430"
      className={cn("text-primary", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M293 18 L475 103 L475 338 L293 435 L110 338 L110 103 Z M293 72 L430 148 L430 300 L293 380 L155 300 L155 148 Z" />
        <path d="M170 140 L215 170 L215 285 L170 310 Z" />
        <path d="M288 82 L425 150 L380 178 L288 135 Z" />
        <path d="M288 368 L425 300 L380 275 L288 318 Z" />
      </g>
    </svg>
  )
}

/** Mark plus name, used in the header and footer. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-heading font-semibold tracking-tight",
        className
      )}
    >
      <LogoMark className="h-[1.35em] w-auto" />
      Noah Devs
    </span>
  )
}
