import React from "react";
import "../styles/projects.css";
import { projects } from "../constants";
import GitHub from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Project = ({ project, className }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className={className}
    >
      <div className="websiteImg">
        <img src={project.image} alt="" />
      </div>
      <div className="websiteInfo">
        <h2>{project.name}</h2>
        <p className="desc">{project.description}</p>
        {project.techs.map((tech, index) => (
          <span key={index}>#{tech.name}</span>
        ))}
        <div className="links">
          <a href={project.source_code_link} target="blnk">
            <span>Code</span>
            <GitHub />
          </a>
          {project.wesite_link && (
            <a href={project.wesite_link} target="blank">
              <span>Live Demo</span>
              <OpenInNewIcon />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <p className="firstText">PROJECTS.</p>
      <p className="secText">Each project is a unique piece of development.</p>
      {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          className={index % 2 === 0 ? "project" : "projectReverse"}
        />
      ))}
    </div>
  );
}
