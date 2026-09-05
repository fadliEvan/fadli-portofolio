"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, Database, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolio } from "@/data/portofolio";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      {/* Background radial spotlights & subtle glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-zinc-800/10 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[100px] rounded-full" />

      <div className="relative mx-auto max-w-6xl w-full px-6 flex-1 flex flex-col justify-center">
        {/* Top meta-bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5"
        >
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="tracking-widest uppercase text-[11px] text-zinc-500">
              Location
            </span>
            <span className="text-zinc-300">Indonesia (WIB / GMT+7)</span>
          </div>

          <div className="flex items-center gap-6 font-mono-code text-xs text-zinc-500">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Database size={13} className="text-zinc-400" />
              REST APIs & Databases
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Cpu size={13} className="text-zinc-400" />
              AI Automation
            </span>
          </div>
        </motion.div>

        {/* Main Dramatic Headline */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300 mb-6 backdrop-blur-md">
              <Sparkles size={12} className="text-amber-400" />
              <span className="tracking-wide">Software & Backend Engineering</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-bold tracking-tight text-white leading-[0.95]">
              <span className="block text-zinc-500 font-light tracking-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-2">
                Hello, I&apos;m
              </span>
              <span className="text-gradient">Fadli Yurisman.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                I architect high-performance <span className="text-white font-medium">REST APIs</span>, robust database infrastructures, and <span className="text-white font-medium">AI-driven automation systems</span> that turn complex backend logic into seamless digital experiences.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-xl hover:shadow-white/10 active:scale-95"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDownRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Read Profile</span>
                  <span className="font-mono-code text-xs text-zinc-600">→</span>
                </a>
              </div>
            </div>

            {/* Interactive / Cinematic Terminal Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono-code text-[11px] text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-zinc-400">fadli@engine:~$</span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-zinc-500">
                    <Terminal size={12} />
                    status: online
                  </span>
                </div>

                {/* Code body */}
                <div className="pt-4 font-mono-code text-xs space-y-2 text-zinc-300 leading-relaxed">
                  <div className="text-zinc-500">{"// Core Engineering Identity"}</div>
                  <div>
                    <span className="text-indigo-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">name:</span>{" "}
                    <span className="text-emerald-300">&quot;Fadli Yurisman&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">role:</span>{" "}
                    <span className="text-emerald-300">&quot;Backend Engineer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">focus:</span> [
                    <span className="text-amber-300">&quot;REST APIs&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;PostgreSQL&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;AI Automation&quot;</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">openForHire:</span>{" "}
                    <span className="text-purple-400">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Subtle highlight sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Metric Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono-code"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              BPS Pelalawan
            </p>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
              Internship Experience
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Production
            </p>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
              Internal REST APIs
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Node &amp; PHP
            </p>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
              Primary Backend Stack
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              AI Bot
            </p>
            <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
              Workflow Automations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}