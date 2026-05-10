// ============================================================
// animations.js
// Shared Framer Motion variants used across the portfolio.
// Centralising variants ensures consistent feel everywhere.
// ============================================================

// -- FADE UP -------------------------------------------------
// Used for section entrances and hero content
// ------------------------------------------------------------

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// -- FADE IN -------------------------------------------------
// Simple opacity fade — used for overlays and images
// ------------------------------------------------------------
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayedChildren: 0.1,
    },
  },
}

// -- CONTAINER -----------------------------------------------
// Parent variant that staggers children animations.
// Wrap a list with this and children animate one by one.
// ------------------------------------------------------------
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayedChildren: 0.1 },
  },
}

// -- ITEM ----------------------------------------------------
// Child variant — used inside container for stagger effect
// ------------------------------------------------------------
export const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// -- SLIDE IN FROM LEFT --------------------------------------
// Used for navbar logo and left-side content
// ------------------------------------------------------------
export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// -- SLIDE IN FROM RIGHT -------------------------------------
// Used for right-side content
// ------------------------------------------------------------
export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// -- SCALE UP ------------------------------------------------
// Used for cards and featured items
// ------------------------------------------------------------
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
