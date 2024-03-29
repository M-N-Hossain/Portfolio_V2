import React from "react";
import "../styles/contact.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <p className="firstText">CONTACT</p>
      <h2>Don't be shy! Hit me up!</h2>
      <ArrowDownwardIcon className="arrow" />

      <div className="contactDetails">
        <div className="inner">
          <MapIcon className="icon" />
          <div className="details">
            <p className="text">Location</p>
            <p>Copenhagen, Denmark</p>
          </div>
        </div>
        <div className="inner">
          <MailIcon className="icon" />
          <div className="details">
            <p className="text">Mail</p>
            <a href="mailto:nayeemhossain859@gmail.com">
              nayeemhossain859@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
