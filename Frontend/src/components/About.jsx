import React, { useEffect, useState } from "react";
import NavigationCircle from "./NavigationCircle";
import { motion } from "framer-motion";
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import { fadeIn } from "../utils/variants";
import axios from "axios";
import { toast } from "react-toastify";

const About = () => {
  const [about, setAbout] = useState(null);
  const [fetching, setFetching] = useState(false);

  const fetchAbout = async () => {
    setFetching(true);
    try {
      const res = await axios.get("http://localhost:5000/api/about");
      console.log("About data:", res.data);

      // Handle array or single object
      if (Array.isArray(res.data) && res.data.length > 0) {
        setAbout(res.data[0]);
      } else if (res.data) {
        setAbout(res.data);
      } else {
        setAbout(null);
      }
    } catch (err) {
      console.error("Error fetching About info:", err);
      toast.error("Failed to fetch About info!");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  if (fetching) return <p>Loading About info...</p>;
  if (!about) return <p>No About info available.</p>;

  return (
    <div
      id="about"
      className="flex w-full min-h-screen flex-col justify-center items-center px-4 xl:py-0 py-10 transition-colors duration-500"
    >
      <div className="flex flex-col xl:flex-row p-5 justify-center items-center xl:space-x-12 w-full max-w-7xl">
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
            {about?.name || "Mohammad Anwar"}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-justify mb-8">
            {about?.story || "No story available."}
          </p>

          <a
            href={about?.resume ? `http://localhost:5000${about.resume}` : "#"}
            download="AnwarMohammadi_Resume.pdf"
            className="px-6 py-3 border border-red-600 dark:border-amber-500 text-red-600 hover:text-white dark:text-white font-semibold rounded-lg hover:bg-red-700 dark:hover:bg-amber-600 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        <div className="xl:w-1/2 w-full flex flex-col gap-5 mb-8 xl:mb-0">
          <div className="flex gap-2 md:gap-10 h-auto md:h-[550px]">
            <div className="flex flex-col items-center">
              <motion.div
                variants={fadeIn("down", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex justify-center mb-8 rounded-lg relative"
              >
                <img
                  src={
                    about?.image1
                      ? `http://localhost:5000${about.image1}`
                      : image1
                  }
                  alt="logo"
                  className="md:h-[450px] w-[350px] rounded-lg object-cover"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="flex justify-center items-center p-5 border border-amber-500 h-[130px] w-full rounded-lg text-gray-700 dark:text-gray-300 transition-colors duration-500"
              >
                <span className="text-7xl w-1/2 flex justify-center items-center text-red-600 dark:text-amber-500 font-semibold">
                  + {about?.experienceYears ?? 2}
                </span>
                <span className="text-xl text-red-600 w-1/2 dark:text-white font-bold">
                  Years Of experience
                </span>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center items-center rounded-lg"
            >
              <img
                src={
                  about?.image2
                    ? `http://localhost:5000${about.image2}`
                    : image2
                }
                alt="logo"
                className="md:h-[380px] w-[290px] rounded-lg object-cover"
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
