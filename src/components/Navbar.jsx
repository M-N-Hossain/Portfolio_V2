import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/navbar.css";

export default function Navbar({ isAllProjectNotShowing }) {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);
  const navigate = useNavigate();

  const burgerMenuOpen = () => {
    setIsMenuIconShowing(true);
  };

  const burgerMenuClose = () => {
    setIsMenuIconShowing(false);
  };

  return (
    <nav>
      <a
        onClick={() => {
          console.log("first");
          navigate("/");
        }}
        className="name"
      >
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
              activeClass="active"
              to="heroSection"
              smooth={true}
              offset={-200}
              duration={100}
              onClick={burgerMenuClose}
            >
              Home
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="aboutMe"
              smooth={true}
              offset={isMenuIconShowing ? -100 : -240}
              duration={100}
              onClick={burgerMenuClose}
            >
              About
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="experience"
              smooth={true}
              offset={-100}
              duration={100}
              onClick={burgerMenuClose}
            >
              Work
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="projects"
              smooth={true}
              offset={-120}
              duration={100}
              onClick={burgerMenuClose}
            >
              Projects
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="skills"
              smooth={true}
              offset={-120}
              duration={100}
              onClick={burgerMenuClose}
            >
              Skills
            </ScrollLink>

            <ScrollLink
              activeClass="active"
              to="contact"
              smooth={true}
              offset={-200}
              duration={100}
              onClick={burgerMenuClose}
            >
              Contact
            </ScrollLink>
          </div>
        </>
      )}
    </nav>
  );
}
