import { ArrowUpRight, Github, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <span className="eyebrow">Available for selected projects</span>
            <h2>Have something worth building?</h2>
          </div>
          <Link to="/contact" className="button button--light">
            Tell me about it <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="footer__bottom">
          <div className="footer__identity">
            <span className="brand__mark">NK</span>
            <p>Designing and building thoughtful digital products from Uganda.</p>
          </div>
          <div className="footer__links">
            <a href="mailto:noahprinzy@gmail.com"><Mail size={17} /> Email</a>
            <a href="tel:0784695549"><Phone size={17} /> 0784695549</a>
            <a href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          </div>
          <p className="footer__copyright">© {year} Noah Katumba</p>
        </div>
      </div>
    </footer>
  )
}
