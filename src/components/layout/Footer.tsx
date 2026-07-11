export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="text-muted-foreground max-w-5xl px-8 py-12 text-sm lg:px-16"
    >
      <p>
        © {new Date().getFullYear()} Eigirdas Skruolis. Designed and built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline-offset-4
            hover:underline"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline-offset-4
            hover:underline"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
