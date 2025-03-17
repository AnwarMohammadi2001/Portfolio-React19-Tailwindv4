import React from "react";
import NavigationCircle from "./NavigationCircle";

const About = () => {
  return (
    <div
      id="about"
      className="flex min-h-screen border flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <h2 className="text-4xl font-light xl:mt-0 mb-12 mt-12 text-red-600 dark:text-amber-500">
        About Me
      </h2>
      <div className="flex flex-col xl:flex-row justify-center items-center xl:space-x-12 w-full max-w-6xl">
        {/* First Section: Image */}
        <div className="xl:w-1/2 w-full flex justify-center xl:justify-end mb-8 xl:mb-0">
          <img
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="About Me"
            className="rounded-full w-64 h-64 xl:w-80 xl:h-80 object-cover shadow-lg"
          />
        </div>

        {/* Second Section: Title, Story, and Resume Button */}
        <div className="xl:w-1/2 w-full flex flex-col justify-center xl:items-start items-center xl:text-left text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            John Doe
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Hi, I'm John Doe, a passionate software developer with over 5 years of experience in building web applications. I specialize in front-end development using React and have a strong background in back-end technologies like Node.js and Python. I love solving complex problems and creating user-friendly interfaces that make a difference.
          </p>
          <a
            href="/path-to-your-resume.pdf" // Replace with your resume path
            download="JohnDoe_Resume.pdf"
            className="px-6 py-3 bg-red-600 dark:bg-amber-500 text-white font-semibold rounded-lg hover:bg-red-700 dark:hover:bg-amber-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
      <NavigationCircle section={"about"} />
    </div>
  );
};

export default About;