import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();

    const headerOffset = 72;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="relative h-full w-full max-w-7xl px-4 lg:px-8"
      data-aos="fade-down"
      data-aos-duration="700"
    >
      <div className="flex h-full items-center justify-between gap-4">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="bg-linear-to-r bg-clip-text leading-none font-bold text-transparent from-violet-500 to-purple-400 text-xl lg:text-2xl"
        >
          &lt; Mahabub /&gt;
        </a>

        <ul className="hidden items-center gap-8 text-white md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="px-0 py-2 text-[15px] leading-6 font-medium text-gray-300 hover:text-violet-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://www.github.com/abrarmahabub125"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className=" w-full rounded-lg items-center justify-center bg-linear-to-r from-violet-500 to-purple-400 px-3 text-sm py-2 text-[15px] hidden md:inline-flex font-semibold text-white"
          >
            <Github size={18} className="mr-2" />
            Contribute
          </a>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 outline-0 items-center justify-center bg-transparent text-white md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full overflow-hidden bg-[#0b0f14]/98 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 sm:px-6">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="flex items-center justify-between px-0 py-3 text-[15px] leading-6 font-medium text-gray-200 hover:text-violet-300"
                >
                  <span>{link.label}</span>
                  <span className="text-violet-400">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.github.com/abrarmahabub125"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 inline-flex w-full rounded-lg items-center justify-center bg-linear-to-r from-violet-500 to-purple-400 px-4 py-2.5 text-[15px] leading-6 font-semibold text-white"
          >
            <Github size={18} className="mr-2" />
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
