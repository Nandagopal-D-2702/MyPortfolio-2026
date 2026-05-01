import Button from './components/ui/Button'
import Badge from './components/ui/Badge'
import Card from './components/ui/Card'
import { Heading, Label, Text } from './components/ui/Typography'
import Divider from './components/ui/Divider'

function DesignSystem() {
  return (
    <div
      style={{
        padding: 'var(--space-10)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-10)',
        maxWidth: '600px',
      }}
    >
      {/* Section 1 - Variants */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-4)' }}>
          01 - Variants
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="inverse">Inverse</Button>
        </div>
      </div>

      {/* Section 2 - Sizes */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-4)' }}>
          02 - Sizes
        </p>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-8)',
            alignItems: 'center',
          }}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Section 3 - States */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-8)' }}>
          03 - States
        </p>
        <div
          style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap' }}
        >
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>

      {/* Section 4 - Full width */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-8' }}>
          04 - Full Width
        </p>
        <Button fullWidth>Full Width Button</Button>
      </div>

      {/* Badge variants */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-4)' }}>
          Badge - variants
        </p>
        <div
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Badge variant="accent">Shipped</Badge>
          <Badge variant="subtle">In Progress</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="dark">Featured</Badge>
          <Badge variant="muted">Archive</Badge>
        </div>
      </div>

      {/* Badge with dot - live indicator */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-8' }}>
          Badge - with dot
        </p>
        <div
          style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
        >
          <Badge variant="subtle" dot>
            Available for work
          </Badge>
          <Badge variant="accent" dot>
            Live
          </Badge>
          <Badge variant="dark" dot>
            Open source
          </Badge>
        </div>
      </div>

      {/* Simple Card */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-6)' }}>
          Card - Simple
        </p>
        <Card>
          <Card.Body>
            <p>
              This is a simple card with just a body. No header or footer
              needed.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Full compound card */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-4)' }}>
          Card - compound (header + body + footer)
        </p>
        <Card>
          <Card.Header>
            <Badge variant="subtle">Project</Badge>
            <Badge variant="accent">Live</Badge>
          </Card.Header>
          <Card.Body>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-2xl)',
                marginBottom: 'var(--space-3)',
              }}
            >
              Analytics Dashboard
            </h3>
            <p>
              A production SaaS product built with React, Node.js and
              PostgreSQL. Features real-time data and role-based access.
            </p>
          </Card.Body>
          <Card.Footer>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
            </div>
            <Button variant="ghost" size="sm">
              View Project
            </Button>
          </Card.Footer>
        </Card>
      </div>

      {/* Dark card */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-4)' }}>
          Card - dark variant
        </p>
        <Card variant="dark">
          <Card.Header>
            <Badge variant="subtle">Featured</Badge>
          </Card.Header>
          <Card.Body>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--text-2xl)',
                color: '#FAFAF7',
                marginBottom: 'var(--space-3)',
              }}
            >
              Dark Card Style
            </h3>
            <p style={{ color: '#6B6760' }}>
              Used for featured items, hero sections and high-contrast layouts.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Hoverable card */}
      <div>
        <p className="label-accent" style={{ marginBottom: 'var(--space-4)' }}>
          Card - hoverable (hover over it)
        </p>
        <Card hoverable onClick={() => alert('Card clicked!')}>
          <Card.Body>
            <p>
              This card lifts on hover and is clickable. Used for project grid
              items.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Heading Sizes */}
      <div>
        <Label
          accent
          style={{ marginBottom: 'var(--space-4)', display: 'block' }}
        >
          Heading - Sizes
        </Label>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
          }}
        >
          <Heading as="h1" size="5xl">
            Heading 5xl
          </Heading>
          <Heading as="h2" size="3xl">
            Heading 3xl
          </Heading>
          <Heading as="h3" size="2xl">
            Heading 2xl
          </Heading>
          <Heading as="h4" size="xl">
            Heading xl
          </Heading>
          <Heading as="h5" size="lg">
            Heading lg
          </Heading>
        </div>
      </div>

      {/* Italic Heading */}
      <div>
        <Label
          accent
          style={{ marginBottom: 'var(--space-4)', display: 'block' }}
        >
          Heading - italic (used in hero)
        </Label>
        <Heading as="h2" size="4xl">
          I build things{' '}
          <Heading
            as="span"
            size="4xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            people remember.
          </Heading>
        </Heading>
      </div>

      {/* Text variants */}
      <div>
        <Label
          accent
          style={{ marginBottom: 'var(--space-4)', display: 'block' }}
        >
          Text - variants
        </Label>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
          }}
        >
          <Text size="lg">Large body text - used for hero descriptions</Text>
          <Text size="base">
            Base body text - the default for all paragraphs
          </Text>
          <Text size="sm">
            Small text - used for captions and supporting copy
          </Text>
          <Text size="sm">
            Muted small text - dates, metadata, secondary info
          </Text>
        </div>
      </div>

      {/* Everything together - real card */}

      <div>
        <Label
          accent
          style={{ marginBottom: 'var(--space-4)', display: 'block' }}
        >
          All components together
        </Label>
        <Card hoverable>
          <Card.Header>
            <Badge variant="subtle">Case Study</Badge>
            <Badge variant="accent">Live</Badge>
          </Card.Header>
          <Card.Body>
            <Label
              accent
              style={{ marginBottom: 'var(--space-3)', display: 'block' }}
            >
              Featured Project - 2024
            </Label>
            <Heading
              as="h3"
              size="2xl"
              style={{ marginBottom: 'var(--space-3)' }}
            >
              Analytics Dashboard Platform
            </Heading>
            <Text>
              A production SaaS product built with React, Node.js and
              PostgreSQL. features real-time data visualisation and role-based
              access control.
            </Text>
          </Card.Body>
          <Card.Footer>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
            </div>
            <Button variant="ghost" size="sm">
              View Project
            </Button>
          </Card.Footer>
        </Card>
      </div>

      <Label accent>Divider - variants</Label>

      {/* Plain */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          Default (solid)
        </Text>
        <Divider />
      </div>

      {/* Dashed */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          Dashed
        </Text>
        <Divider variant="dashed" />
      </div>

      {/* Gradient */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          Gradient
        </Text>
        <Divider variant="gradient" />
      </div>

      {/* accent gradient */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          Gradient + accent
        </Text>
        <Divider variant="gradient" accent />
      </div>

      {/* With label */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          With label
        </Text>
        <Divider label="Featured Work" />
      </div>

      {/* With label */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          With accent label
        </Text>
        <Divider label="2025" accent />
      </div>

      {/* With label */}
      <div>
        <Text size="sm" muted style={{ marginBottom: 'var(--space-3)' }}>
          Vertical (inside flex row)
        </Text>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-6)',
            height: '48px',
          }}
        >
          <Text size="sm">Projects</Text>
          <Divider orientation="vertical" />
          <Text size="sm">Blog</Text>
          <Divider orientation="vertical" />
          <Text size="sm">Vlogs</Text>
        </div>
      </div>

      {/* All components together - real portfolio section */}
      <Divider label="Component Library Complete" accent />

      <Card>
        <Card.Header>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
            }}
          >
            <Badge variant="subtle" dot>
              Available to work
            </Badge>
          </div>
          <Badge variant="outline">2025</Badge>
        </Card.Header>
        <Card.Body>
          <Label
            accent
            style={{ display: 'block', marginBottom: 'var(--space-3)' }}
          >
            Phase 3 - Complete
          </Label>
          <Heading as='h2' size='2xl' style={{marginBottom: 'var(--space-3)'}}>
            Your component library is ready.
          </Heading>
          <Text>
            Button, Badge, Card, Typography and Divider - all built from scratch, all production grade, all yours to use across every page of the portfolio.
          </Text>
        </Card.Body>
        <Card.Footer>
          <div style={{display: 'flex', gap: 'var(--space-2)'}}>
            <Badge variant='outline'>React</Badge>
            <Badge variant='outline'>Tailwind</Badge>
            <Badge variant='outline'>CSS Tokens</Badge>
          </div>
          <Button variant='primary' size='sm'>
            Start Phase 4
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default DesignSystem
