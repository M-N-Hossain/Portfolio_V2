import React, { useState } from "react";
import "../styles/navbar.css";

import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);

  return (
    <nav>
      <a href="#heroSection" className="name">
        Md Nayeem Hossain
      </a>
      <div
        className="burgerMenuIcons"
        onClick={() => {
          setIsMenuIconShowing(!isMenuIconShowing);
        }}
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
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="aboutMe"
          smooth={true}
          offset={-240}
          duration={100}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="experience"
          smooth={true}
          offset={-100}
          duration={100}
        >
          Work
        </Link>

        <Link
          activeClass="active"
          to="skills"
          smooth={true}
          offset={-120}
          duration={100}
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="projects"
          smooth={true}
          offset={-120}
          duration={100}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          offset={-200}
          duration={100}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
