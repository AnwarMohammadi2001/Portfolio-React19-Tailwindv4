import React, { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Particles from "./components/Particles";
import CurvedLoop from "./components/CurvedLoop";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen relative transition-colors duration-500 overflow-x-hidden">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          {/* Particles background */}
          <div className="fixed inset-0 bg-amber-50 dark:bg-stone-900  -z-10">
            <Particles
              particleColors={["#ffffff", "#ffffff"]} // سفید + مشکی
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Page Content */}
          <Hero />
          <About />
          <div className="relative">
            {/* <div className="absolute right-0 left-0 opacity-20">
              <CurvedLoop
                marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
                speed={3}
                curveAmount={500}
                direction="right"
                interactive={true}
                className="custom-text-style"
              />
            </div> */}

            <Services />
          </div>

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
