import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/work', 'Portfolio'],
  ['/about', 'About me'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="brand" aria-label="Noah Katumba home">
          <span className="brand__mark">NK</span>
          <span className="brand__text">Noah Katumba</span>
        </Link>

        <nav className="navbar__desktop" aria-label="Primary navigation">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="button button--small navbar__cta">Start a project</Link>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <nav className="container mobile-menu__inner" aria-label="Mobile navigation">
          <div className="mobile-menu__intro">
            <span>Explore</span>
            <p>Services, selected work, background, and ways to get in touch.</p>
          </div>
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link--active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="button">Start a project</Link>
        </nav>
      </div>
    </header>
  )
}
