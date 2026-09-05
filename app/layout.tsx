import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fadli Yurisman — Backend Engineer & Creative Developer",
  description:
    "Backend Developer specializing in REST APIs, automation systems, database architecture, and AI-powered tools.",
  keywords: [
    "Fadli Yurisman",
    "Backend Engineer",
    "Software Engineer",
    "Node.js",
    "FastAPI",
    "REST API",
    "Portfolio",
  ],
  authors: [{ name: "Fadli Yurisman" }],
  openGraph: {
    title: "Fadli Yurisman — Backend Engineer & Creative Developer",
    description:
      "Backend Developer specializing in REST APIs, automation systems, database architecture, and AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-white selection:text-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#08080a] text-zinc-100 min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}