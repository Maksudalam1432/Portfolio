import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container-custom py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE: Social + Email */}
        <div className="space-y-6">
          <p className="text-sm md:text-base text-slate-300">
            Want to collaborate or have a project idea? Feel free to connect with me.
          </p>

          {/* Email */}
          <div className="text-sm text-slate-300">
            <p className="text-slate-400">Email:</p>
            <a
              href="mailto:mdansari0786@gmail.com"
              className="hover:text-blue-400 transition"
            >
              maksud.patna@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-5 mt-4">
            <a
              href="https://www.instagram.com/__md_alam_0786/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-pink-400 hover:scale-125 transition-all"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/Maksudalam1432?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl hover:scale-125 transition-all text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/maksud-alam-1088a425a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-blue-500 hover:scale-125 transition-all"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/MaksudAlam15478"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-gray-300 hover:scale-125 transition-all"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <form
          className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-xs mb-1 text-slate-300">Name</label>
            <input
              type="text"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-slate-300">Email</label>
            <input
              type="email"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-slate-300">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
