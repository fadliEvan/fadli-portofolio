export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-900 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
          Contact
        </p>

        <h2 className="mt-6 max-w-3xl text-4xl font-semibold md:text-6xl">
          Let's build something together.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          I'm currently open to full-time opportunities,
          freelance projects, and collaborations.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">

          <a
            href="mailto:fadliyurisman@gmail.com"
            className="
              rounded-3xl
              border
              border-zinc-900
              bg-zinc-950/50
              p-6
              transition-all
              duration-300
              hover:border-zinc-700
            "
          >
            <p className="text-sm text-zinc-500">
              Email
            </p>

            <p className="mt-2 text-lg">
              fadliyurisman@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/fadliEvan"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-3xl
              border
              border-zinc-900
              bg-zinc-950/50
              p-6
              transition-all
              duration-300
              hover:border-zinc-700
            "
          >
            <p className="text-sm text-zinc-500">
              GitHub
            </p>

            <p className="mt-2 text-lg">
              github.com/fadliEvan
            </p>
          </a>

          <a
            href="https://linkedin.com/in/fadli-yurisman-487975355"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-3xl
              border
              border-zinc-900
              bg-zinc-950/50
              p-6
              transition-all
              duration-300
              hover:border-zinc-700
            "
          >
            <p className="text-sm text-zinc-500">
              LinkedIn
            </p>

            <p className="mt-2 text-lg">
              Connect with me
            </p>
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            className="
              rounded-3xl
              border
              border-zinc-900
              bg-zinc-950/50
              p-6
              transition-all
              duration-300
              hover:border-zinc-700
            "
          >
            <p className="text-sm text-zinc-500">
              Resume
            </p>

            <p className="mt-2 text-lg">
              Download CV
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}