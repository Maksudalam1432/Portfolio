import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="container-custom py-16 md:py-20">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <p className="text-xs text-slate-400">
          Real-world projects I&apos;ve built and improved.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col justify-between hover:border-blue-500/70 hover:-translate-y-1 transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-slate-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs mt-2">
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  className="underline underline-offset-4 hover:text-blue-400"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  className="underline underline-offset-4 hover:text-blue-400"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
