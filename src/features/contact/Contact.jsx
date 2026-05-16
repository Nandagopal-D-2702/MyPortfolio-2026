// ============================================================
// Contact.jsx
// Contact section with email, social links and availability.
// Simple, direct, no form needed — email is most reliable.
// ============================================================

import { color, motion } from 'framer-motion'
import { Heading, Text, Label } from '../../components/ui/Typography'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Divider from '../../components/ui/Divider'
import { fadeUp, container, item } from '../../lib/animations'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Nandagopal-D-2702' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nandagopald/' },
  { label: 'Twitter', href: 'https://twitter.com/YOUR_USERNAME' },
]

const EMAIL = 'nandugopaldevraj.2702@gmail.com'

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '80px 48px',
        background: 'var(--color-bg-secondary)',
        borderTop: '0.5px solid var(--color-border)',
      }}
    >
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ marginBottom:'64px' }}
      >
        <Label accent style={{ display: 'block', marginBottom: '12px' }}>
          Get in touch
        </Label>
        <Heading as="h2" size="4xl" style={{ marginBottom: '20px' }}>
          Let's build something{' '}
          <Heading
            as="span"
            size="4xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            great.
          </Heading>
        </Heading>
        <Text size="lg" style={{ maxWidth: '480px' }}>
          I'm currently open to full-time roles if you have something
          interesting - let's talk.
        </Text>
      </motion.div>

      <Divider style={{ marginBottom: '64px' }} />

      {/* Main contact grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Left - email CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Label style={{ display: 'block', marginBottom: '16px' }}>
            Preferred contact
          </Label>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: 'block',
              fontFamily: 'var(--font-serif)',
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              borderBottom: '1px solid var(--color-accent)',
              paddingBottom: '8px',
              transition: 'color 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-primary)'
            }}
          >
            {EMAIL}
          </a>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={`mailto:${EMAIL}`} style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="md">
                Send Email
              </Button>
            </a>
            <a href="/NANDAGOPAL-Resume.pdf" download style={{ textDecoration: 'none' }}>
              <Button variant="outline" size="md">
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Right - availability + social */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
        >
          {/* Availability status */}
          <div
            style={{
              padding: '24px',
              background: 'var(--color-bg-primary)',
              border: '0.5px solid var(--color-border)',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <Badge variant="subtle" dot>
                Available for work
              </Badge>
            </div>
            <Text>
              Open to frontend, fullstack and React-focused roles. Based in
              Banglore - Open to Relocate worldwide
            </Text>
          </div>

          {/* Social links */}
          <motion.div variants={item}>
            <Label style={{ display: 'block', marginBottom: '16px' }}>
              Find me online
            </Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 0',
                    borderBottom: '0.5px solid var(-color-border)',
                    textDecoration: 'none',
                    transition: 'all 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '8px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '14px',
                    }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact