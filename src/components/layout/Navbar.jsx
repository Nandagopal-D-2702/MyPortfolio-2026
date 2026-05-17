// ============================================================
// Navbar.jsx
// Site-wide navigation with React Router NavLink.
// Stays fixed at top, shows active page,
// collapses gracefully on smaller screens.
// ============================================================

import { NavLink } from 'react-router-dom'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

// Navigation links - defined as data outside component
// Easy to add/remove links without touching JSX

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Blog', to: '/blog' },
  { label: 'Vlogs', to: '/vlogs' },
]

function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-nav)',
        background: 'rgba(250,250,247,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid var(--color-border)',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 var(--space-10)',
          height: '56px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em',
            }}
          >
            ND.
          </span>
        </NavLink>

        {/* Center links */}
        <div
          className="nav-links-center"
          style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-muted)',
                fontWeight: isActive ? 500 : 400,
                transition: 'color var(--transition-fast)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side - availability + CTA */}
        <div
          className="nav-right"
          style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <Badge variant="subtle">Available</Badge>
          <a
            href="/NANDAGOPAL-Resume.pdf"
            download
            className="nav-resume"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="outline" size="sm">
              Resume
            </Button>
          </a>
          <Button variant="primary" size="sm">
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
