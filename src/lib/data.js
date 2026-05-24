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
    // Add real screenshot URLs or use placeholder service
    images: [
      'https://placehold.co/600x400/1A1814/FAFAF7?text=Analytics+Dashboard',
      'https://placehold.co/600x400/D04E2A/FAFAF7?text=Dashboard+View',
      'https://placehold.co/600x400/2A1814/FAFAF7?text=Analytics+Charts',
    ],
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
    images: [
      'https://placehold.co/600x400/1A1814/FAFAF7?text=Dev+Tracker',
      'https://placehold.co/600x400/D04E2A/FAFAF7?text=Tracker+Stats',
      'https://placehold.co/600x400/142A1A/FAFAF7?text=Daily+Goals',
    ],
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
    images: [
      'https://placehold.co/600x400/1A1814/FAFAF7?text=Component+Kit',
      'https://placehold.co/600x400/D04E2A/FAFAF7?text=UI+Components',
      'https://placehold.co/600x400/1A1428/FAFAF7?text=Design+Tokens',
    ],
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
    images: [
      'https://placehold.co/600x400/1A1814/FAFAF7?text=Portfolio+CMS',
      'https://placehold.co/600x400/D04E2A/FAFAF7?text=CMS+Editor',
      'https://placehold.co/600x400/281A14/FAFAF7?text=Live+Preview',
    ],
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
    role: 'Software Engineer — Frontend',
    company: 'Your Company Name',
    location: 'Bangalore, IN',
    period: '2021 — Present',
    current: true,
    description:
      'Building production-grade React applications for enterprise clients across multiple domains.',
    achievements: [
      'Delivered 10+ client-facing production releases with zero critical post-deployment bugs',
      'Resolved 50+ frontend defects in Jira, improving application stability for enterprise projects',
      'Led end-to-end development of 20+ user stories in Agile sprints with 95% on-time delivery',
      'Optimized React component rendering using memoization and lazy loading, reducing page load time by 25%',
      'Integrated RESTful APIs with Axios, implementing error handling and data validation',
      'Conducted cross-browser testing across Chrome, Firefox and Safari, resolving compatibility issues',
      'Mentored 2 junior developers on React best practices, reducing onboarding time by 30%',
      'Served as Resource Lead for multiple releases, coordinating frontend deliverables across sprint timelines',
      'Worked across development, staging and production environments validating frontend behavior',
      'Resolved production UI issues by analyzing logs and collaborating with backend teams',
    ],
    tech: ['React', 'JavaScript', 'Axios', 'Jira', 'Agile'],
  },
]

// -- CERTIFICATIONS ----------------------------------------------
export const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Meta Frontend Developer',
    issuer: 'Meta',
    issuerShort: 'META',
    date: 'Add your date',
    credentialUrl: '#',
    category: 'Certification',
    color: '#0081FB',
  },
  {
    id: 2,
    title: 'Python Problem Solving',
    issuer: 'HackerRank',
    issuerShort: 'HR',
    date: 'Add your date',
    credentialUrl: '#',
    category: 'Certification',
    color: '#00EA64',
  },
]


// -- ACHIVEMENTS ----------------------------------------------
export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Zero Critical Bugs',
    description: 'Delivered 10+ production releases with zero critical post-deployment bugs across enterprise clients.',
    metric: '10+',
    metricLabel: 'Releases',
  },
  {
    id: 2,
    title: 'Performance Optimization',
    description: 'Reduced page load time by 25% through React memoization and lazy loading techniques.',
    metric: '25%',
    metricLabel: 'Faster',
  },
  {
    id: 3,
    title: 'Mentorship',
    description: 'Mentored 2 junior developers, reducing onboarding time by 30% and improving code quality.',
    metric: '30%',
    metricLabel: 'Faster onboarding',
  },
  {
    id: 4,
    title: 'Agile Delivery',
    description: 'Led 20+ user stories in Agile sprints achieving 95% on-time delivery for client milestones.',
    metric: '95%',
    metricLabel: 'On-time delivery',
  },
]