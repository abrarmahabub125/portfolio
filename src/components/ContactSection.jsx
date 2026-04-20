import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import ContactForm from "./ContactForm";
import InfoCard from "./InfoCard";
import SocialButton from "./SocialButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0f14] px-5 py-20 text-gray-300 sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,#0f1113_1px,transparent_1px),linear-gradient(#0f1113_1px,transparent_1px)] bg-[size:44px_44px] opacity-20"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12" data-aos="fade-up">
          <h2 className="inline-flex items-center justify-center gap-2 text-3xl font-semibold text-white lg:text-4xl">
            <span>Get In</span>
            <span className="text-violet-500">Touch</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-linear-to-r from-violet-500 to-purple-300" />
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 lg:text-base">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <InfoCard
              icon={<MapPin size={22} />}
              title="Location"
              lines={["Meherpur, Bangladesh", "Working remotely"]}
              delay={0}
            />

            <InfoCard
              icon={<Mail size={22} />}
              title="Email"
              lines={[
                "abrarmahabub125@gmail.com",
                "I'll respond within 24 hours",
              ]}
              highlight="abrarmahabub125@gmail.com"
              delay={110}
            />

            <div
              className="rounded-2xl border border-gray-800 bg-white/[0.02] p-6"
              data-aos="fade-up"
              data-aos-delay="220"
            >
              <h4 className="mb-4 font-semibold text-white">Connect with me</h4>
              <div className="flex flex-wrap gap-3">
                <SocialButton
                  href="https://www.github.com/abrarmahabub125"
                  ariaLabel="GitHub"
                >
                  <Github size={18} />
                </SocialButton>
                <SocialButton
                  href="https://www.linkedin.com/in/abrarmahabub11/"
                  ariaLabel="LinkedIn"
                >
                  <Linkedin size={18} />
                </SocialButton>
                <SocialButton
                  href="https://www.facebook.com/mr.abrar.mahabub"
                  ariaLabel="Facebook"
                >
                  <Facebook size={18} />
                </SocialButton>
                <SocialButton
                  href="https://x.com/abrar_mahabub"
                  ariaLabel="Twitter"
                >
                  <Twitter size={18} />
                </SocialButton>
                <SocialButton
                  href="https://www.instagram.com/mr.abrar_mahabub/"
                  ariaLabel="Instagram"
                >
                  <Instagram size={18} />
                </SocialButton>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="120">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
