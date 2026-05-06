import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { buttonVariants } from '@/components/ui/button'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="py-24 px-8 lg:px-16 max-w-3xl">
      <BrandLogo size={48} className="mb-6 lg:hidden" />
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
        Hello, I&apos;m
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3">Eigirdas Skruolis</h1>
      <p className="text-xl text-muted-foreground mb-6">Senior Frontend Engineer</p>
      <p className="text-base leading-8 text-muted-foreground mb-10 max-w-xl">
        I build fast, accessible web applications with React, Next.js, and TypeScript. Formerly deep
        in Angular — now fully invested in the React ecosystem and obsessed with DX, performance,
        and clean component APIs.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:eskruolis@gmail.com"
          className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'btn-gradient gap-2')}
        >
          <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
          Get in touch
        </a>
        <a
          href="/cv.pdf"
          download="Eigirdas_Skruolis_CV.pdf"
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2')}
        >
          <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
          Download CV
        </a>
      </div>
    </section>
  )
}
