export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="px-8 py-12 lg:px-16 max-w-3xl text-sm text-muted-foreground"
    >
      <p>
        Built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline underline-offset-4"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline underline-offset-4"
        >
          Tailwind CSS
        </a>
        , and{' '}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline underline-offset-4"
        >
          shadcn/ui
        </a>
        . Deployed on{' '}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline underline-offset-4"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  )
}
