import React, { useState } from "react";
import NavigationCircle from "./NavigationCircle";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex min-h-screen flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <motion.h2
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-4xl font-light xl:mt-0 mb-32 mt-12 text-red-600 dark:text-amber-500"
      >
        Contact with me
      </motion.h2>

      <motion.form
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        onSubmit={handleSubmit}
        className="flex flex-col lg:space-y-12 space-y-8"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border border-red-600 dark:border-amber-500 placeholder-gray-600 dark:placeholder-amber-500/50 transition-colors duration-500"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border border-red-600 dark:border-amber-500 placeholder-gray-600 dark:placeholder-amber-500/50 transition-colors duration-500"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border border-red-600 dark:border-amber-500 placeholder-gray-600 dark:placeholder-amber-500/50 transition-colors duration-500 min-h-[100px] max-h-[200px] resize-y p-3"
          required
        ></textarea>
        <input
          type="submit"
          value={loading ? "Sending..." : "Stay Connected"}
          disabled={loading}
          className={`md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 dark:bg-amber-500"
          } text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500`}
        />
      </motion.form>

      <NavigationCircle section={"contact"} />
    </div>
  );
};

export default Contact;
