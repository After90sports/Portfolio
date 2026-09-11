import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28"
      >
        <span
          aria-hidden
          className="ghost-text font-display pointer-events-none absolute top-20 left-1/2 hidden -translate-x-1/2 text-[8rem] leading-none whitespace-nowrap select-none sm:block lg:text-[11rem]"
        >
          EXPLORER
        </span>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative mb-10 w-full max-w-[220px]">
            <div
              className="pointer-events-none absolute inset-0 scale-125 rounded-full opacity-80 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(10,10,10,0.22) 0%, rgba(10,10,10,0.08) 45%, transparent 72%)',
              }}
            />
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-[var(--panel)] shadow-[0_30px_60px_-20px_rgba(10,10,10,0.35)]">
              <Image
                src="/husseni-headshot-v2.png"
                alt="Shamsudeen Husseni"
                fill
                sizes="220px"
                className="object-cover"
                priority
              />
            </div>
            <span className="sticker absolute top-0 -left-6 -rotate-6 sm:-left-10">
              Filmmaker
            </span>
            <span className="sticker absolute right-0 bottom-4 rotate-3 sm:-right-8">
              Sports Photographer
            </span>
          </div>

          <p className="text-base text-[var(--muted)]">
            Hi <span aria-hidden>👋</span>, I&rsquo;m Shamsudeen
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-6xl">
            SHAMSU THE EXPLORER
          </h1>
          <p className="font-display mt-3 text-xl text-[var(--ink)] sm:text-2xl">
            I go looking for stories.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            Trained as a scientist, I found my calling behind a camera.
            Today I work across film, sports photography, podcasts and
            digital media &mdash; always chasing the human story behind the
            moment. On a sporting field or somewhere I&rsquo;ve never stood
            before, I approach it the same way: explore, discover, document,
            tell the story.
          </p>

          <Link
            href="/work"
            className="btn-arrow mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            See my work <span className="arrow">&rarr;</span>
          </Link>
        </div>

        <div className="relative mx-auto mt-24 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--line)] pt-8 text-center">
          <Stat value="4+" label="Years" />
          <Stat value="10+" label="Productions" />
          <Stat value="Founder" label="After90" />
        </div>
      </section>

      <section id="contact" className="px-5 pb-28 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
            Get in touch
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:mysticaldesignz@gmail.com"
              className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Email
            </a>
            <a
              href="tel:+233557161647"
              className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Call
            </a>
            <a
              href="https://www.instagram.com/husseni_shamsudeen/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Instagram
            </a>
          </div>
          <p className="mt-6 text-xs tracking-wide text-[var(--muted-2)] uppercase">
            Based in Accra, Ghana &middot; Available worldwide, remote
          </p>
          <Link
            href="/contact"
            className="nav-link mt-4 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            Or send a message &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-[var(--ink)] sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-[var(--muted)]">{label}</div>
    </div>
  )
}
