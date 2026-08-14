import { ArrowUpRight, Github, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const WHATSAPP_URL = 'https://wa.me/256784695549'
const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=noahprinzy@gmail.com'
const aboutHeroImage = 'https://images.unsplash.com/photo-1559842135-8d5e4214ae77?auto=format&fit=crop&w=1800&q=80'

const stackGroups = [
  ['Frontend', ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Jetpack Compose', 'SwiftUI']],
  ['Backend', ['Kotlin', 'Ktor', 'Swift', 'Vapor', 'Node.js', 'REST APIs']],
  ['Data & tooling', ['PostgreSQL', 'Flyway', 'Git', 'GitHub', 'Docker', 'Vite']],
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="I’m Noah Katumba — a developer who likes understanding the whole product."
        copy="I’m based in Uganda and work across frontend, backend, mobile, databases, APIs, and deployment. I enjoy turning an idea into something people can actually open, understand, and use."
        image={aboutHeroImage}
        imagePosition="center 56%"
      />

      <section className="section section--tight-top">
        <div className="container about-grid">
          <div className="portrait-card">
            <img src="https://avatars.githubusercontent.com/u/243095333?v=4" alt="Noah Katumba" />
            <div className="portrait-card__badge"><span /> Based in Uganda</div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">A little more about me</span>
            <h2>I’m building breadth without losing sight of the fundamentals.</h2>
            <p>My projects have taken me through React interfaces, Kotlin and Ktor backends, Swift and Vapor, PostgreSQL databases, authentication systems, REST APIs, PWAs, and mobile application development.</p>
            <p>Rather than treating those technologies as disconnected tools, I try to understand how each layer supports the user experience. That helps me make clearer decisions from the interface all the way to the data and deployment behind it.</p>
            <div className="about-links" aria-label="Contact Noah Katumba">
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer" className="text-link"><Mail size={17} /> Email me</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-link"><MessageCircle size={17} /> WhatsApp me</a>
              <a href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer" className="text-link"><Github size={17} /> View my GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="stack-heading">
            <span className="eyebrow">Technology</span>
            <h2>The tools I currently work with.</h2>
            <p className="stack-heading__copy">You do not need to choose the technology yourself. I use the stack that makes sense for the product and its requirements.</p>
          </div>
          <div className="stack-groups">
            {stackGroups.map(([title, items]) => (
              <article className="stack-group" key={title}>
                <h3>{title}</h3>
                <div className="stack-list">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container philosophy-grid">
          <div>
            <span className="eyebrow">How I approach a project</span>
            <h2>Simple enough to understand. Strong enough to grow.</h2>
          </div>
          <div className="philosophy-list">
            <div><strong>01</strong><p>Start with the user and the problem before selecting technology.</p></div>
            <div><strong>02</strong><p>Keep architecture explainable. Complexity should earn its place.</p></div>
            <div><strong>03</strong><p>Build responsive, accessible interfaces as a baseline rather than an extra.</p></div>
            <div><strong>04</strong><p>Leave projects organized enough that the next change is easier, not harder.</p></div>
          </div>
        </div>
        <div className="container section-link-row section-link-row--left">
          <Link to="/contact" className="button">Want to work together? <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
