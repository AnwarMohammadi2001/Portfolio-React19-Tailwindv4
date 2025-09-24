import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AddProject = () => {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    brief: "",
    link: "",
    tech: "",
    image: null,
  });
  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // Add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("brief", form.brief);
      formData.append("link", form.link);
      formData.append("tech", form.tech);
      if (form.image) formData.append("image", form.image);

      if (editingId) {
        await axios.put(
          `http://localhost:5000/api/projects/${editingId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setMessage("Project updated successfully!");
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/projects", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setMessage("Project added successfully!");
      }

      setForm({ name: "", brief: "", link: "", tech: "", image: null });
      fetchProjects();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Project deleted successfully!");
      fetchProjects();
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  // Edit project (populate form)
  const handleEdit = (project) => {
    setForm({
      name: project.name,
      brief: project.brief,
      link: project.link,
      tech: project.tech.join(","),
      image: null, // user can upload new image
    });
    setEditingId(project._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded shadow-md mb-6"
      >
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit Project" : "Add Project"}
        </h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Project Name"
          className="mb-2 p-2 border w-full"
        />
        <input
          name="brief"
          value={form.brief}
          onChange={handleChange}
          placeholder="Brief"
          className="mb-2 p-2 border w-full"
        />
        <input
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="Project Link"
          className="mb-2 p-2 border w-full"
        />
        <input
          name="tech"
          value={form.tech}
          onChange={handleChange}
          placeholder="Tech (comma separated)"
          className="mb-2 p-2 border w-full"
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="mb-2 p-2 border w-full"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          {editingId ? "Update Project" : "Add Project"}
        </button>
        {message && <p className="mt-2">{message}</p>}
      </form>

      {/* List existing projects */}
      <div>
        <h2 className="text-xl font-bold mb-4">Existing Projects</h2>
        {projects.length === 0 && <p>No projects yet.</p>}
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{project.name}</h3>
                <p>{project.brief}</p>
                <p className="text-sm text-gray-500">
                  Tech: {project.tech.join(", ")}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Project Link
                  </a>
                )}
              </div>
              <div>
                {project.image && (
                  <img
                    src={`http://localhost:5000${project.image}`}
                    alt={project.name}
                    className="h-12"
                  />
                )}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="bg-yellow-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-600 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProject;
