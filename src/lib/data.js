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
    title: 'Sushi Store',
    subtitle: 'Restaurant UI',
    description:
      'A beautifully crafted Japanese restaurant website with editorial split layouts, food category filtering, menu sections and newsletter signup. Built while mastering HTML, CSS and JavaScript fundamentals.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'UI Design',
    year: '2024',
    featured: true,
    live: false,
    liveUrl: 'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    githubUrl:
      'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    images: [
      '/projects/sushi/sushi-1.png',
      '/projects/sushi/sushi-2.png',
      '/projects/sushi/sushi-3.png',
      '/projects/sushi/sushi-4.png',
      '/projects/sushi/sushi-5.png',
    ],
  },
  {
    id: 2,
    title: 'Nike Store',
    subtitle: 'E-Commerce UI',
    description:
      'A production-style Nike e-commerce landing page featuring product grids, customer testimonials, special offers section and newsletter signup. Built specifically to master Tailwind CSS utility-first workflow.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    category: 'E-Commerce',
    year: '2024',
    featured: false,
    live: false,
    liveUrl: 'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    githubUrl:
      'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    images: [
      '/projects/nike/nike-1.png',
      '/projects/nike/nike-2.png',
      '/projects/nike/nike-3.png',
      '/projects/nike/nike-4.png',
      '/projects/nike/nike-5.png',
    ],
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    subtitle: 'Admin Panel',
    description:
      'A fully functional analytics dashboard with Charts.js data visualisation, custom API data layer built in data.js, and a clean admin UI. Demonstrates real-world data handling and charting in React.',
    tech: ['React', 'JavaScript', 'Charts.js'],
    category: 'Dashboard',
    year: '2024',
    featured: false,
    live: false,
    liveUrl: 'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    githubUrl:
      'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    images: [
      '/projects/dashboard/admin-dashboard-1.png',
      '/projects/dashboard/admin-dashboard-2.png',
      '/projects/dashboard/admin-dashboard-3.png',
      '/projects/dashboard/admin-dashboard-4.png',
      '/projects/dashboard/admin-dashboard-5.png',
    ],
  },
  {
    id: 4,
    title: 'Home Page UI Practise',
    subtitle: 'UI Layout Practise',
    description:
      'Practising to make UI home page design with React and Tailwind',
    tech: ['React', 'JavaScript', 'TailwindCSS'],
    category: 'Pintrest Ideas',
    year: '2026',
    featured: false,
    live: false,
    liveUrl: 'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    githubUrl:
      'https://github.com/Nandagopal-D-2702/Frontend_Projects_By_Nandu',
    images: [
      '/projects/uipractise/ui-layout-01.png',
      '/projects/uipractise/ui-layout-02.png',
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
    description:
      'Delivered 10+ production releases with zero critical post-deployment bugs across enterprise clients.',
    metric: '10+',
    metricLabel: 'Releases',
  },
  {
    id: 2,
    title: 'Performance Optimization',
    description:
      'Reduced page load time by 25% through React memoization and lazy loading techniques.',
    metric: '25%',
    metricLabel: 'Faster',
  },
  {
    id: 3,
    title: 'Mentorship',
    description:
      'Mentored 2 junior developers, reducing onboarding time by 30% and improving code quality.',
    metric: '30%',
    metricLabel: 'Faster onboarding',
  },
  {
    id: 4,
    title: 'Agile Delivery',
    description:
      'Led 20+ user stories in Agile sprints achieving 95% on-time delivery for client milestones.',
    metric: '95%',
    metricLabel: 'On-time delivery',
  },
]
