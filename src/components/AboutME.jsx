import React from "react";
import "../styles/aboutMe.css";
import RoundedText from "./RoundedText";

export default function AboutME() {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="imgContainer"></div>
      <div className="infoContainer">
        <p className="firstText">ABOUT ME.</p>
        <h3>A dedicated programmer.</h3>
        <h3>Based in Copenhagen, Denmark 📍</h3>
        <p className="secText">
          {/* I'm a determined Bangladeshi fellow following my dream to be an
          efficient software developer. With a passion for coding, I've honed my
          skills in Java, JavaScript, and TypeScript and I'm well-equipped with
          frameworks like Spring Boot, React, React Native, and Express.js in
          the Node environment. The best qualities I have are being a quick
          learner, a hardworking person, and dedicated toward my
          responsibilities. I'm always ready to learn and explore new technologies
          and my hardworking mindset allows me to adapt and manage any situation
          openly. */}
          I'm a determined Bangladeshi fellow following my dream of being an
          efficient software developer, passionate about building efficient and
          scalable web and mobile applications. I love to continuously learn and
          explore new technologies which makes me confident in building and
          optimizing end-to-end applications that serve both business and user
          needs. My journey has been guided by curiosity, adaptability, and a
          commitment to growth, which I apply to every project I take on.
        </p>
      </div>
      <RoundedText />
    </div>
  );
}
