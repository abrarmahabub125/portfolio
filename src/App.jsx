import {
  Globe,
  Smartphone,
  Brain,
  Palette,
  Server,
  Shield,
} from "lucide-react";
import TechStackSection from "./TechStackSection";
import WorkExperience from "./WorkExperience";
import AboutSection from "./AboutSection";
import EducationTimeline from "./EducationTimeline";
import FeaturedProjects from "./FeaturedProjects";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with React, Next.js, and cutting-edge technologies.",
    items: ["Custom Web Apps", "E-commerce Solutions", "Progressive Web Apps"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
    items: ["React Native", "Flutter", "Native Performance"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning solutions to transform your business operations.",
    items: ["ML Models", "Chatbots", "Data Analytics"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
    items: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Scalable backend systems and RESTful APIs that power your applications.",
    items: ["Node.js", "Python", "Cloud Deployment"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security audits, penetration testing, and secure development practices.",
    items: ["Security Audits", "Pen Testing", "Secure Code"],
  },
];

export default function ServicesSection() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section className="relative bg-[#0b0f14] text-white py-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-widest font-semibold mb-2">
              CF TechLab
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Transforming ideas into reality with cutting-edge digital
              solutions
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.08)] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-6 group-hover:bg-cyan-400/20 transition">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button className="bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300">
              Visit CF TechLab 🌐
            </button>
          </div>
        </div>
      </section>

      <section>
        <TechStackSection />
      </section>
      <section>
        <WorkExperience />
      </section>

      <section>
        <EducationTimeline />
      </section>
      <section>
        <FeaturedProjects />
      </section>
      <section>
        <ContactSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
