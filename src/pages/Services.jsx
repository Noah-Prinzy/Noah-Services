import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

const process = [
  ['01', 'Discovery', 'We define the problem, audience, core screens, technical needs, and what success should look like.'],
  ['02', 'Scope & quote', 'You receive a clear scope with deliverables, estimated timeline, and a final project price before development begins.'],
  ['03', 'Design & build', 'I implement the interface and functionality in focused stages, keeping the project structured and reviewable.'],
  ['04', 'Review & launch', 'We test the final experience, make agreed refinements, and prepare the product for deployment or handoff.'],
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & pricing"
        title="Clear starting points for your next digital product."
        copy="The prices below are draft starting rates for the initial launch of this site. Final pricing depends on scope, integrations, content, and complexity."
        aside={<Link to="/contact" className="text-link">Request a custom quote <ArrowUpRight size={17} /></Link>}
      />

      <section className="section section--tight-top">
        <div className="container service-grid">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="process-heading">
            <span className="eyebrow">The process</span>
            <h2>From first message to launch.</h2>
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
            <p>If your idea combines multiple systems, user roles, integrations, dashboards, databases, or a custom backend, send the requirements and I’ll price the work around the real scope.</p>
            <Link to="/contact?service=custom" className="button">Request a custom quote <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
