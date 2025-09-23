import React from "react";
import { motion } from "framer-motion";

const ResponsiveNavbar = ({ isOpen }) => {
  return (
    <div className="relative w-full">
      {isOpen && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full dark:bg-zinc-700 bg-gray-500 text-white shadow-md z-40"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="relative group">
              <a href="#" className="dark:text-amber-500 text-red-600">
                Home
              </a>
              <span className="h-[2px] dark:bg-amber-500 bg-red-600 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left"></span>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="dark:text-gray-200 hover:text-red-600 dark:hover:text-amber-500"
              >
                Services
              </a>
              <span className="h-[2px] dark:bg-amber-500 bg-red-600 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left"></span>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="dark:text-gray-200 hover:text-red-600 dark:hover:text-amber-500"
              >
                Contact
              </a>
              <span className="h-[2px] dark:bg-amber-500 bg-red-600 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left"></span>
            </li>
          </ul>
        </motion.nav>
      )}
    </div>
  );
};

export default ResponsiveNavbar;
