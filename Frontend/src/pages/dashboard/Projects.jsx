import React from "react";
import AddProject from "./AddProject";

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Projects Management
      </h1>
      <p className="text-center mb-6 text-gray-600">
        Add new projects, edit existing ones, or delete projects as needed.
      </p>

      {/* Add / Edit Project Form + Project List */}
      <AddProject />
    </div>
  );
};

export default Projects;
