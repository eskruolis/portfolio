/**
 * English dictionary — the source of truth for the dictionary SHAPE.
 * `Dictionary` is derived from `typeof en`, so every other locale (lt.ts) is
 * type-checked against this structure. Add a key here first, then translate it
 * in every other locale file or TypeScript will fail the build.
 *
 * Proper nouns that never translate (the name "Eigirdas Skruolis", brand names,
 * tech terms) are intentionally left in the components, not here.
 */
export const en = {
  nav: {
    about: 'About',
    services: 'Services',
    howIWork: 'How I Work',
    skills: 'Skills',
    experience: 'Experience',
    work: 'Work',
    blog: 'Blog',
    contact: 'Contact',
  },

  common: {
    availability: 'Open to freelance & full-time',
    siteNavigation: 'Site navigation',
    pageSections: 'Page sections',
  },

  sidebar: {
    role: 'Senior Software Engineer',
    roleSub: 'Full-Stack · React / Next.js / Node',
    githubAria: 'GitHub profile',
    linkedinAria: 'LinkedIn profile',
    emailAria: 'Send email',
    downloadCv: 'Download CV',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    menuLabel: 'Navigation menu',
  },

  languageSwitcher: {
    label: 'Language',
  },

  hero: {
    ariaLabel: 'Introduction',
    role: 'Senior Software Engineer · Full-Stack',
    headline:
      'I take web products from idea to production — and own every layer in between.',
    intro:
      'Today I lead engineering at MyUrbanScoot, owning their live store end to end and the tools the whole team runs it with, and I\'m co-founder & CTO of myanart, which I took from first commit to launch in six weeks. Before that, I led the frontend of a Swiss SaaS relied on by major banks and insurers. I work at AI speed with agentic workflows — ',
    introEmphasis: 'directed and reviewed by me at every step',
    lifecycleLabel: 'Every layer, end to end',
    startProject: 'Start a project',
    viewCv: 'View CV',
    trustStrip: 'Built products relied on by teams at',
    cvModalTitle: 'CV',
    cvDownload: 'Download',
    cvClose: 'Close CV preview',
  },

  services: {
    label: 'Services',
    title: 'What I can build for you',
    intro:
      'I work across the full stack — greenfield products, rescues, migrations, and performance work on existing codebases. Available as a freelancer or contractor, and equally open to committing full-time to one ambitious product.',
  },

  howIWork: {
    label: 'How I work',
    title: 'AI-accelerated. Engineer-directed.',
    intro:
      'I transitioned early into agentic AI development — not to replace engineering judgement, but to multiply it. Agents do the typing; I do the thinking, the reviewing, and the shipping.',
  },

  skills: {
    label: 'Skills',
    title: 'A full-stack toolkit',
    intro:
      "Most of the technologies out there, one engineer. If your stack isn't listed, I've probably shipped something adjacent to it — adapting fast is the actual skill.",
    categories: {
      languages: 'Languages & Core',
      frontend: 'Frontend',
      backend: 'Backend & Data',
      infra: 'Auth & Infrastructure',
      practices: 'Engineering Practices',
      ai: 'AI-Assisted Development',
    },
  },

  experience: {
    label: 'Experience',
    title: "Where I've shipped",
    ariaLabel: 'Work experience',
    historyLabel: 'Work history',
    present: 'Present',
  },

  projects: {
    ariaLabel: 'Projects',
    label: 'Work',
    title: 'Selected work & projects',
    intro:
      'Client work lives behind NDAs and logins — the case studies tell the story. The GitHub tab pulls my public repos live.',
    tabWork: 'Work',
    tabGithub: 'GitHub',
    filterAria: 'Filter by technology',
    filterAll: 'All',
    readCaseStudy: 'Read case study',
    privateLabel: 'Private project',
    noWork: 'No projects match that filter.',
    noRepos: 'No repositories match that filter.',
  },

  contact: {
    ariaLabel: 'Contact',
    label: 'Contact',
    title: "Let's build something",
    intro:
      "I'm open to freelance and contract work — or committing my time fully to one big project as part of your team. Full products, migrations, performance rescues, or a senior full-stack hire. Tell me what you're building and I'll tell you honestly whether I'm the right person for it.",
    yourName: 'Your name',
    placeholders: [
      'We need a full-stack engineer for...',
      "Here's the product we're building...",
      'Our frontend needs rescuing...',
      'Can we grab a virtual coffee?',
    ],
    sendMessage: 'Send message',
    sending: 'Opening your mail app...',
    emailSubjectFrom: 'Hey Eigirdas — from',
    emailSubjectFallback: 'your portfolio',
    orReach: 'Or reach me directly',
    basedIn:
      'Based in Valencia, Spain (CET) — working with teams across Europe and beyond.',
  },

  caseStudy: {
    back: 'Back to work',
    label: 'Case study',
    company: 'Company',
    timeline: 'Timeline',
    role: 'Role',
    challenge: 'The challenge',
    approach: 'The approach',
    outcome: 'The outcome',
    stack: 'Stack',
    metaSuffix: 'Case Study',
    ctaTitle: 'Have a similar problem?',
    ctaBody:
      "I'm open to freelance, contract, and full-time work — happy to talk through your situation and whether I can help.",
    ctaButton: 'Get in touch',
  },

  blog: {
    ariaLabel: 'Blog',
    title: 'Writing',
    allPosts: 'All posts',
    minRead: 'min read',
    view: 'view',
    views: 'views',
    tagsAria: 'Tags',
  },

  footer: {
    builtWith: 'Designed and built with',
    and: 'and',
  },
};
