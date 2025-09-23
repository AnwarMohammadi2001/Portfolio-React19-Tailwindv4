import React, { useEffect, useState } from "react";
import { letters, professionTexts, aboutText, socialIcons } from "./data";
import { LuBookOpen } from "react-icons/lu";
import Navbar from "./Navbar";
import NavigationCircle from "./NavigationCircle";
import TextPressure from "./TextPressure";

const Hero = () => {
  const [hoverLetter, setHoverLetter] = useState(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextvisible, setTextvisible] = useState(false);
  const [roadImageOpacity, setRoadImageOpacity] = useState(0.5);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length;
        setCurrentText(professionTexts[currentIndex]);
        setIsRotating(false);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <Navbar />
      <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0 ">
        <h1 className="flex flex-col xl:space-y-8  text-red-600 dark:text-amber-500 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold">
          <div className="relative h-[250px] w-full md:w-[700px]">
            <TextPressure
              text="Hello!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#FD9900"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <span className="xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden text-center">
            I'm{" "}
            <span
              className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold transform origin-left transition-transform duration-200 ${
                isRotating ? "md:rotate-[100deg]" : "rotate-0"
              }`}
            >
              {currentText}
            </span>
            Web Developer
          </span>
        </h1>

        <div className="flex md:gap-12 gap-3  mr-auto md:relative absolute md:left-auto top-24 left-4 md:top-auto flex-col md:flex-row">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="xl:text-3xl md:text-2xl text-red-600 dark:text-amber-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="lg:w-[600px] md:w-[500px] w-[350px] absolute -z-10 left-1/2 -translate-x-1/2">
          <img
            src="images/road.png"
            alt="Road image"
            className="w-full mx-auto transition-opacity duration-300"
            style={{ opacity: roadImageOpacity }}
          />
          <span className="xl:text-xs md:text-[10px] text-[8px] font-bold tracking-wide text-red-600 dark:text-amber-500 absolute -top-5 xl:right-24 lg:right-28 md:right-16 right-10 rotate-[3.6deg] animate-bounce">
            Looking for new challenges
          </span>
        </div>
      </div>
      <NavigationCircle section={"home"} />
    </div>
  );
};

export default Hero;
