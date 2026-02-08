import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"; // optional: install lucide-react

const certifications = [
  "CEH v12 — Byte Capsule Ltd. (2025)",
  "Introduction to CIP — OPSWAT Academy (Mar 2025)",
  "Autodesk AutoCAD Certified — Tutorialspoint (Jun 2023)",
  "Presentation Skills for Beginners — TJ Walker (2023)",
  "Complete Arduino Course for Beginners — Chingiz Nazar (2023)",
  "Basics of HTML/CSS for Beginners — Open Weaver (Jan 2023)",
];

const competitions = [
  "Champion of Ludo — PSTU IT Carnival 2023 (Champion)",
  "Agent X: An AI Prompting Competition — NetCom Learning Bangladesh (Ambassador, 2025)",
  "Hult Prize — Hult Prize at PSTU (Head of Sponsorship, Oct 2023–Present)",
  "KPR Best Artist Award — Art Exhibition 2021 (Best Artist)",
];

const volunteering = [
  "BD Clean — Volunteer (Jan 2024–Present)",
  "Love For Human Bangladesh (LFHBD) — Volunteer (Jul 2022–Present)",
  "Volunteer for Bangladesh — Volunteer (Sep 2023–Jan 2025)",
  "Zooniverse — Volunteer (Apr 2023–Present)",
  "Amar somoy amar desh — Volunteer (Aug 2022–Present)",
  "FutureGen Bangladesh — Vice President (Jul 2022–Present)",
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-gray-300 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <Column icon="🏅" title="Certifications" items={certifications} />
          <Column icon="🏆" title="Competitions" items={competitions} />
          <Column icon="🤝" title="Volunteering" items={volunteering} />
        </div>

        {/* divider */}
        <div className="border-t border-gray-800/60 mb-8" />

        {/* bottom row: brand / nav / social + made */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* left: brand + copyright */}
          <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="text-cyan-300 text-xl font-bold">
                &lt;HCS /&gt;
              </div>
            </div>
            <div className="text-sm text-gray-500">
              © 2026 Hridoy Chandra Sarker. All rights reserved.
            </div>
          </div>

          {/* center: nav */}
          <nav className="flex gap-6 flex-wrap justify-center">
            <a
              className="text-sm text-gray-400 hover:text-white transition"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition"
              href="#privacy"
            >
              Privacy
            </a>
            <a
              className="text-sm text-gray-400 hover:text-white transition"
              href="#terms"
            >
              Terms
            </a>
          </nav>

          {/* right: social + made + back to top */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
            <div className="flex gap-3 items-center">
              <SocialIcon href="#" label="github">
                <Github size={18} />
              </SocialIcon>
              <SocialIcon href="#" label="linkedin">
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href="#" label="email">
                <Mail size={18} />
              </SocialIcon>
            </div>

            <div className="text-sm text-gray-400 flex items-center gap-3">
              <span className="hidden sm:inline">Made with</span>
              <Heart />
              <span className="hidden sm:inline">in Bangladesh</span>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-gray-400 hover:text-white transition inline-flex items-center gap-2"
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

/* ---------- Column component ---------- */
function Column({ icon, title, items = [] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-[#042a2c] flex items-center justify-center text-cyan-300">
          <span className="text-sm">{icon}</span>
        </div>
        <h4 className="text-cyan-300 font-semibold">{title}</h4>
      </div>

      <ul className="space-y-3 text-sm text-gray-400">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <span
              className="inline-block w-2 h-2 rounded-full bg-cyan-400 mt-2"
              aria-hidden
            />
            <span className="leading-tight">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Social Icon ---------- */
function SocialIcon({ children, href = "#", label = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0b1316] border border-gray-800 text-gray-300 hover:bg-[#082428] hover:scale-105 transition"
    >
      {children}
    </a>
  );
}

/* ---------- Heart ---------- */
function Heart() {
  return (
    <svg
      className="w-5 h-5 text-cyan-300"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21s-7-4.35-9.2-7.1C-0.02 10.9 3.5 6 7.5 6c1.9 0 3.5 1 4.5 2.5C12.9 7 14.5 6 16.4 6 20.4 6 23.92 10.9 21.2 13.9 19 16.65 12 21 12 21z" />
    </svg>
  );
}
