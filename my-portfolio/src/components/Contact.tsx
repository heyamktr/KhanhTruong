import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle title="Get In" highlight="Touch" />
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <div className="rounded-3xl border border-slate-800/70 bg-slate-950/55 p-10 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
          <p className="text-lg leading-8 text-slate-300">
            I&apos;m looking for software engineering internship opportunities
            and collaborative projects across web, AI, and product engineering.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href="mailto:truongnguyent.khanh@gmail.com"
              className="block rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-300 hover:border-slate-700"
            >
              <span className="block text-xs uppercase tracking-[0.25em] text-orange-400">
                Email
              </span>
              <span className="mt-2 block font-medium">
                truongnguyent.khanh@gmail.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/heyamktr"
              className="block rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-300 hover:border-slate-700"
            >
              <span className="block text-xs uppercase tracking-[0.25em] text-orange-400">
                LinkedIn
              </span>
              <span className="mt-2 block font-medium">linkedin.com/in/heyamktr</span>
            </a>
            <a
              href="https://github.com/heyamktr"
              className="block rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-300 hover:border-slate-700"
            >
              <span className="block text-xs uppercase tracking-[0.25em] text-orange-400">
                GitHub
              </span>
              <span className="mt-2 block font-medium">github.com/heyamktr</span>
            </a>
          </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={120}>
          <form
          action="mailto:truongnguyent.khanh@gmail.com"
          method="post"
          encType="text/plain"
          className="rounded-3xl border border-slate-800/70 bg-slate-950/55 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl"
        >
          <div className="grid gap-5">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about the role, project, or what you want to build."
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400"
                required
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400"
              >
                Send Message
              </button>
              <a
                href="#home"
                className="rounded-full border border-slate-800 bg-slate-900/80 px-6 py-3 font-semibold text-slate-100 hover:border-slate-700"
              >
                Back to Top
              </a>
            </div>
            </div>
          </form>
        </ScrollReveal>

        <div className="md:col-span-2">
          <p className="text-sm text-slate-400">
            The form opens your default email client with the message content.
          </p>
        </div>
      </div>
    </section>
  );
}
