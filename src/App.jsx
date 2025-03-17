import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 3000 with your desired loading time in milliseconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="dark:bg-zinc-900 bg-amber-50 w-full min-h-screen  isolate  transition-colors duration-500 overflow-x-hidden">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Hero />
          <About />
          <Services />
          <Skill />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
