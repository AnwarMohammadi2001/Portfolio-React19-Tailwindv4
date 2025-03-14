import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { Moon, SunDim } from "lucide-react";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiMiniXMark } from "react-icons/hi2";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const iconClass = darkMode ? "text-amber-500" : "text-gray-700";

  return (
    <nav className="w-full fixed top-0 right-0 left-0 container mx-auto xl:px-16 py-3 lg:px-10 md:px-5 px-5 flex justify-between items-center  z-50">
      <div className="flex items-center gap-x-6">
        <h1 className="xl:text-2xl text-lg dark:text-amber-500 text-red-600 font-Roboto font-bold">
          M ANWAR
        </h1>

        {/* Dark Mode Toggle */}
        {darkMode ? (
          <SunDim
            className={`w-6 h-6 cursor-pointer ${iconClass}`}
            onClick={() => dispatch(toggleDarkMode())}
            aria-label="Toggle light mode"
          />
        ) : (
          <Moon
            className={`w-6 h-7 cursor-pointer ${iconClass}`}
            onClick={() => dispatch(toggleDarkMode())}
            aria-label="Toggle dark mode"
          />
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-x-6 lg:text-lg font-Roboto md:text-md">
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

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-x-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-red-600 dark:text-amber-500"
        >
          {isOpen ? (
            <HiMiniXMark className="w-7 h-7" />
          ) : (
            <CgMenuRightAlt className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Responsive Dropdown Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 origin-top `}
      >
        {isOpen && <ResponsiveNavbar isOpen={isOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
