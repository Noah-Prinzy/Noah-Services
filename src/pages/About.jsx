import { ArrowUpRight, Github, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const WHATSAPP_URL = 'https://wa.me/256784695549'
const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=noahprinzy@gmail.com'

const stackGroups = [
  ['Frontend', ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Jetpack Compose', 'SwiftUI']],
  ['Backend', ['Kotlin', 'Ktor', 'Swift', 'Vapor', 'Node.js', 'REST APIs']],
  ['Data & tooling', ['PostgreSQL', 'Flyway', 'Git', 'GitHub', 'Docker', 'Vite']],
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="I like turning ideas into systems people can actually use."
        copy="I’m Noah Katumba, a developer based in Uganda working across frontend, backend, mobile, and database-driven application development."
      />

      <section className="section section--tight-top">
        <div className="container about-grid">
          <div className="portrait-card">
            <img src="https://avatars.githubusercontent.com/u/243095333?v=4" alt="Noah Katumba" />
            <div className="portrait-card__badge"><span /> Based in Uganda</div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">The short version</span>
            <h2>I’m building breadth without losing sight of fundamentals.</h2>
            <p>My projects have taken me through React interfaces, Kotlin and Ktor backends, Swift and Vapor, PostgreSQL databases, authentication systems, REST APIs, PWAs, and mobile application development.</p>
            <p>I care about understanding what each layer is doing instead of treating application development as a collection of disconnected tools. That makes it easier to reason about a product from the user interface all the way to the data it depends on.</p>
            <div className="about-links">
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer" className="text-link"><Mail size={17} /> noahprinzy@gmail.com</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-link"><MessageCircle size={17} /> 0784695549</a>
              <a href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer" className="text-link"><Github size={17} /> Noah-Prinzy</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="stack-heading">
            <span className="eyebrow">Technology</span>
            <h2>Tools I work with.</h2>
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
            <span className="eyebrow">Working principles</span>
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
          <Link to="/contact" className="button">Work with me <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
