import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../constants";
import "../styles/education.css";

export default function Education() {
  return (
    <div className="education" id="education">
      <h2 className="">Education.</h2>

      <div className="educationList">
        <VerticalTimeline lineColor="#e6e5e5">
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#f5f5f5", fontSize: "22px" }}
              contentArrowStyle={{ borderRight: "10px solid  #f5f5f5" }}
              date={edu.date}
              iconStyle={{ background: edu.iconBg, color: "#fff" }}
              icon={
                <div className="iconDiv">
                  <img src={edu.icon} alt={edu.school} className="icon" />
                </div>
              }
            >
              <div>
                <h3 className="companyTitle">{edu.title}</h3>
                <p className="compnayName">{edu.school}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
