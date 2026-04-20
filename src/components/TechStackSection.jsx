const techData = [
  {
    title: "<Frontend />",
    items: [
      { name: "JavaScript", level: 80 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "<Backend />",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 85 },
      { name: "REST API", level: 90 },
      { name: "Security", level: 80 },
    ],
  },
  {
    title: "<Database />",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "Advanced Queries", level: 85 },
      { name: "Aggregation Pipeline", level: 90 },
      { name: "Indexing", level: 75 },
    ],
  },
  {
    title: "<DevOps & Tools />",
    items: [
      { name: "Git", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Vite", level: 90 },
      { name: "npm", level: 90 },
    ],
  },
];

const tags = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Docker",
  "Git",
  "Vercel",
  "Vite",
];

export default function TechStackSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0b0f14] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-semibold lg:text-4xl">
            Tech{" "}
            <span className="bg-linear-to-r bg-clip-text text-transparent from-violet-500 to-purple-300">
              Stack
            </span>
          </h2>
          <div className="mx-auto mt-3 lg:mt-4 h-1 w-24 rounded-full bg-linear-to-r from-violet-500 to-purple-300" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {techData.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl hover:border-violet-500/40 sm:p-6"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h3 className="mb-6 bg-linear-to-r bg-clip-text font-semibold tracking-wide text-transparent from-violet-500 to-purple-300">
                {section.title}
              </h3>

              <div className="space-y-5">
                {section.items.map((tech) => (
                  <div key={tech.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-violet-600 to-purple-400"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-16 sm:gap-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-gray-300 hover:border-violet-500/40 hover:text-violet-400 sm:px-5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
