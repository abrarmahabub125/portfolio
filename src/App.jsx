import { useEffect } from "react";
import AOS from "aos";
import TechStackSection from "./components/TechStackSection";
import AboutSection from "./components/AboutSection";
import FeaturedProjects from "./components/RecentProjects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: "ease-out-quad",
      once: false,
      mirror: false,
      offset: 80,
      delay: 40,
      anchorPlacement: "top-bottom",
      debounceDelay: 50,
      throttleDelay: 99,
    });

    window.requestAnimationFrame(() => {
      AOS.refresh();
    });

    const handleResize = () => {
      window.requestAnimationFrame(() => {
        AOS.refresh();
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-gray-300">
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 justify-center bg-transparent backdrop-blur-md">
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <FeaturedProjects />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
