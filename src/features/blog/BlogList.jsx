// ============================================================
// BlogList.jsx
// Displays blog posts with category filtering.
// Teaches: useState, derived state, filtering patterns
// ============================================================

import { useState } from 'react'
import { BLOG_POSTS } from '@/lib/data'
import { motion } from 'framer-motion'
import { Heading, Text, Label } from '@/components/ui/Typography'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Divider from '../../components/ui/Divider'
import Card from '../../components/ui/Card'
import Blog from '../../pages/Blog'
import { fadeUp, container, item } from '@/lib/animations'

// -- CATEGORIES ----------------------------------------------
// Derived from data — not hardcoded.
// If you add a new category in data.js it appears
// automatically here. No manual updates needed.
// ------------------------------------------------------------

const ALL = 'All'

function BlogList() {
  // -- STATE -------------------------------------------------
  // activeFilter controls which category is selected.
  // When it changes, React re-renders and the filtered
  // list updates automatically.
  // ----------------------------------------------------------

  const [activeFilter, setActiveFilter] = useState(ALL)

  // -- DERIVED STATE -----------------------------------------
  // Categories are computed from data — not stored in state.
  // This is important — never store in state what you can
  // compute from existing state or props.
  // ----------------------------------------------------------

  const categories = [ALL, ...new Set(BLOG_POSTS.map((post) => post.category))]

  // -- FILTERING ---------------------------------------------
  // Also derived — computed fresh on every render.
  // Simple, clean, no side effects.
  // ----------------------------------------------------------

  const filtered =
    activeFilter === ALL
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeFilter)

  return (
    <section style={{ padding: '64px 48px' }}>
      {/* Section Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '48px',
        }}
      >
        <div>
          <Label accent style={{ display: 'block', marginBottom: '12px' }}>
            Writing
          </Label>
          <Heading as="h2" size="3xl">
            Thoughts &{' '}
            <Heading as="span" size="3xl" italic>
              ideas.
            </Heading>
          </Heading>
        </div>
        <Button variant="outline" size="sm">
          View all posts
        </Button>
      </motion.div>

      {/* Category filters */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: '2px',
              border: '0.5px solid',
              cursor: 'pointer',
              transition: 'all 150ms ease',
              // Active vs inactive styles
              background:
                activeFilter === category
                  ? 'var(--color-text-primary)'
                  : 'transparent',
              color:
                activeFilter === category
                  ? 'var(--color-bg-primary)'
                  : 'var(--color-text-muted)',
              borderColor:
                activeFilter === category
                  ? 'var(--color-text-primary)'
                  : 'var(--color-border)',
              appearance: 'none',
              WebkitAppearance: 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <Divider style={{ marginBottom: '40px' }} />

      {/* Blog posts grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true , amount: 0.1}}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        {filtered.map((post) => (
          <motion.div key={post.id} variants={item}>
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 0' }}>
          <Text muted>No posts found in this category.</Text>
        </div>
      )}
    </section>
  )
}

// -- BLOG CARD -----------------------------------------------
// Internal component — only BlogList uses this.
// ------------------------------------------------------------
function BlogCard({ post }) {
  return (
    <Card hoverable>
      <Card.Body>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <Badge variant="subtle">{post.category}</Badge>
          <Label>{post.readTime}</Label>
        </div>

        <Heading as="h3" size="xl" style={{ marginBottom: '10px' }}>
          {post.title}
        </Heading>

        <Text size="sm" style={{ marginBottom: '20px' }}>
          {post.excerpt}
        </Text>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Label>{post.date}</Label>
          <Button variant="ghost" size="sm">
            Read →
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BlogList
