import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const illustrationMap = {
  'landing-page': '/illustrations/landing-page.svg',
  website: '/illustrations/website.svg',
  app: '/illustrations/app.svg',
  maintenance: '/illustrations/maintenance.svg',
}

export default function ServiceCard({ service, compact = false }) {
  const illustration = illustrationMap[service.id]

  return (
    <article className={`service-card service-card--${service.id} ${compact ? 'service-card--compact' : ''}`}>
      <div className="service-card__top">
        <span className="service-card__number">{service.number}</span>
        <span className="service-card__billing">{service.billing}</span>
      </div>

      {illustration && (
        <div className="service-card__visual" aria-hidden="true">
          <img src={illustration} alt="" loading="lazy" />
        </div>
      )}

      <div className="service-card__copy">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-card__price">{service.price}</div>
      {!compact && (
        <ul className="feature-list">
          {service.features.map((feature) => (
            <li key={feature}><Check size={16} /> {feature}</li>
          ))}
        </ul>
      )}
      <Link to={`/contact?service=${service.id}`} className="text-link">
        Request this service <ArrowUpRight size={17} />
      </Link>
    </article>
  )
}
