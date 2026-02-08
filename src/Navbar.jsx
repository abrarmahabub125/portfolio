const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-3">
      <div className="text-cyan-400 font-bold text-lg">&lt;HCS/&gt;</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-cyan-400 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
      <button className="bg-cyan-400 text-black font-semibold px-4 py-1 rounded-full hover:bg-cyan-500 transition-colors">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
