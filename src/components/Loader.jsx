import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-40 grid place-items-center">
      <img src="images/loading-gif-1.gif" alt="" className="w-32" />
    </div>
  );
};

export default Loader;
