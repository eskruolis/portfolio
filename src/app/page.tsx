import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { BlogTeaser } from '@/components/sections/BlogTeaser'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <BlogTeaser />
      <Footer />
    </>
  )
}
