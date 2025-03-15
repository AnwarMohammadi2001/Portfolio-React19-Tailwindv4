import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-amber-50 dark:bg-zinc-900 z-40 grid place-items-center ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src="images/loading-gif-1.gif" alt="" className="w-32" />
    </div>
  );
};

export default Loader;
