import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { featuredProjects } from "../constants";
import "../styles/projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("web");

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="projects-showcase" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcase of my best work in web and mobile development
        </p>
      </motion.div>

      <motion.div
        className="category-filter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <button
          className={`filter-btn ${activeCategory === "web" ? "active" : ""}`}
          onClick={() => setActiveCategory("web")}
        >
          <span className="filter-icon">🌐</span>
          Web Applications
          <span className="project-count">({featuredProjects.web.length})</span>
        </button>
        <button
          className={`filter-btn ${
            activeCategory === "mobile" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("mobile")}
        >
          <span className="filter-icon">📱</span>
          Mobile Apps
          <span className="project-count">
            ({featuredProjects.mobile.length})
          </span>
        </button>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={categoryVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={activeCategory}
      >
        {featuredProjects[activeCategory].map((project, index) => (
          <motion.div
            key={project.id}
            variants={projectVariants}
            className="project-card-container"
          >
            <ProjectCard project={project} index={index} isHomepage={true} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="projects-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="cta-text">Interested in seeing more of my work?</p>
        <Link to="/projects" className="cta-button">
          View All Projects
          <span className="cta-arrow">→</span>
        </Link>
      </motion.div>
    </div>
  );
}
