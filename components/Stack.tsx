const categories = [
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "PHP",
    ],
  },

  {
    title: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="border-t border-zinc-900 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Tech Stack
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Tools, frameworks, and technologies used
            across backend development, databases,
            automation systems, and software projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-3xl
                border
                border-zinc-900
                bg-zinc-950/50
                p-8
              "
            >
              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-zinc-800
                      px-3
                      py-1
                      text-sm
                      text-zinc-400
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}