import React from "react";
import AddProject from "./AddProject";

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p>Here are your projects.</p>
      <AddProject />
    </div>
  );
};

export default Projects;
