import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index, isHomepage = false }) {
  // Add safety checks for project data
  if (!project) {
    return null;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  // Safe access to project properties with defaults
  const projectImage = project.images && project.images.length > 0 ? project.images[0] : null;
  const projectTechs = project.techs || [];

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="project-image-container">
        {projectImage ? (
          <LazyLoadImage
            src={projectImage}
            alt={project.name || "Project"}
            className="project-image"
            effect="blur"
            loading="lazy"
          />
        ) : (
          <div className="project-image-placeholder">
            <span>No Image Available</span>
          </div>
        )}
        <div className="project-overlay">
          <div className="project-links">
            {project.website_link && (
              <a
                href={project.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live-demo"
                aria-label="View live demo"
              >
                <OpenInNewIcon />
              </a>
            )}
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link source-code"
                aria-label="View source code"
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <div className="project-meta">
            <span className={`project-category ${project.category || 'default'}`}>
              {project.category || 'General'}
            </span>
            <span className={`project-type ${project.type || 'web'}`}>
              {project.type || 'web'}
            </span>
          </div>
          <h3 className="project-title">{project.name || 'Untitled Project'}</h3>
        </div>

        <p className="project-description">
          {isHomepage 
            ? (project.shortDescription || project.description || 'No description available') 
            : (project.description || 'No description available')
          }
        </p>

        <div className="project-tech">
          {projectTechs.slice(0, 4).map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech.name || tech}
            </span>
          ))}
          {projectTechs.length > 4 && (
            <span className="tech-more">+{projectTechs.length - 4}</span>
          )}
        </div>

        <div className="project-actions">
          {project.id && (
            <Link to={`/project/${project.id}`} className="project-detail-link">
              Learn More
              <ArrowForwardIcon className="link-icon" />
            </Link>
          )}

          <div className="project-external-links">
            {project.website_link && (
              <a
                href={project.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link demo"
              >
                Live Demo
              </a>
            )}
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link code"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
