import { Contact } from "@/components/home/contact"
import { Hero } from "@/components/home/hero"
import { Pricing } from "@/components/home/pricing"
import { Process } from "@/components/home/process"
import { WorkPanels } from "@/components/home/work-panels"
import { Reveal } from "@/components/motion/reveal"
import { Footer } from "@/components/site/footer"
import { Header } from "@/components/site/header"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkPanels />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  )
}
