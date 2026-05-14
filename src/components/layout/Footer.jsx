// ============================================================
// Footer.jsx
// Site-wide footer with navigation, social links and credit.
// ============================================================

import { href, Link } from 'react-router-dom'
import Divider from '../ui/Divider'
import { Label } from '../ui/Typography'

// -- CONFIG --------------------------------------------------
// Footer content lives here as data.
// Easy to update without touching JSX.
// ------------------------------------------------------------

const FOOTER_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Vlogs', to: '/vlogs' },
]

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
]

const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg-inverse)',
        color: 'var(--color-text-inverse)',
        marginTop: '80px',
      }}
    >
      {/* Top section */}
      <div
        style={{
          padding: '64px 48px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '48px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left - name + tagline */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--color-text-inverse)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Let's build
            <br />
            something{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
              great.
            </span>
          </div>
          <Label
            style={{
              color: 'rgba(250,250,247,0.3)',
              display: 'block',
              marginBottom: '24px',
            }}
          >
            Open to full-time roles & freelance projects
          </Label>

          <a
            href="nandugopaldevraj.2702@gmail.com"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--color-accent)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              borderBottom: '0.5px solid var(--color-accent)',
              paddingBottom: '2px',
            }}
          >
            Nandugopaldevraj.2702@gmail.com
          </a>
        </div>

        {/* Right - nav + social */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'flex-end',
          }}
        >
          {/* Nav links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-end',
            }}
          >
            <Label style={{ color: 'rgba(250,250,247,0.2)' }}>Navigation</Label>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,247,0.5)',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-end',
            }}
          >
            <Label style={{ color: 'rgba(250,250,247,0.2)' }}>Connect</Label>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,250,247,0.5)',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '0.5px solid rgba(250,250,247,0.06)',
          padding: '20px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Label>
            © {CURRENT_YEAR} - Your Name. All rights reserved.
        </Label>
        <Label>
            Built with React · Designed with intention
        </Label>
      </div>
    </footer>
  )
}

export default Footer
