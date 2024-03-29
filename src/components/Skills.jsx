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
        <Tech imgUrl={"../assets/tech/java.png"} name="Java" />
        <Tech imgUrl={"../assets/tech/javascript.png"} name="JavaScript" />
        <Tech imgUrl={"../assets/tech/typescript.png"} name="TypeScript" />
        <Tech imgUrl={"../assets/tech/reactjs.png"} name="React" />
        <Tech imgUrl={"../assets/tech/nodejs.png"} name="Node JS" />
        <Tech imgUrl={"../assets/tech/spring.png"} name="Spring Boot" />
        <Tech imgUrl={"../assets/tech/reactNative.png"} name="React Native" />
        <Tech imgUrl={"../assets/tech/html.png"} name="HTML" />
        <Tech imgUrl={"../assets/tech/css.png"} name="CSS" />
        <Tech imgUrl={"../assets/tech/mongodb.png"} name="MongoDB" />
        <Tech imgUrl={"../assets/tech/mysql.png"} name="MySQL" />
        <Tech imgUrl={"../assets/tech/redux.png"} name="Redux" />
        <Tech imgUrl={"../assets/tech/sqlite.png"} name="SqLite" />
        <Tech imgUrl={"../assets/tech/github.png"} name="GitHub" />
        <Tech imgUrl={"../assets/tech/aws.png"} name="AWS" />
        <Tech imgUrl={"../assets/tech/azure.png"} name="Azure" />
        <Tech imgUrl={"../assets/tech/docker.png"} name="Docker" />
      </div>
    </div>
  );
}
