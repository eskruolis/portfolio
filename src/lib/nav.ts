import type { NavItem } from '@/types';
import { siteConfig } from '@/lib/data';

// Section IDs here must match the id attributes on the corresponding <section> elements in app/page.tsx
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#hero', sectionId: 'hero' },
  { label: 'Skills', href: '/#skills', sectionId: 'skills' },
  { label: 'Experience', href: '/#experience', sectionId: 'experience' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  ...(siteConfig.showBlog
    ? [{ label: 'Blog', href: '/#blog', sectionId: 'blog' }]
    : []),
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];
