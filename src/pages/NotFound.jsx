import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>This page doesn’t exist.</h1>
        <p>The link may be outdated or the page may have moved.</p>
        <Link className="button" to="/"><ArrowLeft size={18} /> Back home</Link>
      </div>
    </section>
  )
}
