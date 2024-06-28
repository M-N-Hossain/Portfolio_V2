import React, { useState } from "react";
import "../styles/navbar.css";

import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);

  const burgerMenuOpen = () => {
    setIsMenuIconShowing(true);
  };

  const burgerMenuClose = () => {
    setIsMenuIconShowing(false);
  };

  return (
    <nav>
      <a href="#heroSection" className="name">
        Md Nayeem Hossain
      </a>
      <div
        className="burgerMenuIcons"
        onClick={isMenuIconShowing ? burgerMenuClose : burgerMenuOpen}
      >
        <i className={isMenuIconShowing ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={isMenuIconShowing ? "links active" : "links"}>
        <Link
          activeClass="active"
          to="heroSection"
          smooth={true}
          offset={-200}
          duration={100}
          onClick={burgerMenuClose}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="aboutMe"
          smooth={true}
          offset={isMenuIconShowing ? -100 : -240}
          duration={100}
          onClick={burgerMenuClose}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="experience"
          smooth={true}
          offset={-100}
          duration={100}
          onClick={burgerMenuClose}
        >
          Work
        </Link>

        <Link
          activeClass="active"
          to="skills"
          smooth={true}
          offset={-120}
          duration={100}
          onClick={burgerMenuClose}
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="projects"
          smooth={true}
          offset={-120}
          duration={100}
          onClick={burgerMenuClose}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          offset={-200}
          duration={100}
          onClick={burgerMenuClose}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
