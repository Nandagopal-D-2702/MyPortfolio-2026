// ============================================================
// Experience.jsx
// Work history as a vertical timeline.
// Designed to scale — add new roles to data.js and
// they appear automatically with no code changes.
// ============================================================

import { motion } from 'framer-motion'
import { EXPERIENCE } from '@/lib/data'
import { Heading, Text, Label } from '@/components/ui/Typography'
import Badge from '@/components/ui/Badge'
import Divider from '@/components/ui/Divider'
import { fadeUp, container, item } from '@/lib/animations'

function Experience() {
  return (
    <section className="section-padding" style={{ padding: '80px 48px' }}>
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ marginBottom: '64px' }}
      >
        <Label accent style={{ display: 'block', marginBottom: '12px' }}>
          Work history
        </Label>
        <Heading as="h2" size="3xl" style={{ marginBottom: '16px' }}>
          Where I've{' '}
          <Heading
            as="span"
            size="3xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            worked.
          </Heading>
        </Heading>
        <Text style={{ maxWidth: '480px' }}>
          4 years of production experience building enterprise React
          applications, leading releases and mentoring teams.
        </Text>
      </motion.div>

      <Divider style={{ marginBottom: '64px' }} />

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '140px',
            top: 0,
            bottom: 0,
            width: '0.5px',
            background: 'var(--color-border)',
          }}
        />

        {/* Experience items */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '64px',
          }}
        >
          {EXPERIENCE.map((exp) => (
            <motion.div key={exp.id} variants={item}>
              <ExperienceItem exp={exp} />
            </motion.div>
          ))}

          {/* Future placeholder — always shows at bottom */}
          <FuturePlaceholder />
        </motion.div>
      </div>
    </section>
  )
}

// -- EXPERIENCE ITEM -----------------------------------------
function ExperienceItem({ exp }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: '0',
        position: 'relative',
      }}
    >
      {/* Left — period */}
      <div
        style={{
          paddingRight: '32px',
          paddingTop: '4px',
          textAlign: 'right',
        }}
      >
        <Label
          style={{
            display: 'block',
            lineHeight: 1.6,
            color: exp.current
              ? 'var(--color-accent)'
              : 'var(--color-text-muted)',
          }}
        >
          {exp.period}
        </Label>
        <Label
          style={{
            display: 'block',
            color: 'var(--color-text-muted)',
            marginTop: '4px',
          }}
        >
          {exp.location}
        </Label>
      </div>

      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: '133px',
          top: '6px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: exp.current
            ? 'var(--color-accent)'
            : 'var(--color-bg-primary)',
          border: `2px solid ${
            exp.current ? 'var(--color-accent)' : 'var(--color-border-strong)'
          }`,
          zIndex: 1,
          // Pulse animation for current role
          animation: exp.current ? 'pulse 2.5s ease infinite' : 'none',
        }}
      />

      {/* Right — content */}
      <div style={{ paddingLeft: '32px' }}>
        {/* Role + company */}
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '6px',
              flexWrap: 'wrap',
            }}
          >
            <Heading as="h3" size="xl">
              {exp.role}
            </Heading>
            {exp.current && (
              <Badge variant="subtle" dot>
                Current
              </Badge>
            )}
          </div>
          <Text
            size="sm"
            style={{
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
            }}
          >
            {exp.company}
          </Text>
        </div>

        {/* Description */}
        <Text size="sm" style={{ marginBottom: '20px' }}>
          {exp.description}
        </Text>

        {/* Achievements */}
        <div style={{ marginBottom: '24px' }}>
          {exp.achievements.map((achievement, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '12px',
                padding: '10px 0',
                borderBottom: '0.5px solid var(--color-border)',
                alignItems: 'flex-start',
              }}
            >
              {/* Bullet */}
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  flexShrink: 0,
                  marginTop: '7px',
                }}
              />
              <Text
                size="sm"
                style={{
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {achievement}
              </Text>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {exp.tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

// -- FUTURE PLACEHOLDER --------------------------------------
// Always shows at the bottom of the timeline.
// When you join a new company — just add to data.js
// and this placeholder moves down automatically.
// ------------------------------------------------------------
function FuturePlaceholder() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        position: 'relative',
        opacity: 0.4,
      }}
    >
      {/* Period */}
      <div
        style={{
          paddingRight: '32px',
          paddingTop: '4px',
          textAlign: 'right',
        }}
      >
        <Label>Next chapter</Label>
      </div>

      {/* Dot */}
      <div
        style={{
          position: 'absolute',
          left: '133px',
          top: '6px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'transparent',
          border: '2px dashed var(--color-border-strong)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ paddingLeft: '32px' }}>
        <Heading as="h3" size="xl" style={{ marginBottom: '8px' }}>
          Your company here.
        </Heading>
        <Text size="sm">
          Open to new opportunities — let's build something great together.
        </Text>
      </div>
    </div>
  )
}

export default Experience
