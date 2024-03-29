import React from "react";
import "../styles/skills.css";
import Tech from "./Tech";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <p className="title">SKILLS</p>
      <p className="text">The skills, tools and technologies</p>
      <p className="text">I am really good at:</p>
      <div className="techStack">
        <Tech imgUrl={"src/assets/tech/java.png"} name="Java" />
        <Tech imgUrl={"src/assets/tech/javascript.png"} name="JavaScript" />
        <Tech imgUrl={"src/assets/tech/typescript.png"} name="TypeScript" />
        <Tech imgUrl={"src/assets/tech/reactjs.png"} name="React" />
        <Tech imgUrl={"src/assets/tech/nodejs.png"} name="Node JS" />
        <Tech imgUrl={"src/assets/tech/spring.png"} name="Spring Boot" />
        <Tech imgUrl={"src/assets/tech/reactNative.png"} name="React Native" />
        <Tech imgUrl={"src/assets/tech/html.png"} name="HTML" />
        <Tech imgUrl={"src/assets/tech/css.png"} name="CSS" />
        <Tech imgUrl={"src/assets/tech/mysql.png"} name="MySQL" />
        <Tech imgUrl={"src/assets/tech/mongodb.png"} name="MongoDB" />
        <Tech imgUrl={"src/assets/tech/redux.png"} name="Redux" />
        <Tech imgUrl={"src/assets/tech/sqlite.png"} name="SqLite" />
        <Tech imgUrl={"src/assets/tech/github.png"} name="GitHub" />
        <Tech imgUrl={"src/assets/tech/aws.png"} name="AWS" />
        <Tech imgUrl={"src/assets/tech/azure.png"} name="Azure" />
        <Tech imgUrl={"src/assets/tech/docker.png"} name="Docker" />
      </div>
    </div>
  );
}
