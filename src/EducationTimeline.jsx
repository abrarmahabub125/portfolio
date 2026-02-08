import React from "react";
import { Calendar, MapPin } from "lucide-react";

/**
 * EducationTimeline.jsx
 * Single-file React + Tailwind component to reproduce the "My Education" timeline.
 *
 * Usage:
 *  - Make sure Tailwind is configured in your project.
 *  - Install icons: npm i lucide-react
 *  - Import and use: <EducationTimeline />
 */

const timelineData = [
  {
    period: "2022 - Present",
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Patuakhali Science and Technology University (PSTU)",
    location: "Patuakhali, Bangladesh",
    desc: "Currently pursuing bachelor's degree with focus on software engineering, data structures, algorithms, and cybersecurity.",
    tags: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Computer Networks",
      "Machine Learning",
    ],
    side: "right",
  },
  {
    period: "2019 - 2021",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College",
    location: "Dhaka, Bangladesh",
    desc: "Completed higher secondary education in Science group with excellent academic performance.",
    tags: ["Science Group", "Physics", "Chemistry", "Mathematics"],
    side: "left",
  },
  {
    period: "2017 - 2019",
    title: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College",
    location: "Dhaka, Bangladesh",
    desc: "Completed secondary education with strong foundation in science and mathematics.",
    tags: ["Science Group", "GPA 5.00"],
    side: "right",
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative bg-[#0b0f14] text-gray-300 py-20 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,#0f1113 1px,transparent 1px),linear-gradient(#0f1113 1px,transparent 1px)] bg-[size:44px_44px] opacity-20"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-flex items-center gap-4">
            <span>My</span>
            <span className="text-cyan-400 border-b-4 border-cyan-400 pb-1">
              Education
            </span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#0e3740] to-transparent" />

          {/* Items */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isRight = item.side === "right";
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start md:items-stretch"
                >
                  {/* Left card */}
                  <div
                    className={`md:w-5/12 px-2 md:px-6 ${
                      isRight ? "md:order-1 md:ml-auto" : "md:order-0"
                    }`}
                  >
                    {!isRight && <EducationCard item={item} align="left" />}
                  </div>

                  {/* center column with dot */}
                  <div className="w-full md:w-24 flex justify-center relative">
                    <div className="flex items-start md:items-center h-full">
                      {/* connector dot */}
                      <div className="mt-2 md:mt-6">
                        <span className="block w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.18)] ring-4 ring-[#071018]" />
                      </div>
                    </div>
                  </div>

                  {/* Right card */}
                  <div
                    className={`md:w-5/12 px-2 md:px-6 ${
                      isRight ? "md:order-2" : "md:order-3 md:ml-auto"
                    }`}
                  >
                    {isRight && <EducationCard item={item} align="right" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Card component */
function EducationCard({ item }) {
  return (
    <div className="bg-[#0f1720] border border-gray-800 rounded-2xl p-6 shadow-lg shadow-black/40">
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex items-center gap-2 text-sm text-cyan-300 font-semibold">
          <Calendar size={16} />
          <span>{item.period}</span>
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {item.title}
      </h3>

      <div className="text-sm text-gray-400 mb-3 space-y-1">
        <p className="flex items-center gap-2">
          <MapPin size={14} />
          <span>{item.institution}</span>
        </p>
        <p className="flex items-center gap-2 opacity-70">
          <svg
            className="w-3 h-3 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
          <span>{item.location}</span>
        </p>
      </div>

      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{item.desc}</p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((t, i) => (
          <span
            key={i}
            className="text-xs inline-block px-3 py-1 rounded-full bg-[#06282c] border border-[#05363a] text-cyan-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
