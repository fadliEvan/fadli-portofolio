const projects = [
  {
    id: "01",
    title: "Internal REST API System",
    description:
      "Built and maintained production REST APIs for internal government applications with optimized database architecture and scalable backend workflows.",
    stack: ["Node.js", "PHP", "MySQL", "REST API"],
  },
  {
    id: "02",
    title: "AI WhatsApp Bot",
    description:
      "AI-powered WhatsApp automation platform capable of handling conversations, workflow automation, and smart responses.",
    stack: ["Node.js", "WhatsApp API", "AI Integration"],
  },
  {
    id: "03",
    title: "Financial Bookkeeping App",
    description:
      "Accounting and reporting web application developed for real business operations and financial management.",
    stack: ["PHP", "MySQL", "Authentication"],
  },
  {
    id: "04",
    title: "K-Means Clustering Analysis",
    description:
      "Machine learning project focused on data clustering, analysis, and visualization using K-Means algorithms.",
    stack: ["Python", "Machine Learning", "K-Means"],
  },
];

const otherProjects = [
  {
    name: "Travel Bali Landing Page",
    url: "https://fadlievan.github.io/travelbali/",
  },
  {
    name: "Fashion Distro Website",
    url: "https://fadlievan.github.io/fashiondistro/",
  },
  {
    name: "Coffee Shop Landing Page",
    url: "https://fadlievan.github.io/coffeshop1/",
  },
  {
    name: "LuxPhone Store",
    url: "https://luxphone-eight.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-900 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Backend systems, automation tools, and software solutions
            built during academic, freelance, and professional work.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group
                rounded-3xl
                border
                border-zinc-900
                bg-zinc-950/50
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-700
              "
            >
              <div className="flex items-center justify-between">

                <span className="text-sm text-zinc-600">
                  {project.id}
                </span>

                <span
                  className="
                    text-zinc-700
                    transition-all
                    duration-300
                    group-hover:text-white
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-zinc-800
                      px-3
                      py-1
                      text-sm
                      text-zinc-500
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Other Projects */}
        <div className="mt-24">

          <h3 className="text-2xl font-semibold">
            Other Projects
          </h3>

          <p className="mt-3 text-zinc-400">
            Additional websites, landing pages, and frontend projects.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {otherProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  border
                  border-zinc-900
                  bg-zinc-950/30
                  p-5
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-zinc-700
                  hover:text-white
                "
              >
                <div className="flex items-center justify-between">

                  <span>
                    {project.name}
                  </span>

                  <span>
                    ↗
                  </span>

                </div>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}