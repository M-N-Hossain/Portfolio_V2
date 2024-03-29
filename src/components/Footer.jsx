import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="copywright">
        <p>Copywright© 2024. All rights are reserved.</p>
      </div>
      <div className="icons">
        <a href="https://github.com/M-N-Hossain" target="blank">
          <GitHubIcon style={{ fontSize: 35, marginRight: "5px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-nayeem-hossain-86702921b/"
          target="blank"
        >
          <LinkedInIcon style={{ fontSize: 35, marginRight: "5px" }} />
        </a>
      </div>
    </div>
  );
}
