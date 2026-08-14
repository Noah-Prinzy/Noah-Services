import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

const servicesHeroImage = 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?auto=format&fit=crop&w=1800&q=80'

const process = [
  ['01', 'Tell me the idea', 'We clarify the problem, audience, important screens, technical needs, and what a successful result should do for you.'],
  ['02', 'Agree on scope', 'You receive a clear scope, deliverables, estimated timeline, and final project price before development begins.'],
  ['03', 'Design & build', 'I build the interface and functionality in focused stages so the product stays understandable and easy to review.'],
  ['04', 'Review & launch', 'We test the final experience, make the agreed refinements, and prepare the product for deployment or handoff.'],
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & pricing"
        title="Choose a clear starting point for what you want to build."
        copy="These starting prices help you understand the likely scale of a project. Your final quote depends on the features, integrations, content, timeline, and complexity you actually need."
        aside={<Link to="/contact" className="text-link">Not sure which service fits? Ask me <ArrowUpRight size={17} /></Link>}
        image={servicesHeroImage}
        imagePosition="center 58%"
      />

      <section className="section section--tight-top">
        <div className="container">
          <div className="ux-intro-row">
            <div>
              <span className="eyebrow">Pick what matches your goal</span>
              <h2>Start with the outcome, not the technology.</h2>
            </div>
            <p>If you already know what you need, choose a service below. If you only have an idea, that is enough too — I can help you work out the right approach.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section section--muted section--photo-soft">
        <div className="container">
          <div className="process-heading">
            <span className="eyebrow">What happens next</span>
            <h2>A simple path from first message to launch.</h2>
          </div>
          <div className="process-list">
            {process.map(([number, title, copy]) => (
              <article className="process-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-note">
          <div>
            <span className="eyebrow">Need something different?</span>
            <h2>Custom software doesn’t always fit a price card.</h2>
          </div>
          <div>
            <p>If your idea combines multiple systems, user roles, integrations, dashboards, databases, or a custom backend, send me the requirements and I’ll price the work around the real scope.</p>
            <Link to="/contact?service=custom" className="button">Tell me about the idea <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
