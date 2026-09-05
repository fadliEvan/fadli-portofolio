"use client";

import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portofolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-12 bg-[#060608]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black tracking-normal">
                FY
              </span>
              <span className="font-semibold text-white tracking-tight">
                {portfolio.name}
              </span>
            </div>
            <p className="mt-2 text-xs text-zinc-400 font-light max-w-sm">
              Backend Developer specializing in REST APIs, relational databases, and AI automation systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="hover:text-white transition-colors"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
          <p className="text-zinc-600">
            Engineered with Next.js &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}