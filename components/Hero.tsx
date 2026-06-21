import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="mb-8 inline-flex items-center rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
          Available for full-time opportunities
        </div>

        <h1 className="max-w-5xl text-6xl font-semibold tracking-tight md:text-8xl">
          Building reliable
          <br />
          backend systems
          <br />
          for modern applications.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Backend Developer focused on REST APIs,
          automation systems, databases, and AI-powered tools.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
          >
            View Work
          </a>

          <a
            href="/CVFadliYurisman.pdf"
            className="flex items-center gap-2 rounded-full border border-zinc-800 px-6 py-3 transition hover:border-zinc-600"
          >
            Resume
            <ArrowRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}