import { Briefcase, Calendar } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Founder & Lead Developer",
      org: "CF TechLab",
      date: "2023 – Present",
      type: "Full-time",
      desc: "Founded and leading a tech company delivering cutting-edge web, mobile, and AI solutions. Managing projects from concept to deployment.",
      responsibilities: [
        "Leading development of FreakFlow streaming platform",
        "Managing team of developers and designers",
        "Client consultation and project planning",
        "Implementing AI/ML solutions for clients",
      ],
    },
    {
      title: "CTF Player & Security Researcher",
      org: "TryHackMe / HackTheBox",
      date: "2021 – Present",
      type: "Hobby",
      desc: "Active participation in Capture The Flag competitions and security research to enhance cybersecurity skills.",
      responsibilities: [
        "Solving web, crypto, and forensics challenges",
        "Learning penetration testing techniques",
        "Contributing to security writeups",
        "Network security analysis",
      ],
    },
    {
      title: "Campus Ambassador",
      org: "NetCom Learning Bangladesh",
      date: "May 2025 – Present",
      type: "Part-time",
      desc: "Representing NetCom Learning on campus and promoting AI/tech learning initiatives.",
      responsibilities: [
        "Coordinate campus outreach and events",
        "Promote AI prompting competitions",
        "Support student participation",
      ],
    },
    {
      title: "Public Relations Communications Specialist",
      org: "CSE Club, PSTU",
      date: "June 2025 – Present",
      type: "Part-time",
      desc: "Driving communications and PR for CSE Club activities, events, and collaborations.",
      responsibilities: [
        "Plan and publish announcements",
        "Coordinate with partners",
        "Manage event communications",
      ],
    },
    {
      title: "Campus Ambassador",
      org: "Creative IT Institute",
      date: "July 2024 – Present",
      type: "Part-time",
      desc: "Bridging campus and IT industry via workshops, events, and inspiration.",
      responsibilities: [
        "Organize workshops and seminars",
        "Promote Creative IT programs",
        "Mentor students on tech careers",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#0c1117] to-black py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-6 shadow-[0_0_0_1px_rgba(0,255,200,0.1),0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_0_1px_rgba(0,255,200,0.3),0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                    <Briefcase size={14} className="text-cyan-400" />
                    {exp.org}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-black/40 border border-cyan-400/20 text-cyan-300">
                    <Calendar size={14} />
                    {exp.date}
                  </span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {exp.desc}
              </p>

              {/* Responsibilities */}
              <div className="mt-5">
                <h4 className="text-cyan-400 text-sm font-semibold mb-3">
                  Key Responsibilities
                </h4>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold shadow-lg hover:scale-105 transition">
            See more (1)
          </button>
        </div>
      </div>
    </section>
  );
}
