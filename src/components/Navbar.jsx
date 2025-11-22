import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const RESUME_PATH = "/Maksud_Alam_Resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled ? "backdrop-blur bg-slate-950/70 border-b border-slate-800" : ""
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-3">
        {/* Logo / Name */}
        <a href="#home" className="text-lg font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Maksud Alam
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={RESUME_PATH}
            download
            className="px-4 py-2 rounded-full text-sm bg-slate-900 border border-slate-700 hover:border-blue-500 hover:text-blue-300 transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block w-5 h-0.5 bg-slate-100"></span>
            <span className="block w-5 h-0.5 bg-slate-100"></span>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <ul className="container-custom flex flex-col py-3 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_PATH}
                download
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
