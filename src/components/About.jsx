import React from "react";
import NavigationCircle from "./NavigationCircle";
import {
  FaCode,
  FaServer,
  FaPalette,
  FaBriefcase,
  FaWrench,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-10 h-10 text-blue-500" />,
    title: "Web Development",
  },
  {
    icon: <FaServer className="w-10 h-10 text-green-500" />,
    title: "Backend Development",
  },
  {
    icon: <FaPalette className="w-10 h-10 text-yellow-500" />,
    title: "UI/UX Design",
  },
  {
    icon: <FaBriefcase className="w-10 h-10 text-purple-500" />,
    title: "Full-Stack Development",
  },
  {
    icon: <FaWrench className="w-10 h-10 text-red-500" />,
    title: "Website Maintenance",
  },
  {
    icon: <FaHeadset className="w-10 h-10 text-teal-500" />,
    title: "Consultation & Support",
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="flex w-full min-h-screen border flex-col justify-center items-center px-4 xl:py-0 py-10 transition-colors duration-500"
    >
      <div className="flex flex-col xl:flex-row border p-5 justify-center items-center xl:space-x-12 w-full max-w-7xl">
        <div className="xl:w-1/2 w-full flex flex-col justify-center xl:items-start items-center xl:text-left text-center">
          <h2 className="text-2xl font-semibold text-red-600 dark:text-amber-500 mb-4">
            About Me
          </h2>
          <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Anwar Mohammadi
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-justify mb-8">
            Hi, I’m Mohammad Anwar, a passionate web developer from Kabul with over 4 years of experience building responsive and dynamic web applications. I specialize in frontend development using React and Tailwind CSS, with a strong background in backend technologies like Django and Node.js. I hold a Bachelor's degree in Computer Science from Kabul Polytechnic University. I love crafting clean, user-friendly interfaces and continuously learning new technologies to enhance my skills.
          </p>

          <a
            href="/path-to-your-resume.pdf"
            download="AnwarMohammadi_Resume.pdf"
            className="px-6 py-3 bg-red-600 dark:bg-amber-500 text-white font-semibold rounded-lg hover:bg-red-700 dark:hover:bg-amber-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="xl:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 xl:mb-0">
          <div className="border h-full flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-md">
            <span className="text-gray-400 dark:text-gray-600">Image 1</span>
          </div>
          <div className="border h-full flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-md">
            <span className="text-gray-400 dark:text-gray-600">Image 2</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto ">
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-center">
          Offering professional and reliable services to meet your needs.
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          {services.map((service, index) => (
            <div className="group p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg hover:scale-105 transform transition-transform duration-300" key={index}>
              <div className="flex items-center justify-center w-16 h-16 bg-red-600 dark:bg-amber-500 rounded-full shadow-md mb-3 transition duration-300 group-hover:bg-amber-500">
                {service.icon}
              </div>
              <h4 className="text-lg text-gray-800 dark:text-white font-semibold text-center">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <NavigationCircle section={"about"} />
    </div>
  );
};

export default About;
