import { useEffect, useState } from "react";

import RevealOnScroll from "../utils/RevealOnScroll";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className=" text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Features Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 px-12 md:px-0 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl flex flex-col h-full items-center text-center border-2 border-red-100  dark:border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] justify-between hover:-translate-y-1 transition-all hover:bg-cyan-900"
              >
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.brief}</p>

                  {/* Project-specific tech */}
                  <div className="flex flex-wrap sm:items-center gap-2 mt-auto">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col p-2 text-center justify-center gap-3    hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] cursor-pointer">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                  >
                    {project.image && (
                      <img
                        src={`http://localhost:5000${project.image}`}
                        alt={project.name}
                        className="rounded-md h-[200px] w-full object-cover"
                      />
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
