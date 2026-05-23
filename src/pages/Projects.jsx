// ============================================================
// Projects.jsx
// Full projects page — all work with category filtering
// ============================================================

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { Heading, Text, Label } from '@/components/ui/Typography'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Divider from '@/components/ui/Divider'
import { fadeUp, container, item } from '@/lib/animations'
import ImageCarousel from '../components/ui/ImageCarousel'

const ALL = 'All'

function Projects() {
  const [activeFilter, setActiveFilter] = useState(ALL)

  const categories = [ALL, ...new Set(PROJECTS.map((p) => p.category))]

  const filtered =
    activeFilter === ALL
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <main className="section-padding" style={{ padding: '64px 48px' }}>
      {/* Page header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{ marginBottom: '48px' }}
      >
        <Label accent style={{ display: 'block', marginBottom: '12px' }}>
          All work
        </Label>
        <Heading as="h1" size="4xl" style={{ marginBottom: '16px' }}>
          Projects &{' '}
          <Heading
            as="span"
            size="4xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            case studies.
          </Heading>
        </Heading>
        <Text size="lg" style={{ maxWidth: '480px' }}>
          A collection of products, tools and experiments built with React and
          modern web technologies.
        </Text>
      </motion.div>

      {/* Category filters */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '2px',
              border: '0.5px solid',
              cursor: 'pointer',
              transition: 'all 150ms ease',
              appearance: 'none',
              WebkitAppearance: 'none',
              background:
                activeFilter === category
                  ? 'var(--color-text-primary)'
                  : 'transparent',
              color:
                activeFilter === category
                  ? 'var(--color-bg-primary)'
                  : 'var(--color-text-muted)',
              borderColor:
                activeFilter === category
                  ? 'var(--color-text-primary)'
                  : 'var(--color-border)',
            }}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <Divider style={{ marginBottom: '40px' }} />

      {/* Projects grid with stagger */}
      <motion.div
        key={activeFilter}
        variants={container}
        initial="hidden"
        animate="show"
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {filtered.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 0' }}>
          <Text muted>No projects in this category.</Text>
        </div>
      )}
    </main>
  )
}

// -- PROJECT CARD --------------------------------------------
function ProjectCard({ project }) {
  return (
    <Card>
      {/* Image carousel at top of card */}
      <ImageCarousel images={project.images ?? []} interval={5000} />

      <Card.Header>
        <Badge variant="subtle">{project.category}</Badge>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {project.live && (
            <Badge variant="accent" dot>
              Live
            </Badge>
          )}
          <Label>{project.year}</Label>
        </div>
      </Card.Header>
      <Card.Body>
        <Heading as="h3" size="xl" style={{ marginBottom: '10px' }}>
          {project.title}
        </Heading>
        <Text size="sm" style={{ marginBottom: '20px' }}>
          {project.description}
        </Text>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {project.tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost" size="sm">
          View Project →
        </Button>
        <Button variant="outline" size="sm">
          GitHub
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default Projects
