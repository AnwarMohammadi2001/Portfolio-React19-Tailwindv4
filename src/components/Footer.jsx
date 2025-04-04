import React from "react";
import { socialIcons } from "./data";

const Footer = () => {
  return (
    <footer
      className="bg-amber-50
     dark:bg-zinc-900 text-gray-300 py-6"
    >
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Mohammad Anwar</p>
        <p className="text-sm mt-2 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          Passionate web developer from Kabul, Afghanistan. I specialize in
          frontend technologies and enjoy building responsive and interactive
          web applications. Always eager to learn and grow through new
          challenges.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex md:gap-12 gap-3   ">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="xl:text-2xl md:text-xl text-red-600 dark:text-amber-500 dark:hover:text-white hover:text-gray-900 transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="text-sm mt-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
