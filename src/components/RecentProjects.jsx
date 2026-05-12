import { Code, ExternalLink } from "lucide-react";
import XcomImage from "../assets/Screenshot 2026-04-20 090842.png";
import EstateinImage from "../assets/Screenshot 2026-04-20 091913.png";
import BookLibraryImage from "../assets/Screenshot 2026-04-20 093142.png";
import MotionPixelImage from "../assets/Screenshot 2026-04-20 093449.png";

const featured = [
  {
    id: "1",
    title: "X.com Clone",
    subtitle:
      "A modern social media platform inspired by X.com, built with React.js, Node.js, and express.js, featuring real-time updates and a sleek design.",
    image: XcomImage,
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    codeLink: "https://github.com/abrarmahabub125/x-clone",
    liveLink: "https://x-social-clone.vercel.app/",
  },
  {
    id: "2",
    title: "Estatein: Property Management",
    subtitle:
      "A property management website that allows users to browse and manage real estate listings, built with HTML, JavaScript, and Tailwind CSS.",
    image: EstateinImage,
    tags: ["HTML", "JavaScript", "Tailwind CSS"],
    codeLink: "https://github.com/abrarmahabub125/estatein-website",
    liveLink: "https://estatein-website-lyart.vercel.app/",
  },
  {
    id: "3",
    title: "Book Library",
    subtitle:
      "A book library management system that allows users to add, edit, and delete books from their collection, built with HTML, JavaScript, and Tailwind CSS.",
    image: BookLibraryImage,
    tags: ["JavaScript", "Tailwind CSS", "React", "Node.js", "Express"],
    codeLink: "https://github.com/abrarmahabub125/book-library-fullstack",
    liveLink: "https://book-library-frontend-gilt.vercel.app/",
  },
  {
    id: "4",
    title: "Motion Pixel",
    subtitle:
      "A picture streaming platform that allows users to upload and share their photos in real-time, built with React.",
    image: MotionPixelImage,
    tags: ["React", "HTML", "Tailwind CSS"],
    codeLink: "https://github.com/abrarmahabub125/motion-pixel-gallery",
    liveLink: "https://motion-pixel.vercel.app/",
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
                className={`flex h-28 items-center justify-center bg-linear-to-r sm:h-32 md:h-36`}
              >
                <img
                  className="h-full w-full object-cover"
                  src={project.image}
                  alt="x.com image"
                />
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
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                    aria-label={`View code for ${project.title}`}
                  >
                    <Code size={16} />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                    aria-label={`Open live demo for ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
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
            href="https://github.com/abrarmahabub125?tab=repositories"
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
