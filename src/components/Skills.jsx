import React from "react";
import "../styles/skills.css";
import Tech from "./Tech";

import { technologies } from "../constants";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <p className="title">SKILLS</p>
      <p className="text">The skills, tools and technologies</p>
      <p className="text">I am really good at:</p>
      <div className="techStack">
        {technologies.map((technology, index) => (
          <Tech key={index} imgUrl={technology.icon} name={technology.name} />
        ))}
      </div>
    </div>
  );
}
