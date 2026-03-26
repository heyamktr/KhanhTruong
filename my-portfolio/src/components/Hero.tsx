import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-6 pb-16 pt-28 md:flex-row md:items-center md:gap-16">
        <div className="flex-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Full-Stack, AI, and Computer Vision Engineer
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-50 md:text-7xl">
            Khanh <span className="text-orange-400">Truong</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build production-minded software across React, Python, C++, and
            TypeScript, with hands-on work in full-stack systems, AI workflows,
            and computer vision products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span
              className="rounded-full border px-4 py-2 backdrop-blur"
              style={{
                borderColor: "var(--hero-border)",
                background: "var(--hero-surface)",
              }}
            >
              Greencastle, Indiana
            </span>
            <span
              className="rounded-full border px-4 py-2 backdrop-blur"
              style={{
                borderColor: "var(--hero-border)",
                background: "var(--hero-surface)",
              }}
            >
              GPA 3.78
            </span>
            <span
              className="rounded-full border px-4 py-2 backdrop-blur"
              style={{
                borderColor: "var(--hero-border)",
                background: "var(--hero-surface)",
              }}
            >
              May 2027
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400"
            >
              View Projects
            </a>
            <a
              href="https://github.com/heyamktr"
              className="rounded-full border px-6 py-3 font-semibold text-slate-100 hover:border-slate-500"
              style={{
                borderColor: "var(--hero-border)",
                background: "rgba(10, 14, 21, 0.42)",
              }}
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="rounded-full border px-6 py-3 font-semibold text-slate-100 hover:border-slate-500"
              style={{
                borderColor: "var(--hero-border)",
                background: "rgba(10, 14, 21, 0.42)",
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:flex-1">
          <div
            className="overflow-hidden rounded-[2.2rem] border p-3 shadow-[0_32px_120px_rgba(8,12,20,0.6)] backdrop-blur-xl"
            style={{
              borderColor: "var(--hero-border)",
              background: "rgba(11, 16, 24, 0.72)",
            }}
          >
            <Image
              src="/images/avatar.png"
              alt="Portrait of Khanh Truong"
              width={420}
              height={420}
              className="h-[320px] w-[320px] rounded-[1.75rem] object-cover md:h-[420px] md:w-[420px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
