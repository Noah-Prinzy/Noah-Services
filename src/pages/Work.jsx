import { Github } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Products that show how I think and build."
        copy="My portfolio spans tourism, commerce, mobile applications, REST APIs, databases, authentication, and responsive frontend experiences."
        aside={<a className="text-link" href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer"><Github size={17} /> View GitHub profile</a>}
      />
      <section className="section section--tight-top">
        <div className="container project-grid project-grid--work">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>
      <section className="section section--muted">
        <div className="container work-note">
          <span className="eyebrow">More than screens</span>
          <h2>I’m interested in the full product path.</h2>
          <div className="work-note__columns">
            <p>That means understanding how the frontend talks to the API, how authentication works, what the database needs to store, and what deployment requires.</p>
            <p>The result is a stronger foundation when a project needs to evolve from a visual prototype into a connected application.</p>
          </div>
        </div>
      </section>
    </>
  )
}
