import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { Moon, SunDim } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [activeSection, setActiveSection] = useState("home");
  const iconClass = darkMode ? "text-amber-500" : "text-gray-700";

  const isScrollingRef = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const sections = ["home", "services", "projects", "contact" , 'about'];

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isScrollingRef.current = true;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <nav className="w-full bg-amber-50 dark:bg-zinc-900 fixed top-0 right-0 left-0 container mx-auto xl:px-16 py-3 lg:px-10 md:px-5 px-5 flex flex-col md:flex-row justify-between items-center transition-colors duration-500  z-50">
      <div className="flex items-center gap-x-6">
        <h1 className="xl:text-2xl text-lg dark:text-amber-500 text-red-600 font-Roboto font-bold">
          M ANWAR
        </h1>

        {/* Dark Mode Toggle */}
        {darkMode ? (
          <SunDim
            className={`w-6 h-6 cursor-pointer ${iconClass}`}
            onClick={() => dispatch(toggleDarkMode())}
            onMouseDown={(e) => e.preventDefault()}
            aria-label="Toggle light mode"
          />
        ) : (
          <Moon
            className={`w-6 h-7 cursor-pointer ${iconClass}`}
            onClick={() => dispatch(toggleDarkMode())}
            onMouseDown={(e) => e.preventDefault()}
            aria-label="Toggle dark mode"
          />
        )}
      </div>

      
      <ul className="flex gap-x-6 mt-3 md:mt-0  lg:text-lg font-Roboto text-sm md:text-md">
        <li className="relative group">
          <a
            href="#home"
            className={`dark:text-amber-500 cursor-pointer hover:text-red-600  dark:hover:text-amber-500 ${
              activeSection === "home"
                ? "text-red-600 dark:text-amber-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={(e) => handleNavClick(e, "home")}
          >
            Home
          </a>
          <span
            className={`h-[2px] dark:bg-amber-500 bg-red-600 dark:hover:bg-amber-500 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left ${
              activeSection === "home"
                ? "bg-red-600 dark:bg-amber-500 scale-x-100"
                : "  scale-x-0"
            }`}
          ></span>
        </li>
        <li className="relative group">
          <a
            href="#about"
            className={`dark:text-amber-500 cursor-pointer hover:text-red-600  dark:hover:text-amber-500 ${
              activeSection === "about"
                ? "text-red-600 dark:text-amber-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={(e) => handleNavClick(e, "about")}
          >
            About Us
          </a>
          <span
            className={`h-[2px] dark:bg-amber-500 bg-red-600 dark:hover:bg-amber-500 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left ${
              activeSection === "about"
                ? "bg-red-600 dark:bg-amber-500 scale-x-100"
                : "  scale-x-0"
            }`}
          ></span>
        </li>
        <li className="relative cursor-pointer group">
          <a
            href="#services"
            className={`dark:text-amber-500 cursor-pointer hover:text-red-600 dark:hover:text-amber-500 ${
              activeSection === "services"
                ? "text-red-600 dark:text-amber-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={(e) => handleNavClick(e, "services")}
          >
            Services
          </a>
          <span
            className={`h-[2px] dark:bg-amber-500 bg-red-600 dark:hover:bg-amber-500 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left ${
              activeSection === "services"
                ? "bg-red-600 dark:bg-amber-500 scale-x-100"
                : " scale-x-0"
            }`}
          ></span>
        </li>
        <li className="relative cursor-pointer group">
          <a
            href="#projects"
            className={`dark:text-amber-500 cursor-pointer hover:text-red-600 dark:hover:text-amber-500 ${
              activeSection === "projects"
                ? "text-red-600 dark:text-amber-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <span
            className={`h-[2px] dark:bg-amber-500 bg-red-600 dark:hover:bg-amber-500 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left ${
              activeSection === "projects"
                ? "bg-red-600 dark:bg-amber-500 scale-x-100"
                : " scale-x-0"
            }`}
          ></span>
        </li>
        <li className="relative cursor-pointer group">
          <a
            href="#contact"
            className={`dark:text-amber-500 cursor-pointer hover:text-red-600 dark:hover:text-amber-500 ${
              activeSection === "contact"
                ? "text-red-600 dark:text-amber-500"
                : "text-gray-600 dark:text-white"
            }`}
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <span
            className={`h-[2px] dark:bg-amber-500 bg-red-600 dark:hover:bg-amber-500 absolute -bottom-1 w-full left-0 scale-x-0 group-hover:scale-x-100 transform transition duration-300 origin-right group-hover:origin-left ${
              activeSection === "contact"
                ? "bg-red-600 dark:bg-amber-500 scale-x-100"
                : " scale-x-0"
            }`}
          ></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
