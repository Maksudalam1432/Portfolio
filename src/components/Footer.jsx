import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="container-custom py-6 flex flex-col items-center gap-4 text-center">

        <p className="text-sm text-slate-400">Connect With Me</p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.instagram.com/__md_alam_0786/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all hover:scale-125"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/Maksudalam1432?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-all hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/maksud-alam-1088a425a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/MaksudAlam15478"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all hover:scale-125"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Maksud Alam — All Rights Reserved
        </p>

      </div>
    </footer>
  );
}
