import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] px-5 pb-8 pt-12 text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 border-t border-gray-800/60" />

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-auto lg:items-start">
            <div className="bg-linear-to-r bg-clip-text text-left text-xl font-bold lg:text-2xl text-transparent from-violet-500 to-purple-400">
              &lt; Mahabub /&gt;
            </div>
            <div className="text-sm text-gray-500">
              &copy; 2026 Mahabub Alam. All rights reserved.
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              className="text-sm text-gray-400 transition hover:text-white"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm text-gray-400 transition hover:text-white"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-sm text-gray-400 transition hover:text-white"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm text-gray-400 transition hover:text-white"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <div className="flex w-full justify-center items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:w-auto lg:justify-end">
            <div className="flex items-center gap-3">
              <SocialIcon
                href="https://www.github.com/abrarmahabub125"
                label="github"
              >
                <Github size={18} />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/abrarmahabub11/"
                label="linkedin"
              >
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href="https://www.gmail.com" label="email">
                <Mail size={18} />
              </SocialIcon>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="hidden sm:inline">Made with</span>
              <Heart />
              <span className="hidden sm:inline">in Bangladesh</span>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span className="hidden sm:inline">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children, href = "#", label = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 bg-[#0b1316] text-gray-300 transition hover:scale-105 hover:bg-violet-400/10"
    >
      {children}
    </a>
  );
}

function Heart() {
  return (
    <svg
      className="h-5 w-5 text-violet-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21s-7-4.35-9.2-7.1C-0.02 10.9 3.5 6 7.5 6c1.9 0 3.5 1 4.5 2.5C12.9 7 14.5 6 16.4 6 20.4 6 23.92 10.9 21.2 13.9 19 16.65 12 21 12 21z" />
    </svg>
  );
}
