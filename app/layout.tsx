import type { Metadata } from "next"
import { IBM_Plex_Sans, Oxanium } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const oxaniumHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Basic metadata; full SEO, OG images and JSON-LD come in phase 5.
export const metadata: Metadata = {
  title: "Noah ⌬ Devs: websites and apps made in Kampala",
  description:
    "Noah Katumba designs and builds fast websites, online stores and AI products for businesses in Uganda and beyond. Prices in UGX, fixed quotes up front.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        ibmPlexSans.variable,
        oxaniumHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
