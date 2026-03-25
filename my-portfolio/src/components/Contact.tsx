import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <SectionTitle title="Get In" highlight="Touch" />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <p className="text-lg leading-8 text-stone-300">
          I&apos;m interested in software engineering roles, collaborative
          projects, and opportunities to build useful products.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:khanh@example.com"
            className="rounded-full bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-400"
          >
            khanh@example.com
          </a>
          <a
            href="#home"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:border-white/40"
          >
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
}
