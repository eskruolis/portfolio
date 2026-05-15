export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="text-muted-foreground max-w-3xl px-8 py-12 text-sm lg:px-16"
    >
      <p>
        Built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline-offset-4
            hover:underline"
        >
          Next.js
        </a>
        ,{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline-offset-4
            hover:underline"
        >
          Tailwind CSS
        </a>
        , and{' '}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline-offset-4
            hover:underline"
        >
          shadcn/ui
        </a>
        . Deployed on{' '}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline-offset-4
            hover:underline"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
