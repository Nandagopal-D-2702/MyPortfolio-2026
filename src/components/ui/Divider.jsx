// ============================================================
// Divider.jsx
// Visual separator component for sections and layouts.
// Supports horizontal/vertical orientation, labels,
// and multiple visual variants.
//
// Usage:
//   <Divider />
//   <Divider label="Featured Work" />
//   <Divider variant="gradient" />
//   <Divider orientation="vertical" />
// ============================================================

// -- VARIANTS ------------------------------------------------

const VARIANTS = {
  solid: { borderStyle: 'solid' },
  dashed: { borderStyle: 'dashed' },
  dotted: { borderStyle: 'dotted' },
}

// -- COMPONENT -----------------------------------------------
function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  accent = false,
  className = '',
  style = {},
}) {
  const color = accent ? 'var(--color-accent)' : 'var(--color-border)'

  // -- VERTICAL ----------------------------------------------
  if (orientation === 'vertical') {
    return (
      <div
        className={className}
        style={{
          width: '0.5px',
          alignSelf: 'stretch',
          background: color,
          flexShrink: 0,
          ...style,
        }}
        role="seperator"
        aria-orientation="vertical"
      />
    )
  }

  // -- HORIZONTAL WITH LABEL ---------------------------------
  if (label) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-4)',
          ...style,
        }}
        role="separator"
        aria-label={label}
      >
        <Line color={color} variant={variant} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            latterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: accent ? 'var(--color-accent)' : 'var(--color-text-muted)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {label}
        </span>
        <Line color={color} variant={variant} />
      </div>
    )
  }

  // -- GRADIENT VARIANT --------------------------------------
  if (variant === 'gradient') {
    return (
      <div
        className={className}
        style={{
          height: '0.5px',
          background: `linear-gradient(to right, transparent, ${accent ? 'var(--color-accent)' : 'var(--color-border-strong)'}, transparent)`,
          ...style,
        }}
        role="seperator"
      />
    )
  }

  // -- PLAIN HORIZONTAL --------------------------------------
  return (
    <hr
      className={className}
      style={{
        border: 'none',
        borderTop: `0.5px ${VARIANTS[variant]?.borderStyle ?? 'solid'} ${color}`,
        width: '100%',
        ...style,
      }}
      role="seperator"
    />
  )
}

// -- INTERNAL SUB COMPONENT ----------------------------------
// Line is used inside the label divider on both sides.
// Internal only — not exported.
// ------------------------------------------------------------

function Line({ color, variant }) {
  return (
    <div
      style={{
        flex: 1,
        height: '0.5px',
        background: color,
        borderStyle: VARIANTS[variant]?.borderStyle ?? 'solid',
      }}
    />
  )
}

export default Divider
