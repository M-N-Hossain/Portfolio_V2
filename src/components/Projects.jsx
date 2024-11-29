import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import "../styles/projects.css";
import Project from "./Project";

export default function Projects({ isProjectShowing, handleProjectShowing }) {
  function handleClick() {
    console.log("first");
  }
  function selectProjects(index) {
    switch (index) {
      case 0:
        return "Frontend";
      case 1:
        return "Backend";
      case 2:
        return "Full-Stack";
      default:
        break;
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (
      project.name.toLocaleLowerCase() ===
      "Real-time Weather Application".toLocaleLowerCase()
    ) {
      return project;
    } else if (
      project.name.toLocaleLowerCase() === "Documentation".toLocaleLowerCase()
    ) {
      return project;
    } else if (
      project.name.toLocaleLowerCase() === "Grocery Shop".toLocaleLowerCase()
    ) {
      return project;
    } else {
      return false;
    }
  });

  return (
    <div className="projects" id="projects">
      <p className="firstText">PROJECTS.</p>
      <p className="secText">Each project is a unique piece of development.</p>

      {filteredProjects.map((project, index) => {
        const category = selectProjects(index);
        return (
          <React.Fragment key={index}>
            <Project
              project={project}
              className={index % 2 === 0 ? "project" : "projectReverse"}
            />
            <span style={{ fontWeight: "bold", marginTop: "12px" }}>
              For more {category} projects, &nbsp;
              <Link
                to="/projects"
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => handleProjectShowing(category)}
              >
                click here
              </Link>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}
