export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm text-[var(--muted)]">
          &copy; {year} Shamsudeen Husseni
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://afterninetysports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            After90 Media
          </a>
        </div>
      </div>
    </footer>
  )
}
