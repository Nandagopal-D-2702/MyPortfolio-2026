import Button from './components/ui/Button'
import Badge from './components/ui/Badge'
import Card from './components/ui/Card'

function App() {
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
        <p className='label-accent' style={{marginBottom: 'var(--space-4)'}}>
          Card - hoverable (hover over it)
        </p>
        <Card hoverable onClick={() => alert('Card clicked!')}>
          <Card.Body>
              <p>This card lifts on hover and is clickable. Used for project grid items.</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default App
