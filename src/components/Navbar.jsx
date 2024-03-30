import React, { useState } from "react";
import "../styles/navbar.css";

import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuIconShowing, setIsMenuIconShowing] = useState(false);

  const burgerMenuHandler = () => {
    setIsMenuIconShowing(!isMenuIconShowing);
  };

  return (
    <nav>
      <a href="#heroSection" className="name">
        Md Nayeem Hossain
      </a>
      <div className="burgerMenuIcons" onClick={burgerMenuHandler}>
        <i className={isMenuIconShowing ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={isMenuIconShowing ? "links active" : "links"}>
        <Link
          activeClass="active"
          to="heroSection"
          smooth={true}
          offset={-200}
          duration={100}
          onClick={burgerMenuHandler}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="aboutMe"
          smooth={true}
          offset={isMenuIconShowing ? -100 : -240}
          duration={100}
          onClick={burgerMenuHandler}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="experience"
          smooth={true}
          offset={-100}
          duration={100}
          onClick={burgerMenuHandler}
        >
          Work
        </Link>

        <Link
          activeClass="active"
          to="skills"
          smooth={true}
          offset={-120}
          duration={100}
          onClick={burgerMenuHandler}
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="projects"
          smooth={true}
          offset={-120}
          duration={100}
          onClick={burgerMenuHandler}
        >
          Projects
        </Link>

        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          offset={-200}
          duration={100}
          onClick={burgerMenuHandler}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
