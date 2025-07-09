import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button onClick={handleLogoClick} className="nav-logo">
          Md Nayeem Hossain
        </button>

        <div
          className="burger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {isHomePage ? (
            // Home page navigation with scroll links
            <>
              <ScrollLink
                activeClass="active"
                to="heroSection"
                smooth={true}
                offset={-200}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                Home
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="aboutMe"
                smooth={true}
                offset={-220}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                About
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="experience"
                smooth={true}
                offset={-100}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                Experience
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="projects"
                smooth={true}
                offset={-80}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                Projects
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="skills"
                smooth={true}
                offset={-120}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                Skills
              </ScrollLink>

              <ScrollLink
                activeClass="active"
                to="contact"
                smooth={true}
                offset={-100}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                Contact
              </ScrollLink>
            </>
          ) : (
            // Other pages navigation with regular links
            <>
              <Link
                to="/"
                onClick={closeMenu}
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>

              <Link
                to="/projects"
                onClick={closeMenu}
                className={`nav-link ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
              >
                All Projects
              </Link>

              <ScrollLink
                activeClass="active"
                to="project-contact"
                smooth={true}
                offset={-100}
                duration={100}
                onClick={closeMenu}
                className="nav-link"
              >
                Contact
              </ScrollLink>
            </>
          )}

          <Link to="/projects" className="nav-cta" onClick={closeMenu}>
            View Work
          </Link>
        </div>
      </div>
    </nav>
  );
}
