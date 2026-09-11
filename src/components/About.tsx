import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8 sm:p-14">
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="eyebrow-pill">ABOUT ME</span>
            <h2 className="font-display mt-6 max-w-3xl text-3xl leading-snug text-[var(--ink)] sm:text-5xl">
              Shamsu the Explorer.
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[var(--muted)]">
              The male version of Dora the Explorer &mdash; with a camera, a
              story to tell, and a world still waiting to be explored.
            </p>
          </div>

          <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl border border-[var(--line)] sm:w-56">
            <Image
              src="/husseni-headshot-v2.png"
              alt="Shamsudeen Husseni"
              fill
              sizes="(min-width: 640px) 224px, 160px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-[var(--muted)]">
          <p>
            I&rsquo;m{' '}
            <span className="font-medium text-[var(--ink)]">
              Shamsudeen &ldquo;Shamsu&rdquo; Bameyishellah
            </span>{' '}
            &mdash; a filmmaker, storyteller, creative producer, and, most
            importantly, an explorer.
          </p>
          <p>
            I often describe myself as{' '}
            <span className="font-medium text-[var(--ink)]">
              Shamsu the Explorer &mdash; the male version of Dora the
              Explorer.
            </span>{' '}
            It sounds playful, but it captures who I am: curious,
            adventurous, always asking questions, going places, meeting
            people, and looking for stories worth telling. My camera is
            simply one of the ways I explore the world.
          </p>

          <p className="text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
            The journey
          </p>
          <p>
            My journey into filmmaking wasn&rsquo;t a straight line. Trained
            as a scientist, I once imagined a very different career. But
            discovering filmmaking gave me a new way of seeing and
            understanding the world. What started as curiosity became a
            passion, and eventually a career built around storytelling.
          </p>

          <p className="text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
            The work
          </p>
          <p>
            Over the years, I&rsquo;ve worked across film, photography,
            sports documentation, podcasts, reality television, events,
            music, and digital media. Each project has allowed me to explore
            new people, ideas, cultures, and experiences while constantly
            refining my craft.
          </p>

          <p className="text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
            Sports storytelling
          </p>
          <p>
            I&rsquo;m particularly passionate about{' '}
            <span className="font-medium text-[var(--ink)]">
              sports storytelling and documentation.
            </span>{' '}
            I believe sports is about far more than what happens on the
            field. Behind every athlete, team, and competition is a human
            story &mdash; one of sacrifice, ambition, identity, struggle,
            community, and triumph. I want to help tell African sports
            stories with the creativity, depth, and visual quality they
            deserve.
          </p>

          <p className="text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
            Technology &amp; innovation
          </p>
          <p>
            My work has also taken me into the{' '}
            <span className="font-medium text-[var(--ink)]">
              technology and innovation ecosystem,
            </span>{' '}
            where I&rsquo;ve had the opportunity to document entrepreneurs,
            innovators, creators, communities, and organisations including{' '}
            <span className="font-medium text-[var(--ink)]">
              Google, the European Union, Hack54, and Unbroken Podcast.
            </span>{' '}
            These experiences have shaped my belief that behind every
            innovation is a human story waiting to be told.
          </p>

          <p>
            Today, I work at the intersection of{' '}
            <span className="font-medium text-[var(--ink)]">
              film, sports, technology, culture, and human experience
            </span>{' '}
            &mdash; using storytelling to connect people with ideas and
            experiences that matter.
          </p>

          <p className="font-display text-2xl leading-snug text-[var(--ink)] sm:text-3xl">
            I don&rsquo;t simply want to create content. I want to create
            stories people remember.
          </p>

          <p>
            So, whether I&rsquo;m on a sporting field, at a technology
            event, behind a camera, or somewhere I&rsquo;ve never been
            before, I approach every experience the same way:
          </p>

          <p className="font-display text-2xl leading-snug text-[var(--ink)] sm:text-4xl">
            Explore. Discover. Document. Tell the story.
          </p>

          <p>
            I&rsquo;m Shamsu the Explorer &mdash; the male version of Dora
            the Explorer, with a camera, a story to tell, and a world still
            waiting to be explored.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-md">
          <InfoCard label="Based in" value="Accra, Ghana" />
          <InfoCard label="Available for" value="Freelance & full-time" />
        </div>
      </div>
    </section>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--line)] px-4 py-3">
      <p className="text-[11px] tracking-wide text-[var(--muted-2)] uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-[var(--ink)]">{value}</p>
    </div>
  )
}
