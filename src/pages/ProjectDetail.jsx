import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BuildIcon from "@mui/icons-material/Build";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../constants";
import "../styles/project-detail.css";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);

      // Find related projects (same category or type)
      const related = projects
        .filter(
          (p) =>
            p.id !== projectId &&
            (p.category === foundProject.category ||
              p.type === foundProject.type)
        )
        .slice(0, 3);
      setRelatedProjects(related);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="project-not-found">
        <Navbar />
        <div className="not-found-content">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="back-link">
            ← Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>{project.name} - Md Nayeem Hossain | Project Case Study</title>
        <meta name="description" content={project.shortDescription} />
        <meta
          property="og:title"
          content={`${project.name} - Project Case Study`}
        />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:image" content={project.images[0]} />
      </Helmet>

      <Navbar />

      <div className="project-detail-page">
        {/* Back Navigation */}
        <motion.div
          className="back-navigation"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowBackIcon />
            Back
          </button>
          <nav className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/projects">Projects</Link> /{" "}
            {project.name}
          </nav>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="project-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="project-meta" variants={itemVariants}>
            <div className="meta-tags">
              <span className={`project-category ${project.category}`}>
                <CategoryIcon />
                {project.category}
              </span>
              <span className={`project-type ${project.type}`}>
                {project.type}
              </span>
              <span className="project-date">
                <CalendarTodayIcon />
                {new Date(project.dateCompleted).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>
          </motion.div>

          <motion.h1 className="project-title" variants={itemVariants}>
            {project.name}
          </motion.h1>

          <motion.p className="project-subtitle" variants={itemVariants}>
            {project.shortDescription}
          </motion.p>

          <motion.div className="project-actions" variants={itemVariants}>
            {project.website_link && (
              <a
                href={project.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn primary"
              >
                <OpenInNewIcon />
                View Live Demo
              </a>
            )}
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn secondary"
            >
              <GitHubIcon />
              Source Code
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <LazyLoadImage
            src={project.images[0]}
            alt={project.name}
            className="hero-image"
            effect="blur"
          />
        </motion.div>

        {/* Project Content */}
        <motion.div
          className="project-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overview */}
          <motion.section className="content-section" variants={itemVariants}>
            <h2 className="section-title">
              <LightbulbIcon />
              Project Overview
            </h2>
            <div className="section-content">
              <p className="overview-text">{project.description}</p>
              {project.detailedDescription && (
                <div className="detailed-description">
                  {project.detailedDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              )}
            </div>
          </motion.section>

          {/* Problem Solved */}
          {project.problemSolved && (
            <motion.section className="content-section" variants={itemVariants}>
              <h2 className="section-title">
                <BuildIcon />
                Problem & Solution
              </h2>
              <div className="section-content">
                <p>{project.problemSolved}</p>
              </div>
            </motion.section>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <motion.section className="content-section" variants={itemVariants}>
              <h2 className="section-title">
                <CodeIcon />
                Key Features
              </h2>
              <div className="section-content">
                <ul className="features-list">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}

          {/* Technical Stack */}
          <motion.section className="content-section" variants={itemVariants}>
            <h2 className="section-title">
              <CodeIcon />
              Technical Stack
            </h2>
            <div className="section-content">
              <div className="tech-grid">
                {project.techs.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Challenges & Solutions */}
          {project.challenges && (
            <motion.section className="content-section" variants={itemVariants}>
              <h2 className="section-title">
                <BuildIcon />
                Challenges & Solutions
              </h2>
              <div className="section-content">
                <div className="challenges-grid">
                  {project.challenges.map((item, index) => (
                    <div key={index} className="challenge-item">
                      <div className="challenge">
                        <h4>Challenge:</h4>
                        <p>{item.challenge}</p>
                      </div>
                      <div className="solution">
                        <h4>Solution:</h4>
                        <p>{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Impact & Results */}
          {project.impact && (
            <motion.section className="content-section" variants={itemVariants}>
              <h2 className="section-title">
                <TrendingUpIcon />
                Impact & Results
              </h2>
              <div className="section-content">
                <p>{project.impact}</p>
              </div>
            </motion.section>
          )}

          {/* Learning Outcomes */}
          {project.learningOutcomes && (
            <motion.section className="content-section" variants={itemVariants}>
              <h2 className="section-title">
                <SchoolIcon />
                Learning Outcomes
              </h2>
              <div className="section-content">
                <ul className="learning-list">
                  {project.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="learning-item">
                      <span className="learning-bullet">🎯</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.section
            className="related-projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Related Projects</h2>
            <div className="related-grid">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="related-card"
                >
                  <LazyLoadImage
                    src={relatedProject.images[0]}
                    alt={relatedProject.name}
                    className="related-image"
                    effect="blur"
                  />
                  <div className="related-content">
                    <h3>{relatedProject.name}</h3>
                    <p>{relatedProject.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.div
          className="project-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Interested in working together?</h2>
          <p>Let's discuss how I can help bring your project to life</p>
          <Link to="/#contact" className="contact-btn">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </>
  );
}
