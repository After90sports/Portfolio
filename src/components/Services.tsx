const SERVICES = [
  {
    name: 'Filmmaking & Video Editing',
    detail:
      'Premiere Pro, DaVinci Resolve and CapCut for fast-paced highlight reels, podcast episodes, short-form reels and brand video.',
  },
  {
    name: 'Sports Photography',
    detail:
      'Courtside and pitch-side coverage for African football and sport, shot for After90 and accredited press events like the Ghana Premier League.',
  },
  {
    name: 'Creative Direction',
    detail:
      'Leading visual storytelling and brand design across digital platforms, from campaign identity to editorial direction.',
  },
  {
    name: 'Event Production',
    detail:
      'Head of Production and Production Lead for conferences, hackathons and live events — crew, technical requirements and full programme execution.',
  },
  {
    name: 'Brand & Visual Design',
    detail:
      'Photoshop and After Effects for graphics, social content systems and brand assets built to hold up across platforms.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow-pill">SERVICES</span>
        <h2 className="font-display mt-6 max-w-2xl text-3xl leading-tight text-[var(--ink)] sm:text-5xl">
          What I Bring to the Adventure.
        </h2>

        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {SERVICES.map((s, i) => (
            <details key={s.name} className="group py-6" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-2xl text-[var(--ink)] sm:text-4xl">
                  {s.name}
                </span>
                <span className="accordion-icon shrink-0 text-2xl text-[var(--muted)]">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {s.detail}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
