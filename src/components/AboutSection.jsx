import {
  Code2,
  Shield,
  Database,
  Brain,
  Server,
  VectorSquareIcon,
} from "lucide-react";
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
              I am a dedicated{" "}
              <span className="font-semibold text-violet-400">
                MERN Stack Developer
              </span>{" "}
              with solid expertise in MongoDB, Express.js, React.js, and
              Node.js. I specialize in building{" "}
              <span className="font-semibold text-violet-400">full-stack</span>{" "}
              web applications that are scalable, efficient, and user-focused.
              My approach combines strong problem-solving skills with clean,
              maintainable code to deliver high-quality solutions.
            </p>

            <p>
              On the frontend, I work extensively with{" "}
              <span className="font-semibold text-violet-400"> React.js</span>{" "}
              to develop responsive and interactive user interfaces. I focus on
              performance optimization, reusable components, and modern UI
              practices using tools like{" "}
              <span className="font-semibold text-violet-400">
                {" "}
                Tailwind CSS
              </span>
              . My goal is always to create smooth, engaging user experiences
              across different devices.
            </p>
          </div>

          <div className="mt-10 grid gap-4 grid-cols-3 lg:gap-8">
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-violet-400">
                2+
              </p>
              <p className="text-sm text-gray-500">GitHub Followers</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-violet-400">
                15+
              </p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-violet-400">
                2+
              </p>
              <p className="text-sm text-gray-500">Years Coding</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <SkillCard
            icon={<Code2 size={28} />}
            title="Full Stack Development"
            desc="Building scalable web applications with React, Node.js, and modern frameworks."
            delay={0}
          />
          <SkillCard
            icon={<Database size={28} />}
            title="Database Management"
            desc="Working with MongoDB and SQL to design optimized schemas, perform efficient queries, and ensure data integrity."
            delay={100}
          />
          <SkillCard
            icon={<Server size={28} />}
            title="Backend Systems"
            desc="Designing robust APIs and database architectures with SQL, MongoDB, and more."
            delay={180}
          />
          <SkillCard
            icon={<VectorSquareIcon size={28} />}
            title="Developer Tools"
            desc="Using Git, GitHub, and modern development tools to maintain clean workflows, version control, and collaboration efficiency."
            delay={260}
          />
        </div>
      </div>
    </section>
  );
}
