export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-900 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-12 text-sm uppercase tracking-widest text-zinc-500">
          Experience
        </p>

        <div className="grid gap-8 md:grid-cols-[200px_1fr]">

          <div>
            <p className="text-zinc-500">
              2025
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Backend Developer
            </h3>

            <p className="mt-2 text-zinc-500">
              BPS Kabupaten Pelalawan
            </p>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>Built production REST APIs using Node.js and PHP.</li>
              <li>Designed relational database structures.</li>
              <li>Optimized SQL queries and data access.</li>
              <li>Collaborated with cross-functional teams.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}