// ============================================================
// Button.jsx
// Production-grade button component with variants,
// sizes, states and full accessibility support.
//
// Usage:
//   <Button variant="primary" size="md" onClick={fn}>
//     Click me
//   </Button>
// ============================================================

// -- VARIANTS ------------------------------------------------
// Defined outside the component so they are never
// recreated on every render. These are constants.
// ------------------------------------------------------------

const VARIANTS = {
  primary: {
    base: 'bg-[#D04E2A] text-[#FAFAFA]',
    hover: 'hover:bg-[#B8622A]',
  },
  outline: {
    base: 'bg-transparent text-[#1A1814] border border-[#A8A49E]',
    hover: 'hover:bg-[#F2EDE4]',
  },
  ghost: {
    base: 'bg-transparent text-[#6B6760]',
    hover: 'hover:text-[#1A1814] hover:bg-[#F2EDE4]',
  },
  inverse: {
    base: 'bg-[#1A1814] text-[#FAFAF7]',
    hover: 'hover:opacity-80',
  },
}

// -- SIZES ---------------------------------------------------
// Each size has className for text/tracking
// and style for padding (CSS variables don't
// work reliably in Tailwind v4 arbitrary values)
// ------------------------------------------------------------

const SIZES = {
  sm: {
    className: 'text-[11px] tracking-[0.12em]',
    style: { padding: '8px 16px' },
  },
  md: {
    className: 'text-[11px] tracking-[0.12em]',
    style: { padding: '12px 24px' },
  },
  lg: {
    className: 'text-[13px] tracking-[0.12em]',
    style: { padding: '16px 32px' },
  },
}

function Button({
  children,
  variant = 'primary',
  size = 'sm',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}) {
  // Look up variant and size config
  // ?? is the nullish coalescing operator —
  // if variant doesn't exist in VARIANTS, fall back to primary
  const variantConfig = VARIANTS[variant] ?? VARIANTS.primary
  const sizeConfig = SIZES[size] ?? SIZES.sm

  // Build class string conditionally
  // filter(Boolean) removes empty strings before joining
  // so we never get double spaces in the class name
  const classes = [
    // Layout
    'inline-flex items-center justify-center gap-2',
    // Typograohy
    'uppercase',
    // Shape
    'rounded-[2px]',
    // Interaction
    'cursor-pointer select-none',
    // Animation
    'transition-all duration-150',
    // Reset browser defaults
    'border-0 outline-none',
    // Variant styles
    variantConfig.base,
    variantConfig.hover,
    // Size styles
    sizeConfig.className,
    // Conditional
    fullWidth ? 'w-full' : '',
    disabled || loading
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '',
    // Allow external overrides
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      style={{
        ...sizeConfig.style,
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
      }}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
    >
      {/* Show spinner when loading */}
      {loading && <Spinner />}
      {children}
    </button>
  )
}

// -- SPINNER -------------------------------------------------
// Internal component — only Button uses this.
// Not exported because nothing else needs it.
// ------------------------------------------------------------

function Spinner() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ animation: 'spin 0.8s linear infinite', flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle
        cx="7"
        cy="7"
        r="5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="20"
        strokeDashoffset="10"
        opacity="0.3"
      />
      <path
        d="M7 2a5 5 0 0 1 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Button
