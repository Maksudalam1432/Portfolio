import { techSkills, tools } from "../data/skills";
import { FaCode, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="container-custom py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">Skills</h2>

      {/* TECH SKILLS */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FaCode className="text-blue-400 text-xl" />
          <h3 className="text-xl font-semibold">Technical Skills</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-3 text-sm font-medium text-center rounded-lg border border-slate-700 bg-slate-900 shadow-md hover:border-blue-500 hover:scale-105 transition-all cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FaTools className="text-green-400 text-xl" />
          <h3 className="text-xl font-semibold">Tools</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="px-4 py-3 text-sm font-medium text-center rounded-lg border border-slate-700 bg-slate-900 shadow-md hover:border-purple-500 hover:scale-105 transition-all cursor-default"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
