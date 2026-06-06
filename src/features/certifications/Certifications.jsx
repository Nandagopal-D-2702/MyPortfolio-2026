// ============================================================
// Certifications.jsx
// Two sub-sections in one component:
//   1. Certifications — courses and credentials
//   2. Achievements   — work impact metrics
//
// Add to data.js to update — no code changes needed.
// ============================================================

import { motion } from 'framer-motion'
import { CERTIFICATIONS, ACHIEVEMENTS } from '@/lib/data'
import { Heading, Text, Label } from '@/components/ui/Typography'
import Badge from '@/components/ui/Badge'
import Divider from '@/components/ui/Divider'
import { fadeUp, container, item } from '@/lib/animations'

function Certifications() {
  return (
    <section
      className="section-padding"
      style={{
        padding: '80px 48px',
        background: 'var(--color-bg-secondary)',
      }}
    >
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ marginBottom: '64px' }}
      >
        <Label accent style={{ display: 'block', marginBottom: '12px' }}>
          Credentials & impact
        </Label>
        <Heading as="h2" size="3xl">
          Certifications &{' '}
          <Heading
            as="span"
            size="3xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            achievements.
          </Heading>
        </Heading>
      </motion.div>

      {/* ── CERTIFICATIONS ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ marginBottom: '64px' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <Label style={{ letterSpacing: '0.16em' }}>
            Certifications — {CERTIFICATIONS.length} credentials
          </Label>
        </div>

        <Divider style={{ marginBottom: '32px' }} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className='certs-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.id} variants={item}>
              <CertCard cert={cert} />
            </motion.div>
          ))}

          {/* Future placeholder */}
          <motion.div variants={item}>
            <FutureCert />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── ACHIEVEMENTS ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <Label style={{ letterSpacing: '0.16em' }}>
            Work achievements — by the numbers
          </Label>
        </div>

        <Divider style={{ marginBottom: '32px' }} />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className='achivements-grid'
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div key={achievement.id} variants={item}>
              <AchievementCard achievement={achievement} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// -- CERT CARD -----------------------------------------------
function CertCard({ cert }) {
  return (
    <a
      href={cert.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          border: '0.5px solid var(--color-border)',
          borderRadius: '4px',
          padding: '24px',
          background: 'var(--color-bg-primary)',
          cursor: 'pointer',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(26,24,20,0.08)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Issuer badge */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '8px',
            background: cert.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 500,
              color: '#FAFAF7',
              letterSpacing: '0.06em',
            }}
          >
            {cert.issuerShort}
          </span>
        </div>

        {/* Content */}
        <Heading as="h3" size="lg" style={{ marginBottom: '8px' }}>
          {cert.title}
        </Heading>
        <Text size="sm" style={{ marginBottom: '16px' }}>
          {cert.issuer}
        </Text>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Badge variant="subtle">{cert.category}</Badge>
          <Label>{cert.date}</Label>
        </div>
      </div>
    </a>
  )
}

// -- FUTURE CERT PLACEHOLDER ---------------------------------
function FutureCert() {
  return (
    <div
      style={{
        border: '0.5px dashed var(--color-border)',
        borderRadius: '4px',
        padding: '24px',
        background: 'transparent',
        opacity: 0.4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '160px',
        gap: '8px',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1.5px dashed var(--color-border-strong)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: 'var(--color-text-muted)',
        }}
      >
        +
      </div>
      <Label style={{ textAlign: 'center' }}>More coming soon</Label>
    </div>
  )
}

// -- ACHIEVEMENT CARD ----------------------------------------
function AchievementCard({ achievement }) {
  return (
    <div
      style={{
        border: '0.5px solid var(--color-border)',
        borderRadius: '4px',
        padding: '24px',
        background: 'var(--color-bg-primary)',
      }}
    >
      {/* Metric */}
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '40px',
          fontWeight: 700,
          color: 'var(--color-accent)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '4px',
        }}
      >
        {achievement.metric}
      </div>
      <Label
        style={{
          display: 'block',
          marginBottom: '16px',
          color: 'var(--color-accent)',
        }}
      >
        {achievement.metricLabel}
      </Label>

      {/* Content */}
      <Heading as="h3" size="lg" style={{ marginBottom: '8px' }}>
        {achievement.title}
      </Heading>
      <Text size="sm">{achievement.description}</Text>
    </div>
  )
}

export default Certifications
