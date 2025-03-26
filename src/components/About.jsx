import React from "react";
import NavigationCircle from "./NavigationCircle";
import { motion } from "framer-motion";
import image1 from "../assets/images/cover1.png";
import image2 from "../assets/images/cover1.png";
import { fadeIn } from "../utils/variants";

const About = () => {
  return (
    <div
      id="about"
      className="flex w-full min-h-screen  flex-col justify-center items-center px-4 xl:py-0 py-10 transition-colors duration-500"
    >
      <div className="flex flex-col xl:flex-row  p-5 justify-center items-center xl:space-x-12 w-full max-w-7xl">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="xl:w-1/2 w-full flex flex-col justify-center xl:items-start items-center xl:text-left text-center"
        >
          <h2 className="text-2xl font-semibold text-red-600 dark:text-amber-500 mb-4">
            About Me
          </h2>
          <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Anwar Mohammadi
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-justify mb-8">
            Hi, I’m Mohammad Anwar, a passionate web developer from Kabul with
            over 4 years of experience building responsive and dynamic web
            applications. I specialize in frontend development using React and
            Tailwind CSS, with a strong background in backend technologies like
            Django and Node.js. I hold a Bachelor's degree in Computer Science
            from Kabul Polytechnic University. I love crafting clean,
            user-friendly interfaces and continuously learning new technologies
            to enhance my skills.
          </p>

          <a
            href="/path-to-your-resume.pdf"
            download="AnwarMohammadi_Resume.pdf"
            className="px-6 py-3 bg-red-600 dark:bg-amber-500 text-white font-semibold rounded-lg hover:bg-red-700 dark:hover:bg-amber-600 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
        <div className="xl:w-1/2 w-full flex flex-col gap-10 mb-8 xl:mb-0">
          <div className="flex gap-16 h-[550px]">
            <div className="flex flex-col items-center">
              <motion.div
                variants={fadeIn("down", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex justify-center  mb-8 rounded-lg  relative"
              >
                <img
                  src={image1}
                  alt="logo"
                  className="h-[380px] w-[350px] rounded-lg"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className=" flex justify-center items-center p-5 bg-gray-100 dark:bg-gray-600 h-[130px] w-full rounded-lg text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                <span className="text-7xl w-1/2  flex justify-center items-center text-red-600 dark:text-amber-500 font-semibold">
                  25
                </span>
                <span className="text-xl  w-1/2 dark:text-black font-bold">
                  Years Of experience
                </span>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center   items-center rounded-lg"
            >
              <img
                src={image2}
                alt="logo"
                className="h-[380px] w-[290px] rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <NavigationCircle section={"about"} />
    </div>
  );
};

export default About;
