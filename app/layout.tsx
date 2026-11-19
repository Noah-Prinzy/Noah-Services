import type { Metadata, Viewport } from "next"
import { IBM_Plex_Sans, Oxanium } from "next/font/google"

import "./globals.css"
import { Reveal } from "@/components/motion/reveal"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"
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
  title: {
    default: "Noah Devs: websites and apps made in Kampala",
    template: "%s · Noah Devs",
  },
  description:
    "Noah Katumba designs and builds fast websites, online stores and AI products for businesses in Uganda and beyond. Prices in UGX, fixed quotes up front.",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
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
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <Reveal />
        </ThemeProvider>
      </body>
    </html>
  )
}
