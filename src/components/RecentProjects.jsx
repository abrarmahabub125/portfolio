import { Code, ExternalLink } from "lucide-react";

const featured = [
  {
    id: "cf-techlab",
    title: "CF TechLab",
    subtitle:
      "My tech company delivering cutting-edge web, mobile, and AI solutions.",
    tags: ["React", "Node.js", "AI/ML", "Cloud", "TypeScript"],
    bgAccent: "from-violet-500 to-purple-400",
  },
  {
    id: "creativity-freaks",
    title: "Creativity Freaks",
    subtitle:
      "A modern e-learning platform offering free and paid courses and tutorials.",
    tags: ["HTML", "TypeScript", "JavaScript"],
    bgAccent: "from-violet-500 to-purple-400",
  },
  {
    id: "harvestia",
    title: "Harvestia: Sustainable Farmer",
    subtitle:
      "Gamified learning project focused on sustainable agriculture and simulation.",
    tags: ["JavaScript", "Game", "Education"],
    bgAccent: "from-violet-500 to-purple-400",
  },
  {
    id: "freakflow",
    title: "FreakFlow",
    subtitle:
      "Modern streaming platform with auth, responsive design, and streaming.",
    tags: ["React", "TypeScript", "Streaming", "Supabase"],
    bgAccent: "from-violet-500 to-purple-400",
  },
];

export default function RecentProjects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0b0f14] px-5 py-20 text-gray-300 sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#0f1113_1px,transparent_1px),linear-gradient(#0f1113_1px,transparent_1px)] bg-[size:44px_44px] opacity-20"
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-10 text-center lg:mb-12" data-aos="fade-up">
          <h2 className="inline-flex items-center gap-2 text-3xl font-semibold text-white lg:text-4xl">
            <span>Featured</span>
            <span className="bg-linear-to-r bg-clip-text text-transparent from-violet-500 to-purple-300">
              Projects
            </span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-32 rounded-full bg-linear-to-r from-violet-500 to-purple-400" />

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 lg:text-base">
            A selection of projects that showcase my skills and interests
          </p>
        </header>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#081018] shadow-lg"
              aria-labelledby={`proj-${project.id}`}
              data-aos="fade-up"
              data-aos-delay={index * 110}
            >
              <div
                className={`flex h-28 items-center justify-center bg-linear-to-r sm:h-32 md:h-36 ${project.bgAccent}`}
              >
                <span className="select-none text-4xl text-black/80 md:text-5xl">
                  {"<>"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                  id={`proj-${project.id}`}
                  className="text-lg font-semibold text-white md:text-xl"
                >
                  {project.title}
                </h3>
                <p className="mb-4 mt-2 text-sm leading-relaxed text-gray-400">
                  {project.subtitle}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple-400/20 bg-purple-400/[0.03] px-3 py-1 text-xs text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 hover:text-white"
                    aria-label={`View code for ${project.title}`}
                  >
                    <Code size={16} />
                    <span>Code</span>
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 hover:text-white"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="flex items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <a
            href="#github"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs rounded-full border border-gray-800 bg-white/[0.03] px-4 py-2 lg:text-sm text-white"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
