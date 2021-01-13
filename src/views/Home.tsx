import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Resume from "../components/Resume";

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
