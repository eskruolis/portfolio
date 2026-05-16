import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/shared/SectionDivider';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionDivider />
      <div className="bg-muted/30">
        <Skills />
      </div>

      <SectionDivider flip />
      <Experience />

      <SectionDivider />
      <div className="bg-muted/30">
        <Projects />
      </div>

      {siteConfig.showBlog && (
        <>
          <SectionDivider flip />
          <BlogTeaser />
        </>
      )}

      <SectionDivider />
      <div className="bg-muted/30">
        <Contact />
      </div>

      <Footer />
    </>
  );
}
