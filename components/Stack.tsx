"use client";

import { motion } from "framer-motion";
import { Server, Database, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Server runtimes, application frameworks, and RESTful contract design.",
    skills: [
      { name: "Node.js", highlight: "Primary Runtime" },
      { name: "Express.js", highlight: "Web Framework" },
      { name: "FastAPI", highlight: "Python Async API" },
      { name: "PHP", highlight: "Enterprise Systems" },
      { name: "REST APIs", highlight: "Standard Spec" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    description: "Relational persistence, normalized schema design, and index optimization.",
    skills: [
      { name: "PostgreSQL", highlight: "ACID Relational" },
      { name: "MySQL", highlight: "Structured Store" },
      { name: "SQL Query Tuning", highlight: "Performance" },
      { name: "Schema Modeling", highlight: "Relational Integrity" },
    ],
  },
  {
    title: "AI & Intelligence",
    icon: Cpu,
    description: "Algorithmic data analysis and automated conversational pipelines.",
    skills: [
      { name: "Python", highlight: "Scripting & ML" },
      { name: "K-Means Clustering", highlight: "Unsupervised ML" },
      { name: "WhatsApp Automation", highlight: "Webhook Service" },
      { name: "AI Integration", highlight: "LLM Orchestration" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    description: "Developer tooling, containerization, and API verification suites.",
    skills: [
      { name: "Docker", highlight: "Containerization" },
      { name: "Git & GitHub", highlight: "Version Control" },
      { name: "Postman", highlight: "API Testing & Docs" },
      { name: "VS Code", highlight: "Primary IDE" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-zinc-500 uppercase tracking-[0.25em]">
            {"// 04. Technical Capabilities"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Tech Stack &amp; Tooling
            </h2>
            <p className="mt-4 max-w-xl text-base text-zinc-400 font-light leading-relaxed">
              Curated technologies and development workflows utilized across server architectures, data stores, and automation engines.
            </p>
          </div>

          <div className="font-mono-code text-xs text-zinc-500">
            <span>Engineering Discipline &amp; Scalability</span>
          </div>
        </div>

        {/* 4-Column Grid for Technical Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-zinc-300 border border-white/10 group-hover:text-white transition-colors">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono-code text-[11px] text-zinc-600">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="mt-6 space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors group-hover:border-white/10"
                      >
                        <span className="text-xs font-medium text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono-code text-zinc-500">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 font-mono-code text-[10px] text-zinc-600 flex items-center justify-between">
                  <span>Production Ready</span>
                  <span className="text-emerald-400">✓ Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}