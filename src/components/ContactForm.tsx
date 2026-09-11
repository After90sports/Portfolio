export default function ContactForm() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-md rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-8 sm:p-10">
        <span className="eyebrow-pill">SAY HELLO</span>
        <h1 className="font-display mt-5 text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
          Got a story? <span aria-hidden>👋</span>
          <br />
          Let&rsquo;s talk.
        </h1>
        <p className="mt-3 text-sm text-[var(--muted)]">
          Drop a note below and I&rsquo;ll get back to you.
        </p>

        <form
          action="https://formsubmit.co/mysticaldesignz@gmail.com"
          method="POST"
          className="mt-8 flex flex-col gap-4"
        >
          <input type="hidden" name="_subject" value="New message from the portfolio site" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted-2)] focus:border-[var(--ink)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted-2)] focus:border-[var(--ink)]"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium tracking-wide text-[var(--muted-2)] uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="What's the story?"
              className="w-full resize-none rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted-2)] focus:border-[var(--ink)]"
            />
          </div>

          <button
            type="submit"
            className="btn-arrow mt-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Send it <span className="arrow">&rarr;</span>
          </button>
        </form>

        <p className="mt-6 text-center text-xs tracking-wide text-[var(--muted-2)] uppercase">
          Or email mysticaldesignz@gmail.com directly
        </p>
      </div>
    </section>
  )
}
