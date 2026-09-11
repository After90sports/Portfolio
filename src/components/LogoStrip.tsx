import Image from 'next/image'

type Logo = {
  name: string
  src: string
  width: number
  height: number
}

const LOGOS: Logo[] = [
  { name: 'Google', src: '/logos/google.png', width: 104, height: 35 },
  { name: 'thedsgnjunkies', src: '/logos/thedsgnjunkies.svg', width: 140, height: 22 },
  { name: 'Adjuma', src: '/logos/adjuma.png', width: 100, height: 32 },
  { name: 'European Union', src: '/logos/eu.svg', width: 42, height: 28 },
  { name: 'Hack54', src: '/logos/hack54.png', width: 100, height: 20 },
  { name: 'Verslaaf', src: '/logos/verslaaf.png', width: 30, height: 31 },
]

export default function LogoStrip() {
  return (
    <div className="border-t border-[var(--line)] px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="shrink-0 text-sm leading-snug text-[var(--muted)]">
          Trusted by teams and brands
          <br className="hidden sm:block" /> I&rsquo;ve worked with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:justify-end">
          {LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-6 w-auto object-contain opacity-70 grayscale transition-opacity hover:opacity-100 sm:h-7"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
