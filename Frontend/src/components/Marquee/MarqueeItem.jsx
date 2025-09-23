import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-32 w-[180px] pr-20 object-contain"
              src={image}
              key={index}
              alt={`Image ${index + 1}`}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-32 w-[180px] pr-20 object-contain"
              src={image}
              key={index}
              alt={`Image ${index + 1}`}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
