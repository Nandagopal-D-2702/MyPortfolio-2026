// ============================================================
// ProjectGrid.jsx
// Displays portfolio projects in a magazine-style grid.
// Featured project takes full width, rest in 3 columns.
// ============================================================

import { PROJECTS } from '@/lib/data'
import { motion } from 'framer-motion'
import { Heading, Text, Label } from '../../components/ui/Typography'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Divider from '../../components/ui/Divider'
import Card from '../../components/ui/Card'
import { fadeUp, container, item, scaleUp } from '../../lib/animations'

function ProjectGrid() {
  const featured = PROJECTS.find((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section style={{ padding: '64px 48px' }}>
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
        }}
      >
        <div>
          <Label accent style={{ display: 'block', marginBottom: '12px' }}>
            Selected work
          </Label>
          <Heading as="h2" size="3xl">
            Projects that{' '}
            <Heading
              as="span"
              size="3xl"
              italic
              style={{ color: 'var(--color-accent)' }}
            >
              matter.
            </Heading>
          </Heading>
        </div>
        <Button variant="outline" size="sm">
          View all work
        </Button>
      </motion.div>

      <Divider style={{ marginBottom: '48px' }} />

      {/* Featured project - full width */}
      {featured && (
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Card variant="dark" hoverable style={{ marginBottom: '16px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '280px',
              }}
            >
              {/* Left - info */}
              <div
                style={{
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRight: '0.5px solid rgba(250,250,247,0.06)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      marginBottom: '20px',
                    }}
                  >
                    <Badge variant="subtle">{featured.category}</Badge>
                    {featured.live && (
                      <Badge variant="accent" dot>
                        Live
                      </Badge>
                    )}
                  </div>
                  <Heading
                    as="h3"
                    size="3xl"
                    style={{ color: '#FAFAF7', marginBottom: '16px' }}
                  >
                    {featured.title}
                  </Heading>
                  <Text
                    style={{
                      color: 'rgba(250,250,247,0.5)',
                      maxWidth: '320px',
                    }}
                  >
                    {featured.description}
                  </Text>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button variant="primary" size="sm">
                    View Project
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{ color: 'rgba(250,250,247,0.5)' }}
                  >
                    Github
                  </Button>
                </div>
              </div>

              {/* Right - tech + year */}
              <div
                style={{
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Label style={{ color: 'rgba(250,250,247,0.2)' }}>
                  Tech Stack
                </Label>
                <div>
                  {featured.tech.map((t) => (
                    <div
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        color: 'rgba(250,250,247,0.5)',
                        padding: '10px 0',
                        borderBottom: '0.5px solid rgba(250,250,247,0.06)',
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <Label style={{ color: 'rgba(250,250,247,0.2)' }}>
                  {featured.year}
                </Label>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Rest of projects - 3 column grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

// -- PROJECT CARD --------------------------------------------
// Internal component — only ProjectGrid uses this.
// Receives a single project object as a prop.
// -----------------------------------------------------------
function ProjectCard({ project }) {
  return (
    <Card hoverable>
      <Card.Header>
        <Badge variant="subtle">{project.category}</Badge>
        <Label>{project.year}</Label>
      </Card.Header>
      <Card.Body>
        <Heading as="h3" size="xl" style={{ marginBottom: '10px' }}>
          {project.title}
        </Heading>
        <Text size="sm">{project.description}</Text>
      </Card.Body>
      <Card.Footer>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {project.tech.slice(0, 2).map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
        <Button variant="ghost" size="sm">
          View
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default ProjectGrid
