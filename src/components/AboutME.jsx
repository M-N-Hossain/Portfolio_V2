import React from "react";
import "../styles/aboutMe.css";
import RoundedText from "./RoundedText";

export default function AboutME() {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="imgContainer"></div>
      <div className="infoContainer">
        <p className="firstText">ABOUT ME</p>
        <h3>A dedicated programmer.</h3>
        <h3>Based in Copenhagen, Denmark 📍</h3>
        <p className="secText">
          I'm a determined Bangladeshi boy following my dream to be an efficient
          software developer. With a passion for coding, I've honed my skills in
          Java, JavaScript, and TypeScript and I'm well-equipped with frameworks
          like Spring Boot, React, React Native, and Express.js in the Node
          environment. The best qualities I have are I am a quick learner and a
          hardworking person. Because of my unwavering passion for technology, I
          am always ready to learn and explore technologies and my hardworking
          mindset allows me to adapt and manage any situation openly.
        </p>
      </div>
      <RoundedText />
    </div>
  );
}
