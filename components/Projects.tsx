"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Bot, Database, BarChart3, ExternalLink } from "lucide-react";
import { featuredProjects, clientProjects } from "@/data/projects";

const projectIcons = {
  "01": Terminal,
  "02": Bot,
  "03": Database,
  "04": BarChart3,
};

const projectCodes = {
  "01": `// REST API Controller
router.get("/v1/analytics/records", authGuard, async (req, res) => {
  const result = await db.query(
    "SELECT id, metrics, timestamp FROM logs ORDER BY id DESC LIMIT 50"
  );
  return res.status(200).json({ status: "success", data: result.rows });
});`,
  "02": `// AI WhatsApp Webhook Handler
async function handleMessage(event) {
  const { from, text } = event.payload;
  const aiResponse = await aiService.complete({
    prompt: text,
    context: "Customer support & task orchestration"
  });
  await whatsappClient.sendText(from, aiResponse.text);
}`,
  "03": `// Financial Bookkeeping Transaction
function recordLedgerEntry($pdo, $debitAcc, $creditAcc, $amount) {
  $pdo->beginTransaction();
  $stmt = $pdo->prepare("INSERT INTO transactions VALUES (?, ?, ?, NOW())");
  $stmt->execute([$debitAcc, $creditAcc, $amount]);
  $pdo->commit();
}`,
  "04": `# K-Means Clustering Algorithm Pipeline
kmeans = KMeans(n_clusters=4, init='k-means++', random_state=42)
cluster_labels = kmeans.fit_predict(scaled_features)
silhouette = silhouette_score(scaled_features, cluster_labels)
print(f"Optimal Silhouette Score: {silhouette:.4f}")`,
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-zinc-500 uppercase tracking-[0.25em]">
            {"// 03. Selected Works"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              Featured Systems &amp; Code
            </h2>
            <p className="mt-4 max-w-xl text-base text-zinc-400 font-light leading-relaxed">
              Architectural solutions, production REST APIs, automation pipelines, and machine learning models crafted with precision.
            </p>
          </div>

          <div className="font-mono-code text-xs text-zinc-500 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500 inline-block animate-pulse" />
            <span>4 Key Backend Projects</span>
          </div>
        </div>

        {/* Featured Projects Grid / Editorial Showcase */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => {
            const Icon = projectIcons[project.id as keyof typeof projectIcons] || Terminal;
            const codeSample = projectCodes[project.id as keyof typeof projectCodes];
            const isReversed = idx % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/5"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Info Column */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono-code text-sm font-semibold text-zinc-500">
                        /{project.id}
                      </span>
                      <span className="h-3 w-px bg-white/10" />
                      <span className="text-xs font-mono-code uppercase tracking-wider text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {project.details && (
                      <p className="mt-3 text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">
                        {project.details}
                      </p>
                    )}

                    {/* Metrics / Key result badge */}
                    {project.metrics && (
                      <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-1.5 text-xs text-zinc-300 font-mono-code">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech stack badges */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono-code text-xs text-zinc-300 transition-colors group-hover:border-white/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual / Code Schema Preview Frame */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl border border-white/10 bg-[#0c0c0e] p-5 shadow-2xl transition-all duration-300 group-hover:border-white/25">
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 font-mono-code text-[11px] text-zinc-500">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-red-500/80 transition-colors" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-amber-500/80 transition-colors" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500/80 transition-colors" />
                          <span className="ml-2 text-zinc-400 font-medium">
                            {project.title.toLowerCase().replace(/\s+/g, "-")}.src
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400">
                          <Icon size={13} />
                          <span className="text-[10px] uppercase">Engine</span>
                        </div>
                      </div>

                      {/* Code Snippet Block */}
                      <pre className="font-mono-code text-xs text-zinc-300 overflow-x-auto p-2 leading-relaxed">
                        <code>{codeSample}</code>
                      </pre>

                      {/* Bottom status bar */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono-code text-[10px] text-zinc-500">
                        <span>UTF-8 • LF • Architecture Verified</span>
                        <span className="text-emerald-400">● 100% Validated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Additional Frontend & Client Deployments Showcase */}
        <div className="mt-28">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <p className="font-mono-code text-xs uppercase tracking-widest text-zinc-500">
                {"// Index"}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white tracking-tight">
                Additional Deployments &amp; Web Applications
              </h3>
            </div>
            <span className="hidden sm:inline-block font-mono-code text-xs text-zinc-500">
              Interactive Web Works
            </span>
          </div>

          <div className="divide-y divide-white/5 border-y border-white/5">
            {clientProjects.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                    {item.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </span>
                  <span className="text-xs text-zinc-500 font-mono-code">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-6 mt-2 sm:mt-0">
                  <span className="text-xs font-mono-code text-zinc-400">
                    {item.stack}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono-code text-zinc-300 group-hover:border-white/20 group-hover:bg-white/10 transition-colors">
                    <ExternalLink size={11} />
                    {item.year}
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