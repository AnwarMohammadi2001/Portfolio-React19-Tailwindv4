// src/components/Register.jsx
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    isAdmin: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      setMessage("User registered successfully!");
      setForm({ username: "", password: "", isAdmin: false });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow-md w-96 mx-auto mt-20"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
        className="mb-2 p-2 border w-full"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="mb-2 p-2 border w-full"
      />
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          name="isAdmin"
          checked={form.isAdmin}
          onChange={handleChange}
          className="mr-2"
        />
        Admin User
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Register
      </button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default Register;
