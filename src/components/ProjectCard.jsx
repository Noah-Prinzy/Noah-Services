import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <a
        className={`project-visual ${project.className}`}
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open the live ${project.title} website`}
      >
        {project.imageUrl && (
          <img
            className="project-visual__image"
            src={project.imageUrl}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
          />
        )}
        <span className="project-visual__scrim" />
        <span className="project-visual__index">{project.index}</span>
        <span className="project-visual__mark">{project.mark}</span>
        <span className="project-visual__line" />
      </a>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.type}</span>
          <span>{project.index}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <div className="project-card__links">
          <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
            View live project <ArrowUpRight size={17} />
          </a>
          <a className="text-link text-link--muted" href={project.repoUrl} target="_blank" rel="noreferrer">
            <Github size={16} /> View code
          </a>
        </div>
      </div>
    </article>
  )
}
