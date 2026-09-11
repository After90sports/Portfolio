import Image from 'next/image'

type Logo = {
  name: string
  src: string
  width: number
  height: number
}

const LOGOS: Logo[] = [
  { name: 'Google', src: '/partners/google.png', width: 104, height: 34 },
  { name: 'thedsgnjunkies', src: '/partners/thedsgnjunkies.svg', width: 140, height: 22 },
  { name: 'Adjuma', src: '/partners/adjuma.png', width: 100, height: 26 },
  { name: 'European Union', src: '/partners/eu.svg', width: 40, height: 27 },
  { name: 'Hack54', src: '/partners/hack54.png', width: 96, height: 19 },
  { name: 'Verslaaf', src: '/partners/verslaaf.png', width: 30, height: 31 },
  { name: 'Stay By Plan', src: '/partners/stayplan.png', width: 66, height: 62 },
  { name: 'Unbroken Podcast', src: '/partners/unbroken.png', width: 118, height: 54 },
]

export default function LogoStrip() {
  return (
    <div className="border-t border-[var(--line)] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm leading-snug text-[var(--muted)] sm:text-left">
          Trusted by teams and brands I&rsquo;ve worked with
        </p>
        <div className="no-scrollbar mt-7 flex items-center gap-x-10 overflow-x-auto">
          {LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-7 w-auto shrink-0 object-contain opacity-70 grayscale transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
