"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, GraduationCap, CheckCircle2 } from "lucide-react";

const focusAreas = [
  {
    icon: Server,
    title: "RESTful API Architecture",
    description:
      "Crafting clean, well-structured endpoints with robust validation, authorization protocols, and efficient lifecycle handling using Node.js & PHP.",
  },
  {
    icon: Database,
    title: "Data Modeling & Optimization",
    description:
      "Designing normalized relational database schemas across MySQL and PostgreSQL with an emphasis on query performance and referential integrity.",
  },
  {
    icon: BrainCircuit,
    title: "Automation & AI Integrations",
    description:
      "Building smart bots and automated pipelines that connect external APIs with custom logic to eliminate manual operational friction.",
  },
];

const highlights = [
  "Hands-on experience developing internal systems during internship at BPS Pelalawan",
  "Final-year Informatics Engineering student passionate about backend infrastructure",
  "Practical knowledge of Python-based machine learning (K-Means Clustering)",
  "Disciplined focus on clean code, API testing, and database optimization",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-white/5 overflow-hidden">
      {/* Background soft ambient */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-500/[0.03] blur-[120px] rounded-full" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-zinc-500 uppercase tracking-[0.25em]">
            {"// 01. Profile & Background"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Statement & Narrative */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15]"
            >
              Engineering reliable backend foundations for real-world operations.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 space-y-5 text-base sm:text-lg text-zinc-400 font-light leading-relaxed"
            >
              <p>
                I am a final-year Informatics Engineering student who focuses on backend architecture, API engineering, and database management. I enjoy solving architectural bottlenecks and building clean, testable server logic that applications rely upon.
              </p>
              <p>
                During my tenure at <span className="text-white font-medium">BPS Kabupaten Pelalawan</span>, I worked directly on internal production applications—developing robust REST APIs in Node.js and PHP, structuring relational tables, and optimizing complex queries for day-to-day administrative reliability.
              </p>
              <p>
                My curiosity also expands toward AI automations and algorithmic analysis, combining machine learning models like K-Means clustering with automated workflows such as AI WhatsApp bots.
              </p>
            </motion.div>

            {/* Quick check highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-zinc-300 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Key Pillars & Education Badge */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Informatics Engineering</p>
                  <p className="text-xs text-zinc-500 font-mono-code">Final-Year Undergraduate</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-zinc-400 leading-relaxed font-light">
                Grounded in software engineering principles, algorithms, data structures, and database management systems.
              </p>
            </div>

            {/* Focus Pillars */}
            <div className="space-y-3">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group rounded-2xl border border-white/5 bg-zinc-950/40 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-zinc-300 group-hover:text-white transition-colors">
                        <IconComponent size={16} />
                      </div>
                      <h3 className="text-sm font-medium text-white tracking-wide">
                        {area.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-400 font-light pl-11">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}