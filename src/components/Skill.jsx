import React from "react";
import Marquee from "./Marquee/Marquee";

const Skill = () => {
  return (
    <div
      id="#"
      className="flex max-w-[85%] mx-auto min-h-[400px] flex-col justify-center items-center px-4 xl:py-0 py-10"
    >
      <h2 className="text-4xl font-light xl:mt-0 mb-16 pt-24 text-red-600 dark:text-amber-500 ">
        Web Skill
      </h2>
      <Marquee />
    </div>
  );
};

export default Skill;
