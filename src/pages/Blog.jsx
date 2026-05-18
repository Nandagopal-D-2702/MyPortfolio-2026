// ============================================================
// Blog.jsx
// Full blog page with category filter and search
// ============================================================

import { useState } from 'react'
import { color, motion } from 'framer-motion'
import { BLOG_POSTS } from '@/lib/data'
import { Heading, Text, Label } from '@/components/ui/Typography'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Divider from '@/components/ui/Divider'
import { fadeUp, container, item } from '@/lib/animations'

const ALL = 'All'

function Blog() {
  const [activeFilter, setActiveFilter] = useState(ALL)
  const [search, setSearch] = useState('')

  const categories = [ALL, ...new Set(BLOG_POSTS.map((p) => p.category))]

  // Filter by category And search
  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeFilter === ALL || post.category === activeFilter
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          Writing
        </Label>
        <Heading as="span" size="4xl" style={{ marginBottom: '16px' }}>
          Thoughts &{' '}
          <Heading
            as="h1"
            size="4xl"
            italic
            style={{ color: 'var(--color-accent)' }}
          >
            ideas.
          </Heading>
        </Heading>
        <Text size="lg" style={{ maxWidth: '480px' }}>
          Writing about React, design systems, carrer growth and journey of
          building in public.
        </Text>
      </motion.div>

      {/* Search + filters row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}
      >
        {/* Search input */}
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.06em',
            padding: '8px 16px',
            border: '0.5px solid var(--color-border)',
            borderRadius: '2px',
            background: 'transparent',
            color: 'var(--color-text-primary)',
            outline: 'none',
            width: '240px',
            transition: 'border-color 150ms ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)'
          }}
        />

        {/* Category filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                appearance: 'none',
                WebkitAppearance: 'none',
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
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <Divider style={{ marginBottom: '40px' }} />

      {/* Blog posts */}
      <motion.div
        key={`${activeFilter}-${search}`}
        variants={container}
        initial="hidden"
        animate="show"
        className="blog-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        {filtered.map((post) => (
          <motion.div key={post.id} variants={item}>
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
                  <Label>{post.data}</Label>
                  <Button variant="ghost" size="sm">
                    Read →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 0' }}>
          <Text>No articles found. Try a different search</Text>
        </div>
      )}
    </main>
  )
}

export default Blog
