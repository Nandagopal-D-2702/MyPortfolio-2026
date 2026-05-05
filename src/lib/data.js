// ============================================================
// data.js
// Single source of truth for all portfolio content.
// Update this file to add/edit projects, posts and vlogs.
// In a production app this would come from a CMS or API.
// ============================================================


// -- PROJECTS ------------------------------------------------
export const PROJECTS = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    subtitle: 'Platform',
    description:
      'A production SaaS product with real-time data visualisation, role-based access control and a custom component library.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    category: 'SaaS',
    year: '2024',
    featured: true,
    live: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Dev Tracker',
    subtitle: 'Mobile App',
    description:
      'A React Native productivity app for developers to track daily coding sessions, goals and streaks.',
    tech: ['React Native', 'Firebase', 'Expo'],
    category: 'Mobile',
    year: '2024',
    featured: false,
    live: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'UI Component Kit',
    subtitle: 'Open Source',
    description:
      'A production-grade React component library with design tokens, accessibility support and full documentation.',
    tech: ['React', 'TypeScript', 'Storybook'],
    category: 'Open Source',
    year: '2023',
    featured: false,
    live: false,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    subtitle: 'Full Stack',
    description:
      'A headless CMS built specifically for developer portfolios with markdown support and live preview.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    category: 'Full Stack',
    year: '2023',
    featured: false,
    live: false,
    liveUrl: '#',
    githubUrl: '#',
  },
]


// -- BLOG POSTS ----------------------------------------------
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building scalable component architecture in React',
    excerpt:
      'How to structure your components so they scale from 10 to 100 without becoming a mess.',
    category: 'React',
    date: 'Mar 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'What shipping my first SaaS taught me',
    excerpt:
      'Lessons from taking a product from idea to paying customers — the honest version.',
    category: 'Career',
    date: 'Feb 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Why every developer should understand design systems',
    excerpt:
      'Design tokens, component APIs and visual consistency — why this knowledge makes you a better engineer.',
    category: 'Design',
    date: 'Jan 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'The React hooks I use in every project',
    excerpt:
      'A practical guide to useCallback, useMemo and custom hooks that actually solve real problems.',
    category: 'React',
    date: 'Dec 2024',
    readTime: '7 min read',
    featured: false,
  },
]


// -- VLOGS ---------------------------------------------------
export const VLOGS = [
  {
    id: 1,
    episode: 24,
    title: 'Full day coding a SaaS feature from scratch',
    duration: '18:42',
    date: 'Apr 2025',
    thumbnail: null,
    youtubeUrl: '#',
  },
  {
    id: 2,
    episode: 23,
    title: 'My complete dev environment setup — 2025',
    duration: '12:15',
    date: 'Mar 2025',
    thumbnail: null,
    youtubeUrl: '#',
  },
  {
    id: 3,
    episode: 22,
    title: 'Live code review — real project feedback',
    duration: '24:08',
    date: 'Mar 2025',
    thumbnail: null,
    youtubeUrl: '#',
  },
  {
    id: 4,
    episode: 21,
    title: 'Building a design system from zero',
    duration: '31:20',
    date: 'Feb 2025',
    thumbnail: null,
    youtubeUrl: '#',
  },
]


// -- EXPERIENCE ----------------------------------------------
export const EXPERIENCE = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Your Company',
    location: 'Bangalore, IN',
    period: '2023 — Present',
    description:
      'Building production React applications, design systems and developer tooling for a fast-growing product team.',
    tech: ['React', 'TypeScript', 'Node.js'],
    current: true,
  },
  {
    id: 2,
    role: 'UI Developer',
    company: 'Previous Company',
    location: 'Bangalore, IN',
    period: '2022 — 2023',
    description:
      'Built and maintained component libraries, improved performance and led the migration from CSS modules to Tailwind.',
    tech: ['React', 'Tailwind', 'JavaScript'],
    current: false,
  },
]