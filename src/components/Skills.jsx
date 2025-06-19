import React from "react";
import "../styles/skills.css";
import Tech from "./Tech";

import { technologies } from "../constants";

export default function Skills() {
  // Flatten all technologies from all categories into a single array
  const allTechnologies = Object.values(technologies).flat();

  return (
    <div className="skills" id="skills">
      <p className="title">SKILLS.</p>
      <p className="text">The skills, tools and technologies</p>
      <p className="text">I am really good at:</p>
      <div className="techStack">
        {allTechnologies.map((technology, index) => (
          <Tech key={index} imgUrl={technology.icon} name={technology.name} />
        ))}
      </div>
    </div>
  );
}
