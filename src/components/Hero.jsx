import { ReactTyped } from "react-typed";

const RESUME_PATH = "/Maksud_Alam_Resume.pdf";

export default function Hero() {
  return (
    <div className="container-custom flex flex-col md:flex-row items-center gap-10 py-16 md:py-24">
      
      {/* LEFT SECTION */}
      <div className="flex-1 space-y-6">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Maksud Alam
          </span>
        </h1>

        {/* Typing line */}
        <div className="text-lg md:text-2xl font-semibold flex gap-2 items-center">
          <span className="text-slate-200">I am </span>
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            className="text-blue-400"
          />
        </div>

        <p className="text-sm md:text-base text-slate-300 max-w-xl">
          I'm a  Full Stack Developer who builds responsive UIs, scalable APIs, 
          and production-ready full-stack applications using the MERN stack.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-all"
          >
            View Projects
          </a>

          <a
            href={RESUME_PATH}
            download
            className="px-5 py-2.5 rounded-full text-sm border border-slate-700 hover:border-blue-500"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT PHOTO */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-56 h-56 md:w-64 md:h-64">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-slate-900 blur-2xl opacity-60" />

          <div className="relative w-full h-full rounded-full border border-slate-700 bg-slate-900 overflow-hidden shadow-[0_0_60px_rgba(56,189,248,0.3)]">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
