// ============================================================
// VlogGallery.jsx
// Video gallery with thumbnail grid and play overlay.
// ============================================================

import { VLOGS } from '../../lib/data'
import { Heading, Text, Label } from '../../components/ui/Typography'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Divider from '../../components/ui/Divider'



// -- THUMBNAIL BACKGROUNDS -----------------------------------
// Each vlog gets a unique dark gradient as placeholder
// until real thumbnails are added.
// ------------------------------------------------------------

const THUMB_COLORS = [
  'linear-gradient(135deg, #1E1408 0%, #2A1E08 100%)',
  'linear-gradient(135deg, #08100D 0%, #0D1A14 100%)',
  'linear-gradient(135deg, #0D0818 0%, #160E28 100%)',
  'linear-gradient(135deg, #180808 0%, #280E0E 100%)',
]

function VlogGallery() {
  const featured = VLOGS[0]
  const rest = VLOGS.slice(1)

  return (
    <section style={{ padding: '64px 48px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
        }}
      >
        <div>
          <Label accent style={{ display: 'block', marginBottom: '12px' }}>
            On camera
          </Label>
          <Heading as="h2" size="3xl">
            Dev vlogs &{' '}
            <Heading
              as="span"
              size="3xl"
              italic
              style={{ color: 'var(--color-accent)' }}
            >
              behind the scenes.
            </Heading>
          </Heading>
        </div>
        <Button variant="outline" size="sm">
          Watch all
        </Button>
      </div>

      <Divider style={{ marginBottom: '48px' }} />

      {/* Featured vlog - Large */}
      {featured && (
        <div
          style={{
            marginBottom: '16px',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '0.5px solid var(--color-border)',
            cursor: 'pointer',
          }}
          onClick={() => window.open(featured.youtubeUrl, '_blank')}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              minHeight: '260px',
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                background: THUMB_COLORS[0],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: '260px',
              }}
            >
              <PlayButton size="large" />
              <div
                style={{ position: 'absolute', bottom: '16px', right: '16px' }}
              >
                <Badge variant="dark">{featured.duration}</Badge>
              </div>
            </div>

            {/* Info */}
            <div
              style={{
                padding: '40px',
                background: 'var(--color-bg-secondary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}
                >
                  <Badge variant="accent">EP. {featured.episode}</Badge>
                  <Badge variant="subtle">Latest</Badge>
                </div>
                <Heading as="h3" size="2xl" style={{ marginBottom: '16px' }}>
                  {featured.title}
                </Heading>
                <Text size="sm">{featured.date}</Text>
              </div>
              <Button
                variant="primary"
                size="md"
                style={{ alignSelf: 'flex-start' }}
              >
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Rest - 3 column grid */}
      <div>
        {rest.map((vlog, index) => (
          <VlogCard
            key={vlog.id}
            vlog={vlog}
            gradient={THUMB_COLORS[index + 1] ?? THUMB_COLORS[0]}
          />
        ))}
      </div>
    </section>
  )
}

// -- PLAY BUTTON ---------------------------------------------
// Reusable play icon used on all thumbnails.
// size prop controls large vs small variant.
// ------------------------------------------------------------

function PlayButton({ size = 'small' }) {
  const isLarge = size === 'large'
  return (
    <div
      style={{
        width: isLarge ? '56px' : '36px',
        height: isLarge ? '56px' : '36px',
        borderRadius: '50%',
        background: 'rgba(250,250,247,0.15)',
        border: '0.5px solid rgba(250,250,247,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 200ms ease',
        backdropFilter: 'blur(4px)',
      }}
    >
      {/* Triangle play icon using CSS borders */}
      <div
        style={{
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: isLarge ? '8px 0 8px 16px' : '5px 0 5px 10px',
          borderColor:
            'transparent transparent transparent rgba(250,250,247,0.8)',
          marginLeft: isLarge ? '4px' : '2px',
        }}
      />
    </div>
  )
}

// -- VLOG CARD -----------------------------------------------
// Individual vlog card for the grid.
// ------------------------------------------------------------

function VlogCard({ vlog, gradient }) {
  return (
    <div
      style={{
        borderRadius: '4px',
        overflow: 'hidden',
        border: '0.5px solid var(--color-border)',
        cursor: 'pointer',
        transition: 'transform 200ms ease',
      }}
      onClick={() => window.open(vlog.youtubeUrl, '_blank')}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          background: gradient,
          height: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <PlayButton size="small" />
        <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
          <Badge variant="dark">{vlog.duration}</Badge>
        </div>
      </div>

      {/* Info */}
      <div
        style={{
          padding: '16px',
          background: 'var(--color-bg-primary)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <Badge variant="subtle">EP. {vlog.episode}</Badge>
          <Label>{vlog.date}</Label>
        </div>
        <Heading as="h4" size="lg" style={{ lineHeight: 1.3 }}>
          {vlog.title}
        </Heading>
      </div>
    </div>
  )
}

export default VlogGallery
