import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useScrollManager from "../hooks/useScrollManager";
import "../styles/navbar.css";

export default function Navbar({ isAllProjectNotShowing }) {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollDirection, scrollToTop } = useScrollManager();

  // Track active section for navigation highlighting (only on home page)
  const sectionIds = [
    "heroSection",
    "aboutMe",
    "experience",
    "projects",
    "skills",
    "contact",
  ];
  const activeSection =
    location.pathname === "/" && !isScrolling
      ? useIntersectionObserver(sectionIds)
      : "";

  // Debug logging (remove in production)
  useEffect(() => {
    if (location.pathname === "/" && activeSection) {
      console.log("Active section:", activeSection);
    }
  }, [activeSection, location.pathname]);

  const burgerMenuOpen = () => {
    setIsMenuIconShowing(true);
  };

  const burgerMenuClose = () => {
    setIsMenuIconShowing(false);
  };

  // Handle scroll animation state
  const handleScrollStart = () => {
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    setTimeout(() => {
      setIsScrolling(false);
    }, 600); // Wait for scroll animation to complete
  };

  // Memoize nav link props to prevent unnecessary re-renders
  const navLinkProps = {
    smooth: true,
    offset: -80,
    duration: 500,
    spy: true,
    hashSpy: true,
    onClick: (e) => {
      handleScrollStart();
      burgerMenuClose();
      setTimeout(handleScrollEnd, 100);
    },
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuIconShowing(false);
  }, [location.pathname]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on home page, scroll to top smoothly
      scrollToTop();
    } else {
      // Navigate to home page
      navigate("/");
    }
  };

  return (
    <nav className="navbar-enhanced">
      <a href="/" onClick={handleHomeClick} className="name">
        Md Nayeem Hossain
      </a>
      {isAllProjectNotShowing && (
        <>
          <div
            className="burgerMenuIcons"
            onClick={isMenuIconShowing ? burgerMenuClose : burgerMenuOpen}
          >
            <i
              className={isMenuIconShowing ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <div className={isMenuIconShowing ? "links active" : "links"}>
            <ScrollLink
              {...navLinkProps}
              className={
                activeSection === "heroSection" ? "nav-link-active" : "nav-link"
              }
              to="heroSection"
            >
              Home
            </ScrollLink>

            <ScrollLink
              {...navLinkProps}
              className={
                activeSection === "aboutMe" ? "nav-link-active" : "nav-link"
              }
              to="aboutMe"
            >
              About
            </ScrollLink>

            <ScrollLink
              {...navLinkProps}
              className={
                activeSection === "experience" ? "nav-link-active" : "nav-link"
              }
              to="experience"
            >
              Work
            </ScrollLink>

            <ScrollLink
              {...navLinkProps}
              className={
                activeSection === "projects" ? "nav-link-active" : "nav-link"
              }
              to="projects"
            >
              Projects
            </ScrollLink>

            <ScrollLink
              {...navLinkProps}
              className={
                activeSection === "skills" ? "nav-link-active" : "nav-link"
              }
              to="skills"
            >
              Skills
            </ScrollLink>

            <ScrollLink
              {...navLinkProps}
              className={
                activeSection === "contact" ? "nav-link-active" : "nav-link"
              }
              to="contact"
            >
              Contact
            </ScrollLink>
          </div>
        </>
      )}
    </nav>
  );
}
