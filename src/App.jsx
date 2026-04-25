import Button from './components/ui/Button'
import Badge from './components/ui/Badge'

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
        <div style={{display:'flex', gap:'var(--space-4)', flexWrap: 'wrap'}}>
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
    </div>
  )
}

export default App
