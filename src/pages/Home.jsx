import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Layers3, MessageCircle, MonitorSmartphone, Sparkles } from 'lucide-react'
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

const visitorPaths = [
  { icon: MonitorSmartphone, label: 'I need something built', copy: 'See websites, web apps, PWAs, prototypes, and starting prices.', to: '/services', action: 'Explore services' },
  { icon: BriefcaseBusiness, label: 'I want to see your work', copy: 'Open live projects and see the technologies behind them.', to: '/work', action: 'View portfolio' },
  { icon: MessageCircle, label: 'I already have an idea', copy: 'Tell me what you want to build and continue the conversation on WhatsApp.', to: '/contact', action: 'Start a conversation' },
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
              <p className="hero__kicker">Hi, my name is Noah Katumba.</p>
              <h1>I build digital products that <em>move ideas forward.</em></h1>
            </div>
            <div className="hero__side">
              <div className="hero-image-card">
                <img src={heroImage} alt="Developer workspace with a laptop displaying source code" />
                <div className="hero-image-card__label">
                  <span>Welcome</span>
                  <strong>Let&apos;s build something useful</strong>
                </div>
              </div>
              <p>I&apos;m a developer based in Uganda. I help individuals and growing businesses turn ideas into modern websites, web applications, PWAs, and software experiences that are clear, responsive, and useful.</p>
              <div className="hero__actions">
                <Link to="/contact" className="button">Tell me your idea <ArrowUpRight size={18} /></Link>
                <Link to="/work" className="button button--ghost">See what I&apos;ve built</Link>
              </div>
            </div>
          </div>
          <div className="hero__footer">
            <a href="#start-here" className="scroll-cue"><ArrowDown size={16} /> Start here</a>
            <div className="hero__services-line">React · JavaScript · Kotlin · Swift · REST APIs</div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Services overview">
        <div className="marquee__track">
          <span>Websites</span><i>✦</i><span>Web Applications</span><i>✦</i><span>PWAs</span><i>✦</i><span>Mobile Prototypes</span><i>✦</i><span>UI Implementation</span><i>✦</i><span>API Integration</span><i>✦</i>
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
          <SectionHeading eyebrow="What I build" title="Services designed around useful outcomes." copy="Choose a focused service or bring a custom idea. Every project starts with understanding what the product actually needs to achieve." />
          <div className="service-grid service-grid--home">
            {services.slice(0, 4).map((service) => <ServiceCard key={service.id} service={service} compact />)}
          </div>
          <div className="section-link-row">
            <Link to="/services" className="button button--ghost">See all services & pricing <ArrowUpRight size={18} /></Link>
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
