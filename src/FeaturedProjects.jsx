import React from "react";
import { Code, ExternalLink } from "lucide-react"; // optional

// Example project data (replace with your real data)
const featured = [
  {
    id: "cf-techlab",
    title: "CF TechLab",
    subtitle:
      "My tech company delivering cutting-edge web, mobile, and AI solutions.",
    tags: ["React", "Node.js", "AI/ML", "Cloud", "TypeScript"],
    bgAccent: "from-cyan-400 to-blue-400",
  },
  {
    id: "creativity-freaks",
    title: "Creativity Freaks",
    subtitle:
      "A modern e-learning platform offering free & paid courses and tutorials.",
    tags: ["HTML", "TypeScript", "JavaScript"],
    bgAccent: "from-cyan-400 to-blue-400",
  },
  {
    id: "harvestia",
    title: "Harvestia: Sustainable Farmer",
    subtitle:
      "Gamified learning project focused on sustainable agriculture & simulation.",
    tags: ["JavaScript", "Game", "Education"],
    bgAccent: "from-cyan-400 to-blue-400",
  },
  {
    id: "freakflow",
    title: "FreakFlow",
    subtitle:
      "Modern streaming platform with auth, responsive design, and streaming.",
    tags: ["React", "TypeScript", "Streaming", "Supabase"],
    bgAccent: "from-cyan-400 to-blue-400",
  },
];

const smallProjects = [
  {
    id: "pstu-club",
    title: "PSTU Entrepreneurship Club",
    meta: "HTML • CSS • JavaScript",
  },
  {
    id: "biogen",
    title: "Biogen Store Management",
    meta: "Web • CRUD • JavaScript",
  },
  {
    id: "chat-app",
    title: "Real-time Chat App",
    meta: "Vue.js • Socket.io • Node.js",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative bg-[#0b0f14] text-gray-300 py-20 px-6">
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#0f1113 1px,transparent 1px),linear-gradient(#0f1113 1px,transparent 1px)] bg-[size:44px_44px] opacity-20"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <header className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-flex items-end gap-3">
            <span>Featured</span>
            <span className="text-cyan-400 border-b-4 border-cyan-400 pb-1">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            A selection of projects that showcase my skills and interests
          </p>
        </header>

        {/* Top grid (main featured cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {featured.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-[#071016] to-[#0b1115] shadow-lg"
              aria-labelledby={`proj-${p.id}`}
            >
              {/* Top gradient hero area */}
              <div
                className={`h-32 md:h-36 flex items-center justify-center bg-gradient-to-r ${p.bgAccent} bg-clip-padding`}
                style={{ backgroundBlendMode: "normal" }}
              >
                <span className="text-4xl md:text-5xl text-black/80 select-none">
                  {"<>"}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5 md:p-6 bg-[#081018]">
                <h3
                  id={`proj-${p.id}`}
                  className="text-white font-semibold text-lg md:text-xl"
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 mb-4 leading-relaxed">
                  {p.subtitle}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-[#06282c] border border-[#05363a] text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* actions row */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 hover:text-white transition"
                    aria-label={`View code for ${p.title}`}
                  >
                    <Code size={16} />
                    <span>Code</span>
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 hover:text-white transition"
                    aria-label={`Open live demo for ${p.title}`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* small cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {smallProjects.map((s) => (
            <div
              key={s.id}
              className="rounded-lg border border-gray-800 p-4 bg-[#0f1720] text-gray-300 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="text-sm text-cyan-300">{"<>"}</div>
                {/* optional small controls */}
                <div className="flex gap-2 text-gray-400">
                  <button
                    aria-label="open"
                    className="hover:text-white transition"
                  >
                    ⤢
                  </button>
                </div>
              </div>
              <h4 className="mt-3 font-semibold text-white text-sm">
                {s.title}
              </h4>
              <p className="mt-1 text-xs text-gray-400">{s.meta}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 justify-center">
          <a
            href="#github"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-700/40 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-900/20 transition"
          >
            View All on GitHub
          </a>

          <a
            href="#company"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black shadow-[0_15px_30px_rgba(6,182,212,0.12)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.18)] transition"
          >
            CF TechLab
          </a>
        </div>
      </div>
    </section>
  );
}
