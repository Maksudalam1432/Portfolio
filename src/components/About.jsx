export default function About() {
  return (
    <div className="container-custom py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-sm md:text-base text-slate-300">
          <p>
            I&apos;m a passionate full stack developer focused on building clean,
            responsive and scalable web applications using the MERN stack.
          </p>
          <p>
            I enjoy working on real-world projects like e-commerce websites,
            food delivery clones, and utility tools like password generators and
            URL shorteners.
          </p>
          <p>
            I love learning new tools, improving my code quality, and
            collaborating with teams to ship useful products.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="rounded-2xl border border-slate-800 p-4 bg-slate-900/40">
            <p className="text-slate-400 mb-1">Role</p>
            <p className="text-lg font-semibold">Full Stack Developer</p>
          </div>
          <div className="rounded-2xl border border-slate-800 p-4 bg-slate-900/40">
            <p className="text-slate-400 mb-1">Tech Stack</p>
            <p className="text-lg font-semibold">MERN + Tailwind</p>
          </div>
          <div className="rounded-2xl border border-slate-800 p-4 bg-slate-900/40">
            <p className="text-slate-400 mb-1">Strengths</p>
            <p className="text-lg font-semibold">Clean UI & APIs</p>
          </div>
          <div className="rounded-2xl border border-slate-800 p-4 bg-slate-900/40">
            <p className="text-slate-400 mb-1">Location</p>
            <p className="text-lg font-semibold">India • Jaipur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
