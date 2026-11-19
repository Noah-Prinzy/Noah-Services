"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// DESIGN.md: the site defaults to dark (the logo's black); visitors can switch. The scaffold's "d" hotkey is removed so a
// stray keypress never flips the theme for a visitor.
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
