import React from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Header from "../components/sections/Header";
import Resume from "../components/sections/Resume";

const HomeView = () => {
  return (
    <>
      <Header />
      <About />
      <Resume />
      {/* <Skills />
      <Projects />
      <Posts /> */}
      <Contact />
    </>
  );
};

export default HomeView;
