// ============================================================
// Typography.jsx
// Polymorphic text components using the `as` prop pattern.
// Renders the correct HTML element while keeping
// visual styles separate from semantic meaning.
//
// Components exported:
//   Heading — for all heading levels h1–h6
//   Text    — for body copy, descriptions
//   Label   — for eyebrow labels, tags, mono text
//
// Usage:
//   <Heading as="h1" size="5xl">Page Title</Heading>
//   <Text size="sm" muted>Supporting copy</Text>
//   <Label accent>Portfolio — 2025</Label>
// ============================================================

// -- SIZE MAP ------------------------------------------------

const HEADING_SIZES = {
  '6xl': 'var(--text-6xl)',
  '5xl': 'var(--text-5xl)',
  '4xl': 'var(--text-4xl)',
  '3xl': 'var(--text-3xl)',
  '2xl': 'var(--text-2xl)',
  'xl': 'var(--text-xl)',
  'lg': 'var(--text-lg)',
}

const TEXT_SIZES = {
  'lg': 'var(--text-lg)',
  'base': 'var(--text-base)',
  'sm': 'var(--text-sm)',
  'xs': 'var(--text-xs)',
}

// -- HEADING -------------------------------------------------
// Polymorphic — renders as whatever element you pass via `as`
// Defaults to h2 if nothing is specified
// ------------------------------------------------------------

function Heading({
  children,
  as: Element = 'h2',
  size = '2xl',
  italic = false,
  className = '',
  style = {},
}) {
  return (
    <Element
      className={className}
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: HEADING_SIZES[size] ?? 'var(--text-2xl)',
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        fontStyle: italic ? 'italic' : 'normal',
        ...style,
      }}
    >
      {children}
    </Element>
  )
}

// -- TEXT ----------------------------------------------------
// For body copy, descriptions, supporting text
// ------------------------------------------------------------

function Text({
  children,
  size = 'base',
  muted = false,
  className = '',
  style = {},
}) {
  return (
    <p
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: TEXT_SIZES[size] ?? 'var(--text-base)',
        color: muted
          ? 'var(--color-text-muted)'
          : 'var(--color-text-secondary)',
        lineHeight: 1.75,
        fontWeight: 300,
        ...style,
      }}
    >
      {children}
    </p>
  )
}

// -- LABEL ---------------------------------------------------
// For eyebrow labels, category tags, mono UI text
// ------------------------------------------------------------

function Label({ children, accent = false, className = '', style = {} }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: accent ? 'var(--color-accent)' : 'var(--color-text-muted)',
        fontWeight: 400,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

// -- EXPORTS -------------------------------------------------
// We export all three individually AND as a namespace so both import styles work:
//   import { Heading, Text, Label } from '@/components/ui/Typography'
//   import Typography from '@/components/ui/Typography'
//   <Typography.Heading>...</Typography.Heading>
// ------------------------------------------------------------

const Typography = { Heading, Text, Label }

export { Heading, Text, Label }
export default Typography
