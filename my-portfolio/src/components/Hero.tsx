import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-6 pb-16 pt-28 md:flex-row md:items-center md:gap-16"
    >
      <div className="flex-1">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          Software Engineer
        </p>
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&apos;m <span className="text-red-500">Khanh</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          I build clean, data-driven web products with strong fundamentals in
          Java, TypeScript, React, and backend development.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:border-white/40"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="flex justify-center md:flex-1">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-orange-950/30">
          <Image
            src="/images/profile.png"
            alt="Portrait placeholder for Khanh"
            width={420}
            height={420}
            className="h-[320px] w-[320px] rounded-[1.5rem] object-cover md:h-[420px] md:w-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
