import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Proof', href: '#proof' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <a
            href="#home"
            className="navbar-logo"
            onClick={(e) => scrollTo(e, '#home')}
            aria-label="Constance Benson — go to top"
          >
            Constance <span>Benson</span>
          </a>

          <ul className="navbar-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => scrollTo(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => scrollTo(e, link.href)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
