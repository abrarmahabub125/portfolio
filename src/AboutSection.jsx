import { Code2, Shield, Database, Brain } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-[#0b0f14] text-gray-300 py-20 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About{" "}
            <span className="text-cyan-400 border-b-4 border-cyan-400 pb-1">
              Me
            </span>
          </h2>

          <div className="space-y-6 leading-relaxed text-gray-400">
            <p>
              I’m a passionate technologist from{" "}
              <span className="text-cyan-400 font-semibold">
                Dhaka, Bangladesh
              </span>
              , currently pursuing Computer Science at PSTU. As the{" "}
              <span className="text-cyan-400 font-semibold">
                Founder of CF TechLab
              </span>
              , I lead a team building innovative digital solutions including
              FreakFlow — a modern streaming platform.
            </p>

            <p>
              My journey in tech spans across multiple domains, from crafting
              beautiful web experiences to diving deep into{" "}
              <span className="text-cyan-400 font-semibold">
                cybersecurity challenges
              </span>
              . I actively participate in competitive programming and sharpen my
              security skills through{" "}
              <span className="text-cyan-400 font-semibold">TryHackMe</span> and{" "}
              <span className="text-cyan-400 font-semibold">HackTheBox</span>.
            </p>

            <p>
              At <span className="text-cyan-400 font-semibold">CF TechLab</span>
              , we’re committed to delivering cutting-edge web, mobile, and AI
              solutions that transform ideas into reality.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-10">
            <div>
              <p className="text-3xl font-bold text-cyan-400">14+</p>
              <p className="text-sm text-gray-500">GitHub Followers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">50+</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">3+</p>
              <p className="text-sm text-gray-500">Years Coding</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          <SkillCard
            icon={<Code2 size={28} />}
            title="Full Stack Development"
            desc="Building scalable web applications with React, Node.js, and modern frameworks"
          />
          <SkillCard
            icon={<Shield size={28} />}
            title="Cybersecurity"
            desc="CTF player & security researcher, exploring vulnerabilities and defense strategies"
          />
          <SkillCard
            icon={<Database size={28} />}
            title="Backend Systems"
            desc="Designing robust APIs and database architectures with SQL, MongoDB, and more"
          />
          <SkillCard
            icon={<Brain size={28} />}
            title="Machine Learning"
            desc="Applying data science techniques with Python, TensorFlow, and scikit-learn"
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, desc }) {
  return (
    <div className="group bg-[#11161c] border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/40 transition duration-300 shadow-lg hover:shadow-cyan-500/10">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
