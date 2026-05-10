// ============================================================
// Hero.jsx
// Main landing section — the first thing visitors see.
// Magazine editorial layout with cinematic feel.
// ============================================================

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import { Heading, Text, Label } from '../../components/ui/Typography'
import Divider from '../../components/ui/Divider'
import {
  fadeUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  container,
  item,
} from '../../lib/animations'

// -- DATA ----------------------------------------------------
// Keeping data separate from JSX is a good habit.
// Later this can come from an API or CMS.
// ------------------------------------------------------------

const STATS = [
  { num: '4+', label: 'Projects' },
  { num: '1+', label: 'Articles' },
  { num: '4yr', label: 'Experience' },
]

const TICKER_ITEMS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'Frame Motion',
  'Open to Work',
  'Banglore IN',
]

function Hero() {
  return (
    <section>
      {/* -- MAIN GRID --------------------------------------- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '520px',
          borderBottom: '0.5px solid var(--color-border)',
        }}
      >
        {/* LEFT COLUMN */}
        <motion.div
          variant={slideInLeft}
          initial="hidden"
          animate="show"
          style={{
            padding: '56px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '0.5px solid var(--color-border)',
          }}
        >
          {/* Top - eyebrow + headline */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  background: 'var(--color-accent)',
                }}
              />
              <Label accent>Portfolio - 2026</Label>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
            >
              <Heading as="h1" size="5xl" style={{ marginBottom: '16px' }}>
                I write <br />
                code &{' '}
                <Heading
                  as="span"
                  size="5xl"
                  italic
                  style={{ color: 'var(--color-accent)' }}
                >
                  tell
                </Heading>
                <br />
                stories.
              </Heading>
            </motion.div>
          </div>

          {/* Bottom - description + CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
          >
            <Text
              size="base"
              style={{ marginBottom: '28px', maxWidth: '340px' }}
            >
              Production web products crafted with intention. Every build
              documented - in writing and on camera.
            </Text>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Link to="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="md">
                  View Projects
                </Button>
              </Link>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="md">
                  Read Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {/* Featured project card - dark */}
          <div
            style={{
              flex: 1,
              background: 'var(--color-bg-inverse)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: '0.5px solid var(--color-border)',
            }}
          >
            {/* Subtle grid overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(rgba(250,250,247,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(250,250,247,0.03) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
                pointerEvents: 'none',
              }}
            />

            {/* Card top */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                position: 'relative',
              }}
            >
              <Label style={{ color: 'rgba(250,250,247,0.25)' }}>
                Featured project - 2024
              </Label>
              <Badge variant="subtle" dot>
                Live
              </Badge>
            </div>

            {/* Card title */}
            <div style={{ position: 'relative' }}>
              <Heading
                as="h2"
                size="3xl"
                style={{ color: '#FAFAF7', marginBottom: '20px' }}
              >
                Analytics{' '}
                <Heading
                  as="span"
                  size="3xl"
                  italic
                  style={{ color: 'var(--color-accent)' }}
                >
                  Dashboard
                </Heading>
                <br />
                Platform
              </Heading>

              {/* Tech tags */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['React', 'Node.js', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      letterSpacing: '0.1em',
                      color: 'rgba(250,250,247,0.3)',
                      border: '0.5px solid rgba(250,250,247,0.1)',
                      padding: '3px 8px',
                      borderRadius: '2px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row with stagger*/}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={item}
                style={{
                  padding: '20px 24px',
                  borderRight:
                    index < STATS.length - 1
                      ? '0.5px solid var(--color-border)'
                      : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: '4px',
                  }}
                >
                  {stat.num}
                </div>
                <Label>{stat.label}</Label>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ---- TICKER TAPE ------------------------------------- */}
      <div
        style={{
          background: 'var(--color-accent)',
          overflow: 'hidden',
          padding: '10px 0',
          borderBottom: '0.5px solid var(--color-border)',
        }}
      >
        <div
          style={{
            display: 'flex',
            animation: 'ticker 20s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
            <span
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '20px',
                padding: '0 28px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,247,0.85)',
              }}
            >
              {item}
              <span
                style={{
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: 'rgba(250,250,247,0.4)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
