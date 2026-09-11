import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative isolate flex min-h-[92vh] flex-col overflow-hidden"
      >
        <Image
          src="/husseni-headshot-v2.png"
          alt="Shamsudeen Husseni"
          fill
          sizes="100vw"
          priority
          className="-z-10 object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 -z-10 bg-black/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/10 to-black/50" />

        <div className="relative flex flex-1 flex-col justify-between px-5 pt-28 pb-10 sm:px-8 sm:pt-32 sm:pb-14">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="sticker">Filmmaker</span>
            <span className="sticker">Creative Director</span>
            <span className="sticker">Sports Photographer</span>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base text-white/80">
              Hi <span aria-hidden>👋</span>, I&rsquo;m Shamsudeen
            </p>
            <h1 className="font-display mt-3 text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              SHAMSU THE EXPLORER
            </h1>
            <p className="font-display mt-3 text-xl text-white sm:text-2xl">
              I go looking for stories.
            </p>

            <Link
              href="/work"
              className="btn-arrow mt-8 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              See my work <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-xl px-5 pt-14 text-center sm:px-8">
        <p className="text-base leading-relaxed text-[var(--muted)]">
          Trained as a scientist, I found my calling behind a camera &mdash;
          now chasing the human story behind every frame, on a sporting
          field or somewhere I&rsquo;ve never stood before.
        </p>
      </div>

      <div className="mx-auto grid max-w-md grid-cols-3 gap-6 px-5 pt-10 pb-14 text-center sm:px-8">
        <Stat value="4+" label="Years" />
        <Stat value="45+" label="Productions" />
        <Stat value="Founder" label="After90" />
      </div>

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
