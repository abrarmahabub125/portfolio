import { Code2, Shield, Database, Brain } from "lucide-react";
import SkillCard from "./SkillCard";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0f14] px-5 py-20 text-gray-300 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-aos="fade-right">
          <div className="flex w-full lg:w-fit flex-col items-center lg:items-start">
            <h2 className="mb-3 text-3xl font-semibold text-white lg:text-4xl">
              About <span className="text-violet-400">Me</span>
            </h2>
            <div className="h-1 w-24 rounded-full bg-linear-to-r from-violet-500 to-purple-300" />
          </div>

          <div className="mt-5 space-y-6 text-sm lg:text-base leading-6 lg:leading-7 text-gray-400">
            <p>
              I&apos;m a passionate technologist from{" "}
              <span className="font-semibold text-violet-400">
                Dhaka, Bangladesh
              </span>
              , currently pursuing Computer Science at PSTU. As the{" "}
              <span className="font-semibold text-violet-400">
                Founder of CF TechLab
              </span>
              , I lead a team building innovative digital solutions including
              FreakFlow, a modern streaming platform.
            </p>

            <p>
              My journey in tech spans across multiple domains, from crafting
              beautiful web experiences to diving deep into{" "}
              <span className="font-semibold text-violet-400">
                cybersecurity challenges
              </span>
              . I actively participate in competitive programming and sharpen my
              security skills through{" "}
              <span className="font-semibold text-violet-400">TryHackMe</span>{" "}
              and{" "}
              <span className="font-semibold text-violet-400">HackTheBox</span>.
            </p>

            <p>
              At{" "}
              <span className="font-semibold text-violet-400">CF TechLab</span>,
              we&apos;re committed to delivering cutting-edge web, mobile, and
              AI solutions that transform ideas into reality.
            </p>
          </div>

          <div className="mt-10 grid gap-4 grid-cols-3 lg:gap-8">
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-violet-400">
                14+
              </p>
              <p className="text-sm text-gray-500">GitHub Followers</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-violet-400">
                50+
              </p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-violet-400">
                3+
              </p>
              <p className="text-sm text-gray-500">Years Coding</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <SkillCard
            icon={<Code2 size={28} />}
            title="Full Stack Development"
            desc="Building scalable web applications with React, Node.js, and modern frameworks"
            delay={0}
          />
          <SkillCard
            icon={<Shield size={28} />}
            title="Cybersecurity"
            desc="CTF player and security researcher, exploring vulnerabilities and defense strategies"
            delay={100}
          />
          <SkillCard
            icon={<Database size={28} />}
            title="Backend Systems"
            desc="Designing robust APIs and database architectures with SQL, MongoDB, and more"
            delay={180}
          />
          <SkillCard
            icon={<Brain size={28} />}
            title="Machine Learning"
            desc="Applying data science techniques with Python, TensorFlow, and scikit-learn"
            delay={260}
          />
        </div>
      </div>
    </section>
  );
}
