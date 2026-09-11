import Image from 'next/image'

type Project = {
  org: string
  role: string
  dates: string
  tag: string
  gradient: string
  icon: string
  href?: string
}

const PROJECTS: Project[] = [
  {
    org: 'After90',
    role: 'Founder & Creative Director',
    dates: 'Jan 2025 — Present',
    tag: 'Media Platform',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #404040 55%, #a3a3a3 150%)',
    icon: '/after90-ball.png',
    href: 'https://www.instagram.com/after90sports/',
  },
  {
    org: 'Adjuma.io',
    role: 'Creative Designer (Hybrid)',
    dates: 'Aug 2022 — Dec 2024',
    tag: 'Brand Design',
    gradient: 'linear-gradient(135deg, #1b1b1b 0%, #4d4d4d 55%, #b8b8b8 150%)',
    icon: '/adjuma-icon.png',
    href: 'https://www.instagram.com/adjuma.io/',
  },
  {
    org: 'Interior Bond Studios',
    role: 'Video Editor (Remote)',
    dates: 'Mar 2023 — Aug 2024',
    tag: 'Podcast & Reels',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #363636 55%, #919191 150%)',
    icon: '/interior-bond-icon.png',
    href: 'https://www.instagram.com/anythingaccra/',
  },
]

type LeadershipEntry = {
  org: string
  role: string
  dates?: string
  href?: string
}

const LEADERSHIP: LeadershipEntry[] = [
  {
    org: 'Revealed: The New Era',
    role: 'production lead, editor & colorist — ghone tv',
    href: 'https://www.youtube.com/watch?v=u6ekn6AiCTk&t=249s',
  },
  {
    org: 'Stayby Plan x EU',
    role: 'post production',
    href: 'https://youtu.be/ctnePu37mNU?si=oA9eTYfpB0e57me-',
  },
  { org: 'After90', role: 'founder & creative director', dates: '2025 — present', href: 'https://www.youtube.com/@after90' },
  {
    org: 'Tech in Ghana Conference',
    role: 'head of production',
    dates: 'december 2025',
    href: 'https://www.youtube.com/@techinghanaofficial',
  },
  {
    org: 'HAck54 Health Hackathon',
    role: 'head of production',
    dates: 'october 2025',
    href: 'https://www.youtube.com/@Hack54org',
  },
  { org: 'Google Events — AI Community Centre', role: 'production lead', dates: 'may — dec 2025' },
  {
    org: 'thedsgnjunkies',
    role: 'production lead — dyg campus tour',
    dates: 'jan — may 2025',
    href: 'https://www.youtube.com/watch?v=7wBHhuG_vE4&list=PL6GlYBIZDDGWJNcZAS_6qYrPNyi9hClKM',
  },
  {
    org: 'thedsgnjunkies',
    role: 'production lead — junkie talks podcast',
    dates: '2024',
    href: 'https://www.youtube.com/watch?v=u02leWQTbF8&list=PL6GlYBIZDDGUaolMSwJZOAqYTHRxSaCCJ',
  },
  {
    org: 'thedsgnjunkies',
    role: 'in-house production lead — fidcon',
    dates: '2024 — 2025',
    href: 'https://youtu.be/T95eRLPpUwM?si=Yr81EKe_ZlYcGEOo',
  },
  { org: 'thedsgnjunkies', role: 'video editor (volunteer)', dates: 'mar 2022 — present' },
  {
    org: 'Kweku Tech',
    role: 'video editor (volunteer)',
    dates: 'feb 2021 — oct 2023',
    href: 'https://www.youtube.com/@kwekutech',
  },
]

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow-pill">FIELD NOTES</span>
        <h2 className="font-display mt-6 max-w-2xl text-3xl leading-tight text-[var(--ink)] sm:text-5xl">
          Stories I went looking for.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.org}
              href={p.href ?? '#contact'}
              target={p.href ? '_blank' : undefined}
              rel={p.href ? 'noopener noreferrer' : undefined}
              className="work-card group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-10 pb-24">
                <div className="relative h-full w-full">
                  <Image
                    src={p.icon}
                    alt={p.org}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 60vw"
                    className="object-contain grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <div className="relative flex items-center justify-between p-4">
                <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[var(--ink)]">
                  {p.tag}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--ink)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  &#8599;
                </span>
              </div>
              <div className="relative px-5 pb-5">
                <h3 className="font-display text-xl text-white">{p.org}</h3>
                <p className="mt-1 text-sm text-white/80">{p.role}</p>
                <p className="mt-0.5 text-xs text-white/60">{p.dates}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24">
          <span className="eyebrow-pill">PRODUCTION &amp; LEADERSHIP</span>
          <h3 className="font-display mt-6 max-w-xl text-2xl leading-tight text-[var(--ink)] sm:text-3xl">
            Expeditions I&rsquo;ve led.
          </h3>

          <ul className="mt-10 divide-y divide-[var(--line)] border-t border-[var(--line)]">
            {LEADERSHIP.map((w) => {
              const content = (
                <>
                  <div>
                    <span className="text-base font-medium text-[var(--ink)]">
                      {w.org}
                    </span>
                    <span className="text-base text-[var(--muted)]">
                      {' '}
                      &mdash; {w.role}
                    </span>
                    {w.href && (
                      <span className="ml-1.5 inline-block text-[var(--muted-2)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        &#8599;
                      </span>
                    )}
                  </div>
                  {w.dates && (
                    <span className="text-xs tracking-wide text-[var(--muted-2)] uppercase">
                      {w.dates}
                    </span>
                  )}
                </>
              )

              return w.href ? (
                <li key={`${w.org}-${w.role}`}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 py-5 transition-colors hover:bg-[var(--bg-soft)] sm:flex-row sm:items-center sm:justify-between sm:-mx-4 sm:px-4"
                  >
                    {content}
                  </a>
                </li>
              ) : (
                <li
                  key={`${w.org}-${w.role}`}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  {content}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
