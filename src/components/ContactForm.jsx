import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 2000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-800 bg-white/[0.02] p-5 shadow-lg sm:p-6"
      aria-label="Contact form"
    >
      <label htmlFor="name" className="mb-3 block">
        <span className="text-sm text-gray-400">Name</span>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
          placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-gray-800 bg-[#0b1114] px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring focus:ring-violet-400"
        />
      </label>

      <label htmlFor="email" className="mb-3 block">
        <span className="text-sm text-gray-400">Email</span>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
          placeholder="your@email.com"
          className="mt-2 w-full rounded-xl border border-gray-800 bg-[#0b1114] px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring focus:ring-violet-400"
        />
      </label>

      <label htmlFor="message" className="mb-5 block">
        <span className="text-sm text-gray-400">Message</span>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your message..."
          className="mt-2 w-full resize-none rounded-xl border border-gray-800 bg-[#0b1114] px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring focus:ring-violet-400"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-500 to-purple-400 px-4 py-3 text-base font-medium text-white shadow-[0_20px_40px_rgba(139,92,246,0.18)] sm:w-fit"
        >
          <Send size={16} />
          <span>Send</span>
        </button>

        <div className="min-h-[1.5rem] text-left sm:w-40 sm:text-right">
          {status === "sending" && (
            <span className="text-sm text-gray-400">Sending...</span>
          )}
          {status === "success" && (
            <span className="text-sm text-cyan-300">Sent successfully</span>
          )}
          {status === "error" && (
            <span className="text-sm text-rose-400">Error sending</span>
          )}
        </div>
      </div>
    </form>
  );
}
