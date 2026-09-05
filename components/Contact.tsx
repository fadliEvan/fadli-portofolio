"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolio } from "@/data/portofolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-white/5 overflow-hidden">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-indigo-500/[0.05] blur-[150px] rounded-full" />

      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-zinc-500 uppercase tracking-[0.25em]">
            {"// 05. Get In Touch"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        {/* Dramatic Closing Statement */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 font-mono-code mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for full-time engineering &amp; collaborations</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Let&apos;s build something <span className="text-gradient">meaningful</span> together.
            </h2>

            <p className="mt-6 text-base sm:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
              Whether you are looking for a dedicated backend engineer, need high-throughput REST API services, or want to discuss automated workflows, my inbox is always open.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Email / Copy Card */}
          <div className="group relative rounded-3xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-white/20">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 border border-white/10">
                  <Mail size={18} />
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono-code text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-zinc-500">
                Email Address
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="mt-1 block text-sm font-medium text-white hover:underline break-all"
              >
                {portfolio.email}
              </a>
            </div>

            <a
              href={`mailto:${portfolio.email}`}
              className="mt-8 inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-white transition-colors"
            >
              <span>Send direct mail</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* GitHub Card */}
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 border border-white/10 group-hover:text-white transition-colors">
                  <GithubIcon size={18} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono-code text-zinc-500">
                  Code
                </span>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-zinc-500">
                GitHub Repository
              </p>
              <p className="mt-1 text-base font-semibold text-white tracking-tight">
                github.com/fadliEvan
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-white transition-colors">
              <span>Inspect repositories</span>
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 border border-white/10 group-hover:text-white transition-colors">
                  <LinkedinIcon size={18} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono-code text-zinc-500">
                  Network
                </span>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-zinc-500">
                LinkedIn Profile
              </p>
              <p className="mt-1 text-base font-semibold text-white tracking-tight">
                Fadli Yurisman
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-white transition-colors">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* Resume Card */}
          <a
            href="/CVFadliYurisman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 border border-white/10 group-hover:text-white transition-colors">
                  <FileText size={18} />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono-code text-zinc-500">
                  PDF
                </span>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-zinc-500">
                Curriculum Vitae
              </p>
              <p className="mt-1 text-base font-semibold text-white tracking-tight">
                Download CV
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-white transition-colors">
              <span>View resume PDF</span>
              <ArrowUpRight size={13} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}