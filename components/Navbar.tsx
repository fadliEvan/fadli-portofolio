export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <a
          href="#"
          className="text-sm font-semibold tracking-tight"
        >
          Fadli Yurisman
        </a>

        <nav className="hidden gap-8 text-sm text-zinc-500 md:flex">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>

          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>

          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}