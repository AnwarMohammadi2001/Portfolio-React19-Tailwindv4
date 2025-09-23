import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AddProject = () => {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    brief: "",
    link: "",
    tech: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/projects",
        { ...form, tech: form.tech.split(",") },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Project added successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Project</h2>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Project Name"
        className="mb-2 p-2 border w-full"
      />
      <input
        name="brief"
        onChange={handleChange}
        placeholder="Brief"
        className="mb-2 p-2 border w-full"
      />
      <input
        name="link"
        onChange={handleChange}
        placeholder="Project Link"
        className="mb-2 p-2 border w-full"
      />
      <input
        name="tech"
        onChange={handleChange}
        placeholder="Tech (comma separated)"
        className="mb-2 p-2 border w-full"
      />
      <input
        name="image"
        onChange={handleChange}
        placeholder="Image URL"
        className="mb-2 p-2 border w-full"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Add Project
      </button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default AddProject;
