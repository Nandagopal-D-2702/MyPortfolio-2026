// ============================================================
// ImageCarousel.jsx
// Auto-rotating image carousel for project cards.
// Rotates every 5 seconds, pauses on hover.
//
// Teaches:
//   - useEffect + setInterval pattern
//   - clearInterval cleanup (memory leak prevention)
//   - useState for current index tracking
//   - Pause on hover with useRef
// ============================================================

import { useState, useEffect, useRef } from 'react'

function ImageCarousel({ images = [], interval = 5000 }) {
  console.log('ImageCarousel recived images:', images)
  // -- STATE -------------------------------------------------
  // currentIndex tracks which image is showing
  // ----------------------------------------------------------
  const [currentIndex, setCurrentIndex] = useState(0)

  // -- REF ---------------------------------------------------
  // isPaused tracks hover state WITHOUT causing re-renders
  // We use useRef not useState because we don't need
  // the component to re-render when pause state changes
  // ----------------------------------------------------------
  const isPaused = useRef(false)

  // -- EFFECT ------------------------------------------------
  // Sets up the auto-rotation interval.
  // Cleans up on unmount to prevent memory leaks.
  // ----------------------------------------------------------

  useEffect(() => {
    // Don't set up interval if only one image

    if (images.length <= 1) return

    const timer = setInterval(() => {
      // Only advance if not paused
      if (!isPaused.current) {
        setCurrentIndex((prev) =>
          // When we reach the last image wrap back to 0
          prev === images.length - 1 ? 0 : prev + 1
        )
      }
    }, interval)

    // Cleanup — clear interval when component unmounts
    // Without this every mount adds a new interval
    // Navigate away and back 10 times = 10 intervals running
    return () => clearInterval(timer)
  }, [images.length, interval])
  // ↑ Dependencies — re-run if images or interval changes

  // -- GUARD -------------------------------------------------
  // If no images provided render nothing
  // ----------------------------------------------------------

  if (!images.length) return null

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '4px 4px 0 0',
        cursor: 'pointer',
        background: 'var(--color-bg-inverse)',
      }}
      // Pause rotation on hover
      onMouseEnter={() => {
        isPaused.current = true
      }}
      onMouseLeave={() => {
        isPaused.current = false
      }}
    >
      {/* Render all images, only show current one */}
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Project screenshot ${index + 1}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            // Fade in/out using opacity transition
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 600ms ease',
          }}
        />
      ))}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '6px',
            zIndex: 2,
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: index === currentIndex ? '16px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background:
                  index === currentIndex
                    ? 'rgba(250,250,247,0.9)'
                    : 'rgba(250,250,247,0.35)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 300ms ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
