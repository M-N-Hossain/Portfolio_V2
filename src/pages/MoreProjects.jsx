import React from "react";
import Project from "../components/Project";
import { projects } from "../constants";
import "../styles/projects.css";
import Navbar from "../components/Navbar";

export default function MoreProjects({ projectCategory }) {
  return (
    <>
      <Navbar isAllProjectNotShowing={false} />

      <div className="projects" id="projects">
        <p
          className="firstText"
          style={{ position: "relative", top: "65px", marginBottom: "5%" }}
        >
          {projectCategory.toUpperCase()} PROJECTS.
        </p>
        <p className="secText">
          Each project is a unique piece of development.
        </p>
        {projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            className={index % 2 === 0 ? "project" : "projectReverse"}
          />
        ))}
      </div>
    </>
  );
}
