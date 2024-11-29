import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/hero.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div id="heroSection">
      <div className="heroSection">
        <div className="myInfo">
          <p className="firstText">Hey...!</p>
          <h1>This is Nayeem</h1>
          <p className="secText">
            A
            <Typewriter
              words={[
                " Web Developer",
                " Software Developer",
                " Full Stack Developer",
              ]}
              loop="infinitely"
              cursor
              typeSpeed={150}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </p>
          <div className="icons">
            <a href="https://github.com/M-N-Hossain" target="blank">
              <GitHubIcon style={{ fontSize: 35, marginRight: "5px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-nayeem-hossain-86702921b/"
              target="blank"
            >
              <LinkedInIcon style={{ fontSize: 35, marginRight: "5px" }} />
            </a>
          </div>
        </div>
        <div className="infoSnippet"></div>
      </div>
    </div>
  );
}
