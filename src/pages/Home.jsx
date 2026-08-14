import { ArrowDown, ArrowUpRight, Briefcase, Code2, Layers3, MessageCircle, MonitorSmartphone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { services } from '../data/services.js'
import { projects } from '../data/projects.js'

const capabilities = [
  { icon: MonitorSmartphone, title: 'Responsive by default', copy: 'Interfaces designed to work naturally across phones, tablets, and desktop screens.' },
  { icon: Code2, title: 'Built, not just mocked', copy: 'The focus is functional implementation: real routes, real forms, real API-ready user flows.' },
  { icon: Layers3, title: 'Structured to grow', copy: 'Reusable components and clear project organization make future changes easier to manage.' },
  { icon: Sparkles, title: 'Care in the details', copy: 'Typography, motion, spacing, accessibility, and performance are treated as part of the product.' },
]

const visitorPaths = [
  { icon: MonitorSmartphone, label: 'I need something built', copy: 'Explore landing pages, websites, apps, maintenance, and the current price ranges.', to: '/services', action: 'Explore services' },
  { icon: Briefcase, label: 'I want to see your work', copy: 'Open live projects and see the technologies and systems behind them.', to: '/work', action: 'View portfolio' },
  { icon: MessageCircle, label: 'I already have an idea', copy: 'Tell me what you want to build and continue the conversation directly on WhatsApp.', to: '/contact', action: 'Start a conversation' },
]

export default function Home() {
  return (
    <>
      <section className="hero hero--illustrated">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="container hero__inner">
          <div className="hero__status"><span /> Uganda · Available for selected projects</div>
          <div className="hero__layout">
            <div className="hero__copy">
              <p className="hero__kicker">Hi, my name is Noah Katumba.</p>
              <h1>I build digital products that <em>move ideas forward.</em></h1>
            </div>
            <div className="hero__side">
              <p>I&apos;m a developer based in Uganda. I help individuals and growing businesses turn ideas into landing pages, websites, apps, and useful software experiences that work clearly across devices.</p>
              <div className="hero__actions">
                <Link to="/contact" className="button">Tell me your idea <ArrowUpRight size={18} /></Link>
                <Link to="/work" className="button button--ghost">See what I&apos;ve built</Link>
              </div>
            </div>
          </div>
          <div className="hero__footer">
            <a href="#start-here" className="scroll-cue"><ArrowDown size={16} /> Start here</a>
            <div className="hero__services-line">Landing Pages · Websites · Apps · Maintenance</div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Services overview">
        <div className="marquee__track">
          <span>Landing Pages</span><i>✦</i><span>Websites</span><i>✦</i><span>Apps</span><i>✦</i><span>Website & App Maintenance</span><i>✦</i><span>Responsive on Every Device</span><i>✦</i><span>Direct Project Inquiries</span><i>✦</i>
        </div>
      </section>

      <section className="home-paths" id="start-here">
        <div className="container">
          <div className="home-paths__heading">
            <span className="eyebrow">What are you here for?</span>
            <h2>Choose the quickest path.</h2>
          </div>
          <div className="home-paths__grid">
            {visitorPaths.map(({ icon: Icon, label, copy, to, action }) => (
              <Link className="home-path" to={to} key={label}>
                <Icon size={22} />
                <h3>{label}</h3>
                <p>{copy}</p>
                <span>{action} <ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <SectionHeading eyebrow="What I build" title="Choose the kind of digital product you need." copy="Start with the outcome rather than the technology. Each service below has a clear price range, and the final quote depends on the real scope of the project." />
          <div className="service-grid service-grid--home">
            {services.map((service) => <ServiceCard key={service.id} service={service} compact />)}
          </div>
          <div className="section-link-row">
            <Link to="/services" className="button button--ghost">See service details & pricing <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--muted home-work-section">
        <div className="container">
          <SectionHeading eyebrow="Selected work" title="See the products, not just a list of technologies." copy="Open the live projects below to experience the interface, then use the code link if you want to look behind the scenes." />
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={projects.length <= 2 || index === 0} />)}
          </div>
          <div className="section-link-row">
            <Link to="/work" className="text-link text-link--large">Explore the full portfolio <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="split-section__intro">
            <span className="eyebrow">What you can expect</span>
            <h2>Clear thinking before complicated code.</h2>
            <p>I start with the user journey and the product goal, then choose the simplest architecture that can deliver the experience well and leave room to grow.</p>
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
          <h2>You can start with a rough idea. I’ll help you turn it into a clearer digital product.</h2>
          <Link to="/contact" className="button button--dark">Tell me about it <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
