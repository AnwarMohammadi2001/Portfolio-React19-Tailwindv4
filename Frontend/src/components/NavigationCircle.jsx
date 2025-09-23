import React from "react";

const NavigationCircle = ({ section }) => {
  return (
    <div className="h-[300px] w-[1px] bg-red-600 dark:bg-amber-500 hidden md:flex absolute right-12  flex-col justify-between items-center transition-colors duration-500  ">
      <div
        className={`w-5 aspect-square border bg-gray-200 border-red-600 dark:border-amber-500 rounded-full transition-colors duration-500 ${
          section === "home" ? "bg-red-600 dark:bg-amber-500" : "bg-gray300"
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border bg-gray-200 border-red-600 dark:border-amber-500 rounded-full transition-colors duration-500 ${
          section === "about" ? "bg-red-600 dark:bg-amber-500" : "bg-gray300"
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border bg-gray-200 border-red-600 dark:border-amber-500 rounded-full transition-colors duration-500 ${
          section === "services" ? "bg-red-600 dark:bg-amber-500" : "bg-gray300"
        }`}
      ></div>

      <div
        className={`w-5 aspect-square border bg-gray-200 border-red-600 dark:border-amber-500 rounded-full transition-colors duration-500 ${
          section === "projects" ? "bg-red-600 dark:bg-amber-500" : "bg-gray300"
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border bg-gray-200 border-red-600 dark:border-amber-500 rounded-full transition-colors duration-500 ${
          section === "contact" ? "bg-red-600 dark:bg-amber-500" : "bg-gray300"
        }`}
      ></div>
    </div>
  );
};

export default NavigationCircle;
