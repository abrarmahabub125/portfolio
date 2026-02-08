import React from "react";
import { Github, Linkedin, Facebook, Mail, ChevronDown } from "lucide-react";

/**
 * HeroSection.jsx
 *
 * Usage:
 *  - Ensure Tailwind is configured.
 *  - Replace avatarUrl with your image path.
 *  - Adjust colors / copy as needed.
 */

export default function HeroSection() {
  const avatarUrl = "/path/to/avatar.jpg"; // <-- replace with your avatar path

  return (
    <header className="relative overflow-hidden bg-[#0b0f14] text-gray-300 min-h-[680px] flex items-center">
      {/* subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,#0f1113 1px,transparent 1px),linear-gradient(#0f1113 1px,transparent 1px)] bg-[size:56px_56px] opacity-20"
      />

      {/* gentle radial vignette behind center */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] w-[720px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 18%, rgba(0,0,0,0.0) 60%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* avatar */}
        <div className="flex justify-center">
          <div
            className="rounded-full p-1"
            style={{
              boxShadow:
                "0 8px 30px rgba(6,182,212,0.16), inset 0 0 24px rgba(6,182,212,0.12)",
            }}
          >
            <img
              src={avatarUrl}
              alt="Profile"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#042e31]"
              style={{
                boxShadow: "0 0 40px rgba(6,182,212,0.28)",
                transform: "translateZ(0)",
              }}
            />
          </div>
        </div>

        {/* micro intro and big name */}
        <p className="mt-6 text-sm text-gray-400 tracking-widest">Hello, I'm</p>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
          Hridoy Chandra Sarker
        </h1>

        {/* badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="inline-block rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-400 to-[#06b6d4] text-black shadow-[0_12px_30px_rgba(6,182,212,0.14)]">
            Founder @ CF TechLab
          </span>

          <span className="inline-block rounded-full px-4 py-2 text-sm font-medium border border-gray-700 text-cyan-300 bg-[#071216]">
            Full Stack Developer
          </span>

          <span className="inline-block rounded-full px-4 py-2 text-sm font-medium border border-gray-700 text-cyan-300 bg-[#071216]">
            Cybersecurity Enthusiast
          </span>
        </div>

        {/* description */}
        <p className="mt-8 mx-auto max-w-3xl text-gray-400 leading-relaxed px-4 text-center">
          Passionate technologist pursuing Computer Science at PSTU. I build
          full-stack applications, compete in CTF challenges, and explore the
          fascinating world of data science and machine learning.
        </p>

        {/* social icons */}
        <div className="mt-8 flex justify-center gap-4">
          <RoundIcon href="#" label="github">
            <Github size={18} />
          </RoundIcon>
          <RoundIcon href="#" label="linkedin">
            <Linkedin size={18} />
          </RoundIcon>
          <RoundIcon href="#" label="facebook">
            <Facebook size={18} />
          </RoundIcon>
          <RoundIcon href="#" label="email">
            <Mail size={18} />
          </RoundIcon>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-semibold shadow-[0_20px_50px_rgba(6,182,212,0.18)] hover:scale-[1.01] transition"
          >
            Get In Touch
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-gray-700 text-cyan-300 hover:bg-[#071618] transition"
          >
            View Projects
          </a>
        </div>

        {/* chevron down */}
        <div className="mt-8 flex justify-center">
          <button
            aria-label="Scroll down"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#071617] border border-gray-800 text-cyan-300 hover:bg-[#052829] transition"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* small circular icon used in social row */
function RoundIcon({ children, href = "#", label = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b1316] border border-gray-800 text-gray-300 hover:bg-[#052829] transition"
    >
      {children}
    </a>
  );
}
