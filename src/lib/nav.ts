import type { NavItem } from '@/types'

// Section IDs here must match the id attributes on the corresponding <section> elements in app/page.tsx
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#hero', sectionId: 'hero' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Blog', href: '#blog', sectionId: 'blog' },
]
