// ============================================================
// Vlogs.jsx
// Full vlogs page — all episodes
// ============================================================

import { color, motion } from 'framer-motion'
import { VLOGS } from '@/lib/data'
import { Heading, Text, Label } from '@/components/ui/Typography'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import { fadeUp, container, item } from '@/lib/animations'

const THUMB_COLORS = [
  'linear-gradient(135deg, #1E1408 0%, #2A1E08 100%)',
  'linear-gradient(135deg, #08100D 0%, #0D1A14 100%)',
  'linear-gradient(135deg, #0D0818 0%, #160E28 100%)',
  'linear-gradient(135deg, #180808 0%, #280E0E 100%)',
]

function Vlogs() {
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
          On camera
        </Label>
        <Heading as="h1" size="4xl" style={{ marginBottom: '12px' }}>
          Dev vlogs &{' '}
          <Heading
            as="span"
            size="4xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            behind the scenes.
          </Heading>
        </Heading>
        <Text>
          Weekly videos documenting the real process of building products - the
          wins, the bugs and everything in between.
        </Text>
      </motion.div>

      <Divider style={{ marginBottom: '48px' }} />

      {/* All vlogs grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="vlogs-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {VLOGS.map((vlog, index) => (
          <motion.div key={vlog.id} variants={item}>
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
                  background: THUMB_COLORS[index % THUMB_COLORS.length],
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Play Button */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(250,250,247,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderStyle: 'solid',
                      borderWidth: '6px 0 6px 12px',
                      borderColor:
                        'transparent transparent transparent rgba(250,250,247,0.8)',
                      marginLeft: '3px',
                    }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                  }}
                >
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
                <Heading
                  as="h3"
                  size="lg"
                  style={{ lineHeight: 1.3, marginBottom: '12px' }}
                >
                  {vlog.title}
                </Heading>
                <Button variant="ghost" size="sm">
                  Watch →
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
export default Vlogs
