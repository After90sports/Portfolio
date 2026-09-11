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
    <header className="fixed inset-x-4 top-4 z-50 sm:inset-x-8 sm:top-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--ink)] px-6 py-3 sm:rounded-full sm:px-8">
        <div className="grid grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-12">
          <div>
            <Link href="/" className="text-sm font-semibold text-white sm:text-base">
              husseni shamsudeen
            </Link>
            <p className="mt-0.5 text-[10px] text-white/60">
              Filmmaker &middot; Creative Director &middot; Sports Photographer
            </p>
          </div>

          <nav className="hidden items-center justify-self-center gap-8 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-white/90 md:inline-flex"
            >
              Let&rsquo;s Work
            </Link>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={clsx(
                  'h-px w-6 bg-white transition-transform',
                  open && 'translate-y-[3.5px] rotate-45'
                )}
              />
              <span
                className={clsx(
                  'h-px w-6 bg-white transition-transform',
                  open && '-translate-y-[3.5px] -rotate-45'
                )}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="mt-3 flex flex-col gap-1 border-t border-white/15 pt-3 md:hidden">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-white/70 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
