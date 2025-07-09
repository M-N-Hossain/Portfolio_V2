import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/ME.jpg";
import { personalInfo } from "../constants";
import "../styles/hero.css";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("aboutMe");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 220;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div id="heroSection">
      <div className="heroSection">
        <motion.div
          className="myInfo"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="firstText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hey there! 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm {personalInfo.name}
          </motion.h1>

          <motion.div
            className="typewriter-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="secText">
              A passionate{" "}
              <span className="typewriter-text">
                <Typewriter
                  words={[
                    "Full-Stack Developer",
                    "Mobile App Developer",
                    "Web Developer",
                    "Software Engineer",
                    "Problem Solver",
                  ]}
                  loop="infinitely"
                  cursor
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </p>
          </motion.div>

          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button className="cta-primary" onClick={scrollToProjects}>
              View My Work
              <ArrowDownwardIcon className="cta-icon" />
            </button>

            <button className="cta-secondary" onClick={scrollToAbout}>
              About Me
            </button>

            <a
              href="/CV.pdf"
              className="cta-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon className="download-icon" />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="social-icon" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="social-icon" />
            </a>
            <a
              href={`mailto:${personalInfo.social.email}`}
              aria-label="Email Contact"
            >
              <EmailIcon className="social-icon" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="profile-container">
            <div className="profile-placeholder">
              <img
                src={profile}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="Profile"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
