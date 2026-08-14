import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const workHeroImage = 'https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=1800&q=80'

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="See what I have built and how the pieces connect."
        copy="These projects show the kind of work I do across interfaces, APIs, databases, authentication, deployment, and responsive product experiences. Open a live project to experience it, or view the code on GitHub."
        aside={<a className="text-link" href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer"><Github size={17} /> Explore my GitHub profile</a>}
        image={workHeroImage}
        imagePosition="center 52%"
      />
      <section className="section section--tight-top">
        <div className="container">
          <div className="ux-intro-row ux-intro-row--compact">
            <div>
              <span className="eyebrow">Selected projects</span>
              <h2>Live work you can explore.</h2>
            </div>
            <p>Each project card gives you two choices: open the live product to see the user experience, or open the repository to inspect the code behind it.</p>
          </div>
          <div className="project-grid project-grid--work">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
      <section className="section section--muted work-story-section">
        <div className="container work-note">
          <span className="eyebrow">More than screens</span>
          <h2>I think about the full product path.</h2>
          <div className="work-note__columns">
            <p>A good interface is only one part of a useful product. I also think about how the frontend talks to the API, how authentication works, what the database needs to store, and how the product gets deployed.</p>
            <p>That broader view makes it easier to move from an attractive prototype to a connected application that can keep growing.</p>
          </div>
          <Link to="/contact" className="button work-note__cta">Have something similar in mind? <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
