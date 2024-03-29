import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../styles/experience.css";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f5f5f5",
        fontSize: "25px",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #f5f5f5" }}
      date={experience.date}
      iconStyle={{ background: "#f5f5f5", color: "#f5f5f5" }}
      icon={
        <div className="iconDiv">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="icon"
          />
        </div>
      }
    >
      <div>
        <h3 className="companyTitle">{experience.title}</h3>
        <p className="compnayName">{experience.company_name}</p>
      </div>

      <ul className="points">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <p className="">What I have done so far</p>
      <h2 className="">Work Experience.</h2>
      <div className="experienceList">
        <VerticalTimeline lineColor="#e6e5e5">
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
