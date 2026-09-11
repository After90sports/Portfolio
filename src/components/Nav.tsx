'use client'

import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--line)] bg-[var(--panel)]/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-6 px-6 py-4 sm:px-10 md:grid-cols-[1fr_auto_1fr] md:gap-12">
        <div>
          <Link href="/" className="text-sm font-medium text-[var(--ink)] sm:text-base">
            husseni shamsudeen
          </Link>
          <p className="mt-0.5 text-xs text-[var(--muted)]">
            Filmmaker &middot; Creative Director &middot; Sports Photographer
          </p>
        </div>

        <nav className="hidden items-center justify-self-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black md:inline-flex"
          >
            Hire Me!
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={clsx(
                'h-px w-6 bg-[var(--ink)] transition-transform',
                open && 'translate-y-[3.5px] rotate-45'
              )}
            />
            <span
              className={clsx(
                'h-px w-6 bg-[var(--ink)] transition-transform',
                open && '-translate-y-[3.5px] -rotate-45'
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--line)] bg-[var(--panel)] px-5 py-4 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
