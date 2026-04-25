// ============================================================
// Badge.jsx
// Small label component for status indicators,
// tags, categories and availability signals.
//
// Usage:
//   <Badge variant="accent">Available</Badge>
//   <Badge variant="subtle" dot>Open to work</Badge>
//   <Badge variant="outline">React</Badge>
// ============================================================

const VARIANTS = {
  accent: {
    base: 'bg-[#D04E2A] text-[#FAFAF7]',
  },
  subtle: {
    base: 'bg-[rgba(208,78,42,0.1)] text-[#D04E2A] border border-[rgba(208,78,42,0.25)]',
  },
  outline: {
    base: 'bg-transparent text-[#6B6760] border border-[#D4D1CC]',
  },
  dark: {
    base: 'bg-[#1A1814] text-[#FAFAF7]',
  },
  muted: {
    base: 'bg-[#F2EDE4] text-[#6B6760]',
  },
}

function Badge({ children, variant = 'subtle', dot = false, className = '' }) {
  const variantConfig = VARIANTS[variant] ?? VARIANTS.subtle
  const classes = [
    // Layout
    'inline-flex items-center gap-[6px]',
    // Typograohy
    'uppercase tracking-[0.14em]',
    // Shape
    'rounded-[2px]',
    variantConfig.base,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={classes}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        fontWeight: 400,
        padding: '4px 10px',
      }}
    >
      {/* Pilsing dot - used for live/available indicators */}
      {dot && <Dot />}
      {children}
    </span>
  )
}

// -- DOT -----------------------------------------------------
// Animated pulse dot for "live" or "available" status.
// Internal — only Badge uses this.
// ------------------------------------------------------------

function Dot() {
  return (
    <span
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'currentColor',
        display: 'inline-block',
        flexShrink: 0,
        animation: 'pulse 2.5s ease infinite',
      }}
      aria-hidden="true"
    />
  )
}

export default Badge
