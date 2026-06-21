export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-900 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
          About
        </p>

        <div className="mt-8 max-w-4xl">

          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Backend Developer passionate about building
            scalable systems and practical software solutions.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I am a final-year Informatics Engineering student with
            experience in backend development, REST API design,
            database management, automation systems, and AI integrations.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            During my internship at BPS Kabupaten Pelalawan,
            I contributed to the development of internal systems
            using Node.js, PHP, MySQL, and PostgreSQL while
            collaborating with teams to deliver reliable solutions.
          </p>

        </div>

      </div>
    </section>
  );
}