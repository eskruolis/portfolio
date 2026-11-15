import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { Story } from '@/components/sections/Story';
import { Services } from '@/components/sections/Services';
import { HowIWork } from '@/components/sections/HowIWork';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/shared/SectionDivider';
import { siteConfig, getData } from '@/lib/data';
import { isEnabledLocale, DEFAULT_LOCALE, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { siteMeta } from '@/i18n/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isEnabledLocale(lang) ? lang : DEFAULT_LOCALE;
  return {
    title: { absolute: siteMeta[locale].homeTitle },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const data = getData(locale);

  return (
    <>
      <Hero dict={dict} data={data} locale={locale} />

      <SectionDivider />
      <Services dict={dict} data={data} />

      <SectionDivider flip />
      <HowIWork dict={dict} data={data} />

      <SectionDivider />
      <Skills dict={dict} data={data} />

      <SectionDivider flip />
      <Story dict={dict} data={data} />

      <SectionDivider />
      <Experience dict={dict} data={data} />

      <SectionDivider flip />
      <Projects dict={dict} data={data} locale={locale} />

      {siteConfig.showBlog && (
        <>
          <SectionDivider flip />
          <BlogTeaser dict={dict} locale={locale} />
        </>
      )}

      <SectionDivider />
      <Contact dict={dict} />

      <Footer dict={dict} />
    </>
  );
}
