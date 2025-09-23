import React from "react";
import NavigationCircle from "./NavigationCircle";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";

const Contact = () => {
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
        className="text-4xl font-light xl:mt-0 mb-32 mt-12 text-red-600 dark:text-amber-500 "
      >
        Contact with me
      </motion.h2>
      <motion.form
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        action="#"
        className="flex flex-col lg:space-y-12 space-y-8"
      >
        <input
          type="text"
          placeholder="Name"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border border-red-600 dark:border-amber-500 placeholder-gray-600 dark:placeholder-amber-500/50 transition-colors duration-500  "
        />
        <input
          type="email"
          placeholder="Email"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border border-red-600 dark:border-amber-500 placeholder-gray-600 dark:placeholder-amber-500/50 transition-colors duration-500  "
        />
        <textarea
          name=""
          placeholder="Message"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border border-red-600 dark:border-amber-500 placeholder-gray-600 dark:placeholder-amber-500/50 transition-colors duration-500 min-h-[100px] max-h-[200px] resize-y p-3 "
          id=""
        ></textarea>
        <input
          type="submit"
          value="Stay Connected"
          placeholder="Email"
          className="md:w-[500px] w-[330px] h-12 pl-3 text-lg outline-0 border bg-red-600 dark:bg-amber-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20   transition-colors duration-500  "
        />
      </motion.form>
      <NavigationCircle section={"contact"} />
    </div>
  );
};

export default Contact;
