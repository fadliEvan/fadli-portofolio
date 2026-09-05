"use client";

import { useEffect, useRef } from "react";

export default function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices that support hover / mouse pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const glow = glowRef.current;
    if (!glow) return;

    glow.style.opacity = "1";

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-700 blur-[130px] pointer-events-none will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
