import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify"; // ✅ Import toast
import "react-toastify/dist/ReactToastify.css"; // ✅ Toast CSS
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { BsLink } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

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
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      toast.error("Failed to fetch projects!");
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
        toast.success("Project updated successfully!");
        setEditingId(null);
      } else {
        await axios.post("http://localhost:5000/api/projects", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Project added successfully!");
      }

      setForm({ name: "", brief: "", link: "", tech: "", image: null });
      setIsModalOpen(false);
      fetchProjects();
    } catch (err) {
      toast.error(err.response?.data?.message || "Error occurred!");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Project deleted successfully!");
        fetchProjects();
        Swal.fire("Deleted!", "Your project has been deleted.", "success");
      } catch (err) {
        toast.error(err.response?.data?.message || "Error occurred!");
      }
    }
  };

  // Edit project (populate form)
  const handleEdit = (project) => {
    setForm({
      name: project.name,
      brief: project.brief,
      link: project.link,
      tech: project.tech.join(","),
      image: null,
    });
    setEditingId(project._id);
    setIsModalOpen(true);
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const openDetailModal = (project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setSelectedProject(null);
    setIsDetailModalOpen(false);
  };

  return (
    <div>
      {/* Add Project Button */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-x-5">
          <p className="text-xl font-semibold">Your Project</p>
          <p className="text-xl font-semibold">{projects.length}</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Add New Project
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {editingId ? "Edit Project" : "Add New Project"}
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingId(null);
                }}
                className="text-red-500 hover:text-gray-900"
              >
                <FaXmark size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Project Name"
                className="w-full p-2 border rounded"
              />
              <input
                name="brief"
                value={form.brief}
                onChange={handleChange}
                placeholder="Brief"
                className="w-full p-2 border rounded"
              />
              <input
                name="link"
                value={form.link}
                onChange={handleChange}
                placeholder="Project Link"
                className="w-full p-2 border rounded"
              />
              <input
                name="tech"
                value={form.tech}
                onChange={handleChange}
                placeholder="Tech (comma separated)"
                className="w-full p-2 border rounded"
              />
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white w-full p-2 rounded"
              >
                {editingId ? "Update Project" : "Add Project"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Brief</th>
              <th className="py-2 px-4 border">Tech</th>
              <th className="py-2 px-4 border">Link</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{project.name}</td>
                <td className="py-2 px-4 border">
                  {project.brief.slice(0, 20)}...
                </td>
                <td className="py-2 px-4 border">{project.tech.join(", ")}</td>
                <td className="py-2 px-4 border">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLink size={24} className="text-blue-500" />
                    </a>
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {project.image && (
                    <img
                      src={`http://localhost:5000${project.image}`}
                      alt={project.name}
                      className="h-12"
                    />
                  )}
                </td>
                <td className="py-2 px-4 border flex gap-x-2">
                  <button onClick={() => handleEdit(project)}>
                    <FaRegEdit size={24} className="text-green-500" />
                  </button>
                  <button onClick={() => handleDelete(project._id)}>
                    <MdOutlineDelete size={24} className="text-red-500" />
                  </button>
                  <button
                    onClick={() => openDetailModal(project)}
                    className="  px-2 py-1 rounded"
                  >
                    <IoEyeOutline size={24} />
                  </button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No projects available
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Details Modal */}
        {isDetailModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
              <button
                onClick={closeDetailModal}
                className="absolute top-3 right-3 text-red-500 hover:text-gray-900"
              >
                <FaXmark size={24} /> {/* You can use X icon instead */}
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedProject.name}
              </h2>
              <p className="mb-2">
                <strong>Brief:</strong> {selectedProject.brief}
              </p>
              <p className="mb-2">
                <strong>Tech:</strong> {selectedProject.tech.join(", ")}
              </p>
              {selectedProject.link && (
                <p className="mb-2">
                  <strong>Link:</strong>{" "}
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {selectedProject.link}
                  </a>
                </p>
              )}
              {selectedProject.image && (
                <img
                  src={`http://localhost:5000${selectedProject.image}`}
                  alt={selectedProject.name}
                  className="w-full h-auto mt-4 rounded"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProject;
