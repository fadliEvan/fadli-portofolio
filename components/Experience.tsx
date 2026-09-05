"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    period: "2025",
    role: "Backend Developer",
    type: "Internship",
    organization: "BPS Kabupaten Pelalawan",
    location: "Pelalawan, Riau, Indonesia",
    description:
      "Contributed to the development and maintenance of internal digital government systems, delivering resilient backend architecture for data operations.",
    impacts: [
      "Engineered production-ready REST API endpoints using Node.js and PHP to serve internal application workflows.",
      "Designed and modeled normalized relational database schemas across MySQL and PostgreSQL.",
      "Diagnosed query bottlenecks, refactoring SQL queries for improved data retrieval times.",
      "Collaborated closely with cross-functional teams to integrate backend endpoints with front-facing operational portals.",
    ],
    tech: ["Node.js", "PHP", "MySQL", "PostgreSQL", "REST API", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-zinc-500 uppercase tracking-[0.25em]">
            {"// 02. Work History"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Intro Column */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Professional Experience
            </h2>
            <p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
              Applying software engineering discipline to government-level data systems and collaborative production environments.
            </p>
          </div>

          {/* Right Timeline Cards */}
          <div className="lg:col-span-8 space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-3xl border border-white/10 bg-zinc-950/60 p-8 md:p-10 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
              >
                {/* Top bar with role, badge, and date */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-zinc-300 border border-white/10">
                        <Briefcase size={14} />
                      </span>
                      <h3 className="text-2xl font-semibold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono-code text-zinc-400">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-base text-zinc-300 font-medium">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono-code text-xs text-zinc-400 gap-1">
                    <span className="inline-flex items-center gap-1.5 text-zinc-300">
                      <Calendar size={13} className="text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-zinc-500">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm text-zinc-400 font-light leading-relaxed">
                  {exp.description}
                </p>

                {/* Impact bullets */}
                <ul className="mt-6 space-y-3">
                  {exp.impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      <ArrowRight size={14} className="text-zinc-500 mt-1 shrink-0 group-hover:text-white transition-colors" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology tags */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1 font-mono-code text-xs text-zinc-400 transition-colors group-hover:border-white/10 group-hover:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}