const techData = [
  {
    title: "<Frontend />",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "<Backend />",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "Django", level: 70 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "<Languages />",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 70 },
      { name: "Kotlin", level: 65 },
    ],
  },
  {
    title: "<Database />",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "MS SQL Server", level: 70 },
      { name: "Oracle", level: 65 },
    ],
  },
  {
    title: "<Data & ML />",
    items: [
      { name: "Pandas", level: 75 },
      { name: "TensorFlow", level: 65 },
      { name: "PyTorch", level: 60 },
      { name: "Scikit-learn", level: 70 },
      { name: "NumPy", level: 75 },
    ],
  },
  {
    title: "<DevOps & Tools />",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Vite", level: 90 },
      { name: "npm", level: 90 },
    ],
  },
  {
    title: "<Security />",
    items: [
      { name: "CTF/Pentesting", level: 70 },
      { name: "Linux", level: 80 },
      { name: "Network Security", level: 65 },
      { name: "Cryptography", level: 60 },
      { name: "OWASP", level: 70 },
    ],
  },
  {
    title: "<Other />",
    items: [
      { name: "WordPress", level: 80 },
      { name: "Supabase", level: 85 },
      { name: "Canva", level: 75 },
      { name: "PHP", level: 75 },
      { name: "Redux", level: 75 },
    ],
  },
];

const tags = [
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "Vue.js",
  "PyTorch",
  "Kotlin",
  "Java",
  "WordPress",
  "Supabase",
  "Vercel",
  "Vite",
];

export default function TechStackSection() {
  return (
    <section className="relative bg-[#0b0f14] text-white py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techData.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.08)] transition-all duration-300"
            >
              <h3 className="text-cyan-400 font-semibold mb-6 tracking-wide">
                {section.title}
              </h3>

              <div className="space-y-5">
                {section.items.map((tech, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-5 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
