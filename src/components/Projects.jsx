import React, { useState } from "react";
import NavigationCircle from "./NavigationCircle";

const filterButtons = ["All", "Frontend", "Backend", "UI/UX"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <h2 className="text-4xl font-light xl:mt-0 mb-10 mt-12 text-red-600 dark:text-amber-500">
        What I've Built
      </h2>
      <div className="flex gap-4 mb-10">
        {filterButtons.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeFilter === filter
                ? "bg-red-600 dark:bg-amber-500 dark:text-black text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {activeFilter === "All" || activeFilter === "Frontend" ? (
          <div className="w-80 h-40 bg-blue-300 rounded-lg">
            Frontend Project 1
          </div>
        ) : null}

        {activeFilter === "All" || activeFilter === "Backend" ? (
          <div className="w-80 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="h-36 bg-green-300 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/300x150"
                alt="Project Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Backend Project 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A powerful backend system built with Node.js and Express.
              </p>
              <div className="flex justify-between">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-green-600 hover:bg-green-700 py-1 px-3 rounded-md transition"
                >
                  View Live
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-gray-600 hover:bg-gray-700 py-1 px-3 rounded-md transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ) : null}

        {activeFilter === "All" || activeFilter === "UI/UX" ? (
          <div className="w-80 h-40 bg-purple-300 rounded-lg">
            UI/UX Project 1
          </div>
        ) : null}

        {activeFilter === "All" ? (
          <div className="w-80 h-40 bg-yellow-300 rounded-lg">
            Full-Stack Project 1
          </div>
        ) : null}
      </div>

      <NavigationCircle section={"projects"} />
    </div>
  );
};

export default Projects;
