import React, { useEffect, useState } from "react";
import { skillCards } from "./data";

import NavigationCircle from "./NavigationCircle";

const Services = () => {
  const [hoverCardIndex, setHoverCardIndex] = useState(null);
  const [islargerScreen, setIsLatgerScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLatgerScreen(window.innerWidth > 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);
  const getPosition = (card) => {
    const position = islargerScreen
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === "bottom" ? "bottom-0" : "top-0";
  };
  const getHoverPosition = (card) => {
    const position = islargerScreen
      ? card.hoverPosition.large
      : card.hoverPosition.small;
    return position === "bottom" ? "bottom-full" : "top-full";
  };

  return (
    <div
      id="services"
      className="flex min-h-screen flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <h2 className="text-4xl font-light xl:mt-0 mb-32 mt-12 text-red-600 dark:text-amber-500 ">
        Skill-set
      </h2>
      <div className="w-full  lg:max-w-6xl md:[600px] flex flex-col gap-y-16 md:grid lg:grid-cols-3 grid-cols-1 lg:gap-12  xl:mb-0 mb-16 ">
        {skillCards.map((card, index) => (
          <div
            key={index}
            className="lg:max-w-[350px] lg:min-w-[350px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate"
            onMouseEnter={() => setHoverCardIndex(index)}
            onMouseLeave={() => setHoverCardIndex(null)}
          >
            <div className="p-3 bg-gray-200 dark:bg-stone-800 transition-colors duration-500">
              <span className="md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors duration-500">
                {card.icon}
              </span>
              <h3 className="md:text-2xl text-xl font-bold my-2 text-red-600 dark:text-amber-500 transition-colors duration-500">
                {card.title}
              </h3>
              <p className="text-gray-900 dark:text-white md:h-28 h-24 md:text-base text-sm font-light overflow-y-auto pr-2 transition-colors duration-500 custom-scrollbar">
                {card.description}
              </p>
            </div>

            <div
              className={`w-full absolute left-0 ${getPosition(
                card
              )} flex flex-col gap-y-5 py-2 md:py-4 transition-all duration-300 -z-10 ${
                hoverCardIndex === index && `${getHoverPosition(card)}`
              }`}
            >
              {card.tools && (
                <div className="flex flex-wrap justify-center  gap-3 px-3">
                  {card.tools.map((tool, tIndex) => (
                    <div
                      key={tIndex}
                      className="flex flex-col items-center justify-center gap-1 p-2 rounded-full border dark:border-amber-500 border-red-600 transition-colors duration-300"
                    >
                      <span className="text-2xl" style={{ color: tool.color }}>{tool.icon}</span>
                   
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <NavigationCircle section={"services"} />
    </div>
  );
};

export default Services;
