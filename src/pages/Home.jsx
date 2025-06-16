import React from "react";
import AboutME from "../components/AboutME";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import useScrollRestoration from "../hooks/useScrollRestoration ";

export default function Home({ handleProjectShowing }) {
  useScrollRestoration(`scrollPosition-${window.location.pathname}`);

  return (
    <div>
      <Navbar isAllProjectNotShowing={true} />
      <Hero />
      <AboutME />
      <Experience />
      <Projects handleProjectShowing={handleProjectShowing} />
      <Skills />
      <Education />
    </div>
  );
}
