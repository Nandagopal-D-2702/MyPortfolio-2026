// ============================================================
// Card.jsx
// Flexible container component using the compound
// component pattern — Card.Header, Card.Body, Card.Footer
//
// Usage:
//   <Card>
//     <Card.Header>...</Card.Header>
//     <Card.Body>...</Card.Body>
//     <Card.Footer>...</Card.Footer>
//   </Card>
//
//   Or simply:
//   <Card>
//     <p>Any content</p>
//   </Card>
// ============================================================

// -- VARIANTS ------------------------------------------------

const VARIANTS = {
  default: {
    base: 'bg-[#FAFAF7]',
    border: 'border border-[#D4D1CC]',
  },
  dark: {
    base: 'bg-[#1A1814]',
    border: 'border border-[rgba(255,255,255,0.06)]',
  },
  secondary: {
    base: 'bg-[#F2EDE4]',
    border: 'border border-[#D4D1CC]',
  },
  ghost: {
    base: 'bg-transparent',
    border: 'border border-[#D4D1CC]',
  },
}

// --- MAIN CARD ------------------------------------------------

function Card({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  onClick,
}) {
  const variantConfig = VARIANTS[variant] ?? VARIANTS.default

  const classes = [
    'rounded-[4px]',
    'overflow-hidden',
    variantConfig.base,
    variantConfig.border,
    hoverable
      ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      onClick={onClick}
      // IF card is clickable, make it keyword accessible too
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  )
}

// -- SUB COMPONENTS ------------------------------------------
// These are attached to Card so you access them
// as Card.Header, Card.Body, Card.Footer
// This is the compound component pattern.
// ------------------------------------------------------------

Card.Header = function CardHeader({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        padding: 'var(--space-5) var(--space-6)',
        borderBottom: '0.5px solid rgba(17,17,16,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 'var(--space-4)',
      }}
    >
      {children}
    </div>
  )
}

Card.Body = function CardBody({ children, className = '' }) {
  return (
    <div className={className} style={{ padding: 'var(--space-6)' }}>
      {children}
    </div>
  )
}

Card.Footer = function CardFooter({ children, className = '' }) {
  return (
    <div
      className={className}
      style={{
        padding: 'var(--space-4) var(--space-6)',
        borderTop: '0.5px solid rgba(17,17,16,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      {children}
    </div>
  )
}

export default Card
