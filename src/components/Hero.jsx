import React, { useEffect, useState } from "react";
import { letters, professionTexts, aboutText, socialIcons } from "./data";
import { LuBookOpen } from "react-icons/lu";
import Navbar from "./Navbar";
import NavigationCircle from "./NavigationCircle";

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
          <span className="flex mx-auto md:mx-0">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative"
                onMouseEnter={() => setHoverLetter(index)}
                onMouseLeave={() => setHoverLetter(null)}
              >
                {letter.char}
                <img
                  src={letter.img}
                  alt={`Hover image ${index + 1}`}
                  className={`
                  xl:h-36 h-24   absolute bottom-full -translate-x-1/2 ${
                    letter.rotate
                  } ${hoverLetter === index ? "visible" : "invisible"} 
                `}
                />
              </span>
            ))}
          </span>
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
        <button
          className="xl:w-[400px] md:w-[300px] w-[270px] bg-gray-200 mx-auto  md:py-1 py-0.5 md:px-4 px-2 xl:text-2xl md:text-xl text-base text-gray-900 tracking-widest rounded-r-4xl flex justify-between items-center md:mr-auto md:mx-0 ms-auto cursor-pointer"
          onClick={() => setTextvisible(!isTextvisible)}
          onMouseEnter={() => setRoadImageOpacity(0.8)}
          onMouseLeave={() => setRoadImageOpacity(0.5)}
        >
          {isTextvisible ? "Hide My Story" : "Read My Story"}{" "}
          <LuBookOpen className="" size={20} />
        </button>
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
          <div
  className={`xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-700 dark:text-gray-200 text-justify tracking-wide overflow-y-auto origin-top custom-scrollbar ${
    isTextvisible ? "max-h-[500px]" : "max-h-0"
  } transition-all duration-300 ease-in-out`}
  aria-hidden={!isTextvisible}
>
  <p className="xl:py-3 py-1 px-1 [&::first-letter]:text-[30px] [&::first-letter]:ml-5 [&::first-letter]:text-red-500">
    {aboutText}
  </p>
</div>
        </div>
      </div>
      <NavigationCircle section={"home"} />
    </div>
  );
};

export default Hero;
