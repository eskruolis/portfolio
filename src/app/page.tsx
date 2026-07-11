import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { HowIWork } from '@/components/sections/HowIWork';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/shared/SectionDivider';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    absolute: 'Eigirdas Skruolis — Senior Full-Stack Engineer · Freelance',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionDivider />
      <Services />

      <SectionDivider flip />
      <HowIWork />

      <SectionDivider />
      <Skills />

      <SectionDivider flip />
      <Experience />

      <SectionDivider />
      <Projects />

      {siteConfig.showBlog && (
        <>
          <SectionDivider flip />
          <BlogTeaser />
        </>
      )}

      <SectionDivider />
      <Contact />

      <Footer />
    </>
  );
}
