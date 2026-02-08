import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Send,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

/**
 * ContactSection.jsx
 * - Tailwind-only styling (no extra CSS files required)
 * - Responsive: on md+ layout shows left cards and right form side-by-side
 * - Replace text / links / handler as needed
 */

export default function ContactSection() {
  return (
    <section className="relative bg-[#0b0f14] text-gray-300 py-20 px-6 overflow-hidden">
      {/* subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,#0f1113 1px,transparent 1px),linear-gradient(#0f1113 1px,transparent 1px)] bg-[size:44px_44px] opacity-20"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-flex items-end gap-3 justify-center">
            <span>Get In</span>
            <span className="text-cyan-400 border-b-4 border-cyan-400 pb-1">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Grid: left info / right form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: info cards */}
          <div className="space-y-6">
            <InfoCard
              icon={<MapPin size={22} />}
              title="Location"
              lines={["Dhaka, Bangladesh", "Working remotely"]}
            />

            <InfoCard
              icon={<Mail size={22} />}
              title="Email"
              lines={["hridoy@example.com", "I'll respond within 24 hours"]}
              highlight="hridoy@example.com"
            />

            <div className="rounded-2xl border border-gray-800 bg-[#0f1720] p-6">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <SocialButton href="#" ariaLabel="GitHub">
                  <Github size={18} />
                </SocialButton>
                <SocialButton href="#" ariaLabel="LinkedIn">
                  <Linkedin size={18} />
                </SocialButton>
                <SocialButton href="#" ariaLabel="Facebook">
                  <Facebook size={18} />
                </SocialButton>
                <SocialButton href="#" ariaLabel="Twitter">
                  <Twitter size={18} />
                </SocialButton>
                <SocialButton href="#" ariaLabel="Instagram">
                  <Instagram size={18} />
                </SocialButton>
              </div>
            </div>
          </div>

          {/* RIGHT: contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- InfoCard ---------- */
function InfoCard({ icon, title, lines = [], highlight }) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#0f1720] p-6 flex gap-4 items-start shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <div className="text-sm text-gray-400 mt-2 space-y-1">
          {lines.map((l, i) =>
            highlight && l === highlight ? (
              <div key={i} className="text-cyan-300 font-medium">
                {l}
              </div>
            ) : (
              <div key={i}>{l}</div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Social button ---------- */
function SocialButton({ children, href = "#", ariaLabel }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0b1316] border border-gray-800 text-gray-300 hover:bg-[#082428] hover:scale-105 transition"
    >
      {children}
    </a>
  );
}

/* ---------- Contact Form ---------- */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: replace with your real submit logic (EmailJS / server endpoint)
    setStatus("sending");
    try {
      // Simulate network
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 2000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-800 bg-[#0f1720] p-6 shadow-lg"
      aria-label="Contact form"
    >
      <label className="block mb-3">
        <span className="text-sm text-gray-400">Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="mt-2 w-full rounded-xl bg-[#0b1114] border border-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm text-gray-400">Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="mt-2 w-full rounded-xl bg-[#0b1114] border border-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </label>

      <label className="block mb-5">
        <span className="text-sm text-gray-400">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your message..."
          className="mt-2 w-full rounded-xl bg-[#0b1114] border border-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
        />
      </label>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold shadow-[0_20px_40px_rgba(6,182,212,0.18)] hover:scale-[1.01] transition"
        >
          <Send size={16} />
          <span>Send Message</span>
        </button>

        {/* small status feedback */}
        <div className="w-36 text-right">
          {status === "sending" && (
            <span className="text-sm text-gray-400">Sending…</span>
          )}
          {status === "success" && (
            <span className="text-sm text-cyan-300">Sent ✓</span>
          )}
          {status === "error" && (
            <span className="text-sm text-rose-400">Error</span>
          )}
        </div>
      </div>
    </form>
  );
}
