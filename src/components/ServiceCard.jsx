import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service, compact = false }) {
  return (
    <article className={`service-card ${compact ? 'service-card--compact' : ''}`}>
      <div className="service-card__top">
        <span className="service-card__number">{service.number}</span>
        <span className="service-card__billing">{service.billing}</span>
      </div>
      <div>
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
