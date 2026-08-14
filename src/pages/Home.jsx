import { ArrowDown, ArrowUpRight, Code2, Layers3, MonitorSmartphone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'

const heroImage = 'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1400&q=82'

const capabilities = [
  { icon: MonitorSmartphone, title: 'Responsive by default', copy: 'Interfaces designed to work naturally across phones, tablets, and desktop screens.' },
  { icon: Code2, title: 'Built, not just mocked', copy: 'The focus is functional implementation: real routes, real forms, real API-ready user flows.' },
  { icon: Layers3, title: 'Structured to grow', copy: 'Reusable components and clear project organization make future changes easier to manage.' },
  { icon: Sparkles, title: 'Care in the details', copy: 'Typography, motion, spacing, accessibility, and performance are treated as part of the product.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="container hero__inner">
          <div className="hero__status"><span /> Uganda · Available for selected projects</div>
          <div className="hero__layout">
            <div className="hero__copy">
              <p className="hero__kicker">Digital product developer</p>
              <h1>I build digital products that <em>move ideas forward.</em></h1>
            </div>
            <div className="hero__side">
              <div className="hero-image-card">
                <img src={heroImage} alt="Developer workspace with a laptop displaying source code" />
                <div className="hero-image-card__label">
                  <span>Visual craft</span>
                  <strong>Build · iterate · ship</strong>
                </div>
              </div>
              <p>I design and develop modern websites, web applications, PWAs, and software experiences for individuals and growing businesses.</p>
              <div className="hero__actions">
                <Link to="/contact" className="button">Start a project <ArrowUpRight size={18} /></Link>
                <Link to="/work" className="button button--ghost">View my work</Link>
              </div>
            </div>
          </div>
          <div className="hero__footer">
            <a href="#services" className="scroll-cue"><ArrowDown size={16} /> Explore</a>
            <div className="hero__services-line">React · JavaScript · Kotlin · Swift · REST APIs</div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Services overview">
        <div className="marquee__track">
          <span>Websites</span><i>✦</i><span>Web Applications</span><i>✦</i><span>PWAs</span><i>✦</i><span>Mobile Prototypes</span><i>✦</i><span>UI Implementation</span><i>✦</i><span>API Integration</span><i>✦</i>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionHeading eyebrow="What I build" title="Services designed around useful outcomes." copy="Choose a focused service or bring a custom idea. Every project starts with understanding what the product actually needs to achieve." />
          <div className="service-grid service-grid--home">
            {services.slice(0, 4).map((service) => <ServiceCard key={service.id} service={service} compact />)}
          </div>
          <div className="section-link-row">
            <Link to="/services" className="button button--ghost">See all services & pricing <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="Projects built across different stacks." copy="A few of the products I have worked on while developing across web, mobile, backend, and database technologies." />
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={projects.length <= 2 || index === 0} />)}
          </div>
          <div className="section-link-row">
            <Link to="/work" className="text-link text-link--large">Explore project details <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-section__intro">
            <span className="eyebrow">How I work</span>
            <h2>Clean thinking before complicated code.</h2>
            <p>I prefer understanding the user journey and product goal first, then choosing the simplest architecture that can deliver it well.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy }) => (
              <article className="capability" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container callout">
          <span className="eyebrow eyebrow--dark">Have a project in mind?</span>
          <h2>Tell me what you want to build. I’ll help you turn it into a clear digital product.</h2>
          <Link to="/contact" className="button button--dark">Start the conversation <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
