import { Github, Linkedin, Facebook, Mail, ChevronDown } from "lucide-react";
import RoundIcon from "./RoundIcon";
import MyPhoto from "../assets/my-photo.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0f14] pb-16 pt-24 text-gray-300 sm:pb-20 sm:pt-28 lg:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
      />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute bottom-10 right-[-4rem] h-48 w-48 rounded-full bg-purple-500/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center" data-aos="zoom-in">
          <div className="size-40 rounded-full border border-violet-400/20 bg-linear-to-b from-violet-500/20 to-transparent p-1 shadow-[0_24px_80px_rgba(139,92,246,0.22)] sm:size-48 md:size-56">
            <img
              src={MyPhoto}
              alt="Mahabub Alam portrait"
              width="1568"
              height="2720"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="120">
          <p className="mt-8 text-sm tracking-[0.35em] text-gray-400 sm:mt-10 sm:text-base">
            Hello, I&apos;m
          </p>

          <h1 className="mt-3 bg-linear-to-r bg-clip-text text-4xl font-semibold leading-[1.05] text-transparent from-violet-500 to-purple-400 sm:text-5xl md:text-6xl lg:text-7xl">
            Mahabub Alam
          </h1>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-block rounded-full text-xs bg-linear-to-r from-violet-500 to-purple-400 px-4 py-2 font-medium text-white md:text-sm">
              MERN Stack Developer
            </span>
            <span className="inline-block rounded-full border border-gray-700 bg-[#071216] px-4 py-2 text-xs font-medium text-white lg:text-sm">
              Responsive Design Expert
            </span>
            <span className="inline-block rounded-full border border-gray-700 bg-[#071216] px-4 py-2 text-xs font-medium text-white lg:text-sm">
              UI/UX Designer
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-3xl px-2 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Passionate technologist pursuing Computer Science at PSTU. I build
            full-stack applications, compete in CTF challenges, and explore the
            fascinating world of data science and machine learning.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="220">
          <RoundIcon
            href="https://www.github.com/abrarmahabub125"
            label="github"
          >
            <Github size={18} />
          </RoundIcon>
          <RoundIcon
            href="https://www.linkedin.com/in/abrarmahabub11/"
            label="linkedin"
          >
            <Linkedin size={18} />
          </RoundIcon>
          <RoundIcon
            href="https://www.facebook.com/mr.abrar.mahabub"
            label="facebook"
          >
            <Facebook size={18} />
          </RoundIcon>
          <RoundIcon href="https://www.gmail.com/" label="email">
            <Mail size={18} />
          </RoundIcon>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#contact"
            className="inline-flex w-full max-w-56 items-center justify-center gap-3 rounded-full bg-linear-to-r from-violet-500 to-purple-400 font-medium px-6 py-2.5 lg:py-3 text-sm text-white shadow-[0_20px_50px_rgba(139,92,246,0.22)] hover:scale-[1.01] sm:w-auto lg:text-base"
          >
            Get In Touch
          </a>

          <a
            href="#projects"
            className="inline-flex w-full max-w-56 items-center justify-center gap-3 rounded-full border border-gray-700 px-6 py-2.5 lg:py-3 text-sm text-white sm:w-auto lg:text-base"
          >
            View Projects
          </a>
        </div>

        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="380">
          <a
            href="#about"
            aria-label="Scroll down to about section"
            className="inline-flex size-8 lg:size-11 items-center justify-center rounded-full border border-gray-800 bg-violet-400/5 text-violet-400 hover:bg-violet-400/10"
          >
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
